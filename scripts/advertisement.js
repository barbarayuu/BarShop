/* ��ҳ�������Ч�� */
$(function(){
	var $imgDes = $("#imgDescription a");
	var len = $imgDes.length;
	var index = 0;
	var timer = null;
	
	$imgDes.mouseover(function(){
		index = $imgDes.index(this);
		showImg(index);
	});
	//����ֹͣ������������ʼ����.
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
//��ʾ��ͬ�Ļõ�Ƭ
function showImg(index){
	var $rolllist = $("#imgDescription a");
	$("#imgs").find("img").eq(index).fadeIn()
	                      .siblings().fadeOut();
	$rolllist.removeClass("chos").css("opacity","0.7")
			 .eq(index).addClass("chos").css("opacity","1"); 
}