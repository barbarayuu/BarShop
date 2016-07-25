/* 首页大屏广告效果 */
$(function(){
	var $imgDes = $("#imgDescription a");
	var len = $imgDes.length;
	var index = 0;
	var timer = null;
	
	$imgDes.mouseover(function(){
		index = $imgDes.index(this);
		showImg(index);
	});
	//滑入停止动画，滑出开始动画.
	$("#imagesroll").hover(function(){
		if(timer){
			clearInterval(timer);
		}
	},function(){
		timer = setInterval(function(){
			showImg(index++);
			if(index == len){index = 0;}				
		},2000)
	}).trigger("mouseleave");
})
//显示不同的幻灯片
function showImg(index){
	var $rolllist = $("#imgDescription a");
	$("#imgs").find("img").eq(index).fadeIn()
	                      .siblings().fadeOut();
	$rolllist.removeClass("chos").css("opacity","0.7")
			 .eq(index).addClass("chos").css("opacity","1"); 
}