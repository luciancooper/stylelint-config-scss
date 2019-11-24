# @lcooper/stylelint-config-scss

[![npm][npm-badge]][npm-link]
[![license][license-badge]][license-link]

A standalone, sharable [stylelint config](https://stylelint.io/user-guide/configuration#extends) for linting `scss` files. Enables the [`stylelint-scss`](https://github.com/moeriki/stylelint-scss) and [`stylelint-order`](https://github.com/hudochenkov/stylelint-order) plugins.

## Installation

For this package to function properly, [`stylelint`](https://www.npmjs.com/package/stylelint) must be installed as well:

```bash
npm install --save-dev stylelint @lcooper/stylelint-config-scss
```

If using `npm` **5** or greater, this can be acomplished using:

```bash
npx install-peerdeps --dev @lcooper/stylelint-config-scss
```

## Usage

Add the `stylelint` field to your `package.json` file:

```json
"stylelint": {
  "extends": "@lcooper/stylelint-config-scss"
}
```

Or create a stylelint config file type of your choice in the root folder of your project:

`.stylelintrc`

```json
{
  "extends": "@lcooper/stylelint-config-scss"
}
```

`.stylelintrc.js`

```javascript
module.exports = {
    extends: '@lcooper/stylelint-config-scss'
};
```

Check out the stylelint [configuration docs](https://stylelint.io/user-guide/configuration) for more details.

## Scripts

Add a script to your `package.json` file:

```json
"scripts": {
  "lint": "stylelint **/*.scss"
}
```

[npm-link]: https://www.npmjs.com/package/@lcooper/stylelint-config-scss
[npm-badge]: https://img.shields.io/npm/v/@lcooper/stylelint-config-scss?logo=npm&style=for-the-badge
[license-link]: LICENSE
[license-badge]: https://img.shields.io/github/license/luciancooper/stylelint-config-scss?color=brightgreen&style=for-the-badge