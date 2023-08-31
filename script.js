const buttonCalculate = document.querySelector('#calculate');
buttonCalculate.addEventListener('click', calculateBMI);

const buttonReset = document.querySelector('#reset');
buttonReset.addEventListener('click', () => {
  location.reload();
});

function calculateBMI(e) {
  e.preventDefault();
  const age = document.querySelector('#age').value;
  const height = document.querySelector('#height').value;
  const weight = document.querySelector('#weight').value;

  if (age < 1 || height < 1 || weight < 1) {
    Swal.fire({
      icon: 'error',
      iconColor: '#fff',
      title: 'Error',
      color: '#d3ac00',
      background: '#464646',
      confirmButtonColor: '#302f2f',
      text: 'Please enter the correct information',
    });
    return false;
  } else if (age < 18) {
    Swal.fire({
      icon: 'error',
      iconColor: '#fff',
      title: 'Error',
      color: '#d3ac00',
      background: '#464646',
      confirmButtonColor: '#302f2f',
      text: 'This calculator is only for adults',
    });
    return false;
  }

  let heightMeter = height / 100;
  let bodyMassIndex = weight / (heightMeter * heightMeter);

  document.querySelector('#bmiNumber').textContent = bodyMassIndex.toFixed(1);

  if (age <= 30 && bodyMassIndex > 27.5) {
    document.querySelector('#bmiDescription').textContent =
      'You are in the Obese range.';
  } else if (age <= 30 && bodyMassIndex >= 23 && bodyMassIndex <= 27.4) {
    document.querySelector('#bmiDescription').textContent =
      'You are in the Overweight range.';
  } else if (age <= 30 && bodyMassIndex >= 19.5 && bodyMassIndex < 22.9) {
    document.querySelector('#bmiDescription').textContent =
      'You are in the Healthy Weight range.';
  } else if (age <= 30 && bodyMassIndex < 19.5) {
    document.querySelector('#bmiDescription').textContent =
      'You are in the Underweight range.';
  } else if (age > 30 && bodyMassIndex > 28) {
    document.querySelector('#bmiDescription').textContent =
      'You are in the Obese range.';
  } else if (age > 30 && bodyMassIndex >= 26 && bodyMassIndex <= 27.9) {
    document.querySelector('#bmiDescription').textContent =
      'You are in the Overweight range.';
  } else if (age > 30 && bodyMassIndex >= 20 && bodyMassIndex <= 25.9) {
    document.querySelector('#bmiDescription').textContent =
      'You are in the Healthy Weight range.';
  } else if (age > 30 && bodyMassIndex < 20) {
    document.querySelector('#bmiDescription').textContent =
      'You are in the Underweight range.';
  }
}

// Letter typing
let text = `What's your body mass index?`;
let i = 0;
let speed = 70;

function letterTyping() {
  if (i < text.length) {
    document.querySelector('#textTyping').textContent += text.charAt(i);
    i++;
    setTimeout(letterTyping, speed);
  }
}

letterTyping();
