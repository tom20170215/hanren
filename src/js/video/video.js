import Swiper from 'swiper';
const tpl = require('./video.html');
require('./video.scss');


//播放视频
function playVideo($obj) {
	
}


export default {
	tpl,
	init: function() {
		var swiperlist = $(".content4 .swiper-slide");//获取swiper对象集合
		var length = swiperlist.length;
		for(var i = 0;i<length;i++){
			playVideo(swiperlist[i]);
		}
		var videoSwiper = new Swiper(".swiper-video-container", {
			autoplay: true,
			loop: true,
			//轮播时暂停所有视频
			on: {
				slideChangeTransitionEnd: function() {

				}
			},
			//
		});



		//swiper点击事件触发视频播放，封面隐藏，停止轮播


		//视频暂停时，显示封面隐藏视频开始自动轮播


		//视频播放时，显示视频
	}
}