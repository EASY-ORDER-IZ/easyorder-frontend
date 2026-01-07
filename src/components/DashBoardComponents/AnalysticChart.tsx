import React from 'react';
import { LineChart, Line, XAxis, CartesianGrid } from 'recharts';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from '@/components/ui/chart';

interface Props {
  label: string[];
  values: number[];
}

const chartConfig = {
  desktop: {
    label: 'Desktop',
    color: 'var(--color-primary-main)',
  },
} satisfies ChartConfig;

const AnalysticChart: React.FC<Props> = ({ label, values }) => {
  const chartData = label.map((lbl, i) => ({
    month: lbl,
    desktop: values[i] ?? 0,
  }));

  return (
    <Card>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart data={chartData} margin={{ left: 12, right: 12 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => String(value).slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Line
              dataKey="desktop"
              type="linear"
              stroke="var(--color-primary-main)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="w-[450px] flex-col items-start gap-2 text-sm"></CardFooter>
    </Card>
  );
};

export default AnalysticChart;
