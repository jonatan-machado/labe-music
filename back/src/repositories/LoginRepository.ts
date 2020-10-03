import { EntityRepository, Repository } from 'typeorm';

import User from '../models/User';

@EntityRepository(User)
class LoginRepository extends Repository<User> {
  public async LoginByNickname(
    nickname: string,
    password: string,
  ): Promise<User | null> {
    const findUser = await this.findOne({
      where: { nickname, password },
    });

    return findUser || null;
  }

  public async loginByEmail(
    email: string,
    password: string,
  ): Promise<User | null> {
    const findUser = await this.findOne({
      where: { email, password },
    });

    return findUser || null;
  }
}

export default LoginRepository;
