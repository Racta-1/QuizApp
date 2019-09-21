
let mathQuestions = [{
	"question": "What'd be X if three angles of a triangle are x, 2x and 3x degrees?",
	"option1" : "30",
	"option2" : "60",
	"option3" : "25",
	"option4" : "45",
	"answer" : "30" ,

},{
	"question": "What'd be x and y if, 5x + 3y= 11 and 2x - 7y = -12?",
	"option1" : "Both -1",
	"option2" : "2 and 1",
	"option3" : "-1 and 2",
	"option4" : "1 and 2",
	"answer" : "1 and 2",

},{
	"question": "If xy is a 2-digit no and x + y = 7; it becomes yx if 27 is added; what is xy?",
	"option1" : "61",
	"option2" : "25",
	"option3" : "34",
	"option4" : "43",
	"answer" : "25",

},{
	"question": "If DY = 42, GV = 75, and BZ = 21 then what is FT?",
	"option1" : "79",
	"option2" : "45",
	"option3" : "67",
	"option4" : "81",
	"answer" : "67",

},{
	"question": "Paul completes 7 surveys in 8 days. How many can he complete in 40 days?",
	"option1" : "55", 
	"option2" : "42",
	"option3" : "48",
	"option4" : "35",
	"answer" : "35",

},{
	"question": "What is the missing number in the series?: 0,7,26,63,124,?,342",
	"option1" : "255",
	"option2" : "235",
	"option3" : "311",
	"option4" : "215",
	"answer" : "215",

},{
	"question": "The diagonals of a rhombus bisect each other at what angles?",
	"option1" : "Right",
	"option2" : "Obtuse",
	"option3" : "Straight",
	"option4" : "Acute",
	"answer" : "Right",

},{
	"question": "If 2/3 of x is 60, then what is 4/5 of x?",
	"option1" : "55",
	"option2" : "68",
	"option3" : "72",
	"option4" : "85",
	"answer" : "72",

},{
	"question": "Male:Female population in a town of 1500 is 3:2; Number of men in the town?",
	"option1" : "500",
	"option2" : "750",
	"option3" : "1000",
	"option4" : "900",
	"answer" : "900",

},{
	"question": "What is -40 degrees Fahrenheit in Celsius scale?",
	"option1" : "75 Degrees",
	"option2" : "-40 Degrees",
	"option3" : "33 Degrees",
	"option4" : "40 Degrees",
	"answer" : "-40 Degrees",

}];



// let submit = document.getElementById('submit');
let mathQuiz = document.getElementById('mathQuiz');
// let timeUp = document.getElementById('timeUp');


let mathQuestionIndex = -1;
// let submitButton = document.getElementById('submitButton')
// 	submitButton.style.display = "none";
// let nextButton = document.getElementById('nextButton');
// let prevButton = document.getElementById('prevButton')
// let score = document.getElementById('score');
// let timeUpScore = document.getElementById('timeUpScore');
var mathQuizScore = 0;


//Timing

// let min = document.getElementById('minutes');
// let sec = document.getElementById('seconds');
let mathTotalSeconds = 180;

// let myMin = parseInt(mathTotalSeconds/60);
// let mySec = parseInt(mathTotalSeconds%60);

function checkTime(){
	
	if (mathTotalSeconds == 0){
		mathQuiz.style.display = "none";
		timeUp.style.display = "block";	
		submit.style.display = "none";
	}

	else{
		mathTotalSeconds-=1;
		myMin = parseInt(mathTotalSeconds/60);
		mySec = parseInt(mathTotalSeconds%60);
		setTimeout("checkTime()",1000);

	}

	min.innerHTML = myMin;
	sec.innerHTML = mySec;
}

setTimeout("checkTime()",1000);



 // Showing Questions


function nextQuestions(){
	mathQuestionIndex++;
	let questionContainer = document.getElementById('question');
	let optionContainer = document.getElementById('optionContainer');
	let myOptions = "";
	
	if(mathQuestionIndex == mathQuestions.length-1){
		nextButton.style.display = "none";
		submitButton.style.display = "block";
	}
	submitButton.addEventListener('click', function(){
		mathQuiz.style.display = "none";
		submit.style.display = "block";
		timeUp.style.display = "none";
		
	},false)

	
	questionContainer.innerHTML = mathQuestions[mathQuestionIndex].question;
	optionContainer.innerHTML = `
			<div class='options'><input type='radio' name='q' value= '${mathQuestions[mathQuestionIndex].option1}' > ${mathQuestions[mathQuestionIndex].option1} </div> <br>
			<div class='options'><input type='radio' name='q' value= '${mathQuestions[mathQuestionIndex].option2}'> ${mathQuestions[mathQuestionIndex].option2} </div> <br>
			<div class='options'><input type='radio' name='q' value= '${mathQuestions[mathQuestionIndex].option3}'> ${mathQuestions[mathQuestionIndex].option3} </div><br>
			<div class='options'><input type='radio' name='q' value= '${mathQuestions[mathQuestionIndex].option4}'> ${mathQuestions[mathQuestionIndex].option4} </div>
`	

	checkAnswer();

}

function prevQuestions(){
	mathQuestionIndex--;
	let questionContainer = document.getElementById('question');
	let optionContainer = document.getElementById('optionContainer');
	let myOptions = "";
	if(mathQuestionIndex == -1){
		mathQuestionIndex = 0;
	}
	questionContainer.innerHTML = mathQuestions[mathQuestionIndex].question;
	optionContainer.innerHTML = `
			<div class='options'><input type='radio' name='q' value= '${mathQuestions[mathQuestionIndex].option1}' > ${mathQuestions[mathQuestionIndex].option1} </div> <br>
			<div class='options'><input type='radio' name='q' value= '${mathQuestions[mathQuestionIndex].option2}'> ${mathQuestions[mathQuestionIndex].option2} </div> <br>
			<div class='options'><input type='radio' name='q' value= '${mathQuestions[mathQuestionIndex].option3}'> ${mathQuestions[mathQuestionIndex].option3} </div><br>
			<div class='options'><input type='radio' name='q' value= '${mathQuestions[mathQuestionIndex].option4}'> ${mathQuestions[mathQuestionIndex].option4} </div>
`

	checkAnswer();

}

//checking Answer

function checkAnswer()
{
	let myOptions = document.getElementsByTagName('input');
	let myAnswer = mathQuestions[mathQuestionIndex].answer
	
	for (let i = 0; i < myOptions.length; i++){
		function addScore(){
			
			if (myOptions[i].value == myAnswer){
			mathQuizScore += parseInt((1/mathQuestions.length) * 100);
			score.innerHTML = mathQuizScore;
			timeUpScore.innerHTML = mathQuizScore;
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

















