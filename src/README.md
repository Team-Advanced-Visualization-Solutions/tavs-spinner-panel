# TAVS Spinner Panel for Grafana

Animated spinner panel with rotation speed based on metric values. Perfect for visualizing real-time metrics with dynamic animation.

## Features

- ⚡ **Speed based on metrics** — Rotation speed changes based on data values
- 🔢 **Multiple segments** — Choose from 1 to 8 line segments
- 🌡️ **Value thresholds** — Change line color dynamically based on metric ranges
- 🔄 **Reverse direction** — Rotate counter-clockwise
- 📊 **Real-time display** — Show current value with optional unit suffix in center
- 🎯 **Smooth animation** — 60 FPS smooth rotation with configurable speed smoothing
- 🎨 **Fully customizable** — Colors, sizes, and display options

## Requirements

- **Grafana**: `>=12.2.0`
- **Plugin signature**: Signed (loads directly, no Frontend Sandbox required)

## Usage

1. Add the **TAVS Spinner** panel to your dashboard.
2. Configure a query that returns a single numeric field (e.g., a scalar metric).
3. The spinner rotates at a speed mapped from your data:
   - the minimum data value corresponds to **Minimum speed (RPM)**,
   - the maximum data value corresponds to **Maximum speed (RPM)**,
   - values in between are mapped linearly.

The value displayed in the center of the panel is the latest value from the query result.

## Configuration

| Option | Description |
| --- | --- |
| Minimum value | Data value corresponding to the minimum speed |
| Maximum value | Data value corresponding to the maximum speed |
| Minimum speed (RPM) | Rotation speed at the minimum value (0–100) |
| Maximum speed (RPM) | Rotation speed at the maximum value (1–100) |
| Speed smoothing | Interpolation factor for speed changes (1 = instant, 0.01 = very smooth) |
| Reverse direction | Rotate counter-clockwise instead of clockwise |
| Line thickness | Line thickness in pixels (1–40) |
| Line color | Default color of the rotating segments |
| Thresholds | Change line color based on value thresholds |
| Change color at maximum | Change line color when reaching the maximum value |
| Color at maximum | Line color when the value reaches the maximum |
| Number of segments | Number of parts to divide the line into (1–8) |
| Gap between segments | Size of the gap between segments in degrees (0–45) |
| Rounded ends | Round the ends of the segments |
| Background color | Panel background color |
| Show value | Display the current value in the center of the panel |
| Value font size | Font size of the value in pixels |
| Value color | Color of the value text |
| Value unit | Optional unit suffix shown after the value (e.g. `rpm`, `%`) |
