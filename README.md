# TAVS Spinner Panel for Grafana

Animated spinner panel with rotation speed based on metric values. Perfect for visualizing real-time metrics with dynamic animation.

## Features

- ⚡ **Speed based on metrics** — Rotation speed changes based on data values
- 🔢 **Multiple segments** — Choose from 1 to 8 line segments
- 🎨 **Fully customizable** — Colors, sizes, and display options
- 🌡️ **Value thresholds** — Change line color dynamically based on metric ranges
- 🔄 **Reverse direction** — Rotate counter-clockwise
- 📊 **Real-time display** — Show current value with optional unit suffix in center
- 🎯 **Smooth animation** — 60 FPS smooth rotation with Retina support and configurable inertia
- ⚙️ **Easy configuration** — Intuitive settings panel

## Compatibility

- **Grafana**: `>=12.2.0`
- **Plugin signature**: Signed (loads directly, no Frontend Sandbox required)

> The Plugin Frontend Sandbox has been deprecated by Grafana and will be removed in Grafana 13.4. This plugin is signed and loads via SystemJS outside the sandbox, so it is fully compatible with current and future Grafana versions.

## Installation

### For Grafana Cloud:
1. Open your Grafana Cloud instance.
2. Go to **Plugins → Browse**.
3. Search for **"TAVS Spinner"**.
4. Click **Install**.

### For Self-Hosted Grafana:
1. In your Grafana instance, navigate to **Plugins → Browse**.
2. Search for **"TAVS Spinner"**.
3. Click **Install** and restart Grafana if required.

### Manual Installation (development):
```bash
git clone https://github.com/Team-Advanced-Visualization-Solutions/tavs-spinner-panel.git
cd tavs-spinner-panel
npm install
npm run build
# Copy dist/ to your plugins directory
```

## Release

Releases are built and signed automatically via GitHub Actions when a version tag is pushed.

```bash
git tag v1.1.0
git push origin v1.1.0
```

To sign locally (requires a [Grafana.com API key](https://grafana.com/docs/grafana/latest/developers/plugins/sign-a-plugin/)):

```bash
npm run build
npm run sign
```

## Support the Project

If you find this plugin useful, consider supporting its development:

[![Donate](https://img.shields.io/badge/Donate-Lava.top-orange.svg)](https://app.lava.top/3653067994?tabId=donate)

[💰 Make a donation via Lava.top](https://app.lava.top/3653067994?tabId=donate)

Your support helps maintain and improve the plugin with new features and updates.
