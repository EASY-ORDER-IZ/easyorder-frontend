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
import { useTranslation } from 'react-i18next';

interface ReviewsFiltersProps {
  count: number;
  sortOption: 'latest' | 'oldest' | 'top';
  setSortOption: (value: 'latest' | 'oldest' | 'top') => void;
}

const ReviewsFilters = ({ count, sortOption, setSortOption }: ReviewsFiltersProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  return (
    <div className="flex w-full items-center justify-between px-6 md:px-22">
      <div className="flex items-center gap-2">
        <h1 className="text-2xl font-bold">All Reviews</h1>
        <span className="text-text-200">({count})</span>
      </div>

      <div className="flex items-center gap-4">
        <img src={filter} alt="filter" className="cursor-pointer p-2" />

        <Select
          value={sortOption}
          onValueChange={(value : any) => setSortOption(value as 'latest' | 'oldest' | 'top')}
          onOpenChange={(open : any) => setIsOpen(open)}
        >
          <SelectTrigger className="flex w-[8.75rem] items-center justify-between gap-2 rounded-full border border-gray-300 px-4 py-2 [&>svg]:hidden">
            <SelectValue placeholder="Sort by" />
            <img
              src={down_arrow}
              alt="down_arrow"
              className={`h-4 w-4 transition-transform duration-300 ${
                isOpen ? 'rotate-180' : 'rotate-0'
              }`}
            />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="latest">{t('select.latest')}</SelectItem>
            <SelectItem value="oldest">{t('select.oldest')}</SelectItem>
            <SelectItem value="top">{t('select.top')}</SelectItem>
          </SelectContent>
        </Select>

        <Button
          className="font-satoshi rounded-full bg-black px-6 py-2 text-sm text-white transition hover:opacity-80"
          onClick={() => console.log('Write a review')}
        >
          {t('writeReview')}
        </Button>
      </div>
    </div>
  );
};

export default ReviewsFilters;
