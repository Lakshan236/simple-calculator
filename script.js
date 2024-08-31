document.addEventListener("keydown", function (event) {
  const key = event.key; // Get the key that was pressed
  const display = document.getElementById("display");

  // Check if the key is a number or a basic operator
  if (/\d/.test(key) || ["+", "-", "*", "/", "%", "."].includes(key)) {
    appendToDisplay(key);
  } else if (key === "Enter" || key === "=") {
    calculateResult();
  } else if (key === "Backspace") {
    deleteLast();
  } else if (key === "Escape") {
    clearDisplay();
  }
});

function appendToDisplay(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function deleteLast() {
  let display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  try {
    let display = document.getElementById("display");
    display.value = eval(display.value);
  } catch (error) {
    alert("Invalid Input");
  }
}
