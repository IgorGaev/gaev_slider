var btnPrev = document.querySelector("#gallery .buttons .prev");
var btnNext = document.querySelector("#gallery .buttons .next");

var images = document.querySelectorAll("#gallery .photos img");
var i = 0;
// console.log(images);

btnPrev.onclick = function () {
  images[i].style.display = 'none';
  i--;
  if (i < 0) {
    i = images.length-1;
  }
  images[i].style.display = 'block';
  console.log(i);
}



btnNext.onclick = function () {
  
  images[i].style.display = 'none';
  i++;
  if (i >= images.length) {
    i = 0;
  }
  images[i].style.display = 'block';
  console.log(i);  
}

//модальное окно

var button = document.querySelector('#button');
var modal = document.querySelector('#modal');
var close = document.querySelector('#close');

button.onclick = function () {
  modal.classList.add('modal_active');
}
close.onclick = function () {
  modal.classList.remove('modal_active');
}