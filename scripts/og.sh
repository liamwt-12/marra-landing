#!/bin/sh
# Renders og/og-image.html to public/og-image.png (1200x630) with headless Chrome.
# Uses a throwaway profile so it works while Chrome is already open.
set -e
cd "$(dirname "$0")/.."
CHROME="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"
PROFILE="$(mktemp -d)"
trap 'rm -rf "$PROFILE"' EXIT
"$CHROME" --headless=new --user-data-dir="$PROFILE" --no-first-run --disable-gpu \
  --hide-scrollbars --force-device-scale-factor=1 --window-size=1200,630 \
  --virtual-time-budget=8000 --screenshot=public/og-image.png og/og-image.html
