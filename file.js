const display = document.getElementById("display");

function appendToDisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = new Function('return ' + display.value)();
  } catch {
    display.value = "Error";
  }
}