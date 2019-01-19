/* EXERCISE 1*/
console.log("Hello World!"); // English
console.log("Hola Món"); //Catalan
console.log("Hola Mundo!"); //Spanish
console.log("Bonjour le Monde!"); //French
console.log("Hej Verden!"); //Danish

/* EXERCISE 2*/
console.log("I'm awesome");

/*EXERCISE 3*/
let x; //declaring a variable and not initializing it
console.log("The value of my variable x will be: null or undefined");
console.log(x);
x = 222; //re-declaring a variable and initializing it
console.log("The value of x will be: 222");
console.log(x);

/*EXERCISE 4*/
let y = "Happy programming Sunday!"; // declaring a variable and assigning it to a string
console.log("The value of the string will be: Happy programming Sunday!");
console.log(y);
y = "Happy programming week!";// assigning a new string to the variable
console.log("The value of the string will be: Happy programming week!");
console.log(y);

/*EXERCISE 5*/
let z = 7.25;
console.log(z);
let a = Math.round(z);
console.log(a);
b = Math.max(z, a);
console.log(b);

/*EXERCISE 6: ARRAYS*/
let firstArray
console.log("The value of my firstArray will be: null or undefined");
console.log(firstArray);
let myFavouriteAnimals = ["dog", "squirrel", "hamster"];
console.log(myFavouriteAnimals);
let daansFavouriteAnimal = ["baby pig"];
myFavouriteAnimals.push(daansFavouriteAnimal);
console.log(myFavouriteAnimals);

/*EXERCISE 7: MORE STRINGS*/
let myString = "This is a test";
console.log(myString);
myString.length
console.log(myString.length);

/*EXERCISE 8: SAME TYPES PROGRAM*/
let age = 10;
let introMessage = "Hello";
let canVote = true ;
let questionMark;

console.log(age);
console.log(message);
console.log(canVote);
console.log(questionMark);

console.log("The type of age is a number");
console.log("The type of introMessage is a string");
console.log("The type of canVote is a boolean");
console.log("The type of questionMark is undefined");

console.log(typeof age);
console.log(typeof introMessage);
console.log(typeof canVote);
console.log(typeof questionMark);

if (typeof age == typeof introMessage) {
    console.log ("age and introMessage are the same type");
} else {
    console.log ("age and introMessage are NOT the same type");
}
if (typeof age == typeof canVote) {
    console.log ("age and canVote are the same type");
} else {
    console.log ("age and canVote are NOT the same type");
}
if (typeof age == typeof questionMark) {
    console.log ("age and questionMark are the same type");
} else {
    console.log ("age and questionMark are NOT the same type");
}
if (typeof introMessage == typeof canVote) {
    console.log ("introMessage and canVote are the same type");
} else {
    console.log ("introMessage and canVote are NOT the same type");
}
if (typeof introMessage == typeof questionMark) {
    console.log ("introMessage and questionMark are the same type");
} else {
    console.log ("introMessage and questionMark are NOT the same type");
}
if (typeof canVote == typeof questionMark) {
    console.log ("canVote and questionMark are the same type");
} else {
    console.log ("canVote and questionMark are NOT the same type");
}

/*EXERCISE 9*/
let x = 7;
x = x % 3;
console.log(x);
console.log("The symbol % first divides 7 into 3");
console.log("The result is 2, and the remainder is 1");
console.log("The symbol % shows the remainder of a division");

/*EXERCISE 10*/
let myArray = ["cat", true, 85];
console.log("It is possible to store multiple types in an array because in myArray the types are: " + typeof myArray[0] + ", " + typeof myArray [1] + ", and " + typeof myArray [2]);

let infinity1 = 6/0;
let infinity2 = 10/0;
let comparisonInfinities = infinity1 === infinity2;
if (comparisonInfinities = true) {
    console.log ("Infinities can be compared");
} else {
    console.log ("Infinities can NOT be compared");
}