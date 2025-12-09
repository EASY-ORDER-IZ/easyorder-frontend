import React from 'react';

interface AppliedFiltersProps {
  appliedFilters: string[];
  setAppliedFilters: React.Dispatch<React.SetStateAction<string[]>>;
}

const AppliedFilters: React.FC<AppliedFiltersProps> = ({ appliedFilters, setAppliedFilters }) => {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="text-[24px] font-bold">Applied Filters:</span>

      {appliedFilters.map((filter) => (
        <div
          key={filter}
          className="flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 text-sm"
        >
          {filter}
          <button
            className="text-red-500"
            onClick={() => setAppliedFilters((prev) => prev.filter((f) => f !== filter))}
          >
            ✕
          </button>
        </div>
      ))}
    </div>
  );
};

export default AppliedFilters;
