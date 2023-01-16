'use strict';

let data = {
  palette: '',
  name: '',
  job: '',
  phone: '',
  email: '',
  linkedin: '',
  github: '',
};

function updatePreview() {
  data.name = nameInput.value;
  data.job = jobInput.value;
  data.phone = phoneInput.value;
  data.email = emailInput.value;
  data.linkedin = linkedinInput.value;
  data.github = githubInput.value;
  if (data.name === '') {
    previewName.innerHTML = 'Nombre Apellidos';
  } else {
    previewName.innerHTML = data.name;
  }
  if (data.job === '') {
    previewJob.innerHTML = 'Front-end developer';
  } else {
    previewJob.innerHTML = data.job;
  }
  if (data.phone === '') {
    previewPhone.href = '';
  } else {
    previewPhone.href = `tel:${data.phone}`;
  }
  if (data.email === '') {
    previewEmail.href = '';
  } else {
    previewEmail.href = `mailto:${data.email}`;
  }
  if (data.linkedin === '') {
    previewLinkedin.href = '';
  } else {
    previewLinkedin.href = `https://www.linkedin.com/in/${data.linkedin}`;
  }
  if (data.github === '') {
    previewGithub.href = '';
  } else {
    previewGithub.href = `https://github.com/${data.github}`;
  }
}

form.addEventListener('input', (e) => {
  const elementName = e.target.name;
  const value = e.target.value;

  if (elementName === [elementName]) {
    data[elementName] = value;
  }

  updatePreview();
  saveInLocalStorage(data);
});
