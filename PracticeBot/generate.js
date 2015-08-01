var notes = [];
var next = startNote();

var counter=0;
var selected;

var myVar;
var swar = 0;

var speed;


function loop(){
	speed = parseInt(document.getElementById("speed").value);
	getPractice();
	setInterval(getPractice, 2*(speed*8));
}

function alert(){
	console.log("alert");
}

function stop(){
	location.reload();
}


function startNote(){
	var rm = Math.floor((Math.random() * 4) + 1);

	if (rm ==1) return 3;
	else if (rm==2) return 5;
	else if (rm==3) return 6;
	else return 8;

}

function calculate(){
	switch(next){
		case 1:
			notes.push("*P");
			next = getNext(next);
			break;
		case 2:
			notes.push("*D");
			next = getNext(next);
			break;
		case 3:
			notes.push("S");
			next = getNext(next);
			break;
		case 4:
			notes.push("R");
			next = getNext(next);
			break;
		case 5:
			notes.push("G")
			next = getNext(next);
			break;
		case 6:
			notes.push("P");
			next = getNext(next);
			break;
		case 7:
			notes.push("D");
			next = getNext(next);
			break;
		case 8:
			notes.push("S*");
			next = getNext(next);
			break;
		case 9:
			notes.push("R*");
			next = getNext(next);
			break;
		case 10:
			notes.push("G*");
			next = getNext(next);
			break;
	}
}


function getNext(num){
	var rm = Math.floor((Math.random() * 4) + 1);

	switch(num){
		case 1:
			return 2;

		case 2:
			if (rm<3) return 1;
			else return 3;

		case 3:
			if (rm==1) return 2;
			else if (rm==2) return 4;
			else if (rm==3) return 5;
			else return 5;

		case 4:
			if (rm<3) return 3;	
			else return 5;

		case 5:
			if (rm==1) return 3;
			else if (rm==2) return 4;
			else if (rm==3) return 6;
			else return 6;

		case 6:
			if (rm==1) return 5;
			else if (rm==2) return 5;
			else if (rm==3) return 6;
			else return 7;

		case 7:
			if (rm<3) return 6;	
			else return 8;

		case 8:

			if (rm==1) return 6;
			else if (rm==2) return 7;
			else if (rm==3) return 9;
			else return 10;

		case 9:
			if (rm==1) return 7;
			else if (rm==2) return 10;
			else return 8;

		case 10:
			if (rm<3) return 8;	
			else return 9;
		}
}


function getPractice(){
	var c = 8;
	while (c>0){
		calculate();
		c--;
	}
	var write = document.getElementById("hi")
	// write.innerHTML = notes;
	var string="";
	
	for (var i=0; i<notes.length; i++){
		if ((i)%8==0)
			string = string + " ";

		if ((i)%16==0)
			string = string + "<br>";
		string = string + notes[i];
	}

	write.innerHTML = string;


	playCollection();

}

function playCollection(){
		for (var i=0; i<8; i++){
		setTimeout(playSounds, (speed*i))
	}	
	// 	for (var i=0; i<8; i++){
	// 	setTimeout(playSilence, (2000+(speed*i)));
	// }
}


function playSilence(){
	new Audio('sounds/silence.m4a');
	console.log("SILENCE");
}


function playSounds(){
	console.log("Swar: "+swar);
	console.log(notes);

		switch (notes[swar]){
			case "*P":
				new Audio('sounds/mP.m4a').play();
				break;
			case "*D":
				new Audio('sounds/mD.m4a').play();
				break;
			case "S":
				new Audio('sounds/S.m4a').play();
				break;
			case "R":
				new Audio('sounds/R.m4a').play();
				break;
			case "G":
				new Audio('sounds/G.m4a').play();
				break;
			case "P":
				new Audio('sounds/P.m4a').play();
				break;
			case "D":
				new Audio('sounds/D.m4a').play();
				break;
			case "S*":
				new Audio('sounds/tS.m4a').play();
				break;
			case "R*":
				new Audio('sounds/tR.m4a').play();
				break;
			case "G*":
				new Audio('sounds/tG.m4a').play();
				break;

		}

	swar++;



}






