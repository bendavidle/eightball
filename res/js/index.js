//Model
let eightBallPositive = ["It is certain.", "It is decidedly so.", "Without a doubt.", "Yes definitely.", "You may rely on it.", "As I see it, yes.", "Most likely.", "Outlook good.", "Yes.", "Signs point to yes."];
let eightBallNeutral = ["Reply hazy, try again.", "Ask again later.", "Better not tell you now.", "Cannot predict now.", "Concentrate and ask again."];
let eightBallNegative = ["Don't count on it.", "My reply is no.", "My sources say no.", "Outlook not so good.", "Very doubtful."];
let eightBall = [eightBallPositive, eightBallNeutral, eightBallNegative];
let answer = "";
let question = "";

//View
show();
function show() {
	const app = document.getElementById("app");
	app.innerHTML = /*HTML*/ `
      <div class="eightball">
        <div class="header">QUESTION</div>
        <span class="question">${question}</span>
        <div class="header">ANSWER</div>
        <span class="answer">${answer}</span>
        <input class="questioninput" type="text" onkeydown="handleQuestion(event)"/>
      </div>
  `;

	let questionInput = document.querySelector(".question");
	questionInput.focus();
}

//Controller
function handleQuestion(e) {
	if (e.key == "Enter") {
		const input = e.target;
		const q = input.value;
		question = q.toUpperCase();
		show();
		handleAnswer();
	}
}

function handleAnswer() {
	let randomAnswer = getRandomAnswer();
	function checkRandomAnswer() {
		const newAns = getRandomAnswer();
		answer = newAns;
		setTimeout(() => {
			if (newAns != randomAnswer) {
				show();
				checkRandomAnswer();
			} else {
				show();
			}
		}, 200);
	}

	checkRandomAnswer();
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}

function getRandomAnswer() {
	let randomTypeNum = getRandomInt(0, 3);
	let randomTypeArr = eightBall[randomTypeNum];
	let randomAnswerNum = getRandomInt(0, randomTypeArr.length);
	let randomAnswer = randomTypeArr[randomAnswerNum];
	return randomAnswer;
}
