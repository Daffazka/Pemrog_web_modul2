let currentInput = "";

function appendToDisplay(value) {
  currentInput += value;
  document.getElementById("display").value = currentInput;
}

function appendOperator(operator) {
  currentInput += operator;
  document.getElementById("display").value = currentInput;
}

function clearDisplay() {
  currentInput = "";
  document.getElementById("display").value = "";
}

function calculateResult() {
  try {
    const result = eval(currentInput);
    document.getElementById("display").value = result;
  } catch (error) {
    document.getElementById("display").value = "Error";
  }
}
