export type User = {
  email: string;
  username: string;
  firstname: string;
  lastname: string;
  role: string;
};

declare global {
  namespace Express {
    export interface Request {
      user?: User;
    }
  }
}
