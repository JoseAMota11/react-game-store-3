import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getGameById } from '../../services/game.services';
import Loading from '../../modules/Loading/Loading';
import { SinglePageItems } from '../../interfaces/SinglePageItems';
import Platforms from '../../modules/Platforms/Platforms';

const SinglePage = () => {
  const { id } = useParams();
  const [data, setData] = useState<SinglePageItems>({
    name: '',
    description_raw: '',
    background_image: '',
    rating: 0,
    rating_top: 0,
    platforms: [],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async function test() {
      const {
        name,
        description_raw: description,
        background_image: image,
        rating,
        rating_top: ratingTop,
        platforms,
      } = await getGameById(id);
      setData((prevState) => ({
        ...prevState,
        name,
        description_raw: description,
        background_image: image,
        rating,
        rating_top: ratingTop,
        platforms,
      }));
      setLoading(false);
    })();
  }, []);

  const {
    name,
    description_raw,
    background_image,
    rating,
    rating_top,
    platforms,
  }: SinglePageItems = data;

  return (
    <div className='center'>
      {loading ? (
        <Loading />
      ) : (
        <div className='single-page'>
          <div className='single-page-main'>
            <h2 className='tile'>{name}</h2>
            <span className='rating'>
              <ion-icon name='star' /> {rating} / {rating_top}
            </span>
          </div>
          <img
            className='single-page-image'
            src={background_image}
            alt={name}
          />
          <h3 className='description-title'>Description</h3>
          <p className='single-page-description'>{description_raw}</p>
          <h3 className='platform-title'>Platforms</h3>
          <div className='platform'>
            {platforms.map(({ platform: { name, id } }) => (
              <Platforms key={id} platform={{ name }} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SinglePage;
