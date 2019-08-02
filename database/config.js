const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/trails');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error connecting:'));
db.once('open', () => {
  console.log('Successfully connected to MongoDB');
});

const trailsSchema = mongoose.Schema({
  trail_name: { type: String, unique: true},
  coordinates: Array,
  distance_from_addr: Number
});

const Trails = mongoose.model('Trails', trailsSchema);

module.exports = db;
module.exports = Trails;