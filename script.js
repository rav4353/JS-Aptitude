	
// 1. A person crosses a 600 m long street in 5 minutes. What is his speed in km per hour? --- Time and Distance

let distance = 600; 
let crossed_min = 5; 
let min = 60;
let speed = distance/(crossed_min*min);
let millisec_to_km = speed*18/crossed_min;

console.log(millisec_to_km+" km/hr");


 	
// 2. An accurate clock shows 8 o'clock in the morning. Through how may degrees will the hour hand rotate when the clock shows 2 o'clock in the afternoon? ---  Clock

let clockCircle = 360;
let durationOftime = 6; 
let total_hours = 12; 
let calculated = (clockCircle/total_hours)*durationOftime;

console.log(calculated+ "\xB0");

 
// 3. A train running at the speed of 60 km/hr crosses a pole in 9 seconds. What is the length of the train? --- Problems on Trains

let travelSpeed = 13;
let speedOfstream = 4;
let downStream = 68;
let speedOfdownstream = travelSpeed+speedOfstream;
let timeTaken = downStream/speedOfdownstream;

console.log(timeTaken+ "hrs");

// 4. An aeroplane covers a certain distance at a speed of 240 kmph in 5 hours. To cover the same distance in 1 hours, it must travel at a speed of: --- Time and Distance

let distanceSpeed = 240;
let hours = 5;
let distanceFormula = (distanceSpeed*hours); 
let speedFormula = distanceFormula/(hours*3);
let requireSpeed = (distanceFormula * (3/5)+ " km/hr");

console.log(requireSpeed);


	
// 5. What decimal of an hour is a second 


let oneMin = 60;
let oneSec = 60;
let requiredDecimal = 1 / (oneMin * oneSec);

console.log(requiredDecimal);




