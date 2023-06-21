#!/bin/bash

# Since the local environment is slightly different from the online one,
# you must add the environment variable `preview`
preview=true yarn build
# or
yarn build:preview

# The above commands only build the site,
# to preview it locally you need the following commands
yarn serve

# You can also build and preview each part individually,
# just like in development mode
preview=true yarn build:doc && yarn serve:doc
preview=true yarn build:blog:en && yarn serve:blog:en
preview=true yarn build:blog:zh && yarn serve:blog:zh
preview=true yarn build:website && yarn serve:website
