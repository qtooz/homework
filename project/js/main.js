// Аккардион

const accardionLists = document.querySelectorAll(`.accardion-list`);
accardionLists.forEach(el => {

	el.addEventListener(`click`, (e) => {

		const accardionList = e.currentTarget
		const accardionOpenedItem = accardionList.querySelector(`.accardion-list__item--opened`)
		const accardionOpenedContent = accardionList.querySelector(`.accardion-list__item--opened .accardion-list__content`)

		const accardionControl = e.target.closest(`.accardion-list__control`);
		if (!accardionControl) return
		e.preventDefault()
		const accardionItem = accardionControl.parentElement;
		const accardionContent = accardionControl.nextElementSibling;

		if (accardionOpenedItem && accardionItem != accardionOpenedItem) {
			accardionOpenedItem.classList.remove(`accardion-list__item--opened`);
			accardionOpenedContent.style.maxHeight = null;
		}

		accardionItem.classList.toggle(`accardion-list__item--opened`);

		if (accardionItem.classList.contains(`accardion-list__item--opened`)) {
			accardionContent.style.maxHeight = accardionContent.scrollHeight + `px`;
		} else {
			accardionContent.style.maxHeight = null;
		}
	})
})


// const accardionListItem = document.querySelectorAll(`.accardion-list__item`)
// const accardionListControl = document.querySelectorAll(`.accardion-list__control`)
// accardionListControl.addEventListener(`click`, () => {
// 	accardionListItem.classList.toggle(`accardion-list__item--opened`);
// })