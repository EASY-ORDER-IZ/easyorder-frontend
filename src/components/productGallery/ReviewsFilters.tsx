import React, { useState } from 'react';
import { filter, down_arrow } from '../../assets/icons';
import { Button } from '../ui/button/button';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';

interface ReviewsFiltersProps {
  count: number;
  sortOption: 'latest' | 'oldest' | 'top';
  setSortOption: (value: 'latest' | 'oldest' | 'top') => void;
}

const ReviewsFilters = ({ count, sortOption, setSortOption }: ReviewsFiltersProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center justify-between px-6 md:px-22 w-full">
      <div className="flex gap-2 items-center">
        <h1 className="text-2xl font-bold">All Reviews</h1>
        <span className="text-text-200">({count})</span>
      </div>

      <div className="flex items-center gap-4">
        <img src={filter} alt="filter" className=" cursor-pointer p-2" />

        <Select
          value={sortOption}
          onValueChange={(value) => setSortOption(value as 'latest' | 'oldest' | 'top')}
          onOpenChange={(open) => setIsOpen(open)}
        >
          <SelectTrigger className="flex items-center justify-between gap-2 px-4 py-2 border border-gray-300 rounded-full w-[140px] [&>svg]:hidden">
            <SelectValue placeholder="Sort by" />
            <img
              src={down_arrow}
              alt="down_arrow"
              className={`w-4 h-4 transition-transform duration-300 ${
                isOpen ? 'rotate-180' : 'rotate-0'
              }`}
            />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="latest">Latest</SelectItem>
            <SelectItem value="oldest">Oldest</SelectItem>
            <SelectItem value="top">Most Ratings</SelectItem>
          </SelectContent>
        </Select>

        <Button
          className="bg-black text-white font-satoshi px-6 py-2 text-sm rounded-full hover:opacity-80 transition"
          onClick={() => console.log('Write a review')}
        >
          Write a Review
        </Button>
      </div>
    </div>
  );
};

export default ReviewsFilters;
