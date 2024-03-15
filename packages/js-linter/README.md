# @tinybox/linter

## Description

This package is an ready-to-use dev utility that wraps ESlint with a predefined configuration.

## Installation

You can install `@tinybox/linter` using npm:

```bash
npm install @tinybox/linter --save-dev
```

Alternatively, you can use `npx` to run linter without installing it globally. Simply run the following command in your project directory:

```bash
npx @tinybox/linter [options]
```

Finally, you can create a package.json script to run with `npx`

```json
"scripts": {
    "prettier": "npx linter [options]"
}
```

### Options

- You can pass additional options to customize the linting for your project.

```bash
@tinybox-linter --write
```

```json
// package.json
"scripts": {
    "lint": "npx linter",
    "lint:fix": "npx linter --fix"
}
```

This command will run ESlint on your project matching js files and apply code style automatically if possible.

## Contribution

We love to receive contributions! If you find any bugs or have any improvement ideas, please open an issue on the GitHub repository or send a pull request.

## License

This project is licensed under the MIT License.
