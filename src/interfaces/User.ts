export interface User {
  email: string;
  password: string;
  name?: string;
  lastname?: string;
  games?: [
    {
      id: number;
      comment: string;
    }
  ];
  isLoggedIn: boolean;
}
