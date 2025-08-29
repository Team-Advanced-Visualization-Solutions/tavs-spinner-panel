# TAVS Spinner Panel for Grafana

Animated spinner panel with rotation speed based on metric values. Perfect for visualizing real-time metrics with dynamic animation.

## Features

- ⚡ **Speed based on metrics** - Rotation speed changes based on data values
- 🔢 **Multiple segments** - Choose from 1 to 6 line segments
- 🎨 **Fully customizable** - Colors, sizes, and display options
- 📊 **Real-time display** - Show current value in center
- 🎯 **Smooth animation** - 60 FPS smooth rotation
- ⚙️ **Easy configuration** - Intuitive settings panel

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