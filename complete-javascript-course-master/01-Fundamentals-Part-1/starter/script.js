// alert("hello world");
// let js="amazing";
// // if (js=="amazing") alert("js is fun");
/*
// Values
console.log(23)
console.log("vanshika")

// Variable
let firstName="Vanshika";
console.log(firstName);

// data types

console.log(6)  // numbers
console.log(typeof 3)

console.log("hello")  // strings
console.log( typeof "vanshika")

console.log(true)  // boolean
console.log(false)  // boolean
let javaScriptIsFun=true;
console.log(javaScriptIsFun);
console.log(typeof javaScriptIsFun);

// dynamic typing
let a=true;
console.log(typeof a)

a=123
console.log(typeof a)

// undefine type
let year;
console.log(year);
console.log(typeof year);

year=1999
console.log(typeof year)

// typeof null
console.log(typeof null);


// ways of defining variable

// let keyword
let age=15
age=16
console.log(age)
// var keyword
var age1=14
age1=56
console.log(age1)
// const keyword
const AGE=12;
AGE=23
console.log(AGE)


// Operators

// Arithmetic operators

const now=2037;
const ageJonas=now-1991;
const ageSarah=now-2018;
// console.log(ageJonas*2,ageSarah/10,2**3)

// const firstName='Vanshika'
// const lastName='Saxena'
// console.log(firstName+lastName)
// console.log(firstName+' '+ lastName)

// // typeof opeartor

// //Assignment opeartor
// let x=10+5;
// x+=10;
// console.log(x)
// x*=4
// console.log(x)
// x/=2
// console.log(x)
// x++;
// x--;
// x--;
// console.log(x)

// // Comparison operators
// console.log(ageJonas>ageSarah)
// console.log(ageJonas<ageSarah)
// console.log(ageJonas==ageSarah)
// console.log(18>=ageSarah)

// operator precedence
console.log(now-1991>now -2018)

let x,y;
x=y=25-10-5;
console.log(x,y);

const average=(ageJonas+ageSarah)/2
console.log(average);


//string and template literal

const firstName='Vanshika'
const lastName='Saxena'
const birthyear=2002;
const year=2037;
const job='Student'
const vanshika="I'm " +firstName + ' ,a '+(year-birthyear)+"year's old " +job+":";
console.log(vanshika)

const vanshikaNew=`I'm ${firstName}, a ${year-birthyear} year old ${job}`
console.log(vanshikaNew)

// multiline string

//before ES6
console.log('string with \n\
multiline line \n\
string')
// using template literal
console.log(`
string with
multiple
lines`)

//if -else: taking decisions
const age=15;
const isOldEnough=age>=18
if (isOldEnough){
  console.log("You can start driving ⭐")
}
else{
  console.log("sorry")
  const yearsLeft=18-age;
  console.log(`wait another ${yearsLeft} years`)
}

const birthyear=1991;
if (birthyear<=2000){
  let century=20
}
else{
  century=19
}
console.log(century)

// type conversion

//strings to numbers
const inputYear='1991'
console.log(inputYear+18)//199118
console.log(Number(inputYear)+18)
//original value is not converted 
console.log(typeof inputYear)

console.log(Number('Vanshika'))
//returns NaN if string is failed to covert 
//NaN is invalid number
console.log(typeof NaN)

//number to string
console.log(typeof String(23),23);
//note- number can be converted to string or boolean but we cannot convert something to undefined or null

//boolean to number
console.log(Number(true));
console.log(Number(false));
//boolean to string
console.log(String(true));
console.log(typeof String(false));

//falsy value=not exactly false , but can be converted to false value
//5 falsy value are:0,'',undefined,null,NaN
//everything else is truthy value

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(''));
console.log(Boolean(NaN));
console.log(Boolean(null));

console.log(Boolean(1));
console.log(Boolean(19));
console.log(Boolean('asdf'));
console.log(Boolean({}));//empty object;
//conversion to boolean is coercion , it happen in two cases when we use logical operators or use conditional statements like if else

//case-1 :conditional statements
const money=100;
if (money){ //js will try to convert value in condition to boolean value
  console.log("Do not spend it all")

}
else{
  console.log("go get a job")
}
let height;//height is undefined therfore false
if(height){
  console.log("Yay! height is defined")
}
else{
  console.log("undefined")
}
//case-2logical operators

const hasDriverLicense=true;
const hasGoodVision=true;
const isTired=true;
console.log(hasDriverLicense && hasGoodVision)
console.log(hasDriverLicense || hasGoodVision)
console.log(!hasDriverLicense)
if(hasDriverLicense&&hasGoodVision&!isTired){
  console.log('drive')
}else{
  console.log("do not drive")
}

//type coercion-behind the scenes
console.log('i am '+23+' years old') //concatention number will be converted to string
console.log('23'-'18'-3)//10 - operators trigger conversion of string to number
console.log('23'+'18'+3)//22183 + operators trigger conversion of  number to string
console.log('23'*2)// 46 * trigger conversion of string to number
console.log('22'/2)//11

let n='1'+1;
n=n-1
console.log(n) //10

console.log(2+3+4+'5') //98
console.log('10'-'4'-'3'-2+'5')//15
//type coercion can include bugs in our code if not known

// equality operator == or ===
 const age='18'
 if (age ==18) console.log("You just have become an adult")

 if (age==18) console.log("you have just become an adult")

prompt("what is you favorite number") //create a value which we need tos tore
const favorite=Number(prompt("what is your favorite number"))
console.log(favorite);
console.log(typeof favorite); //23 is string
if (favorite===23){
  console.log("23 is amazing number")

}
else if(favorite==7){
  console.log("7 is also amazing")
}
else if (favorite==9){
  console.log("9 is cool")
}
else{
  console.log("number is neither 23 nor 7")
}
if (favorite!==27) console.log("why not 27")

//Switch Statements

const day="sunday";
switch(day){
  case 'monday':
    console.log("Plan my course structure");
    console.log("Go to coding meetup");
    break;
  case 'tuesday':
    console.log("prepare theory videos");
    break;
  //same execution for two cases:
  case 'wednesday':
  case 'thursday':
    console.log("write code example")
    break; //without break code keeps executing
  case 'friday':
    console.log("Record videos");
    break;
  case 'saturday':
  case 'sunday':
    console.log("Enjoy the weekend");   
    break;
  default:
    console.log("not a valid day")     

}

if (day==='monday'){
  console.log("Plan my course structure");
  console.log("Go to coding meetup");
}
else if(day==='tuesday'){
  console.log("prepare theory videos");
}
else if(day==="wednesday" || day==="thursday"){
  console.log("write code example");
}
else if(day==="friday"){
  console.log("Record videos");
}
else if(day=='saturday' || day=='sunday'){
  console.log("enjoy the weekend");
}
else{
  console.log("not a valid day");
}

//ternary  operator

const age=18;
age>= 18 ? console.log("i like to drink wine") : console.log("i like to drink water")

const drink=age>=18 ? 'wine':'water';
console.log(drink)

let drink2;
if(age>=18){
  drink2="wine";
}
else{
  drink2="water";

}

console.log(drink2)
console.log(`i like to drink ${age>=18 ? 'wine' :'water'}`)
*/