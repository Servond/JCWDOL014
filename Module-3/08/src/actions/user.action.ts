import prisma from "../prisma";
import { genSalt, hash, compare } from "bcrypt";
import { sign } from "jsonwebtoken";

class UserAction {
  public async login(email: string, password: string) {
    try {
      const user = await prisma.user.findFirst({
        select: {
          username: true,
          email: true,
          firstname: true,
          lastname: true,
          password: true,
          role: {
            select: {
              name: true,
            },
          },
        },
        where: {
          email,
        },
      });

      if (!user) throw new Error("Email or password is incorrect");

      const isValid = await compare(password, user.password);

      if (!isValid) throw new Error("Password is incorrect");

      const payload = {
        email: user.email,
        username: user.username,
        firstname: user.firstname,
        lastname: user.lastname,
        role: user.role.name,
      };

      const token = sign(payload, String(process.env.API_KEY), {
        expiresIn: "1hr",
      });

      return token;
    } catch (err) {
      throw err;
    }
  }

  public async findUserByEmail(email: string) {
    try {
      const user = await prisma.user.findUnique({
        where: {
          email,
        },
      });

      return user;
    } catch (err) {
      throw err;
    }
  }

  public async findUserById(id: number) {
    try {
      const user = await prisma.user.findUnique({
        where: {
          id,
        },
      });

      return user;
    } catch (err) {
      throw err;
    }
  }

  public async findUserByEmailOrUsername(email: string, username: string) {
    try {
      const user = await prisma.user.findFirst({
        where: {
          OR: [
            {
              username,
            },
            {
              email,
            },
          ],
        },
      });

      return user;
    } catch (err) {
      throw err;
    }
  }

  public async createUser(
    username: string,
    email: string,
    password: string,
    firstname: string,
    lastname: string
  ) {
    try {
      const check = await this.findUserByEmailOrUsername(email, username);

      if (check) throw new Error("Email or Username already exist");

      const salt = await genSalt(10);
      const hashPass = await hash(password, salt);

      const user = await prisma.user.create({
        data: {
          username,
          email,
          password: hashPass,
          firstname,
          lastname,
          roleId: 1,
        },
      });

      return user;
    } catch (err) {
      throw err;
    }
  }
}

export default new UserAction();
