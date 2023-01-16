'use strict';

function saveInLocalStorage(data) {
  localStorage.setItem('dataFromForm', JSON.stringify(data));
}

function getLocalStorageData() {
  data = JSON.parse(localStorage.getItem('dataFromForm'));
  if (data.palette === '1') {
    paletteOne.checked = true;
    previewCard.classList.remove(`colorsPalette-2`);
    previewCard.classList.remove(`colorsPalette-3`);
    previewCard.classList.add(`colorsPalette-1`);
  } else if (data.palette === '2') {
    paletteTwo.checked = true;
    previewCard.classList.remove(`colorsPalette-1`);
    previewCard.classList.remove(`colorsPalette-3`);
    previewCard.classList.add(`colorsPalette-2`);
  } else {
    paletteThree.checked = true;
    previewCard.classList.remove(`colorsPalette-1`);
    previewCard.classList.remove(`colorsPalette-2`);
    previewCard.classList.add(`colorsPalette-3`);
  }
  nameInput.value = data.name;
  jobInput.value = data.job;
  phoneInput.value = data.phone;
  emailInput.value = data.email;
  linkedinInput.value = data.linkedin;
  githubInput.value = data.github;

  updatePreview();
}

if (JSON.parse(localStorage.getItem('dataFromForm'))) {
  getLocalStorageData();
}
