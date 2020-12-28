module.exports = {
  "extends": [
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "prettier/react",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript"
  ],
  "plugins": [
    "@typescript-eslint",
    "react-hooks"
  ],
  "parser": "@typescript-eslint/parser",
  "env": { "browser": true, "node": true, "es6": true },
  "parserOptions": {
    "sourceType": "module"
  },
  "ignorePatterns": [ "example/*" ],
  "rules": {
    "prettier/prettier": ["error", {
      "endOfLine": "auto"
    }],
    "react/prop-types": "off",
    "react/jsx-props-no-spreading": "warn",
    "jsx-a11y/anchor-is-valid": "off",
    "import/prefer-default-export": "off",
    "import/no-unresolved": "off",
    "no-param-reassign": ["error", { "props": false }],
    "react/jsx-filename-extension": [
      "error",
      {
        "extensions": [
          ".js",
          ".jsx",
          ".ts",
          ".tsx"
        ]
      }
    ],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never",
        "d.ts": "never"
      }
    ],
    "quotes": ["error","single"]
  },
}
