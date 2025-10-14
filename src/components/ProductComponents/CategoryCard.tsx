import { useNavigate } from 'react-router';

interface Props {
  title?: string;
  img?: string;
}

const CategoryCard = ({ title, img }: Props) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/cate/${title?.toLowerCase()}`);
  };

  return (
    <div className="cursor-pointer" onClick={handleNavigate}>
      <div className="flex">
        <div className="absolute flex items-center justify-center p-4">
          <span className="text-text text-p text-center font-bold">{title}</span>
        </div>
        <img className="rounded-1xl max-h-46 w-[100%]" src={img} alt={title} />
      </div>
    </div>
  );
};

export default CategoryCard;
