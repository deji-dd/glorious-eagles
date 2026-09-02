# Glorious Eagles

A modern, responsive website for the Glorious Eagles foundation, built with React, Vite, and Cloudflare Pages.

## Features

- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Performance**: Lazy loading and optimized build process.
- **Routing**: Clean client-side routing with `react-router-dom`.
- **Modern UI**: Styled with Tailwind CSS and modern React patterns.

## Tech Stack

- **Framework**: React 19 + Vite
- **Language**: JavaScript (ESModules)
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM v7
- **Runtime & Package Manager**: Bun
- **Linter & Formatter**: Biome

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) (v1.2+)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/deji-dd/glorious-eagles.git
   cd glorious-eagles
   ```

2. Install dependencies:

   ```bash
   bun install
   ```

### Development

Start the development server:

```bash
bun run dev
```

### Type Checking

Check types:

```bash
bun run typecheck
```

### Linting & Formatting

Check code quality with Biome:

```bash
bun run lint
```

Format code:

```bash
bun run format
```

### Build

Build for production:

```bash
bun run build
```

## Deployment

This project is configured for deployment on Cloudflare Pages.

## License

[MIT](LICENSE)
