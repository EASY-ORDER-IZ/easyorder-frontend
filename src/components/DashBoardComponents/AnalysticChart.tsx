import React from 'react';
import Chart from 'react-apexcharts';
import type { ApexOptions } from 'apexcharts';

interface AnalyticsChartProps {
  title: string;
  labels: string[];
  values: number[];
  color?: string;
}

const AnalyticsChart: React.FC<AnalyticsChartProps> = ({
  title,
  labels,
  values,
  color = 'var(--color-primary-main)',
}) => {
  const series = [
    {
      name: title,
      data: values,
    },
  ];

  const options: ApexOptions = {
    chart: {
      type: 'area',
      toolbar: { show: false },
    },

    stroke: {
      width: 2,
      curve: 'straight',
      dashArray: 3,
      colors: [color],
    },

    fill: {
      type: 'gradient',
      gradient: {
        opacityFrom: 0.5,
        opacityTo: 0,
        colorStops: [
          { offset: 0, color: color, opacity: 0.35 },
          { offset: 100, color: color, opacity: 0 },
        ],
      },
    },

    xaxis: {
      categories: labels,
      labels: { style: { colors: '#777', fontSize: 'var(--text-sm)' } },
    },

    yaxis: {
      labels: { style: { colors: '#777', fontSize: '0.75rem' } },
    },

    grid: {
      borderColor: '#e5e5e5',
      strokeDashArray: 3,
    },

    dataLabels: { enabled: false },
  };

  return (
    <div className="w-[45rem] rounded-lg bg-white p-4">
      <Chart options={options} series={series} type="area" height={200} />
    </div>
  );
};

export default AnalyticsChart;
