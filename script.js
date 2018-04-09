<script></script>


//Adding event listener to divide button
$("multiply").on("click", function (e) {
    let result = Number($("firstNumber").value)/Number($("secondNumber").value);
    $("result").html(result);
});