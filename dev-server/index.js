import express from 'express';
import { registerApiRoutes } from './routes';

const app = express();
const port = 3000;

registerApiRoutes(app);

app.get('/', (req, res) => res.send('Hello Earth'));

app.listen(port, () =>
    console.log(`Task manager app listening at http://localhost:${port}`)
);
