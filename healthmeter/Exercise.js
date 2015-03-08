var gender
var age
var height
var weight
var goodcal = Number(0)
var badcal = Number(0)
var alpha = Number(0)
var delta = Number(0)
var prefexercises =[];
var goodoutput = [];
var badoutput = [];


function setData(){
	    prefexercises = JSON.parse(localStorage["prefexercises"]);
	    console.log(prefexercises);
      gender = localStorage.getItem("gender");
      age = parseInt(localStorage.getItem("age"));
      height=parseInt(localStorage.getItem("height"));
      weight=parseInt(localStorage.getItem("weight"));
      goodcal = parseInt(localStorage.getItem("healthyCalories"))+parseInt(localStorage.getItem("totalOtherCalories"));
      badcal = parseInt(localStorage.getItem("unhealthyCalories"))+parseInt(localStorage.getItem("totalOtherCalories"));

      console.log(age+" "+gender+" "+height+" "+weight+" "+goodcal+" "+badcal);
      arrayoutput();


}


var exerciselist = [[2.72,0.4],[3.64,-1.2],[2.268,0.36],[3.172,0.94],[3.64,-1.2],[2.72,0.4],
                     [3.172,0.94],[1.496,0.42],[1.816,-0.18],[1.816,-0.18],[1.816,-0.18],[1.132,0.64],[2.04,0.8],[1.36,0.2],[1.36,0.2],[2.72,0.4],
                     [1.908,-0.34],[1.908,-0.34],[3.332,0.14],[5,-1],[2.72,0.4],[2.268,0.36],[2.04,0.8],[4.544,-0.62],[2.72,0.4],[3.64,-1.2]]
var exerciesesName = ['Basketball','Football','Baseball','Soccer','Running','Swimming','Tennis','Walking','Biking','Yoga','Catch','Golf','Bowling','Frisbee','Hiking',
                      'Ping-pong','Volleyball','Racquetball','Rock Climbing','Weight Lifting','Jogging','Badminton','Jump Rope','Boxing','Lacrosse']




function calhours(subarray){
    return (weight*subarray[0]+subarray[1])  
}


function arrayoutput()
{
            for (var a =0; a<prefexercises.length;a++) {
                        var location = prefexercises[a]
                        if (gender === "male"){
                        goodoutput[a] = [exerciesesName[location],((500+goodcal-(66 + (6.23 * weight) + (12.7 * height) - (6.8 * age)))/calhours(exerciselist[location]))]
                        badoutput[a] = [exerciesesName[location],((500+badcal-(66 + (6.23 * weight) + (12.7 * height) - (6.8 * age)))/calhours(exerciselist[location]))]
                        }
                        else{
                                    goodoutput[a] = [exerciesesName[location],((500+goodcal-(655 + (4.35 * weight) + (4.7 * height) - (4.7 * age)))/calhours(exerciselist[location]))]
                                    badoutput[a] = [exerciesesName[location],((500+badcal-(655 + (4.35 * weight) + (4.7 * height) - (4.7 * age)))/calhours(exerciselist[location]))]
                                    
                        }
            }


               localStorage["goodoutput"]=JSON.stringify(goodoutput);
               localStorage["badoutput"]=JSON.stringify(badoutput);

               printOutput();


}



