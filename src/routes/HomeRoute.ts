import express from 'express';
const homeRouter = express.Router();
import controller from '../controllers/HomeController';

homeRouter.get('/', controller.get);
export default homeRouter;