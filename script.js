'use strict';
const bmiBtn = document.querySelector('.submit');
const weight = document.querySelector('.weight');
const height = document.querySelector('.height');
const bmiValue = document.querySelector('.bmi');
const result = document.querySelector('.desc');
const resetBtn = document.querySelector('.reset');
const underweight = document.querySelector('.one');
const healthy = document.querySelector('.two');
const overweight = document.querySelector('.three');
const obese = document.querySelector('.four');

const bmiResult = function (bmi) {
    if (bmi < 18.5) {
        result.textContent = `YOU ARE UNDERWEIGHT😣`;
        underweight.style.borderTop = "10px solid rgb(0, 191, 255)"
        obese.style.borderTop = "5px solid crimson";
        healthy.style.borderTop = "5px solid green";
        overweight.style.borderTop = "5px solid orange";
    }
    else if (bmi > 18.5 && bmi < 25) {
        result.textContent = `YOU ARE HEALTHY😍`;
        healthy.style.borderTop = "10px solid green";
        overweight.style.borderTop = "5px solid orange";
        obese.style.borderTop = "5px solid crimson";
        underweight.style.borderTop = "5px solid rgb(0, 191, 255)";
    }
    else if (bmi > 25 && bmi < 30) {
        result.textContent = `YOU ARE OVERWEIGHT🙄`;
        overweight.style.borderTop = "10px solid orange";
        obese.style.borderTop = "5px solid crimson";
        underweight.style.borderTop = "5px solid rgb(0, 191, 255)";
        healthy.style.borderTop = "5px solid green";
    }
    else {
        result.textContent = `YOU ARE OBESEE😶‍🌫️ `;
        obese.style.borderTop = "10px solid crimson";
        underweight.style.borderTop = "5px solid rgb(0, 191, 255)";
        healthy.style.borderTop = "5px solid green";
        overweight.style.borderTop = "5px solid orange";
    }

}

bmiBtn.addEventListener('click', function (e) {
    e.preventDefault();
    const wt = Number(weight.value);
    const ht = Number(height.value);
    const htInMtr = ((ht / 100) ** 2).toFixed(2);
    const bmi = (wt / Number(htInMtr)).toFixed(2);
    bmiValue.textContent = `${bmi}`;
    bmiResult(bmi);
    // console.log(bmi);
    // console.log(wt, ht);
    // healthy.style.border = "1px solid black";
});

resetBtn.addEventListener('click', function () {
    bmiValue.textContent = '0';
    result.textContent = 'N/A';
    obese.style.borderTop = "5px solid crimson";
    underweight.style.borderTop = "5px solid rgb(0, 191, 255)";
    healthy.style.borderTop = "5px solid green";
    overweight.style.borderTop = "5px solid orange";
})