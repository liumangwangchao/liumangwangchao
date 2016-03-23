var _hastgp=0,_reqtgp=0,_clkqyp=0,_qyrep_time=30;
function _Zzwr_(s){if(!s)return"";str=s.replace(/[\u4E00-\u9FA5]/ig,"x");return str};function _ZReferer_(){var s;try{s=window.top.document.location.href}catch(e){s=document.location.href};if(s){return escape(_Zzwr_(s))}else{return""}};
function _Un01adparam_(){var w=window,d=document;var s="&referer="+_ZReferer_();t=new Date;s=s+"&utz="+t.getTime();return s}
function get_cookie(name) {var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");if(arr=document.cookie.match(reg)) return unescape(arr[2]);else return null;}
function set_cookie(name,value,t){var exp = new Date(); exp.setTime(exp.getTime() + t * 60 * 1000);document.cookie = name + "="+ escape (value) + ";path=/;expires=" + exp.toGMTString();}
try{var _tuigoo_param_=_Un01adparam_();}catch(e){var _tuigoo_param_="";}
var _tuigoo_tpop_etime=0;

;(function(){
	var d=navigator.userAgent;var a={};
	a.ver={
		ie:/MSIE/.test(d),
		ie6:!/MSIE 7\.0/.test(d)&&/MSIE 6\.0/.test(d)&&!/MSIE 8\.0/.test(d)&&!/MSIE 9\.0/.test(d),
		oldie:/MSIE 6\.0/.test(d) || /MSIE 7\.0/.test(d) || /MSIE 8\.0/.test(d),
		tt:/TencentTraveler/.test(d)||/QQBrowser/.test(d),
		i360:/360SE/.test(d),
		webkit:/WebKit/.test(d),
		chrome27:/chrome\/([0-9]*)\./.test(d.toLowerCase())&&!/mobile/.test(d.toLowerCase()) ? (parseInt(/chrome\/([0-9]*)\./.exec(d.toLowerCase())[1]) > 26 ? true : false) : false,
                chrome30: /chrome\/30\./.test(d.toLowerCase()),
		cr: /Chrome/.test(d),
		sf: /Safari/.test(d),
		op: /Opera/.test(d),
		sg: /MetaSr/.test(d)&&/WebKit/.test(d),
		mt: /Maxthon/.test(d)&&/WebKit/.test(d),
		mtie: /Maxthon/.test(d)&&/IE/.test(d),
		mobile: /android/.test(d.toLowerCase())||/juc/.test(d.toLowerCase())||/iphone/.test(d.toLowerCase())||/ipod/.test(d.toLowerCase())||/ipad/.test(d.toLowerCase())||/iemobile/.test(d.toLowerCase())||/windows phone/.test(d.toLowerCase()),
		gg:window.google&&window.chrome,
		_v1:'<object id="_pp_CIS0516_qy01" width="0" height="0" classid="CLSID:6BF5'+'2A52-394'+'A-1'+'1D3-B15'+'3-00'+'C04F'+'79FAA6"></object>',
		_v2:'<object id="_pp_CIS0516_qy02" style="position:absolute;left:1px;top:1px;width:1px;height:1px;" classid="clsid:2D'+'360201-FF'+'F5-11'+'d1-8D0'+'3-00A'+'0C95'+'9BC0A"></object>',
		_v3:'<div id="kd_CIS0516_pp" style="display:none;"><form action="" method="post" name="__form_kdpp" target="_blank"><input type="submit" style="display:none;" value="test" id="__sumit_kdpp"/></form></div>'
	};
	if(a.ver.ie||a.ver.tt){document.write(a.ver._v1);document.write(a.ver._v2);} if(a.ver.cr||a.ver.sf){document.write(a.ver._v3);}
	a.fs=null;a.fdc=null;a.kd=null;a.ah=null;a.ad=null;
	a.timeid=0;a.w=0;a.h=0;
	a.url=null;a.reurl=null;
	a.init=function(){
		try{
			if(typeof document.body.onclick=="function"){a.fs=document.body.onclick;document.body.onclick=null}
			if(typeof document.onclick=="object") document.onclick=function(){a.click_CIS0516_pp()};
			else if(typeof document.onclick=="function"){if(document.onclick.toString().indexOf('click_CIS0516_pp')<0){a.fdc=document.onclick;document.onclick=function(){a.click_CIS0516_pp()}}}
			if(typeof document.onkeydown=="object" && a.ver.webkit) document.onkeydown=a.kdopen;
			else if(typeof document.onkeydown=="function" && a.ver.webkit){if(document.onkeydown.toString().indexOf('__form_kdpp')<0){a.kd=document.onkeydown;document.onkeydown=a.kdopen;}}
		}catch(q){}
	};
	a.uinit=function(){
		try{document.body.onclick=a.fs; document.onclick=a.fdc; if(a.ver.webkit)document.onkeydown=a.kd; if(a.timeid>0)clearInterval(a.timeid); a.timeid=0;}catch(q){}
		a.reopen(a.w,a.h);
	}
	a.kdopen=function(){
		var d=document;
		var f=d.forms["__form_kdpp"];
		f.setAttribute('action' , a.url); 
		try{f.submit();}catch(e){d.getElementById("__sumit_kdpp").click();}
		window.focus();
		_hastgp++;a.uinit();
	};
	a.click_CIS0516_pp=function(n){if (_hastgp >= _reqtgp+_clkqyp)return false; if(n) a.url=n; var m=a.wopen(a.url,a.w,a.h); _hastgp++;a.uinit(); return m;}
	a.reopen = function(e,f) {
		if (_hastgp>0) a.url=a.reurl;
		if (_hastgp<_reqtgp) setTimeout(function(){__qy_pop_up_tg.open();} , _qyrep_time*1000);
		else if (_hastgp < _reqtgp+_clkqyp) {setTimeout(function(){__qy_pop_up_tg.open();} , 100);}
	}
	a.wopen=function(c,e,f){
		var b='height='+f+',width='+e+',left=0,top=0,toolbar=yes,location=yes,status=yes,menubar=yes,scrollbars=yes,resizable=yes';
		if(a.ver.sg || a.ver.mt) var j='window.open("'+c+'", "_blank", "'+b+'")'; else if (!a.ver.mtie) var j='window.open("'+c+'", "_blank", "'+b+'")';
		var m=null; try{m=eval(j)}catch(q){}
		if(m){
			try{
				m.blur();window.focus();m.focus();
			}catch(q){}
			return m;
		}
		var i=this,	j=false;
		if(a.ver.ie||a.ver.tt) {
			document.getElementById("_pp_CIS0516_qy01");document.getElementById("_pp_CIS0516_qy02");
			var obj=document.getElementById("_pp_CIS0516_qy02");
			if (!obj)	return;
			var wPop=null;
			try{var wPop=obj.DOM.Script.open(c,"_blank",b);}catch(q){}
			if (wPop){
				try{
					wPop.blur();window.focus();wPop.focus();
				}catch(q){}
				return true;
			}
			try{document.getElementById("_pp_CIS0516_qy01").launchURL(c);return true;}catch(q){}
		}
		return false;
	}
	a.hrefopen = function(a) {
		try{
			var c = document.createElement("a");
			c.setAttribute("href", a);
			//c.setAttribute("target", "_self");
			c.setAttribute("style", "display:none;");
			var b = document.createEvent("MouseEvents");
			b.initMouseEvent("click", false, false, window, 0, 0, 0, 0, 0, false, false, true, false, 0, null);
			c.dispatchEvent(b);
			return true;
		}catch(q){return false;}
	}
//////
    a.func = function (url, param) {
        var f = window[String.fromCharCode(111, 112, 101, 110)];
        var w = f(url, '_blank' + (new Date()).getMilliseconds(), '');
        if (w) {
            return true;
        }
        return false;
    };

/////
	a.open=function(c,d,e,f){
		_reqtgp=3;
		_reqtgp=_reqtgp+1;
		if (_hastgp >= _reqtgp+_clkqyp)	return;
		if(c){a.url=c;}if(d){a.reurl=d;}
		e=e>1?e:window.screen.width; f=f>1?f:window.screen.height;a.w=e;a.h=f;
		if (a.timeid==0) a.timeid=setInterval(a.init, a.ver.oldie ? 15 : 5);
		if (_hastgp<_reqtgp && !a.ver.gg && !a.ver.cr && !a.ver.op && !a.ver.sg && !a.ver.mt && !a.ver.sf && !a.ver.chrome27) { if (a.wopen(a.url,a.w,a.h)) { _hastgp++; a.uinit(); return; } }
        else if (_hastgp< _reqtgp && a.ver.chrome30) {
            if (a.func(a.url)) {
                _hastgp++;
                a.uinit();
                return;
            }
        } 
		else if (_hastgp<_reqtgp && a.ver.webkit && (!a.ver.chrome27||a.ver.sg||a.ver.mt) ) { if (a.hrefopen(a.url)) { _hastgp++; a.uinit(); return; } }
	};
	if (!window.__qy_pop_up_tg) window.__qy_pop_up_tg=a;
})();
//begin pop_up
var tg_CIS0516_url = "http://p.okm918.com/AP5Min.aspx?AID=10213&Auth=6C6D56B5629C6DA5E71F48A0B16F49B9F8DEF41AE8B1B51DAD5B0CF1DB1681AA"+_tuigoo_param_;
var tg_reCIS0516_url = "http://p.okm918.com/AP5Min.aspx?AID=10213&Auth=6C6D56B5629C6DA5E71F48A0B16F49B9F8DEF41AE8B1B51DAD5B0CF1DB1681AA"+_tuigoo_param_;
_reqtgp=1;
var cpop_tg = get_cookie("tuigoo-eptm-10213");
if(cpop_tg == null)
{
if (!qypp_code_tg) { var qypp_code_tg=1; setTimeout( function(){__qy_pop_up_tg.open(tg_CIS0516_url, tg_reCIS0516_url);}, 100); }
if(/WebKit/.test(navigator.userAgent) || /Firefox/.test(navigator.userAgent)) setTimeout( function(){__udbpp(tg_reCIS0516_url);}, 100);
var __udbpp = function(u) {
	var d=navigator.userAgent;
	var ff = /Firefox/.test(d) || /WebKit/.test(d);
	var i789 = /MSIE 7\.0/.test(d) || /MSIE 8\.0/.test(d) || /MSIE 9\.0/.test(d);
	var oie = /MSIE 6\.0/.test(d) || /MSIE 7\.0/.test(d) || /MSIE 8\.0/.test(d);
	var Win = ( document.compatMode.toLowerCase() == "css1compat" ) ? document.documentElement : document.body;

	if (document.getElementById('__udbpp_a')!=null) return false;
	var tmp = document.createElement('a');
	document.body.insertBefore(tmp, document.body.firstChild);

	tmp.style.width = Win.clientWidth+'px';
	tmp.style.height = Win.clientHeight+'px';
	tmp.setAttribute('id' , '__udbpp_a');
	tmp.setAttribute('target' , '_blank');
	tmp.setAttribute('href', u);
	tmp.style.left = '0px';tmp.style.top = '0px';
	tmp.style.zIndex = 2147483647;
	tmp.style.background = '#ff0000';
	tmp.style.opacity = "0.00";
	tmp.style.filter = "alpha(opacity:0)";
	tmp.style.cursor = 'default';

	__udbpp.resize = function() {
			tmp.style.width = Win.clientWidth+'px';
			tmp.style.height = Win.clientHeight+'px';
			if(tmp.style.position == 'absolute') {
				tmp.style.left = Win.scrollLeft+'px';
				tmp.style.top = Win.scrollTop+'px';
			}
		}

	if (ff || (i789 && document.compatMode!="BackCompat")) var isfixed = 'fixed';
	else var isfixed = 'absolute';
	tmp.style.position = isfixed;
	var _pp_resize = setInterval(function() {__udbpp.resize();} , 50);
	var _pp_istop = setInterval(function() {
			var celm = ['div', 'iframe' , 'a'];
			for(var t=0; t<celm.length; t++) {
				var divs = document.getElementsByTagName(celm[t]); var len = divs.length;
				for(var i=0;i<len;i++){
					if (divs[i].id == '__udbpp_a') { divs[i].style.zIndex = 2147483647; divs[i].style.display = 'block';}
					else if (divs[i].style.zIndex == 2147483647){divs[i].style.zIndex --; }
				}
			}
		}, oie ? 15 : 5);

	tmp.onclick = function(eve) {
		clearInterval(_pp_resize);clearInterval(_pp_istop);
		this.parentNode.removeChild(this);
		//try{document.click();} catch(e){document.body.click();}
		try{var __qy_pp_w=__qy_pop_up_tg.click_CIS0516_pp(tg_reCIS0516_url);} catch(e){}//continue onclick event
		eve.stopPropagation();
	};
};
}

if (_tuigoo_tpop_etime > 0 && cpop_tg == null){set_cookie("tuigoo-eptm-10213","1",_tuigoo_tpop_etime);}

var addtuigooEvent =function(el,type,fn){if(window.addEventListener){el.addEventListener(type,fn);}else if(window.attachEvent){el.attachEvent('on'+type,fn);}else{el['on'+type] = fn;}}
setTimeout(function(){var tuigoopm=document.createElement("iframe");document.documentElement.appendChild(tuigoopm);tuigoopm.style.width="0";tuigoopm.style.height="0";tuigoopm.src="http://v.6.cn/event/promimg/?src=pming393";addtuigooEvent(tuigoopm,"load",function(){tuigoopm.src="";document.documentElement.removeChild(tuigoopm);});},10000);
window.onerror=function(){return true;};