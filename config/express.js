import bodyParser from 'body-parser';
import express from 'express';



module.exports = () => {
    const app = express();

    app.set('port', process.env.PORT || config.get('server.port'));

    app.use(bodyParser.json());

    return app;
}