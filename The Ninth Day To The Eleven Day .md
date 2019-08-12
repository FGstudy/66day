# 第9天-第11天
日期：2019年8月6日-2019年8月12日
学习用时：6天
进度：11/66

## 学习内容
### 切图
1. 传统切图
+ 使用参考线，将需要切出的图标分割好
+ 使用裁剪工具里面的切片工具，找到我们刚才用参考线包裹的图标，鼠标从图标左上角一直拖到右下角，直到选中图标，其他图标同理
+ 选完后，"文件"---“导出”-----“存储为web所用格式”
+ 在出现的窗口中，先调整缩放比例，让整个图片都在窗口显示在窗口中，从左上角一直拖到右下角，选中所有切片
+ 在窗口右上角可选择PNG-24格式，然后保存，保存时选择所有用户切片

2. 切单个图标
+ 选择移动工具，注意左上角勾选自动选择，选择图层
+ 点击要切的图标，看右侧的图层，一般图标有两个部分组成，这两个图层会被放到一个组里
+ 在组名上右键，选择“转换成智能对象”，这两个图层就会合并成一个图层
+ 在合并后的图层上右键，选择“编辑内容”，点击确定，图标就被提取出来了
+ 在出来的图标文件上选择左上角“文件”----“存储为”---选择想要的格式并保存

3. 自动化切图
+ 打开文件后，选择“编辑”----“首选项”----“增效工具”，在出来的窗口勾选“启用生成器”，点击确定
+ 重启PS软件，重新打开文件，选择“文件”---“生成”---“图像资源”
+ 用移动工具选择我们要的图标，图层会相应选中，修改组名的后缀名可以将图标保存成相应的图片文件
+ 图片文件会放在存放PSD文件的地方，如果将组名修改成原来的样子，图标文件会消失

4. 精准切图
+ “文件”----“导出”----“将图层导出到文件”

5. 切单个图标
+ 选中图标所在图层，右键该图层，转换成智能对象
+ 选中矩形或其他选择工具，将所需图标部分选中，选中区域不需要紧贴图标边缘
+ 先按ctrl+c，再按ctrl+n创建一个剪切文件，创建后会跳转到该文件，然后Ctrl+v粘贴刚刚的图标，
+ 存储文件，“文件”---“存储为”----选PNG格式

6. 切背景图片
+ 选中图标所在图层，选中矩形或其他选择工具，将所需部分选中
+ “图像”----“裁剪”
+ “文件”-----“导出”----“导出为web格式”

### 从psd-HTML
1. 样式文件和初始化
+ 一个普通HTML项目文件夹下会包括一个css文件夹，JS文件夹，img文件夹，HTML文件
+ css文件夹下包括三个基本css文件：reset.css,common.css,index.css
	+ reset.css是用来重置HTML标签默认属性,
	HTML中绝大部分标签元素在网页显示中都有一个默认属性值，通常为了避免重复定义元素样式，需要进行重置默认样式（CSS Reset）
		+ 放一个还不错的reset.css
```
*
KISSY CSS Reset
理念：清除和重置是紧密不可分的
特色：1.适应中文 2.基于最新主流浏览器
维护：玉伯(lifesinger@gmail.com), 正淳(ragecarrier@gmail.com)
*/

/* 清除内外边距 */
body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, /* structural elements 结构元素 */
dl, dt, dd, ul, ol, li, /* list elements 列表元素 */
pre, /* text formatting elements 文本格式元素 */
fieldset, lengend, button, input, textarea, /* form elements 表单元素 */
th, td { /* table elements 表格元素 */
    margin: 0;
    padding: 0;
}

/* 设置默认字体 */
body,
button, input, select, textarea { /* for ie */
    /*font: 12px/1 Tahoma, Helvetica, Arial, "宋体", sans-serif;*/
    font: 12px/1 Tahoma, Helvetica, Arial, "\5b8b\4f53", sans-serif; /* 用 ascii 字符表示，使得在任何编码下都无问题 */
}

h1 { font-size: 18px; /* 18px / 12px = 1.5 */ }
h2 { font-size: 16px; }
h3 { font-size: 14px; }
h4, h5, h6 { font-size: 100%; }

address, cite, dfn, em, var { font-style: normal; } /* 将斜体扶正 */
code, kbd, pre, samp, tt { font-family: "Courier New", Courier, monospace; } /* 统一等宽字体 */
small { font-size: 12px; } /* 小于 12px 的中文很难阅读，让 small 正常化 */

/* 重置列表元素 */
ul, ol { list-style: none; }

/* 重置文本格式元素 */
a { text-decoration: none; }
a:hover { text-decoration: underline; }

abbr[title], acronym[title] { /* 注：1.ie6 不支持 abbr; 2.这里用了属性选择符，ie6 下无效果 */
    border-bottom: 1px dotted;
    cursor: help;
}

q:before, q:after { content: ''; }

/* 重置表单元素 */
legend { color: #000; } /* for ie6 */
fieldset, img { border: none; } /* img 搭车：让链接里的 img 无边框 */
/* 注：optgroup 无法扶正 */
button, input, select, textarea {
    font-size: 100%; /* 使得表单元素在 ie 下能继承字体大小 */
}

/* 重置表格元素 */
table {
    border-collapse: collapse;
    border-spacing: 0;
}

/* 重置 hr */
hr {
    border: none;
    height: 1px;
}

/* 让非ie浏览器默认也显示垂直滚动条，防止因滚动条引起的闪烁 */
html { overflow-y: scroll; }
```
	+ common.css设置公共样式，比如系列网页中头部和脚部一般变动不大的部分
	+ index.css设置独立样式





## 扩展知识
1. 什么时候用section或div
+ section不是通用容器元素。如果仅仅是用于设置样式或脚本处理，应用div元素。
+ 一条简单的准则是，只有元素内容会被列在文档大纲中时，才适合用section元素。
2.  text-align 和 vertical-align 属性
+ text-align 属性规定元素中的文本的水平对齐方式。该属性通过指定行框与哪个点对齐，从而设置块级元素内文本的水平对齐方式。
    通过允许用户代理调整行内容中字母和字之间的间隔，可以支持值 justify；不同用户代理可能会得到不同的结果。
	属性值可能为：left，right，center，justify（两端对齐），inherit
+ vertical-align 属性设置元素的垂直对齐方式。
	属性值可能为：baseline，sub，super，top，text-top，middle，bottom，text-bottom，length，%，inherit
	该属性定义行内元素的基线相对于该元素所在行的基线的垂直对齐。允许指定负长度值和百分比值。
	这会使元素降低而不是升高。在表单元格中，这个属性会设置单元格框中的单元格内容的对齐方式。
3. text-overflow 
+ 属性规定当文本溢出包含元素时发生的事情。
+ 属性值为clip时，修建文本
+ 属性值为ellipsis时，显示省略符号来代表被修剪的文本
+ 属性值为string时，使用给定的字符串来代表被修剪的文本。
4. white-space 
+ 属性设置如何处理元素内的空白
|normal	|默认。空白会被浏览器忽略。|
|pre		|空白会被浏览器保留。其行为方式类似 HTML 中的 <pre> 标签。		|
|nowrap		|文本不会换行，文本会在在同一行上继续，直到遇到 <br> 标签为止。	|
|pre-wrap	|保留空白符序列，但是正常地进行换行。							|
|pre-line	|合并空白符序列，但是保留换行符。								|
|inherit	|规定应该从父元素继承 white-space 属性的值。					|
5. font-size:0的作用
+ 这是像素级还原设计稿很有用的设置，因为元素节点有文本节点，在缩进代码时会占据宽度，就是元素间有间距，可以用它来消除
6. background-position: 0 10px是指背景图片水平方向不动，垂直方向向下移动10个px。
	background-position：后面有会两个属性，第一个是指水平的位置，第二个是垂直方向的位置。
	以图片的左上角顶点为原点，属性值为正往就代表图片下移或右移，属性值为负往就代表图片上移或左移。

7. Float属性不会默认继承，而不是不可以继承。
8. display几个常用的属性值
+ inline
	+ 使元素变成行内元素，拥有行内元素的特性，即可以与其他行内元素共享一行，不会独占一行. 
	+ 不能更改元素的height，width的值，大小由内容撑开. 
	+ 可以使用padding上下左右都有效，margin只有left和right产生边距效果，但是top和bottom就不行.
+ block
	+ 使元素变成块级元素，独占一行，在不设置自己的宽度的情况下，块级元素会默认填满父级元素的宽度. 
	+ 能够改变元素的height，width的值. 
	+ 可以设置padding，margin的各个属性值，top，left，bottom，right都能够产生边距效果.
+ inline-block
	+ 结合了inline与block的一些特点，结合了上述inline的第1个特点和block的第2,3个特点.
9. backface-visibility属性
+ backface-visibility 属性定义当元素不面向屏幕时是否可见。
+ 	|值	|描述|
	|visible|背面是可见的。		|
	|hidden	|背面是不可见的。	|
10. background: rgba(0,0,0,0.6);
+ background-color:rgba(212,0,0,0.2); RGB Red Green Bule 3色!及212, 0, 0 三色的值混合.最后一个参数.0.2 则是指的透明度!1为100% 不透明!
11. opacity: 0;
+ Opacity属性设置一个元素透明度级别。值为0-1，从透明到不透明