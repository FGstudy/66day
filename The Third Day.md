#第三天
日期：2019.7.23-2019.7.27
学习用时：5天
完成进度：3/66

##学习内容
1. 给简历简单增加样式，利用css表格布局，将简历页面分为两栏
2. HTML代码如下：
```
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>奥特曼的简历</title>
		<link rel="stylesheet" href="css/resume.css" />
	</head>
	<body >
		<div id="tablecontainer">
			<div id="tablerow">
				<div id="leftcell"></div>
				<div  id="rightcell">
					<h1  >个人简历</h1>
					<section id="baseinfo">
						<table>
							<tr>
								<td><b>姓名：</b>奥特曼</td>
								<td><b>性别：</b>男</td>
								<td><b>年龄：</b>2万岁</td>
								<td rowspan="3">
									<img src="img/outman.jpeg" alt="outmanimg" > </td>
							</tr>
							<tr>
								<td><b>学历：</b>博士</td>
								<td><b>电话：</b>10000000000</td>
								<td><b>邮箱：</b>woshi@outman.com</td>
							</tr>
							<tr>
								<td colspan="4" ><b>个人网站：</b>https://baike.so.com/doc/4994149-24803767.html</td>
							</tr>
						</table>
						<hr >
					</section>
					
					<section id="basetech">
						<h3>技能树（10分为满分）：</h3>
							<strong>格斗能力</strong>（8分）--超级手刀、超级霞斩、超级投摔、光线白刃取<br>
							<b>光线能力</b>（9分）--斯派修姆光线、八分光轮、七彩斯派修姆光线、究极斯派修姆光线<br>
							特殊能力（7分）--奥特念力、奥特屏障、奥特水流
						<br />
						<hr >
					</section> 
					
					<section id="experience">
						<h3>学习经历：</h3>M78星云光之国奥特学校 打怪兽学
						<h3>工作经历：</h3>
						<ul>
							<li>
								<p><b>19XX年X月-至今 光之国宇宙警备队  银河系局长</b></p>
								主要负责银河系内安全问题，维护宇宙生态和平，粉碎星际侵略战争无数，拯救亿万生命安全....（实在编不下去了）
							</li>
							<li>
								<p><b>19XX年X月-19XX年X月 科学特搜队  日本支队队员</b></p>
								任职期间与地球人早田进合体守卫地球，在怪兽入侵地球战斗中担任主力角色，击毙大小怪兽39个（其中包括百慕拉，巴尔坦星人、
								哥莫拉、安东拉、加勃拉等巨型怪兽），阻挡了20次以上能使地球灭亡的怪兽进攻，使得地球人存活几率上升50%，
								与地球人建立了深厚的联系，多次获得“最受地球人喜爱奥特曼”奖。
							</li>
						</ul>
						<h3>项目经历：</h3>		 
						<ul>
						<li>
							<p><b>大战哥莫拉</b></p>
							一亿五千万年前开始沉睡的恐龙哥莫拉龙被邪恶的人类强制唤醒而发狂，
							又因为冲击找回了原本的战斗本能，在大阪市内大肆破坏。
							在第一次战斗中，因哥莫拉强大的战斗力而无法打倒它，让它逃逸。后来它又被科学特搜队的马尔斯133和蜘蛛枪的攻击切断尾巴。
							发生第二次战斗，在科学特搜队和自卫队的掩护攻击中，将哥莫拉头角打断，它受到斯派修姆光线攻击而死亡。
						</li>
						<li>
							<p><b>大战百慕拉</b></p>
							宇宙怪兽百慕拉在被押送往怪兽墓场的路上逃跑，我在追击百慕拉的过程中来到地球。因意外将自己的生命赋予了早田，实现与地球人的合体。
							借助科学特搜队的力量，用S16潜水艇攻击使百慕拉浮出水面，与早田进合体后与百慕拉展开肉搏战，最终大获全胜。
						</li>
						<li>
							<p><b>大战巴尔坦星人</b></p>
							20多亿巴尔坦星人企图发动对地球的侵略，将地球占为己有。我与巴尔坦星人展开一番大战，粉碎了他们的野心，
							逃跑后的巴尔坦星人只想报仇，他们袭击毛利博士的飞船欧多利号，试图趁机进攻地球，面对巴尔坦星人的狼子野心，
							我使用瞬间移动，迅速赶回地球与巴尔坦星人作战，最终用八分光轮和斯派修姆光线打倒了巴尔坦二代！
						</li>
						</ul>
					</section>
				</div>
			</div>
		</div>
	</body>
</html>

```
3. css代码如下：
```
#tablecontainer{
	display: table;
	border-spacing: 10px;
}
#tablerow{
	display: table-row;
}
#leftcell{
	display: table-cell;
	background-color: darkslateblue;
	width:300px ;
	height: 1100px;
	
}
#rightcell{
	display: table-cell;
	position: absolute;
	top:30px;
	left:400px;
	width: 1000px;
	font:mediun/20px sans-serif;
}
h1{
	text-align: center;
}
table{
	width: 900px;
	font-size: 1.15em;

}
```

###其他学习
这几天陆陆续续把first head HTML 与 css 看完 ，不过缺少联系啊，要把百度前端学院的练习补回来了