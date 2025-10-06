import { colors } from '@/store/staticData';

const ColorsComponent = () => {
  const firstDiv = colors.slice(0, 5);
  const secondDiv = colors.slice(5, 10);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex w-full justify-between">
        {firstDiv.map((c, index) => (
          <div
            key={index}
            className="h-[37px] w-[37px] rounded-full border-[2px] border-black/20"
            style={{ backgroundColor: c }}
          ></div>
        ))}
      </div>

      <div className="flex w-full justify-between">
        {secondDiv.map((c, index) => (
          <div
            key={index}
            className="h-[37px] w-[37px] rounded-full border-[2px] border-black/20"
            style={{ backgroundColor: c }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ColorsComponent;
