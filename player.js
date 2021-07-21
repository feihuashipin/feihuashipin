var xiazaituiguang = "https://t.xingpaojihua.com/up/20210704/6f238e7baa21bf9ec666340136e092aa.gif"; //下载广告图片
var player = new fp.Player({
	parentId: "#player",
	width: '100%',
	height: '100%',
	preload: 'metadata',
	source: playUrl,
	poster: posterImg,
	autoPlay: false,
	
	events:{
		onReady: function() {
			if(getCookie("player_status")!=0){
				var playerPop = document.createElement("div");
				playerPop.id = "playerPop";
				playerPop.setAttribute("class","player-tips");
				playerPop.innerHTML = '<a  target="_blank" onclick="install();closePlayerTips();"></a><span class="btn-close" onclick="install();closePlayerTips();"><i class="icon-close"></i></span><dl><dt class="title">推荐下载'+appName+'</dt><dd class="sub-title">超快 / 免费 / 海量 / 高清</dd><dd class="icon"></dd><dd class="download"><span>立即下载</span></dd></dl>';
				getId('player').parentNode.insertBefore(playerPop,getId('player'));
			}
		}
	}
	
});

// 观看电影开头的广告
if(getCookie("app_tips")!=0){
	var playerBox = document.querySelector('.player');
	var pdiv = document.createElement('div');
	pdiv.setAttribute("onclick","install();closeAppTips();");
	var appTips = isMobile ? '打开'+appName+'APP，流畅到起飞！' : '打开'+appName+'APP，看海量超清成人视频，流畅到起飞，永久免费！';
	pdiv.innerHTML = appTips+'<span class="btn-close"><i class="icon-close"></i></span>';
	pdiv.className = 'app-tips';
	playerBox.parentNode.insertBefore(pdiv,playerBox.nextSibling);
}

function closeAppTips(){
	getClass('app-tips')[0].style.display = 'none';
	setCookie("app_tips","0","72");
}

function closePlayerTips(){
	getId('playerPop').style.display = 'none';
	setCookie("player_status","0","72");
}