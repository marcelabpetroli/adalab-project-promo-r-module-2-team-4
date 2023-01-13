'use strict';

function resetInput() {
  nameInput.value = '';
  jobInput.value = '';
  emailInput.value = '';
  phoneInput.value = '';
  linkedinInput.value = '';
  githubInput.value = '';
  profileImage.style.backgroundImage = '';
  profilePreview.style.backgroundImage = '';
  paletteOne.checked = true;
  previewCard.classList.remove(`colorsPalette-2`);
  previewCard.classList.remove(`colorsPalette-3`);
  previewCard.classList.add(`colorsPalette-1`);
  handleClickDesignArrow();
  updatePreview(data);
}

function handleClickReset(event) {
  event.preventDefault();
  resetInput();
  updatePreview();
  disableSectionShare();
  enableCreateBtn();
  saveInLocalStorage(data);
}

resetBtn.addEventListener('click', handleClickReset);
