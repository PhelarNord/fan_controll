const fs = require('fs');
const Gpio = require('pigpio').Gpio;
const fan = new Gpio(14, {mode: Gpio.OUTPUT});

var tempFile ='/sys/class/thermal/thermal_zone0/temp';

const high = 0;
const low = 255;

fan.pwmFrequency(8000);

setInterval(fanSpeed,5000);

function fanSpeed(){

    var temp=fs.readFileSync(tempFile);
    var temp_c = temp/1000;

    if(temp_c=>60){
        
        fan.pwmWrite(high);
        //console.log(fan.getPwmFrequency());
        console.log('Cooling off.. ',temp_c);        

    }
            if(temp_c => 37){     
        
            fan.pwmWrite(Low);
            console.log('Cooling off... ',temp_c);
        
    }
}

