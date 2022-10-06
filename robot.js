// Type your program in here!
// test

function move(pos, speed) {
    ev3_runToRelativePosition(right_wheel, pos, speed);
    ev3_runToRelativePosition(left_wheel, pos, speed);
    ev3_pause(1000 * pos / speed);
}

// mission q1
// ev3_speak("hi");

// mission q2
const right_wheel = ev3_motorB();
const left_wheel = ev3_motorC();
// ev3_runToRelativePosition(motorA, 10000, 300);
// ev3_runToRelativePosition(motorB, 10000, 300);
// // adjust values of position and speed accordingly
// ev3_pause(1000);
move(100, 300);

// // mission q3
// const right_wheel = ev3_motorA();
// ev3_runForTime(right_wheel, ???, ???);
// // adjust position and speed accordingly to turn 90 degrees

// // mission q4
// const right_wheel = ev3_motorA();
// const left_wheel = ev3_motorB();

// move( , ); // 10cm
// ev3_runForTime(right_wheel, , ); // 90 deg ccw
// ev3_pause();
// move( , ); // 5cm
// ev3_runForTime(left_wheel, , ); // 90 deg cw
// ev3_pause();
// move( , ); // 15cm

// // just like
// // test and fill in