#!/usr/bin/env node
const { execSync } = require('child_process')
execSync(`npx @zumerbox/css-lint`, {
  stdio: 'inherit'
})
