export interface User {
  email: string;
  password: string;
  name?: string;
  lastname?: string;
  commentId: number;
  games?: [
    {
      id: number;
      comments: {
        comment: string;
      };
    }
  ];
}
