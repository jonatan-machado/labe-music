import { Router } from 'express';

const routes = Router();

import userRouter from './user.routes';

routes.use('/user', userRouter);

export default routes;
