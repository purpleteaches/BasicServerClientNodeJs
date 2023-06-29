// index.mjs
import express from 'express';
import logger from 'morgan';
import router from './routes/index.js';
import detailsRouter from './routes/details.js';

const PORT = 3000;
const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('./../public'));
app.use('/', router);
app.use('/details/', detailsRouter);

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
