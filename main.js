// CALCULATOR BUTTON
calculateEstimate = function(inputIncome)
{
    var inputIncome = document.f1.income.value;
    console.log(inputIncome);

    var outputIncome = inputIncome * 0.12;
    console.log(outputIncome);
    document.getElementById("calculated").innerHTML="The estimated amount required is: $"+outputIncome;
};

// PRICE TREND BAR GRAPH
const Year = ["-","2008", "2009", "2010", "2011","2012","2013","2014","2015","2016","2017","2018","2019","2020","2021"];
const Price = [0,270000,273000,325000,304000,320000,312000,326500,327500,318000,326000,354000,350500,334000,388500];

    const dataPrice = {
    labels: Year,
    datasets: [
        {
            label: "Median Price",
            data: Price,
            borderWidth: 3,
            backgroundColor: "lightblue",
            borderColor: "lightcyan"
        }
    ]
};
new Chart("price-chart", {
            type: "bar",
            data: dataPrice,
            options: {
                responsive: false
            }
        });

// ANNUAL INCOME TREND LINE GRAPH
const year = ["0","2008", "2009", "2010", "2011","2012","2013","2014","2015","2016","2017","2018","2019","2020","2021"];
const income = [0,34764,35124,36000,38988,41760,44460,45240,47388,48672,50784,53244,54756,54408,56160,60840];

    const dataIncome = {
    labels: Year,
    datasets: [
        {
            label: "Median Annual Income",
            data: income,
            borderWidth: 5,
            //backgroundColor: "lightblue",
            borderColor: "lightblue"
        }
    ]
};
new Chart("income-chart", {
            type: "line",
            data: dataIncome,
            options: {
                responsive: false,
            }
        });