# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.0] - 2026-11-11

### Breaking Changes

- Minimum Grafana version raised to `>=12.2.0`.

### Features

- Thresholds: configurable value thresholds with per-threshold colors (priority: thresholds > changeColorAtMax > lineColor) ([#3](https://github.com/Team-Advanced-Visualization-Solutions/tavs-spinner-panel/pull/3))
- Reverse direction: toggle for counter-clockwise rotation ([#3](https://github.com/Team-Advanced-Visualization-Solutions/tavs-spinner-panel/pull/3))
- Speed smoothing (inertia): `smoothFactor` option (0.01–1.0) for interpolated speed changes instead of instant jumps ([#3](https://github.com/Team-Advanced-Visualization-Solutions/tavs-spinner-panel/pull/3))
- Value unit suffix: `valueUnit` option to display a suffix after the center value (e.g. `%`, `MB/s`, `°C`) ([#3](https://github.com/Team-Advanced-Visualization-Solutions/tavs-spinner-panel/pull/3))

### Enhancements

- Performance: removed React state updates from the animation loop (`requestAnimationFrame`). Rotation and value are now stored in refs, eliminating unnecessary re-renders ([#1](https://github.com/Team-Advanced-Visualization-Solutions/tavs-spinner-panel/pull/1))
- Retina support: Canvas now respects `devicePixelRatio` for crisp rendering on high-DPI displays ([#1](https://github.com/Team-Advanced-Visualization-Solutions/tavs-spinner-panel/pull/1))
- Build tooling: updated `@grafana/create-plugin` from `5.26.1` to `5.27.1`, migrated ESLint to v9 flat config, and bumped `@grafana` packages to `12.2.0` ([#2](https://github.com/Team-Advanced-Visualization-Solutions/tavs-spinner-panel/pull/2))
- Security: locked `@grafana/sign-plugin` to major version `4` ([#2](https://github.com/Team-Advanced-Visualization-Solutions/tavs-spinner-panel/pull/2))
- Donations: added Lava.top sponsorship link to plugin.json and README

### Documentation

- Added `TESTING.md` with testing guide for Grafana plugin reviewers

## [1.0.0] - 2025-08-15

### Features

- Initial release of TAVS Spinner panel for Grafana
- Animated spinner with rotation speed based on metric values
- Configurable segments count, colors, line width, and gaps
- Real-time value display with font size and color options

[1.1.0]: https://github.com/Team-Advanced-Visualization-Solutions/tavs-spinner-panel/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/Team-Advanced-Visualization-Solutions/tavs-spinner-panel/releases/tag/v1.0.0
