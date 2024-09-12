//Adding new element

//let num =[1,4,5,7];
// console.log(num);
// num[4]=8;
// console.log(num);

//Insertion
// Three ways to insert 
//1- End
// num.push(9);
// console.log(num);
// 2-Begin
// num.upshift(6);
// console.log(num);
// 3-Middle
// num.splice(10);
// console.log(num);


//how to loop an array
// var arr=[1,2,3,4,5];

// arr.forEach(function(val){
//     console.log(val);
// });

// let marks=[23,45,67,89,98,60];
// console.log(marks.length);

//for-of
// for(let val of marks) {
//     console.log(val);
    

// }


// let numbers=[85,97,44,37,76,60];
// let length=numbers.length;
// let sum=0;
// for (let val of numbers) {
//     sum=sum+val;
// } 
// let avgNum=sum/length;
// console.log(avgNum);


// let price=[250,645,300,900,50];
// for (let i=0;i<price.length;i++) {
//     price[i]=price[i]-10/100*price[i];
  



// }
// for (let val of price) {
//     console.log(val);
// }



//Arrays Methods
// let veggies=["potato","tomato","litchi"];
// veggies.push("coriander");
// console.log(veggies);
// veggies.pop();
// console.log(veggies);

//toString() ---->converts array to string---->don't change in original array

//console.log(veggies.toString());    //--->it returns new string

//Concat:joins multiple arrays & returns result

// let marvelHero=["Captain","thor","Iron Man","Black widow"];
// let dcHero=["Super man","deadpool","batman"];
// let heroes=marvelHero.concat(dcHero);
// console.log(heroes);

//unshift():add to start
// marvelHero.unshift("antman");
// console.log(marvelHero);

//shift():delete from start and return and it does change in orginal array
// let val=marvelHero.shift();
// console.log("deleted value->",val);
// console.log(marvelHero);

//Slice()--doesn't change original array
// let sliceHero=marvelHero.slice(0,3)
// console.log(sliceHero);

//Splice():change original array(add,remove,replace)
// marvelHero.splice(0,2,"hulk","spiderman");
// console.log(marvelHero);


let companies=["Bllomberg","Microsoft","Uber","Google","IBM","Netflix"];
companies.shift();
companies.splice(2,1,"Ola");
companies.push("Amazon");
console.log(companies);



