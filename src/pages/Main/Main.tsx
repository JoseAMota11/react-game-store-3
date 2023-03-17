import Card from '../../components/Card/Card';
import Pagination from '../../components/Pagination/Pagination';
import { MainProps } from '../../interfaces/MainProps';

const Main = ({
  data,
  totalCount,
  currentPage,
  onPageChange,
  pageSize,
  siblingCount,
}: MainProps) => {
  return (
    <div className='main'>
      <div className='main-grid'>
        {data.map((card) => (
          <Card key={card.id} data={card} />
        ))}
      </div>
      <Pagination
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
