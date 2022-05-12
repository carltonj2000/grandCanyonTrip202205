# Grand Canyon Trip May 2022

```bash
rsync -avz ./dist/ carltonjoseph.com:/home/carltonj2000/do20041/sites/dataandnotes/web/grand-canyon-2022-may-staging/
```

Image conversion done via commands below.

```bash
sudo apt install graphicsmagick
/usr/bin/gm convert gc.png -resize 16x16 gc-16.png
/usr/bin/gm convert gc.png -resize 32x32 gc-32.png
/usr/bin/gm convert gc.png -resize 48x48 gc-48.png
/usr/bin/gm convert gc.png -resize 128x128 gc-128.png
/usr/bin/gm convert gc.png -resize 192x192 gc-192.png
/usr/bin/gm convert gc.png -resize 512x512 gc-512.png
/usr/bin/gm convert portrait.png -resize 360x640\! portrait360x640.png
/usr/bin/gm convert landscape.png -resize 640x360\! landscape640x360.png
```
