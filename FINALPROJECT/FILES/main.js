calculateEstimate = function(inputIncome)
{
    var inputIncome = document.f1.income.value;
    console.log(inputIncome);

    var outputIncome = inputIncome * 0.12;
    console.log(outputIncome);
    document.getElementById("calculated").innerHTML="The estimated amount required is: $"+outputIncome;
};