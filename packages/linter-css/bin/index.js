#!/usr/bin/env node
const { execSync } = require('child_process')
const path = require('path')
try {
  const args = process.argv.slice(2).join(' ')
  const configPath = path.resolve(__dirname, '../config.json')
  const result = execSync(`eslint -c ${configPath} ${args}`, {
    stdio: 'inherit'
  })

  if (result === null) console.log('Lint sin errores!!')
} catch (error) {
  console.log('Linter ended with errors. Fix and start again')
}
