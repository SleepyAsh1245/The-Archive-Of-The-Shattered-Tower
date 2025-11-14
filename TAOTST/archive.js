document.addEventListener('DOMContentLoaded', () => {

  const chapters = [
    { number: 1, title: "The Tower (XVI) - The Void" },
    { number: 2, title: "The Hermit (IX) - The Gift of Knowledge" },
    { number: 3, title: "The Empress (III) - The Genesis" },
    { number: 4, title: "Justice (XI) - The Reckoning" },
    { number: 5, title: "The Lovers (VI) - The Bargain" },
    { number: 6, title: "The Chariot (VII) - Driven Progress" },
    { number: 7, title: "Strength (VIII) - The Resilience of Guilt" },
    // add more chapters here
  ];

  const chapterListContainer = document.getElementById('chapter-list');

  chapters.forEach(chap => {
    const div = document.createElement('div');
    div.className = 'chapter';
    div.textContent = `Chapter ${chap.number} – ${chap.title}`;
    div.addEventListener('click', () => {
      // Save last read chapter
      localStorage.setItem('lastReadChapter', chap.number);
      location.href = `reader.html?chap=${chap.number}`;
    });
    chapterListContainer.appendChild(div);
  });

  // --- FAB & theme logic ---
  const fab = document.querySelector('.fab');
  const fabButton = fab.querySelector('.fab-main');
  const themeButtons = fab.querySelectorAll('.theme-btn');

  fabButton.addEventListener('click', () => fab.classList.toggle('active'));

  themeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const theme = btn.dataset.theme;
      document.body.setAttribute('data-theme', theme);
      localStorage.setItem('LOYAL-theme', theme);
      fab.classList.remove('active');
    });
  });

  // --- Load saved theme ---
  const savedTheme = localStorage.getItem('LOYAL-theme');
  if (savedTheme) document.body.setAttribute('data-theme', savedTheme);

  // --- Start/Continue Reading button ---
  const startBtn = document.getElementById('start-reading');
  const lastChapter = localStorage.getItem('lastReadChapter');

  if (lastChapter) {
    startBtn.textContent = `Continue Reading Chapter ${lastChapter}`;
  } else {
    startBtn.textContent = `Start Reading Chapter 1`;
  }

  // Button click navigates to the correct chapter
  startBtn.addEventListener('click', () => {
    const chapterToOpen = lastChapter || 1;
    location.href = `reader.html?chap=${chapterToOpen}`;
  });

});
