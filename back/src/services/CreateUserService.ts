import { startOfHour } from 'date-fns';
import { getCustomRepository } from 'typeorm';

import User from '../models/User';
import UserRepository from '../repositories/UserRepository';

interface Request {
  name: string;
  email: string;
  nickname: string;
  password: string;
}

class CreateAppointmentService {
  public async execute({
    name,
    email,
    nickname,
    password,
  }: Request): Promise<User> {
    const userRepository = getCustomRepository(UserRepository);

    const findUserNickname = userRepository.findbyNickname(nickname);

    if (!findUserNickname) {
      throw Error('This nickname already exists');
    }

    const findUserEmail = userRepository.findbyEmail(email);

    if (!findUserEmail) {
      throw Error('This email already exists');
    }

    if (name === '' || email === '' || nickname === '' || password === '') {
      throw Error('Fields not empty');
    }

    if (password.length <= 6) {
      throw Error('password very simple');
    }

    const user = userRepository.create({
      name,
      email,
      nickname,
      password,
    });

    await userRepository.save(user);

    return user;
  }
}

export default CreateAppointmentService;
