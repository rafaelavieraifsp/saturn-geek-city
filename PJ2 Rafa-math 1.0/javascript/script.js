
/*carrosel de fotos de produtos*/ 

const slider = document.querySelectorAll('.slider');
const btnprev = document.getElementById('prev-button');
const btnnext = document.getElementById('next-button');

let currentslide = 0;

function hideslider() {
  slider.forEach(item => item.classList.remove('on'));
}

function showslider() {
  slider[currentslide].classList.add('on');
}

function nextslider() {
  hideslider();
  if (currentslide === slider.length - 1) {
    currentslide = 0;
  } else {
    currentslide++;
  }
  showslider();
}

function prevslider() {
  hideslider();
  if (currentslide === 0) {
    currentslide = slider.length - 1;
  } else {
    currentslide--;
  }
  showslider();
}

showslider();

btnnext.addEventListener('click', nextslider);
btnprev.addEventListener('click', prevslider);
