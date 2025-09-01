import { PanelPlugin } from '@grafana/data';
import { SpinnerOptions } from './types';
import { SpinnerPanel } from './components/SpinnerPanel';

export const plugin = new PanelPlugin<SpinnerOptions>(SpinnerPanel)
  .setPanelOptions((builder) => {
    return builder
      .addNumberInput({
        path: 'minValue',
        name: 'Минимальное значение',
        description: 'Значение, соответствующее минимальной скорости',
        defaultValue: 0,
      })
      .addNumberInput({
        path: 'maxValue',
        name: 'Максимальное значение',
        description: 'Значение, соответствующее максимальной скорости',
        defaultValue: 100,
      })
      .addNumberInput({
        path: 'minSpeed',
        name: 'Минимальная скорость (об/мин)',
        description: 'Скорость вращения при минимальном значении',
        defaultValue: 0.5,
      })
      .addNumberInput({
        path: 'maxSpeed',
        name: 'Максимальная скорость (об/мин)',
        description: 'Скорость вращения при максимальном значении',
        defaultValue: 60,
      })
      .addNumberInput({
        path: 'lineWidth',
        name: 'Толщина линии',
        description: 'Толщина линии в пикселях',
        defaultValue: 10,
      })
      .addColorPicker({
        path: 'lineColor',
        name: 'Цвет линии',
        description: 'Цвет вращающихся отрезков',
        defaultValue: '#137a13ff', // Зеленый по умолчанию
      })
      .addBooleanSwitch({
        path: 'changeColorAtMax',
        name: 'Изменить цвет при достижении максимума',
        description: 'Изменить цвет линии при достижении максимального значения',
        defaultValue: false,
      })
      .addColorPicker({
        path: 'maxValueColor',
        name: 'Цвет при достижении максимума',
        description: 'Цвет линии, когда значение достигает максимума',
        defaultValue: '#ff0000', // Красный по умолчанию
        showIf: (options) => options.changeColorAtMax, // Показывать только если переключатель включен
      })
      .addNumberInput({
        path: 'segmentsCount',
        name: 'Количество отрезков',
        description: 'На сколько частей разделить линию (1-6)',
        defaultValue: 6, // 6 по умолчанию
        settings: {
          min: 1,
          max: 6, // Увеличили до 6
          step: 1,
        },
      })
      .addNumberInput({
        path: 'segmentsGap',
        name: 'Промежуток между отрезками',
        description: 'Величина зазора между отрезками в градусах',
        defaultValue: 20, // 45 по умолчанию
        settings: {
          min: 0,
          max: 45, // Увеличили до 45
          step: 1,
        },
      })
      .addBooleanSwitch({
        path: 'roundedCaps',
        name: 'Скругленные концы',
        description: 'Скруглять концы отрезков',
        defaultValue: true, // Выключено по умолчанию
      })
      .addColorPicker({
        path: 'backgroundColor',
        name: 'Цвет фона',
        defaultValue: 'transparent',
      })
      .addBooleanSwitch({
        path: 'showValue',
        name: 'Показывать значение',
        description: 'Отображать текущее значение в центре',
        defaultValue: true,
      })
      .addNumberInput({
        path: 'valueFontSize',
        name: 'Размер шрифта значения',
        description: 'Размер шрифта для отображения значения',
        defaultValue: 16,
      })
      .addColorPicker({
        path: 'valueColor',
        name: 'Цвет значения',
        defaultValue: '#ffffff',
      });
  });
