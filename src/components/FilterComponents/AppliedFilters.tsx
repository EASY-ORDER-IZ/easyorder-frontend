import { useFiltersStore } from '@/store/useFiltersStore';
import { CircleX } from 'lucide-react';

const AppliedFilters = () => {
  const { appliedFilters, removeFilter } = useFiltersStore();

  if (appliedFilters.length === 0) return null;

  return (
    <div className="mt-3 flex flex-wrap items-center gap-3">
      <span className="text-text-300 text-small">Applied Filters:</span>
      {appliedFilters.map((filter) => (
        <div
          key={filter.value}
          className="bg-background-600 border-background-600 flex items-center gap-2 rounded-md border px-3 py-1 text-sm"
        >
          <span>{filter.label}</span>
          <CircleX
            onClick={() => removeFilter(filter.value)}
            size={14}
            className="text-gray-400 hover:text-gray-600"
          />
        </div>
      ))}
    </div>
  );
};

export default AppliedFilters;
