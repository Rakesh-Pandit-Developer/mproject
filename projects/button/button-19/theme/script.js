const themeToggler = document.querySelector('.theme-toggler');
const themeIcon = document.querySelector('#themeIcon');
let isDarkMode = false; // Track current theme

themeToggler.addEventListener('click', () => {
  isDarkMode = !isDarkMode;

  if (isDarkMode) {
    // Activate Dark Mode
    document.body.style.backgroundColor = 'var(--background-dark)';
    document.body.style.color = 'var(--text-dark)';
    themeIcon.setAttribute('class', 'icon dark-icon');
    themeIcon.innerHTML = `
      <circle cx="12" cy="12" r="5" fill="#fff" />
      <path d="M12,2a10,10,0,1,1,0,20A10,10,0,0,1,12,2Z" fill="#fff" />
    `;
  } else {
    // Activate Light Mode
    document.body.style.backgroundColor = 'var(--background-light)';
    document.body.style.color = 'var(--text-light)';
    themeIcon.setAttribute('class', 'icon light-icon');
    themeIcon.innerHTML = `
      <circle cx="12" cy="12" r="5" fill="#464646" />
      <path d="M21,13H20a1,1,0,0,1,0-2h1a1,1,0,0,1,0,2Z" fill="#464646" />
      <path d="M4,13H3a1,1,0,0,1,0-2H4a1,1,0,0,1,0,2Z" fill="#464646" />
    `;
  }
});
