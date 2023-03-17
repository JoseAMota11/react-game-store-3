import { useParams } from 'react-router-dom';
import { getGameById } from '../../services/game.services';

const SinglePage = () => {
  const { id } = useParams();

  (async function test() {
    const result = await getGameById(id);
    console.log(result);
  })();

  return <div>SinglePage</div>;
};

export default SinglePage;
