import { useNavigate } from 'react-router';

interface Props {
  title?: string;
  img?: string;
  link?: string;
}

const CategoryCard = ({ title, img, link }: Props) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`${link}`);
  };

  return (
    <div className="cursor-pointer" onClick={handleNavigate}>
      <div className="absolute flex items-center justify-center p-4">
        <span className="text-text text-[22px] font-bold">{title}</span>
      </div>
      <img className="rounded-3xl" src={img} alt={title} />
    </div>
  );
};

export default CategoryCard;
