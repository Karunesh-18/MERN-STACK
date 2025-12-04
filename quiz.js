const questions = [
	{
		text: "Which keyword declares a constant in JavaScript?",
		options: ["var", "let", "const", "static"],
		correctIndex: 2,
	},
	{
		text: "Which method is used to log to the console?",
		options: ["print()", "log()", "console()", "console.log()"],
		correctIndex: 3,
	},
	{
		text: "Which of these is NOT a JavaScript data type?",
		options: ["number", "string", "boolean", "character"],
		correctIndex: 3,
	},
];

const questionText = document.getElementById("question-text");
const questionCount = document.getElementById("question-count");
const optionsContainer = document.getElementById("options-container");
const nextBtn = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let selectedOption = null;

function loadQuestion() {
	const q = questions[currentQuestionIndex];
	questionText.textContent = q.text;
	questionCount.textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
	optionsContainer.textContent = "";
	selectedOption = null;

	q.options.forEach((opt, index) => {
		const btn = document.createElement("button");
		btn.setAttribute('type', 'button');
		btn.className = "gap-6 full py-2 bg-slate-500 rounded-xl hover:bg-slate-400 text-strong text-left py-2 px-4 mt-4";
		btn.textContent = opt;
		optionsContainer.appendChild(btn);

		btn.onclick = () => {
			selectedOption = index;
			updateSelection();
		};
	});
}

function updateSelection() {
	[...optionsContainer.children].forEach((btn, idx) => {
		if (idx === selectedOption) {
			btn.classList.add("bg-emerald-500");
			btn.classList.remove("bg-slate-500");
		} else {
			btn.classList.add("bg-slate-500");
			btn.classList.remove("bg-emerald-500");
		}
	});
}

nextBtn.addEventListener('click', () => {
	if (selectedOption === null) {
		return alert("Select an option!");
	}

	currentQuestionIndex++;

	if (currentQuestionIndex < questions.length) {
		loadQuestion();
	} else {
		questionText.textContent = "Quiz Completed!";
		optionsContainer.textContent = "";
		questionCount.textContent = "";
		nextBtn.style.display = "none";
	}
});


document.addEventListener('DOMContentLoaded', () => {
	loadQuestion();
});
