// SIMPLE FADE IN
const elements = document.querySelectorAll('.section-dark');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
});

elements.forEach(el => {
  el.style.opacity = 0;
  el.style.transform = 'translateY(40px)';
  el.style.transition = 'all 1s ease';
  observer.observe(el);
});

// EVERYTHING AFTER DOM LOAD
document.addEventListener('DOMContentLoaded', () => {

  /* ========= MENU ========= */
  const menuToggle = document.querySelector('.menu-toggle');
  const menuOverlay = document.getElementById('menuOverlay');
  const menuClose = document.querySelector('.menu-close');

  if (menuToggle && menuOverlay && menuClose) {
    menuToggle.addEventListener('click', () => {
      menuOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    });

    menuClose.addEventListener('click', () => {
      menuOverlay.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  /* ========= CONTACT FORM ========= */
  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const phoneNumber = "91XXXXXXXXXX";

      const name = this.name.value.trim();
      const phone = this.phone.value.trim();
      const email = this.email.value.trim();
      const city = this.city.value.trim();
      const project = this.project.value;
      const message = this.message.value.trim();

      const whatsappMessage = encodeURIComponent(
        `New Enquiry from Saffwan Decors Website\n\n` +
        `Name: ${name}\n` +
        `Phone: ${phone}\n` +
        (email ? `Email: ${email}\n` : "") +
        (city ? `City: ${city}\n` : "") +
        `Project Type: ${project}\n` +
        `Requirements: ${message}`
      );

      window.open(
        `https://wa.me/${phoneNumber}?text=${whatsappMessage}`,
        "_blank"
      );
    });
  }

});
