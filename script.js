

//Adding event listener to divide button
$("multiply").on("click", function (e) {
    let result = Number($("firstNumber").value)/Number($("secondNumber").value);
    $("result").html(result);

let multi1 = $("#firstnumber").val();
let multi2 = $("#secondnumber").val();
let multiResult;

$("#multiply").click(function(){
    multiResult = multi1 * multi2;
    $("#result").val(multiResult);

});