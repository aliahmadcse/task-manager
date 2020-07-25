import express from 'express';
const router = express.Router();
import * as controller from './userController';

router.get('/user', controller.index);

export default router;
