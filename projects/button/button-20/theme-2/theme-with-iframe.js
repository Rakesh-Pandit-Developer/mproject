(function () {
  const themeBtn = document.getElementById('themeBtn');
  const themeIcon = document.getElementById('themeIcon');
  const iframe = document.getElementById('contentIframe');

  // Apply saved theme on load
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme === 'dark') {
    document.body.classList.add('dark-theme');
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
    if (iframe) iframe.contentWindow.postMessage('dark', '*'); // Notify iframe
  }

  // Toggle theme
  themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');

    // Update theme icon
    if (document.body.classList.contains('dark-theme')) {
      themeIcon.classList.remove('fa-moon');
      themeIcon.classList.add('fa-sun');
      localStorage.setItem('theme', 'dark');
      if (iframe) iframe.contentWindow.postMessage('dark', '*'); // Notify iframe
    } else {
      themeIcon.classList.remove('fa-sun');
      themeIcon.classList.add('fa-moon');
      localStorage.setItem('theme', 'light');
      if (iframe) iframe.contentWindow.postMessage('light', '*'); // Notify iframe
    }
  });

  // Respond to iframe's theme request
  window.addEventListener('message', (event) => {
    if (event.data === 'request-theme') {
      const theme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
      event.source.postMessage(theme, event.origin);
    }
  });
})();