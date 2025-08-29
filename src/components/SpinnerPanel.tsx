import React, { useRef, useEffect, useState, useCallback } from 'react';
import { PanelProps } from '@grafana/data';
import { SpinnerOptions } from '../types';

interface Props extends PanelProps<SpinnerOptions> {}

export const SpinnerPanel: React.FC<Props> = ({ options, data, width, height }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const [currentValue, setCurrentValue] = useState<number>(0);
  const [rotation, setRotation] = useState<number>(0);

  // Получение значения из данных
  const getValue = useCallback(() => {
    if (!data.series.length || !data.series[0].fields.length) {
      return 0;
    }

    const field = data.series[0].fields.find((f) => f.type === 'number');
    if (!field || !field.values.length) {
      return 0;
    }

    return field.values.get(field.values.length - 1);
  }, [data]);

  // Расчет скорости вращения
  const calculateSpeed = useCallback(
    (value: number) => {
      const normalized = Math.max(options.minValue, Math.min(options.maxValue, value));
      const progress = (normalized - options.minValue) / (options.maxValue - options.minValue);
      return options.minSpeed + progress * (options.maxSpeed - options.minSpeed);
    },
    [options.minValue, options.maxValue, options.minSpeed, options.maxSpeed]
  );

  // Анимация
  useEffect(() => {
    let lastTime = 0;

    const animate = (time: number) => {
      if (!lastTime) {
        lastTime = time;
      }

      const deltaTime = time - lastTime;
      lastTime = time;

      const value = getValue();
      setCurrentValue(value);
      const speed = calculateSpeed(value);

      setRotation((prev) => (prev + speed * (deltaTime / 1000) * 6) % 360);

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [getValue, calculateSpeed]);

  // Отрисовка на canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      return;
    }

    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(width, height) / 2 - options.lineWidth;

    // Очистка Canvas
    ctx.clearRect(0, 0, width, height);

    // Фон
    if (options.backgroundColor !== 'transparent') {
      ctx.fillStyle = options.backgroundColor;
      ctx.fillRect(0, 0, width, height);
    }

    // Логика изменения цвета
    const lineColor = options.changeColorAtMax && currentValue >= options.maxValue
      ? options.maxValueColor
      : options.lineColor;

    // Рисуем линии
    ctx.save();
    ctx.translate(centerX, centerY);
    ctx.rotate((rotation * Math.PI) / 180);

    ctx.strokeStyle = lineColor; // Динамический цвет
    ctx.lineWidth = options.lineWidth;
    ctx.lineCap = options.roundedCaps ? 'round' : 'butt'; // Квадратные или скругленные концы

    // Рисуем несколько отрезков
    const totalCircle = 2 * Math.PI; // Полная окружность в радианах
    const gapRadians = (options.segmentsGap * Math.PI) / 180; // Промежуток в радианах
    const segmentLength = (totalCircle - options.segmentsCount * gapRadians) / options.segmentsCount;

    for (let i = 0; i < options.segmentsCount; i++) {
      const startAngle = i * (segmentLength + gapRadians);
      const endAngle = startAngle + segmentLength;

      ctx.beginPath();
      ctx.arc(0, 0, radius, startAngle, endAngle);
      ctx.stroke();
    }

    ctx.restore();
  }, [width, height, rotation, options, currentValue]);

  return (
    <div
      style={{
        width,
        height,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        background: options.backgroundColor,
        overflow: 'hidden',
        cursor: 'default', // Устанавливаем курсор по умолчанию
      }}
    >
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
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
            pointerEvents: 'none', // Отключаем взаимодействие с текстом
          }}
        >
          {currentValue.toFixed(0)}
        </div>
      )}
    </div>
  );
};