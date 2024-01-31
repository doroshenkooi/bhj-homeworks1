const counterElement = document.getElementById("clicker__counter");
const cookieElement = document.getElementById("cookie");

let width = 310;
let height = 310;
let counter = 0;

function updateCounterAndCookie() {
  counter += 1;
  counterElement.textContent = counter;
  if (counter % 2 === 0) {
    width -= 10;
    height -= 10;
  } else {
    width += 10;
    height += 10;
  }
  if (counter === 40) {
    counter = 0;
  }
  
  cookieElement.style.width = width + "px";
  cookieElement.style.height = height + "px";
}

cookieElement.addEventListener("click", updateCounterAndCookie);

