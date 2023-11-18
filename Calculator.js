const Display_Input = document.querySelector("#Display_Input"),
  C = document.querySelector("#C"),
  One = document.querySelector("#One"),
  Two = document.querySelector("#Two"),
  Three = document.querySelector("#Three"),
  Four = document.querySelector("#Four"),
  Five = document.querySelector("#Five"),
  Six = document.querySelector("#Six"),
  Seven = document.querySelector("#Seven"),
  Eight = document.querySelector("#Eight"),
  Nine = document.querySelector("#Nine"),
  Zero = document.querySelector("#Zero"),
  Dot = document.querySelector("#Dot"),
  Plus = document.querySelector("#Plus"),
  Minus = document.querySelector("#Minus"),
  Multiply = document.querySelector("#Multiply"),
  Divide = document.querySelector("#Divide"),
  Equals = document.querySelector("#Equals");
var Operande1 = 0,
  Operande2 = 0,
  Operation = "";

C.addEventListener("click", () => {
  Display_Input.value = "";
});

One.addEventListener("click", () => {
  Display_Input.value += "1";
});

Two.addEventListener("click", () => {
  Display_Input.value += "2";
});

Three.addEventListener("click", () => {
  Display_Input.value += "3";
});

Four.addEventListener("click", () => {
  Display_Input.value += "4";
});

Five.addEventListener("click", () => {
  Display_Input.value += "5";
});

Six.addEventListener("click", () => {
  Display_Input.value += "6";
});

Seven.addEventListener("click", () => {
  Display_Input.value += "7";
});

Eight.addEventListener("click", () => {
  Display_Input.value += "8";
});

Nine.addEventListener("click", () => {
  Display_Input.value += "9";
});

Zero.addEventListener("click", () => {
  Display_Input.value += "0";
});

Dot.addEventListener("click", () => {
  Display_Input.value += ".";
});

Plus.addEventListener("click", () => {
  Operande1 = parseFloat(Display_Input.value);
  Operation = "Plus";
  Display_Input.value = "";
});

Minus.addEventListener("click", () => {
  Operande1 = parseFloat(Display_Input.value);
  Operation = "Minus";
  Display_Input.value = "";
});

Multiply.addEventListener("click", () => {
  Operande1 = parseFloat(Display_Input.value);
  Operation = "Multiply";
  Display_Input.value = "";
});

Divide.addEventListener("click", () => {
  Operande1 = parseFloat(Display_Input.value);
  Operation = "Divide";
  Display_Input.value = "";
});

Equals.addEventListener("click", () => {
  Operande2 = parseFloat(Display_Input.value);
  Do_The_Math();
});

function Do_The_Math() {
  switch (Operation) {
    case "Plus":
      Display_Input.value = Operande1 + Operande2;
      break;
    case "Minus":
      Display_Input.value = Operande1 - Operande2;
      break;
    case "Multiply":
      Display_Input.value = Operande1 * Operande2;
      break;
    case "Divide":
      Display_Input.value = Operande1 / Operande2;
      break;
  }
}
