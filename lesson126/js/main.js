




// Бургер
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


// Модалка
const btn = document.querySelector(`.about__modal-button`)
const modal = document.querySelector(`.modal`)

btn.addEventListener(`click`, () => {
	document.body.classList.add(`body--opened-modal`)
	event.preventDefault()

	modal.addEventListener(`click`, event => {
		const target = event.target
		event.preventDefault()
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


// Табы

const tabControls = document.querySelector(`.tab-controls`)

tabControls.addEventListener(`click`, toggleTab)

function toggleTab(e) {

	const tabControl = e.target.closest(`.tab__controls-link`)
	if (!tabControl) return
	e.preventDefault()
	if (tabControl.classList.contains(`tab__controls-link--active`)) return


	const tabContentID = tabControl.getAttribute(`href`)

	document.querySelector(`.program__tab-content--show`).classList.remove(`program__tab-content--show`)
	document.querySelector(tabContentID).classList.add(`program__tab-content--show`)



	document.querySelector(`.tab__controls-link--active`).classList.remove(`tab__controls-link--active`)
	tabControl.classList.add(`tab__controls-link--active`)


}

//Аккардион

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

//Слайдер-галлерея

const swiper = new Swiper('.gallery__slider', {
	slidesPerView: 4,
	spaceBetween: 32,



	pagination: {
		el: '.gallery__pagination',
		type: 'fraction',
	},

	navigation: {
		nextEl: '.gallery__next',
		prevEl: '.gallery__prev',
	},

	breakpoints: {

		320: {
			slidesPerView: 2,
			spaceBetween: 10
		},

		480: {
			slidesPerView: 3,
			spaceBetween: 15
		},

		1050: {
			slidesPerView: 4,
			spaceBetween: 25
		}
	}
});
//Слайдер-отзывы 

new Swiper('.testimonials__slider', {
	slidesPerView: 1,
	spaceBetween: 0,
	centeredSlides: true,


	navigation: {
		nextEl: '.testimonials__next',
		prevEl: '.testimonials__prev',
	},
	scrollbar: {
		el: '.testimonials__scrollbar',
	},
	breakpoints: {

		600: {
			slidesPerView: 1.5,
			spaceBetween: 0,
		},
		900: {
			slidesPerView: 2,
			spaceBetween: 0,
		},
	}
});

// Маска для телефона 

const telInputs = document.querySelectorAll('input[type="tel"]')
const im = new Inputmask(`+7(999) 999-99-99`)
im.mask(telInputs)
