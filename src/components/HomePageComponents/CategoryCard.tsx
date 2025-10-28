interface Props {
  img: string;
  key: number;
  alt?: string;
  title: string;
}

const CategoryCard = ({ img, alt, key, title }: Props) => {
  return (
    <div className="flex flex-col gap-3">
      <div key={key} className="flex h-full w-full">
        <img src={img} alt={alt} className="rounded-sm object-cover" />
      </div>
      <div className="flex items-center justify-center">
        <span className="text-text-secondary text-cate leading-10 font-medium">{title}</span>
      </div>
    </div>
  );
};

export default CategoryCard;
