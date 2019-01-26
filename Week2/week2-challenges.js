// EXERCISE 1: STRINGS!
//1.1
let myString = "hello,this,is,a,difficult,to,read,sentence";
//1.2: log the length of myString
console.log (myString.length);
//1.3: replacement of the commas per spaces: usage of g(global) flag
var stringWithSpaces = myString.replace(/,/g, ' ');
//1.4
console.log(stringWithSpaces);

//EXERCISE 2: ARRAYS!
let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];
//2.1: add Mauro's favorite animal ("turtle")
favoriteAnimals.push("turtle");
//2.2
console.log(favoriteAnimals);
//2.3: add Jim´s favorite animal ("meerkat"), after "blowfish" and before "capricorn"
favoriteAnimals.splice(1, 0, "meerkat");
//2.4
console.log ("I think that the value of the array will be: blowfish, meerkat, capricorn, giraffe, turtle");
//2.5
console.log (favoriteAnimals);
//2.6: length of the array
console.log("The array has a length of: " + (favoriteAnimals.length));
//2.7: delete "giraffe"
favoriteAnimals.splice(3,1);
//2.8
console.log(favoriteAnimals);
//2.9: index of "meerkat" in the array
let indexOfMeerkat = favoriteAnimals.indexOf("meerkat");
//2.10
console.log("The item you are looking for is at index: " + indexOfMeerkat);