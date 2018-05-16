import './modal';
import Order from '../tools/order';
const tpl = require('./menpai.html');
require('./custom.scss');
require('./menpai.scss');

/**
 * @param  {string} str 邮箱地址
 * @return {[type]}
 */
function testMail(str) {
	var mailreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,6}$/;
	if (!mailreg.test(str)) {
		$("label.email").text("格式错误");
		return false;
	}
	$("label.email").text("");
	return true;
}

/**
 * @param  {int} t 倒计时间
 * @param  {obj} $btn  显示按钮
 * @return {[type]}
 */
function setTime($btn, count) {
	if (count === 0) {
		$btn.removeAttr("disabled");
		$btn.text("获取验证码");
		count = 60;
		return;
	} else {
		$btn.attr("disabled", "disabled");
		$btn.text("重新发送(" + count + "s)");
		count--;
	}
	window.setTimeout(function() {
		setTime($btn, count);
	}, 1000);
}



const App = function() {
	var btn = $(".content2 button"); //打开modal按钮
	var mps = $(".mplist"); //门派list
	var okBtn = $(".confirm"); //确认按钮
	var closeBtn = $(".close"); //一级关闭按钮
	var count = 60; // 倒计时

	//加载图片资源
	let imgArr = [];
	imgArr.push(require("../../images/item1red.png"));
	imgArr.push(require("../../images/item2red.png"));
	imgArr.push(require("../../images/item3red.png"));
	imgArr.push(require("../../images/item4red.png"));

	//选择门派
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


	//确认提交门派
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


	//发送验证码
	(function() {
		var $email = $("input[name='emailbox']"); //邮箱输入框
		var $code = $("input[name='code']"); //验证码输入框
		var $getcode = $(".getcode"); //验证码按钮
		var $submit = $(".submit"); //提交按钮
		var order = new Order(11203, true); //order实例	
		$email.focus(function() { //输入框聚焦失焦判断邮箱格式
			$("label.email").text("");
		}).blur(function() {
			if ($email.val()) {
				testMail($email.val());
			}
		});
		$code.focus(function() { //验证码框聚焦失焦判断
			$("label.code").text("");
		}).blur(function() {
			$("label.code").text("");
		});
		$getcode.click(function() {
			var content = $email.val(); //输入的邮箱地址
			if (!testMail(content)) { //验证邮箱
				return false;
			}

			order.sendVcode(2, content, function(res) {
				//发送成功
				setTime($getcode, count);
			}, function(res) {
				console.log(res.errcode);
				//发送失败
				switch (res.errcode) {
					case -2:
						$("label.email").text("格式错误");
						break;
					case -3:
						$("label.email").text("该邮箱已预约");
						break;
				}
			});
		});
		$submit.click(function() {
			var content = $email.val(); //输入的邮箱地址
			var codecontent = $code.val(); //输入的验证码
			if (!$code.val()) {
				$("label.code").text("请输入验证码");
				return;
			}
			order.gameOrder(content,codecontent,2,0,0,function(res){
				console.log(res.errcode);
			},function(res){
				console.log(res.errcode);
			});
		});

	})();



};

export default {
	tpl,
	App
}