/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */

let newContent = `
 <p>Hello there!</p>
 <h1></h1>
 `;

//function declaration
function addContent(newContent) {
  document.querySelector("main").innerHTML = newContent;
}
addContent(newContent);

//function expression
const removeElement = function (element) {
  let remove = document.querySelector(element);
  remove.remove();
};
removeElement("h1");

//arrow function
function sum(a, b) {
  return a + b;
}
let sum2 = (a, b) => a + b;
console.log(sum2(1, 5));

let isPositive = (number) => number >= 0;
console.log(isPositive(1));
