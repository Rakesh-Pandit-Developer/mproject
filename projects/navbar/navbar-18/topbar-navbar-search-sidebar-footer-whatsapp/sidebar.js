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



    
// scrolll and fixed position
const sidebar = document.querySelector('#sideBar');
const defaultTop = 175; // Default position from top
const fixedTop = 50; // Fixed position from top

// Check screen size and apply scroll behavior only for larger screens
if (window.innerWidth > 992) {
    window.addEventListener('scroll', () => {
        if (window.scrollY >= defaultTop - fixedTop) {
            sidebar.style.top = `${fixedTop}px`;
            sidebar.style.bottom = "auto"; // Ensure bottom is not active
        } else {
            sidebar.style.top = `${defaultTop - window.scrollY}px`;
        }
    });
} else {
    // For small devices, ensure bottom is fixed
    sidebar.style.position = "fixed";
    sidebar.style.top = "auto";
    sidebar.style.bottom = "0";
}