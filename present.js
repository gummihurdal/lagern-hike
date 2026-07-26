/* Presentation mode.
   One tap starts it: goes fullscreen, turns the music on, and walks every frame
   in order without further input. Photos hold for PHOTO_HOLD; videos play right
   through and the next frame follows when they end, so nothing gets clipped.

   The tap matters — it's the user gesture that lets the browser play audio at
   all. Nothing here can start on its own, by design.
*/
(function () {
  const PHOTO_HOLD = 4800;      // ms a still stays on screen
  const SETTLE     = 620;       // ms allowed for the smooth scroll to land
  const VIDEO_CAP  = 30000;     // ms failsafe if a clip never fires 'ended'

  let frames = [];
  let running = false;
  let idx = 0;
  let timer = null;
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
  document.body.appendChild(bar);

  const btn   = bar.querySelector('#pres-toggle');
  const label = bar.querySelector('#pres-label');
  const count = bar.querySelector('#pres-count');

  document.addEventListener('frames-ready', () => { frames = window.FRAMES || []; });

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

    const vid = fig.querySelector('video');
    if (vid) {
      timer = setTimeout(() => {
        if (!running) return;
        vid.muted = false;
        vid.currentTime = 0;
        const advance = () => { if (running) next(); };
        const cap = setTimeout(advance, VIDEO_CAP);
        vid.addEventListener('ended', advance, { once: true });
        cleanupVideo = () => {
          clearTimeout(cap);
          vid.removeEventListener('ended', advance);
          vid.pause();
        };
        vid.play().catch(() => { clearTimeout(cap); advance(); });
      }, SETTLE);
    } else {
      timer = setTimeout(() => { if (running) next(); }, SETTLE + PHOTO_HOLD);
    }
  }

  const next = () => { clear(); idx + 1 < frames.length ? show(idx + 1) : stop(true); };

  async function start() {
    if (!frames.length) frames = window.FRAMES || [];
    if (!frames.length) return;
    running = true;
    bar.classList.add('playing');
    label.textContent = 'Stop';
    count.hidden = false;
    document.documentElement.classList.add('presenting');

    try { if (document.documentElement.requestFullscreen && !document.fullscreenElement)
            await document.documentElement.requestFullscreen(); } catch (e) {}
    if (window.BGM && window.BGM.available()) window.BGM.on();

    show(0);
  }

  function stop(finished) {
    running = false;
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
    if (!running) return;
    if (e.key === 'Escape') stop();
    if (e.key === 'ArrowRight') next();
  });
  document.addEventListener('fullscreenchange', () => {
    if (running && !document.fullscreenElement) stop();
  });
})();
