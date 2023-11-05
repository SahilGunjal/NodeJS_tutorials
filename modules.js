const people = require("./names");
const myObj = require("./alternative");
const sayHi = () => {
  console.log(`Hello ${people.name1}, ${people.name2}`);
};

sayHi();
// console.log(myObj);
// console.log(`${myObj.items}`);
// console.log(`${myObj.singleCar.car1}`);

console.log(`${myObj.Car.car1}`);

require("./mind-grenade");
