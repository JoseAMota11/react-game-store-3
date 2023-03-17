import { useNavigate } from 'react-router-dom';
import { CardProps } from '../../interfaces/CardProps';

const Card = ({ data }: CardProps) => {
  const navigate = useNavigate();
  const {
    background_image: backgroundImage,
    name,
    rating,
    rating_top: ratingTop,
    id,
  } = data;

  const showRating = ` ${rating} / ${ratingTop}`;
  const placeholderImage = 'https://placehold.co/600x400?text=No+Image';

  const handleClick = () => {
    navigate(`game/${id}`);
  };

  return (
    <div className='container-card' onClick={handleClick}>
      <img
        className='container-card__image'
        src={backgroundImage ?? placeholderImage}
        alt={name}
      />
      <div className='container-card__info'>
        <h3 className='info-name'>{name}</h3>
        <span className='info-rating'>
          {ratingTop === 0 ? null : (
            <>
              <ion-icon name='star' />
              <span>{showRating}</span>
            </>
          )}
        </span>
      </div>
    </div>
  );
};

export default Card;
