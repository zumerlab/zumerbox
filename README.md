# TinyBox

TinyBox is a small set of development tools designed to run common tasks in software development workflows. It offers functionalities for linting, formatting, building, testing, and releasing projects.

## Target audience

TinyBox is intended for small projects with single or small development teams. It was initially created for personal use but can be useful for sharing with other developers who want to quickly test concepts or iterate on small projects.

## No configuration needed

The idea behind TinyBox is that it can be used out-of-the-box without any configuration. Each tool is designed to work with sensible defaults, allowing you to get started quickly without having to spend time configuring settings.

## No installation needed

You can use the TinyBox bundle or any of its tools without installation by running `npx`. See [Usage](#usage) for details.

## Design philosophy
TinyBox tools are designed as wrappers for popular tools such as Jest, ESLint, StyleLint, ESbuild, Prettier, and update-changelog. They are pre-configured to be immediately usable without the need for extensive setup or configuration.

## Installation

You can install TinyBox as a bundle or each tool individually according to your preference.

### Bundle installation

To install the entire TinyBox bundle, simply run:

```bash
npm install tinybox --save-dev
```

This will install all tools included in TinyBox.

### Individual tool installation

Alternatively, you can install each tool independently. Here are the available tools:
### Individual tool installation

Alternatively, you can install each tool independently. Here are the available tools:


- @tinybox/changelog: [npm 📦](https://www.npmjs.com/package/@tinybox/changelog) | [GitHub :octocat:](https://github.com/zumerlab/tinybox-changelog)
- @tinybox/release: [npm 📦](https://www.npmjs.com/package/@tinybox/release) | [GitHub :octocat:](https://github.com/zumerlab/tinybox-release)
- @tinybox/build: [npm 📦](https://www.npmjs.com/package/@tinybox/build) | [GitHub :octocat:](https://github.com/zumerlab/tinybox-build)
- @tinybox/code-format: [npm 📦](https://www.npmjs.com/package/@tinybox/code-format) | [GitHub :octocat:](https://github.com/zumerlab/tinybox-code-format)
- @tinybox/css-lint: [npm 📦](https://www.npmjs.com/package/@tinybox/css-lint) | [GitHub :octocat:](https://github.com/zumerlab/tinybox-css-lint)
- @tinybox/scss-lint: [npm 📦](https://www.npmjs.com/package/@tinybox/scss-lint) | [GitHub :octocat:](https://github.com/zumerlab/tinybox-scss-lint)
- @tinybox/js-lint: [npm 📦](https://www.npmjs.com/package/@tinybox/js-lint) | [GitHub :octocat:](https://github.com/zumerlab/tinybox-js-lint)
- @tinybox/tests: [npm 📦](https://www.npmjs.com/package/@tinybox/tests) | [GitHub :octocat:](https://github.com/zumerlab/tinybox-tests)


You can install any of these tools individually using npm:

```bash
npm install @tinybox/tool-name --save-dev
```

Replace `tool-name` with the name of the tool you want to install.

## Usage

You can use any tool from TinyBox without the need for installation by running it directly with `npx`. This allows for a hassle-free setup and usage. For example, to run the tests, you can use in the project root folder:

```bash
# using tinybox bundle
npx tinybox tests
```

or 

```bash
# using tinybox individual tool
npx @tinybox-tests
```

Replace `tests` with the name of the tool you want to use.

Alternatively, you can integrate TinyBox tools into your npm package scripts. For instance, you can add a script entry in your `package.json` file:

```json
//package.json
{
    "scripts": {
        "release":"npx tinybox release"
    }
}
```

or with an individual tool:

```json
//package.json
{
    "scripts": {
        "release":"npx @tinybox/release"
    }
}
```

This way, you can utilize TinyBox seamlessly within your project's development workflow.

## License

TinyBox is licensed under the [MIT License](LICENSE).

## Bugs and issues

If you encounter any bugs or have suggestions for improvements, please feel free to open an issue on [GitHub](https://github.com/zumerlab/tinybox/issues).
