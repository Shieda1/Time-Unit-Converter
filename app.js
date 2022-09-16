// https://www.omnicalculator.com/conversion/time-unit-converter
// calculators not finished

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const yearsRadio = document.getElementById('yearsRadio');
const monthsRadio = document.getElementById('monthsRadio');
const weeksRadio = document.getElementById('weeksRadio');
const daysRadio = document.getElementById('daysRadio');

let years;
let months = v1;
let weeks = v2;
let days = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

yearsRadio.addEventListener('click', function() {
  variable1.textContent = 'Months';
  variable2.textContent = 'Weeks';
  variable3.textContent = 'Days';
  months = v1;
  weeks = v2;
  days = v3;
  result.textContent = '';
});

monthsRadio.addEventListener('click', function() {
  variable1.textContent = 'Years';
  variable2.textContent = 'Weeks';
  variable3.textContent = 'Days';
  years = v1;
  weeks = v2;
  days = v3;
  result.textContent = '';
});

weeksRadio.addEventListener('click', function() {
  variable1.textContent = 'Years';
  variable2.textContent = 'Months';
  variable3.textContent = 'Days';
  years = v1;
  months = v2;
  days = v3;
  result.textContent = '';
});

daysRadio.addEventListener('click', function() {
  variable1.textContent = 'Years';
  variable2.textContent = 'Months';
  variable3.textContent = 'Weeks';
  years = v1;
  months = v2;
  weeks = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(yearsRadio.checked)
    result.textContent = `Years = ${computeyears().toFixed(2)}`;

  else if(monthsRadio.checked)
    result.textContent = `Months = ${computemonths().toFixed(2)}`;

  else if(weeksRadio.checked)
    result.textContent = `Weeks = ${computeweeks().toFixed(2)}`;

  else if(daysRadio.checked)
    result.textContent = `Days = ${computedays().toFixed(2)}`;
})

// calculation

function computeyears() {
  return (Number(months.value) / 12) + (Number(weeks.value) / 52.1429) + (Number(days.value) / 365);
}

function computemonths() {
  return (Number(years.value) * 12 ) + (Number(days.value) / 30) + (Number(weeks.value) / 4.34524);
}

function computeweeks() {
  return (Number(months.value) * 4.34524) - (Number(years.value) * 52.1429) + (Number(days.value) / 7);
}

function computedays() {
  return (Number(months.value) * 30) + (Number(weeks.value) * 7) + (Number(years.value) * 365);
}