import { app } from './app';

const port = 3333;

app.listen(
  process.env.PORT || port,
  () => console.log(`Server is running at port ${process.env.PORT || port}`),
);
