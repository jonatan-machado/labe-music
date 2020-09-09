import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import { parseISO } from 'date-fns';

import UserRepository from '../repositories/UserRepository';
import CreateUserService from '../services/CreateUserService';

const appointmentsRouter = Router();

appointmentsRouter.get('/', async (request, response) => {
  const userRepositoy = getCustomRepository(UserRepository);

  const users = await userRepositoy.find();
  console.log(users);
  return response.json(users);
});

appointmentsRouter.post('/', async (request, response) => {
  try {
    const { name, email, password, nickname } = request.body;
    console.log(name, email, password, nickname);
    const createUser = new CreateUserService();

    const user = await createUser.execute({
      name,
      email,
      nickname,
      password,
    });
    return response.json(user);
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

export default appointmentsRouter;
