import { cn } from '@/lib/utils';

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Full = ({ children, className }: Props) => {
  return <div className={cn('-mx-14 w-screen', className)}>{children}</div>;
};

export default Full;
