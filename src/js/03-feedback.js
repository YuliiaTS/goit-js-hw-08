import throttle from 'lodash.throttle';

const refs = {
  formEl: document.querySelector('.feedback-form'),
  labelEl: document.querySelector('[name="email"]'),
  textAreaEl: document.querySelector('[name="message"]'),
};

refs.formEl.addEventListener('input', throttle(onFormInput, 500));
refs.formEl.addEventListener('submit', onFormSubmit);

const FEEDBACK_FORM_STATE = 'feedback-form-state';

function onFormInput(e) {
  localStorage.setItem(
    FEEDBACK_FORM_STATE,
    JSON.stringify({
      email: refs.labelEl.value,
      message: refs.textAreaEl.value,
    })
  );
}

function onFormSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem(FEEDBACK_FORM_STATE);
  console.log({
    email: refs.labelEl.value,
    message: refs.textAreaEl.value,
  });
}

function populateMessageOutput() {
  const savedForm = localStorage.getItem(FEEDBACK_FORM_STATE);
  const parsedForm = JSON.parse(savedForm);

  if (parsedForm) {
    refs.textAreaEl.value = parsedForm.message;
    refs.labelEl.value = parsedForm.email;
  }
}
populateMessageOutput();
