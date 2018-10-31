#!/usr/bin/env bash
set -e

docker-compose run build bash -c "yarn ci-only-image-snapshots $@"
