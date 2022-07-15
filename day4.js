// FUNCTIONS

const pressGrindBeans = () => {
    console.log("Grinding for 20 seconds");
}
pressGrindBeans();  // to call a function


//

let coffeeIsGrinding = false;

const pressGrindBeans1 = () => {
    if (coffeeIsGrinding){
        console.log("Stopping the grind");
        coffeeIsGrinding = false;
    }else {
        console.log("Grinding is about to begin");
        coffeeIsGrinding = true;
    }
}
pressGrindBeans1();


// 

const cashWithdrawal = (amount, accnum) => {
    console.log(`Withdrawing ${amount} from account ${accnum}`);
}

cashWithdrawal(300, 50449921);
cashWithdrawal(30, 50447921);
cashWithdrawal(200, 50447921);


//


let accountNum = 50449921;

const withdrawal = (amount, accountNum) => {
    console.log(`Withdrawing ${amount} from account ${accountNum}`)
}
cashWithdrawal(300, accountNum);
cashWithdrawal(30, 50447921);
cashWithdrawal(200, 50447921);


// 

const addUp = (num1, num2) => {
    console.log(num1 + num2);
}
addUp(2,5);

//------------
const takeAway = (num3, num4) => {
    console.log(num3 - num4);
}
takeAway(1400, 387);

//-------------
const divideNums = (num5, num6) => {
    console.log(num5 / num6);
}
divideNums(80, 20)

//


const multiplyByNineFifths = (celsius) => {
    return celsius * (9/5);
};

const getFahrenheit = (celsius) => {
    return multiplyByNineFifths(celsius) + 32;
};

console.log("The temperature is " + getFahrenheit(15) + "F\u00B0");

// 




/* ACTIVITY 1
-Turn the code into an arrow function
*/      

let factorial = (n) => {
    if ((n == 0) || (n == 1)){
        return 1;
    }else {
        return (n * factorial(n-1));
    }
}
console.log(factorial(33))



/* ACTIVITY 2
-Edit the snippet to include two parameters and a 
running order count updated when the function is called
*/

let orderCount = 1;

const takeOrder = (topping1, topping2) => {
    console.log(`Pizza ${orderCount} with ${topping1} and ${topping2}`)
    orderCount++;
}
takeOrder("Cheese", "Tomato");
takeOrder("Pepperoni", "ham");




/* ACTIVITY 3
Cash machine time! Let’s create one that
-Dispenses cash if your pin number is correct and your 
balance is equal to, or more than, the amount you’re 
trying to withdraw
*/

let balance = 9000;

let atm = (pin, value) => {
    if (pin === 5980 && value <= balance){
        balance -= value;
        console.log(`Withdrew ${value}. New balance: ${balance}.`)
   }else if (value > balance){
    console.log(`You are trying to withdraw ${value}. Your available balance is ${balance}.`)
   }else {
    console.log("Incorrect pin")
   }
}
atm(5980, 500);
atm(5980, 9500);
atm(7504, 100);








// OBJECTS

let offer = "none";
let time = 1200;

const coffeeShop = {
    name: "Costa",
    seatingCapacity: 100,
    hasSpecialOffers: true,
    drinks: [
        "Cappuccino",
        "Latte",
        "Filter coffee",
        "Tea",
        "Hot chocolate"
    ],
    
    breakfastOffer: "Free croisant with coffee",
    lunchOffer: "Free drink with suprisingly priced sandwich",
    noOffer: "sorry no offer"
};
if(time < 1100){
    offer = coffeeShop.breakfastOffer;
    console.log(coffeeshop.breakfastOffer);
}else if (time < 1500){
    offer = coffeeShop.lunchOffer;
    console.log(coffeeShop.lunchOffer);
}
coffeeShop["biscuits"] = ["waffle", "shortbread"];
console.log(coffeeShop);
console.log(coffeeShop.breakfastOffer);
console.log(coffeeShop.lunchOffer);
console.log(coffeeShop.noOffer);



/* ACTIVITY
-create an object called person with a key 
called name and set the value to your name.
-Add another key called age.
*/

const person2 = {
    name: "Sasha",
    age: 20,
    favouriteSongs: [
        "You shook me all night long-ACDC",
        "Everybody wants to rule the world-Tears for fears",
        "You give love a bad name-Bon Jovi"],
    sayHi(){
        console.log(`Hello my name is ${this.name}`)
    },
};

console.log(person2.favouriteSongs);
person2.sayHi();


/* ACTIVITY 
-Let’s add a list of favourite songs to our 
person object and log them to the console
*/

/* ACTIVITY 1
Let’s edit our person object to include…
-A function called sayHi and when it’s called, it 
should return “Hello my name is ${this.name}”
*/




/* ACTIVITY
Let’s create an alarm.
-Create a key called weekendAlarm, with a value saying “no 
alarm needed” and a key called weekdayAlarm, with a value 
saying “get up at 7am”.
-Create a variable called day and one called alarm.
-If day is Saturday or Sunday, set alarm to weekendAlarm.
-If day is a weekday, set alarm to weekdayAlarm.
*/

let day1 = "Sunday";

const alarm = {
    weekend: "no alarm needed",
    weekday: "get up at 7am"
}
if (day1 == "Saturday" || day1 == "Sunday"){
    console.log(alarm.weekend)
} else{
    console.log(alarm.weekday)
}




/* ACTIVITY 1
Let’s edit our person object to include…
-A function called sayHi and when it’s called, it 
should return “Hello my name is ${this.name}”
*/
// Answer further up


/* ACTIVITY 2
-Create an object called pet with the key values of:
name, typeOfPet, age, colour
-And methods called eat and drink. They should return a 
string saying [Your Pet Name] is eating/drinking.
*/
const pet1 = {
    name:"Kizer",
    typeOfPet:"dog",
    age: 2,
    colour:"Brindle",
    eat1() {
        return console.log(`${pet1.name} is eating`);
      },
      drink() {
        return console.log(`${pet1.name} is drinking water`);
      },
    };
    pet1.eat1();
    pet1.drink();



/* ACTIVITY 3
-Create an object called coffeeShop with key values of: 
branch, drinks with prices, food with prices
-And methods called drinksOrdered and foodOrdered.
-They should return a string saying [Your order] is … with all 
items chosen with costs and total costs.
*/

const coffeeShop2 = {
    name: "Costa",
    seatingCapacity: 20,
    hasSpecialOffers: true,
    
    drinks: {
       'Cappuccino' : 2.99,
        "Latte": 1.99,
        "Mocha": 2.49,
        "Expresso": 2.99,
        "Americano": 1.99
    },
    food: {
          "Sandwich":
          cost = 3.00,
          "Wrap": 
          cost = 3.50,
          "Toast": 
          cost = 1.99,
          "Croissant":
          cost = 0.99,
          "Panini":
          cost = 3.50
    },
}
foodOrdered = food;
drinksOrdered = drinks;
console.log();

// need working on!!!
