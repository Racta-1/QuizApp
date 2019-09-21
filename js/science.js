
let scienceQuestions = [{
	"question": "Brass gets discoloured in air because of the presence of which of the following gases in air?",
	"option1" : "Oxygen",
	"option2" : "Hydrogen Sulphide",
	"option3" : "Carbon dioxide",
	"option4" : "Nitrogen ",
	"answer" : "Hydrogen Sulphide" ,

},{
	"question": "Which of the following is a non metal that remains liquid at room temperature?",
	"option1" : "Phosphorus",
	"option2" : "Bromine",
	"option3" : "Chlorine",
	"option4" : "Helium",
	"answer" : "Bromine",

},{
	"question": "Chlorophyll is a natural occuring chelate compound in which central metal is?",
	"option1" : "Copper",
	"option2" : "Magnesium",
	"option3" : "Iron",
	"option4" : "Calcium",
	"answer" : "Magnesium",

},{
	"question": "Which of the following is used in pencils?",
	"option1" : "Graphite",
	"option2" : "Silicon",
	"option3" : "Charcoal",
	"option4" : "Phosphorus",
	"answer" : "Graphite",

},{
	"question": "Which of the following metals forms an amalgam with other metals?",
	"option1" : "Tin", 
	"option2" : "Mercury",
	"option3" : "Lead",
	"option4" : "Zinc",
	"answer" : "Mercury",

},{
	"question": "The gas usually filled in the electric bulb is?",
	"option1" : "Nitrogen",
	"option2" : "Hydrogen",
	"option3" : "Carbon dioxide",
	"option4" : "Oxygen",
	"answer" : "Nitrogen",

},{
	"question": "Washing soda is the common name for?",
	"option1" : "Sodium carbonate",
	"option2" : "Calcium bicarbonate",
	"option3" : "Sodium bicarbonate",
	"option4" : "Calcium carbonate",
	"answer" : "Sodium carbonate",

},{
	"question": "Which of the gas is not known as green house gas?",
	"option1" : "Methane",
	"option2" : "Nitrous oxide",
	"option3" : "Carbon dioxide",
	"option4" : "Hydrogen",
	"answer" : "Hydrogen",

},{
	"question": "What is the hardest substance available on earth?",
	"option1" : "Gold",
	"option2" : "Iron",
	"option3" : "Diamond",
	"option4" : "Platinum",
	"answer" : "Diamond",

},{
	"question": "Which of the following is used as a lubricant?",
	"option1" : "Graphite",
	"option2" : "Silica",
	"option3" : "Iron Oxide",
	"option4" : "Diamond",
	"answer" : "Graphite",

}];



var scienceQuiz = document.getElementById('scienceQuiz');


let scienceQuestionIndex = -1;


var scienceQuizScore = 0;




//Timing

let scienceTotalSeconds = 90;


function checkTime(){
	
	if (scienceTotalSeconds == 0){
		scienceQuiz.style.display = "none";
		timeUp.style.display = "block";
		submit.style.display = "none";	
		

	}
	else{
		scienceTotalSeconds-=1;
		myMin = parseInt(scienceTotalSeconds/60);
		mySec = parseInt(scienceTotalSeconds%60);
		setTimeout("checkTime()",1000);

	}
	min.innerHTML = myMin;
	sec.innerHTML = mySec;
}



setTimeout("checkTime()",1000);



//ShowQuestions

function nextQuestions(){
	scienceQuestionIndex++;
	let questionContainer = document.getElementById('question');
	let optionContainer = document.getElementById('optionContainer');
	let myOptions = "";
	if(scienceQuestionIndex == scienceQuestions.length-1){
		nextButton.style.display = "none";
		submitButton.style.display = "block";
	}
	submitButton.addEventListener('click', function(){
		scienceQuiz.style.display = "none";
		submit.style.display = "block";
		timeUp.style.display = "none";
		
	},false)
	
	questionContainer.innerHTML = scienceQuestions[scienceQuestionIndex].question;
	optionContainer.innerHTML = `
			<div class='options'><input type='radio' name='q' value= '${scienceQuestions[scienceQuestionIndex].option1}' > ${scienceQuestions[scienceQuestionIndex].option1} </div> <br>
			<div class='options'><input type='radio' name='q' value= '${scienceQuestions[scienceQuestionIndex].option2}'> ${scienceQuestions[scienceQuestionIndex].option2} </div> <br>
			<div class='options'><input type='radio' name='q' value= '${scienceQuestions[scienceQuestionIndex].option3}'> ${scienceQuestions[scienceQuestionIndex].option3} </div><br>
			<div class='options'><input type='radio' name='q' value= '${scienceQuestions[scienceQuestionIndex].option4}'> ${scienceQuestions[scienceQuestionIndex].option4} </div>
`	

	checkAnswer();

}


function prevQuestions(){
	scienceQuestionIndex--;
	let questionContainer = document.getElementById('question');
	let optionContainer = document.getElementById('optionContainer');
	let myOptions = "";
	if(scienceQuestionIndex == -1){
		scienceQuestionIndex = 0;
	}
	questionContainer.innerHTML = scienceQuestions[scienceQuestionIndex].question;
	optionContainer.innerHTML = `
			<div class='options'><input type='radio' name='q' value= '${scienceQuestions[scienceQuestionIndex].option1}' > ${scienceQuestions[scienceQuestionIndex].option1} </div> <br>
			<div class='options'><input type='radio' name='q' value= '${scienceQuestions[scienceQuestionIndex].option2}'> ${scienceQuestions[scienceQuestionIndex].option2} </div> <br>
			<div class='options'><input type='radio' name='q' value= '${scienceQuestions[scienceQuestionIndex].option3}'> ${scienceQuestions[scienceQuestionIndex].option3} </div><br>
			<div class='options'><input type='radio' name='q' value= '${scienceQuestions[scienceQuestionIndex].option4}'> ${scienceQuestions[scienceQuestionIndex].option4} </div>
`

	checkAnswer();

}

//checking Answer

function checkAnswer()
{
	let myOptions = document.getElementsByTagName('input');
	let myAnswer = scienceQuestions[scienceQuestionIndex].answer
	
	for (let i = 0; i < myOptions.length; i++){
		function addScore(){
			
			if (myOptions[i].value == myAnswer){
			scienceQuizScore += parseInt((1/scienceQuestions.length) * 100);
			score.innerHTML = scienceQuizScore;
			timeUpScore.innerHTML = scienceQuizScore;
			}
			else{
				// alert("You are wrong")
			}
			myOptions[i].removeEventListener('click',addScore , false)

		}
		myOptions[i].addEventListener('click',addScore , false)

    }

}

nextQuestions();


nextButton.addEventListener('click', nextQuestions, false)
prevButton.addEventListener('click', prevQuestions, false)




