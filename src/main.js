const modalCloseBtn = document.querySelector('.modal-close-btn');
const modalBackdrop = document.querySelector('.backdrop');
const mobileMenuCloseBtn = document.querySelector('.mobile-menu-close-btn');
const mobileMenuWrapper = document.querySelector('.mobile-menu-wrapper');
const mobileOpenBtn = document.querySelector('.mobile-open-btn');
const OrderButton = document.querySelector('.order-button');

function closeModal() {
  console.log('closeModal called');
  modalBackdrop.classList.remove('is-open');
}

function closeMobileMenu() {
  console.log('closeMobileMenu called');
  mobileMenuWrapper.classList.remove('is-open');
}

function openMobileMenu() {
  console.log('openMobileMenu called');
  mobileMenuWrapper.classList.add('is-open');
}

function openModal() {
  console.log('openModal called');
  modalBackdrop.classList.add('is-open');
}

modalCloseBtn.addEventListener('click', closeModal);
mobileMenuCloseBtn.addEventListener('click', closeMobileMenu);
mobileOpenBtn.addEventListener('click', openMobileMenu);
OrderButton.addEventListener('click', function (event) {
  event.preventDefault();
  openModal();
});