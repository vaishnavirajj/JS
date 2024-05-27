//String Methods - action that can be performed on objects.

//Format - StringName.method()

//Trim Method - removes the whitespaces from both the end of string and return new one

// let msg = "      Hello    ";
// console.log(msg.trim());


// Note- Strings are immutable in JS that is why  after the applying the methods a new strings created and return the 
// expected value but the original string value remains Same


// let password = prompt("Enter your password.");
// console.log(password.trim());


//toUpperCase and toLowerCase methods
// let name = "Vaishnavi Raj";
// console.log(name.toUpperCase());
// console.log(name.toLowerCase());


//String Methods with Argument
//Argument is a some value that we pass to the method.

//Format -stringName.method(argument)

//indexOf Method - returns the first index of occurence of some value in string. Or gives -1 if not found

// let msg = "ILoveCoding";
// let name = "Microsoft";
// console.log(msg.indexOf("Love"));
// console.log(name.indexOf("soft"));
// console.log(msg.indexOf("J")); //-1(not found)


//Method Chaining - using one method after another. order of execution will be left to right.
// let msg = "      I am a Programmer    ";
// console.log(msg.trim().toUpperCase());

//Slice method - return the part of the original string as a new String

let name = "Shelley";
console.log(name.slice(0));
console.log(name.slice(0,4));
console.log(name.slice(-3));
