const router = require('express').Router();

router.get('/association', (req, res) => {
  res.send([
    {
      title: "",
      date: "",
      cover: "",
      description: ""
    },
  ]);
});

router.get('/company', (req, res) => { res.send('ko'); });
router.get('/concertHall', (req, res) => { res.send('ko'); });
router.get('/artist', (req, res) => { res.send('ko'); });

module.exports = router;
