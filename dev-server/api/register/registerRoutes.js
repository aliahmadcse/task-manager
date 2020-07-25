import express from 'express';
const router = express.Router();
import * as controller from './registerController';

router.post('/register', controller.index);

export default router;
