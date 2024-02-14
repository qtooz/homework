// const age = 28
// if (age >= 18) {
//  console.log ('Вы совершеннолетний')
// } else {
// 	console.log ('Вам еще нет 18')
// }


// ===================================================



// const age = 28
// age >= 18 ? console.log ('Вы совершеннолетний') : console.log ('Вам еще нет 18')

// ==============================================================

let age = prompt("Сколько вам лет?");
switch (age) {
	case '0':
	case '1':
	case '2':
	case '3':
	case '4':
	case '5':
	case '6':
	case '7':
	case '8':
	case '9':
	case '10':
	case '11':
	case '12':
	case '13':
	case '14':
	case '15':
	case '16':
	case '17':
		alert('Вам еще нет 18');
		break;
		default:
			alert ('Вы совершеннолетний');
}
