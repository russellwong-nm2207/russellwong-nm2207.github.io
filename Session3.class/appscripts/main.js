// main.js

console.log("yo");

var x = 4443423434;
var y = 439439439;
var z = x + y;
console.log(z);

var fTemp = 50;
var cTemp = [(fTemp-32)*5]/9;
console.log(cTemp);

/*
document.getElementById("mass").innerHTML = 5;
document.getElementById("constant").innerHTML = 4;
var E = m*c*c;
console.log(E);
*/

var speedE1 = document.getElementById("aside");
speedE1.style.color = "red";

//function declaration
// maps x in  the interval [a,b] into the interval [m, n]
let map =function (x, a, b, m, n){
    let range = n-m;
    // x is 'proportion' of the way from a to b
    // e.g. if a=10, b=20, and x=15, x is half (.5) of the way from a to b
    let proportion = (x-a)/(b-a); 
    return (m + proportion*range);
}

console.log(map(15,10,20,0,100));
speedE1.innerHTML = map(15,10,20,0,100);