import 'jquery';
// import nav from './nav/nav';
import banner from './banner/banner';
import swiper from './swiper/swiper';
import menpai from './menpai/menpai';
import video from './video/video';
import news from './news/new';

require('../css/reset.scss');

$(function() {
	// $("#wrap").append($(nav.tpl));
	$("#wrap").append($(banner.tpl));
	$("#wrap").append($(menpai.tpl));
	$("#wrap").append($(swiper.tpl));
	swiper.init();
	$("#wrap").append($(video.tpl));
	$("#wrap").append($(news.tpl));
})