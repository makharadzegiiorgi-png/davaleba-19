const menuToggle = document.querySelector('.menu-toggle');
const primaryNav = document.querySelector('.primary-nav');
const contactForm = document.querySelector('#contact-form');
const formStatus = document.querySelector('#form-status');

menuToggle.addEventListener('click', () => {
  const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isExpanded));
  menuToggle.setAttribute('aria-label', isExpanded ? 'მენიუს გახსნა' : 'მენიუს დახურვა');
  primaryNav.classList.toggle('is-open', !isExpanded);
});

primaryNav.addEventListener('click', (event) => {
  if (event.target.closest('a')) {
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'მენიუს გახსნა');
    primaryNav.classList.remove('is-open');
  }
});

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!contactForm.reportValidity()) return;

  const formData = new FormData(contactForm);
  const subject = `ერთად: ${formData.get('name')}`;
  const body = `${formData.get('message')}\n\n${formData.get('name')}\n${formData.get('email')}`;
  const mailto = `mailto:hello@ertad.ge?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  formStatus.textContent = 'ელფოსტის აპი გაიხსნა შეტყობინების გასაგზავნად.';
  window.location.href = mailto;
});

document.querySelector('#year').textContent = new Date().getFullYear();
