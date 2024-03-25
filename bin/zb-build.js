#!/usr/bin/env node
const { execSync } = require('child_process')
execSync(`npx @zumerbox/build`, {
  stdio: 'inherit'
})
