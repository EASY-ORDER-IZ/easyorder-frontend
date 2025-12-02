import { useNavigate } from 'react-router';

interface Props {
  img: string;
  key: number;
  alt?: string;
}

const CategoryCard = ({ img, alt, key }: Props) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/cate/${alt?.toLowerCase()}`);
  };
  return (
    <div
      className="flex min-w-[80%] flex-shrink-0 cursor-pointer snap-center flex-col gap-3 sm:min-w-[60%] md:min-w-[45%] lg:min-w-0"
      onClick={handleNavigate}
    >
      <div key={key} className="flex h-full w-full">
        <img src={img} alt={alt} className="rounded-sm object-cover" />
      </div>
    </div>
  );
};

export default CategoryCard;
