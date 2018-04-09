let multi1 = $("#firstnumber").val();
let multi2 = $("#secondnumber").val();
let multiResult;

$("#multiply").click(function(){
    multiResult = parseInt(multi1) * parseInt(multi2);
    $("#result").text(multiResult);
    console.log(multiResult);
});