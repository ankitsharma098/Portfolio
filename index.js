const allInput = document.querySelectorAll('input');
const navLinks = document.querySelectorAll('.nav-bar');
const contactContainer = document.querySelector('.contact');
const aboutOuterDiv = document.querySelector('.about-outer-div');
const resumeContainer = document.querySelector('.resume-container');
const projectContainer = document.querySelector('.project-container');

const contentSections = [aboutOuterDiv, contactContainer, resumeContainer, projectContainer];

// Initially hide all sections except the about section
contentSections.forEach(section => section.style.display = 'none');
aboutOuterDiv.style.display = 'block';

// Navigation functionality
navLinks.forEach((particularLink) => {
  particularLink.addEventListener('click', () => {
    contentSections.forEach(section => section.style.display = 'none');

    switch (particularLink.id) {
      case 'home':
        aboutOuterDiv.style.display = 'block';
        break;
      case 'resume':
        resumeContainer.style.display = 'block';
        break;
      case 'project':
        projectContainer.style.display = 'block';
        break;
      case 'contact':
        contactContainer.style.display = 'block';
        break;
    }
  });
});

// Form input functionality
allInput.forEach((inputElement) => {
  const label = inputElement.nextElementSibling;

  inputElement.addEventListener('focus', () => {
    inputElement.style.borderBottomColor = '#e4306d';
    label.classList.add('label-change');
  });

  inputElement.addEventListener('blur', () => {
    inputElement.style.borderBottomColor = '#999';
    if (inputElement.value === '') {
      label.classList.remove('label-change');
    }
  });
});

// Mobile menu toggle functionality
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('open');
    nav.style.display = nav.style.display === 'none' ? 'flex' : 'none';
  });
}