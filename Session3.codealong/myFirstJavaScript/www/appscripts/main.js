// 2 ways to printjavascript output on brower --> developer console, alerts, webpage elements

var x = 7.25;
8*4;
// alert(x);
x = 17;
y =20;
z = x + y
// alert(z);

var name = 'Bobby'
var job = 'Mechanic'
// alert (name + ' is a ' + job)

printMyJob = function(name2, job2)
{
    document.getElementById("colorDisplay").innerHTML = name + ' is a ' + job
    document.getElementById("loginName").innerHTML = 'Welcome, ' + name
}

var name = 'Bobby'
var job = 'Mechanic'
printMyJob(name, job)