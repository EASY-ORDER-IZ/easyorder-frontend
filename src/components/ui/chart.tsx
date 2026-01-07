import * as React from 'react';

export interface ChartConfig {
  [key: string]: {
    label: string;
    color: string;
  };
}

interface ChartContainerProps {
  children: React.ReactNode;
  config?: ChartConfig;
  className?: string;
}

export const ChartContainer: React.FC<ChartContainerProps> = ({ children, className }) => {
  return (
    <div className={`w-full ${className || ''}`} style={{ minHeight: '300px' }}>
      {children}
    </div>
  );
};

interface ChartTooltipProps {
  cursor?: boolean;
  content?: React.ReactNode;
  className?: string;
}

export const ChartTooltip: React.FC<ChartTooltipProps> = ({ content, className }) => {
  return (
    <div
      className={`pointer-events-none absolute z-50 rounded-md border border-gray-200 bg-white p-2 shadow-lg ${className || ''}`}
    >
      {content}
    </div>
  );
};

interface ChartTooltipContentProps {
  hideLabel?: boolean;
  label?: string;
  value?: string | number;
  className?: string;
}

export const ChartTooltipContent: React.FC<ChartTooltipContentProps> = ({
  hideLabel,
  label,
  value,
  className,
}) => {
  return (
    <div className={`text-sm ${className || ''}`}>
      {!hideLabel && label && <div className="font-medium">{label}</div>}
      {value !== undefined && <div className="text-gray-600">{value}</div>}
    </div>
  );
};
