





(function () {

	document.addEventListener(`click`, burgerInit)
	function burgerInit(e) {
		const burgerIcon = e.target.closest(`.burger-icon`)
		const burgerLink = e.target.closest(`.nav__link`)

		if (!burgerIcon && !burgerLink) return
		if (document.documentElement.clientWidth > 900) return

		if (!document.body.classList.contains(`body--opened-menu`)) {
			document.body.classList.add(`body--opened-menu`)
		} else {
			document.body.classList.remove(`body--opened-menu`)
		}

	}
})()

const btn = document.querySelector(`.about__modal-button`)
const modal = document.querySelector(`.modal`)

btn.addEventListener(`click`, () => {
	document.body.classList.add(`body--opened-modal`)

	modal.addEventListener(`click`, event => {
		const target = event.target
		console.log(target)
		if (target && target.classList.contains(`modal`) || target.classList.contains(`modal__cancel`)) {
			document.body.classList.remove(`body--opened-modal`)
		}
	})

})

document.addEventListener(`keydown`, event => {
	if (event.code === `Escape`) {
		document.body.classList.remove(`body--opened-modal`)
	}
})
