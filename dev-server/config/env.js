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
    process.env.DB_URL =
        'mongodb://aliahmaddev:Aliahmad244623@ds121248.mlab.com:21248/heroku_g7qvmtt2';
    process.env.TOKEN_SECRET = 'Aliahmad244623';
    app.use(bodyParser.json());
    app.use(express.static(__dirname + '/../../dist'));
}
