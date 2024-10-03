document.getElementById("predictBtn").addEventListener("click", async () => {
  const featuresArray = [
    parseFloat(document.getElementById("feature1").value / 100),
    parseFloat(document.getElementById("feature2").value / 100),
    parseFloat(document.getElementById("feature3").value),
    parseFloat(document.getElementById("feature4").value),
    parseFloat(document.getElementById("feature5").value),
    parseFloat(document.querySelector('input[name="accidentStatus"]').value),
  ];

  if (featuresArray.some(isNaN)) {
    document.getElementById("result").innerHTML = "Please enter a valid number";
    document.getElementById("customMessage").style.display = "none";
    return;
  }

  const response = await fetch("http://127.0.0.1:5000/predict", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ features: featuresArray }),
  });

  const result = await response.json();
  const resultDiv = document.getElementById("result");
  const customMessageDiv = document.getElementById("customMessage");

  resultDiv.addEventListener("click", function () {
    console.log("Button clicked");
  });

  if (response.ok) {
    if (result.prediction[0] === 1) {
      resultDiv.style.color = "red";
      customMessageDiv.innerText =
        "This indicates that Employee is  interested to leave the company";
    } else if (result.prediction[0] === 0) {
      resultDiv.style.color = "green";
      customMessageDiv.innerText =
        "This indicates that Employee is not interested to leave the company.";
    }
    resultDiv.innerHTML = `Prediction: ${result.prediction}`;
    customMessageDiv.style.display = "block";
  } else {
    resultDiv.style.color = "black";
    resultDiv.innerHTML = `Error: ${result.error}`;
    customMessageDiv.style.display = "none";
  }
});

