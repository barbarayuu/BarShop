/*ѡ��������*/
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
//��ʾ��ͬ�Ĺ���ƿ�
function showBrandList(index){
	var $rollobj = $("#brandList");
	var rollWidth = $rollobj.find("li").outerWidth();
	//һ������Ŀ��
	rollWidth = rollWidth * 4;
	$rollobj.stop(true,false).animate({ left : -rollWidth*index},1000);
}