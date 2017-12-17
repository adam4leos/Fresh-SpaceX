module.exports = {
  "extends": "airbnb",
  "parser": "babel-eslint",
  "env": {
    "node": true,
    "jasmine": true,
    "browser": true,
  },
  "rules": {
    "jsx-a11y/href-no-hash": "off",
    "no-extra-parens": "error",
    "class-methods-use-this": "off",
    "id-length": 0,
    "indent": [2],
    "no-console": 0,
    "no-unused-vars": [1, {"vars": "local", "args": "none"}],
    "strict": 0,
    "linebreak-style": 0,
    "consistent-return": "off",
    "no-trailing-spaces": "off",
    "import/extensions": "off",
    "import/no-dynamic-require": "off",
  },
}
