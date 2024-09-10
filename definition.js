//function 
//es5 and es6
//es6 has three types--->function statement,function expression,anonymous function
function abcd() {
    //function statement
};

var abcd=function() {
    //function expression
};

fucntion () {
    //anonymous function
};

//es6 only has one that further divides into three--->fat arrow function
var abcd=()=> {
    //fat arrow function
};

//>basic fat arrow, fat arrow with one param,fat arrow with implicit return

var abcd=()=> {
    //basic fat arrow function
};

var abcd=param => {
    //fat arrow with one param
    //in one param fucntion we can remove fat
};

var abcd=()=>34;
//fat arrow with implicit return


//JS me essa function jo kuch ni return krta h wo undefined return krta h

//Undefined is a value-->In this case we declared variable but don;t give any value to it.

//not defined is an error-->In this case we don't declared any variable but try to access then it throws an error and that error is called not defined.

//Null is also a value--> In this case we try to find something but it doesn't exist then it gives null.
//Null is recieved when something is not found



function countVowel(str) {
    let count=0;
    for (let i=0;i<str.length;i++){
        if(str[i] === 'a' || str[i]==='e' || str[i]==='i' || str[i]==='o' || str[i]==='u') {
            count++;
        }
        
      

}
return count;
}



function countVowel(str)=>{
    let count=0;
    for (let i=0;i<str.length;i++){
        if(str[i] === 'a' || str[i]==='e' || str[i]==='i' || str[i]==='o' || str[i]==='u') {
            count++;
        }
        
      

}
return count;
}
 



var countVowel=(str)=> {
    let count=0;
    for (let i=0;i<str.length;i++){
        if(str[i] === 'a' || str[i]==='e' || str[i]==='i' || str[i]==='o' || str[i]==='u') {
            count++;
        }
        
      

}
return count;
   
};



forEach loop in array

let arr=[1,2,3,4,5];

arr.forEach((val)=>{
    console.log(val);

}

)

//Higher order function /Higher order methods --->passes funnction as parameter or return function

let arr=[2,4,5,7,9,65];
arr.forEach((val=> {
    console.log(val*val);
}))

Same as forEach but it can also returns new array
let arr=[2,4,5,7,9,65];
let newArr=arr.map((val=> {
    return val;
}))
console.log(newArr);


filter

let arr=[2,4,3,5,7,9];
let evenArr=arr.filter((val)=>{
    return val%2===0;

})
console.log(evenArr);

const output=arr.reduce((res,curr)=> {
    return res+curr;
})
console.log(output);


let marks=[1,90,98,78,96,95,45];

let goodMarks=marks.filter((val)=> {
    return val>90;
})

console.log(goodMarks);


let n=prompt("enter number");
let arr=[];
for(let i=1;i<=n;i++) {
    arr.push(i);

}

let sum=arr.reduce((res,curr)=> {
    return res+curr;
})
console.log(sum);

let prod=arr.reduce((res,curr)=> {
    return res*curr;
})

console.log(prod);


