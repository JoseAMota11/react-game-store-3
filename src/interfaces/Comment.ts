export interface Comment {
  games: [
    {
      id?: number;
      comments?: {
        comment: string;
      };
    }
  ];
}
