export interface Threshold {
  color: string;
  value: number;
}

export interface SpinnerOptions {
  minValue: number;
  maxValue: number;
  minSpeed: number;
  maxSpeed: number;
  smoothFactor: number;
  lineWidth: number;
  lineColor: string;
  segmentsCount: number;
  segmentsGap: number;
  roundedCaps: boolean;
  backgroundColor: string;
  showValue: boolean;
  valueFontSize: number;
  valueColor: string;
  valueUnit: string;
  changeColorAtMax?: boolean;
  maxValueColor: string;
  thresholds: Threshold[];
  reverseDirection: boolean;
}
