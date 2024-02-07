const valueElements = document.querySelectorAll('.dropdown__value');
const listElements = document.querySelectorAll('.dropdown__list');

valueElements.forEach(function(element) {
  element.addEventListener('click', function() {
    const list = element.nextElementSibling;
    list.classList.toggle('dropdown__list_active');
  });
});

listElements.forEach(function(listElement) {
    const itemElements = listElement.querySelectorAll('.dropdown__item');

  itemElements.forEach(function(item) {
    item.addEventListener('click', function(event) {
      event.preventDefault();
      const value = item.querySelector('.dropdown__link').textContent;
      const valueElement = listElement.previousElementSibling;
      valueElement.textContent = value;
      listElement.classList.remove('dropdown__list_active');
    });
  });
});

const linkElements = document.querySelectorAll('.dropdown__link');

linkElements.forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault();
  });
});
