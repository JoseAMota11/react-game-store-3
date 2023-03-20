export interface CommentProps {
  commentId: number;
  id: number;
  comments: [
    {
      comment: string;
    }
  ];
  name: string | undefined;
  lastName: string | undefined;
}
