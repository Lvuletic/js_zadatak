const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const cors = require('cors');
const ObjectId = require('mongodb').ObjectID;

var corsOptions = {
  origin: '*'
};

app.use(bodyParser.json());
app.use(cors(corsOptions));

var db;

MongoClient.connect('mongodb://localhost:27017/js_zadatak', function (err, client) {
  if (err) return console.log(err);

  db = client.db('js_zadatak');

  app.listen(3000, function () {
    console.log('listening on 3000');
  });
});

app.get('/api/zadatak', function (req, res) {
  db.collection('zadatak').find().toArray(function (err, result) {
    if (err) return console.log(err);

    return res.status(200).json(result);
  })
});

app.get('/api/zadatak/:id', function (req, res) {
  db.collection('zadatak').findOne({_id: ObjectId(req.params.id)}, function (err, result) {
    if (err) return console.log(err);

    return res.status(200).json(result);
  })
});

app.post('/api/zadatak', function (req, res) {
  req.body.kreiran = Date.now();
  db.collection('zadatak').save(req.body, function (err, result) {
    if (err) return console.log(err);

    console.log('saved to database');

    return res.status(200).json(req.body);
  })
});

app.put('/api/zadatak/:id', function (req, res) {
  var newValue = {
    $set: {
      ime: req.body.ime,
      opis: req.body.opis
    }
  };
  db.collection('zadatak').updateOne({_id: ObjectId(req.params.id)}, newValue, function (err, result) {
    if (err) return console.log(err);

    console.log('updated');

    return res.status(200).json(result);
  })
});

app.delete('/api/zadatak/:id', function (req, res) {
  db.collection('zadatak').deleteOne({_id: ObjectId(req.params.id)}, function (err, result) {
    if (err) return console.log(err);

    console.log('deleted');

    return res.status(200).json(result);
  })
});
