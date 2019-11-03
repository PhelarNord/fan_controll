const fs = require('fs');
const Gpio = require('pigpio').Gpio;
const fan = new Gpio(10, {mode: Gpio.OUTPUT});

var tempFile ='/sys/class/thermal/thermal_zone0/temp';

const high = 0;
const low = 255;

fan.pwmFrequency(8000);

setInterval(fanSpeed,5000);

function fanSpeed(){

    var temp=fs.readFileSync(tempFile);
    var temp_c = temp/1000;

    if(temp_c<=60){

        fan.pwmWrite(low);
        //console.log(fan.getPwmFrequency());
        console.log('Low',temp_c);

        

    }
    else{

        fan.pwmWrite(high);
        console.log('High',temp_c);
        
    }
}

