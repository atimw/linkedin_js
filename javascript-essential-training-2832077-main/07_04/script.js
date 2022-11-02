/**
 * Challenge: Build and modify an array
 * - Build an array with 8 items
 * - Remove the last item
 * - Add the last item as the first item on the array 
 * - Sort the items by alphabetical order
 * - Use the find() method to find a specific item in the array
 * - Remove the item you found using the find method from the array.
 */

//build an array with 8 items
const desk = [
    "keyboard",
    "mouse",
    "computer",
    "dock",
    "backup storage",
    "backup power",
    "monitor",
    "speaker"
];
console.log(desk);

//remove the last item
let speaker = desk.pop();
console.log(desk);

//add the last item as the first item on the array
desk.unshift(speaker);
console.log(desk);

//sort the items by alphabetical order
desk.sort();
console.log(desk);

//user the find() method to find a specific item in the array
console.log(desk.find(element => element == "speaker"));

let found = desk.find(element => element == "speaker");
desk.pop(found);
console.log(desk);