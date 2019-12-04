const EventEmitter = require('events');

class Scheduler extends EventEmitter {
  constructor(pollDelay, database, lightController) {
    super();
    this.pollDelay = pollDelay;
    this.database = database;
    this.lightController = lightController;
    this.workerTimer = null;
  }

  workerThread() {
    // Get the transitions due now and start transitioning
    this.database.getDueTransitions()
      .then((transitions) => {
        transitions.forEach((transition) => this.lightController.transition(transition));
      })
      .catch((err) => this.logger.error('Unable to get Due Transistions', err))
      .finally(() => {
        this.workerTimer = setTimeout(this.workerThread, this.pollDelay);
      });
  }

  start() {
    // Start long running thread to poll the DB
    setImmediate(this.workerThread);
  }

  stop() {
    // Stop the long running thread
    if (this.workerTimer !== null && this.workerTimer !== undefined) {
      clearTimeout(this.workerTimer);
    }
  }
}

module.exports = Scheduler;
