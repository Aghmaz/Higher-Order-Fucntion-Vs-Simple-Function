// Defination
//higher order function : the function which takes another function as an argument and
// return function from it 

//===========================================

// if we have four circles and their radius are given
// we have to find area , circumference and diameter

//without HOF

const radius = [2, 3, 4, 5];

//to find area of a circle
const calculateArea = function (radius) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    // PI R square = area of  a circle
    output.push(Math.PI * radius[i] * radius[i]);
  }
  return output;
};
//to find diameter of a circle
const calculateDia = function (radius) {
  const output = [];

  for (let i = 0; i < radius.length; i++) {
    // PI R square = area of  a circle
    output.push(2 * radius[i]);
  }
  return output;
};

// to find a circumference of a circle
const calculateCircum = function (radius) {
  const output = [];

  for (let i = 0; i < radius.length; i++) {
    // PI R square = area of  a circle
    output.push(2 * Math.PI * radius[i]);
  }
  return output;
};

console.log("separate", calculateArea(radius));
console.log("separate", calculateDia(radius));
console.log("separate", calculateCircum(radius));

// now with HOF

const raduis1 = [2, 3, 4, 5];

const area = function (raduis1) {
  return Math.PI * raduis1 * raduis1;
};

const dia = function (raduis1) {
  return 2 * raduis1;
};

const circum = function (raduis1) {
  return 2 * Math.PI * raduis1;
};

//to create a generic method

const calculateAll = function (raduis1, logic) {
  const output = [];
  for (let i = 0; i < raduis1.length; i++) {
    output.push(logic(raduis1[i]));
  }
  return output;
};

console.log("HOF", calculateAll(raduis1, area));
console.log("HOF", calculateAll(raduis1, dia));
console.log("HOF", calculateAll(raduis1, circum));
