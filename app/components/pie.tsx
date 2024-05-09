import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import '/app/globals.css';  // Ensure your CSS is imported

const data = [
  { id: 0, value: 70, label: 'DEX'},
  { id: 1, value: 20, label: 'Marketing & Development'},
  { id: 2, value: 10, label: 'Liquidity Reserve'},
];

export default function PieActiveArc() {
  return (
    <PieChart
      series={[{
        data,
        highlightScope: { faded: 'global', highlighted: 'item' },
        faded: { innerRadius: 30, additionalRadius: -30, color: 'white' },
      }]}
      height={600}
    />
  );
}
