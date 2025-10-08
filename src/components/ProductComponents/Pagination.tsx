import React, { useState } from 'react';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from '@/components/ui/pagination';
import { Button } from '../ui/button/button';

interface Props {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  setCurrentPage: (p: number) => void;
}

const ProductPagination: React.FC<Props> = ({
  totalItems,
  itemsPerPage,
  currentPage,
  setCurrentPage,
}) => {
  const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage));
  const leftCount = 3;
  const rightCount = 3;

  const range = (start: number, end: number) => {
    const arr: number[] = [];
    for (let i = start; i <= end; i++) arr.push(i);
    return arr;
  };

  const handleEllipsisClick = () => {
    if (currentPage <= leftCount) {
      setCurrentPage(Math.max(leftCount + 1, totalPages - rightCount + 1));
      setRightPages(
        rightStart <= totalPages ? range(totalPages - rightStart + leftCount - 1, totalPages) : [],
      );
    } else {
      setCurrentPage(leftCount);
      setRightPages(rightStart <= totalPages ? range(rightStart, totalPages) : []);
    }
  };

  const goPrev = () => setCurrentPage(Math.max(1, currentPage - 1));
  const goNext = () => setCurrentPage(Math.min(totalPages, currentPage + 1));

  const shouldShowAll = totalPages <= leftCount + rightCount;

  const leftPages = range(1, Math.min(leftCount, totalPages));
  const rightStart = Math.max(leftCount + 1, totalPages - rightCount + 1);
  const [rightPages, setRightPages] = useState(
    rightStart <= totalPages ? range(rightStart, totalPages) : [],
  );

  return (
    <Pagination className="relative">
      <PaginationContent className="flex justify-center">
        <PaginationItem className="absolute left-0">
          <PaginationPrevious
            href="#"
            onClick={(e) => {
              e.preventDefault();
              goPrev();
            }}
          />
        </PaginationItem>

        <PaginationItem>
          {leftPages.map((p) => (
            <PaginationLink
              key={p}
              href="#"
              isActive={currentPage === p}
              onClick={(e) => {
                e.preventDefault();
                setCurrentPage(p);
              }}
            >
              {p}
            </PaginationLink>
          ))}

          {!shouldShowAll && (
            <>
              <Button
                aria-label="jump-pages"
                onClick={handleEllipsisClick}
                className="mx-1 inline-flex items-center"
                style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}
              >
                <PaginationEllipsis />
              </Button>

              {rightPages.map((p) => (
                <PaginationLink
                  key={p}
                  href="#"
                  isActive={currentPage === p}
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentPage(p);
                  }}
                >
                  {p}
                </PaginationLink>
              ))}
            </>
          )}
        </PaginationItem>

        <PaginationItem className="absolute right-0">
          <PaginationNext
            href="#"
            onClick={(e) => {
              e.preventDefault();
              goNext();
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default ProductPagination;
