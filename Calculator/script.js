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

function calculatePower() {
  const values = currentInput.split("^");
  if (values.length === 2) {
    const base = parseFloat(values[0]);
    const exponent = parseFloat(values[1]);
    const result = Math.pow(base, exponent);
    document.getElementById("display").value = result;
  } else {
    document.getElementById("display").value = "Error";
  }
}

function calculateModulus() {
  const values = currentInput.split("%");
  if (values.length === 2) {
    const dividend = parseFloat(values[0]);
    const divisor = parseFloat(values[1]);
    const result = dividend % divisor;
    document.getElementById("display").value = result;
  } else {
    document.getElementById("display").value = "Error";
  }
}
