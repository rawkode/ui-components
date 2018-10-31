#!/usr/bin/env bash

ICON_TYPES_FILE=./src/types/icons.ts

echo "export type IconType =" > $ICON_TYPES_FILE
curl https://uiux.s3.amazonaws.com/style-guide/css/style-guide.css |
  tr ",:{." "\n" |
  grep sg-icon- |
  sort -u |
  sed s#sg-icon-##g |
  awk '{print "  | '\''" $1 "'\''"}' >> $ICON_TYPES_FILE

printf ";\n" >> $ICON_TYPES_FILE
