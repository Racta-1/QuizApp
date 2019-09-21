
let currentQuestions = [{
	"question": "What is the parliament of Nigeria called?",
	"option1" : "House of Representative",
	"option2" : "Senate",
	"option3" : "State house of Assembly",
	"option4" : "National Assembly",
	"answer" : "National Assembly" ,

},{
	"question": "On what day is Democracy celebrated in Nigeria?",
	"option1" : "Oct 1",
	"option2" : "Jan 12",
	"option3" : "May 29",
	"option4" : "June 12",
	"answer" : "June 12",

},{
	"question": "How many members make up the house of representative in Nigeria?",
	"option1" : "280",
	"option2" : "774",
	"option3" : "360",
	"option4" : "359",
	"answer" : "360",

},{
	"question": "How many members makeup senate in the upper arm of the national assembly?",
	"option1" : "100",
	"option2" : "108",
	"option3" : "109",
	"option4" : "110",
	"answer" : "109",

},{
	"question": "Nigeria is divided into how many geopolitical zones?",
	"option1" : "5", 
	"option2" : "6",
	"option3" : "7",
	"option4" : "8",
	"answer" : "6",

},{
	"question": "Who created the Nigeria flag?",
	"option1" : "Mr Aina Onabolu",
	"option2" : "Prof Wole SOyinka",
	"option3" : "Taiwo Akinkumi",
	"option4" : "Ben Odiase",
	"answer" : "Taiwo Akinkumi",

},{
	"question": "How many local governments do we have in Nigeria?",
	"option1" : "744",
	"option2" : "774",
	"option3" : "747",
	"option4" : "784",
	"answer" : "774",

},{
	"question": "Who was the first military head of state?",
	"option1" : "Gen. Muritala Muhammed",
	"option2" : "Gen. Ibrahim Babangida",
	"option3" : "Gen. Aguiyi Ironsi",
	"option4" : "Gen. Idiagbon",
	"answer" : "Gen. Aguiyi Ironsi",

},{
	"question": "Who stopped the killing of twins in Calabar?",
	"option1" : "Henry Townsend",
	"option2" : "Herbert Marculey",
	"option3" : "Mongo Park",
	"option4" : "Mary Slessor",
	"answer" : "Mary Slessor",

},{
	"question": "Nigeria became a republic in what year?",
	"option1" : "May 29, 1999",
	"option2" : "Jan 15, 1966",
	"option3" : "Oct 1, 1960",
	"option4" : "Oct 1, 1963",
	"answer" : "Oct 1, 1963",

}];


var currentQuiz = document.getElementById('currentQuiz');


let currentQuestionIndex = -1;


var currentQuizScore = 0;





//Timing

let currentTotalSeconds = 90;


function checkTime(){
	
	if (currentTotalSeconds == 0){
		currentQuiz.style.display = "none";
		timeUp.style.display = "block";
		submit.style.display = "none";	
		

	}
	else{
		currentTotalSeconds-=1;
		myMin = parseInt(currentTotalSeconds/60);
		mySec = parseInt(currentTotalSeconds%60);
		setTimeout("checkTime()",1000);

	}
	min.innerHTML = myMin;
	sec.innerHTML = mySec;
}



setTimeout("checkTime()",1000);



//ShowQuestion


function nextQuestions(){
	currentQuestionIndex++;
	let questionContainer = document.getElementById('question');
	let optionContainer = document.getElementById('optionContainer');
	let myOptions = "";
	if(currentQuestionIndex == currentQuestions.length-1){
		nextButton.style.display = "none";
		submitButton.style.display = "block";
	}
	submitButton.addEventListener('click', function(){
		currentQuiz.style.display = "none";
		submit.style.display = "block";
		timeUp.style.display = "none";
		
	},false)
	
	questionContainer.innerHTML = currentQuestions[currentQuestionIndex].question;
	optionContainer.innerHTML = `
			<div class='options'><input type='radio' name='q' value= '${currentQuestions[currentQuestionIndex].option1}' > ${currentQuestions[currentQuestionIndex].option1} </div> <br>
			<div class='options'><input type='radio' name='q' value= '${currentQuestions[currentQuestionIndex].option2}'> ${currentQuestions[currentQuestionIndex].option2} </div> <br>
			<div class='options'><input type='radio' name='q' value= '${currentQuestions[currentQuestionIndex].option3}'> ${currentQuestions[currentQuestionIndex].option3} </div><br>
			<div class='options'><input type='radio' name='q' value= '${currentQuestions[currentQuestionIndex].option4}'> ${currentQuestions[currentQuestionIndex].option4} </div>
`	

	checkAnswer();

}


function prevQuestions(){
	currentQuestionIndex--;
	let questionContainer = document.getElementById('question');
	let optionContainer = document.getElementById('optionContainer');
	let myOptions = "";
	if(currentQuestionIndex == -1){
		currentQuestionIndex = 0;
	}
	questionContainer.innerHTML = currentQuestions[currentQuestionIndex].question;
	optionContainer.innerHTML = `
			<div class='options'><input type='radio' name='q' value= '${currentQuestions[currentQuestionIndex].option1}' > ${currentQuestions[currentQuestionIndex].option1} </div> <br>
			<div class='options'><input type='radio' name='q' value= '${currentQuestions[currentQuestionIndex].option2}'> ${currentQuestions[currentQuestionIndex].option2} </div> <br>
			<div class='options'><input type='radio' name='q' value= '${currentQuestions[currentQuestionIndex].option3}'> ${currentQuestions[currentQuestionIndex].option3} </div><br>
			<div class='options'><input type='radio' name='q' value= '${currentQuestions[currentQuestionIndex].option4}'> ${currentQuestions[currentQuestionIndex].option4} </div>
`

	checkAnswer();

}

//checking Answer

function checkAnswer()
{
	let myOptions = document.getElementsByTagName('input');
	let myAnswer = currentQuestions[currentQuestionIndex].answer
	
	for (let i = 0; i < myOptions.length; i++){
		function addScore(){
			
			if (myOptions[i].value == myAnswer){
			currentQuizScore += parseInt((1/currentQuestions.length) * 100);
			score.innerHTML = currentQuizScore;
			timeUpScore.innerHTML = currentQuizScore;
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









