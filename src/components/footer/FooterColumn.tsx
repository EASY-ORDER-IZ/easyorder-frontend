import { NavLink } from 'react-router-dom';
import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface FooterColumnProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  items: string[];
}

const FooterColumn = ({ title, items, className, ...props }: FooterColumnProps) => {
  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <h1 className="text-4 leading-5 font-medium">{title}</h1>
      <ul className="flex flex-col gap-3">
        {items.map((item, index) => (
          <li key={index}>
            <NavLink
              to={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
              className={'text-brand-text text-sm capitalize hover:underline'}
            >
              {item}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default FooterColumn;
