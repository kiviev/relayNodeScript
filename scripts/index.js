require('dotenv').config();
const fb = require('./firebase');

console.log('comenzamos ....', Date());
require('./leds')('luz');
