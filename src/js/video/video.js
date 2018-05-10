import Swiper from 'swiper';
const tpl = require('./video.html');
require('../../images/playimg.png');
require('./video.scss');

export default {
	tpl,
	init: function() {
		var swiperWrapper = $("#swiper-video").find("#swiper-wrapper");
		var jdata = JSON.parse($("#videoListJson").text());
		if (jdata != undefined && jdata != null && jdata != '' && Number(jdata.size) > 0) {
			//有视频数据，下一步
			console.log(jdata);
			var videolist = jdata.videolist;
			var size = jdata.size;
			//创建视频的描述、地址、封面
			var desc = [];
			var url = [];
			var img = [];
			if (size <= 1 && swiperWrapper) {
				swiperWrapper.removeClass("swiper-wrapper");
			} else if (size > 1 && swiperWrapper.not(".swiper-wrapper")) {
				swiperWrapper.addClass("swiper-wrapper");
			}
			for (var i = 0; i < videolist.length; i++) {
				desc.push(videolist[i].desc);
				url.push(videolist[i].url);
				img.push(videolist[i].img);
			}
			for (var j = 0; j < desc.length; j++) {
				var slide = "<div class = 'swiper-slide'>" + "<p>" + desc[j] + "</p>" + "<div image='url(" + img[j] + ")' style='background-image:url(" + img[j] + ")'>" + "<img src='../../images/playimg.png'/>" + "</div>" + "<div>" + '<video style="z-index:1" controls="controls" poster="' + img[j] + '" src="' + url[j] + '">' + '</video>' + "</div>" + '</div>';
				swiperWrapper.append(slide);
			}
			var videoBor = $(".swiper-slide"); //获取swiper对象数组
			var videolist = videoBor.find("video"); //video对象数组
			//渲染swiper效果
			var videoSwiper = new Swiper(".swiper-video", {
				autoplay: true,
				loop: true,
				pagination: ".swiper-pagination",
				on: {
					slideChangeTransitionEnd: function() {
						for (var k = 0; k < videolist.length; k++) {
							videolist[k].pause();
						}
					}
				}
			});
			//重新获取video的swiper对象数组
			var videoBor = $(".swiper-video .swiper-slide");
			var length = videoBor.length;
			/*点击单个swiper事件*/
			videoBor.on("click", function() {
				videoSwiper.autoplay.stop();
				var _this = this;
				var $video = $(this).find("video");
				if ($video[0].paused) {
					$(_this).play();
				}
			});

		} else {
			//无视频数据，隐藏容器
			$(".box").hide();
		}
	}
}