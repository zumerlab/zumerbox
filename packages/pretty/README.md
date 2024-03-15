# @tinybox/pretty

## Description

This package is an ready to use dev utility that wraps Prettier with a predfined configuration.

## Installation

You can install `@tinybox/pretty` using npm:

```bash
npm install @tinybox/pretty --save-dev
```

Alternatively, you can use `npx` to run pretty without installing it globally. Simply run the following command in your project directory:

```bash
npx @tinybox/pretty [options]
```

Finally, you can create a package.json script to run with `npx`

```json
"scripts": {
    "prettier": "npx pretty [options]"
}
```

### Options

- You can pass additional options to customize the linting for your project.

```bash
@tinybox-pretty --write
```

```json
// package.json
"scripts": {
    "prettier": "npx pretty",
    "prettier:fix": "npx pretty --write"
}
```

This command will run Prettier on the `.`, `docs`,`src`,`bin`,`test`,`mocks`, and `app` folders of your project matching .js, .html, and .md files and apply code style automatically if possible.

## Contribution

We love to receive contributions! If you find any bugs or have any improvement ideas, please open an issue on the GitHub repository or send a pull request.

## License

This project is licensed under the MIT License.
