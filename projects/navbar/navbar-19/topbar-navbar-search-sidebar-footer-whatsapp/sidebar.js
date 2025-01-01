const toggleButton = document.getElementById('sideBarToggleBtn');
const sideBar = document.getElementById('sideBar');

function togglesideBar() {
  sideBar.classList.toggle('sideBarClose');

// switch icon
  const openIcon = document.querySelector('.sideBarIconOpen');
  const closeIcon = document.querySelector('.sideBarIconClose');

  openIcon.classList.toggle('sideBarHidden');
  closeIcon.classList.toggle('sideBarHidden');

  // Close tha all sub menu
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


