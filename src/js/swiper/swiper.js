import Swiper from 'swiper';

const tpl = require('./swiper.html');
require('./swiper.scss');



export default {
	tpl,
	init: function() {
		var myswiper = new Swiper('.swiper-container', {
			autoplay: true,
			loop: true,
			pagination: {
				el: '.swiper-pagination',
				bulletClass:'black',
				bulletActiveClass:'red'
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl:  '.swiper-button-prev',
			},
		});
	}
}