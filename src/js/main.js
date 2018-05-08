import 'jquery';
// import nav from './nav/nav';
import banner from './banner/banner';
import swiper from './swiper/swiper';
import menpai from './menpai/menpai';

require('../css/reset.scss');

$(function(){
	// $("#wrap").append($(nav.tpl));
	$("#wrap").append($(banner.tpl));
	$("#wrap").append($(menpai.tpl));
	$("#wrap").append($(swiper.tpl));
	swiper.init();
})
