import React from 'react';
import { StandardEditorProps } from '@grafana/data';
import { Button, ColorPicker, IconButton, Input } from '@grafana/ui';
import { Threshold } from '../types';

interface Props extends StandardEditorProps<Threshold[]> {}

export const ThresholdsEditor: React.FC<Props> = ({ value = [], onChange }) => {
  const thresholds = [...value].sort((a, b) => a.value - b.value);

  const addThreshold = () => {
    const newThreshold: Threshold = {
      value: thresholds.length > 0 ? thresholds[thresholds.length - 1].value + 10 : 50,
      color: '#FF0000',
    };
    onChange([...thresholds, newThreshold]);
  };

  const updateThreshold = (index: number, field: keyof Threshold, val: string | number) => {
    const updated = thresholds.map((t, i) => (i === index ? { ...t, [field]: val } : t));
    onChange(updated);
  };

  const removeThreshold = (index: number) => {
    onChange(thresholds.filter((_, i) => i !== index));
  };

  return (
    <div>
      {thresholds.map((threshold, index) => (
        <div key={index} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
          <ColorPicker
            color={threshold.color}
            onChange={(color) => updateThreshold(index, 'color', color)}
          />
          <Input
            type="number"
            value={threshold.value}
            onChange={(e) => updateThreshold(index, 'value', Number(e.currentTarget.value))}
            placeholder="Value"
            width={12}
          />
          <IconButton
            name="trash-alt"
            tooltip="Remove threshold"
            onClick={() => removeThreshold(index)}
          />
        </div>
      ))}
      <Button variant="secondary" size="sm" onClick={addThreshold} icon="plus">
        Add threshold
      </Button>
    </div>
  );
};
