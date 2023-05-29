import express from 'express';
import homeRouter from './routes/HomeRoute';
import taskRouter from './routes/TaskRoute';

const app = express();
const port = 3000;

app.use(
    express.urlencoded({
      extended: true
    })
  )
  app.use(express.json());

  app.listen(port, () => {
    console.info(`App running in port: ${port}`);
});

//Rotas
app.use('/', homeRouter);
app.use('/task', taskRouter);
module.exports = app;
