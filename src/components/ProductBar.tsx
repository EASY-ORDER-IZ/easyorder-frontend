interface Props {
  title?: string;
  type?: string[];
}

const ProductBar = ({ title }: Props) => {
  return (
    <div className="flex flex-col gap-9 text-center">
      <span className="font-integral text-text text-[21px] leading-[100%] font-bold">{title}</span>
      <div className="grid grid-cols-4">
        <div>aa</div>
        <div>aa</div>
        <div>aaa</div>
        <div>aaa</div>
      </div>
    </div>
  );
};

export default ProductBar;
