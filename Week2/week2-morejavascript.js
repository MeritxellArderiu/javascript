//EXERCISES MORE JAVASCRIPT
//1: sum of three arguments
let threeArguments = function (argument1, argument2, argument3) {
   let result = (argument1 + argument2 + argument3);
   return result;
};
let argument1 = "On Saturday ";
let argument2 = "it snowed and ";
let argument3 = "I went to the park.";
console.log(threeArguments(argument1, argument2, argument3));

//2: colourful car
let color1 = "yellow";
console.log ("a " + color1 + " car");

//3: create an object and a function that takes the object as a parameter and prints out all of its properties and values
let city = {
    name: "Copenhagen",
    country: "Denmark",
    inhabitants: "780.000",
    extension: "178.5 km2"
};
for (let entries of Object.entries(city)){
    console.log(entries);
};

//4: function vehicleType
let vehicleType = function (color, code){
    let type = "";
    if (code === 1){
        type = " car";
    } else if (code === 2){
        type = " motorbike";
    } else {
        type = " what?";
    };
    let message = "a " + color + type;
    console.log(message);
    return message;
};
let color = "blue";
let code = 2;
let returnedMessage = vehicleType(color, code);
//console.log(returnedMessage);

//5: replacement of if (3 === 3) statement
console.log("yes");

//6: function vehicle
let vehicle = function (color, code, age){
    let type = "";
    if (code === 1){
        type = " car";
    } else if (code === 2){
        type = " motorbike";
    } else {
        type = " what?";
    };
    let status =" used";
    if (age <= 1){
        status = " new";
    };
    // else {
    //   status = " used";
    //};
    let message = "a " + color + status + type;
    console.log(message);
    return message;
};
//console.log(message);
let age = 1;
let returnedMessage2 = vehicle(color, code, age);
//console.log(returnedMessage2);

//7: list of vehicles
let vehicles = ["motorbike", "caravan", "car", "bike", "horse"];

//8:third element in a list
console.log(vehicles[2]);

//9: function vehicle2
let vehicle2 = function (color, idx, age){
    let status =" used";
    if (age === 0){
        status = " new";
    };
    let message = "a " + color + status + " " + vehicles[idx];
    console.log(message);
    return message;
};
returnedMessage2 = vehicle2(color, 4 , age);

//10: Advertisement >> to do

//11: One more vehicle >> to do

//12: Empty object
let emptyObject = {
};

//13: Teachers
let teachers = {
    names: ["Albert", "Stephen", "Baraa", "Peter"]
};
//14: add property to Teachers
teachers.languages = ["Git and GitHub", "Javascript", "Html", "Intro day"];

//15: Equality in two arrays
let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;
console.log(x == y); //false
console.log(x === y); //false
console.log(z == y); //true
console.log(z == x); //false

//16: More code to check
let o1 = { foo: "bar" };
let o2 = { foo: "bar" };
let o3 = o2;
console.log(o1 == o3); //false
console.log(o1 == o2); //false
console.log(o2 == o1); //false
console.log(o3 == o2); //true
console.log(o2 == o3); //true

//17: Some more code to check
let bar = 42;
typeof typeof bar; //string
