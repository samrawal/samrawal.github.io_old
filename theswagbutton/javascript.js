var onClick = function(){
	

	document.getElementById("button").src="SwagButton_Pressed.png";
	setTimeout(playSound, 300);
	


};


var playSound = function(){
	document.getElementById("button").src="SwagButton.png";

	var random = Math.floor(Math.random()*6+1);
	var audio = new Audio("one.mp3");
	switch(random)
            {
                case 1:
                    audio = new Audio("one.mp3");
                    break;
                case 2:
                    audio = new Audio("two.mp3");
                    break;
                case 3:
                    audio = new Audio("three.mp3");
                    break;
                case 4:
                    audio = new Audio("four.mp3");
                    break;
                case 5:
                    audio = new Audio("five.mp3");
                    break;
                case 6:
                    audio = new Audio("six.mp3");
                    break;
            }
	audio.play();
};