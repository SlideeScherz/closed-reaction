const Blink1 = require('node-blink1');

// array of device serial numbers
const devices = Blink1.devices();
console.log(devices);

// create blink 1 object
const blink1 = new Blink1();

const fadeIngreen = () => {
  blink1.setRGB(50, 200, 100);
};

var isOn = true;

// blink green every second
setInterval(() => {
  if (isOn) {
    fadeIngreen();
  }
  // turn off
  else {
    blink1.off();
  }

  // toggle switch
  isOn = !isOn;
}, 1000);
