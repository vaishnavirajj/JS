// console.log("Welcome to JS");
// fullname="Vaishnavi Raj";
// age=19;
// fee=500;
// x=null;
// y=undefined;
// isCold="True";
// console.log(isCold);

// let num=prompt("Enter the number");
// if(num%5===0){
//     console.log(num,"is multiple of 5");
// }
// else{
//     console.log(num,"is not multiple of 5");
// }

// let num=prompt("Enter the marks")
// if(num>=80&&num<=100) {
//     console.log("Grade A");
// }
// else if(num>=70&&num<=89) {
//     console.log("Grade B");
// }
// else if(num>=60&&num<=69) {
//     console.log("Grade C");
// }
// else if(num>=50&&num<=59){
//     console.log("Grade D");
// }
// else if(num>=0&&num<=49){
//     console.log("Grade E");
// }
// else{
//     console.log("number is out of the box");
// }


//printing Name 10 times 
// for(let i=1;i<=10;i++){
//     console.log("Vaishnavi Raj");
// }

// let i=1
// while(i<=10){
//     console.log("Vaishnavi Raj");
//     i++;
// }

// let i=1;
// do{
//     console.log("Vaishnavi Raj");
//     i++;
// }while(i<=100);
  
//for-of-loop --> we can only use on string and array

// let str="VaishnaviRaj";
// let size=0;
// for(let val of str){
//     console.log("val =",val);
//     size++;
// }
// console.log("size =",size);

//for-in-loop--->we can use on objects

// let student={
//     name:"vaishnavi raj",
//     age:19,
//     dep:"CSE",
//     fee:679,

// }
// console.log(student);
// for(let key in student){
//     console.log("key =",key,"value =",student[key]);
// }

// let x='Geeta';
// console.log(x);


//Print all even numbers from 0 to 100
// for(let i=0;i<=100;i+=2){
//     console.log("Even number",i);
// }


//Game problem
// let gameNum=20;
// let userNum=prompt("Guess the game Number:");
// while(gameNum!=userNum){
//     userNum=prompt("You guess the wrong number,guess again");
// }
// console.log("Congrats you guess the right number");


//Write a JavaScript program that displays the largest integer among two integers.

// let a=prompt("Enter the number a:");
// let b=prompt("Enter the number b:");
// a=parseInt(a);
// b=parseInt(b);
// if(a>b){
//     console.log("a is greater than b");
// }
// else if(b>a){
//     console.log("b is greater than a");
// }
// else{
//     console.log("Both numbers are equal");
// }

// String

// let str="Apna College";
// let str2='Shelley';
// console.log("Apna College");
// console.log('Shelley');

//Template Literals
// let specialString=`This is speacial type of string`;
// console.log(specialString);n 


//practice
// let name=prompt("Enter your name");
// let l=name.length;
// let username="@"+name+l;
// console.log(username);


//ARRAY in JAVASCRIPT
// let marks=[45,98,90,78,92];
// console.log(marks.length);
// console.log(marks[0]);
// console.log(marks[1]);
// console.log(marks[2]);
// console.log(marks[3]);
// console.log(marks[4]);

//Looping Over an array
// let marks=[45,98,90,78,92];
// for(let i=0;i<marks.length;i++){
//     console.log(marks[i]);
// }

//Practice
// let marks=[85,97,44,37,76,60];
// let sum=0;
// for(let val of marks){
//     sum+=val;
// }
// let avgMarks=sum/marks.length;
// console.log(`avg Marks of the class is ${avgMarks}`);


//Practice
// let price=[250,645,300,900,50];
// let final_value=0;
// for(let val of price){
//     final_value=val-10*val;

    
// }
// console.log(final_value);

// let penPrice = 10;
// let erasorPrice = 20;
// let output = ("The total Price is: " + (penPrice+erasorPrice) + " Rupess.") ;
// console.log(output);
// console.log("The Price of Pen is: " , penPrice , "Rupess");
// //Template Literals
// let result = ("The total Price is : ${penPrice+erasorPrice} Rupess.");



// Arithmetic Operator

// let a = 10 ;
// let b = 5;
// console.log(a-b);
// console.log(a+b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);
// console.log(a**b);


//Comparison Operator

// (==) -->Compares Value , not type
// (===) -->Compares Type and value both

// let n = 3;
// let str= '3';
// console.log(n==str); //True
// console.log(n===str);//False

// let color = "green";
// if(color === "red"){
// console.log("Stop");
// }

// if(color === "yellow") {
// console.log("Slow Down");
// }

// if(color === "green") {
// console.log("You can go . Happy Journey!");
// }



//Create a system to calculate popcorn price

// let size = "S";
// if(size === "XL") {
//     console.log("Price is Rs.150");
// }
// else if(size === "L") {
//     console.log("Price is Rs.200");
// }
// else if(size === "M") {
//     console.log("Price is Rs.100");
// }
// else {
//     console.log("Price is Rs.50");
// }


//Nested if-else

// let marks = 87;
// if(marks >= 40) {
//     console.log("Pass");
//     if(marks >= 90) {
//         console.log("Grade : O");
//     }
//     else if(marks >=80 && marks<90 ) {
//         console.log("Grade : A+");
//     }
// }
// else{
//     console.log("Fail");
//     console.log("Grade : E");
// }


// let string = "abcd";
// if (string[0] === 'a' && string.length > 3) {
//     console.log("Good String");
// }

// else {
//     console.log("Not a good string");
// }



//Practice1
// let num = 61;
// if (num %10=== 0) {
//     console.log("Good");
// }
// else {
//     console.log("Bad");
// }


//Practice2
// let num = 2;
// switch (num) {
//     case 1: console.log("Months in Quarter 1:" ,"January" , "February" , "March");
//     break;
//     case 2: console.log("Months in Quarter 2:","April", "May" ,"June");
//     break;
//     case 3: console.log("Months in Quarter 3:","July" ,"August" ,"September");
//     break;
//     case 4: console.log("Months in Quarter 4:","October" , "November" ,"December");
//     break;
//     default:console.log("Invalid input");
//}

//Truthy and False Concept in JS

// Everything in JS is true 
//and False values are false, 0 ,-0 ,On(BigInt value),""(empty string),null,undefined ,NaN

// let namee = "Vaishnavi";
// if(namee) {
//     console.log("It has true value");
// }
// else {
//     console.log("It has false value");
// }


//  let string ="";
//  if(string) {
//     console.log("It has true value");
// }
//  else {
//     console.log("It has false value");
//  }


//  let ace = 0;
//  if(num) {
//     console.log("ace is not equal to 0");
//  }
//  else {
//     console.log("ace is equal to 0");
//  }




//Switch Statement 

// let color = "yellow";
// switch (color) {
//     case "red" :
//     console.log("Stop!");
//     break;

//     case "green": 
//         console.log("Go");
//         break;
    
//     case "yellow": 
//         console.log("Slow down");
//         break;
    
//     default : 
//            console.log("Switch is not working");
    

// }


//Question

// let day = 6;
// switch(day) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday"); 
//       break;
//     default:
//         console.log("Invalid day");
// }



//Alert - used to display an alert message on the page.
//alert("Something is wrong");

//Prompt - used to display a dialog box that asks user for some input.
//prompt("Enter your password");

//way to use console

// console.log("this is a simple log");
// console.error("this is an error msg");
// console.warn("this is a warning msg");

//take input from user its first and last name and concatenate

// let firstName = prompt("Enter your first name:");
// let lastName = prompt("Enter your last name:");
// let name = firstName + " "+ lastName;
// console.log(name);



//Q1
// let num = 10;
// if (num%10 == 0) {
//     console.log("Good");

// }

// else {
//     console.log("Bad");
// }

//Q2
// let name = prompt("Enter your name:");
// let age = prompt("Enter your age:");
// alert(`${name} is ${age} years old. `);

//Q3

// let str = "apple";
// if( (str[0] == 'a') || (str[0] == 'A') && (str.length > 5) ) {
//     console.log("Golden String.");
// }

// else {
//     console.log("Not a golden string.");
// }

//Q4
// let num1 = prompt("enter num1:");
// let num2 = prompt("enter num2");
// if (num1[num1.length-1] === num2[num2.length-1]) {
//     console.log("num1 and num2 have same last digit.");
// }

// else {
//     console.log("num and num2 not have same last digit.");
// }

//Above short method
// let num1 = prompt("enter num1:");
// let num2 = prompt("enter num2");
// if( num1%10 == num2%10) {
//     console.log("num1 and num2 have same last Digit which is" , num1%10);
// }
// else {
//     console.log("num and num2 do not have same last digit.");


// }


//Find the largest number among 3 numbers.

// let a = 11;
// let b = 16;
// let c =8;
// if(a>b){
//     if(a>c) {
//         console.log("a is largest");
//     }
// }

// else {
//     if(b>c) {
//         console.log("b is largest");
//     }
//     else {
//         console.log("c is largest");
//     }
// }



//Ternary Operator

// let age = prompt("enter your age:");
// let result = (age>=18)? "Can vote" : "Cannot vote";
// console.log(result);


//Bitwise Operator - works on bits
// console.log(2|3);  //or operator'
// console.log(2&3);//and operator

//Object in JS ---> define property and behaviour 
// let rectangle = {
//     length:1,
//     breadth:3,
//     draw : function draw() {
//         console.log('drawing rectangle');
//     }
// }


// let student = {
//     name: 'Vaishnavi Raj',
//     registerId: '02',
//     salary:150000,
//     data : function data() {
//         console.log('data of an student');
//     }

// }


//Object Creation

// 1-Factory function --> camelCase ,request & return

// function createRectangle() {
//     let rectangle = {
//     length:1,
//     breadth:3,
//     draw : function draw() {
//         console.log('drawing rectangle');
//     }

// }
// return rectangle;

// }

//Object creation in factory function
// let rectangleObj1 = createRectangle();
// console.log(rectangleObj1);


// 2-Constructor function-->PascalNotation ,only request means property/methods initialise and define.

//function Rectangle() {
//     this.length=1; //this implies current object
//     this.breadth=2;
//     this.draw=function draw() {
//         console.log('drawing rectangle');
//     }
// }

//Object creation using constructor function

//let rectangleObject = new Rectangle(); //new gives empty object
//console.log(rectangleObject);

//Dynamic nature of object 
//we can add and delete Both. 

// rectangleObject.color ='yellow'; //adding
// delete rectangleObject.color; //deleting
// console.log(rectangleObject);

//Note-function is also an object

//Constructor Property
//rectangleObject.constructor;    ---->jot down on consolewindow.



//constructor of constructor



function DrawSquare(side1,side2){
    this.side1=23;
    this.side2=23;
    draw : function draw(){
        console.log("drawing square");
    }
}

//Object creation
let SquareObj1 = new DrawSquare(23,23);
console.log(SquareObj1);

//we know DrawSquare is the constructor of SquareObj1 but what 
//about the constructor of DrawSquare---this is how we can find DrawSquareConstrtor.

// let Squa = new Function ('side1','side2',
//     ` this.side1=side1;
//     this.side2=side2;
//     draw : function draw(){
//         console.log("drawing square");
//     }`
// )

// let SquaObj1 = new Squa(45,45);
// console.log(SquaObj1);