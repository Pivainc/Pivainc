const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.textContent = isOpen ? '×' : '☰';
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.textContent = '☰';
  }));
}

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const quoteForm = document.getElementById('quote-form');
if (quoteForm) {
  quoteForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(quoteForm);
    const name = (data.get('name') || '').toString().trim();
    const company = (data.get('company') || '').toString().trim();
    const product = (data.get('product') || '').toString().trim();
    const details = (data.get('details') || '').toString().trim();
    const message = [
      'Hello PIVA INC, I would like to discuss a project enquiry.',
      `Name: ${name}`,
      company ? `Company: ${company}` : '',
      `Requirement: ${product}`,
      details ? `Project details: ${details}` : '',
      'Please contact me to discuss the next steps.'
    ].filter(Boolean).join('\n');
    window.open(`https://wa.me/919945130301?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  });
}
