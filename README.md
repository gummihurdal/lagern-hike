# Lägern — a ridge traverse

Photo and video presentation of the Lägerngrat traverse, Saturday 25 July 2026.

- 6.63 km along the ridge, 589 m of ascent, 470 m → 847 m
- 11:08 to 15:34 on the hill
- 76 stills and 9 clips, from 88 stills and 9 clips originally
  (12 near-identical burst frames removed by perceptual hash; the sharpest
  frame of each burst was kept)

## Editing the commentary

All written comments live in `captions.js`, keyed by original filename.
Frames without an entry still appear, showing their real time and altitude.

## How the data was built

Altitudes and coordinates are read from the photo EXIF, so the elevation
profile at the top of the page is the actual GPS track of the camera, not a
drawing. GPS outliers (fixes below 300 m) and jitter under 15 m were filtered
out before computing distance and ascent.

Media was re-encoded for the web: stills to 2000 px JPEG, clips from 4K HEVC
to 1080p30 H.264 with `faststart`. Originals were 1.19 GB; this is ~142 MB.
