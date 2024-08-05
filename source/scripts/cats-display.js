const display = document.querySelector('.product-effect__button-wrapper');
const button = display.querySelector('.product-effect__button');
const imageBefore = display.querySelector('.product-effect__image-wrapper--before');
const imageAfter = display.querySelector('.product-effect__image-after');


window.addEventListener('resize', () => {
  button.style.left = '50%';
  imageBefore.style.width = '100%';
  imageAfter.style.width = '50%';
});


const mouseMovementX = (evt) => {
  const displayPosition = display.getBoundingClientRect();
  const currentPosition = Math.round(evt.clientX - displayPosition.left);

  if (currentPosition < 0 || currentPosition > parseInt(getComputedStyle(display).width, 10)) {
    return false;
  }

  button.style.left = `${currentPosition}px`;
  imageBefore.style.width = `${currentPosition}px`;
  imageAfter.style.width = `${parseInt(getComputedStyle(display).width, 10) - currentPosition}px`;
};

const touchMovementX = (evt) => {
  const displayPosition = display.getBoundingClientRect();
  const currentPosition = Math.round(evt.touches[0].pageX - displayPosition.left);

  if (currentPosition < 0 || currentPosition > parseInt(getComputedStyle(display).width, 10)) {
    return false;
  }

  button.style.left = `${currentPosition}px`;
  imageBefore.style.width = `${currentPosition}px`;
  imageAfter.style.width = `${parseInt(getComputedStyle(display).width, 10) - currentPosition}px`;
};


const getCatsDisplayAnimation = () => {

  button.addEventListener('mousedown', () => {
    display.addEventListener('mousemove', mouseMovementX);
  });

  window.addEventListener('mouseup', () => {
    display.removeEventListener('mousemove', mouseMovementX);
  });

  button.addEventListener('touchstart', () => {
    display.addEventListener('touchmove', touchMovementX);
  });

  window.addEventListener('touchend', () => {
    display.removeEventListener('touchmove', touchMovementX);
  });
};

export { getCatsDisplayAnimation };
