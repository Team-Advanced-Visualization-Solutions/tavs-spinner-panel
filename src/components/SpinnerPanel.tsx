import React, { useRef, useEffect, useCallback } from 'react';
import { PanelProps } from '@grafana/data';
import { SpinnerOptions } from '../types';

interface Props extends PanelProps<SpinnerOptions> {}

export const SpinnerPanel: React.FC<Props> = ({ options, data, width, height }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const animationRef = useRef<number | undefined>(undefined);
  const rotationRef = useRef<number>(0);
  const valueRef = useRef<number>(0);

  const getValue = useCallback(() => {
    if (!data.series.length || !data.series[0].fields.length) {
      return 0;
    }

    const field = data.series[0].fields.find((f) => f.type === 'number');
    if (!field || !field.values.length) {
      return 0;
    }

    return field.values[field.values.length - 1];
  }, [data]);

  const calculateSpeed = useCallback(
    (value: number) => {
      const normalized = Math.max(options.minValue, Math.min(options.maxValue, value));
      const progress = (normalized - options.minValue) / (options.maxValue - options.minValue);
      return options.minSpeed + progress * (options.maxSpeed - options.minSpeed);
    },
    [options.minValue, options.maxValue, options.minSpeed, options.maxSpeed]
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) {
      return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      return;
    }

    // Handle high-DPI (Retina) displays
    const dpr = window.devicePixelRatio || 1;
    const cssWidth = width;
    const cssHeight = height;

    canvas.width = cssWidth * dpr;
    canvas.height = cssHeight * dpr;
    canvas.style.width = `${cssWidth}px`;
    canvas.style.height = `${cssHeight}px`;
    ctx.scale(dpr, dpr);

    let lastTime = 0;

    const render = (time: number) => {
      if (!lastTime) {
        lastTime = time;
      }

      const deltaTime = time - lastTime;
      lastTime = time;

      const value = getValue();
      valueRef.current = value;
      const speed = calculateSpeed(value);

      rotationRef.current = (rotationRef.current + speed * (deltaTime / 1000) * 6) % 360;

      const centerX = cssWidth / 2;
      const centerY = cssHeight / 2;
      const radius = Math.min(cssWidth, cssHeight) / 2 - options.lineWidth;

      ctx.clearRect(0, 0, cssWidth, cssHeight);

      if (options.backgroundColor && options.backgroundColor !== 'transparent') {
        ctx.fillStyle = options.backgroundColor;
        ctx.fillRect(0, 0, cssWidth, cssHeight);
      }

      const lineColor =
        options.changeColorAtMax && value >= options.maxValue
          ? options.maxValueColor
          : options.lineColor;

      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate((rotationRef.current * Math.PI) / 180);

      ctx.strokeStyle = lineColor;
      ctx.lineWidth = options.lineWidth;
      ctx.lineCap = options.roundedCaps ? 'round' : 'butt';

      const totalCircle = 2 * Math.PI;
      const gapRadians = (options.segmentsGap * Math.PI) / 180;
      const segmentLength = (totalCircle - options.segmentsCount * gapRadians) / options.segmentsCount;

      for (let i = 0; i < options.segmentsCount; i++) {
        const startAngle = i * (segmentLength + gapRadians);
        const endAngle = startAngle + segmentLength;

        ctx.beginPath();
        ctx.arc(0, 0, radius, startAngle, endAngle);
        ctx.stroke();
      }

      ctx.restore();

      animationRef.current = requestAnimationFrame(render);
    };

    animationRef.current = requestAnimationFrame(render);

    return () => {
      if (animationRef.current !== undefined) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [width, height, options, getValue, calculateSpeed]);

  return (
    <div
      ref={containerRef}
      style={{
        width,
        height,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        background: options.backgroundColor || 'transparent',
        overflow: 'hidden',
        cursor: 'default',
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      />
      {options.showValue && (
        <div
          style={{
            fontSize: `${options.valueFontSize}px`,
            fontWeight: 'bold',
            color: options.valueColor,
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
            zIndex: 10,
            textAlign: 'center',
            pointerEvents: 'none',
          }}
        >
          {valueRef.current.toFixed(0)}
        </div>
      )}
    </div>
  );
};
