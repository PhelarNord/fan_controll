const fs = require('fs');

var temp = fs.readFileSync('/sys/class/thermal/thermal_zone0/temp');
var temp_c = temp/1000;

console.log(temp_c);