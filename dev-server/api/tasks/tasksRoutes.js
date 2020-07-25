import express from 'express';
const router = express.Router();
import * as controller from './tasksController';

router.post('/task', controller.create);

router.get('/task', controller.index);

router.get('/task/:id', controller.show);

router.put('/task', controller.update);

router.delete('/task', controller.remove);

export default router;
