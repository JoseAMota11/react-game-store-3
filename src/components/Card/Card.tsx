import { CardProps } from '../../interfaces/CardProps';

const Card = ({ data }: CardProps) => {
  const {
    background_image: backgroundImage,
    name,
    rating,
    rating_top: ratingTop,
    id,
  } = data;

  return (
    <div className='container-card'>
      <img className='container-card__image' src={backgroundImage} alt={name} />
      <div className='container-card__info'>
        <h3 className='info-name'>{name}</h3>
        <span className='info-rating'>
          <ion-icon name='star' />
          {rating} / {ratingTop}
        </span>
      </div>
    </div>
  );
};

export default Card;
