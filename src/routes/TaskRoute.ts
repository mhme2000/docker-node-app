import express from 'express';
const taskRouter = express.Router();
import controller from '../controllers/TaskController';

taskRouter.get('/', controller.get);
taskRouter.post('/', controller.post);
taskRouter.delete('/:taskId', controller.delete);
export default taskRouter;