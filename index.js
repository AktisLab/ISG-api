const express = require('express');
const morgan = require('morgan');
const cors = require("cors");

const app = express();

app.use(morgan("combined"))
app.use(cors());
app.use(express.static('public'));

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