interface Props {
  title: string;
  desc: string;
}
const Title = ({ title, desc }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <span className="text-text-primary text-login leading-7 font-medium">{title}</span>
      <span className="text-text-primary text-sm leading-7">{desc}</span>
    </div>
  );
};

export default Title;
