import { useEffect, useState } from 'react';
import { getGames } from '../../services/game.services';
import { PAGE_SIZE } from '../../helpers/constants';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Main from '../Main/Main';
import Pagination from '../../components/Pagination/Pagination';
import Loading from '../../modules/Loading/Loading';
import { SavedUserProps } from '../../interfaces/SavedUserProps';
import Search from '../../components/Search/Search';

const Home = ({
  currentPage,
  setCurrentPage,
  savedUser,
  setSavedUser,
  setShowAlert,
}: Partial<SavedUserProps>) => {
  const [data, setData] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    (async function () {
      try {
        if (!isSearching) {
          setLoading(true);
          const response = await getGames(PAGE_SIZE, currentPage);
          setData(response.results);
          setTotalCount(response.count);
          setLoading(false);
        }
      } catch (error) {
        /* Coming soon */
      }
    })();
  }, [currentPage]);

  return (
    <div className='home'>
      <Navbar
        savedUser={savedUser}
        setSavedUser={setSavedUser}
        setShowAlert={setShowAlert}
      />
      <Search
        setData={setData}
        setTotalCount={setTotalCount}
        setIsSearching={setIsSearching}
        currentPage={currentPage}
      />
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
