"use strict"

// Задача 1. Задача 1. Нехай X_0 = 1, X_i = X_i-1 + 2_i, де i = 1,2...Визначити Х10 Розв’язати з використанням рекурсивних і нерекурсивних алгоритмів-----------------------------

function getMathExample(num) {
	let x = 1
	for (let i = 1; i <= num; i++) {
		x = x + 2 * i
	}
	return x
}

const result = getMathExample(265)

document.write(`<div class="one__container"> <div> Нерекурсивиний ${result}</div></div>`)

function getMathExampleRecursive(num) {
	if (num === 0) {
		return 1
	} else {
		return getMathExampleRecursive(num - 1) + 2 * num 
	}
}

const resulRecursive = getMathExampleRecursive(265)

document.write(`<div class="one__container"> <div> Рекурсивиний ${resulRecursive}</div></div>`)




















