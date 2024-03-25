#!/usr/bin/env node
const { execSync } = require('child_process')
const args = process.argv.slice(2).join(' ')
execSync(`npx @zumerbox/${args}`, {
  stdio: 'inherit'
})
