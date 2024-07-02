import prisma from "../prisma";

class UserAction {
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

  public async createUser(
    username: string,
    email: string,
    password: string,
    firstname: string,
    lastname: string
  ) {
    try {
      const user = await prisma.user.create({
        data: {
          username,
          email,
          password,
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
