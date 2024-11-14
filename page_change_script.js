// buttons to click to trigger page change
const homeProjectsButton = document.getElementById('home-projects-button');
const homeContactButton = document.getElementById('home-contact-button');
const navHomeButton = document.getElementById('nav-home-button');
const navProjectsButton = document.getElementById('nav-projects-button');
const navContactButton = document.getElementById('nav-contact-button');

// elements to hide or reveal to create page change
const homePage = document.getElementById('home-page');
const projectsPage = document.getElementById('projects-page');
const contactPage = document.getElementById('contact-page');
const header = document.querySelector('header');

// event listeners for buttons with anonymous functions that toggle the appropriate class to hide/reveal the appropriate content
homeProjectsButton.addEventListener('click', () => {
    homePage.classList.add('inactive');
    header.classList.remove('inactive');
    navProjectsButton.classList.add('inactive');
    navContactButton.classList.remove('inactive');
    projectsPage.classList.remove('inactive');
});

homeContactButton.addEventListener('click', () => {
    homePage.classList.add('inactive');
    header.classList.remove('inactive');
    navProjectsButton.classList.remove('inactive');
    navContactButton.classList.add('inactive');
    contactPage.classList.remove('inactive');
});

navHomeButton.addEventListener('click', () => {
    homePage.classList.remove('inactive');
    header.classList.add('inactive');
    projectsPage.classList.add('inactive');
    contactPage.classList.add('inactive');
});

navProjectsButton.addEventListener('click', () => {
    projectsPage.classList.remove('inactive');
    contactPage.classList.add('inactive');
    navProjectsButton.classList.add('inactive');
    navContactButton.classList.remove('inactive');
});

navContactButton.addEventListener('click', () => {
    projectsPage.classList.add('inactive');
    contactPage.classList.remove('inactive');
    navProjectsButton.classList.remove('inactive');
    navContactButton.classList.add('inactive');
});