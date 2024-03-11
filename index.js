window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
  
    if (window.scrollY > 50) {
      navbar.classList.add('scroll');
    } else {
      navbar.classList.remove('scroll');
    }
  });

  document.addEventListener("DOMContentLoaded", function() {
    var elements = document.querySelectorAll('.procesor,.placa_video,.placa_de_baza,.ram,.stocare,.psu,.carcasa,.perf');

    
    function addFadeInClassWithDelay(index) {
      setTimeout(function() {
        elements[index].classList.add('fade-in');
      }, index * 700); 
    }
    for (var i = 0; i < elements.length; i++) {
      addFadeInClassWithDelay(i);
    }
  });