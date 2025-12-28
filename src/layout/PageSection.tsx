import { cn } from '@/lib/utils';
import React from 'react';

interface pageSectionProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

const PageSection: React.FC<pageSectionProps> = ({
  children,
  className,
  as: Component = 'section',
}) => {
  return (
    <Component className={cn('flex w-full flex-col gap-6 md:gap-10', className)}>
      {children}
    </Component>
  );
};

export default PageSection;
