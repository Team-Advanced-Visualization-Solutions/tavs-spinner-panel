# Testing Guide for Grafana Plugin Reviewers

## Quick Start

This plugin uses the **TestData DB** datasource (built into Grafana) for testing. No external dependencies required.

### Installation

1. Install the plugin from the provided `.zip` archive
2. Restart Grafana if required
3. Navigate to **Plugins → TAVS Spinner** and enable it

### Basic Test Dashboard

Create a new dashboard and add the TAVS Spinner panel:

1. **Data source**: Select `TestData DB`
2. **Scenario**: Choose `Random Walk` or `CSV Content`
3. **Panel options** (default settings work out of the box):
   - Min Value: `0`
   - Max Value: `100`
   - Min Speed: `1` RPM
   - Max Speed: `60` RPM
   - Line Color: `#137a13ff` (green)
   - Segments: `5`

### Feature Testing Checklist

#### 1. Basic Spinner Rotation
- [ ] Spinner rotates clockwise with incoming metric values
- [ ] Higher values = faster rotation
- [ ] Lower values = slower rotation

#### 2. Reverse Direction
- [ ] Enable "Reverse direction" toggle
- [ ] Spinner now rotates counter-clockwise

#### 3. Thresholds
- [ ] Add threshold: value `50`, color `yellow`
- [ ] Add threshold: value `80`, color `red`
- [ ] Change metric value — spinner color changes accordingly

#### 4. Value Display
- [ ] Enable "Show value" to display current value in center
- [ ] Add unit suffix (e.g., `%`, `rpm`) — displayed next to value

#### 5. Speed Smoothing (Inertia)
- [ ] Change smooth factor to `0.1`
- [ ] Observe smooth transition between speeds instead of instant jump

#### 6. Retina / High-DPI
- [ ] On high-DPI displays (MacBook Retina, 4K monitors), spinner renders crisp without blur

### Edge Cases

- **No data**: Spinner stops, shows `0` value
- **Single data point**: Works correctly with single value
- **Negative values**: Clamped to minValue
- **Values above maxValue**: Clamped to maxValue, triggers max color if enabled

### Provisioning (Optional)

Test dashboards are included in `provisioning/dashboards/` for quick setup with docker-compose:

```bash
docker compose up
```

Pre-configured dashboard available at: http://localhost:3000/d/a538aeff-5a8a-42a5-901c-938d896fdd6f
