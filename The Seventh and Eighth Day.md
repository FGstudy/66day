# 第7天 和 第8天
日期：2019年8月1日-2019年8月5日
学习用时：5天
进度：8/66

## 学习内容
### 布局杂记
1. 将内联元素设置为块级元素的css规则是display：block；
2. 定位--position属性，
+ 静态定位，position：static；默认定位，正常流布局
+ 相对定位，position：relative；要结合top，bottom，left，right属性使用，指定要将定位元素移动到的位置，
    注意偏移的位置是相对于原来该元素正常的位置而言， 并且在使用相对定位时，就算元素被偏移了，但是他仍然占据着它没偏移前的空间
	同时，它的偏移也不会把别的块从文档流中原来的位置挤开，如果有重叠的地方它会重叠在其它文档流元素之上
+ 绝对定位，position：absolute；要结合top，bottom，left，right属性使用，这几个属性指定元素应距离每个包含元素的边的距离
    绝对定位的元素不再存在于正常布局流当中，
	如果所有的父元素都没有显式定义position属性，那么绝对定位元素会被包含在初始块容器（HTML外，跟浏览器窗口一样大）里
	如果绝对定位元素的父元素定义了position属性，那么绝对定位元素现在相对于body元素
+ 固定定位，position：fixed；要结合top，bottom，left，right属性使用，固定定位元素相对于浏览器窗口本身
+ 粘性定位，position：sticky；相对定位和固定定位的混合，允许定位元素像它被相对定位一样动作，知道滚动到某一值时固定
3. z-index，网页上有一个z轴，从屏幕到用户脸上，z-index影响定位元素在该轴上的位置，正值向上，负值向下
4. 弹性盒子，display:flex;
+ 应用：
	+ 在父内容里面垂直居住一个块内容
	+ 使容器的所有子项占用等量的可用宽度/高度，而不管有多少宽度/高度可用
	+ 使多列布局的所有列采用相同的高度，即使他们包含的内容量不同
+ 弹性盒子的一些属性
	+ flex-direction：row；默认是row 会排成一行，也可以设置属性值为column，这会排成一列，属性值row-reverse或column-reverse会反向排列
	+ flex-wrap：wrap；换行，当盒子内子元素太多会溢出时使用
	+ flex-direction和flex-wrap可以合并起来，替换属性为flex-flow，例如上面两个就可以写为，flex-flow：row wrap；
	+ 动态尺寸，flex：1；如果对某个元素的flex设置一个无单位的比例值，例如为1时，表示每个元素占用空间相等，占用的空间是在设置内外边距之后剩余的空间
	+ flex是一个可以指定最多三个不同值的缩写属性，
	  	+ 第一个值为上例的无单位比例，这个值可以单独指定全写为flex-grow属性的值
		+ 第二个值同样为无单位比例，用于溢出容器的flex项，也可以全写为flex-shrink，指定从每个flex项中取出多少溢出量
		+ 第三个值为flex项可用空间最小值，可以单独指定全写flex-basis属性的值
	+ align-items属性，默认值为stretch，使所有flex项沿着交叉轴的方向拉伸以填充父容器，如果父容器在交叉轴方向上没有固定高度，所有flex项高度保持一致
		+ 值为center，使flex项包吃原有的高度，但在交叉轴居中
		+ 值为flex-start或flex-end，可以使flex项在交叉轴的开始或者结束处对齐所有的值
		+ align-self属性会覆盖align-items的行为
	+ justify-content属性控制flex项在主轴上的位置
		+ 默认值为flex-start，使所有flex项都位于主轴的开始处
		+ 值为flex-end，使所有flex项都位于主轴的末尾处
		+ 值为center，使flex项居中
		+ 值为space-around，使所有flex项沿着主轴均匀分布，在任意一端都会留有一点空间
		+ 值为space-between，类似space-around，只是不会在两端留下空间
	+ 排序，order属性，默认值为0，order值大的flex项比小的在显示顺序更靠后，相同order值的flex项按源顺序显示
5. 网格布局，依据水平和垂直线来排列元素，在页面之间移动元素不会跳动或更改宽度
+ 通常具有列（column），行（row），以及沟槽（每行和列之间的间隙）
+ 利用浮动创建网格 ，[示例网址](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/CSS_layout/Grids)
	浮动网格限制：网格中列的数量太多，末端的可能会移动到下一行，打破布局；元素内容太多可能会溢出；它基本上是一维的，只能跨多个列，不能跨多个行
+ 将固定宽度变为百分比的公式：目标宽度 / 父元素的宽度 = 目标百分比的小数形式
+ calc()函数，允许插入简单的数学方程到css值，例如在网格中想要某列跨4列，每列宽度为6.25%，沟槽宽度为2.083333%，
	width：calc((6.25%*4) + (2.08333%*3));
+ flexbox网格，[示例网址](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/CSS_layout/Grids)
	Flexbox是一维设计。它处理单个维度，即行或列。不能为列和行创建严格的网格，这意味着如果我们要为网格使用flexbox，我们仍然需要为浮动布局计算百分比。
+ 网格框架，流行的框架如Bootstrap和Foundation包括一个网格系统。还有独立的网格系统，使用CSS或使用预处理器开发。
+ 本地网格，我们可以使用display 属性的 grid 值声明一个网格，使用 grid-gap 设置网格的间隔，
	然后使用grid-template-columns 属性、 repeat() 函数和 fr 单位——这个为网格布局定义的单位——创建一个12列等宽的网格。
	fr单元是一小部分单元-它描述在网格容器的可用空间的一小部分
	例如：display: grid;
		 grid-template-columns: repeat(12, 1fr);
		 grid-gap: 20px;
	跨越网格上的多个列或行可以使用grid-column或者grid-row属性，例如跨6列：grid-column: auto / span 6;
6. 使用 max-width 替代 width 可以使浏览器更好地处理小窗口的情况
7. 设置一个元素为 box-sizing: border-box; 时，此元素的内边距和边框不再会增加它的宽度
8. BFC(block formatting context)块级格式化上下文，BFC是一个独立的布局环境，其中的元素布局是不受外界的影响，并且在一个BFC中，块盒与行盒（行盒由一行中所有的内联元素所组成）都会垂直的沿着其父元素的边框排列。
+ 一个HTML元素要创建BFC，则满足下列的任意一个或多个条件即可：
    + float的值不是none。
    + position的值不是static或者relative。
    + display的值是inline-block、table-cell、flex、table-caption或者inline-flex
    + overflow的值不是visible
+ 副作用：
	+ display: table 可能引发响应性问题
	+ overflow: scroll 可能产生多余的滚动条
	+ float: left 将把元素移至左侧，并被其他元素环绕
	+ overflow: hidden 将裁切溢出元素 
9. 圣杯布局，三列左右栏固定中间栏边框自适应的网页布局，[圣杯布局示例](https://blog.csdn.net/wangchengiii/article/details/77926868)
10. 双飞翼布局，圣杯布局和双飞翼布局解决的问题是一样的，就是两边顶宽，中间自适应的三栏布局，中间栏要在放在文档流前面以优先渲染。
	不同在于解决”中间栏div内容不被遮挡“问题的思路不一样：
	+ 圣杯布局，为了中间div内容不被遮挡，将中间div设置了左右padding-left和padding-right后，将左右两个div用相对布局position: relative并分别配合right和left属性，以便左右两栏div移动后不遮挡中间div。
	+ 双飞翼布局，为了中间div内容不被遮挡，直接在中间div内部创建子div用于放置内容，在该子div里用margin-left和margin-right为左右两栏div留出位置。

### 动画初步
1. 用css做动画轮播
+ animation属性，所有动画属性的简写属性，用于设置6个动画属性
	+ animation-name：规定需要绑定到选择器的keyframe名称
	+ animation-durantion：规定完成动画所花费的时间，以秒或毫秒计
	+ animation-timing-function：规定动画的速度曲线。
	+ animation-delay：规定在动画开始之前的延迟。
	+ animation-iteration-count：规定动画应该播放的次数。
	+ animation-direction：规定是否应该轮流反向播放动画。
+ @keyframes：创建动画（将一套css样式逐渐变化为另一套样式）
	+ 语法：@keyframes animationname（动画名称）{
				keyframes-selector{css-styles}
			}
	+ keyframes-selector：必需，规定动画时长的百分比，合法的值0-100%，from（与 0% 相同），to（与 100% 相同）
	+ css-styles：必需，一个或多个合法的css样式属性
	+ 示例
```
	<!DOCTYPE html>
		<html>
		<head>
		<style> 
		div
		{
			width:100px;
			height:100px;
			background:red;
			position:relative;
			animation:mymove 5s infinite;
			-moz-animation:mymove 5s infinite; /* Firefox */
			-webkit-animation:mymove 5s infinite; /* Safari and Chrome */
			-o-animation:mymove 5s infinite; /* Opera */
		}

		@keyframes mymove
		{
			0%   {top:0px;}
			25%  {top:200px;}
			75%  {top:50px}
			100% {top:100px;}
		}

		@-moz-keyframes mymove /* Firefox */
		{
			0%   {top:0px;}
			25%  {top:200px;}
			75%  {top:50px}
			100% {top:100px;}
		}

		@-webkit-keyframes mymove /* Safari and Chrome */
		{
			0%   {top:0px;}
			25%  {top:200px;}
			75%  {top:50px}
			100% {top:100px;}
		}

		@-o-keyframes mymove /* Opera */
		{
			0%   {top:0px;}
			25%  {top:200px;}
			75%  {top:50px}
			100% {top:100px;}
		}
		</style>
		</head>
		<body>

		<p><b>注释：</b>本例在 Internet Explorer 中无效。</p>

		<div></div>

		</body>
		</html>
```
## 作业
1. HTML代码
```
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>第七天-第八天</title>
		<link rel="stylesheet" href="css/layout-homework-css.css" />
	</head>
	<body>
		<header >
			<h1 >Logo</h1>
			<nav id="head-nav">
				<ul>
					<li><a href="" >Github</a></li>
					<li><a href="" >Register</a></li>
					<li><a href="" >Login</a></li>
				</ul>
			</nav>
		</header>
		<section id="banner">
			<nav id="banner-nav">
				<ul>
					<li> <a href="">1</a></li>
					<li> <a href="">2</a></li>
					<li> <a href="">3</a></li>
					<li> <a href="">4</a></li>
				</ul>
			</nav>
		</section>
		<section>
			<nav id="mid-nav">
				<ul>
					<li> <a href="">HOME</a></li>
					<li> <a href="">PROFILE</a></li>
					<li> <a href="">ABOUT</a></li>
				</ul>
			</nav>
			<div class="container">
				<div class="row">
					<div >This is content1</div>
					<div >This is content2</div>
					<div >This is content3</div>
				</div>
				<div class="row">
					<div >This is content4</div>
					<div >This is content5</div>
					<div >This is content6</div>
					<div >This is content7</div>
				</div>
				<div class="row">
					<div >This is content8</div>
					<div >This is content9</div>
					<div >This is content10</div>
				</div>
			</div>
		</section>
		<footer>©2019 ife.baidu.com</footer>
		
	</body>
</html>

```
2. css代码
```
header {
	width: 960px;
	height:70px;
	background-color:#333333;
	margin: 0 auto;
}

h1 {
	color: white;
	margin-left: 200px;
	padding-top: 10px;
}

#head-nav {
	margin: -70px 0px 0px 700px;

}

 ul {
	padding-left:0;
	margin-top:0;
}

li {
	float: left;
	list-style-type: none;
	width: 80px;
}

li a {
	
	display: inline-block;
	text-decoration: underline;
	color: white;
	text-align:center;
}

#banner {
	width:960px;
	height:250px;
	background-color:#66BB33;
	margin: 0 calc((100% - 960px)/2);
	float:left;
	
	
}
#banner ul {
	margin: 190px 0px 0px 700px;
}

#banner li {
	width:50px;
}

#banner li a {
	width:30px;
	height:35px;
	text-decoration:none;
	border: 1px solid black;
	background-color: #B2DD99;
	padding-top: 10px;
	color: black;
}
#banner li a:hover, #banner li a:focus {
	height:45px;
	background-color:#E0F1D6 ;
}

#mid-nav ul {
	width: 960px;
	height: 60px;
	border-bottom: 3px solid #EEEEEE;
	clear: both;
	margin: 0 auto;
	color: #000000;
}


#mid-nav li{
	margin: 20px 0px 0px 100px;
	width: 70px;
	height: 25px;
	border-top: 2px solid #EEEEEE;
	border-left: 2px solid #EEEEEE;
	border-right: 2px solid #EEEEEE;
	border-top-left-radius: 15px;
	border-top-right-radius: 15px;
	padding: 15px 0px 0px 18px;
	float: left;
}

#mid-nav li:nth-child(2),
#mid-nav li:nth-child(3) {
	margin: 20px 0px 0px 0px;
	background-color: #EEEEEE;
}

#mid-nav a {
	color: #000000;
	text-decoration: none;
}
.container {
	width: 960px;
	margin: 10px auto;
	
}
.row {
	display: flex;
	width: 770px;
	margin: 0 auto;
	
}

.row div{
	width: calc(770px/3);
	height: 100px;
	border: 3px solid #EEEEEE ;
	margin: 10px 0px 0px 10px;
	text-align: center;
	padding-top:calc(150px/2) ;
}

footer {
	width: 960px;
	height: 70px;
	background-color: #666666;
	color: white;
	text-align: center;
	margin: 0 auto;
}



```
3.毛病一堆，等熟练一点了再重构