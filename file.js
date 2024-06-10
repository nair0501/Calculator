const display = document.getElementById("display");
const buttons = document.getElementsByClassName("button");

const MAX_DIGITS = 15; //

function appendToDisplay(input) {
  if (display.value.length < MAX_DIGITS) {
    display.value += input;
    display.scrollLeft = display.scrollWidth;
  } else {
    alert("Maximum digit limit reached");
  }
}

function clearDisplay() {
  display.value = "";
}

function deleteLastCharacter() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = math.evaluate(display.value).toString();
  } catch {
    display.value = "Error";
  }
}

Array.from(buttons).forEach(button => {
  button.addEventListener("click", (event) => {
    const target = event.target;
    if (target.classList.contains("button")) {
      const value = target.getAttribute("data-value");
      if (value) {
        appendToDisplay(value);
      } else if (target.id === "clear") {
        clearDisplay();
      } else if (target.id === "equals") {
        calculate();
      } else if (target.id === "backspace") {
        deleteLastCharacter();
      }
    }
  });
});
