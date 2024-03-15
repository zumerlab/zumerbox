#!/usr/bin/env node
const { execSync } = require('child_process')
const path = require('path')
try {
  const args = process.argv.slice(2).join(' ')
  const configPath = path.resolve(__dirname, '../.stylelintrc.json')
  const result = execSync(`stylelint  "**/*.{css}" -c ${configPath} ${args}`, {
    stdio: 'inherit'
  })

  if (result === null) console.log('Lint CSS sin errores!!')
} catch (error) {
  console.log('Linter CSS ended with errors. Fix and start again')
}
