'use strict';

function renderSection(formContainer1, formContainer2, arrow1, arrow2, container, arrowDown) {
  formContainer1.classList.add('hidden');
  formContainer2.classList.add('hidden');
  arrow1.classList.add('rotate');
  arrow2.classList.add('rotate');
  container.classList.remove('hidden');
  arrowDown.classList.remove('rotate');
  container.classList.add('transition');
  container.style.height = container.scrollHeight + 'px';
}

function handleClickDesignArrow() {
  renderSection(formContainerFill, formContainerShare, arrowDownFill, arrowDownShare, formContainerDesign, arrowDownDesign);
}

function handleClickFillArrow() {
  renderSection(formContainerDesign, formContainerShare, arrowDownDesign, arrowDownShare, formContainerFill, arrowDownFill);
}

function handleClickShareArrow() {
  renderSection(formContainerDesign, formContainerFill, arrowDownFill, arrowDownDesign, formContainerShare, arrowDownShare);
}

arrowDesign.addEventListener('click', handleClickDesignArrow);
arrowFill.addEventListener('click', handleClickFillArrow);
arrowShare.addEventListener('click', handleClickShareArrow);
