
// function selfName(name){
// 	return `Hello ${name}`
// }
// const result = selfName(`Alex`)
// console.log(result)

// ==============================================================================================================

// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
// function chekNumbers(array) {
// 	for (let i = 0; i < array.length; i++) {
// 		if (i > 10) {
// 			console.log(i)
// 		}
// 	}
// }
// chekNumbers(numbers)

// =================================================================================================================

var result;
function calc(a, b, operator){
switch (operator) {
	case '+':
		result = a + b;
		break;
	case '-':
		result = a - b;
		break;
	case '*':
		result = a * b;
		break;
	case '/':
		result = a / b;
		break;
}
}
calc(3, 2, '-')
console.log(result)


