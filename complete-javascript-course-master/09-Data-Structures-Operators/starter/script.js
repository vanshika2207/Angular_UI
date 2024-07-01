'use strict';
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  // [`day-${4 + 2}`]
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  // openingHours: openingHours,
  //ES6 enhanced object literal
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20.00', address }) {
    console.log(`Order received :${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}
            will be delivered to ${address} at ${time}p.m`);
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delecious pasta with ${ing1} , ${ing2}, ${ing3}`);
  },
  orderPizza(mainIngredients, ...otherIngredients) {
    console.log(mainIngredients);
    console.log(otherIngredients);
  },
};
//---------Strings---------------------------//
const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(airline.length);
console.log('teesha'.length);

console.log(airline.indexOf('r'));
console.log(airline.indexOf('portugal'));
console.log(airline.indexOf('Portugal'));

console.log(airline.lastIndexOf('r'));
console.log('last ', airline.lastIndexOf(' '));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));
console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));
console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  //B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log('You got middle seat');
  } else {
    console.log('You got lucky');
  }
};
checkMiddleSeat('11B');
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

const passenger = 'jessica and smith davis';
const array = passenger.split(' ');
console.log(array);
const newarray = new Array();
for (const i of array) {
  newarray.push(i.toUpperCase());
}
console.log(newarray.join(' '));
//---------------------------------------------//
/**
//maps
const rest = new Map();
rest
  .set('name', 'Teesha ka dhaba')
  .set(1, 'Bhopal')
  .set(2, 'Delhi')
  .set('categories', [
    'chole bhature',
    'pav bhaji',
    'noodles',
    'dosa',
    'pasta',
    'pizza',
  ])
  .set('open', 10)
  .set('close', 7)
  .set(true, 'We are open')
  .set(false, 'We are close');
console.log(rest);

console.log(rest.get(1));

console.log(rest.delete(2));

console.log(rest.has('categories'));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.size);
const arr = [1, 2];
rest.set(arr, 'Test');
console.log(rest);
console.log(rest.get(arr));

const question = new Map([
  ['question', 'what is the best programming language in the world'],
  [1, 'C'],
  [2, 'JAVA'],
  [3, 'JAVASCRIPT'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'try again'],
]);
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));

for (const [key, value] of question) {
  console.log(key, value);
}
for (const [key, value] of Object.entries(openingHours)) {
  console.log(key, value);
}
console.log([...question]);
**/
//---------------------------------------------//
/**
//sets
//creating
const orderSet = new Set(['Pasta', 'Pizza', 'Pasta']);
console.log(orderSet);
//from strings
console.log(new Set('vanshika'));
//empty set
console.log(new Set());
//size of sets
console.log(orderSet.size);
//to check for element in the set
console.log(orderSet.has('Pizza'));
console.log(orderSet.has('Cheese'));
//add element in the set
console.log(orderSet.add('Cheese'));
console.log(orderSet.add('Garlic Bread'));
//remove element from the set
console.log(orderSet.delete('Pizza'));
console.log(orderSet.delete('Pizzad'));
//loop through the set
for (const element of orderSet) {
  console.log(element);
}
//application
const staff = ['a', 'b', 'a', 'a', 'b', 'c', 'd'];
console.log([...new Set(staff)]);

**/
//---------------------------------------------//
//looping through objects
/**
//Object.keys()
const properties = Object.keys(openingHours);
console.log(properties); //return keys-property name

//number of properties
let openStr = `We are open on ${properties.length} days:`;

for (const day of properties) {
  openStr += `${day},`;
}
console.log(openStr);

//Object.values
const values = Object.values(openingHours);
console.log(values);

//Object.entries()
const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}
**/
//---------------------------------------------//
//optional chaining
/**
if (restaurant.openingHours && restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
}
//with optional chaining if certain property does not exist then undefined is return immediately
console.log(restaurant.openingHours.mon?.open); //if monday exist then open property will be read
//otherwise undefined is return
console.log(restaurant.openingHours?.mon?.open);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed';

  console.log(`On ${day} ,we open at ${open}`);
}
//methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRissoto?.(0, 1) ?? 'Method does not exist');

//arrays
const users = [{ name: 'vanshika' }];
console.log(users[0]?.name ?? 'user array empty');
*/

// //---------------------------------------------//
//looping array=for....of
/**

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) {
  console.log(item);
}

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}:${el}`);
}
console.log(...menu.entries());
*/
//---------------------------------------------//
/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number 
of player names (NOT an array) and prints each of them to the console,
 along with the number of goals that were scored in total (number of player
  names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
//1
//destructuring array
const [players1, players2] = game.players;
console.log(players1);
console.log(players2);

//2
//rest
const [gk, ...fieldPlayers] = players1;
console.log(gk);
console.log(fieldPlayers);

//3
//spread
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//4
//merge
const playerFinal = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(playerFinal);

//5
//destructuring objects
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1);
console.log(draw);
console.log(team2);

//6
const printGoals = function (...name) {
  console.log('number of goals ', name.length);
};
printGoals(...game.scored);

//7.logical operator-shoert circuiting
team1 < team2 && console.log('Team 1 is more likely to win');
**/
//---------------------------------------------//
//logical assignment operators
/**
const rest1 = {
  name: 'Capri',
  // numGuest: 20,
  numGuest: 0,
};
const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// rest2.numGuest = rest2.numGuest || 10; //10
// a more concise way to write
rest2.numGuest ??= 10;
console.log(rest2);

// rest1.numGuest = rest1.numGuest || 10; //20
rest1.numGuest ??= 10;
console.log(rest1);

rest2.owner = rest2.owner && '<anonymous>';
console.log(rest2);

rest1.owner &&= '<anonymous>';
console.log(rest1.owner);

let e = false;
let f = false;
console.log((e ||= f));

**/
//---------------------------------------------//
//nullish coalescing operator-nullish is null and undefined
/**
restaurant.numGuests = 0;

const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
**/

//---------------------------------------------//
//short circuiting operators
/**
// ---------or--------------------
console.log(3 || 'Jonas'); //3
console.log('' || 'jonas'); //jonas
console.log(true || 0); //true
console.log(undefined || null); //null
console.log(undefined || null || 5); //5

restaurant.numGuests = 0;
const guest1 = restaurant.numGuests ? restaurant.numGuests : 12;
console.log(guest1);

const guest2 = restaurant.numGuests || 10;
console.log(guest2);

// -----------and----------------
console.log(0 && 'j');
console.log(1 && 'j');
console.log('Hello' && 23 && null && 'jonas'); //null

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushroom', 'spinach');
}

//shortcircuit
restaurant.orderPizza && restaurant.orderPizza('mushroom', 'spinach');
**/
//---------------------------------------------//

//the rest parameter and pattern-oppssite of spread
/**
//spread because on right side of =
const arr = [1, 2, ...[3, 4]];
console.log(arr);

//rest because on left side of =
const [a, b, ...others] = [1, 2, 3, 4, 5, 6];
console.log(others);

//array destructuring
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

//object destructuring
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

//function call
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 3);
add(3, 4, 5);
add(6, 7, 8);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushroom');

**/
//---------------------------------------------//
//the spread operator - unpacking array elements-to individual elements
/**

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const goodNewArr = [1, 2, ...arr];
console.log(goodNewArr);

//individual elements -1 2 3
console.log(...arr);
//equivalent to
console.log(7, 8, 9);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//application

//shallow copy
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

//Merge array
const mergeMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(mergeMenu);

//works on all iteerables-arrays,strings,maps,sets, objects are not iterables

//for strings
const str = 'Jonas';
const letters = [...str, '', 'saxena'];
console.log(letters);
console.log(...str);

//passing array parameter in functions
// const ingredient1 = prompt("Lets's make pasta with ingregient 1 ?");
// const ingredient2 = prompt("Lets's make pasta with ingregient 2 ?");
// const ingredient3 = prompt("Lets's make pasta with ingregient 3 ?");
// const ingredients = [ingredient1, ingredient2, ingredient3];

//traditionally= restaurant.orderPast(i1,i2,i3)
// restaurant.orderPasta(...ingredients);

//work with objects
const newRestaurant = {
  ...restaurant,
  founder: 'Vanshika',
  foundingYear: 2017,
};

console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Saxena ka Dhaba';
console.log(restaurant.name);
console.log(restaurantCopy);

**/

//---------------------------------------------//
//destructuring objects

/**

//order does not match ,but variable must be exact
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

//change variable name
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(hours);

//set default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//mutating variables
let a = 11;
let b = 33;
({ a, b } = { a: 23, b: 89 });
console.log(a, b);

//nested objects and names
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

//passing objects as function arguments
restaurant.orderDelivery({
  time: '22:30',
  address: 'dk devs',
  mainIndex: 2,
  starterIndex: 2,
});

//with default parameters
restaurant.orderDelivery({
  address: 'dk devs',

  starterIndex: 2,
});

//with rest operator
const { mainMenu, ...rest } = restaurant;
console.log(rest);

**/
//---------------------------------------------//
/**
 
//destructuring arrays

//what we do
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

//destructuring
const [x, y, z] = arr;
console.log(x, y, z);

//skipping elements we donnot want
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

//swapping elements-switching variable

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

//no need of temporary variable
[main, secondary] = [secondary, main];
console.log(main, secondary);

// console.log(restaurant.order(2, 0));
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter);
console.log(mainCourse);

//nested destructuring
const nested = [2, 3, [5, 6]];
// const [i, , j] = nested;
// console.log(j);

//individual elements-destructuring inside destructuring
const [i, , [j, k]] = nested;
console.log(i, j, k);

//default values
const [p = 1, q, r = 1] = [8, 9];
console.log(p, q, r);

//with rest parameter
const arr1 = [1, 2, 3, 4];
const [t, ...rest] = arr1;
console.log(rest);
console.log(t);
**/

//---------------------------------------------//
