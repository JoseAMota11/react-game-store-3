export interface PaginationProps {
  className?: string;
  currentPage: number;
  totalCount: number;
  pageSize: number;
  onPageChange: (page: number) => void;
  siblingCount: number;
}
