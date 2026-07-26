/* Background music for the photo frames.
   Drop a file at audio/track.mp3 (or change TRACK below) and the control
   appears by itself. With no file present, nothing renders — the page is
   unaffected.

   Behaviour:
   - Off until the visitor turns it on. Browsers block autoplay with sound,
     and a page that starts playing music on its own is rude anyway.
   - Once on, it plays while you're looking at photos.
   - It fades down to silence when a video frame scrolls into view, and while
     any clip is actually playing, so the two never talk over each other.
   - It fades back up when you're back on photos.
*/
(function () {
  const TRACK = 'audio/track.mp3';
  const FULL = 0.55;        // ceiling volume — background, not foreground
  const FADE = 700;         // ms

  const audio = document.getElementById('bgm');
  const btn = document.getElementById('bgm-toggle');
  const label = document.getElementById('bgm-label');
  if (!audio || !btn) return;

  /* only reveal the control if the file is actually there */
  fetch(TRACK, { method: 'HEAD' })
    .then(r => { if (r.ok) { audio.src = TRACK; btn.hidden = false; } })
    .catch(() => {});

  let wanted = false;       // visitor asked for music
  let ducked = false;       // a video is on screen or playing
  let fadeTimer = null;

  function fadeTo(target, done) {
    clearInterval(fadeTimer);
    const from = audio.volume;
    const steps = Math.max(1, Math.round(FADE / 40));
    let i = 0;
    fadeTimer = setInterval(() => {
      i++;
      audio.volume = Math.min(1, Math.max(0, from + (target - from) * (i / steps)));
      if (i >= steps) { clearInterval(fadeTimer); if (done) done(); }
    }, 40);
  }

  function apply() {
    const shouldPlay = wanted && !ducked;
    btn.classList.toggle('ducked', wanted && ducked);
    if (shouldPlay) {
      if (audio.paused) { audio.volume = 0; audio.play().catch(() => {}); }
      fadeTo(FULL);
    } else if (!audio.paused) {
      fadeTo(0, () => { if (!(wanted && !ducked)) audio.pause(); });
    }
  }

  btn.addEventListener('click', () => {
    wanted = !wanted;
    btn.setAttribute('aria-pressed', String(wanted));
    if (label) label.textContent = wanted ? 'Music on' : 'Music';
    apply();
  });

  /* duck when a video frame is the one you're looking at */
  document.addEventListener('frame', e => {
    ducked = e.detail.isVideo;
    apply();
  });

  /* and hard-duck for as long as a clip is genuinely playing */
  document.querySelectorAll('video').forEach(v => {
    v.addEventListener('play', () => { ducked = true; apply(); });
    ['pause', 'ended'].forEach(ev =>
      v.addEventListener(ev, () => {
        const anyPlaying = [...document.querySelectorAll('video')]
          .some(o => !o.paused && !o.ended);
        if (!anyPlaying) { ducked = false; apply(); }
      })
    );
  });

  /* be a good citizen when the tab goes away */
  document.addEventListener('visibilitychange', () => {
    if (document.hidden && !audio.paused) audio.pause();
    else if (!document.hidden) apply();
  });
})();
