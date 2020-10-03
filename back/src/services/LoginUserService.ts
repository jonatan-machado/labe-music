import HashManager from '../utils/hashManager';
import { getCustomRepository } from 'typeorm';

import User from '../models/User';
import LoginRepository from '../repositories/LoginRepository';

interface Request {
  email: string;
  nickname?: string;
  password: string;
}

class LoginUserService {
  public async execute({ email, nickname, password }: Request): Promise<User> {
    const loginRepository = getCustomRepository(LoginRepository);

    if ((email === '' && nickname === '') || password === '') {
      throw Error('Fields not empty');
    }

    const passwordHash = new HashManager();

    const hash = await passwordHash.hash(password);

    if (email === '') {
      const findUserEmail = await loginRepository.loginByEmail(email, hash);
      if (!findUserEmail) {
        throw Error('Email or password not exists');
      }

      //fazer retorno jwt
    }
    if (nickname === '') {
      const findUserNickname = await loginRepository.LoginByNickname(
        nickname,
        hash,
      );
      if (!findUserNickname) {
        throw Error('Nickname or password not exists');
      }

      //fazer retorno jwt
    }
    return User;
  }
}

export default LoginUserService;
