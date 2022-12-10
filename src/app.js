const Blink1 = require('node-blink1');

// array of device serial numbers
const devices = Blink1.devices();

console.log(devices);
