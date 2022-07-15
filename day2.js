// Display the 8th character in upper case in the console;

console.log('All around the world'.charAt(7).toUpperCase());
// both display U (the spaces need counting to)
console.log('All around the world'.toUpperCase().charAt(7));
 //
console.log('My name is Sasha'.charAt(0).toLowerCase()); // displays m


// VARIABLES

/* declare variables using var, let, and const
var i = 10
let i = 10 
const i = 10
*/

let a = 10;
a = a + 2;
console.log(a);
//
let b = 10;
b += 2;
console.log(b);




let favouriteDrink = "coffee";
console.log(favouriteDrink);

let favouriteSeries = "Stranger Things";
console.log(favouriteSeries);

//
let favouriteDrink1 = "coffee";
console.log("My favourite drink is " + favouriteDrink1);

let favouriteSeries2 = "Stranger Things";
console.log("My favourite series is " + favouriteSeries2);

//
let favouriteDrink2 = "Fanta";
console.log(`My favourite drink is ${favouriteDrink2}`);

let favouriteSeries3 = "Stranger Things";
console.log(`My favourite series is ${favouriteSeries3}`);


/*Activity 1
-Write code that stores your name, age, and favourite
colour
-The stored data must be output to the console in a
complete sentence
-Update all of your variables and write out a
new sentence underneath your original
*/

let fullName = "Sasha Rudd";
let myAge = 20;
let favColour = 'Blue';
console.log(`My name is ${fullName}, i am ${myAge} years old and my favourite colour is ${favColour}.`);
fullName = "Sash";
myAge = 21;
favColour = 'turquoise'
console.log(`My name is ${fullName}, i am ${myAge} years old and my favourite colour is ${favColour}.`);




/* Activity 2
-Write code which stores what you may eat today for
breakfast, lunch, and dinner
-This must also be output to the console as a complete
sentence
-Update the stored data and output the same sentence
again to display the changes 
*/

let breakfast = ['Weetabix', 'Toast'];
let lunch = ['Panini', 'Sandwich'];
let dinner = ['Pizza', 'Curry'];
console.log(`For breakfast i am having ${breakfast[0]}, then for lunch i feel like a ${lunch[0]} then to top it of for dinner is ${dinner[0]}.`);
breakfast = 'Bacon butty';
lunch = 'Noodles';
dinner = 'Pasta bake';
console.log(`For breakfast tomorrow i am having ${breakfast}, then for lunch i will have ${lunch} then to top it of for dinner will be ${dinner}.`);


/* Activity 3
-Write code which will calculate how many days from
today’s date to your birthday
-This must also be output to the console as a
complete sentence
*/

var date1 = new Date();
var birthDay = new Date("10/16/2022");
var Difference_In_Time = birthDay.getTime() - date1.getTime();           
var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);        
console.log(Math.ceil(Difference_In_Days) + ' days until birthday');

/* Activity 4
-Create 9 variables - space1, space 2…
space 9
-Assign either the value of ‘x’, ‘o’, ‘ ‘ to
each of the variables
-Using template literals inject the
variable data into your board
-Output this to the console
*/


let space1 = "   |   |   "
let space2 = "-----------"
let space3 = " X | O |   "
let space4 = " X | X |   "
let space5 = " O |   |   "
let space6, space7, space8, space9 = ""

function challenge() {
    console.log(space1)
    console.log(space3)
    console.log(space1)
    console.log(space2)
    console.log(space1)
    console.log(space4)
    console.log(space1)
    console.log(space2)
    console.log(space1)
    console.log(space5)
    console.log(space1)
}

challenge()


// IF ELSE SWITCH

// 
let weather = "raining";

if (weather == "raining") {
    console.log("Need an umbrella!")
} else if (weather == "sunny") {
    console.log("Take sunglasses and wear suncream")
} else {
    console.log("Could go either way")
}
// returns Need an umbrella! because weather is equal to "raining" 


//
let number = 1;

if (1 === "1") {       
    console.log(true);
} else {
    console.log(false);
}
/* returns false because the strict equal operator(===)
 check the value and type*/



//
let number1 = 1;

if (1 != "1") {
    console.log(true);
} else {
    console.log(false);
}
/* returns false because the not equal operator (!=)
checks the values are not equal regardless of type */
/* but if we put the strict not equal (!==) we would 
get a output of true */


// 
let place ="Liverpool";
let weather1 = "Cloudy";

if(place == "Liverpool" && weather1 == "sunny"){
    console.log("check again");
} else if (place == "Liverpool" && weather1 == "Rain"){
    console.log("Obvs");
} else{
    console.log("Its not raining");
}
// returns Its not raining


// 
let day = "Saturday";

if (day == "Saturday" || day == "Sunday"){
    console.log("It's the weekend!")
} else {
    console.log("When's the weekend?");
}
/* returns It's the weekend because day is saturday
which is a day of the weekend */


//
let car = "Peugeot";

if (car == "Ford" || car == "GM"){
    console.log("You've got an American car!");
} else if (car == "Peugeot" || car == "Citroen"){
    console.log("You've got a French car!");
} else if (car == "Honda" || car == "Toyota" || car == "Suzuki"){
    console.log("Japanese cars are quiet!");
} else if (car == "Mercedes"){
    console.log("You've got a posh German car!");
} else if (car == "Volkswagen"){
    console.log("German aren't that bad at all!");
} else if (car == "Hyundai" || car == "Kia"){
    console.log("South Korean cars are getting popular!");
} else{
    console.log("Your car is not in the top ten companies in the world!")
}
/* Returns You've got a French car! because 
car is assigned to "peugeot" */
/* this can also be wrote easier as a 
switch (shown below) */

let car1 = "Peugeot";

switch(car1){
    case "Ford":
    case "GM":
 console.log("You've got an American car!");
    break;
    case "Peugeot":
    case "Citroen":
console.log("You've got a French car!");
    break;
    case "Honda":
    case "Toyota":
    case "Suzuki":
console.log("Japanese cars are quiet!");
    break;
    case "Mercedes":
console.log("You've got a posh German car!");
    break;
    case "Volkswagen":
console.log("German aren't that bad at all!");
    break;
    case "Hyundai":
    case "Kia":
console.log("South Korean cars are getting popular!");
    break;
    default:
console.log("Your car is not in the top ten companies in the world!")
}
/* Returns You've got a French car! because 
car is assigned to "peugeot" */


/* ACTIVITY 1
-Create a variable called age. Write an if statement
that logs “Yes I can serve you” if the age is greater
than 17 and else logs “You aren’t old enough”.

-Take your if statement and add a variable
called country in. */


let age = 18;
let country = "UK";

if(age > 17 && country == "UK"){
    console.log("Yes, I can serve you")             
} else {
    console.log("You aren't old enough")
}
/* returns "Yes, I can serve you" because 
age is over 17 */



/* ACTIVITY 2
-Create a variable for any pizza topping.

-Create a switch statement, if the topping is one of your
favourite ingredients, log to the console “These are
important ingredients for my pizza.” If you don’t mind
having Pepperoni for example log to the console “I don’t
mind having ${topping} on my pizza.

-Finally, for any topping you don’t like log “${topping}
should not be on a pizza.” */

let pizzaTopping = "chicken"
 
switch(pizzaTopping){
      case "ham":
      case "cheese":
      case "pepperoni":
console.log("These are important ingredients for my pizza.");
      break;
      case "chicken":
console.log(`I don't mind having ${pizzaTopping} on my pizza.`)
      break;
      default:
console.log("This topping should not be on pizza");
    }
// returns I don't mind having chicken on my pizza



/* ACTIVITY 3:
-Create a variable called password.

-Check how many letters are in the password, if there are
less than 8, log to the console that the password is too
short. Otherwise log the password to the console. */

let password = "password"

if (password.length >= 8){
     console.log(password);
}  else {
     console.log('password to short');
}

/*
-Create a variable called num. 

-Check if the variable is divisible by 3 or 5. If it 
is, log “This number is divisible by 3 or 5”. 
Otherwise log something else. */

let num0 = 10;

if (num0 % 3 == 0 || num0 % 5 == 0){
console.log("This number is divisible by 3 or 5")}
 else {
console.log("This number is not divisible by both 3 and 5")};


/* ACTIVITY 4
-Create a variable called num.

-If num is divisible by 3 log “fizz” to the console, if it’s divisible by 
5 log “buzz” to the console, if it’s divisible by both 3 and 5 log 
“fizz buzz” to the console. Otherwise log num to the console.
*/

let num1 = 15;

if (num1 % 3 == 0 && num1 % 5 == 0){
    console.log("fizz buzz")
}else if (num1 % 5 == 0) {
     console.log("buzz")
} else if (num1 % 3 == 0){
     console.log("fizz")
} else {
    console.log(num1)
}



/* ACTIVITY 5
-Create a variable called num.

-Check if the number is a palindrome (looks the 
same forward as it does backwards e.g. 1001 or 
20202). */


num = "222212222"

numArray = num.split("")                          
numArrayReversed = numArray.reverse()
numReversed = numArrayReversed.join("")

if (num == numReversed) {
  console.log("Yep, that's a palindrome.")
} else {
  console.log("None, that's not a palindrome.")
}

/* 
-The split () method is used to split a string 
into an array of substrings, and returns the new array.

-The reverse () method reverses the order of the elements in an array. 
The reverse () method overwrites the original array. 
Syntax array .reverse () Return Value The array after it has been reversed

-The join () method creates and returns a new string by concatenating all 
of the elements in an array (or an array-like object ), 
separated by commas or a specified separator string. 
If the array has only one item, then that item will be 
returned without using the separator. Specifies a string to separate 
each pair of adjacent elements of the array.
*/




/* ACTIVITY 6
-Create a variable called time, a variable called placeOfWork 
and a variable called townOfHome. Create an if statement that 
logs to the console where someone is at times of the day. E.g. if 
the time is 7 I’m at home, at 8 I’m commuting, at 9 I’m at work. */

let time = "6:00 am";
let placeOfWork = "Office";
let townOfHome = "Liverpool";

if (time == "6:00 am" && townOfHome == "Liverpool"){
    console.log("Still at home");
} else if (time == "7:00 am"){
    ("I'm commuting");
} else if (time == "8:00 am" && placeOfWork == "Office"){
    console.log("I'm at work");
} else {
    console.log("");
}



/* ACTIVITY 7
-Take the string 
“jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuh 
gtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi”. Find the 
index of a last vowel in the string. */
                      
let myString = 'jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi'
let vowels =  ['a','e','i','o','u'];

let arr = myString.split("").reverse(); // split string into array, and reverse it
let indexOfLastVowelInReverse = arr.findIndex(e => vowels.includes(e))

if(indexOfLastVowelInReverse != -1) { // if the index is -1 there is no vowel in the string
  let index = myString.length-1-indexOfLastVowelInReverse
  console.log(`Last vowel found at index ${index}: ${myString[index]}`)
}



/* ACTIVITY 8
-Create a variable called word that takes a string. Create 
an if statement that checks if the last letter is the same as 
the first. If it is return true, otherwise return false. 
*/

function firstLastLetters(word)
    {
        let i = word.length;
        if (i < 2)
            return -1;
        if (word[0] == word[i - 1])
            return 1;
        else
            return 0;
    }
     
    let word = "liverpool";
    let res = firstLastLetters(word);
 
    if (res == -1)
      console.log("Invalid Input");
    else if (res == 1)
      console.log("True");
    else
      console.log("False");



/* ACTIVITY 9
-Create two variables called num1 and num2.
-Create an if statement that checks if the result of the 
sum is even. If it is return the number, otherwise return 
the numbers multiplied together.
*/

let num3 = 10;
let num4 = 6;

sum = num3 + num4;

if (sum % 2 == 0 ){
  console.log(sum);
}else{
  console.log(num3 * num4);
}



