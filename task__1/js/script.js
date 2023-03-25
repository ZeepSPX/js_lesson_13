"use strict"

// Задача 2. Нехай Х0 = Х1 = 1, Хі = Хі-1 + 2Хі-2, де і = 2,3... Визначити Хn. Розв'язати з використанням рекурсивних і нерекурсивних алгоритмів----------------------------------------

function getFindX(n) {
	let xPrev = 1
	let xPrevPrev= 1
	let x = 1
	for (let i = 2; i <= n; i++) {
		x = xPrev + 2 * xPrevPrev
		xPrevPrev = xPrev
		xPrev = x
	}
	return x
}

function getFindXRecursive(n, xPrevPrev = 1, xPrev = 1) {
	if (n <= 1) {
		return xPrev
	}
	const x =xPrev + 2 * xPrevPrev
	return getFindXRecursive(n - 1, xPrev, x)
}

let result = getFindX(265)
let resultRecursive = getFindXRecursive(265)

document.write(`<div class="one__container"> <div> Нерекурсивний ${result}</div></div>`)
document.write(`<div class="one__container"> <div> Рекурсивний ${resultRecursive}</div></div>`)
