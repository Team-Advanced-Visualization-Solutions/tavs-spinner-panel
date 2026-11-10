# Changelog

## 1.1.0 (Unreleased)

### Breaking Changes
- Minimum Grafana version raised to `>=12.2.0`.

### Enhancements
- **Performance**: Removed React state updates from the animation loop (`requestAnimationFrame`). Rotation and value are now stored in refs, eliminating unnecessary re-renders.
- **Retina support**: Canvas now respects `devicePixelRatio` for crisp rendering on high-DPI displays.
- **Build tooling**: Updated `@grafana/create-plugin` from `5.26.1` to `5.27.1`, migrated ESLint to v9 flat config, and bumped `@grafana` packages to `12.2.0`.
- **Security**: Locked `@grafana/sign-plugin` to major version `4` in the `sign` script.

### Compatibility
- This plugin is **signed** and loads directly via SystemJS, bypassing the deprecated Plugin Frontend Sandbox.
- The deprecated Frontend Sandbox will be removed in Grafana 13.4; signed plugins are unaffected.

## 1.0.0

Initial release.
