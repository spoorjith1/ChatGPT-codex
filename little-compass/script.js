const sidebar = document.getElementById('sidebar');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const promptInput = document.getElementById('promptInput');

if (mobileMenuBtn && sidebar) {
  mobileMenuBtn.addEventListener('click', () => {
    sidebar.classList.toggle('open');
  });

  document.addEventListener('click', (event) => {
    if (window.innerWidth > 920) return;
    const clickedInsideSidebar = sidebar.contains(event.target);
    const clickedMenuButton = mobileMenuBtn.contains(event.target);

    if (!clickedInsideSidebar && !clickedMenuButton) {
      sidebar.classList.remove('open');
    }
  });
}

if (promptInput) {
  const autoResize = () => {
    promptInput.style.height = 'auto';
    promptInput.style.height = `${Math.min(promptInput.scrollHeight, 180)}px`;
  };

  promptInput.addEventListener('input', autoResize);
  autoResize();
}
