import express from 'express';
const router = express.Router();
import * as controller from './authController';

router.post('/auth', controller.index);

export default router;
