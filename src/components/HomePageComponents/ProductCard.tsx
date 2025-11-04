interface Props {
  img: string;
  key: number;
  alt?: string;
  title: string;
}

const ProductCard = ({ img, alt, key, title }: Props) => {
  return (
    <div className="flex flex-col">
      <div key={key} className="flex h-full w-full">
        <img src={img} alt={alt} className="rounded-sm object-cover" />
      </div>
      <div>
        <span>{title}</span>
      </div>
    </div>
  );
};

export default ProductCard;
