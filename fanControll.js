const fs = require('fs');
const gpio = require('pigpio');
const fan = new gpio(10, {mode: gpio.OUTPUT});

var temp = fs.readFileSync('/sys/class/thermal/thermal_zone0/temp');
var temp_c = temp/1000;

fanSpeed(){
    if(temp_c<=60){

    }
    else if(){
        
    }
}

console.log(temp_c);