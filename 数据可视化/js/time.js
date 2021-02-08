 var t=null;
 t=setInterval(time,1000)
 function time()
 {
 	var dt=new Date();
 	var y=dt.getFullYear();
 	var mt=dt.getMonth()+1;
 	var day=dt.getDay()+3;
 	var h=dt.getHours();
 	var m=dt.getMinutes()
 	var s=dt.getSeconds();
 	document.querySelector("#showtime").innerHTML="当前时间 :"+y+"年"+mt+"月"+day+"日"+h+"小时"+m+"分"+s+"秒";
 }
time()