var audio1 = new Audio("one.mp3");
var audio2 = new Audio("two.mp3");
var audio3 = new Audio("three.mp3");
var audio4 = new Audio("four.mp3");
var audio5 = new Audio("five.mp3");
var audio6 = new Audio("six.mp3");

var random;


var onClick = function(){
	

	document.getElementById("button").src="SwagButton_Pressed.png";
	setTimeout(playSound, 300);
	
    random = Math.floor(Math.random()*6+1);


};


var playSound = function(){
	document.getElementById("button").src="SwagButton.png";

	switch(random)
            {
                case 1:
                    audio1.play();
                    break;
                case 2:
                    audio2.play();
                    break;
                case 3:
                    audio3.play();
                    break;
                case 4:
                    audio4.play();
                    break;
                case 5:
                    audio5.play();
                    break;
                case 6:
                    audio6.play();
                    break;
                default:
                    audio1.play();
                    break;
            }
};