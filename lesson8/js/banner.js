



window.onload = function fridayBanner() {
    let d = new Date();
    const ban = document.querySelector('#banner');
  
    if (d.getDay() == 5) {
      ban.style.display = 'block';
    } else {
      ban.style.display = 'none';
    };
};

