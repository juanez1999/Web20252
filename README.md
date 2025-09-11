# Setting Up ESLint + Prettier in React

This document explains how to set up linters and autoformatting in a React JS project using ESLint and Prettier.

---

## Installing Dependencies

Run the following command in the project root:

```bash
npm install --save-dev eslint prettier eslint-config-prettier eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks

```

---

## ESLint Configuration

```
{
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": ["react", "react-hooks", "prettier"],
  "rules": {
    "prettier/prettier": "error",
    "react/react-in-jsx-scope": "off"
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}
```

---

## Prettier Settings

```
module.exports = {
  semi: true,
  singleQuote: true,
  trailingComma: 'es5',
  printWidth: 80,
  tabWidth: 2,
  endOfLine: 'auto'
};
```


---

## Scripts in package.json

Add the following scripts to run ESLint and Prettier easily:

```
"scripts": {
  "lint": "eslint . --ext .js,.jsx,.ts,.tsx",
  "lint:fix": "eslint . --ext .js,.jsx,.ts,.tsx --fix",
  "format": "prettier --write ."
}
```

Revisar errores de linting:

```npm run lint```

Corregir automáticamente errores de ESLint:

```npm run lint:fix```

Formatear todo el código con Prettier:

```npm run format```

--- 

## VS Code Setup (optional but recommended)

Create a .vscode/settings.json file in your project with the following settings:

````
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "eslint.validate": ["javascript", "javascriptreact", "typescript", "typescriptreact"]
}
```
