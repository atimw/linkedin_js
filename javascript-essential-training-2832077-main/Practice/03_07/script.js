/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const mug = {
  size: "24oz",
  color: "Black",
  containerType: "Thermos",
  handle: true,
  lid: true,
  brand: "Iron Flask",
  material: "Stainless Steel",
  resize: function (newSize) {
    this.size = newSize;
  },
};

console.log(mug);
