# 第5天 和 第6天
日期：2019年7月29日-2019年7月31日
学习用时：3天
进度：6/66

## 学习内容
1. 第一版简历
+ HTML代码
```
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>简历第一版</title>
		<link rel="stylesheet" type="text/css" href="css/resumecss1.css"/>
	</head>
	<body>
		<h1>简历</h1>
		<h2>基本信息</h2>
			<span id="name">姓名 张三</span>  
			<span id="sex">性别 男</span> 
			<span id="position">应聘职位 web前端工程师
		</span>
		<h2>联系方式</h2>
			<span id="phone">手机 12312341234</span>    
			<span id="Email">Email <a href="" title="邮箱">joinefe@baidu.com</a></span>  
			<span id="page">个人主页 <a href="" title="个人主页">GitHub</a></span><
		<h2>能力描述</h2>
		<p>技术能力<br />
			熟练掌握HTML,CSS,JavaScript
		</p>
		<p>综合能力<br />
			良好的沟通，主动积极，努力勤奋
		</p>
		<h2>教育经历</h2>
		<p>本科<br />
			百度前端技术学院小微学院
		</p>
		<p>研究生<br />
			百度前端技术学院大斌学院
		</p>
		<h2>项目经历</h2>
		<p>小度小度<br />
			作为前端工程师角色参与了ABC组件的开发
		</p>
		<p>SAN Doc<br />
			作为文档工程师参与了SAN Doc编写
		</p>
	</body>
</html>

```
+ css代码
```
body{
	font-size: large;
	font-family: "微软雅黑"
	
}
p,span{
	font-size: 1.1em;
	
}
#sex,#position,#Email,#page{
	margin: 0px 50px 0px 50px;
	
}

```
+ 版本效果
![简历版本一效果图](../img/resume1.png)
2. 第二版简历
+ HTML代码
```
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>简历第二版</title>
		<link rel="stylesheet"  href="css/resumecss1.css"/>
		<link rel="stylesheet" href="css/resumecss2.css" />
	</head>
	<body>
		<section>
			<h2>基本信息</h2>
				<span id="name">姓名 张三</span>  
				<span id="sex">性别 男</span> 
				<span id="position">应聘职位 web前端工程师</span>
			<h2>联系方式</h2>
				<span id="phone">手机 12312341234</span>    
				<span id="Email">Email <a href="" title="邮箱">joinefe@baidu.com</a></span>  
				<span id="page">个人主页 <a href="" title="个人主页">GitHub</a></span>
			<h2>能力描述</h2>
			<p>技术能力<br />
				熟练掌握HTML,CSS,JavaScript
			</p>
			<p>综合能力<br />
				良好的沟通，主动积极，努力勤奋
			</p>
			<h2>教育经历</h2>
			<p>本科<br />
				百度前端技术学院小微学院
			</p>
			<p>研究生<br />
				百度前端技术学院大斌学院
			</p>
			<h2>项目经历</h2>
			<p>小度小度<br />
				作为前端工程师角色参与了ABC组件的开发
			</p>
			<p>SAN Doc<br />
				作为文档工程师参与了SAN Doc编写
			</p>
		</section>
		
		<aside>简历</aside>
	</body>
</html>

```
+ css代码
```
section{
	float: right;
	width:75%;
	margin:50px 0px 0px 50px;
	font-size:x-large;
}
aside{
	width: 23%;
	height: 1100px;
	background-color: dodgerblue;
	padding-top: 80px;
	font:bolder  3em/1.5em sans-serif ;
	text-align: center;
	color: #FFFFFF;
}
```
+ 效果
![简历第二版效果图](../img/resume2.png)
3. 第三版
+ HTML代码
```
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>简历第三版</title>
		
		<link rel="stylesheet" href="css/resumecss3.css" />
	</head>
	<body>
		<table >
			<tr id="firstline">
				<th colspan="2" id="firstline">简历</th>
				
			</tr>
			<tr>
				<th>基本信息</th>
				<td>
					<span >姓名 </span> 张三 &nbsp;&nbsp;&nbsp;&nbsp;
					<span >性别 </span>男 &nbsp;&nbsp;&nbsp;&nbsp;
					<span >应聘职位 </span> web前端工程师
				</td>
			</tr>
			<tr>
				<th>联系方式</th>
				<td>
					<span >手机  </span>   12312341234 &nbsp;&nbsp;&nbsp;&nbsp;
					<span >Email </span> <a href="" title="邮箱">joinefe@baidu.com</a> &nbsp;&nbsp;&nbsp;&nbsp;
					<span >个人主页 </span><a href="" title="个人主页">GitHub</a>
				</td>
			</tr>
			<tr>
				<th>能力描述</th>
				<td>
					<span>技术能力</span>
					熟练掌握HTML,CSS,JavaScript
					<br />
					<span>综合能力</span>
					良好的沟通，主动积极，努力勤奋
					
				</td>
			</tr>
			<tr>
				<th>教育经历</th>
				<td>
					<span>本科</span>
						百度前端技术学院小微学院
					<br />
					
					<span>研究生</span>
						百度前端技术学院大斌学院
					
				</td>
			</tr>
			<tr>
				<th>项目经历</th>
				<td>
					<span>小度小度</span>
						作为前端工程师角色参与了ABC组件的开发
					<br />
					<span>SAN Doc</span>
						作为文档工程师参与了SAN Doc编写
					</p>
				</td>
			</tr>
			
		</table>
</html>

```
+ css代码
```
table{
	width: 90%;
	margin: 30px 50px 0px 50px;
	border-collapse: collapse;
	font-size: x-large;
}
th{
	width: 15%;
	height: 130px;
	border: 3px solid #E7E7E7 ;
	background-color:#D6D6D6;
	text-align: center;
}
td{
	height: 130px;
	padding-top: 15px;
	border: 3px solid #E7E7E7;
	text-align: left ;
	font-size: large;
	vertical-align: top;
}
#firstline{
	background-color: #858585;
	padding-left:50px;
	color: #FFFFFF;
	text-align: left;
}
span{
	font-weight: bolder;
}

```
+ 效果图
![简历第三版效果图](../img/resume2.png)
