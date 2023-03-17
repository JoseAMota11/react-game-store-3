import { useEffect, useState } from 'react';
import { getGames } from '../../services/game.services';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Main from '../Main/Main';
import { PAGE_SIZE } from '../../helpers/constants';
import Pagination from '../../components/Pagination/Pagination';
import Loading from '../../modules/Loading/Loading';

const Home = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        const response = await getGames(PAGE_SIZE, currentPage);
        setData(response.results);
        setTotalCount(response.count);
        setLoading(false);
      } catch (error) {
        /* Coming soon */
      }
    })();
  }, [currentPage]);

  return (
    <div className='home'>
      <Navbar />
      {loading ? <Loading /> : <Main data={data} />}
      <Pagination
        className='pagination-bar'
        currentPage={currentPage}
        totalCount={totalCount}
        pageSize={PAGE_SIZE}
        onPageChange={(page) => setCurrentPage(page)}
        siblingCount={1}
      />
      <Footer />
    </div>
  );
};

export default Home;
