#!/usr/bin/env node
const { execSync } = require('child_process')
const args = process.argv[2]
console.log(args)
execSync(`npx @zumerbox/${args}`, {
  stdio: 'inherit'
})
