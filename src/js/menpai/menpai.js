import './modal';
const tpl = require('./menpai.html');
require('./custom.scss');
require('./menpai.scss');




const App = function() {
	var btn = $(".content2 button");//打开modal按钮
	var mps = $(".mplist");
	mps.click(function(e){
		var e = e || window.event;
		var target = e.target || e.srcElement;
		console.log(target);
		if (target.nodeName.toLocaleLowerCase() == 'img') {
			// switch(target){

			// }
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

}

export default {
	tpl,
	App
}