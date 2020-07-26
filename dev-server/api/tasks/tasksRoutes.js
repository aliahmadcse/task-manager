import express from 'express';
const router = express.Router();
import * as controller from './tasksController';
import * as auth from '../../services/authService';

router.post('/task', auth.requireLogin, controller.create);

router.get('/task', auth.requireLogin, controller.index);

router.get('/task/:id', auth.requireLogin, controller.show);

router.put('/task', auth.requireLogin, controller.update);

router.delete('/task', auth.requireLogin, controller.remove);

export default router;
