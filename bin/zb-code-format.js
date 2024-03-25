#!/usr/bin/env node
const { execSync } = require('child_process')
execSync(`npx @zumerbox/code-format`, {
  stdio: 'inherit'
})
