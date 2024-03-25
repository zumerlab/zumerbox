# ZumerBox

ZumerBox is a small set of development tools designed to run common tasks in software development workflows. It offers functionalities for linting, formatting, building, testing, and releasing projects.

## Target audience

ZumerBox is intended for small projects with single or small development teams. It was initially created for personal use but can be useful for sharing with other developers who want to quickly test concepts or iterate on small projects.

## No configuration needed

The idea behind ZumerBox is that it can be used out-of-the-box without any configuration. Each tool is designed to work with sensible defaults, allowing you to get started quickly without having to spend time configuring settings.

## No installation needed

You can use the ZumerBox bundle or any of its tools without installation by running `npx`. See [Usage](#usage) for details.

## Design philosophy
ZumerBox tools are designed as wrappers for popular tools such as Jest, ESLint, StyleLint, ESbuild, Prettier, and update-changelog. They are pre-configured to be immediately usable without the need for extensive setup or configuration.

## Installation

You can install ZumerBox as a bundle or each tool individually according to your preference.

### Bundle installation

To install the entire ZumerBox bundle, simply run:

```bash
npm install zumerbox --save-dev
```

This will install all tools included in ZumerBox.

### Individual tool installation

Alternatively, you can install each tool independently. Here are the available tools:


- @zumerbox/changelog: [npm 📦](https://www.npmjs.com/package/@zumerbox/changelog) | [GitHub :octocat:](https://github.com/zumerlab/zumerbox-changelog)
- @zumerbox/release: [npm 📦](https://www.npmjs.com/package/@zumerbox/release) | [GitHub :octocat:](https://github.com/zumerlab/zumerbox-release)
- @zumerbox/build: [npm 📦](https://www.npmjs.com/package/@zumerbox/build) | [GitHub :octocat:](https://github.com/zumerlab/zumerbox-build)
- @zumerbox/code-format: [npm 📦](https://www.npmjs.com/package/@zumerbox/code-format) | [GitHub :octocat:](https://github.com/zumerlab/zumerbox-code-format)
- @zumerbox/css-lint: [npm 📦](https://www.npmjs.com/package/@zumerbox/css-lint) | [GitHub :octocat:](https://github.com/zumerlab/zumerbox-css-lint)
- @zumerbox/scss-lint: [npm 📦](https://www.npmjs.com/package/@zumerbox/scss-lint) | [GitHub :octocat:](https://github.com/zumerlab/zumerbox-scss-lint)
- @zumerbox/js-lint: [npm 📦](https://www.npmjs.com/package/@zumerbox/js-lint) | [GitHub :octocat:](https://github.com/zumerlab/zumerbox-js-lint)
- @zumerbox/tests: [npm 📦](https://www.npmjs.com/package/@zumerbox/tests) | [GitHub :octocat:](https://github.com/zumerlab/zumerbox-tests)


You can install any of these tools individually using npm:

```bash
npm install @zumerbox/tool-name --save-dev
```

Replace `tool-name` with the name of the tool you want to install.

## Usage

You can use any tool from ZumerBox without the need for installation by running it directly with `npx`. This allows for a hassle-free setup and usage. For example, to run the tests, you can use in the project root folder:

```bash
# using ZumerBox bundle
npx zumerbox tests
```

or 

```bash
# using ZumerBox individual tool
npx @zumerbox-tests
```

Replace `tests` with the name of the tool you want to use.

Alternatively, you can integrate ZumerBox tools into your npm package scripts. For instance, you can add a script entry in your `package.json` file:

```json
//package.json
{
    "scripts": {
        "release":"npx zumerbox release"
    }
}
```

or with an individual tool:

```json
//package.json
{
    "scripts": {
        "release":"npx @zumerbox/release"
    }
}
```

This way, you can utilize ZumerBox seamlessly within your project's development workflow.

## License

ZumerBox is licensed under the [MIT License](LICENSE).

## Bugs and issues

If you encounter any bugs or have suggestions for improvements, please feel free to open an issue on [GitHub](https://github.com/zumerlab/zumerbox/issues).
