import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getGameById } from '../../services/game.services';
import Loading from '../../modules/Loading/Loading';
import { SinglePageItems } from '../../interfaces/SinglePageItems';
import Platforms from '../../modules/Platforms/Platforms';
import { SavedUserProps } from '../../interfaces/SavedUserProps';
import Comment from '../../components/Comment/Comment';
import { GameComment } from '../../interfaces/GameComment';
import { getComments, postComment } from '../../services/comment.services';

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
  const [gamesComment, setGamesComment] = useState<GameComment>({
    gameId: null,
    comment: '',
    userName: '',
    userLastName: '',
  });
  const [comments, setComments] = useState<Comment[]>([]);

  const handleChange = (e: ChangeEvent) => {
    const { value } = e.target;
    setGamesComment(({ comment, gameId, userLastName, userName }) => ({
      comment: value,
      gameId: parseInt(id),
      userName: savedUser.name,
      userLastName: savedUser.lastname,
    }));
  };

  const handleClick = (e: Event) => {
    e.preventDefault();
    try {
      postComment({
        userId: 1,
        gameId: gamesComment.gameId,
        comment: gamesComment.comment,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    (async function getCommentsFromAPI() {
      const response = await getComments();
      setComments(() => [...response]);
    })();
  }, []);

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
  const conditionUserSaved = savedUser?.email.length > 0;

  return (
    <div className='center'>
      {loading ? (
        <Loading />
      ) : (
        <div className='single-page'>
          <div className='single-page-main'>
            <h2 className='title'>{name}</h2>
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
          {conditionUserSaved ? (
            <div className='comment'>
              {comments?.map(({ gameId: commentId, comment }) => {
                if (commentId === parseInt(id)) {
                  return (
                    <Comment
                      key={commentId}
                      commentId={commentId}
                      id={parseInt(id)}
                      comment={comment}
                      name={savedUser.name}
                      lastName={savedUser.lastname}
                    />
                  );
                }
              })}
            </div>
          ) : (
            <span className='no-comments' style={{ textAlign: 'center' }}>
              {conditionUserSaved
                ? 'No comments.'
                : 'You need to be logged in to make a comment.'}
            </span>
          )}
          {conditionUserSaved ? (
            <>
              <textarea
                className='single-page-comment'
                placeholder='Share yours thoughts'
                onChange={handleChange}
              ></textarea>
              <button className='single-page-btn' onClick={handleClick}>
                Comment
              </button>
            </>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default SinglePage;
