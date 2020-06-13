import { Router } from 'express';
import userRouter from './api/user';
import permissionsRouter from './api/permissions';

const appRouter = Router();

appRouter.use('/user', userRouter);
appRouter.use('/permissions', permissionsRouter);

export default appRouter;
