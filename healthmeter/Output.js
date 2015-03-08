var unhealthylist = ['pizza','fries','burger','soda','chips','fried chicken','ice cream','shake','macaroni and cheese', 'nachos'];
var healthylist = ['pasta','sweet potatoes','veggie burgers','sparkling water','veggie sticks','grilled chicken','yogurt','smoothie','macaroni salad','pita'];
var amount;

var pizza =284.62;
var fries = 140;
var burger = 426.7;
var soda = 182;
var chips = 150.82;
var friedChicken =844.66;
var iceCream = 216;
var shake = 350;
var macCheese =309.96;
var nacho = 486.18;
var pasta = 185;
var sweet = 140;
var veggiebug = 123.9;
var sparkling = 0;
var vegStick = 150;
var grilledChick = 295.96;
var yogurt = 159;
var smoothie = 90.65;
var macSalad = 155.93;
var pita = 380;

var unhealthylistCalc = [pizza,fries,burger,soda,chips,friedChicken,iceCream,shake,macCheese, nacho];
var healthylistCalc = [pasta,sweet,veggiebug,sparkling,vegStick,grilledChick,yogurt,smoothie,macSalad,pita];

var healthyCalories = localStorage.getElementById("healthyCalories");
var unhealthyCalories = localStorage.getElementById("unhealthyCalories");

var goodoutput;

function printOutput(){
	amount = JSON.parse(localStorage["amount"]);
	goodoutput=JSON.parse(localStorage["goodoutput"]);


	document.getElementById("intro").innerHTML="Based off your dietary preferences, we suggest the following slight modifications:";


	for (var i=0; i<unhealthylist.length; i++){
		if (amount[i]>0){
			document.getElementById("diet").innerHTML+="Rather than <strong>"+unhealthylist[i]+"</strong>, try <strong>"+healthylist[i]+"</strong> - there are <strong>"+(parseInt(unhealthylistCalc[i])-parseInt(healthylistCalc[i]))+" fewer calories</strong> per serving.<br>";

		}
	}


			document.getElementById("diet_total").innerHTML="<u>All in all, you will be consuming <strong>"+(parseInt(unhealthyCalories)-parseInt(healthyCalories))+" fewer total calories every day</strong>.</u>";

			document.getElementById("fitness_intro").innerHTML="We calculated your Basal metabolic rate (BMR) based off information you provided. Judging from the activities you stated you enjoyed, consider any of the following (or even a mix!) to <strong>lost a pound per week</strong>:";


	for (var i=0; i<goodoutput.length; i++)
	{
			document.getElementById("fitness").innerHTML+="Participate in <strong>"+goodoutput[i][0]+"</strong> for <strong>"+(Math.round(goodoutput[i][1]*100)/100)+" hours a week</strong>.<br>";
	}		
			
	}