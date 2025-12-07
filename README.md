# grdbrz-ui

A minimal React UI component library with professional styling and built-in theming.

## Installation

```bash
npm install grdbrz-ui
```

## Usage

```tsx
import { Button, ThemeProvider } from 'grdbrz-ui';
import 'grdbrz-ui/dist/grdbrz-ui.css';

function App() {
  return (
    <ThemeProvider defaultTheme="darkDefault">
      <Button>Click Me</Button>
    </ThemeProvider>
  );
}
```

## Components

### Primitives

| Component | Description |
|-----------|-------------|
| `Button` | Primary action button with variants |
| `ToggleButton` | Button with on/off state |
| `ButtonGroup` | Group of related buttons |
| `Pill` | Tag/badge component |
| `Panel` | Container with optional header |
| `Heading` | Typography headings (h1-h6) |
| `Text` | Body text with variants |
| `Slider` | Range input with label |
| `Toggle` | On/off switch |
| `Select` | Dropdown selector |
| `Input` | Text input field |
| `Knob` | Rotary control |
| `XYPad` | 2D control surface |

### Theme

Wrap your app with `ThemeProvider` to enable theming:

```tsx
<ThemeProvider defaultTheme="darkDefault">
  {/* your app */}
</ThemeProvider>
```

**Available themes:** `darkDefault`, `darkMuted`, `highContrast`, `light`

## Design Tokens

The library uses CSS variables for consistent styling:

- `--bg-app`, `--bg-panel`, `--bg-surface` — backgrounds
- `--text-primary`, `--text-secondary`, `--text-muted` — typography
- `--border-subtle`, `--border-default` — borders
- `--spacing-xs` through `--spacing-xl` — spacing
- `--accent-primary`, `--accent-secondary` — accent colors

## License

MIT
