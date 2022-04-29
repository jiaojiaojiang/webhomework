var p1=document.getElementById('p1');
p1.onclick=function () {
	document.getElementById('p1').style.color='red';
	alert('1');
}
var time=new Date();
var mon=time.getMonth()+1;
var day=time.getDate();
var curdate=time.getFullYear()+'-'+mon+'-'+day;
var p2=document.getElementById('p2');
p2.onclick=function () {
	document.getElementById('date').innerHTML=curdate;
	alert('2');
}
var p3=document.getElementById('p3');
p3.onclick=function (){
	alert('3');
	document.getElementById('m-item').classList.add("fn-active");
}
var p4=document.getElementById('p4');
p4.onclick=function (){
	var del=document.getElementById('p8');
	del.remove();
	alert('4');
}
var p5=document.getElementById('p5');
p5.onclick=function (){
	window.open('http://www.taobao.com');
	alert('5');
}
var p6=document.getElementById('p6');
p6.onclick=function (){
	var p9=document.createElement('li');
	p9.innerHTML='p9';
	var u=document.getElementById('list');
    u.appendChild(p9);
    alert('6');
    
}
var p7=document.getElementById('p7');
p7.onclick=function (){
	var div1=document.getElementById('div1');
	div1.style.width=screen.availWidth;
	alert('7');
}
var p8=document.getElementById('p8');
p8.onclick=function (){
	alert('8');
}
