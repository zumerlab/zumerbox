#!/usr/bin/env node
const { execSync } = require('child_process')
const path = require('path')
try {
  const args = process.argv.slice(2).join(' ')
  const configPath = path.resolve(__dirname, '../jest.config.json')
  const result = execSync(`jest -c ${configPath} ${args}`, {
    stdio: 'inherit'
  })

  // if (result === null) console.log('Lint SCSS sin errores!!')
} catch (error) {
  console.log('Jest ended with errors. Fix and start again')
}
