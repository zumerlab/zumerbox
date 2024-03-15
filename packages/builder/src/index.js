const esbuild = require('esbuild')
const path = require('path')
const yargs = require('yargs')
const sassPlugin = require('esbuild-plugin-sass')

// Define command-line options using yargs
const argv = yargs
  .usage('Usage: $0 [options]')
  .option('name', {
    alias: 'n',
    describe: 'Name of the bundler',
    demandOption: true,
    type: 'string'
  })
  .option('js', {
    alias: 'j',
    describe: 'Path to JavaScript file',
    demandOption: true,
    type: 'string'
  })
  .option('scss', {
    alias: 's',
    describe: 'Path to SCSS file',
    demandOption: true,
    type: 'string'
  })
  .option('minify', {
    alias: 'm',
    describe: 'Generate minified output files (JavaScript and CSS)',
    type: 'boolean',
    default: false
  })
  .option('outdir', {
    alias: 'd',
    describe: 'Destination folder',
    type: 'string',
    default: 'dist'
  })
  .help('h')
  .alias('h', 'help').argv

// Read package.json from project directory
const packageJsonPath = path.resolve(__dirname, '../package.json')
const pkg = require(packageJsonPath)

// Extract name from package.json
const bundlerName = pkg.name || 'MyBundler'
const setBanner = () => `
/*
* ${pkg.name}
* v.${pkg.version}
* Author ${pkg.author}
* License ${pkg.license}
**/`

// Configuration for esbuild
const options = {
  entryPoints: [argv.scss, argv.js],
  entryNames: `${argv.name}`,
  bundle: true,
  banner: {
    js: setBanner(),
    css: setBanner()
  },
  outdir: `${argv.outdir}`,
  metafile: true,
  plugins: [sassPlugin()]
}

const optionsMinify = {
  entryPoints: [argv.scss, argv.js],
  entryNames: `${argv.name}.min`,
  outdir: `${argv.outdir}`,
  bundle: true,
  metafile: true,
  minify: true,
  plugins: [sassPlugin()]
}

// Run esbuild
esbuild
  .build(options)
  .then(() =>
    argv.minify ?
      esbuild.build(optionsMinify)
    : console.log('⚡ Minify skipped ⚡')
  )
  .then(() => console.log('⚡ Styles & Scripts Compiled! ⚡ '))
  .catch(() => process.exit(1))
