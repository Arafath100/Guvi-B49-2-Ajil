document.addEventListener('DOMContentLoaded', function() {
  const container = document.getElementById('pagination-container');
  const totalPages = 10; 
  const currentPage = 1; 

  function generatePaginationLinks(totalPages, currentPage) {
    container.innerHTML = ''; 

    for (let page = 1; page <= totalPages; page++) {
      const link = document.createElement('a');
      link.href = `#${page}`;
      link.textContent = page;
      link.classList.add('pagination-link');

      if (page === currentPage) {
        link.classList.add('active');
      }

      container.appendChild(link);
    }
  }

  generatePaginationLinks(totalPages, currentPage);

  container.addEventListener('click', function(event) {
    event.preventDefault();

    if (event.target.classList.contains('pagination-link')) {
      const selectedPage = parseInt(event.target.textContent, 10);
      generatePaginationLinks(totalPages, selectedPage);
    }
  });
});
