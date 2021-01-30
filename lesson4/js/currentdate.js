

let x = new Date();
let day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

document.getElementById("dateDisplay").innerHTML = day[x.getDay()] + ", " + 
x.getDate() + " " + month[x.getMonth()] + " " + x.getFullYear();

       