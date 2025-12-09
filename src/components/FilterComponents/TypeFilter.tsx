import { ChevronDown, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { Checkbox } from '../ui/checkbox';

interface TypeItem {
  id: number | string;
  title: string;
  data?: Record<string, string[]>;
}

interface Props {
  type?: TypeItem[];
  appliedFilters: string[];
  setAppliedFilters: React.Dispatch<React.SetStateAction<string[]>>;
}

const TypeFilter = ({ type = [], appliedFilters, setAppliedFilters }: Props) => {
  const [open, setOpen] = useState<number | null>(null);
  const [openSub, setOpenSub] = useState<string | null>(null);
  const [activeSub, setActiveSub] = useState<string | null>(null);

  const handleToggle = (index: number) => {
    setOpen(open === index ? null : index);
    setOpenSub(null);
  };

  return (
    <div className="flex w-full flex-col gap-3">
      {type.map((c, index) => {
        const subCategories = c.data ? Object.keys(c.data) : [];

        return (
          <div key={index}>
            <div
              className="font-satoshi flex w-full items-center justify-between"
              onClick={() => handleToggle(index)}
            >
              <span className="cursor-pointer text-[24px] leading-[100%] opacity-60 hover:text-[var(--color-primary-main)]">
                {c.title}
              </span>

              <span className="cursor-pointer">
                {open === index ? <ChevronDown /> : <ChevronRight />}
              </span>
            </div>

            {open === index && (
              <div className="mt-2 ml-4 flex flex-col gap-2">
                {subCategories.map((sub) => (
                  <div key={sub}>
                    <span
                      onClick={() => {
                        setOpenSub(openSub === sub ? null : sub);
                        setActiveSub(sub);
                      }}
                      className={`flex cursor-pointer justify-between text-[20px] ${
                        openSub === sub || activeSub === sub
                          ? 'text-[var(--color-primary-main)]'
                          : 'opacity-60 hover:text-[var(--color-primary-main)]'
                      }`}
                    >
                      {sub}
                      {openSub === sub ? <ChevronDown /> : <ChevronRight />}
                    </span>

                    {openSub === sub && (
                      <div className="mt-2 ml-4 flex flex-col gap-2 text-[18px]">
                        {c.data?.[sub]?.map((subItem) => (
                          <div key={subItem} className="flex items-center gap-3">
                            <Checkbox
                              checked={appliedFilters.includes(subItem)}
                              onCheckedChange={() => {
                                if (appliedFilters.includes(subItem)) {
                                  setAppliedFilters(appliedFilters.filter((f) => f !== subItem));
                                } else {
                                  setAppliedFilters([...appliedFilters, subItem]);
                                }
                              }}
                            />

                            <span className="cursor-pointer text-[14px] opacity-60 hover:opacity-100">
                              {subItem}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default TypeFilter;
