// Header Search Modal Handler
document.addEventListener('DOMContentLoaded', function() {
  const searchButton = document.querySelector('.header-actions__search');
  const searchModal = document.querySelector('#search-modal');
  
  if (searchButton && searchModal) {
    searchButton.addEventListener('click', function(e) {
      e.preventDefault();
      if (searchModal.open) {
        searchModal.open();
      } else {
        // Fallback for older implementations
        const dialog = searchModal.querySelector('dialog');
        if (dialog) {
          dialog.showModal();
        }
      }
    });
  }
});