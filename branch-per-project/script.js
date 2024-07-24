const cards = document.querySelectorAll('.card');

function toggleOpen() {
  this.classList.toggle('open');
  console.log(this);
}

function toggleActive(e) {
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}

cards.forEach(panel => panel.addEventListener('click', toggleOpen));
cards.forEach(panel => panel.addEventListener('transitionend', toggleActive));