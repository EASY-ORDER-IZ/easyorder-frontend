import React from 'react';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

interface props {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages?: number;
}
const ProductPagination: React.FC<props> = ({
  totalItems,
  itemsPerPage,
  currentPage,
  setCurrentPage,
  totalPages: propTotalPages,
}) => {
  const totalPages = propTotalPages || Math.max(1, Math.ceil(totalItems / itemsPerPage));
  return (
    <Pagination>
      <PaginationContent>
        <PaginationPrevious
          href="#"
          onClick={(e) => {
            e.preventDefault();
            if (currentPage > 1) setCurrentPage(currentPage - 1);
          }}
          className="hover:text-white"
        />
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <PaginationItem key={page} className="w-12 p-2">
            <PaginationLink
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setCurrentPage(page);
              }}
              className={
                page === currentPage
                  ? 'bg-[var(--color-primary-main)] text-white'
                  : 'hover:text-white'
              }
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationNext
          href="#"
          onClick={(e) => {
            e.preventDefault();
            if (currentPage < totalPages) setCurrentPage(currentPage + 1);
          }}
          className="hover:text-white"
        />
      </PaginationContent>
    </Pagination>
  );
};

export default ProductPagination;
