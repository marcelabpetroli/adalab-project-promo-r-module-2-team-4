'use strict';
function saveInLocalStorage(data) {
  localStorage.setItem('dataFromForm', JSON.stringify(data));
}

data = JSON.parse(localStorage.getItem('dataFromForm'));
updatePreview();
nameInput.value = data.name;
jobInput.value = data.job;
