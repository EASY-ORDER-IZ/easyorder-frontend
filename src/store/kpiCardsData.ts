export interface KPIItem {
  title: 'Total Product' | 'Active Users' | 'Revenue' | 'Growth Rate';
  rate: number | string;
  percent: number;
  description: string;
  arrow: 'up' | 'down';
}

export type KPIPeriod = 'Yearly' | 'Monthly' | 'Weekly' | 'Daily';

export const KPI_DEMO = {
  Yearly: [
    {
      title: 'Total Product',
      rate: 1280,
      percent: 12,
      description: 'vs last year',
      arrow: 'up',
    },
    {
      title: 'Active Users',
      rate: '42k',
      percent: 8,
      description: 'annual growth',
      arrow: 'up',
    },
    {
      title: 'Revenue',
      rate: '$120k',
      percent: 5,
      description: 'increase',
      arrow: 'up',
    },
    {
      title: 'Growth Rate',
      rate: '18%',
      percent: 3,
      description: 'decline',
      arrow: 'down',
    },
  ],

  Monthly: [
    {
      title: 'Total Product',
      rate: 128,
      percent: 2,
      description: 'vs last month',
      arrow: 'up',
    },
    {
      title: 'Active Users',
      rate: '4.2k',
      percent: 1,
      description: 'slight increase',
      arrow: 'up',
    },
    {
      title: 'Revenue',
      rate: '$12.4k',
      percent: -2,
      description: 'drop',
      arrow: 'down',
    },
    {
      title: 'Growth Rate',
      rate: '3%',
      percent: 1,
      description: 'increase',
      arrow: 'up',
    },
  ],

  Weekly: [
    {
      title: 'Total Product',
      rate: 18,
      percent: 5,
      description: 'vs last week',
      arrow: 'up',
    },
    {
      title: 'Active Users',
      rate: '600',
      percent: -3,
      description: 'drop',
      arrow: 'down',
    },
    {
      title: 'Revenue',
      rate: '$2.1k',
      percent: 4,
      description: 'growth',
      arrow: 'up',
    },
    {
      title: 'Growth Rate',
      rate: '1.1%',
      percent: 0.5,
      description: 'increase',
      arrow: 'up',
    },
  ],

  Daily: [
    {
      title: 'Total Product',
      rate: 3,
      percent: 1,
      description: 'today',
      arrow: 'up',
    },
    {
      title: 'Active Users',
      rate: '120',
      percent: 0.2,
      description: 'change',
      arrow: 'up',
    },
    {
      title: 'Revenue',
      rate: '$350',
      percent: -1,
      description: 'dip',
      arrow: 'down',
    },
    {
      title: 'Growth Rate',
      rate: '0.2%',
      percent: 0.1,
      description: 'stable',
      arrow: 'up',
    },
  ],
};
