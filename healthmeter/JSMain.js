var age;
var weight;
var height;
var gender;
var otherCalories;
var prefexercises;
var totalOtherCalories=0;


function submitButton(){


	age = document.getElementById("age").value;
	weight = document.getElementById("weight").value;
	height = document.getElementById("height").value;

	if (document.getElementById("male").checked)
		gender="male";
	else
		gender="female";

	checkAge();
	checkWeight();
	checkHeight();

	if (checkAge() && checkWeight() && checkHeight()){

		

		document.getElementById("submitIndicator").innerHTML="Your age is "+age+", your weight is "+weight+", your height is "+height+". Your data has been stored. You are a "+gender+".";

		localStorage.setItem("age", parseInt(age));
		localStorage.setItem("weight", parseInt(weight));
		localStorage.setItem("height", parseInt(height));
		localStorage.setItem("gender", gender);

		if (gender === "male") {
    	localStorage.setItem("BMR", (66 + (6.23 * weight) + (12.7 * height) - (6.8 * age)));	
		}
	else{
	    localStorage.setItem("BMR", (655 + (4.35 * weight) + (4.7 * height) - (4.7 * age)));
		}

		window.location.href="#food"
	}
}

function checkAge(){
	if (isNaN(age)){
		document.getElementById("agechecker").innerHTML="Make sure you entered a number! ";
		return false;
	}
	else
		document.getElementById("agechecker").innerHTML="";
		return true;
}

function checkWeight(){
	if (isNaN(weight)){
		document.getElementById("weightchecker").innerHTML="Make sure you entered a number!";

		return false;
	}
	else
		document.getElementById("weightchecker").innerHTML="";
		return true;
}

function checkHeight(){
	if (isNaN(height)){
		document.getElementById("heightchecker").innerHTML="Make sure you entered a number!";
		return false;
	}
	else{
		document.getElementById("heightchecker").innerHTML="";
		return true;
	}


}


function checkGender(){

}


function otherSubmitButton(){
	var food = document.getElementById("otherInput").value;
	
	if (food==""){
		document.getElementById("otherSubmit").innerHTML="Type the name of the food!";
		return
	}
	else
		getCal(food);
}

function getCal(food){
				var xhr = new XMLHttpRequest();
				var url="https://api.nutritionix.com/v1_1/search/"+food+"?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat&appId=0a71a218&appKey=6fefac53d004b840543a045f7fa33186"


				xhr.open("GET", url, false);
				xhr.send();

				console.log(xhr.status);
				console.log(xhr.statusText);

				//console.log(xhr.responseText);

				var json = JSON.parse(xhr.responseText);
				var otherCalories = (json.hits[0].fields.nf_calories);
				document.getElementById("otherSubmit").innerHTML="Just added "+document.getElementById("otherInput").value+" , which is "+otherCalories+" calories.";

				totalOtherCalories = totalOtherCalories + otherCalories;
				console.log("Total other calories: "+totalOtherCalories);
				

		}


function foodSubmitButton(){
	var pizza = document.getElementById("pizza").value;
	var fries = document.getElementById("fries").value;
	var burger = document.getElementById("burger").value;
	var soda = document.getElementById("soda").value;
	var chips = document.getElementById("chips").value;
	var friedchicken = document.getElementById("friedchicken").value;
	var icecream = document.getElementById("icecream").value;
	var milkshake = document.getElementById("milkshake").value;
	var macncheese = document.getElementById("macncheese").value;
	var nachos = document.getElementById("nachos").value;

	var amount = [pizza, fries, burger, soda, chips, friedchicken, icecream, milkshake, macncheese, nachos];
	localStorage["amount"]=JSON.stringify(amount);

	localStorage.setItem("totalOtherCalories", totalOtherCalories);

	food();
}


function getPrefExercises(){
	var sportsList = document.getElementsByName("exercise");
	for (var i=0; i<sportsList.length; i++){
		if (sportsList[i].checked){
			prefexercises.push(i);
		}
	}

	localStorage["prefexercises"]=JSON.stringify(prefexercises);
	setData();
}