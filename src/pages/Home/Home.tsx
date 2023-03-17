import { useEffect, useState } from 'react';
import { getGames } from '../../services/game.services';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Main from '../Main/Main';
import { PAGE_SIZE } from '../../helpers/constants';

const Home = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    (async function () {
      try {
        const { result, count } = await getGames(PAGE_SIZE, currentPage);
        setData(result);
        setTotalCount(count);
      } catch (error) {}
    })();
  }, [currentPage]);

  return (
    <div>
      <Navbar />
      <Main
        // data={data}
        currentPage={currentPage}
        pageSize={PAGE_SIZE}
        totalCount={totalCount}
        onPageChange={(page) => setCurrentPage(page)}
        siblingCount={1}
      />
      <Footer />
    </div>
  );
};

export default Home;
