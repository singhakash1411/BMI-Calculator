 const button = document.querySelector("#calculateBtn");

    button.addEventListener("click", function (e) {
      e.preventDefault();

      const weight = parseFloat(document.querySelector("#weightInput").value);
      const height = parseFloat(document.querySelector("#heightInput").value);
      const result = document.querySelector("#result");

      if (!weight || !height) {
        result.textContent = "Please enter both height and weight.";
        return;
      }

      const bmi = parseFloat((weight / ((height * height) / 10000)).toFixed(2));

      if (bmi < 18.5) {
        result.innerHTML = `Your BMI is ${bmi.toFixed(1)} — <span style="color:orange;">Underweight</span>. Have some more food 🍲`;
      } 
      else if (bmi >= 18.5 && bmi <= 24.9) {
        result.innerHTML = `Your BMI is ${bmi.toFixed(1)} — <span style="color:green;">Healthy</span>. Keep it up 💪`;
      } 
      else if (bmi >= 25 && bmi <= 29.9) {
        result.innerHTML = `Your BMI is ${bmi.toFixed(1)} — <span style="color:goldenrod;">Overweight</span>. Do some regular exercise 🏃‍♂️`;
      } 
      else if (bmi >= 30 && bmi <= 34.9) {
        result.innerHTML = `Your BMI is ${bmi.toFixed(1)} — <span style="color:red;">Obese (Class 1)</span>. A healthy lifestyle is recommended 🍎`;
      } 
      else if (bmi >= 35 && bmi <= 39.9) {
        result.innerHTML = `Your BMI is ${bmi.toFixed(1)} — <span style="color:red;">Obese (Class 2)</span>. Please consult a healthcare provider 🩺`;
      } 
      else {
        result.innerHTML = `Your BMI is ${bmi.toFixed(1)} — <span style="color:darkred;">Severe Obesity (Class 3)</span>. Immediate medical attention is advised ⚠️`;
      }
    });