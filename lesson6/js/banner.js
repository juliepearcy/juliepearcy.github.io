/*var d = new Date();
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var n = weekday[d.getDay()];

if (n === 'Friday') {
    document.getElementById('banner').className = 'banner';
} else {
    document.getElementById('banner').classList.remove('banner');
    document.getElementById('banner').className = 'bannernone';
}*/



/*
if(date.getDay() == 5) {
    document.querySelector("#banner").style.display = "block";

}*/




window.onload = function fridayBanner() {
    let d = new Date();
    const ban = document.querySelector('#banner');
  
    if (d.getDay() == 5) {
      ban.style.display = 'block';
    } else {
      ban.style.display = 'none';
    };
};

