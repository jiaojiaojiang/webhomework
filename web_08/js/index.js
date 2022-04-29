document.querySelectorAll(".m-menu>li").forEach((item,i)=>{
	item.addEventListener('click',()=>{
		document.querySelectorAll(".m-bd>div")[i].class=''
		document.querySelectorAll(".m-bd>div")[i].classList.add('sel')
	    if(i>=1){
	    	document.querySelectorAll(".m-bd>div")[i-1].classList.remove('sel')
	    }
	})
})
// jquery实现1.1
$(".pimg").click(function(){
	var src=$(this).attr('src');
	$("#bigimg").css("display","block");
	$("#bigi").attr("src",src);
	
})
$("body").click(function(e){
		if(!$(e.target).closest(".pimg","#bigi","#bigimg").length){
               $("#bigimg").hide();
		}
})
// 原生js实现1.2
document.querySelectorAll(".pimgs").forEach((item,i)=>{
	  item.addEventListener('click',()=>{
      var src=document.querySelectorAll(".pimgs")[i].getAttribute("src");
      var imgsrc=document.getElementById("bigis").setAttribute("src",src);
      var d=document.getElementById("bigimgs").style.display = "block";
})    
 })
document.addEventListener('click',(e)=>{
var big = document.getElementById('bigimgs');
var bigimg = document.getElementsByClassName('pimgs');
if(e.target.id=="bigimgs" ||e.target.className=="pimgs"){
}else{
document.getElementById("bigimgs").style.display = "none";
}
})
// jquery实现2.1
$(function() {
            $(".s-tif div").click(function() {
                $(this).addClass("current").siblings().removeClass("current");
                var index = $(this).index();
                $(".s-con .ite").eq(index).show().siblings().hide();
            });
})
// 原生js实现2.2
var title = document.querySelector('.s-tit');
var lis = title.querySelectorAll('div');
var items = document.querySelectorAll('.item');
for (var i = 0; i < lis.length; i++) {
				lis[i].setAttribute('index', i);
				lis[i].onclick = function () {
					for (var i = 0; i < lis.length; i++) {
						lis[i].className = '';
					}
					this.className = 'current';
					var index = this.getAttribute('index');

					for (var i = 0; i < items.length; i++) {
						items[i].style.display = 'none';
					}

					items[index].style.display = 'block';
}
}
//jquery实现3.1
$(".delete").click(function(){
		$(".hide").hide();
})

//原生js实现3.2
var del=document.querySelector(".del");
del.onclick = function(){
        document.getElementById("hid").style.display = 'none';
}