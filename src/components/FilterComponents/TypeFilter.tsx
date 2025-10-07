import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router';
interface TypeItem {
  id: number | string;
  title: string;
}

interface Props {
  type?: TypeItem[];
}

const TypeFilter = ({ type = [] }: Props) => {
  const navigate = useNavigate();
  const handleCate = (title: string) => {
    return navigate(`/cate/${title?.toLowerCase()}`);
  };
  return (
    <div className="flex w-full flex-col gap-5">
      {type.map((c, index) => {
        return (
          <div key={index} className="flex w-full justify-between">
            <span className="text-[16px] leading-[100%] opacity-60">{c.title}</span>
            <ChevronRight
              onClick={() => handleCate(c.title)}
              className="size-6 cursor-pointer opacity-60"
            />
          </div>
        );
      })}
    </div>
  );
};

export default TypeFilter;
