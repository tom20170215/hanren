import './modal';
const tpl = require('./menpai.html');
require('./custom.scss');
require('./menpai.scss');



const App = function() {
	var btn = $(".content2 button"); //打开modal按钮
	var mps = $(".mplist"); //门派list
	var okBtn = $(".confirm"); //确认按钮
	var closeBtn = $(".close");

	//加载图片资源
	let imgArr = [];
	imgArr.push(require("../../images/item1red.png"));
	imgArr.push(require("../../images/item2red.png"));
	imgArr.push(require("../../images/item3red.png"));
	imgArr.push(require("../../images/item4red.png"));
	mps.click(function(e) {
		var e = e || window.event;
		var target = e.target || e.srcElement;
		if (target.nodeName.toLocaleLowerCase() == 'img') {
			switch (target.className) {
				case "xuanshui":
					if (target.getAttribute("src") == "../img/item1.png") {
						target.setAttribute("src", "../img/item1red.png");
						$(".qiyun").attr("src", "../img/item2.png");
						$(".chilong").attr("src", "../img/item3.png");
						$(".tianwei").attr("src", "../img/item4.png");
					} else {
						target.setAttribute("src", "../img/item1.png");
					}
					break;
				case "qiyun":
					if (target.getAttribute("src") == "../img/item2.png") {
						target.setAttribute("src", "../img/item2red.png");
						$(".xuanshui").attr("src", "../img/item1.png");
						$(".chilong").attr("src", "../img/item3.png");
						$(".tianwei").attr("src", "../img/item4.png");
					} else {
						target.setAttribute("src", "../img/item2.png");
					}
					break;
				case "chilong":
					if (target.getAttribute("src") == "../img/item3.png") {
						target.setAttribute("src", "../img/item3red.png");
						$(".xuanshui").attr("src", "../img/item1.png");
						$(".qiyun").attr("src", "../img/item2.png");
						$(".tianwei").attr("src", "../img/item4.png");
					} else {
						target.setAttribute("src", "../img/item3.png");
					}
					break;
				case "tianwei":
					if (target.getAttribute("src") == "../img/item4.png") {
						target.setAttribute("src", "../img/item4red.png");
						$(".xuanshui").attr("src", "../img/item1.png");
						$(".qiyun").attr("src", "../img/item2.png");
						$(".chilong").attr("src", "../img/item3.png");
					} else {
						target.setAttribute("src", "../img/item4.png");
					}
					break;
			}
		}

		//更改描述文字
		var $li = $(target).parents("li");
		var index = $li.index();
		$("div.descbox>p").eq(index).show().siblings().hide();
	});


	//打开门派模态框
	btn.click(function() {
		$("#myModal").modal({
			backdrop: 'static'
		});
	});


	//确认提交
	okBtn.click(function() {
		//4个图片的名字中没有red时，alert提示
		var name1 = $(".xuanshui").attr("src");
		var name2 = $(".qiyun").attr("src");
		var name3 = $(".chilong").attr("src");
		var name4 = $(".tianwei").attr("src");
		var names = name1 + name2 + name3 + name4;
		var patt = new RegExp("red");
		if (!patt.test(names)) {
			alert("少俠不要著急，请先挑選門派");
			return;
		}
		closeBtn.click();
		$("#email").modal({
			backdrop: 'static'
		});
	});


};

export default {
	tpl,
	App
}