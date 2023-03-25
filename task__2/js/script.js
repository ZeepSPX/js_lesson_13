"use strict"

// Задача 3.З використанням замикань розробити ітератор, тобто функцію, що буде поступово за окремими викликами видавати по одне значення від заданого мінімального до заданого максимального. Якщо значення досягне максимального, то наступним буде мінімальне значення. З використанням цієї функції реалізувати перебір номерів місяців. ---------------------------------------------------------------------------------

function getMonthIterator(min, max) {
	let current = min - 1
	return function () {
		current++
		if (current > max) {
			current = min
		}
		return current
	}
}

const getNexMonth = getMonthIterator(1, 12)

for (let i = 1; i <= 12; i++) {
	document.write(`<div class="one__container"> <div> Місяць ${getNexMonth()}</div></div>`)
}





