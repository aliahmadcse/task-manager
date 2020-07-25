import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello Earth'));

app.listen(port, () =>
    console.log(`Task manager app listening at http://localhost:${port}`)
);
