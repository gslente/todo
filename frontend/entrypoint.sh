#!/bin/sh
echo "Apply database migrations"
npm run dev
exec "$@"