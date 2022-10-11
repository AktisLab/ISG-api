const morgan = require('morgan');

const app = require('express')();

app.use(morgan("combined"))

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/mail', require('./routes/mail'));
app.use('/events', require('./routes/events'));


const PORT = process.env.PORT | 8080;

app.listen(PORT, () => {
  console.log(`Listenning on ${PORT}`);
});
