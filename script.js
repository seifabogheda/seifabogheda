document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll offset for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        
        const header = document.getElementById('header');
        const headerHeight = header ? header.offsetHeight : 0;
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Current Year in Footer
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Mobile Projects Toggle
  const toggleProjectsBtn = document.getElementById('toggle-projects-btn');
  if (toggleProjectsBtn) {
    toggleProjectsBtn.addEventListener('click', () => {
      const appGrid = document.querySelector('.app-grid');
      appGrid.classList.toggle('is-expanded');
      
      const isExpanded = appGrid.classList.contains('is-expanded');
      toggleProjectsBtn.setAttribute('aria-expanded', isExpanded);
      toggleProjectsBtn.textContent = isExpanded ? 'Show fewer projects' : 'See all projects';
    });
  }

  // Scroll Animations
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };
  
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.section').forEach(section => {
    section.classList.add('animate-on-scroll');
    observer.observe(section);
  });
});
