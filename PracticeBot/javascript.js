var j, i;

function test(){
	i = 0;
	j = ["Hi"];
	j.push("Hello");



	while(i<150){
		if (i==100){
				document.getElementById("hi").innerHTML = j;
		}
		i++;


	}

}

