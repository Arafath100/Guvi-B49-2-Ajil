// script.js
document.addEventListener('DOMContentLoaded', function() {
  const container = document.getElementById('pagination-container');
  const totalPages = 10; // Total number of pages (you can set this dynamically based on your data)
  const currentPage = 1; // Current active page (you can set this dynamically)

  // Function to generate pagination links
  function generatePaginationLinks(totalPages, currentPage) {
    container.innerHTML = ''; // Clear any previous links

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

  // Call the function to generate pagination links
  generatePaginationLinks(totalPages, currentPage);

  // Add click event listener to handle pagination click
  container.addEventListener('click', function(event) {
    event.preventDefault();

    if (event.target.classList.contains('pagination-link')) {
      const selectedPage = parseInt(event.target.textContent, 10);
      generatePaginationLinks(totalPages, selectedPage);
    }
  });
});
