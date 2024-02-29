const smallFontSizeLink = document.querySelector('.font-size_small');
const activeFontSizeLink = document.querySelector('.font-size_active');
const bigFontSizeLink = document.querySelector('.font-size_big');

smallFontSizeLink.addEventListener('click', function(event) {
  event.preventDefault(); 
  setActiveFontSize(smallFontSizeLink);
  setBookFontSize('small');
});

bigFontSizeLink.addEventListener('click', function(event) {
  event.preventDefault();
  setActiveFontSize(bigFontSizeLink);
  setBookFontSize('big');
});

function setActiveFontSize(activeLink) {
  activeFontSizeLink.classList.remove('font-size_active');
  activeLink.classList.add('font-size_active');
}

const book = document.getElementById('book');

function setBookFontSize(size) {
  book.classList.remove('book_fs-big', 'book_fs-small');
  if (size === 'small') {
    book.classList.add('book_fs-small');
  } else if (size === 'big') {
    book.classList.add('book_fs-big');
  }
}