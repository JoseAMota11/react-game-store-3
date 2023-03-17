import Pagination from '../../components/Pagination/Pagination';
import { PaginationProps } from '../../interfaces/PaginationProps';

const Main = ({
  // data,
  totalCount,
  currentPage,
  onPageChange,
  pageSize,
  siblingCount,
}: PaginationProps) => {
  return (
    <div>
      <Pagination
        // data={data}
        className='pagination-bar'
        currentPage={currentPage}
        totalCount={totalCount}
        pageSize={pageSize}
        onPageChange={onPageChange}
        siblingCount={siblingCount}
      />
    </div>
  );
};

export default Main;
