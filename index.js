window.onload =function(){
//轮播
var banner = function(){ 
	var i = 0
	$("#ban ul").children("li").eq(0).css("background","#fff")
	var ban =setInterval(function(){
		$("#bann").css("left",0);
		$("#bann").animate({left:-1190},1000)
		var $new = $("#ban img").eq(0).clone();
		$("#ban img").eq(0).detach()
		$("#bann").append($new)
			if(i==3){
				i=0
			}else{
				i++
			}
		$("#ban ul").children("li").eq(i).css("background","#fff")
										.siblings().css("background","#ccc")
	},3000)
	$(".ban_right").click(function(){
		
	})
	$(".ban_left").click(function(){
		
	})
}
banner();
//logo背景图片位置
var logoImg = function(){
	var libox = document.getElementById("allLogo").children
	for(var n = 0 ; n < libox.length;n++){
		libox[n].style.backgroundPositionX = -parseInt(n/4)*150+"px";
		libox[n].style.backgroundPositionY = parseInt(n%4)*80+"px";
	
	}
}
logoImg();
//轮播区域标题的选项卡
$(".navCon").mouseenter(function(){
	$("#navinfo").css("display","block")
}).mouseleave(function(){
	$("#navinfo").css("display","none")
})
//品牌logo合集的鼠标划入效果
$("#allLogo li").mouseenter(function(){
		$("#allLogo li").children("span").removeClass("active")
		$(this).children("span").addClass("active")
	}).mouseleave(function(){
		$("#allLogo li").children("span").removeClass("active")
	})
	//猜你喜欢的ajax
	$.ajax({
		type:"get",
		url:"js/index_pro.json?_id="+new Date().getTime(),
		async:true,
		success:function(res){
			console.log(res)
			alert();
		var str = "";
		for(var i in res){
			if(res[i].name=="猜你喜欢"){
			 for(var j in res[i].list){
				var pr1o =res[i].list[j];
				str +=`<li>
					<img src="img/guessyoulike/${pro.src}"/>
					<p class="ename">${pro.ename}</p>
					<p class="name">${pro.name}</p>
					<p class="price">${pro.price}</p>
				</li>`
			 }
			 break;
			}
		}
		$("#guess ul").html(str);
		}
	});
}
