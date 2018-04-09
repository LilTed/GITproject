document.getElementById("add").onclick = function(){
    var a = parseInt(document.getElementById("firstNumber").value);
    var b = parseInt(document.getElementByID("secondNumber").value);
    add(a,b);

}

function add(a,b){
    console.log(a+b);
}