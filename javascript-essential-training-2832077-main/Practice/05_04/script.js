//target specific elements nested inside other elements
let frogPack = document.querySelector("#pack02 .backpack__name");
function colorChange(bag){
    bag.style.backgroundColor = 'green';
}
colorChange(frogPack);

//Try advanced CSS queries to get specific targets
document.getElementById("pack02").style.backgroundColor = "pink";