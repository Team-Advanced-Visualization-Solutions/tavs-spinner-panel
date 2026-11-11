# Contributing to TAVS Spinner Panel

Thank you for your interest in contributing! This document provides guidelines for contributing to the TAVS Spinner panel plugin.

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR_USERNAME/tavs-spinner-panel.git`
3. Install dependencies: `npm install`
4. Start development: `npm run dev`

## Development Workflow

### Building

```bash
npm run build
```

### Linting

```bash
npm run lint
npm run lint:fix
```

### Testing

```bash
npm run test
npm run e2e
```

## Submitting Changes

1. Create a new branch for your feature or fix: `git checkout -b feature/my-feature`
2. Make your changes
3. Follow existing code style (enforced by ESLint/Prettier)
4. Update CHANGELOG.md if applicable
5. Commit with clear messages following [Conventional Commits](https://www.conventionalcommits.org/)
6. Push to your fork and open a Pull Request

## Release Process

Releases are automated via GitHub Actions when a version tag is pushed:

```bash
git tag v1.2.0
git push origin v1.2.0
```

## Questions?

Open an [issue](https://github.com/Team-Advanced-Visualization-Solutions/tavs-spinner-panel/issues) or start a [discussion](https://github.com/Team-Advanced-Visualization-Solutions/tavs-spinner-panel/discussions).
