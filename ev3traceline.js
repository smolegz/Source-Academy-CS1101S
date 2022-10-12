const right = ev3_motorB();
const left = ev3_motorC();
const gyro = ev3_gyroSensor();
const color_sens = ev3_colorSensor();

function waitRun(motor, time, speed) {
    ev3_runForTime(motor, 1000 * time, speed);
    ev3_pause(time * 1000);
}

function move(right_wheel, left_wheel, pos, speed) {
    ev3_runToRelativePosition(right_wheel, pos, speed);
    ev3_runToRelativePosition(left_wheel, pos, speed);
    ev3_pause(1000 * pos / speed);
}

function traceline() {
    let on_track = true;
    let run = true;
    let counter = 0;
    let speed = 60; 
    
    while (run) {
        
        while(on_track) {
            counter = 0;
            move(right, left, 10, 100);
            on_track = ev3_reflectedLightIntensity(color_sens) <= 10;
        }
        
        while (!on_track) {
            if (counter === 20) {
                run = false;
                break;
            } else {}
            display("not on track. Iteration: " + stringify(k));
            
            waitRun(right, 10, speed); // turn LEFT and check for line
            on_track = (ev3_reflectedLightIntensity(color_sens)) <= 10;
            if (on_track) {
                break;
            } else {
                waitRun(left, 10, speed); // turn back original position
                waitRun(left, 10, speed); //  turn right and check for line
                on_track = (ev3_reflectedLightIntensity(color_sens)) <= 10;
                if (on_track) {
                    break;
                } else {
                    waitRun(right, 10, speed); //turn back original position
                }
            }
            speed = speed + 20;
            counter = counter + 1;
        }
    }
}

traceline();















