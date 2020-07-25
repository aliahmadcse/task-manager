import express from 'express';
const app = express();

import { registerApiRoutes } from './routes';
import { setEnv } from './config/env';

// setting up environment
setEnv(app);

const port = 3000;

// making api routes available
registerApiRoutes(app);

app.get('/', (req, res) => {
    if (process.env.NODE_ENV !== 'production') {
        return res.send('Running server in development mode');
    } else {
        return res.sendFile('index.html', { root: __dirname + '/../dist/' });
    }
});

app.listen(port, () =>
    console.log(
        `Task manager app listening at port 3000 in ${process.env.NODE_ENV}`
    )
);
