

//Adding event listener to divide button

$("#divide").on("click", function (e) {
    let result = Number($("#firstNumber").val())/Number($("#secondNumber").val());
    $("#result").text(result);
    console.log(result);
});


//////// EUGENS MULTIPLY //////


$("#multiply").click(function(){
    
    let multi1 = Number($("#firstNumber").val());
    let multi2 = Number($("#secondNumber").val());
    let multiResult;


    multiResult =multi1 * multi2;
    $("#result").text(multiResult);

});
/////////////////////////////////