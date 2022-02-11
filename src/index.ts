import express, { Application } from 'express';
import { port } from './config';

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(require('./router/index'));

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Server is listening on port ${port}!`));
