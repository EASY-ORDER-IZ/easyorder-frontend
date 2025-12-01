interface Props {
  img: string;
  key: number;
  alt?: string;
  title: string;
}

const ProductCard = ({ img, alt, key, title }: Props) => {
  return (
    <div className="flex h-full w-full max-w-58 flex-col">
      <div key={key} className="flex h-full w-full max-w-58">
        <img src={img} alt={alt} className="rounded-sm object-cover" />
      </div>
      <div>
        <span>{title}</span>
      </div>
    </div>
  );
};

export default ProductCard;
