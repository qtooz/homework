
// burger 
document.querySelector(`.burger`).addEventListener(`click`, function () {
	this.classList.toggle(`active`);
	document.querySelector(`.header__nav`).classList.toggle(`burger-open`);
	document.body.classList.toggle(`burger-open`);
})




// Drop-down menu


let intervalID;




document.querySelectorAll(`.drop__down-control`).forEach(e => {
	e.addEventListener(`click`, e => {
		const menu = e.currentTarget.dataset.path;
		document.querySelectorAll(`.drop-down__content-list`).forEach(e => {
			if (!document.querySelector(`[data-target=${menu}]`).classList.contains(`open`)) {
				e.classList.remove(`drop-down__content--opened`);
				e.classList.remove(`open`);

				document.querySelector(`[data-target=${menu}]`).classList.add(`drop-down__content--opened`);
				intervalID = setTimeout(() => {
					document.querySelector(`[data-target=${menu}]`).classList.add(`open`);
				}, 0);
			}
			if (document.querySelector(`[data-target=${menu}]`).classList.contains(`open`)) {
				clearTimeout(intervalID);

				document.querySelector(`[data-target=${menu}]`).classList.remove(`drop-down__content--opened`);
				intervalID = setTimeout(() => {
					document.querySelector(`[data-target=${menu}]`).classList.remove(`open`);
				}, 0);
			}
			window.onclick = e => {
				if (e.target == document.querySelector(`[data-target=${menu}]`) || e.target == document.querySelector(`[data-path=${menu}]`)) {
					return;
				} else {

					document.querySelector(`[data-target=${menu}]`).classList.remove(`drop-down__content--opened`);
					document.querySelector(`[data-target=${menu}]`).classList.remove(`open`);
				}


			}
		});
	});
});

// chek-deg

document.querySelector(`.one`).addEventListener(`click`, () => {
	document.querySelector(`.menu1`).classList.toggle(`drop-down__content--opened`)
})
document.querySelector(`.two`).addEventListener(`click`, () => {
	document.querySelector(`.menu2`).classList.toggle(`drop-down__content--opened`);

})

document.body.onclick = e => {
	if (e.target == document.querySelector(`.one`) || e.target == document.querySelector(`.two`)) {
		return;
	} else {

		document.querySelector(`.menu1`).classList.remove(`drop-down__content--opened`);
		document.querySelector(`.menu2`).classList.remove(`drop-down__content--opened`);
	}


}



// Scroll-animation 



let header = document.querySelector(`.header__menu`);
headerH = document.querySelector(`.header__menu`).clientHeight;
heroTitleH = document.querySelector(`.hero__title`).clientHeight;
heroR = document.querySelector(`.hero__reviews`);
heroBlock = document.querySelector(`.hero__block`);
heroInner = document.querySelector(`.hero__inner`).clientHeight;
aboutCol1 = document.querySelector(`.about__col1`);
aboutSubtitle = document.querySelector(`.about__subtitle`);
aboutTitle = document.querySelector(`.about__title`);
aboutText = document.querySelector(`.about__text`);
aboutTextH = document.querySelector(`.about__text`).clientHeight;
aboutList = document.querySelector(`.about__list`);
aboutListH = document.querySelector(`.about__list`).clientHeight;
aboutInner = document.querySelector(`.about__inner`).clientHeight;
aboutButton = document.querySelector(`.about__button`);
aboutButtonH = document.querySelector(`.about__button`).clientHeight;
ourInner = document.querySelector(`.our__inner`)
ourFirstBlock = document.querySelector(`.item-1`);
ourFirstBlockH = document.querySelector(`.item-1`).clientHeight;
ourSecondBlock = document.querySelector(`.item-2`);
ourSecondBlockH = document.querySelector(`.item-2`).clientHeight;
ourThirdBlock = document.querySelector(`.item-3`);
ourFourthBlock = document.querySelector(`.item-4`);
ourFifthBlock = document.querySelector(`.item-5`);
ourSixthBlock = document.querySelector(`.item-6`);
ourH = document.querySelector(`.our`).clientHeight;
chooseSub = document.querySelector(`.choose__us`);
chooseSubH = document.querySelector(`.choose__us`).clientHeight;
chooseCol2 = document.querySelector(`.choose__col2`);
chooseTittle = document.querySelector(`.choose__tittle`);
chooseAccardion = document.querySelector(`.accardion-list`);
chooseH = document.querySelector(`.choose`).clientHeight;
startedSub = document.querySelector(`.started__subtitle`);
startedTitle = document.querySelector(`.started__title`);
startedVideo = document.querySelector(`.started__video`);
startedBtn = document.querySelector(`.started__button`);
startedH = document.querySelector(`.started`).clientHeight;
testimonialWrapper = document.querySelector(`.testimonial__wrapper`);
testimonialInner = document.querySelector(`.testimonial__inner`);
testimonialH = document.querySelector(`.testimonial`).clientHeight;
pricingSub = document.querySelector(`.pricing__subtitle`);
pricingTitle = document.querySelector(`.pricing__title`);
pricingText = document.querySelector(`.pricing__text`);
pricingContent = document.querySelector(`.pricing__content`);
pricingH = document.querySelector(`.pricing`).clientHeight;
trustSub = document.querySelector(`.trust__subtitle`);
trustTitle = document.querySelector(`.trust__title`);
trustH = document.querySelector(`.trust`).clientHeight;
galleryHeader = document.querySelector(`.gallery__header`);
gallerySwiperTitle = document.querySelector(`.gallery__swiper-title`);
gallerySwiper = document.querySelector(`.swiper`);
gallerySidebar = document.querySelector(`.gallery__sidebar-list`);
galleryH = document.querySelector(`.gallery`).clientHeight;
footerInner = document.querySelector(`.footer__inner`);
document.onscroll = function () {
	let scroll = window.scrollY;
	if (scroll > headerH) {
		heroR.classList.add(`slides`);
		header.classList.add(`fixed`);
		document.body.style.paddingTop = headerH + `px`;
	} else {
		header.classList.remove(`fixed`);
		document.body.removeAttribute(`style`);
	}
	if (scroll > heroTitleH) {
		heroBlock.classList.add(`animation-block`);

	}
	if (scroll > heroInner) {
		aboutCol1.classList.add(`animation-col1`);
		aboutSubtitle.classList.add(`animation__about-title`);
		aboutTitle.classList.add(`animation__about-title`);
	}
	if (scroll > heroInner + aboutTextH) {
		aboutText.classList.add(`animation__about-text`);
	}
	if (scroll > heroInner + aboutTextH + aboutListH) {
		aboutList.classList.add(`about_animation-list`);
	}
	if (scroll > heroInner + aboutTextH + aboutListH + aboutButtonH) {
		aboutButton.classList.add(`about_animation-button`);
	}
	if (scroll > heroInner + aboutInner) {
		ourInner.classList.add(`our__animation-inner`);
	}
	if (scroll > heroInner + aboutInner + ourFirstBlockH) {
		ourFirstBlock.classList.add(`our__animation-1`);
	}
	if (scroll > heroInner + aboutInner + ourFirstBlockH + headerH) {
		ourSecondBlock.classList.add(`our__animation-2`);
	}
	if (scroll > heroInner + aboutInner + ourFirstBlockH + headerH + headerH) {
		ourThirdBlock.classList.add(`our__animation-3`);
	}
	if (scroll > heroInner + aboutInner + ourFirstBlockH + ourSecondBlockH) {
		ourFourthBlock.classList.add(`our__animation-4`);
	}
	if (scroll > heroInner + aboutInner + ourFirstBlockH + ourSecondBlockH + headerH) {
		ourFifthBlock.classList.add(`our__animation-5`);
	}
	if (scroll > heroInner + aboutInner + ourFirstBlockH + ourSecondBlockH + headerH + headerH) {
		ourSixthBlock.classList.add(`our__animation-6`);
	}
	if (scroll > heroInner + aboutInner + ourSecondBlockH + ourH) {
		chooseSub.classList.add(`choose_animation-subtittle`);
		chooseCol2.classList.add(`choose__col2-animation`);

	}
	if (scroll > heroInner + aboutInner + ourSecondBlockH + ourH + chooseSubH) {
		chooseAccardion.classList.add(`choose__animation-accardion`);

	}

	if (scroll > heroInner + aboutInner + ourH + chooseH) {
		startedSub.classList.add(`animation__started-title`)
		startedTitle.classList.add(`animation__started-title`)
	}
	if (scroll > heroInner + aboutInner + ourH + chooseH + ourSecondBlockH) {
		startedVideo.classList.add(`animation__started-video`)
	}
	if (scroll > heroInner + aboutInner + ourH + chooseH + ourSecondBlockH + ourSecondBlockH) {
		startedBtn.classList.add(`animation__started-button`)
	}
	if (scroll > heroInner + aboutInner + ourH + chooseH + startedH + headerH) {
		testimonialWrapper.classList.add(`testimonial__animation-main`)
	}
	if (scroll > heroInner + aboutInner + ourH + chooseH + startedH + ourSecondBlockH + headerH) {
		testimonialInner.classList.add(`testimonial__inner-animation`);
	}
	if (scroll > heroInner + aboutInner + ourH + chooseH + startedH + testimonialH + headerH) {
		pricingSub.classList.add(`pricing__subtitle-animation`);
		pricingTitle.classList.add(`pricing__title-animation`);
	}
	if (scroll > heroInner + aboutInner + ourH + chooseH + startedH + testimonialH + ourSecondBlockH) {
		pricingText.classList.add(`pricing__text-animation`);
	}
	if (scroll > heroInner + aboutInner + ourH + chooseH + startedH + testimonialH + ourSecondBlockH + headerH + headerH) {
		pricingContent.classList.add(`pricing__content-animation`);
	}
	if (scroll > heroInner + aboutInner + ourH + chooseH + startedH + testimonialH + pricingH + headerH) {
		trustSub.classList.add(`trust__subtitle-animation`);
		trustTitle.classList.add(`trust__title-animation`);
	}
	if (scroll > heroInner + aboutInner + ourH + chooseH + startedH + testimonialH + pricingH + trustH + headerH) {
		galleryHeader.classList.add(`gallery__header-animation`);
		gallerySwiperTitle.classList.add(`gallery__header-animation`);
	}
	if (scroll > heroInner + aboutInner + ourH + chooseH + startedH + testimonialH + pricingH + trustH + ourSecondBlockH) {
		gallerySwiper.classList.add(`gallery__swiper-animation`);
	}
	if (scroll > heroInner + aboutInner + ourH + chooseH + startedH + testimonialH + pricingH + trustH + ourSecondBlockH + headerH) {

		gallerySidebar.classList.add(`gallery__sidebar-animation`);
	}
	if (scroll > heroInner + aboutInner + ourH + chooseH + startedH + testimonialH + pricingH + trustH + galleryH ) {
		footerInner.classList.add(`footer__inner-animation`);
	}
}

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
// Video

let
	startVideo = document.querySelector(`.started__video`);
startYoutube = document.querySelector(`.started__youtube-video`)
videoImg = document.querySelector(`.started__video-img`);
videoSub = document.querySelector(`.started__video-subtitle`);
videoTitle = document.querySelector(`.started__video-title`);
videoPlay = document.querySelector(`.started__video-play`);
videoPlayBtm = document.querySelector(`.started__video-play-btm`);
span = document.querySelector(`.span`)
startVideo.addEventListener(`click`, () => {
	videoImg.classList.add(`video-play`);
	videoSub.classList.add(`video-play`);
	videoTitle.classList.add(`video-play`);
	videoPlay.classList.add(`video-play`);
	videoPlayBtm.classList.add(`video-play`);
	span.classList.add(`video-play`);
	startYoutube.classList.add(`youtube-play`);

})


// testimonials 

let interval

document.querySelectorAll(`.testimonial__item-control`).forEach(e => {
	e.addEventListener(`click`, e => {
		const avatar = e.currentTarget.dataset.path;
		document.querySelectorAll(`.testimonial__content`).forEach(e => {
			if (!document.querySelector(`[data-target=${avatar}]`).classList.contains(`open`)) {
				e.classList.remove(`visible-1`);
				e.classList.remove(`open`);
				document.querySelector(`[data-target=${avatar}]`).classList.add(`visible-1`);
				interval = setTimeout(() => {
					document.querySelector(`[data-target=${avatar}]`).classList.add(`open`);
				}, 0);
			}
			if (document.querySelector(`[data-target=${avatar}]`).classList.contains(`open`)) {
				clearTimeout(interval);
				document.querySelector(`[data-target=${avatar}]`).classList.remove(`visible-1`);
				interval = setTimeout(() => {
					document.querySelector(`[data-target=${avatar}]`).classList.remove(`open`);
				}, 0);
			}
			// window.onclick = e => {
			// 	if (e.target == document.querySelector(`[data-target=${avatar}]`) || e.target == document.querySelector(`[data-path=${avatar}]`)) {
			// 		return
			// 	} else {
			// 		document.querySelector(`[data-target=${avatar}]`).classList.remove(`visible-1`);
			// 		document.querySelector(`[data-target=${avatar}]`).classList.remove(`open`);
			// 	}

			// }
		});
	});
});

// swiper
const swiper = new Swiper('.swiper', {
	autoplay: {
		delay: 5000,
	},
	pagination: {
		el: '.swiper-pagination',
	},
});