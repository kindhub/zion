import Content from './modules/Content';
import VSwiper from './modules/VSwiper';
import VacancyBtn from './modules/VacancyBtn';
import Nav from './modules/Nav';
/*
	--------------------------------------------
	--------------------------------------------
					SLIDERS
	--------------------------------------------
	--------------------------------------------
 */

	function initPersonInfoSlider() {
		swiper.init(".tmpl-hh__person-info-slider", {
			loop: false,
			slidesPerView: 1,
			centeredSlides: true,
			autoHeight: true,
			effect: "fade",
			pagination: {
				el: '.tmpl-hh__person-info-slider__pagination',
				type: "custom",
				renderCustom: function (swiper, current, total) {
					return ('0' + current).slice(-2) + ' / ' + ('0' + total).slice(-2);
				}
			},
			navigation: {
				prevEl: ".tmpl-hh__person-info-slider-arrow-prev",
				nextEl: ".tmpl-hh__person-info-slider-arrow-next",
				disabledClass: 'tmpl-hh__slider-arrow-disabled'
			},
		});
	}

	function initStoriesSlider() {
		swiper.init(".tmpl-hh__stories-slider", {
			loop: true,
			slidesPerView: 3,
			centeredSlides: true,
			spaceBetween: 24,
			autoHeight: true,
			// effect: "fade",
			speed: 1000,
			autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
			breakpoints: {
				699: {
					slidesPerView: 2,
				}
			}
		});
	}

	/*
	--------------------------------------------
	--------------------------------------------
					ANIMATION
	--------------------------------------------
	--------------------------------------------
 */

	let firstScreenTitles = document.querySelectorAll('.tmpl-hh__s-first-screen-content__title--opacity');
	let preloadTitle = document.querySelector('.tmpl-hh__preload-bg__title');
	let preloadBg = document.querySelector('.tmpl-hh__preload-bg');
	let wrapper = document.querySelector('.tmpl-hh__wrapper');
	
	if(window.innerWidth > 1339) {
		wrapper.style.height = '890px';
	}else if(window.innerWidth > 1019) {
		wrapper.style.height = '704px';
	}else if(window.innerWidth > 699) {
		wrapper.style.height = '550px';
	}else if(window.innerWidth > 530) {
		wrapper.style.height = '540px';
	}
	else if(window.innerWidth > 320) {
		wrapper.style.height = '500px';
	}

	function firstScreenTitlesAnimate() {
		setTimeout(() => firstScreenTitles.forEach((item) => {
			item.style.opacity = '1';
		}), 3300)
	}

	setTimeout(() => {
		preloadTitle.style.display = 'block';
	}, 1000);

	setTimeout(() => {
		preloadBg.style.display = 'none';
		firstScreenTitlesAnimate();
		wrapper.style.height = '100%';
	}, 3000);

	let personInfoContentBtns = document.querySelectorAll('.tmpl-hh__s-person-info-content__btn');
	let thisSwiper = document.getElementById('swiper');

	for (let index = 0; index < personInfoContentBtns.length; index++) {
		const element = personInfoContentBtns[index];
		element.addEventListener('click', function() {
			element.parentNode.classList.toggle('tmpl-hh__s-person-info-content__right--active');
			thisSwiper.swiper.update();
		})
	}

	const words = ["join us and become a part of a great IT community|"];
	let i = 0;
	let timer;

	function typingEffect() {
		let word = words[i].split("");
		var loopTyping = function() {
			if (word.length > 0) {
				document.getElementById('text').innerHTML += word.shift();
			} else {
				deletingEffect();
				return false;
			};
			timer = setTimeout(loopTyping, 70);
		};
		loopTyping();
	};

	function deletingEffect() {
		let word = words[i].split("");
		var loopDeleting = function() {
			if (word.length > 0) {
				word.pop();
				document.getElementById('text').innerHTML = word.join("");
			} else {
				if (words.length > (i + 1)) {
					i++;
				} else {
					i = 0;
				};
				typingEffect();
				return false;
			};
			timer = setTimeout(loopDeleting, 140);
		};
		loopDeleting();
	};

	typingEffect();

/*
	--------------------------------------------
	--------------------------------------------
						COMMON
	--------------------------------------------
	--------------------------------------------
 */

	const swiper = new VSwiper;

	new Content();
	new VacancyBtn();
	new Nav();
	initPersonInfoSlider();
	initStoriesSlider();