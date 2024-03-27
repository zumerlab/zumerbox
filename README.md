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
- @zumerbox/bump: [npm 📦](https://www.npmjs.com/package/@zumerbox/bump) | [GitHub :octocat:](https://github.com/zumerlab/zumerbox-bump)
- @zumerbox/build: [npm 📦](https://www.npmjs.com/package/@zumerbox/build) | [GitHub :octocat:](https://github.com/zumerlab/zumerbox-build)
- @zumerbox/code-format: [npm 📦](https://www.npmjs.com/package/@zumerbox/code-format) | [GitHub :octocat:](https://github.com/zumerlab/zumerbox-code-format)
- @zumerbox/css-lint: [npm 📦](https://www.npmjs.com/package/@zumerbox/css-lint) | [GitHub :octocat:](https://github.com/zumerlab/zumerbox-css-lint)
- @zumerbox/scss-lint: [npm 📦](https://www.npmjs.com/package/@zumerbox/scss-lint) | [GitHub :octocat:](https://github.com/zumerlab/zumerbox-scss-lint)
- @zumerbox/js-lint: [npm 📦](https://www.npmjs.com/package/@zumerbox/js-lint) | [GitHub :octocat:](https://github.com/zumerlab/zumerbox-js-lint)
- @zumerbox/tests: [npm 📦](https://www.npmjs.com/package/@zumerbox/tests) | [GitHub :octocat:](https://github.com/zumerlab/zumerbox-tests)
- @zumerbox/npm-init: [npm 📦](https://www.npmjs.com/package/@zumerbox/npm-init) | [GitHub :octocat:](https://github.com/zumerlab/zumerbox-npm-init)

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
npx @zumerbox/tests
```

Replace `tests` with the name of the tool you want to use.

Alternatively, you can integrate ZumerBox tools into your npm package scripts. For instance, you can add a script entry in your `package.json` file:

```json
{
  "scripts": {
    "bump": "npx zumerbox bump"
  }
}
```

or with an individual tool:

```json
{
  "scripts": {
    "bump": "npx @zumerbox/bump"
  }
}
```

This way, you can utilize ZumerBox seamlessly within your project's development workflow.

## Recipes

### Recipe 1: Enhancing development workflow with `package.json` scripts

#### Ingredients:

- Zumerbox installed in your project
- `package.json` file

#### Instructions:

1. **Installation**: Install Zumerbox and its tools in your project.

   ```bash
   npm install zumerbox --save-dev
   ```

2. **Configuration**: Add scripts to your `package.json` file to automate common development tasks using Zumerbox tools. You can enhance your workflow by incorporating scripts for versioning, testing, linting, updating changelog, and more.

   Example `package.json` scripts including all tasks:

   ```json
   {
     "scripts": {
       "lint:css": "npx zumerbox css-lint --write",
       "lint:js": "npx zumerbox js-lint --fix",
       "format:code": "npx zumerbox code-format",
       "tests": "npx zumerbox tests",
       "prebump": "npm run lint:css  && npm run lint:js && npm run format:code && npm run tests",
       "bump": "npx zumerbox bump && npx zumerbox changelog",
       "build": "npx zumerbox build",
       "git:push": "git commit -am\"chore: bump version\" && git push --follow-tags",
       "npm:publish": "npm publish",
       "workflow": "npm run bump && npm run build && npm run git:push && npm run npm:push"
     }
   }
   ```

   Example `package.json` scripts including some tasks:

   ```json
   {
     "scripts": {
       "prebump": "npx zumerbox tests",
       "bump": "npx zumerbox bump && npx zumerbox changelog  && git commit -am\"chore: bump version\""
     }
   }
   ```

3. **Usage**:

  - **Workflow**: In first example run this command to automatically lint, format, test, bump version, build dist files, push to git and publish on npm.

     ```bash
     npm run workflow
     ```

  - **Bump**: In second example run this command to test, bump a version and update changelog.

#### Notes:

  - If you want, the installation part can be ommited since zumerbox bundle or any of its tools are executables via `npx`.

  - The `prebump` script is executed automatically before `bump` to ensure code quality by running linting tasks. This is done directly by npm scripts that support pre and post commands [(Learn more on NPM)](https://docs.npmjs.com/cli/v10/using-npm/scripts).

  - If there is an error in any tasks the flow will be interrupted. For instance, if tests don't pass, process exit.

By following this recipe, you can create a comprehensive development workflow that automates various tasks using Zumerbox and ensures code quality and consistency throughout the development process. Adapt this receipt to your needs.

### Recipe 2: Check if project name is valid and available on `npm register`

#### Ingredients:

- Zumerbox bundle or @zumerbox/npm-init
- `package.json` file (optional)

#### Instructions:

1. **Create a folder project**:

    ```bash
        mkdir < folder project >
        cd < folder project >
    ```

2. **Run npm-init tool**:

    ```bash
        npx @zumerbox/npm-init
    ```

    Or

    ```bash
        npx zumerbox npm-init
    ```

3. **Usage**: Just follow tool prompts. `npm-init` will ask to choose a package name and will check if this name is valid and available. It is allowed to to choose just a name or a scoped name (ej: @organization/name). By default `npm-init` will add an author name based on git config, and a MIT licence.

#### Notes:

  - If you already have an initialized project with a `package.json`, `npm-nit` will update this file keeping your previous configuration.

  - Since this tool is used occasionally, We not recommended to install it in your project as a dependency.

## License

ZumerBox is licensed under the [MIT License](LICENSE).

## Bugs and issues

If you encounter any bugs or have suggestions for improvements, please feel free to open an issue on [GitHub](https://github.com/zumerlab/zumerbox/issues).
