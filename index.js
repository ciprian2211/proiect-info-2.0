window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
  
    if (window.scrollY > 50) {
      navbar.classList.add('scroll');
    } else {
      navbar.classList.remove('scroll');
    }
  });

  document.addEventListener("DOMContentLoaded", function() {
    var elements = document.querySelectorAll('.activ');
    function delay(index) {
      setTimeout(function() {
        elements[index].classList.add('fade-in');
      }, index * 700); 
    }
    for (var i = 0; i < elements.length; i++) {
      delay(i);
    }
  });

  window.PageTransitionEvent = function(href)
  {
    document.querySelector('body').style.opacity = 0
    setTimeout(function(){
        window.location.href = href

    },200)
  }
  document.addEventListener ('DOMContentLoaded', function(event)
  {
    document.querySelector('body').style.opacity = 1
  })