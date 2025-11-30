# grdbrz-ui

A comprehensive React UI component library designed for building professional web applications with a minimal and stylish interface.

## Installation

```bash
npm install grdbrz-ui
```

## Usage

Import components and the CSS file in your application:

```tsx
import { Button, ThemeProvider } from 'grdbrz-ui';
import 'grdbrz-ui/dist/style.css';

function App() {
  return (
    <ThemeProvider theme="darkDefault">
      <Button>Click Me</Button>
    </ThemeProvider>
  );
}
```

## Features

- **Theming**: Built-in support for multiple themes (`darkDefault`, `darkMuted`, `highContrast`, `light`).
- **Primitives**: Buttons, Toggles, Sliders, Knobs, XYPads, and more.
- **Layouts**: Stack, SidebarLayout, Center, Distribute.
- **Design Tokens**: Comprehensive system for colors, typography, and spacing.

## License

MIT
