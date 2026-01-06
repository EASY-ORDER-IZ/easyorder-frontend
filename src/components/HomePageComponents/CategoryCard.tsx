interface Props {
  img: string;
  key: number;
  alt?: string;
}

const CategoryCard = ({ img, alt, key }: Props) => {
  return (
    <div className="flex w-[14.6rem] flex-shrink-0 cursor-pointer snap-center flex-col gap-3 p-2 sm:min-w-[60%] md:min-w-[45%] lg:min-w-0">
      <div key={key} className="flex h-full w-full">
        <img src={img} alt={alt} className="rounded-sm object-cover" />
      </div>
    </div>
  );
};

export default CategoryCard;
