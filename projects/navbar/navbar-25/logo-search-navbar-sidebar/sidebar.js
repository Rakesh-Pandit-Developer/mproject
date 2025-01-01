const toggleButton = document.getElementById('sideBarToggleBtn');
const sideBar = document.getElementById('sideBar');

function togglesideBar() {
  sideBar.classList.toggle('sideBarClose');

  // आइकन स्विच करें
  const openIcon = document.querySelector('.sideBarIconOpen');
  const closeIcon = document.querySelector('.sideBarIconClose');

  openIcon.classList.toggle('sideBarHidden');
  closeIcon.classList.toggle('sideBarHidden');

  // सभी सब-मेनू बंद करें
  closeAllSubMenus();
}

function toggleSubMenu(button) {
  if (!button.nextElementSibling.classList.contains('show')) {
    closeAllSubMenus();
  }

  button.nextElementSibling.classList.toggle('show');

  if (sideBar.classList.contains('sideBarClose')) {
    sideBar.classList.toggle('sideBarClose');
  }
}

function closeAllSubMenus() {
  Array.from(sideBar.getElementsByClassName('show')).forEach(ul => {
    ul.classList.remove('show');
  });
}
