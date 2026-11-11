# Testing Guidance for Grafana Reviewers

## Quick Setup

1. Install the plugin from the provided `.zip` archive
2. Restart Grafana if required
3. Navigate to **Plugins → TAVS Spinner** and enable it

## Test Data Setup

Use the built-in **TestData DB** data source (no external dependencies):

1. Create a new dashboard
2. Add TAVS Spinner panel
3. Data source: select `TestData DB`
4. Scenario: `Random Walk` or `CSV Content` with numeric values

Default settings work out of the box (min: 0, max: 100).

## Feature Testing Checklist

### 1. Basic Spinner Rotation
- Panel loads and spinner rotates clockwise
- Higher metric values = faster rotation
- Lower metric values = slower rotation

### 2. Reverse Direction
- Enable "Reverse direction" toggle in panel options
- Spinner rotates counter-clockwise

### 3. Value Thresholds
- Add threshold: value `50`, color `yellow`
- Add threshold: value `80`, color `red`
- Change metric value — spinner color changes accordingly

### 4. Speed Smoothing (Inertia)
- Set "Speed smoothing" to `0.1`
- Change metric value rapidly
- Observe smooth speed transition instead of instant jump

### 5. Value Display
- Enable "Show value" — current value appears in center
- Set "Value unit" to `%`, `rpm`, etc. — unit appears next to value

### 6. Customization
- Change line color, thickness, segment count, gaps
- Enable/disable rounded caps
- Change background color

### 7. Edge Cases
- **No data**: Spinner stops, shows `0` value (gracefully handled)
- **Values outside range**: Clamped to min/max, respects thresholds
- **Single data point**: Works correctly

## Provisioning

Test dashboards included in `provisioning/dashboards/` — run `docker compose up` for instant dev environment with pre-configured panels.
