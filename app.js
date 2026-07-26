(async function () {
  const data = await fetch('data.json').then(r => r.json());
  const { chapters, items } = data;
  const CAP = window.CAPTIONS || {};
  const story = document.getElementById('story');

  document.getElementById('heroImg').src = 'img/' + items[0].slug + '.jpg';

  /* ---------- build chapters ---------- */
  const sections = [];
  chapters.forEach((title, ci) => {
    const group = items.filter(i => i.ch === ci);
    if (!group.length) return;

    const sec = document.createElement('section');
    sec.className = 'chapter';
    sec.id = 'ch' + ci;

    const lo = Math.min(...group.map(g => g.alt));
    const hi = Math.max(...group.map(g => g.alt));
    const head = document.createElement('div');
    head.className = 'chapter-head rise';
    head.innerHTML =
      `<span class="num">${String(ci + 1).padStart(2, '0')} / ${chapters.length}</span>` +
      `<h2>${title}</h2>` +
      `<p class="span">${group[0].time}–${group[group.length - 1].time} · ` +
      `${Math.round(lo)}–${Math.round(hi)} m · ${group.length} frames</p>`;
    sec.appendChild(head);

    const wrap = document.createElement('div');
    wrap.className = 'frames';

    group.forEach(it => {
      const fig = document.createElement('figure');
      fig.className = 'rise' + (it.video ? ' full' : '');
      fig.dataset.alt = it.alt;
      fig.dataset.time = it.time;
      fig.dataset.video = it.video ? '1' : '';

      const shot = document.createElement('div');
      shot.className = 'shot';

      if (it.video) {
        const v = document.createElement('video');
        v.src = 'vid/' + it.slug + '.mp4';
        v.poster = 'thumb/' + it.slug + '.jpg';
        v.controls = true; v.playsInline = true; v.preload = 'metadata';
        v.setAttribute('playsinline',''); v.setAttribute('webkit-playsinline','');
        v.setAttribute('aria-label', 'Clip at ' + it.time);
        shot.appendChild(v);
        const hint = document.createElement('div');
        hint.className = 'playhint';
        hint.innerHTML = '<span>Clip · play</span>';
        shot.appendChild(hint);
        v.addEventListener('play', () => shot.classList.add('playing'));
        const b = document.createElement('div');
        b.className = 'badge'; b.textContent = 'video';
        shot.appendChild(b);
      } else {
        const img = document.createElement('img');
        img.src = 'img/' + it.slug + '.jpg';
        img.loading = 'lazy'; img.decoding = 'async'; img.alt = '';
        shot.appendChild(img);
      }
      fig.appendChild(shot);

      const text = CAP[it.id];
      const cap = document.createElement('figcaption');
      if (!text) cap.className = 'bare';
      cap.innerHTML =
        `<div class="meta"><span>${it.time}</span><b>${Math.round(it.alt)} m</b>` +
        (it.lat ? `<span>${it.lat.toFixed(4)}, ${it.lon.toFixed(4)}</span>` : '') +
        `</div>` + (text ? `<p>${text}</p>` : '');
      fig.appendChild(cap);

      const q = (window.QUOTES || {})[it.id];
      if (q) {
        const bq = document.createElement('blockquote');
        bq.className = 'pullquote';
        bq.innerHTML = '<p>' + q.t + '</p><footer>' + q.a +
          (q.s ? '<span>' + q.s + '</span>' : '') + '</footer>';
        fig.appendChild(bq);
      }

      wrap.appendChild(fig);
      sections.push(fig);
    });

    sec.appendChild(wrap);
    story.appendChild(sec);
  });

  window.FRAMES = sections;
  document.dispatchEvent(new Event('frames-ready'));

  document.getElementById('footStats').textContent =
    `${items.length} frames · ${items.filter(i => i.video).length} clips · ` +
    `first 11:08 at 470 m · last 15:34 at 839 m`;

  /* ---------- elevation profile ---------- */
  const pts = items.map((it, i) => ({ x: i / (items.length - 1), a: it.alt }));
  const aMin = Math.min(...pts.map(p => p.a)) - 15;
  const aMax = Math.max(...pts.map(p => p.a)) + 15;
  const W = 1000, H = 120;
  const sx = p => p.x * W;
  const sy = p => H - ((p.a - aMin) / (aMax - aMin)) * (H - 10) - 5;
  let d = `M ${sx(pts[0])} ${sy(pts[0])}`;
  for (let i = 1; i < pts.length; i++) {
    const p0 = pts[i - 1], p1 = pts[i];
    const cx = (sx(p0) + sx(p1)) / 2;
    d += ` C ${cx} ${sy(p0)}, ${cx} ${sy(p1)}, ${sx(p1)} ${sy(p1)}`;
  }
  document.getElementById('profileLine').setAttribute('d', d);
  document.getElementById('profileFill')
    .setAttribute('d', d + ` L ${W} ${H} L 0 ${H} Z`);

  const cursor = document.getElementById('cursor');
  const roAlt = document.getElementById('roAlt');
  const roTime = document.getElementById('roTime');
  const spine = document.getElementById('spine');
  const hero = document.getElementById('hero');

  /* ---------- scroll wiring ---------- */
  const io = new IntersectionObserver(es => {
    es.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
  }, { rootMargin: '0px 0px -12% 0px', threshold: 0.05 });
  document.querySelectorAll('.rise').forEach(el => io.observe(el));

  const spineIO = new IntersectionObserver(
    es => spine.classList.toggle('on', !es[0].isIntersecting),
    { threshold: 0.35 }
  );
  spineIO.observe(hero);

  let active = -1;
  const track = new IntersectionObserver(es => {
    es.forEach(e => {
      if (!e.isIntersecting) return;
      const i = sections.indexOf(e.target);
      if (i < 0 || i === active) return;
      active = i;
      const x = (i / (sections.length - 1)) * W;
      cursor.setAttribute('x1', x); cursor.setAttribute('x2', x);
      roAlt.textContent = Math.round(e.target.dataset.alt) + ' m';
      roTime.textContent = e.target.dataset.time;
      document.dispatchEvent(new CustomEvent('frame', {
        detail: { isVideo: e.target.dataset.video === '1' }
      }));
    });
  }, { rootMargin: '-45% 0px -45% 0px' });
  sections.forEach(s => track.observe(s));

  /* pause other clips when one starts */
  document.querySelectorAll('video').forEach(v =>
    v.addEventListener('play', () =>
      document.querySelectorAll('video').forEach(o => { if (o !== v) o.pause(); })
    )
  );
})();
