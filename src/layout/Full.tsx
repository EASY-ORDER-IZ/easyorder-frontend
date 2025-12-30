import { cn } from '@/lib/utils';

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Full = (props: Props) => {
  return <div className={cn('-mx-14 w-screen', props.className)}>{props.children}</div>;
};

export default Full;
