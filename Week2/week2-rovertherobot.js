//Intro
move();
turn('right');
move();
turn('left');
move();
turn('right');
move();
turn('left');
move();
turn('right');
move();

//Loops-1
for (let i = 0; i < 7; i++) {
    move();
  }

//Loops-2
for (let i=0; i <4; i++){
	move();
};
turn('right');
move();
move();
turn('right');
for (let i=0; i<4; i++){
     move();
};

//Variables-1
let stepsDown = 3;
let stepsLeft = 0;
stepsDown = 2;
stepsLeft = 1;
for (let i = 0; i < stepsDown; i++) {
  move();
}
turn('right');
for (let i = 0; i < stepsLeft; i++) {
  move()
}

//Variables-2
const stepsUp = 3;
const stepsRight = 3;
for (let i = 0; i < stepsUp; i++) {
  move();
}
turn('right');
for (let i = 0; i < stepsRight; i++) {
  move();
}

//Variables-3
move();
const key = pickUp();
move();
turn('right');
unlock(key);
for (let i = 0; i < 3; i++) {
  move();
};

//Variables-4
move();
const key = pickUp();
move();
turn('right');
unlock(key*2);
move();
move();
move();

//Variables-5
move();
const key = pickUp();
move();
turn('right');
unlock(key*(-1));
move();
move();
move();

//Variables-6
move();
const key = pickUp();
move();
turn('right');
unlock(Math.pow(key, 3));
move();
unlock(key < 6);
move();
move();

//Variables-7
move();
const key = pickUp();
move();
turn("right");
unlock(key + "," + key);
move();
unlock(key.length);
move();
move();

//Variables-8
move();
const key = pickUp();
move();
turn("right");
unlock(typeof key);
move();
unlock(key.length);
move();
move();

//Boolean-1
move();
const bluekey = pickUp();
move();
const redkey = pickUp();
unlock(bluekey && redkey);
move();
move();

//Boolean-2
move();
const key = pickUp();
move();
if (key < 5){
	turn("left");
	move();
	turn("right");
  	unlock(key);
  	move();
  	move();
  	turn("right");
  	move();
} else if (key >= 5){
	turn("right");
  	move();
  	turn("left");
   	unlock(key);
  	move();
  	move();
  	turn("left");
  	move();
};

//Functions-1
function eatApples() {
	move();
	turn("right");
	move();
	turn("left");
	move();
	move();
	turn("left");
	move();
	turn("right");
	move()
};
eatApples();

//Functions-2
function moveAwayAndComeBack() {
    turn("left");
    turn("left");
    move();
    turn("left");
    turn("left");
    move();
  }
  move();
  move();
  for (let i = 0; i < 3; i++) {
    moveAwayAndComeBack();
  }
  move();
  move();
 
//Functions-3
function knightMove(direction){
	if (direction === "right") {
      	turn('right');
    	move();
  		turn('left');
    	move();
     	move();
    } else {
      	turn('left');
    	move();
  		turn('right');
    	move();
     	move();
    }
};
knightMove('right');
turn('right');
knightMove('left');
knightMove('right');
knightMove('left');
turn('left');
knightMove('left');
knightMove('right');
