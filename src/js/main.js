import 'jquery';
// import nav from './nav/nav';
import banner from './banner/banner';
import swiper from './swiper/swiper';

require('../css/reset.scss');

$(function(){
	// $("#wrap").append($(nav.tpl));
	$("#wrap").append($(banner.tpl));
	$("#wrap").append($(swiper.tpl));
	swiper.init();
})
