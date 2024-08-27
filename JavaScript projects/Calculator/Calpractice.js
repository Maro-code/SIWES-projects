let currentInput = '';
const display = document.getElementById('display');
function prnt(value) {
    currentInput += value;
    display.value = currentInput;
}
function clr(){
  currentInput = '';
  display.value = currentInput;
}
function del(){
  currentInput = currentInput.slice(0, -1);
  display.value = currentInput;
}
function Eval(){
  display.value = eval(currentInput);
}