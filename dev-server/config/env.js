import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';

export function setEnv(app) {
    if (process.env.NODE_ENV === 'production') {
        setProdEnv(app);
    } else {
        setDevEnv(app);
    }
}

function setDevEnv(app) {
    process.env.NODE_ENV = 'development';
    process.env.DB_URL = 'mongodb://localhost:27017/task_manager';
    process.env.TOKEN_SECRET = 'my-development-secret';
    app.use(bodyParser.json());
    app.use(morgan('dev'));
    app.use(cors());
}

function setProdEnv(app) {
    process.env.DB_URL = process.env.MONGODB_URI;
    process.env.TOKEN_SECRET = process.env.JWT_SECRET;
    app.use(bodyParser.json());
    app.use(express.static(__dirname + '/../../dist'));
}
