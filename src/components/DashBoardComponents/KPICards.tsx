import { downArrow, topArrow } from '@/assets/icons';
import type { FC } from 'react';

interface KPIProps {
  title: string;
  rate: number | string;
  percent?: number;
  description?: string;
  arrow: string;
  onClick?: () => void;
  isActive?: boolean;
}

const KPICards: FC<KPIProps> = ({
  title,
  rate,
  percent,
  description,
  arrow,
  onClick,
  isActive = false,
}) => {
  return (
    <div
      onClick={onClick}
      className={`mt-5 w-[20.063rem] cursor-pointer rounded-md bg-[#F0F0F0] p-5 ${isActive ? 'border-[var( --color-border-cards)] border' : ''} `}
    >
      <span className="text-text-700 text-[0.8rem] font-bold">{title}</span>

      <div className={`${title === 'Revenue' ? 'gap-12' : ''} flex items-center gap-3`}>
        <h1 className="text-h2 w-[4.5rem]">
          {title === 'Growth Rate' && arrow == 'up' ? '+' : ''}
          {rate}
        </h1>

        {title === 'Growth Rate' ? (
          ''
        ) : (
          <div className="flex gap-1">
            {arrow === 'up' ? <img src={topArrow} /> : <img src={downArrow} />}

            <div
              className={`flex items-center gap-1 text-sm ${
                arrow === 'up'
                  ? 'text-[var(--color-green-card)]'
                  : 'text-[var(--color-primary-main)]'
              }`}
            >
              <span>{percent}%</span>
              <span>{description}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default KPICards;
