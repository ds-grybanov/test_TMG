

// JQuery --- Select, Anchor

$(document).ready(function () {
  $('.nice-select').niceSelect();
  $('.btn-registration').on('click', function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 700);
    animate()
  });
  $(function () {
    function maskPhone() {
      const country = $('#select option:selected').val();
      switch (country) {
        case 'af':
          $('#phone').mask('+93(20) 999-99-99');
          break;
        case 'alb':
          $('#phone').mask('+355(999) 999-99-99');
          break;
        case 'alg':
          $('#phone').mask('+213(999) 999-99-99');
          break;
        case 'and':
          $('#phone').mask('+376(999) 999-99-99');
          break;
      }
    }
    maskPhone();
    $('#select').change(function () {
      maskPhone();
    });
  });
});

//Animation GSAP

const formItem = document.querySelectorAll('.form .row')

function animate () {
  const timeLine = gsap.timeline({ defaults: {duration: 0.4 } });
  timeLine.from(formItem[0],{ opacity: 0, y: 30 })
          .from(formItem[1],{ opacity: 0, y: 30 })
          .from(formItem[2],{ opacity: 0, y: 30 })
          .from(formItem[3],{ opacity: 0, y: 30 })
          .from(formItem[4],{ opacity: 0, y: 30 })
}

// Form validation

const form = document.getElementById('form');
const formInputs = document.querySelectorAll('.input');
const firstName = document.getElementById('first-name');
const secondName = document.getElementById('second-name');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const inputCheckbox = document.getElementById('checkbox');
const error = document.querySelectorAll('.error-msg');


form.addEventListener('submit', (event) => {
  event.preventDefault();
  formInputs.forEach((item) => {
    if (item.value === '') {
      showError();
    }
  });
  checkName();
  checkSelect();
  checkPhone();
  checkPassword();
  checkEmail();
  checkbox() 
  setTimeout(succesInput, 4000);
});

function checkName() {
  const firstNameVal = firstName.value.trim();
  const secondNameVal = secondName.value.trim();

  if (firstNameVal.length <= 2) {
    addErrorClass(0)
  } else {
    removeErrorClass(0)
  }

  if (secondNameVal.length <= 2) {
    addErrorClass(1)
  } else {
    removeErrorClass(1)
  }
}

function checkSelect() {
  const selectOption = document.querySelectorAll('.option');
  selectOption.forEach((item) => {
    if (item.classList.contains('disabled')) {
      addErrorClass(2)
    } else if (item.classList.contains('selected')) {
      removeErrorClass(2)
    }
  });
}

function checkPhone() {
  if (phone.value) {
    removeErrorClass(3)
  }
}

function checkPassword() {
  const passVal = password.value.trim();
  const confirmPassVal = password2.value.trim();

  if (!isPass(passVal)) {
    addErrorClass(4)
  } else {
    removeErrorClass(4)
  }
  if (passVal !== confirmPassVal) {
    addErrorClass(5)
  } else {
    removeErrorClass(5)
  }
}

function checkEmail() {
  const emailVal = email.value.trim()

  if (!isEmail(emailVal)) {
    addErrorClass(6)
  } else {
    removeErrorClass(6)
  }
}

function checkbox() {
  const label = document.querySelector('.checkbox');

  if (!inputCheckbox.checked) {
    label.classList.add('input-check-error')
    setTimeout(() => {
    label.classList.remove('input-check-error')
    },4000)
  }
}

function showError() {
  error.forEach((item) => item.classList.add('input-error'));
}

function succesInput() {
  error.forEach((item) => item.classList.remove('input-error'));
}

function addErrorClass(index) {
  error[index].classList.add('input-error')
}

function removeErrorClass(index) {
  error[index].classList.remove('input-error');
}

function isPass(pass) {
  return /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[0-9][A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{6,20}$/.test(pass);
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
