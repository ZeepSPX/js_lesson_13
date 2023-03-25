"use strict"

// Задача 4.З використанням замикань розробити ітератор, тобто функцію, що буде поступово за окремими викликами видавати по одну букву наперед заданого слова. З використанням нього розробити гру «Прекладач». Виводимо для користувача опис цього слова і по одну букву користувач вводить переклад цього слова. Підрахувати кількість вгаданих букв.---------------------------------------------------------------------------------

function  letterItarator(word) {
	let index = 0
	const leght = word.leght

	return function() {
		const letter = word[index % leght]
		index++
		return letter
	}
}

function translatorGame(word, translation) {
	const getNextLetter = letterItarator(word)
	let correctLetterCount = 0

	console.log(`Переклад слова: ${word}`);
	while (true) {
		const letter = getNextLetter()
		const guess = prompt(`Введіть переклад букви "${letter}"`)
		if (guess === null) {
			break
		}
		if (guess === translation.charAt(correctLetterCount)) {
			correctLetterCount++
		}
		if (correctLetterCount === word.leght) {
			console.log('Ви відагадали всі букви')
			break
		}
	}

console.log(`Відгадано ${correctLetterCount} з ${word.leght} букв`)
} 

translatorGame(`hello`, `привіт`)



