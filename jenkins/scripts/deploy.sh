#!/usr/bin/env sh
# TODO: Throw error if key does not exists and don't ask for password to freeze the procedure
set -x
scp -o StrictHostKeyChecking=no -r dist/* deviceappstore:/var/www/nuofa.co/static/
