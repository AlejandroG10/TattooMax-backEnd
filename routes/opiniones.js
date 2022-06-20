var express = require('express');
var router = express.Router();
const Opinion = require('../models/Opinion');

router.get('/', function(req, res, next) {
  Opinion.find()
  .then(opiniones => {
    res.json(opiniones);
  })
  .catch(e => {
    console.log(e)
  })});

router.post('/add', function (req, res, next) {
    if (req.body.lengtg == 0) return;
    const { artist, user, titulo, opinion } = req.body;
    Opinion.create({
        artist,
        user,
        titulo,
        opinion
    }, (err, opinion) => {
        if (err) return res.status(500).send(err);
        // console.log(err);
        res.json(opinion);
    })
});

router.put('/:id', function (req, res, next) {
  const { id } = req.params;
  const { artist, user, titulo, opinion } = req.body;
  Opinion.findByIdAndUpdate(id, {
    artist,
    user,
    titulo,
    opinion
  }, (err, opinion) => {
    if (err) return res.status(500).send(err);
    res.send(`Opinion updated`);
  })
});

router.delete('/:id', function (req, res, next) {
  const { id } = req.params;
  Opinion.findByIdAndDelete(id, (err, opinion) => {
    if (err) return res.status(500).send(err);
    res.send(`Opinion deleted`);
  })
});

module.exports = router;
