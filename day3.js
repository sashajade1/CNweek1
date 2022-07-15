// ARRAYS & LOOPS



/*
.map()

-The map() method creates a new array with the results of calling 
a function for every array element. 
-The map() method calls the provided function once for each element 
in an array, in order. 
-Note: map() does not execute the function for array elements without values.

.shift()

-The shift () method removes the first item of an array. 
-The shift () method changes the original array.

.unshift()

-The unshift () method adds new elements to the beginning of an array. 
-The unshift () method overwrites the original array.

.splice()

-The splice() method adds and/or removes array elements.
-The splice() method overwrites the original array.

*/



let coffeeOrder = [
"Alex - Cortado",
"Ben - Cortado",
"Charlie - Whatever's new"
]
coffeeOrder.push("Donna - espresso");
coffeeOrder[1] = "Ann - Vanilla latte";   // replaces "Ben - Cortado"
console.log(coffeeOrder.length);
console.log(coffeeOrder);
// coffeeOrder.pop() - removes last item from end of array




/* ACTIVITY 1
-Make an array of 3 your favourite songs.
3 of them.
-Log them to the console.
-Can you add another two songs to the list
using a method and then remove the last one
added?
*/

let favSongs = [
    "Everybody Wants To Rule The world - Tears for Fears",
    "I Follow Rivers(Magician Remix) - Lykke Li",
    "You Give Love A Bad Name - Bon Jovi",
]
favSongs.push(" You Shook Me All Night Long - ACDC ", "Twist and Shout - The Beatles");
favSongs.pop();
console.log(favSongs);


/*
Activity 2:
-Using MDN choose one of the following methods
map(), shift(), unshift(), splice(), unsplice().
Create a program to demonstrate the use of the
method.
--(Note: Not all methods would permanently
update/make changes to the arrays themselves.)
*/

let fruitList = [
    "Apples",
    "Oranges",
    "Watermelon",
    "Bananas"
]
fruitList.shift();     // Removes first item so the array will be displayed without Apples
console.log(fruitList);


// ---------------------------------------------------


let favDrinks = ["Coffee", "Ribena", "Water"];
console.log(favDrinks[0]);
console.log(favDrinks[1]);
console.log(favDrinks[2]);

//

let faveDrinks = [
    "Coffee",
    "Ribena",
    "Water",
    "Oasis"
];

for(let i = 0; i < faveDrinks.length; i++){
    console.log(faveDrinks[i]);
}

/* i stands for index, which is widely used in
loops. However, it could be anything you like */


// Using for loops with an if statement

let multiplesTwo = []
    for (let i = 0; i < 20; i++){
    if ( i % 2 == 0){
   multiplesTwo.push(i);
}
}
console.log(`Numbers divisible by 2 between 0 and 20 are: ${multiplesTwo}.`);


let multiplesThree = []
    for (let i = 0; i < 18; i++){
    if  (i % 3 == 0){
   multiplesThree.push(i);
}
}
    console.log(`Numbers divisible by 3 between 0 and 18 are: ${multiplesThree}.`);



// While Loops

   let age = 16;
   while (age < 18){
console.log("You're a child!");
   age++;
}
console.log("You're an adult!");


//

let cards = ["Diamond", "Spade", "Heart", "Club"];
let currentCard = "Club";

   while (currentCard != "Spade"){
console.log(currentCard);
currentCard = cards[Math.floor(Math.random()* 4)];
}
console.log(currentCard);


/* ACTIVITY 1
-Create an array that lists your favourite films, up to 5 elements.
-Add 2 more using a method.
-Use a loop to cycle through the array
*/

let faveFilms = [
    "Lion king",
    "Finding Nemo",
    "White Chicks",
    "Jumanji",
    "Hairspray"
]
faveFilms.push("Matilda", "Shrek");
  
for (let i = 0; i < faveFilms.length; i++){
    console.log(faveFilms[i]);
}


/* ACTIVITY 2
-Generate 6 random numbers between 1-50 and log them to the console. 
*/

for (let i = 0; i < 6; i++) {
    let num = Math.floor(Math.random() * 50);
    console.log(num);
}




/* ACTIVITY 3
If we can create a loop to put 0-9 on the screen, how can we count from 9-0? 
Create a program that does this.
*/

let countDown =[]
for (let i=9; i>0; i-=1){
countDown.push(i);
}
console.log(countDown);



/* ACTIVITY 4
-Displays 4 films stored in an array. 
-Use a for loop to show each film in the array.
-Use an if statement to check if the 3rd film in the array is
Ghostbusters.
-If it is, return “Yay it’s Ghostbusters”. If it isn’t return “Boo!
we want Ghostbusters!
*/

let movies = [
    "Ghostbusters",
    "lion King",
    "Jumanji",
    "Shrek"
]
for (let i = 0; i < movies.length; i++) {
    console.log(movies[i]); 
}
 if(movies[0] == "Ghostbusters"){
        console.log ("Yay its Ghostbusters")
    } else{
        console.log("Thats not Ghostbusters")
    }



/* ACTIVITY 5
-Generate a random number between 1 and 30
six times.
-For each random number generated, check if
this number of divisible by 7 or not.
-Log out a message to the console if it is divisible
by 7 or not. 
*/

for (let i = 0; i < 6; i++) {
    let num1 = Math.floor(Math.random() * 30);
        if (num1 % 7 == 0) {
            console.log(`Yeah, this number ${num1} can be divided by 7`)
        } else {
            console.log(`Ooops, this number: ${num1} can NOT be divided by 7 ... Try again`)
        }
}



/* ACTIVITY 6
Imagine you’re a programmer for a social media platform! You have
been tasked with building a prototype for a mutual followers program.
-Create 2 arrays of followers e.g. bobsFollowers & hannahsFollowers.
In these arrays place 4 names as strings. Make sure there are 2 names
that are in BOTH arrays.
-Using a nested loop iterate over both arrays and console.log out the
matching follower
*/


const bobsFollowers = 
["Beyonce", "Ed Sheeran", "Eminem","Bruno Mars"]

const hannahsFollowers =
 ["Beyonce", "Bruno Mars", "Ariana Grande", "Adele"]

let mutualFollowers=[];

for (let i = 0; i <bobsFollowers.length; i++){
    for (let j = 0; j <hannahsFollowers.length; j++){
        if(bobsFollowers[i] === hannahsFollowers[j]){
            mutualFollowers.push(bobsFollowers[i]);
        }
    }
}
console.log(mutualFollowers);






/* ACTIVITY 7
Research on do...while loop, find
out about the difference between
for loop, while loop and do...while
loop. Give an example of each.
What are the pros and cons? 
*/

/*
-DO WHILE LOOP
The do...while statements combo defines a code block to be executed once,
and repeated as long as a condition is true.
------PROS/CONS-------
-The biggest advantage of this loop is that the code may be executed at 
least once even if the condition is already false.
*/

// EXAMPLE
let doWhile = "";
let i = 0;                                    // numbers 01234 will show on console
                                            
do {
  doWhile += i ;
  i++;
}
while (i < 5);

console.log(doWhile);

/* 
-WHILE LOOP
The while statement creates a loop that is executed while a condition is true.
The loop runs while the condition is true. Otherwise it stops.
-------PROS/CONS------
-it can run a long time until the condition is met, 
but on the other hand it’s very easy to forget 
that if we don’t provide the condition which will have the 
false result finally there will be an infinite loop and 
will cause the freeze of the application.
*/


// EXAMPLE
let j = 0;                                        // returns 0-4 on new lines 
                                                   
while(j < 5)
{
    console.log(j);
    j++;
}


/*
-FOR LOOP
The for statement defines a code block that is executed as long as a condition is true.
-Note-
If you omit statement 2, you must provide a break inside the loop.
Otherwise the loop will never end. This will crash your browser.

-----------PROS--------
Because of the control it offers, nearly every task that involves iterate over an array can be done through this basic for loop. 
Its main pros are:
-Both element and index can be accessed inside the loop body

-The loop can be run in reverse (by starting with array length and decrementing the index till 0)

-The index can be incremented or decremented in a number of ways, not just +1 or -1. 
This means we can also skip entries in the iteration (e.g. i=i+2 to skip by 2)

-You can break to terminate the loop before it has run its complete course

---------CONS----------
-it’s not suitable for any kind of data, and if you don’t understand it well, it’s easy to mess up.
*/

// EXAMPLE
let forLoop = [10, 11, 12, 13, 14, 15];        // puts 10-15 into the console
for(let i = 0; i < 6; i++){
    console.log(forLoop[i]);
}
