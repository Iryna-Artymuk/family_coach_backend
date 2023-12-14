import express from 'express';
import logger from 'morgan';
import cors from 'cors';
import path from 'path';
import feedbackRouter from './routes/api/feedbackRouter.js';
import blogRouter from './routes/api/blogRouter.js';
import priceRouter from './routes/api/priceRouter.js';
import qualificationRouter from './routes/api/qualificationRouter.js';
import authRouter from './routes/api/authRouter.js';
// import { BodyParser } from 'body-parser';
const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors()); // дозволяє запити з інших адрес
// app.use(BodyParser.urlencoded({ extended: false }));
// app.use(BodyParser.json());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.resolve('public')));
app.use(express.static(path.resolve('public', 'images')));

app.use('/api/feedbacks', feedbackRouter);
app.use('/api/blog', blogRouter);
app.use('/api/price', priceRouter);
app.use('/api/qualification', qualificationRouter);
app.use('/api/auth', authRouter);

//  обробка запиту на адресу якої не існує
app.use((req, res) => {
  res.status(404).json({ message: ' Page not found' });
});

app.use((err, req, res, next) => {
  // деструктуризація з предачею дефолтних параметрів
  const { status = 500, message = 'Server error' } = err;
  res.status(status).json({ status: 'error', message });
});

export default app;
