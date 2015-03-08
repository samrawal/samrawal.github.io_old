


var pizza =284.62;
var fries = 140;
var burger = 426.7;
var soda = 182;
var chips = 150.82;
var friedChicken =844.66;
var iceCream = 216;
var shake = 112;
var macCheese =309.96;
var nacho = 486.18;
var pasta = 185;
var sweet = 140;
var veggiebug = 123.9;
var sparkling = 0;
var vegStick = 140;
var grilledChick = 295.96;
var yogurt = 159;
var smoothie = 90.65;
var macSalad = 155.93;
var pita = 380;

var amount;


var healthyCalories=0;
var unhealthyCalories=0;
var otherCalories=0;


function food(name,calorie)
{
    this.name = name
    this.calorie = calorie
    amount = JSON.parse(localStorage["amount"]);
    otherCalories=localStorage.getItem("totalOtherCalories");
    console.log(amount);
    computeFoodData();
}

function computeFoodData(){

	var unhealthylist = [pizza,fries,burger,soda,chips,friedChicken,iceCream,shake,macCheese, nacho];
	var healthylist = [pasta,sweet,veggiebug,sparkling,vegStick,grilledChick,yogurt,smoothie,macSalad,pita];

	console.log(healthylist);

	for (var i=0; i<healthylist.length; i++){
		healthyCalories=healthyCalories+(healthylist[i]*amount[i])
	}

	for (var i=0; i<unhealthylist.length; i++){
		unhealthyCalories=unhealthyCalories+(unhealthylist[i]*amount[i])
	}

	localStorage.setItem("healthyCalories", healthyCalories);
	localStorage.setItem("unhealthyCalories", unhealthyCalories);

	console.log("Healthy Calories: "+healthyCalories);
	console.log("Unhealthy Calories: "+unhealthyCalories);
	console.log("Other Calories: "+otherCalories);

	window.location.href="#exercise";


	
}
