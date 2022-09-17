const sections = document.querySelectorAll('.section');
const myName = document.querySelector('.my-name');
const myPhoto = document.querySelector('.my-photo');
const navlist = document.querySelector('.nav-list');
const navbar = document.querySelector('.navbar');
const links = document.querySelectorAll('.link');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle('show', entry.isIntersecting);
    });
  },
  {
    threshold: 0.4,
  }
);

sections.forEach((section) => observer.observe(section));

// ----------------------------------------------
myName.addEventListener('mouseover', () => {
  myPhoto.classList.add('show');
});

myName.addEventListener('mouseout', () => {
  myPhoto.classList.remove('show');
});

// ------------------------
const icon = document.querySelector('.icon');
icon.addEventListener('click', function () {
  icon.classList.toggle('close');
  navbar.classList.toggle('visible');
  navlist.classList.toggle('nav-visible');
});

links.forEach((link) => {
  link.addEventListener('click', () => {
    icon.classList.toggle('close');
    navbar.classList.toggle('visible');
    navlist.classList.toggle('nav-visible');
  });
});

myPhoto.addEventListener('click', () => {
  myPhoto.classList.toggle('show');
});
