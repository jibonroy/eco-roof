var line = document.querySelector('.lines');
var line1 = document.querySelector('.line1');
var line2 = document.querySelector('.line2');
var line3 = document.querySelector('.line3');
var navshow = document.querySelector('#myNav');

function myfunc() {
    if (line1.style.display === 'block' || line2.style.display === 'block' || line3.style.display === 'block') {
        line2.style.display = 'none';
        line.classList.add('line');
        navshow.classList.add('navshow')
        // nav.style.display = 'block';
        navshow.style.width = "80%";
        // document.getElementById("myNav").style.width = "80%";
        
    }
    else if(line2.style.display = 'none' || line.classList.add('line')) {
        line2.style.display = 'block';
        line.classList.remove('line');
        // nav.style.display = 'none';
        navshow.style.width = "0%";
        navshow.classList.remove('navshow');
        // document.getElementById("myNav").style.width = "0%";
    }
    else{

    }
    
}
// =================slider======================== //
var slider = document.getElementById("slider");
var sliderWidth = slider.offsetWidth;
var slideList = document.getElementById("slideWrap");
var count = 1;
var items = slideList.querySelectorAll("li").length;
var prev = document.getElementById("prev");
var next = document.getElementById("next");

window.addEventListener('resize', function() {
  sliderWidth = slider.offsetWidth;
});

var prevSlide = function() {
    if(count > 1) {
      count = count - 2;
      slideList.style.left = "-" + count * sliderWidth + "px";
      count++;
    }
  
    else if(count = 1) {
      count = items - 1;
      slideList.style.left = "-" + count * sliderWidth + "px";
      count++;
    }
  };

  var nextSlide = function() {
    if(count < items) {
      slideList.style.left = "-" + count * sliderWidth + "px";
      count++;
    }
    else if(count = items) {
      slideList.style.left = "0px";
      count = 1;
    }
  };

  next.addEventListener("click", function() {
    nextSlide();
  });
  
  prev.addEventListener("click", function() {
    prevSlide();
  });

  setInterval(function() {
    nextSlide()
  }, 5000);

  window.onload = function() {
    responsiveSlider();  
}