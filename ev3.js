// mission 1
// global stuff
function move(right_wheel, left_wheel, pos, speed) {
    ev3_runToRelativePosition(right_wheel, pos, speed);
    ev3_runToRelativePosition(left_wheel, pos, speed);
    ev3_pause(1000 * pos / speed);
}

function waitRun(motor, time, speed) {
    ev3_runForTime(motor, 1000 * time, speed);
    ev3_pause(time * 1000);
}

const right = ev3_motorB();
const left = ev3_motorC();
// adjust accordingly to whichever motor is for the right / left
// wheel

// mission 1 q1
// ev3_speak("uwu yu pei thank you for your help i work now");

// // mission q2
// move(right, left, 225, 300);

// // mission q3
//  waitRun(right, 1.15, 300);

// // mission q4
// move(right, left, 225, 300); // 10cm
// waitRun(right, 1.38, 300); // 90 deg ccw
// move(right, left, 112.5, 300); // 5cm
// waitRun(left, 1.38, 300); // 90 deg cw
// move(right, left, 337.5, 300); // 15cm

// // just like
// // test and hardcode values appropriately

////////////////////////////////////////////////////////

/*
uh for the next qn 
theres still the problem of infinite loops

if yall want can add the touch sensor killswitch like they
mentioned in the mission also good, but currently programmed loops
are just running a fixed number of times

subsequent mission and quest prob do touch sensor thing

just in case can also do the ssh method they mentioned on piazza
*/


// next mission: planet thing

// // global stuff

// // runtime limiter
// let m2_stop_at = 100;
// const uSensor = ev3_ultrasonicSensor(); 
// // sensor assumed to be at front of robot

// // function to allow us to move the robot for a fixed time rather
// // than a fixed distance
// function move_time(time) {
//     ev3_runForTime(right, 1000 * time, 300);
//     ev3_runForTime(left, 1000 * time, 300);
//     ev3_pause(1000 * time);
// }


// // q1
// // function distance_every_second() {
// //     for (let x = 0; x < m2_stop_at; x = x + 1) {
// //         display(ev3_ultrasonicSensorDistance(uSensor) / 10);
// //         ev3_pause(1000);
// //     }
// // }

// // distance_every_second();

// // // q2
// let near_wall_q2 = false;

// // parameters: interval (in seconds) is the frequency at which
// // the robot will check distance to the wall.

// function move_and_reverse(interval) {
//     while (!near_wall_q2) {
//         near_wall_q2 = ev3_ultrasonicSensorDistance(uSensor) <= 100;
//         move_time(interval);
//     }
//     move(right, left, -675, -300);
// }

// move_and_reverse(0.2);

// // // q3
// let near_wall_q3 = false;

// // simple approach, not the most efficient but cant think of a
// // better one at the moment

// function move_around(interval) {
    
//     const rand = math_floor(2 * math_random());
//     const dir = rand === 0 ? left : right;
//     const opp_dir = rand === 1 ? left : right;
    
//     while (!near_wall_q3) {
//         near_wall_q3 = ev3_ultrasonicSensorDistance(uSensor) <= 200;
//         move_time(interval);
//     }
    
//     // at this point it's noticed the wall
//     ev3_pause(1000);
    
    
//     while ( near_wall_q3) {
//         waitRun(dir, 1.15, 300);
//         move(right, left, 200, 300);
//         waitRun(opp_dir, 1.25, 300);
//         near_wall_q3 = ev3_ultrasonicSensorDistance(uSensor) <= 100;
//     }
    
//     move(right, left, 500, 300);
    
// }

// move_around(0.1);

// /////////////////////////////////////////////////

// /* global declarations */
const color_sens = ev3_colorSensor();
const gyro = ev3_gyroSensor();
const killswitch = ev3_touchSensor1();
let m3_stop_at = 100;

// /* idk whether the touch sensor thing will work, and hearsay
// while loops might not even be functional, so ill maybe make
// two versions, one while + touch and one for loop */

/* q1 */
/* for version */
function color_ping() {
    for (let x = 0; x < m3_stop_at; x = x + 1) {
        display(ev3_reflectedLightIntensity(color_sens));
        ev3_pause(1000);
    }
}

// color_ping();

/* while version */
// function color_ping() {
//     let kill = false;
//     while (!kill) {
//         display(ev3_reflectedLightIntensity(color_sens));
//         ev3_pause(1000);
//         kill = ev3_touchSensorPressed(killswitch);
//     }
// }

// /* q2 and 3 */

// /* approach: while color sensor detects the line, travel straight;
// once the loop terminates, rotate bot until the line is found
// again, then resume the loop. repeat.
// special cases while turning:
// if a line is found and the turn angle is ~180 degrees, do not 
// accept. (this goes backwards)
// if a line is not found after a 360 degree turn, terminate. */

// /* if yall have better ideas please go ahead */

// /* version 1: while loops */

function trace_line() {
    
    let stop = false;
    let on_track = true;
    let angle = 0;

    while (!stop) {
        if (on_track) {
            move(right, left, 100, 100);
            on_track = ev3_reflectedLightIntensity(color_sens) <= 2;
        } else {
            angle = 0;
            while (!on_track) {
                waitRun(right, 10, 100);
                on_track = (ev3_reflectedLightIntensity(color_sens)) <= 4;
                angle = angle + ev3_gyroSensorAngle(gyro);
                display(angle);
                if (angle >= 360) {
                    stop = true;
                    break;
                } else if (angle === 180) {
                    on_track = false;
                }
            }
        }
    }
}
trace_line();

/* its quite the monstrous thing to verify correctness, so
fingers crossed it works at all */


///////////////////////////////////////////////////////////


/* quest
._. this isnt easy */

/*
ok idea
relatively hardcoded to the specific spiral used, but wtv
right wheel will constantly move at a slow speed
left wheel will be the error correcting factor; as the error
increases, speed increases to move the robot closer to the
center of the line
*/

// // global declarations
// let run_q = 100;
// const color_sensor = ev3_colorSensor();
// const gyro = ev3_gyroSensor();

// function spiral_trace() {
    
//     let stop = false;
//     let error = 0;
//     let prev_error = 0;
//     let spd = 100;
//     let integral = 0;
//     let derivative = 0;
//     const dt = 50;
//     const kp = 1;
//     const ki = 1;
//     const kd = 1;
    
//     while (!stop) {
//         integral = integral + error * dt;
//         derivative = (error - prev_error) / dt;
//         spd = spd + kp * error + ki * integral + kd * derivative;
//         ev3_runForTime(right, dt, 100);
//         ev3_runForTime(left, dt, spd);
//         prev_error = error;
//         error = ev3_reflectedLightIntensity(color_sensor);
//         stop = ev3_reflectedLightIntensity(color_sensor) === 100;
//         ev3_pause(dt);
//     }
// }










































