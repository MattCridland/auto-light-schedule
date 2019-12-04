const EventEmitter = require('events');

class Database extends EventEmitter {
  constructor(connectionString) {
    super();
    this.connectionString = connectionString;
  }

  connect() {
    return new Promise((resolve, reject) => {
      // TODO - PLACE HOLDERs
      reject(Error('Method not Created'));
      // TODO - possibly some resolution with the this resolution here
      resolve(this.connect());
    });
  }

  getDueTransitions() {
    return new Promise((resolve, reject) => {
      // TODO - possibly some issue with the this resolution here
      this.connect()
        .then((connection) => {
          // TODO - PLACEHOLDERS
          reject(Error('Method Not Created'));

          resolve(connection.select('SOME BUSINESS LOGIC'));
        });
    });
  }
}
module.exports = Database;
