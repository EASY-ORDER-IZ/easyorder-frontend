import { size } from '../../store/staticData';
import { Checkbox } from '../ui/checkbox';
import { useFiltersStore } from '@/store/useFiltersStore';

const Size = () => {
  const addFilter = useFiltersStore((s) => s.addFilter);
  const removeFilter = useFiltersStore((s) => s.removeFilter);

  return (
    <div className="flex w-full flex-col flex-wrap gap-2">
      {size.map((s) => {
        return (
          <div
            className="text-small text-text-300 flex flex-row items-center justify-between"
            key={s.id}
          >
            {s.title}
            <Checkbox
              onCheckedChange={(checked) => {
                if (checked) {
                  addFilter({
                    key: `size-${s.id}`,
                    label: s.title,
                    value: String(s.id),
                  });
                } else {
                  removeFilter(String(s.id));
                }
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Size;
