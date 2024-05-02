'use strict';

// let hasDriversLicense=false;
// const passTest=true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("i can drive")

// const interface='Audio'; //strict mode reserved for future
// const private=534;

//function
/*
function logger(){
  console.log("My name is Vanshika")
}

//calling/runing/invoking function

// logger();
// logger();
// logger();

function fruitProcess(apple,oranges){
  
  const juice=`Juice with ${apple} apples and ${oranges} oranges.`
  return juice;
}
const a=fruitProcess(12,12);
console.log(a)
console.log(fruitProcess(5,6))

//function declaration


const age1=calAge(2002);
function calAge(birthyear){
  return 2024-birthyear
}
console.log(age1)




//function expression
const acalage1=function(birthyear){
  return 2024-birthyear
}
const age2=calAge(2006)
console.log(age2)

//arrow function
const calage3=birthyear => 2037-birthyear
console.log(calAge(2002))

// with more than one statement
const yearUntilRetirement =birthYear=>{
  const age =2024-birthYear;
  const retirement=65-age;
  return retirement
}
console.log(yearUntilRetirement(1970))
//with more than one parameters
const yearUntilRetirement1 =(firstname,birthYear)=>{
  const age =2024-birthYear;
  const retirement=65-age;
  return `${firstname} retires in ${retirement}`
}
console.log(yearUntilRetirement1('rajeev',1970))


function cutFruitPieces(fruit){
  return fruit *4;
}
//function calling other function
function fruitProcessor(apples,oranges){
  const applePieces=cutFruitPieces(apples)
  const orangePieces=cutFruitPieces(oranges)
  const juice=`Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange .`
  return juice;
}
console.log(fruitProcessor(4,4))


//reviewing function
const calcAge =function(birthYear){
  return 2024 -birthYear;
}
const yearUntilRetirement=function(birthYear,firstName){
  const age=calcAge(birthYear);
  const retirement=65-age;
  if(retirement>0){
    return ` ${firstName} retires in ${retirement} years `; 
  }
  else{
    console.log(` ${firstName} has already retired ${-retirement} years ago.`)
    return -1
  }

 
}
console.log(yearUntilRetirement(2002,'vanshika'))


//Arrays

//creating the array

const friends=['yash','priya','riya','tia']
console.log(friends)

const years=new Array(1990,1991,Array(1992,1993));
console.log(years)

console.log(`length : ${friends.length}`)

console.log(years[0])
console.log(years[years.length-1]);

friends[0]='mia'
console.log(friends)

const firstName='Vanshika'
const vanshika=[firstName,'Saxena',2024-2002,'student',friends]
console.log(vanshika)

//exercise
const calcAge=function(birthYear){
  return 2024-birthYear;

}
const year=[1990,1967,2002,2010,2018];
console.log(calcAge(year[0]))

//array methods

//push -push element at the end of array (mutate the original array),push returns the length of new array
const a=friends.push('jia')
console.log(a)
console.log(friends)

//unshift() -add element to the beginning of the array
//it also returns the length of the element 
friends.unshift('nia')
console.log(friends)

//remove elements
//pop()-remove last element of array,returns the removed elemnet
const removedElemnet=friends.pop()
console.log(friends)
console.log(removedElemnet)

//remove first element,also returns removed element
friends.shift();
console.log(friends)

//index -find index of the given element
console.log(friends.indexOf('priya'))
//if the element not present then returns -1
console.log(friends.indexOf('yash'))

//ES6 METHOD -include()-if the element present then true else false
console.log(friends.includes('priya'))
console.log(friends.includes('piya'))
//it checks with strict equality '==='
if (friends.includes('priya')){
  console.log(`you have a friend called jia`)
}

/* Write your code below. Good luck! 🙂 */
/*
function calcTip(bill){
  if (bill>=50 && bill<=300){
      return 0.15*bill;
  }
  else{
      return 0.20*bill;
  }
  
}
console.log(calcTip(100));
const bills=[125,555,44];
const tips=[console.log(bills[0]),console.log(bills[1]),console.log(bills[2])]
console.log(tips)


//Array

const vanshika={
  firstName:'Vanshika',
  lastName:'Saxena',
  // age:2024-2002,
  birthYear:2002,
  job:'Student',
  friends:['gia','ria','kia','mia'],
  hasDrivingLicense:false,
  calcAge: function(){
    this.age= 2024-this.birthYear;
    return this.age;
  },
  getSummary:function(){
    return `${this.firstName} is a ${this.calcAge()}
    years old ${this.job} , and she has ${this.hasDrivingLicense ? 'a':'no'} driver's license.`
  }

};
console.log(vanshika)
console.log(vanshika['age'])
console.log(vanshika.firstName)
vanshika.fatherName='Rajeev'
vanshika['motherName']='Deepti'
console.log(vanshika)

// const intrestedIn=prompt("what do you want to know about vanshika? type firstName,lastName,fatherName,motherName,age,job,friends")
// if (vanshika[intrestedIn]){
//   console.log(vanshika[intrestedIn])
// }
// else{
//   console.log("wrong")
// }

console.log(`${vanshika.firstName} has ${vanshika.friends.length} friends and her best friend is called ${vanshika.friends[2]}`)

//object methods

console.log(vanshika.calcAge())
// console.log(vanshika['calcAge']())
console.log(vanshika.age);
if (vanshika.hasDrivingLicense){
  console.log(`${vanshika.firstName} is a ${vanshika.age} years old , and she has a driver license `)
}
else{
  console.log(`${vanshika.firstName} is a ${vanshika.age} years old , and she does not have a driver license.`)
}
console.log(vanshika.getSummary());
/* Write your code below. Good luck! 🙂 */
/*
const mark={
  fullName:'Mark Miller',
  mass:78,
  height:1.69,
  calcBMI:function(){
      this.bmi= this.mass/(this.height*this.height)
      return this.bmi;
  }
};


const john={
  fullName:'John Smith',
  mass:92,
  height:1.95,
   calcBMI:function(){
      this.bmi= this.mass/(this.height*this.height)
      return this.bmi;
  }
};
console.log(john.calcBMI())
console.log(mark.calcBMI())

if (john.calcBMI()>mark.calcBMI()){
  console.log(`${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${mark.fullName}'s BMI (${mark.calcBMI()}) `);
}

*/ 
//for loop

for(let rep=1;rep<=10;rep++){
  console.log(`Lifting weight repetition ${rep}`)
}

const vanshika=['Vanshika','Saxena',2024-2002,'student',['a','b','c']];

const types=[]
for (let i=0;i<vanshika.length;i++){
  console.log(vanshika[i] ,typeof vanshika[i]);
  types.push(typeof vanshika[i]);
}
console.log(types);

const years=[1991,2002,1902,2024];
const ages=[];

for(let i=0; i<years.length;i++){
  ages.push(2024-years[i]);
}
console.log(ages);

//continue
for (let i=0;i<vanshika.length;i++){
  if(typeof vanshika[i]!=='string'){
    continue;
  }
  console.log(vanshika[i] ,typeof vanshika[i]);
}
//break
for (let i=0;i<vanshika.length;i++){
  if(typeof vanshika[i]==='number'){
    break;
  }
  console.log(vanshika[i] ,typeof vanshika[i]);
}
