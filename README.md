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

1. Use follow extensions:  
   - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)  
   - [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
     
Create a .vscode/settings.json file in your project with the following settings:

```
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "eslint.validate": ["javascript", "javascriptreact", "typescript", "typescriptreact"]
}
```

---

## Style and Component Libraries in React

A **style and component library** is a set of tools that provides **reusable components** (buttons, modals, menus, forms, etc.) and predefined styles to accelerate interface development.
They allow you to build applications faster and with a consistent look and feel.

React allows you to use different libraries for **styling** and **UI components**. Here are the most popular ones:

### 1. **Tailwind CSS**
- Utility-first CSS framework for rapid UI development.
- Highly customizable and lightweight.
- **Install**:
  ```bash
  npm install -D tailwindcss postcss autoprefixer
  npx tailwindcss init -p
  ```
- Add Tailwind to your `index.css`:
  ```css
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  ```

---

### 2. **Material UI (MUI)**
- Google’s Material Design implementation for React.
- Includes ready-to-use components.
- **Install**:
  ```bash
  npm install @mui/material @emotion/react @emotion/styled
  ```
- **Example**:
  ```jsx
  import { Button } from '@mui/material';

  function App() {
    return <Button variant="contained">Click Me</Button>;
  }

  export default App;
  ```

---

### 3. **Chakra UI**
- Simple, modular, and accessible component library.
- Built-in dark mode support.
- **Install**:
  ```bash
  npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion
  ```
- **Example**:
  ```jsx
  import { Button } from '@chakra-ui/react';

  function App() {
    return <Button colorScheme="blue">Click Me</Button>;
  }

  export default App;
  ```

---

### 4. **Styled Components**
- CSS-in-JS library.
- Lets you write CSS inside your JavaScript files.
- **Install**:
  ```bash
  npm install styled-components
  ```
- **Example**:
  ```jsx
  import styled from 'styled-components';

  const Button = styled.button\`
    background: blue;
    color: white;
    padding: 10px;
  \`;

  function App() {
    return <Button>Click Me</Button>;
  }

  export default App;
  ```

---
