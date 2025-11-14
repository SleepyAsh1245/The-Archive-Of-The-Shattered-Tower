document.addEventListener("DOMContentLoaded", () => {
  const books = document.querySelectorAll(".book");

  books.forEach(book => {
    book.addEventListener("click", () => {
      const file = book.getAttribute("data-file");

      if (!file) {
        console.error("No data-file on book element.");
        return;
      }

      console.log("Opening:", file);
      window.location.href = file;
    });
  });
});


// FAB logic
const fab = document.querySelector('.fab');
const fabButton = fab.querySelector('.fab-main');
const themeButtons = fab.querySelectorAll('.theme-btn');

fabButton.addEventListener('click', () => {
  fab.classList.toggle('active');
});

themeButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const theme = btn.dataset.theme;
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('LOYAL-theme', theme);
    fab.classList.remove('active');
  });
});

// Load saved theme
window.addEventListener('load', () => {
  const saved = localStorage.getItem('LOYAL-theme');
  if(saved) document.body.setAttribute('data-theme', saved);
});
