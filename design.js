window.addEventListener('DOMContentLoaded', (event) => {
  const navLinks = document.querySelectorAll('nav a');

  navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      targetSection.scrollIntoView({ behavior: 'smooth' });
    });
  });
});


function sendEmail() {
  window.location.href = 'mailto:shedeed.1@osu.edu'
}

function sendEmail() {
  window.location.href = 'mailto:shedeed.1@osu.edu';
}

function getHomepageURL() {
  const currentPath = window.location.pathname;
  const homepageURL = currentPath.substring(0, currentPath.lastIndexOf('/') + 1) + 'index.html';
  return homepageURL;
}
