import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';

export function setEnv(app) {
    console.log(process.env);
    if (process.env.NODE_ENV === 'production') {
        setProdEnv(app);
    } else {
        setDevEnv(app);
    }
}

function setDevEnv(app) {
    console.log('Setting dev env');
    app.use(bodyParser.json());
    app.use(morgan('dev'));
    app.use(cors());
}

function setProdEnv(app) {
    app.use(bodyParser.json());
    app.use(express.static(__dirname + '/../dist'));
    console.log('Setting prod env');
}
