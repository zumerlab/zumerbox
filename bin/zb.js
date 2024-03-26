#!/usr/bin/env node
const { execSync } = require('child_process')
const args = process.argv.slice(2).join(' ')
console.log(args)
execSync(`${args}`, {
  stdio: 'inherit'
})
