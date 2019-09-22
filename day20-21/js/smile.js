// 每隔100毫秒,移动一次背景图片位置,依据当前位置进行判断y坐标是该减还是该加
var numY = 0;
var flag = true;
var gif = document.getElementById("gif");
setInterval(function(){
	
	if(flag){
		numY -= 480;
		gif.style.backgroundPositionY = numY + "px";
		if(numY <= -7680){ // -8160+480 = -7680，如果是到-8160会有个白屏瞬间
			flag = false;
		}
	}else{
		numY += 480;
		gif.style.backgroundPositionY = numY + "px";
		if(numY >= 0){
			flag = true;
		}
	}
	
},100);