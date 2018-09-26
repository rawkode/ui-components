#!/bin/bash
set -e

cd $(dirname ${0})
mkdir -p packages/
cd src

rsync --relative -r --include="*/" --include="*.scss" --exclude="*" ./ ../packages/ui-components/
rsync --relative -r --include="*/" --include="*.ttf" --exclude="*" ./ ../packages/ui-components/
rsync --relative -r --include="*/" --include="*.woff" --exclude="*" ./ ../packages/ui-components/
rsync --relative -r --include="*/" --include="*.woff2" --exclude="*" ./ ../packages/ui-components/
rsync --relative -r --include="*/" --include="*.eot" --exclude="*" ./ ../packages/ui-components/
rsync --relative -r --include="*/" --include="*.svg" --exclude="*" ./ ../packages/ui-components/
rsync -r --prune-empty-dirs  --include="*.d.ts" ./@types/ ../packages/ui-components/@types/
rsync --relative -r --prune-empty-dirs  --include="*/" --include="*.scss.d.ts" --exclude="*" ./ ../packages/ui-components/@types/
