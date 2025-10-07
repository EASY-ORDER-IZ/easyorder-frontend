import {
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  Pagination,
} from '@/components/ui/pagination';
import { useState } from 'react';

const ProductPagination = () => {
  const numbers = [1, 2, 3, 8, 9, 10];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const handleOnClick = (i: number) => {
    setActiveIndex(i);
  };
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          {numbers.map((c, index) => (
            <PaginationLink
              key={index}
              onClick={() => handleOnClick(index)}
              isActive={activeIndex === index}
              href="#"
            >
              {c}
            </PaginationLink>
          ))}
        </PaginationItem>

        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>

        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default ProductPagination;
