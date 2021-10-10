/* 网站配置 */
var domain = "https://6688.xxx"; //域名
var appName = "飞花视频"; //APP名称
var appUrl = "https://xz.paledwx.com/down/config/qingguo_1_0_fcac8379abc8793a980e54ff7999cf0114.mobileconfig?url=https://f.pch3366.com','https://xz.paledwx.com/apk/embedded.mobileprovision','https://xz.paledwx.com/download/parse?p=L2Fway9xaW5nZ3VvL3FpbmdndW8vcWluZ2d1by5hcGs%3D&ext=1-0-0&type=1&v=1"; //APP下载页地址
var appUrl1 = "https://xz.paledwx.com/apk/qingguo/qingguo/qingguo_1-0-0.apk?v=1";
var updateUrl = "https://tv.yundamen.com/"; //永久网址发布页 
var emailUrl = "feihua@mail.com"; //"<em>g</em><span>s</span><em>et</em><span>ok</span><em>u</em><span>wb</span><em>r</em><span>qr</span><em>l</em><span>kt</span><em>@gm<span>zi</span>ai<span>mk</span>l.c<span>yq</span>om</em>";	//邮箱回复网址
var countUrl = "https://hm.baidu.com/hm.js?5f2ce093e332e05e09548c3c8b555a90"; //统计系统JS地址
var getSpons = true;

var moreUrl = [
	"6688.xxx",
	"8866.xxx"
];

/* 菜单 [最多8个，随机排列展示] */
var menuUrl = "https://ctvtggroup.com/";
var menuData = [
	{ name: '短视频', url: menuUrl },
	{ name: '在线约炮', url: menuUrl },
	{ name: '空姐护士', url: menuUrl },
	{ name: '约啪嫩模', url: menuUrl },
	{ name: '上门服务', url: menuUrl },
	{ name: '莞式服务', url: menuUrl },
	{ name: '附近可约', url: menuUrl },
	{ name: '福利下载', url: menuUrl }
];

/* 对联 [150*350] [固定2个] */
var couplet = true;
var coupletData = [
	{ imgs: ["https://cdn.jsdelivr.net/gh/feihuashipin/feihuashipin/side150x350.gif"], url: 'https://f9859.com' }, //https://f9859.com
	{ imgs: ["https://cdn.jsdelivr.net/gh/feihuashipin/feihuashipin/side150x350.gif"], url: 'https://f9859.com' } //2
];

/* 顶部3宫格 [420*180] [固定3个] */
var topData = [
	{ imgs: ["https://cdn.jsdelivr.net/gh/feihuashipin/feihuashipin/mmtop420x180.gif"], url: 'https://www.yuepaop2.xyz' }, //1 http=s://4c8c.cc/
	{ imgs: ["https://cdn.jsdelivr.net/gh/feihuashipin/feihuashipin/mmtop420x180.gif"], url: 'https://www.yuepaop2.xyz' }, //2
	{ imgs: ["https://cdn.jsdelivr.net/gh/feihuashipin/feihuashipin/top420x180.gif"], url: 'https://f9859.com' }  //3
];

/* 底部4宫格 [640*150] [固定4个] */
var btmData = [
	{ imgs: ["https://cdn.jsdelivr.net/gh/feihuashipin/feihuashipin/mmbottom640x150.gif"], url: 'https://www.yuepaop2.xyz' }, //1
	{ imgs: ["https://cdn.jsdelivr.net/gh/feihuashipin/feihuashipin/mmbottom640x150.gif"], url: 'https://www.yuepaop2.xyz' }, //2
	{ imgs: ["https://cdn.jsdelivr.net/gh/feihuashipin/feihuashipin/bottom640x150.gif"], url: 'https://f9859.com' }, //3
	{ imgs: ["https://cdn.jsdelivr.net/gh/feihuashipin/feihuashipin/bottom640x150.gif"], url: 'https://f9859.com' } //4
];

/* 中间8宫格 [310*150] [固定8个] */
var midData = [
	{ imgs: ["https://cdn.jsdelivr.net/gh/feihuashipin/feihuashipin/mmmiddle310x150.gif"], url: 'https://www.yuepaop2.xyz' }, //1
	{ imgs: ["https://cdn.jsdelivr.net/gh/feihuashipin/feihuashipin/mmmiddle310x150.gif"], url: 'https://www.yuepaop2.xyz' }, //1
	{ imgs: ["https://cdn.jsdelivr.net/gh/feihuashipin/feihuashipin/mmmiddle310x150.gif"], url: 'https://www.yuepaop2.xyz' }, //1
	{ imgs: ["https://cdn.jsdelivr.net/gh/feihuashipin/feihuashipin/mmmiddle310x150.gif"], url: 'https://www.yuepaop2.xyz' }, //1
	{ imgs: ["https://cdn.jsdelivr.net/gh/feihuashipin/feihuashipin/middle5.gif"], url: 'https://f9859.com' }, //1
	{ imgs: ["https://cdn.jsdelivr.net/gh/feihuashipin/feihuashipin/middle6.jpg"], url: 'https://f9859.com' }, //1
	{ imgs: ["https://cdn.jsdelivr.net/gh/feihuashipin/feihuashipin/middle7.gif"], url: 'https://f9859.com' }, //1
	{ imgs: ["https://cdn.jsdelivr.net/gh/feihuashipin/feihuashipin/middle8.gif"], url: 'https://f9859.com' } //1
];

if (navigator.appName == "Microsoft Internet Explorer" && parseInt(navigator.appVersion.split(";")[1].replace(/[ ]/g, "").replace("MSIE", "")) < 9) {
	alert("您的浏览器版本过低，请下载IE9或以上版本，推荐使用谷歌浏览器。\r\n或下载" + appName + "，免费无限制观看成人视频。\r\n现在为您跳转...");
	window.location.href = updateUrl;
	throw SyntaxError();
}

function addScript(url) {
	var script = document.createElement("script");
	script.src = url;
	document.body.appendChild(script);
}

var _hmt = _hmt || [];
(function () {
	var hm = document.createElement("script");
	hm.src = "https://hm.baidu.com/hm.js?5f2ce093e332e05e09548c3c8b555a90";
	var s = document.getElementsByTagName("script")[0];
	s.parentNode.insertBefore(hm, s);
})();

//(function (d, w, c) {
//	w.ChatraID = '7y3nhzpMxdism65gF';
//	var s = d.createElement('script');
//	w[c] = w[c] || function () {
//		(w[c].q = w[c].q || []).push(arguments);
//	};
//	s.async = true;
//	s.src = 'https://call.chatra.io/chatra.js';
//	if (d.head) d.head.appendChild(s);
//})(document, window, 'Chatra');


window.console && window.console.log && (console.log("每一个星球都有一个驱动核心，\n每一种思想都有影响力的种子。\n感受世界的温度，\n年轻的你也能成为改变世界的动力，\n我们珍惜你所有的潜力。\n你的潜力，是改变世界的动力！\n\n"), console.log("%c地球人类最强色情集团期待您的加入：https://Imtoken.xxx/", "color:red"));
addScript('/static/js/advertiser.js');