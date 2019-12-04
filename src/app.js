// Initialise config
require('./config/env.js');
const Scheduler = require('./modules/scheduler.js');
const lightController = require('./lights/light-controller');
const Database = require('./models/database.js');

// Initialise data
// TODO: Connect to DB
// TODO: Temporary below
const database = new Database(process.env.CONNECTION_STRING);

// Start Schedule Loop
const scheduler = new Scheduler(process.env.POLL_DELAY, database, lightController);
scheduler.start();

// Start Queue Loop (if we're going that way)
