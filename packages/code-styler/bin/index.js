#!/usr/bin/env node

const { execSync } = require('child_process')
const path = require('path')

try {
  const configPath = path.resolve(__dirname, '../.prettierrc.json')
  let args = process.argv.slice(2).join(' ')
  const result = execSync(
    `prettier "{.,docs,src,bin,test,mocks,app}/**/*.{js,html,md}" --config ${configPath} --check ${args}`,
    { stdio: 'inherit' }
  )
  if (result !== null) console.log(result)
} catch (error) {
  console.log('Run again Prettier with --write arg to fix code style')
}
