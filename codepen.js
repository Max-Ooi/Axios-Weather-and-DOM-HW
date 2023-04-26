/************
 * N.B. The ghosts are SVGs, so it's 'fill', not 'color' you need to change
 *************/

// GET BY ID

let firstGhost = document.getElementById("first_ghost");

firstGhost.style.fill = "orange";


// GET BY CLASSNAME

let blueGhost = document.getElementsByClassName("second_wave");

for (let i = 0; i < blueGhost.length; i++) {
 blueGhost[i].style.fill = "blue";   
};

// GET AREA, DRILL DOWN using GET BY TAG NAME

let greenGhost = document.getElementById("area-51");

let greenGhost2 = greenGhost.getElementsByTagName("svg")

for (let i = 0; i < greenGhost2.length; i++) {
 greenGhost2[i].style.fill = "green";   
};

// querySelector nth-child

let redStrokeGhost = document.querySelector("body > div > div > svg:nth-child(3)");

redStrokeGhost.style.strokeStyle = "red"; 
redStrokeGhost.style.strokeWidth = 15;

// from the last child, select the div immediately above the ghost and make its border '5px dashed'

let borderBox = redStrokeGhost.parentElement.previousElementSibling.lastElementChild;

borderBox.style.borderStyle = "dashed";
borderBox.style.borderWidth = "5px";

// console.log(borderBox)

// querySelectorAll

let redGhost = document.querySelectorAll("#area-50 svg");

for (let i = 0; i < redGhost.length; i++) {
    redGhost[i].style.fill = "red";   
   };

console.log(redGhost)
