const fs = require('fs');
const Gpio = require('pigpio').Gpio;
const fan = new gpio(10, {mode: Gpio.OUTPUT});

var temp = fs.readFileSync('/sys/class/thermal/thermal_zone0/temp');
var temp_c = temp/1000;
const pulseWidthLow = 1000;
const pulseWidthHigh = 2000;

setTimeout(fanSpeed,100000);

function fanSpeed();{
    if(temp_c<=60){

        fan.servoWrite(pulseWidthLow);
        console.log('Low',temp_c);
        

    }
    else{

        fan.servoWrite(pulseWidthHigh);
        console.log('High',temp_c);
        
    }
}

