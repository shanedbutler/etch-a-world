# Etch - A - World

A simple drawing tool built with React and Tailwind CSS. This tool allows users to draw lines on a canvas using arrow keys and a specified length.

## Features

-   **Canvas Drawing:** Draw lines on a canvas using arrow keys.
-   **Directional Controls:** Use the up, down, left, and right arrow keys to specify the drawing direction.
-   **Length Input:** Enter a numerical value to determine the length of the line.
-   **Clear Canvas:** Clear the canvas to start a new drawing.

## Setup

1.  **Clone the repository:**

    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Run the application:**

    ```bash
    npm run dev
    ```

## Usage

1.  **Drawing Lines:**
    -   Focus on the drawing area by clicking on it.
    -   Enter the desired length of the line in the input field.
    -   Press the arrow keys (up, down, left, right) to draw a line in the corresponding direction. The line will be drawn from the current position with the specified length.

2.  **Clearing the Canvas:**
    -   Click the "Clear" button to erase the current drawing and reset the starting position to (50, 50).

## Example

1.  Enter `100` in the length input field.
2.  Press the "ArrowRight" key. A horizontal line of 100 units will be drawn to the right.
3.  Enter `50` in the length input field.
4.  Press the "ArrowDown" key. A vertical line of 50 units will be drawn downwards from the end of the previous line.

## Notes

-   The drawing starts at position (50, 50) on the canvas.
-   The canvas is 600x400 pixels.
-   Only numerical input is allowed for the length field.
-   The canvas must be focused (by clicking on it) to capture keyboard events.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
