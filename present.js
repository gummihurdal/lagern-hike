/* Presentation mode.
   One tap starts it: goes fullscreen, turns the music on, and walks every frame
   in order without further input. Photos hold for PHOTO_HOLD; videos play right
   through and the next frame follows when they end, so nothing gets clipped.

   The tap matters — it's the user gesture that lets the browser play audio at
   all. Nothing here can start on its own, by design.
*/
(function () {
  const TITLE_HOLD = 6000;      // ms on the opening card
  const END_HOLD   = 9000;      // ms on the closing card
  const PHOTO_HOLD = 4800;      // ms a still stays on screen
  const SETTLE     = 620;       // ms allowed for the smooth scroll to land
  const VIDEO_CAP  = 30000;     // ms failsafe if a clip never fires 'ended'

  let frames = [];
  let running = false, paused = false;
  let idx = 0;
  let timer = null, tStart = 0, tLeft = 0, rafId = null;
  let cleanupVideo = null;

  /* ---------- controls ---------- */
  const bar = document.createElement('div');
  bar.id = 'pres-bar';
  bar.innerHTML =
    '<button id="pres-toggle" type="button">' +
      '<svg viewBox="0 0 24 24" aria-hidden="true">' +
        '<polygon id="pres-play" points="6,4 21,12 6,20"></polygon>' +
        '<g id="pres-stop"><rect x="6" y="5" width="4" height="14"></rect>' +
        '<rect x="14" y="5" width="4" height="14"></rect></g>' +
      '</svg><span id="pres-label">Play presentation</span></button>' +
    '<span id="pres-count" hidden></span>';
  const prog = document.createElement('div');
  prog.id = 'pres-progress'; prog.innerHTML = '<i></i>';
  document.body.appendChild(prog);
  const bead = prog.firstChild;
  const badge = document.createElement('div');
  badge.id = 'pres-paused'; badge.textContent = 'Paused'; badge.hidden = true;
  document.body.appendChild(badge);
  document.body.appendChild(bar);

  const btn   = bar.querySelector('#pres-toggle');
  const label = bar.querySelector('#pres-label');
  const count = bar.querySelector('#pres-count');

  document.addEventListener('frames-ready', () => { frames = window.FRAMES || []; });

  const titleCard = document.getElementById('pres-title');
  const endCard   = document.getElementById('pres-end');
  function card(el, on) {
    if (!el) return;
    if (on) { el.hidden = false; requestAnimationFrame(() => el.classList.add('on')); }
    else { el.classList.remove('on'); setTimeout(() => { el.hidden = true; }, 900); }
  }

  /* ---------- helpers ---------- */
  const clear = () => { clearTimeout(timer); timer = null;
                        if (cleanupVideo) { cleanupVideo(); cleanupVideo = null; } };

  function show(i) {
    const fig = frames[i];
    if (!fig) return stop();
    idx = i;
    count.textContent = (i + 1) + ' / ' + frames.length;
    fig.scrollIntoView({ block: 'center', behavior: 'smooth' });
    fig.classList.add('pres-on');
    frames.forEach((f, n) => { if (n !== i) f.classList.remove('pres-on'); });

    for (let k = 1; k <= 3; k++) {
      const im = frames[i + k] && frames[i + k].querySelector('img');
      if (im && im.dataset.warm !== '1') { im.dataset.warm = '1'; const g = new Image(); g.src = im.src; }
    }

    /* warm up the next clip so it's ready when we reach it */
    const nxt = frames[i + 1] && frames[i + 1].querySelector('video');
    if (nxt) { try { nxt.load(); } catch (e) {} }

    const vid = fig.querySelector('video');
    if (vid) {
      timer = setTimeout(() => {
        if (!running) return;
        let done = false;
        const advance = () => { if (!done && running) { done = true; next(); } };
        const cap = setTimeout(advance, VIDEO_CAP);
        vid.addEventListener('ended', advance, { once: true });
        cleanupVideo = () => {
          clearTimeout(cap);
          vid.removeEventListener('ended', advance);
          try { vid.pause(); } catch (e) {}
        };
        try { vid.currentTime = 0; } catch (e) {}
        vid.muted = false;
        vid.play()
          .catch(() => {
            /* unmuted blocked — try muted rather than losing the clip */
            vid.muted = true;
            return vid.play();
          })
          .catch(() => {
            /* still refused: hold the poster briefly, then carry on */
            clearTimeout(cap);
            timer = setTimeout(advance, 3000);
          });
      }, SETTLE);
    } else {
      const hold = (parseInt(fig.dataset.dwell, 10) || PHOTO_HOLD) + SETTLE;
      startHold(hold);
    }
  }

  function startHold(ms) {
    tLeft = ms; tStart = performance.now();
    timer = setTimeout(() => { if (running) next(); }, ms);
    cancelAnimationFrame(rafId);
    const tick = () => {
      if (!running) return;
      if (!paused) {
        const pct = Math.min(1, (performance.now() - tStart) / ms);
        bead.style.transform = 'scaleX(' + pct + ')';
      }
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
  }

  function togglePause() {
    if (!running) return;
    paused = !paused;
    badge.hidden = !paused;
    document.documentElement.classList.toggle('pres-paused', paused);
    const vid = frames[idx] && frames[idx].querySelector('video');
    if (paused) {
      clearTimeout(timer);
      tLeft = Math.max(0, tLeft - (performance.now() - tStart));
      if (vid) vid.pause();
      if (window.BGM) window.BGM.off();
    } else {
      if (window.BGM && window.BGM.available()) window.BGM.on();
      if (vid) { vid.play().catch(() => {}); }
      else { tStart = performance.now(); timer = setTimeout(() => { if (running) next(); }, tLeft); }
    }
  }

  const next = () => {
    clear();
    if (titlePending) { titlePending = false; card(titleCard, false); return show(0); }
    if (idx + 1 < frames.length) return show(idx + 1);
    /* close on the end card rather than stopping dead */
    if (!endPending) {
      endPending = true;
      frames.forEach(f => f.classList.remove('pres-on'));
      card(endCard, true);
      startHold(END_HOLD);
      return;
    }
    stop(true);
  };
  let endPending = false;
  const prev = () => { clear(); show(Math.max(0, idx - 1)); };

  let unlocked = false;
  function unlockVideos() {
    /* Must run synchronously inside the click. Playing each clip muted for an
       instant, then pausing, is what buys permission to play them later from a
       timer — otherwise autoplay policy blocks every one. */
    if (unlocked) return;
    unlocked = true;
    document.querySelectorAll('video').forEach(v => {
      v.muted = true;
      const pr = v.play();
      if (pr && pr.then) pr.then(() => { v.pause(); try { v.currentTime = 0; } catch (e) {} })
                           .catch(() => {});
      else { try { v.pause(); } catch (e) {} }
    });
  }

  async function start() {
    if (!frames.length) frames = window.FRAMES || [];
    if (!frames.length) return;
    unlockVideos();
    if (window.BGM && window.BGM.available()) window.BGM.on();
    running = true;
    bar.classList.add('playing');
    label.textContent = 'Stop';
    count.hidden = false;
    document.documentElement.classList.add('presenting');

    try { if (document.documentElement.requestFullscreen && !document.fullscreenElement)
            await document.documentElement.requestFullscreen(); } catch (e) {}

    card(titleCard, true);
    startHold(TITLE_HOLD);
    titlePending = true;
  }
  let titlePending = false;

  function stop(finished) {
    running = false; paused = false;
    titlePending = false; endPending = false;
    card(titleCard, false); card(endCard, false);
    cancelAnimationFrame(rafId);
    badge.hidden = true;
    document.documentElement.classList.remove('pres-paused');
    bead.style.transform = 'scaleX(0)';
    clear();
    bar.classList.remove('playing');
    label.textContent = finished ? 'Play again' : 'Play presentation';
    count.hidden = true;
    document.documentElement.classList.remove('presenting');
    frames.forEach(f => f.classList.remove('pres-on'));
    document.querySelectorAll('video').forEach(v => v.pause());
    if (window.BGM) window.BGM.off();
    if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
  }

  btn.addEventListener('click', () => (running ? stop() : start()));

  /* escape, or leaving fullscreen, ends it */
  document.addEventListener('keydown', e => {
    if (!running) {
      if (e.code === 'Space') { e.preventDefault(); start(); }
      return;
    }
    if (e.key === 'Escape') stop();
    else if (e.key === 'ArrowRight') next();
    else if (e.key === 'ArrowLeft') prev();
    else if (e.code === 'Space') { e.preventDefault(); togglePause(); }
  });
  document.addEventListener('fullscreenchange', () => {
    if (running && !document.fullscreenElement) stop();
  });
})();
