//request the value of an attribule
let imageAlt = document.querySelector(".backpack__image img").getAttribute("alt");
console.log(imageAlt);

//change the value of an attribute
document.querySelector(".backpack__image img").setAttribute("alt","newAttribute");
let imageNewAlt = document.querySelector(".backpack__image img").getAttribute("alt");
console.log(imageNewAlt);

//add some inline css to an element by specifying the style property and setting its value
document.querySelector(".siteheader").style.backgroundColor = "#0093E9";
document.querySelector(".siteheader").style.backgroundImage = "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)";

//query the style property of an element in the console to get a list of all the style properties available
console.log(`Style props available to .siteheader ${document.querySelector(".siteheader").style}`);
console.log(document.querySelector(".siteheader").style);