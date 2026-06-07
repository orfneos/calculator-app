# Calculator App

A fully functional calculator built with React and TypeScript. Supports basic arithmetic operations, chained calculations, and expression display.

## Tech Stack

- React 19
- TypeScript
- Tailwind CSS 4
- Vite

## Prerequisites

- Node.js 18+
- npm

## Installation

```bash
git clone https://github.com/YOUR_USERNAME/calculator-app.git
cd calculator-app
npm install
```

## Usage

```bash
# Development server
npm run dev

# Production build
npm run build
```

Open `http://localhost:5173` in your browser.

## Features

- Basic arithmetic: addition, subtraction, multiplication, division
- Chained operations (e.g. `2 + 2 + 2 = 6`)
- Expression display showing full calculation history
- Clear button to reset at any point
- Fresh start after result

## Project Structure

```
src/
├── components/
│   ├── Button.tsx      # Reusable button with variants
│   └── Display.tsx     # Expression and current number display
├── App.tsx             # Calculator logic and state
└── index.css           # Global styles
```

## License

MIT
