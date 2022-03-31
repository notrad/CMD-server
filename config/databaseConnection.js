const mongoose = require('mongoose');

class Database {
  constructor() {
    this._connect();
  }

  _connect() {
    mongoose.connect(process.env.DB_URI)
    .then((data) => {
      console.log(`Database connection successful to: ${process.env.DB_URI}`);
    })
    .catch(err => {
      console.log('Connection to Database failed: '+ err);
    });
  }
}

module.exports = Database;