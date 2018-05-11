import 'jquery';
// import nav from './nav/nav';
import banner from './banner/banner';
import swiper from './swiper/swiper';
import menpai from './menpai/menpai';
import video from './video/video';
import news from './news/new';
import footer from './footer/footer';
import back from './backbtn/back';

require('../css/reset.scss');

$(function() {
	$("#wrap").append($(back.tpl));
	back.init();
	$("#wrap").append($(banner.tpl));
	$("#wrap").append($(menpai.tpl));
	menpai.App();
	$("#wrap").append($(swiper.tpl));
	swiper.init();
	// $("#wrap").append($(video.tpl));
	// video.init();
	$("#wrap").append($(news.tpl));
	$("#wrap").append($(footer.tpl));
})