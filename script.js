
let multi1 = $("#firstnumber").val();
let multi2 = $("#secondnumber").val();
let multiResult;

$("#multiply").click(function(){
    multiResult = multi1 * multi2;
    $("#result").val(multiResult);
});

let subtract = document.querySelector("#subtract");
let field1 = document.querySelector("#firstNumber");
let field2 = document.querySelector("#secondNumber");
let p = document.querySelector("#result");

subtract.addEventListener("click", subtraction);

function subtraction(){
    let result = parseInt(field1.value - field2.value);
    p.innertext = result;
}

