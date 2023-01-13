'use strict';

function saveInLocalStorage(data) {
  localStorage.setItem('dataFromForm', JSON.stringify(data));
}

data = JSON.parse(localStorage.getItem('dataFromForm'));
updatePreview(data);
