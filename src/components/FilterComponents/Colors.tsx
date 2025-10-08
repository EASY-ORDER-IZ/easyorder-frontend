import { colors } from '@/store/staticData';

const ColorsComponent = () => {
  return (
    <div className="flex w-full flex-wrap gap-3">
      {colors.map((c, index) => (
        <div
          key={index}
          className="h-[37px] w-[37px] rounded-full border-[2px] border-black/20"
          style={{ backgroundColor: c }}
        ></div>
      ))}
    </div>
  );
};

export default ColorsComponent;
