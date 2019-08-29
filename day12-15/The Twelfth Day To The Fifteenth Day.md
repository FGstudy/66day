# 第12天-第15天
日期：2019年8月13日-2019年8月19日
学习用时：6天
进度：15/66

## 学习内容
1. css去重叠边框
+ 给带有边框的元素设置如下样式margin：0 0 -borderwidth -borderwidth，这里的borderwidth即为边框的宽度
2. 居中
+ margin:0 auto；在不同场景下生效条件如下：
	+ 块级元素：给定要居中的块级元素的宽度。
	+ 行内元素：①设置display:block；②给定要居中的行内元素的宽度。（行内元素设置成块级元素后可以对其宽高进行设置）
	+ 行内块元素：设置display:block。（如input、button、img等元素，自带宽度可以不用设置其宽度）

+ 注：
	+ 可以通过对块级元素设置 text-align：center；的方式来实现内联元素（如文本、图片）居中
	+ ②margin:0 auto;可以使盒子居中，text-align:center;可以使此盒子内的内联元素居中，故有时需要两者结合使用才能使得盒子及其中文本一起居中       文本一起居中。
3. 文字水平+垂直居中
```
.box {
height: 100px;
width: 30%;
text-align:center;//水平居中
line-height:100px;//跟高度一样
}
```
4. 给一张图片加上颜色遮罩
+ 方法一：因为一个div同时设置background-color和background-image的话，color是处于img层下方的，
    所以需要再创建一个div作为他的子div,然后设置子div的背景颜色,代码如下
css代码:
```
.wrap{
    position: relative;
    height: 700px;
    background: url(i/pic4.jpg) no-repeat;
    -webkit-background-size: 100%;
    background-size: 100%;
}
.inner{
    height: 700px;
    background: rgba(0,0,0,.4);
}

html:
<div class="wrap">
    <div class="inner"></div>
</div>
```
+ 方法二:通过after伪元素设置
```
.wrap{
    position: relative;
    height: 700px;
    background: url(i/pic4.jpg) no-repeat;
    -webkit-background-size: 100%;
    background-size: 100%;
}
.wrap:after{
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    background-color: yellow;
    opacity: 0.2;
    z-index: 1;
    width: 100%;
    height: 100%;
}
```
5. 内容超过div的长度后自动出现滚动条的实现方法
```
.div{
  height：80%; //须设置一个合适高度
  overflow:auto;
 }
```
## 任务
1.思路
+ 给整个页面分块，先分为侧边栏和内容区。侧边栏中包括两列，左列是带图标，右列是文字导航。
	内容区先分为上下两个区域，上面是messages头部，下面是主内容区，主内容区再分为左右两列，
	左列是消息概览，右列是详细消息。每列再细分成不同的行
+ 注意任务要求，
	+ 最左侧一列要求自适应浏览器高度，左上面4个按钮相对浏览器左上角固定位置，左下方两个按钮相对浏览器左下角固定位置
	+ 左侧第二列(蓝色背景色)导航列固定宽度，高度也是自适应浏览器高度，最下面的Monthly Goals部分的内容相对浏览器下边固定位置
	+ 整个白色区域自适应宽度，右上方的人脸，名字部分相对浏览器右上角固定位置
	+ 白色区域左侧列固定宽度，右侧列自适应宽度
+ 针对任务要求
	+ 最左侧一列可以设置height：100vh，或者给外层div设置100vh，列的长度再设置100%,按钮设置固定定位
	+ 左侧第二列高度同上，mothly部分同样设置固定定位
	+ 由于左侧两列定宽，整个白色内容区域的宽度可以用计算属性calc设置，右上方的人脸名字用固定定位
	+ 白色区域实现左定宽右适应的两栏式布局，方法很多



## 问题
1. 自适应布局仍不熟练，任务中最右列的内容被遮住了，这不是我想要的效果，但是改不动。。再看一下布局的内容，放一下，回头再改
2. 要学习一下git和GitHub的使用