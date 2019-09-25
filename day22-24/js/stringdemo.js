var p = document.getElementById("result");


//获取当前选中输入的内容长度
function getLength(){
	var text = selected(true);
	p.innerHTML= event.target.innerHTML + "是"+ text.length;
}
//当前选中输入中的第3个字符
function char3(){
	var text = selected(true);
	p.innerHTML= event.target.innerHTML + "是" + text.charAt(2);
}
//把两个输入框的文字连接在一起输出
function connect(){
	var stra = document.getElementById("str-a").value;
	var strb = document.getElementById("str-b").value;
	var context = stra.concat(strb);
	p.innerHTML= event.target.innerHTML + "是" + context;
}
//输入B中的内容，在输入A的内容中第一次出现的位置
function first(){
	var stra = document.getElementById("str-a").value;
	var strb = document.getElementById("str-b").value;
	var index = stra.indexOf(strb);
	p.innerHTML= event.target.innerHTML + "是第" + (index + 1) + "个位置";
}
//输入A中的内容，在输入B的内容中最后一次出现的位置
function last(){
	var stra = document.getElementById("str-a").value;
	var strb = document.getElementById("str-b").value;
	var index = strb.lastIndexOf(stra);
	p.innerHTML= event.target.innerHTML + "是第" + (index + 1) + "个位置";
}
//使用slice获取选中输入框内容的部分内容，参数为num-a及num-b
function parttext(){
	var numa = document.getElementById("num-a").value;
	var numb = document.getElementById("num-b").value;
	var seltext = selected(true).slice(numa,numb);
	p.innerHTML= event.target.innerHTML + "是" + seltext;
}

//当前选中输入框的行数,注意有手动换行和自动换行,自动换行未解决
function getLine(){
	var text = selected(true);
	var line = text.split(/\r*\n/);
	p.innerHTML= event.target.innerHTML + "是" +line.length;
}
// 使用substr获取选中输入框内容的子字符串，参数为num-a及num-b
function subtext(){
	var numa = document.getElementById("num-a").value;
	var numb = document.getElementById("num-b").value;
	var seltext = selected(true).substr(numa,numb);
	p.innerHTML= event.target.innerHTML + "是" + seltext;
}
//把所选输入框中的内容全部转为大写
function uper(){
	var text = selected(true);
	p.innerHTML= event.target.innerHTML + "是" + text.toUpperCase();
}
//把所选输入框中的内容全部转为小写
function lower(){
	var text = selected(true);
	p.innerHTML= event.target.innerHTML + "是" + text.toLowerCase();
}
//把所选输入框中内容的半角空格全部去除
/*
半角：一个英文空格，正则表达式： /(^\s*)/g         /g  表示全部的半角，Unicode编码 32
全角：两个英文空格，正则表达式： /(\s*$)/g       /g  表示全部的全角，Unicode编码 12288
*/
function totrim(){
	var text = selected(true);
	text = text.replace(/(^\s*)/g,"");
	p.innerHTML= event.target.innerHTML + "是" + text;
}
//把所选输入框中内容的a全部替换成另外一个输入框中的内容
function change(){
	var seltext = selected(true);
	var untext = selected(false);
	var result = seltext.replace(/a/g,untext);
	p.innerHTML= event.target.innerHTML + "是" + result;
}

//取出当前选中
function selected(flag){
	var list = document.getElementsByName("str-obj");
	for(var i = 0; i < list.length; i++){
		if(flag){
			if(list[i].checked){
				var text = document.getElementById("str-"+list[i].value).value;
				return text;
			}
		}else{
			if(!list[i].checked){
			var text = document.getElementById("str-"+list[i].value).value;
			return text;
		}
		}
		
	}
}


//给button加id,并绑定点击事件,利用事件委托机制进行绑定
var but = document.getElementsByTagName("button");
var btnparent = but[0].parentNode;
EventUtil.addHandler(btnparent,"click",function(event){
	event = EventUtil.getEvent(event);
	var target = EventUtil.getTarget(event);
	
	switch(target){
		case but[0]:
			getLength();
			break;
		case but[1]:
			char3();
			break;
		case but[2]:
			connect();
			break;
		case but[3]:
			first();
			break;
		case but[4]:
			last();
			break;
		case but[5]:
			parttext();
			break;
		case but[6]:
			getLine();
			break;
		case but[7]:
			subtext();
			break;
		case but[8]:
			uper();
			break;
		case but[9]:
			lower();
			break;
		case but[10]:
			totrim();
			break;
		case but[11]:
			change();
			break;
		
	}
});
