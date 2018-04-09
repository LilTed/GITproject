let subtract = document.querySelector("#subtract");
let field1 = document.querySelector("#firstNumber");
let field2 = document.querySelector("#secondNumber");
let p = document.querySelector("#result");

subtract.addEventListener("click", subtraction);

function subtraction(){
    let result = parseInt(field1.value - field2.value);
    p.innertext = result;
}