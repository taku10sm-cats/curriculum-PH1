      function calcBmi(height, weight) {
        const heightM = height / 100;
        return weight / (heightM * heightM);
      }

      function getJudgment(bmi) {
        if (bmi < 18.5) {
          return "痩せ型";
        } else if (bmi < 25) {
          return "普通";
        } else {
          return "肥満";
        }
      }

      const button = document.querySelector("#calcBtn");
      const result = document.querySelector("#result");

      button.addEventListener("click", () => {
        const height = Number(document.querySelector("#height").value);
        const weight = Number(document.querySelector("#weight").value);

        if (height <= 0 || weight <= 0) {
          result.textContent = "身長と体重を入力してください";
          return;
        }

        const bmi = calcBmi(height, weight);
        const judgment = getJudgment(bmi);

        result.textContent = "BMI: " + bmi.toFixed(1) + "（" + judgment + "）";
      });