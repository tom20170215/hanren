import './modal';
const tpl = require('./menpai.html');
require('./custom.scss');
require('./menpai.scss');


//选择门派
function selectMP() {

}

const App = function() {
	var btn = $(".content2 button"); //打开modal按钮
	var mps = $(".mplist"); //门派list
	var okBtn = $(".confirm");//确认按钮
	var closeBtn = $(".close");
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
	});

	//点击打开模态框
	btn.click(function() {
		$('#myModal').on('shown.bs.modal', function() {
			$('.modal-footer button').focus();
		});
		$("#myModal").modal({
			backdrop: 'static'
		});
	});
	//点击确认提交
	okBtn.click(function(){
		// alert("confirm success!");
		closeBtn.click();

	});


};

export default {
	tpl,
	App
}