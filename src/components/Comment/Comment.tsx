import { CommentProps } from '../../interfaces/CommentProps';

const Comment = ({ comment, name, lastName }: CommentProps) => {
  return (
    <>
      <div className='comment-container'>
        <h3 className='comment-user'>
          {name} {lastName}
        </h3>
        <span key={comment} className='comment-self'>
          {comment}
        </span>
      </div>
    </>
  );
};

export default Comment;
