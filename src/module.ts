import { PanelPlugin } from '@grafana/data';
import { SpinnerOptions } from './types';
import { SpinnerPanel } from './components/SpinnerPanel';

export const plugin = new PanelPlugin<SpinnerOptions>(SpinnerPanel)
  .setPanelOptions((builder) => {
    return builder
      .addNumberInput({
        path: 'minValue',
        name: 'Minimum value',
        description: 'Value corresponding to the minimum speed',
        defaultValue: 0,
      })
      .addNumberInput({
        path: 'maxValue',
        name: 'Maximum value',
        description: 'Value corresponding to the maximum speed',
        defaultValue: 100,
      })
      .addNumberInput({
        path: 'minSpeed',
        name: 'Minimum speed (RPM)',
        description: 'Rotation speed at the minimum value (0-100)',
        defaultValue: 1,
        settings: {
          min: 0,
          max: 100,
          step: 1,
        },
      })
      .addNumberInput({
        path: 'maxSpeed',
        name: 'Maximum speed (RPM)',
        description: 'Rotation speed at the maximum value (1-100)',
        defaultValue: 60,
        settings: {
          min: 1,
          max: 100,
          step: 1,
        },
      })
      .addNumberInput({
        path: 'lineWidth',
        name: 'Line thickness',
        description: 'Line thickness in pixels (1-40)',
        defaultValue: 10,
        settings: {
          min: 1,
          max: 40, 
          step: 1,
        },
      })
      .addColorPicker({
        path: 'lineColor',
        name: 'Line color',
        description: 'Color of the rotating segments',
        defaultValue: '#137a13ff',
      })
      .addBooleanSwitch({
        path: 'changeColorAtMax',
        name: 'Change color at maximum',
        description: 'Change line color when reaching the maximum value',
        defaultValue: false,
      })
      .addColorPicker({
        path: 'maxValueColor',
        name: 'Color at maximum',
        description: 'Line color when the value reaches the maximum',
        defaultValue: '#ff0000', 
        showIf: (options) => options.changeColorAtMax, // Show only if the switch is enabled
      })
      .addNumberInput({
        path: 'segmentsCount',
        name: 'Number of segments',
        description: 'Number of parts to divide the line into (1-8)',
        defaultValue: 5, 
        settings: {
          min: 1,
          max: 8,
          step: 1,
        },
      })
      .addNumberInput({
        path: 'segmentsGap',
        name: 'Gap between segments',
        description: 'Size of the gap between segments in degrees (0-45)',
        defaultValue: 20, 
        settings: {
          min: 0,
          max: 45, 
          step: 1,
        },
      })
      .addBooleanSwitch({
        path: 'roundedCaps',
        name: 'Rounded ends',
        description: 'Round the ends of the segments',
        defaultValue: true, 
      })
      .addColorPicker({
        path: 'backgroundColor',
        name: 'Background color',
        defaultValue: 'transparent',
      })
      .addBooleanSwitch({
        path: 'showValue',
        name: 'Show value',
        description: 'Display the current value in the center',
        defaultValue: true,
      })
      .addNumberInput({
        path: 'valueFontSize',
        name: 'Value font size',
        description: 'Font size for displaying the value',
        defaultValue: 14,
        settings: {
          min: 1,
          max: 24, 
          step: 1,
        },
      })
      .addColorPicker({
        path: 'valueColor',
        name: 'Value color',
        defaultValue: '#ffffff',
      });
  });
