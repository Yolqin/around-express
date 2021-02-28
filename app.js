const express = require('express');
const path = require('path');

const { PORT = 3000 } = process.env;
const app = express();

const userRouter = require('./routes/users');
const cardRouter = require('./routes/cards');

app.use(express.static(path.join(__dirname, 'public')));

app.use(userRouter);
app.use(cardRouter);

app.get('*', (req, res) => {
  res.status(404).send({ message: 'Requested resource not found' });
});

app.listen(PORT, () => {
  // if everything works fine, the console will show which port the application is listening to
  // eslint-disable-next-line no-console
  console.log(`App listening at port ${PORT}`);
});
