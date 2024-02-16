
// const user = {
// 	vitaliy: {
// 		age: 28,
// 		weight: 100,
// 		height: 180,
// 		sayHello(name) {
// 			console.log(`Hello ${name}`)
// 		}
// 	}
// }
// user.vitaliy.sayHello(`Tom`)

// =========================================================================================================
const users = [
	{
		name: `alex`,
		age: 20,
		isAdmin: false
	},
	{
		name: `rex`,
		age: 24,
		isAdmin: false
	},
	{
		name: `somatex`,
		age: 27,
		isAdmin: false
	},
	{
		name: `flex`,
		age: 25,
		isAdmin: true
	},
]
let a = 0
for (let i = 0; i < users.length; i++) {
	if (users[i].isAdmin == false) {
		a = a + 1
	}
}
console.log(a)