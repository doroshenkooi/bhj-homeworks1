const tooltips = document.querySelectorAll('.has-tooltip');
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';

tooltips.forEach(function(element) {
  document.body.appendChild(tooltip);

  element.addEventListener('click', function(event) {
    event.preventDefault(); 

    const title = element.getAttribute('title');

    if (tooltip.classList.contains('tooltip_active')) {
      tooltip.classList.toggle('tooltip_active');
  } else {
      tooltip.classList.add('tooltip_active');
      tooltip.textContent = title;

    tooltip.style.top = element.offsetTop + element.offsetHeight + 'px';
    tooltip.style.left = element.offsetLeft + 'px';
  } 
  })
});
