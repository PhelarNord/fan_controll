const fs = require('fs');
const gpio = require('pigpio');
const fan = new gpio(10, {mode: gpio.OUTPUT});

var temp = fs.readFileSync('/sys/class/thermal/thermal_zone0/temp');
var temp_c = temp/1000;
const pulseWidthLow = 15;
const pulseWidthHigh = 25;


fanSpeed(){
    if(temp_c<=60){

        fan.servoWrite(pulseWidthLow);
        

    }
    else{

        fan.servoWrite(pulseWidthHigh)
        
    }
}
setTimeout(fanSpeed,100000);

console.log(temp_c);