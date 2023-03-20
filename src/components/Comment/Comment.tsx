import { User } from '../../interfaces/User';

const Comment = ({ comments, name, lastName }: Partial<User>) => {
  return (
    <>
      <div className='comment-container'>
        <h3 className='comment-user'>
          {name} {lastName}
        </h3>
        {comments.map(({ comment }) => (
          <span key={comment} className='comment-self'>
            {comment}
          </span>
        ))}
      </div>
    </>
  );
};

export default Comment;
