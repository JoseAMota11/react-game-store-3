import addConditionalClassName from '../../helpers/addConditionalClassName';
import { DOTS } from '../../helpers/constants';
import usePagination from '../../hooks/usePagination';
import { PaginationProps } from '../../interfaces/PaginationProps';

const Pagination = ({
  onPageChange,
  totalCount,
  siblingCount,
  currentPage,
  pageSize,
  className,
}: PaginationProps) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  const lastPage = paginationRange[paginationRange.length - 1];
  return (
    <div
      className={addConditionalClassName('pagination-container', {
        [className]: className,
      })}
    >
      <button
        type='button'
        className={addConditionalClassName('pagination-item', {
          disabled: currentPage === 1,
        })}
        onClick={onPrevious}
      >
        <ion-icon name='chevron-back-outline' />
      </button>
      {paginationRange.map((pageNumber) => {
        if (pageNumber === DOTS) {
          return (
            <button
              key={totalCount--}
              type='button'
              className='pagination-item dots'
            >
              &#8230;
            </button>
          );
        }
        return (
          <button
            type='button'
            key={pageNumber}
            className={addConditionalClassName('pagination-item', {
              selected: pageNumber === currentPage,
            })}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </button>
        );
      })}
      <button
        type='button'
        className={addConditionalClassName('pagination-item', {
          disabled: currentPage === lastPage,
        })}
        onClick={onNext}
      >
        <ion-icon name='chevron-forward-outline' />
      </button>
    </div>
  );
};

export default Pagination;
