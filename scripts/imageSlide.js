/*选项卡横向滚动*/
$(function(){
	var tabs = $("#brandTab li a");
	tabs.click(function(){
		$(this).parent().addClass("chos")
		       .siblings().removeClass("chos");
	    var index = tabs.index(this);
		showBrandList(index);
		return false;
	}).eq(0).click();
})
//显示不同的广告牌块
function showBrandList(index){
	var $rollobj = $("#brandList");
	var rollWidth = $rollobj.find("li").outerWidth();
	//一个版面的宽度
	rollWidth = rollWidth * 4;
	$rollobj.stop(true,false).animate({ left : -rollWidth*index},1000);
}