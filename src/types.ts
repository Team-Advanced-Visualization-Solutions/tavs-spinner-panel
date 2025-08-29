export interface SpinnerOptions {
  minValue: number;
  maxValue: number;
  minSpeed: number;
  maxSpeed: number;
  lineWidth: number;
  lineColor: string;
  segmentsCount: number;    // Количество отрезков (1-6)
  segmentsGap: number;      // Промежуток между отрезками (0-45°)
  roundedCaps: boolean;     // Скругленные концы линий
  backgroundColor: string;
  showValue: boolean;
  valueFontSize: number;
  valueColor: string;
}