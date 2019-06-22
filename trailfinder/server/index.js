const express = require('express');
const path = require('path');
const cors = require('cors');
const db = require('../database/config');
const port = process.env.PORT || 4010;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true }));
app.use(express.static(path.join(__dirname, '../client/public')));

app.get('/api/trails', (req, res) => {
  db.find({}, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.send(data);
    }
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});