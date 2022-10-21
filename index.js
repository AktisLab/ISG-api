const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan("combined"))
app.use(express.static(process.cwd() + '/public'));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/mail', require('./routes/mail'));
app.use('/events', require('./routes/events'));


const PORT = process.env.PORT | 8080;

app.listen(PORT, () => {
  console.log(`Listenning on ${PORT}`);
});


module.exports = app;