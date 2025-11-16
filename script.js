// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const htmlElement = document.documentElement;
const themeIcon = document.querySelector('.theme-icon');

// Check for saved dark mode preference or system preference
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const savedDarkMode = localStorage.getItem('darkMode');

if (savedDarkMode !== null) {
  // Use saved preference
  const isDarkMode = JSON.parse(savedDarkMode);
  if (isDarkMode) {
    htmlElement.classList.add('dark-mode');
    themeIcon.textContent = '☀️';
  }
} else if (prefersDark) {
  // Use system preference
  htmlElement.classList.add('dark-mode');
  themeIcon.textContent = '☀️';
}

// Toggle dark mode on button click
darkModeToggle.addEventListener('click', () => {
  htmlElement.classList.toggle('dark-mode');
  const isDarkMode = htmlElement.classList.contains('dark-mode');
  localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
  themeIcon.textContent = isDarkMode ? '☀️' : '🌙';
});
