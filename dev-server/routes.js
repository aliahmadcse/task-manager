import taskRoutes from './api/tasks/tasksRoutes';
import regisRoutes from './api/register/registerRoutes';
import authRoutes from './api/auth/authRoutes';
import userRoutes from './api/userRoutes/userRoutes';

export function registerApiRoutes(app) {
    app.use('/api', taskRoutes);
    app.use('/api', regisRoutes);
    app.use('/api', authRoutes);
    app.use('/api', userRoutes);
}
