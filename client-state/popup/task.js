document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('subscribe-modal');
    const closeButton = document.querySelector('.modal__close');
  
    if (document.cookie.indexOf('modalClosed=true') === -1) {
      modal.classList.add('modal_active');
    }
  
    closeButton.addEventListener('click', function() {
      modal.classList.remove('modal_active');
      document.cookie = 'modalClosed=true';
    });
  });
  