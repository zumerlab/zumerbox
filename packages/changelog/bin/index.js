#!/usr/bin/env node
const { execSync } = require('child_process')
const path = require('path')
try {
  const args = process.argv.slice(2).join(' ')
  const configPath = path.resolve(__dirname, '../cliff.toml')
  const mdPath = path.resolve(__dirname, '../CHANGELOG.md')
  const result = execSync(`git cliff -c ${configPath} -o ${mdPath} -l ${args}`, {
    stdio: 'inherit'
  })
  // -o shlud be at root project
  // -u for unreleased
  // -l for latest commit tag
  // if (result === null) console.log('Lint SCSS sin errores!!')
} catch (error) {
  console.log('Git cliff has errors')
}
