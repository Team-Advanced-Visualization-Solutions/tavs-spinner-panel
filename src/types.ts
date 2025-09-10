export interface SpinnerOptions {
  minValue: number;
  maxValue: number;
  minSpeed: number;
  maxSpeed: number;
  lineWidth: number;
  lineColor: string;
  segmentsCount: number;
  segmentsGap: number;
  roundedCaps: boolean;
  backgroundColor: string;
  showValue: boolean;
  valueFontSize: number;
  valueColor: string;
  changeColorAtMax?: boolean;
  maxValueColor: string;
}
