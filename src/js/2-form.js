const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('textarea');

form.addEventListener('input', e => {
  const dataForm = new FormData(form);
  const email = dataForm.get('email');
  const message = dataForm.get('message');
  const formData = { email, message };
  saveToLS('userData', formData);
});
form.addEventListener('submit', e => {
  e.preventDefault();

  const dataForm = new FormData(form);
  const email = dataForm.get('email');
  const message = dataForm.get('message');
  const formData = { email, message };
  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
  } else {
    localStorage.removeItem('email');
    localStorage.removeItem('message');
    localStorage.removeItem('userData');

    form.reset();
  }
});
function saveToLS(key, value) {
  const jsonData = JSON.stringify(value);
  localStorage.setItem(key, jsonData);
}

function loadFromLS(key) {
  const json = localStorage.getItem(key);
  try {
    const data = JSON.parse(json);
    return data;
  } catch {
    return json;
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const data = loadFromLS('userData');
  form.elements.email.value = data?.email || '';
  form.elements.message.value = data?.message || '';
});
