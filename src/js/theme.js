const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const switchRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body');

function changeTheme() {
  const toggle = switchRef.checked;

  if (toggle) {
    bodyRef.classList.replace(Theme.LIGHT, Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
  } else {
    bodyRef.classList.replace(Theme.DARK, Theme.LIGHT);
    localStorage.removeItem('theme');
    localStorage.setItem('theme', Theme.LIGHT);
  }
}

function checkLocalStorage() {
  bodyRef.classList.add(Theme.LIGHT);
  const currentTheme = localStorage.getItem('theme');

  if (currentTheme === Theme.DARK) {
    switchRef.checked = true;
    bodyRef.classList.replace(Theme.LIGHT, Theme.DARK);
  }
}

switchRef.addEventListener('change', changeTheme);

checkLocalStorage();
