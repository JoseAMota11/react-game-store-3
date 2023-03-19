import { useEffect, useState } from 'react';
import { getGames } from '../../services/game.services';
import { PAGE_SIZE } from '../../helpers/constants';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Main from '../Main/Main';
import Pagination from '../../components/Pagination/Pagination';
import Loading from '../../modules/Loading/Loading';
import { SavedUserProps } from '../../interfaces/SavedUserProps';

const Home = ({
  currentPage,
  setCurrentPage,
  savedUser,
  setSavedUser,
}: Partial<SavedUserProps>) => {
  const [data, setData] = useState([]);
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
      <Navbar savedUser={savedUser} setSavedUser={setSavedUser} />
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
