<<<<<<< HEAD
document.getElementById("add").onclick = function(){
    var a = parseInt(document.getElementById("firstNumber").value);
    var b = parseInt(document.getElementByID("secondNumber").value);
    add(a,b);

}

function add(a,b){
    console.log(a+b);
}
=======


//Adding event listener to divide button
$("#divide").on("click", function (e) {
    let result = Number($("#firstNumber").val())/Number($("#secondNumber").val());
    $("#result").text(result);
    console.log(result);
});

let multi1 = $("#firstnumber").val();
let multi2 = $("#secondnumber").val();
let multiResult;

$("#multiply").click(function(){

    multiResult = multi1 * multi2;
    $("#result").val(multiResult);


    multiResult = parseInt(multi1) * parseInt(multi2);
    $("#result").text(multiResult);
    console.log(multiResult);

});

//Adding event listener to reset button
$("#reset").on("click", function (e) {
    $("#firstNumber").val("");
    $("#secondNumber").val("");
    $("#result").text("");
});
>>>>>>> master
