"use strict"

// Задача 5.Тренажер додавання. Кожні 10 секунд користувачу задають випадковий приклад з додавання двох цифр і робиться перевірка.---------------------------------------------------------------------------------

function generateAdditionExample() {
	const num1 = Math.floor(Math.random() * 10)
	const num2 = Math.floor(Math.random() * 10)
	const answer = num1 + num2
	return {
		question: `${num1} + ${num2} = `,
		answer: answer.toString()
	};
}
function checkAnswer(example, answer) {
	return example.answer === answer
}

function startAdditionTrainer() {
	let correctAnswers = 0

	function askExample() {
		const example = generateAdditionExample()
		const userAnswer = prompt(example.question)
		if (checkAnswer(example, userAnswer)) {
		correctAnswers++
		console.log("Правильна відповідь")
		} else {
		console.log("Неправильна відповідь")
		}
		setTimeout(askExample, 10000)
	}

	askExample()
}

startAdditionTrainer()



