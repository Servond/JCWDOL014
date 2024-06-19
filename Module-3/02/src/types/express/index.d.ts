export type Author = {
  id: number;
  name: string;
};

declare global {
  namespace Express {
    export interface Request {
      author?: Author;
    }
  }
}
