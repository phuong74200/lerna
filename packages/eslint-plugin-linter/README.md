# eslint-plugin-linter

internal use linter?

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-linter`:

```sh
npm install eslint-plugin-linter --save-dev
```

## Usage

Add `linter` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "linter"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "linter/rule-name": 2
    }
}
```

## Rules

<!-- begin auto-generated rules list -->
TODO: Run eslint-doc-generator to generate the rules list.
<!-- end auto-generated rules list -->


