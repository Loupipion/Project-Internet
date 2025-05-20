const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;
const container = document.querySelector('.blog-container');

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-theme');
  body.classList.toggle('light-theme');

  if (container) {
    container.classList.toggle('dark-theme');
    container.classList.toggle('light-theme');
  }

  const isDark = body.classList.contains('dark-theme');
  toggleBtn.textContent = isDark ? '☀️ Mode clair' : '🌙 Mode sombre';
});

window.onload = () => {
  body.classList.add('light-theme');
  if (container) container.classList.add('light-theme');
};
