import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getGameById } from '../../services/game.services';
import Loading from '../../modules/Loading/Loading';
import { SinglePageItems } from '../../interfaces/SinglePageItems';
import Platforms from '../../modules/Platforms/Platforms';
import { SavedUserProps } from '../../interfaces/SavedUserProps';
import Comment from '../../components/Comment/Comment';

const SinglePage = ({ savedUser }: SavedUserProps) => {
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
  const [gamesComment, setGamesComment] = useState();

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
  const showRating = ` ${rating} / ${rating_top}`;

  return (
    <div className='center'>
      {loading ? (
        <Loading />
      ) : (
        <div className='single-page'>
          <div className='single-page-main'>
            <h2 className='tile'>{name}</h2>
            <span className='rating'>
              {rating_top === 0 ? null : (
                <>
                  <ion-icon name='star' />
                  <span>{showRating}</span>
                </>
              )}
            </span>
          </div>
          <img
            className='single-page-image'
            src={background_image}
            alt={name}
          />
          <h3 className='description-title'>Description</h3>
          {description_raw.length === 0 ? (
            <span>No description</span>
          ) : (
            <p className='single-page-description'>{description_raw}</p>
          )}
          <h3 className='platform-title'>Platforms</h3>
          <div className='platform'>
            {platforms.map(({ platform: { name, id } }) => (
              <Platforms key={id} platform={{ name }} />
            ))}
          </div>
          <h3 className='platform-title'>Comments</h3>
          {savedUser?.email.length > 0 &&
          savedUser.commentId === parseInt(id) ? (
            <div className='comment'>
              {savedUser.games?.map(({ id, comments }) => (
                <Comment
                  key={id}
                  comments={comments}
                  name={savedUser.name}
                  lastName={savedUser.lastname}
                />
              ))}
            </div>
          ) : (
            <span style={{ textAlign: 'center' }}>No comments</span>
          )}
          <textarea
            className='single-page-comment'
            placeholder='Share yours thoughts'
          ></textarea>
          <button className='single-page-btn'>Comment</button>
        </div>
      )}
    </div>
  );
};

export default SinglePage;
