const tooltips = document.querySelectorAll('.has-tooltip');
tooltips.forEach(function(element) {
  element.addEventListener('click', function(event) {
    event.preventDefault(); 
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.textContent = element.getAttribute('title');
    document.body.appendChild(tooltip);
    tooltip.style.top = element.offsetTop + element.offsetHeight + 'px';
    tooltip.style.left = element.offsetLeft + 'px';
    tooltip.classList.add('tooltip_active');
    document.addEventListener('click', function(event) {
      if (event.target !== element && event.target !== tooltip) {
        tooltip.remove();
        element.classList.remove('tooltip_active');
      }
    });
  });
});
