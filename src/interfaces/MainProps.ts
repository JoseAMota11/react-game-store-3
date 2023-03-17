import { Data } from './Data';

export interface MainProps {
  data: Data[];
  totalCount: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  pageSize: number;
  siblingCount: number;
}
