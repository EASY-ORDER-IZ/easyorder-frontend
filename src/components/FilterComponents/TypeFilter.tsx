import { ChevronRight } from 'lucide-react';
interface TypeItem {
  id: number | string;
  title: string;
}

interface Props {
  type?: TypeItem[];
}

const TypeFilter = ({ type = [] }: Props) => {
  return (
    <div className="flex w-full flex-col gap-5">
      {type.map((c) => {
        return (
          <div key={c.id} className="flex w-full justify-between">
            <span className="text-[16px] leading-[100%] opacity-60">{c.title}</span>
            <ChevronRight className="size-6 cursor-pointer opacity-60" />
          </div>
        );
      })}
    </div>
  );
};

export default TypeFilter;
