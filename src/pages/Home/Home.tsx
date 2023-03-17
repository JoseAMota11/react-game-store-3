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
        const response = await getGames(PAGE_SIZE, currentPage);
        setData(response.results);
        setTotalCount(response.count);
      } catch (error) {
        // Coming soon
      }
    })();
  }, [currentPage]);

  return (
    <div>
      <Navbar />
      {data.length > 0 ? (
        <Main
          data={data}
          currentPage={currentPage}
          totalCount={totalCount}
          pageSize={PAGE_SIZE}
          onPageChange={(page) => setCurrentPage(page)}
          siblingCount={1}
        />
      ) : null}
      <Footer />
    </div>
  );
};

export default Home;
