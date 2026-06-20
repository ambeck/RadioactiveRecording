const menuToggle = document.getElementById('menuToggle');
const sidebarClose = document.getElementById('sidebarClose');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

function openSidebar() {
  sidebar.classList.add('open');
  overlay.classList.add('active');
  menuToggle.setAttribute('aria-expanded', 'true');
}

function closeSidebar() {
  sidebar.classList.remove('open');
  overlay.classList.remove('active');
  menuToggle.setAttribute('aria-expanded', 'false');
}

menuToggle.addEventListener('click', openSidebar);
sidebarClose.addEventListener('click', closeSidebar);
overlay.addEventListener('click', closeSidebar);

document.querySelectorAll('.nav-mobile a').forEach(link => {
  link.addEventListener('click', closeSidebar);
});

document.querySelector('.contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thanks for reaching out! This is a demo form — hook it up to a backend or service like Formspree to actually send messages.');
  e.target.reset();
});

// Photo gallery lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const lightboxClose = document.querySelector('.lightbox-close');

function openLightbox(src, alt) {
  lightboxImg.src = src;
  lightboxImg.alt = alt || '';
  lightbox.classList.add('open');
  lightbox.setAttribute('aria-hidden', 'false');
}

function closeLightbox() {
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
  lightboxImg.src = '';
}

document.querySelectorAll('.gallery-item img').forEach(img => {
  img.addEventListener('click', (e) => {
    openLightbox(e.currentTarget.src, e.currentTarget.alt);
  });
});

lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && lightbox.classList.contains('open')) closeLightbox();
});
