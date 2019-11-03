const fs = require('fs');
const Gpio = require('pigpio').Gpio;
const fan = new Gpio(10, {mode: Gpio.OUTPUT});

var temp = fs.readFileSync('/sys/class/thermal/thermal_zone0/temp');
var temp_c = temp/1000;
const high = 255;
const low = 100;

fan.pwmFrequency(8000);

setInterval(fanSpeed,5000);

function fanSpeed();{
    if(temp_c<=60){

        fan.pwmWrite(low);
        fan.getPwmFrequency();
        console.log(fan.pwmWrite());
        console.log('Low',temp_c);

        

    }
    else{

        fan.pwmWrite(high);
        console.log('High',temp_c);
        
    }
}

