#!/usr/bin/env bash

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

if [[ ! -f artisan ]]; then
    echo "Error: artisan not found in $SCRIPT_DIR"
    exit 1
fi

echo "[1/3] Clearing Laravel caches..."
php artisan optimize:clear --no-interaction

echo "[2/3] Reloading Octane workers..."
php artisan octane:reload --no-interaction

echo "[3/3] Done. Cache cleared and workers reloaded."
