# React + TypeScript Projects Repository

This repository contains a collection of practical React applications built with TypeScript, Tailwind CSS, and Vite. Each project demonstrates modern frontend development practices and UI component design.

## Repository Summary

This repository serves as a showcase of React applications that:

- Demonstrate various UI/UX patterns and interactions
- Implement TypeScript for type safety and developer experience
- Utilize Tailwind CSS for responsive and modern styling
- Showcase state management with React hooks
- Follow component-based architecture
- Use Vite for fast development and optimized builds

The projects range from simple task management tools to more complex applications like invoice generation, all built with the same modern tech stack.

## Getting Started

Each project can be run independently by navigating to its directory and following these steps:

### Installation

```bash
# Navigate to the project directory
cd [project-directory]  # e.g., cd choresList

# Install dependencies
npm install
```

### Development

```bash
# Start the development server
npm run dev
```

This will start the Vite development server with hot module replacement.

### Building for Production

```bash
# Build the application
npm run build
```

This will create an optimized production build in the `dist` directory.

### Preview Production Build

```bash
# Preview the production build
npm run preview
```

## Project Structure

Each project follows a similar structure:

```
project/
├── public/            # Static assets
├── src/
│   ├── components/    # React components
│   ├── App.tsx        # Main application component
│   ├── main.tsx       # Entry point
│   └── index.css      # Global styles
├── index.html         # HTML template
├── package.json       # Project dependencies and scripts
├── tsconfig.json      # TypeScript configuration
└── vite.config.ts     # Vite configuration
```

## Dependencies

All projects use:

- React 19
- TypeScript
- Tailwind CSS
- Vite 6.2.0

## Requirements

- Node.js (v18+)
- npm (v8+)

## License

MIT