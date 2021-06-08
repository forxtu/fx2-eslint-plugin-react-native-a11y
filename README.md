# eslint-plugin-react-native-a11y

Set of custom rules for RN a11y

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ yarn add -D eslint
```

Next, install `@forxtu/eslint-plugin-react-native-a11y`:

```
$ yarn add -D @forxtu/eslint-plugin-react-native-a11y
```

## Usage

Add `@forxtu/react-native-a11y` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["@forxtu/react-native-a11y"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "@forxtu/react-native-a11y/rule-name": 2
  }
}
```

## Supported Rules

- [pressable-has-accessibility-role](https://github.com/forxtu/fx2-eslint-plugin-react-native-a11y/blob/master/docs/rules/pressable-has-accessibility-role.md)
