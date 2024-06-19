import express, { Request, Response, Application, NextFunction } from "express";
import { NODE_PORT } from "./config";
import { Author } from "./types/express";

const app: Application = express();

app.get("/", async (req: Request, res: Response) => {
  res.send("This is API");
});

// route bisa abcd atau acd
app.get("/ab?cd", async (req: Request, res: Response) => {
  res.send("/ab?cd");
});

// route bisa abcd abbcd abbbbcd
app.get("/ab+cd", async (req: Request, res: Response) => {
  res.send("/ab+cd");
});

// route bisa abRandomcd abAPAPUNcd
app.get("/ab*cd", async (req: Request, res: Response) => {
  res.send("/ab*cd");
});

// route bisa /abcde /abe, tidak bisa /abce /abde
app.get("/ab(cd)?e", async (req: Request, res: Response) => {
  res.send("/ab(cd)?e");
});

// route bisa ke path apapun yg terdapat karakter a didalamnya
app.get(/a/, async (req: Request, res: Response) => {
  res.send("/a/");
});

// route bisa ke path yang belakangnya fly, dragonfly butterfly
// tidak bisa ke path dragonflyman
app.get(/.*fly$/, async (req: Request, res: Response) => {
  res.send("/.*fly$/");
});

// route parameters
// contoh request url /users/6/books/1
app.get("/users/:userId/books/:bookId", async (req: Request, res: Response) => {
  const { userId, bookId } = req.params;

  res.send({
    userId,
    bookId,
  });
});

// query parameter
// contoh request url /users?name=budi&age=8
app.get("/users", async (req: Request, res: Response) => {
  const { name, age } = req.query;

  res.send({
    name,
    age,
  });
});

app.get(
  "/books",
  async (req: Request, res: Response, next: NextFunction) => {
    req.author = {
      id: 5,
      name: "bubu",
    } as Author;
    next();
  },
  async (req: Request, res: Response) => {
    const { booksId } = req.query;
    res.send({ booksId, author: req.author });
  }
);

app.listen(Number(NODE_PORT), () => {
  console.log(`Server started on port : ${NODE_PORT}`);
});
