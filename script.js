const btnElement = document.getElementById("btn");
const bmiInputElement = document.getElementById("bmi-result");
const weightConditionElement = document.getElementById("weight-condition");

function calculateBMI() {
    const heightValue = document.getElementById("height").value / 100; 
    const weightValue = document.getElementById("weight").value; 
    
    const bmiValue = weightValue / (heightValue * heightValue);

    bmiInputElement.value = bmiValue.toFixed(2);

    if (bmiValue < 18.5) {
        weightConditionElement.innerHTML = "<span style='color: #d5d51a; font-weight: bolder;'>Under Weight</span>"; 
    } 
    else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
        weightConditionElement.innerHTML = "<span style='color: green; font-weight: bold;'>Normal Weight</span>";
    }
    else if (bmiValue >= 25 && bmiValue <= 29.9) {
        weightConditionElement.innerHTML = "<span style='color: orange; font-weight: bold;'>Overweight</span>";
    }
    else if (bmiValue >= 30) {
        weightConditionElement.innerHTML = "<span style='color: red; font-weight: bold;'>Obesity</span>";
    }
}

btnElement.addEventListener("click", calculateBMI);

