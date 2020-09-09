import { EntityRepository, Repository } from 'typeorm';

import User from '../models/User';

@EntityRepository(User)
class UserRepository extends Repository<User> {
  public async findbyNickname(nickname: string): Promise<User | null> {
    const findNick = await this.findOne({
      where: { nickname },
    });

    return findNick || null;
  }

  public async findbyEmail(email: string): Promise<User | null> {
    const findEmail = await this.findOne({
      where: { email },
    });

    return findEmail || null;
  }
}

export default UserRepository;
