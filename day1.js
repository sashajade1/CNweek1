// DOT NOTATION

console.log("Hello World");


/* toLowerCase() // toUpperCase() // trim() // .length 
 .floor() (always rounds down)
 .ceil() (always rounds up)
 .round() (returns value of a number rounded to nearest integer)
*/
console.log("Hello".toUpperCase());  // Returns HELLO in console

console.log(Math.random()); // Returns random number between 0 & 1 (not including 1)

console.log(Math.random()*10); 

console.log(Math.floor(Math.random()*10)); // Generates random number between 1 and 9


// ACTIVITY 3 x 3 grid
let down =  `   
   |   |
   |   |
   |   |`;                 

   let across = 
`-----------`;
 let array =[down, across, down, across, down];
 console.log(array.join('\n'));   // Makes a new line


 // Stretch grid

 let grid1 = []
for (let i = 0; i <= 4;i++){
    
    if(i == 1 || i ==3){
        grid1.push("-----------");
    } else{
        grid1.push("   |   |   ");
        grid1.push("   |   |   ");
        grid1.push("   |   |   ");
    }
}
console.log(array.join("\n"));

 // Practice String Methods

 /* 3 methods for extracting a part of a string
 slice(start, end)
substring(start, end)
substr(start, length) */

// slice() extracts a part of a string and returns the extracted part in a new string
// Example
let str = "Apple, Banana, Kiwi";
let part = str.slice(7, 13);                // Output will be Banana 
console.log(part);                
//
let str1 = "Apple, Banana, Kiwi";
let part2 = str.slice(-12, -6);             // Output will be Banana 
console.log(part2);



/* substring():  substring() is similar to slice() The difference is that 
start and end values less than 0 are treated as 0 in substring() */
// Example
let str3 = "Apple, Banana, Kiwi";
let part3 = str.substring(7, 13);          // Output will be Banana
console.log(part3);


/* substr() is similar to slice() The difference is that the second parameter 
specifies the length of the extracted part */
// Example
let str4 = "Apple, Banana, Kiwi";
let part4 = str.substr(7, 6)              // Output will be Banana
console.log(part4);
//
let str5 = "Apple, Banana, Kiwi";
let part5 = str.substr(7);               // Output will be Banana, Kiwi
console.log(part5);
//
let str6 = "Apple, Banana, Kiwi";
let part6 = str.substr(-4);              // Output will be Kiwi
console.log(part6);


// Replacing String Content
//Example 1
let text = "Please visit America!";                 // Will now output Please visit UK!                
let newText = text.replace("America", "UK");
console.log(newText);

// Example 2
let text1 = "Please visit Spain!";
let newText1 = text1.replace(/SPAIN/i, "Italy");     // Outputs Please visit Italy! 
console.log(newText1);



// toUpperCase()
// Example
let myName = "Sasha Rudd";             // Outputs myName in Capitals
let text3 = myName.toUpperCase();
console.log(text3);

//
let myMiddleName = "Jade";                // Outputs jade
let text4 = myMiddleName.toLowerCase();
console.log(text4);


// concat(): joins two or more strings
//
let txt1 = "Hello";
let txt2 = "World";
let txt3 = txt1.concat(" ", txt2);        // returns Hello World
console.log(txt3);



/* trim(): The trim() method removes whitespace from 
both sides of a string */
//
let text5 = "      Hello World!      ";
let text6 = text5.trim();
console.log(text6);


// padStart(): pads a string with another string
//
let txt4 = "5";
let padded = txt4.padStart(4,"x");        // Outputs xxx5
console.log(padded)
//
let txt5 = "5";
let padded1 = txt5.padStart(4,"0");       // Outputs 0005
console.log(padded1);
 
// padEnd(): 
let txt6 = "1";
let padded2 = txt6.padEnd(5,"0");          // Outputs 10000
console.log(padded2);



/* Extracting String Characters
There are 3 methods for this 
 -charAt(position)
-charCodeAt(position)
-Property access [ ]
*/

/* The charAt() method returns the character at 
a specified index (position) in a string */
// Example
let txt7 = "HELLO WORLD";
let char = txt7.charAt(0);         // Outputs H
console.log(char);

/* The charCodeAt() method returns the unicode of the 
character at a specified index in a string
*/
// Example
let txt8 = "HELLO WORLD";
let char1 = txt8.charCodeAt(0);     // Outputs 72
console.log(char1);

// property access []
// Example
let txt9 = "HELLO WORLD";
let char2 = txt9[10];             // Outputs D
console.log(char2);


// Todays date
const d = Date();      // Shows todays date and time
console.log(d);





