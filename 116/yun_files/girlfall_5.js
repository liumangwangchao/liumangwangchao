(function(i,b){var e={},g={},a={},h={},r={timeout:12E3,base:"",fail:function(){}},d=function(){var l=b.getElementsByTagName("script");return l[l.length-1]}(),k=d.getAttribute("data-symbol")||"Boom",f=!0===b.createElement("script").async,o=/.+?\.(js|css)(?:\?.*)?$/,q=/^(\/|http)/,B=+new Date,y=function(l){return l&&"[object Object]"==Object.prototype.toString.call(l)},s=function(l,c){for(var j=0,a=l.length;j<a;j++)c(l[j],j)},w=function(l,c,j,a,d){var b,h,f;if(a&&a.length)for(b=0,h=a.length;b<h;++b){if(f=
a[b],c.hasOwnProperty(f))if(d&&y(l[f]))w(l[f],c[f]);else if(j||!(f in l))l[f]=c[f]}else for(b in c)if(c.hasOwnProperty(b))if(d&&y(l[b]))w(l[b],c[b],j,a,!0);else if(j||!(b in l))l[b]=c[b];return l},A=function(l){return(g[l]||o.test(l))&&!e[l]},x=function(l){var c=g[l],l=a[c?c.path:l];return!!(l&&2===l.s)},C=function(l,c){var j=l.length,a,b=function(){0>=--j&&(c&&c(),c=b=null)};if(0==j)return b();for(;a=l.shift();)m(a,b)},D=function(l,c){var j=function(){0==l.length?(c&&c(),c=j=null):m(l.shift(),j)};
j()},E=function(l,c,j){var a=!1,b=!1,d=function(){a&&b&&j&&(j(),d=j=null)};C(l,function(){a=!0;d()});D(c,function(){b=!0;d()})},m=function(l,c){var j=g[l]?g[l].path:l,h="css"==o.exec(j)[1]?"css":"js",e=a[j];e||(e=a[j]={h:[c],s:0});"css"==h?(h=b.createElement("link"),h.href=j,h.rel="stylesheet",d.parentNode.insertBefore(h,d),c&&c(),e.s=2):2==e.s?c&&c(l):1==e.s?c&&e.h.push(c):(h=b.createElement("script"),h.async=!1,h.src=j,e.t=i.setTimeout(function(){r.fail(l,j)},r.timeout),h.onload=h.onreadystatechange=
function(){if(!this.readyState||(f?"complete"==this.readyState:"loaded"==this.readyState||"complete"==this.readyState)){var c=e.h,j;i.clearTimeout(e.t);for(e.s=2;0<c.length;)(j=c.shift())&&j(l);this.onload=this.onreadystatechange=null;this.parentNode.removeChild(this)}},d.parentNode.insertBefore(h,d),e.s=1)},n=function(c,j){var a=c.f,b=c.lost,d={},h=function(c){var j,l,f;if(c&&!d[c])if(d[c]=!0,A(c))x(c)||(a.push(c),b.push(c));else if(j=e[c])(f=j.details.requires)&&s(f,h);else{a:{for(l in g){j=g[l].mods||
[];for(f=0;f<j.length;f++)if(j[f]==c)break a}l=!1}if(!l||x(l))throw Error("Can't found the moudle : "+c);b.push(c);d[l]||(a.push(l),d[l]=!0)}};s(j?b:c.mods,h);0<a.length?p(c):F(c)},p=function(c){var j=t(c.f),a=[],b=[];f?b=j:s(j,function(c){var j=g[c];j&&j.mods?b.push(c):a.push(c)});E(b,a,function(){c.f=[];n(c,!0)})},t=function(c){var j=[],a={},b=function(c){var l,d;!a[c]&&A(c)&&(a[c]=!0,(d=(l=g[c])&&l.requires)&&s(d,b),j.push(c))};s(c,b);return j},F=function(c){var j=c.cx,a=c.cb,b=[],d={},f=function(c){var j;
d[j]||(d[c]=!0,(j=e[c])&&j.details.requires&&s(j.details.requires,f),j&&!A(c)&&b.push(c))};s(c.mods,f);j._attach(b);a&&a(j);delete h[c.id]},v=function(c,j){var a;if(y(c))for(a in c)v(a,c[a]);else a=j.path,j.path=q.test(a)?a:r.base+a,g[c]=j},j=function(c,j,a){e[c]={name:c,fn:j,details:a||{}}},c=function(){if(!(this instanceof c))return new c;this._init()},u={_init:function(){c.Env=c.Env||{attached:{},mods:e,rmods:g,thread:h,config:r};this.Env=this.Env||{attached:{}}},guid:function(){return(++B).toString(36)},
add:function(){var c=[].slice.call(arguments,0);1==c.length&&y(c[0])?v(c[0]):"function"==typeof c[1]?j.apply(this,c):v.apply(this,c)},load:function(){var c=[].slice.call(arguments,0);C(c);return this},use:function(){var c=[].slice.call(arguments,0),j=c.length,a=this.guid(),j="function"==typeof c[j-1]?c.pop():null,c=h[a]={id:a,cb:j,mods:c,lost:[],f:[],cx:this};n(c)},_attach:function(c){for(var j=this.Env.attached,a=0,b,d;b=c[a];a++)j[b]||((d=e[b].fn(this))&&this.register(b,d),j[b]=!0)},register:function(c,
j){for(var a=this,b=c.split("."),d=0,h=b.length,f;d<h;d++)if(f=b[d],d==h-1){if(a[f])throw"register has failed["+c+"]";a[f]=j}else a[f]=a[f]||{},a=a[f];return a},config:function(c,j){if(y(c))w(r,c,!0);else if(j)r[c]=j;else return r[c]},mix:w};c.prototype=u;w(c,u);c._init();if(!i[k])i[k]=i.CN6=c})(window,document);CN6.add("mustache",function(){});
(function(i,b){if("object"===typeof exports&&exports)b(exports);else{var e={};b(e);"function"===typeof define&&define.amd?define(e):i.Mustache=e}})(this,function(i){function b(a){return a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function e(a){this.tail=this.string=a;this.pos=0}function g(a,b){this.view=a||{};this.parent=b;this._cache={}}function a(){this.clearCache()}function h(a,b,d,f){for(var e="",g,k,r=0,o=a.length;r<o;++r)switch(g=a[r],k=g[1],g[0]){case "#":k=d.lookup(k);if("object"===typeof k)if(w(k))for(var j=
0,c=k.length;j<c;++j)e+=h(g[4],b,d.push(k[j]),f);else k&&(e+=h(g[4],b,d.push(k),f));else"function"===typeof k?(g=null==f?null:f.slice(g[3],g[5]),k=k.call(d.view,g,function(c){return b.render(c,d)}),null!=k&&(e+=k)):k&&(e+=h(g[4],b,d,f));break;case "^":k=d.lookup(k);if(!k||w(k)&&0===k.length)e+=h(g[4],b,d,f);break;case ">":k=b.getPartial(k);"function"===typeof k&&(e+=k(d));break;case "&":k=d.lookup(k);null!=k&&(e+=k);break;case "name":k=d.lookup(k);null!=k&&(e+=i.escape(k));break;case "text":e+=k}return e}
function r(a){return[RegExp(b(a[0])+"\\s*"),RegExp("\\s*"+b(a[1]))]}var d=/\s*/,k=/\s+/,f=/\S/,o=/\s*=/,q=/\s*\}/,B=/#|\^|\/|>|\{|&|=|!/,y=RegExp.prototype.test,s=Object.prototype.toString,w=Array.isArray||function(a){return"[object Array]"===s.call(a)},A={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};e.prototype.eos=function(){return""===this.tail};e.prototype.scan=function(a){return(a=this.tail.match(a))&&0===a.index?(this.tail=this.tail.substring(a[0].length),this.pos+=
a[0].length,a[0]):""};e.prototype.scanUntil=function(a){var b=this.tail.search(a);switch(b){case -1:a=this.tail;this.pos+=this.tail.length;this.tail="";break;case 0:a="";break;default:a=this.tail.substring(0,b),this.tail=this.tail.substring(b),this.pos+=b}return a};g.make=function(a){return a instanceof g?a:new g(a)};g.prototype.push=function(a){return new g(a,this)};g.prototype.lookup=function(a){var b=this._cache[a];if(!b){if("."==a)b=this.view;else for(var d=this;d;){if(0<a.indexOf("."))for(var b=
d.view,f=a.split("."),e=0;b&&e<f.length;)b=b[f[e++]];else b=d.view[a];if(null!=b)break;d=d.parent}this._cache[a]=b}"function"===typeof b&&(b=b.call(this.view));return b};a.prototype.clearCache=function(){this._cache={};this._partialCache={}};a.prototype.compile=function(a,b){var d=this._cache[a];d||(d=i.parse(a,b),d=this._cache[a]=this.compileTokens(d,a));return d};a.prototype.compilePartial=function(a,b,d){b=this.compile(b,d);return this._partialCache[a]=b};a.prototype.getPartial=function(a){!(a in
this._partialCache)&&this._loadPartial&&this.compilePartial(a,this._loadPartial(a));return this._partialCache[a]};a.prototype.compileTokens=function(a,b){var d=this;return function(f,e){if(e)if("function"===typeof e)d._loadPartial=e;else for(var k in e)d.compilePartial(k,e[k]);return h(a,d,g.make(f),b)}};a.prototype.render=function(a,b,d){return this.compile(a)(b,d)};i.name="mustache.js";i.version="0.7.2";i.tags=["{{","}}"];i.Scanner=e;i.Context=g;i.Writer=a;i.parse=function(a,h){a=a||"";h=h||i.tags;
"string"===typeof h&&(h=h.split(k));if(2!==h.length)throw Error("Invalid tags: "+h.join(", "));for(var g=r(h),m=new e(a),n=[],p=[],t=[],s=!1,v=!1,j,c,u,l;!m.eos();){j=m.pos;if(u=m.scanUntil(g[0])){l=0;for(var G=u.length;l<G;++l)if(c=u.charAt(l),!y.call(f,c)?t.push(p.length):v=!0,p.push(["text",c,j,j+1]),j+=1,"\n"==c){if(s&&!v)for(;t.length;)delete p[t.pop()];else t=[];v=s=!1}}if(!m.scan(g[0]))break;s=!0;c=m.scan(B)||"name";m.scan(d);"="===c?(u=m.scanUntil(o),m.scan(o),m.scanUntil(g[1])):"{"===c?(u=
m.scanUntil(RegExp("\\s*"+b("}"+h[1]))),m.scan(q),m.scanUntil(g[1]),c="&"):u=m.scanUntil(g[1]);if(!m.scan(g[1]))throw Error("Unclosed tag at "+m.pos);l=[c,u,j,m.pos];p.push(l);if("#"===c||"^"===c)n.push(l);else if("/"===c){if(0===n.length)throw Error('Unopened section "'+u+'" at '+j);c=n.pop();if(c[1]!==u)throw Error('Unclosed section "'+c[1]+'" at '+j);}else if("name"===c||"{"===c||"&"===c)v=!0;else if("="===c){h=u.split(k);if(2!==h.length)throw Error("Invalid tags at "+j+": "+h.join(", "));g=r(h)}}if(c=
n.pop())throw Error('Unclosed section "'+c[1]+'" at '+m.pos);for(var g=p,m=[],z,p=0,t=g.length;p<t;++p)if(n=g[p])"text"===n[0]&&z&&"text"===z[0]?(z[1]+=n[1],z[3]=n[3]):(z=n,m.push(n));z=m;m=g=[];n=[];t=0;for(s=z.length;t<s;++t)switch(p=z[t],p[0]){case "#":case "^":n.push(p);m.push(p);m=p[4]=[];break;case "/":n.pop()[5]=p[2];m=0<n.length?n[n.length-1][4]:g;break;default:m.push(p)}return g};i.escape=function(a){return(""+a).replace(/[&<>"'\/]/g,function(a){return A[a]})};var x=new a;i.clearCache=function(){return x.clearCache()};
i.compile=function(a,b){return x.compile(a,b)};i.compilePartial=function(a,b,d){return x.compilePartial(a,b,d)};i.compileTokens=function(a,b){return x.compileTokens(a,b)};i.render=function(a,b,d){return x.render(a,b,d)};i.to_html=function(a,b,d,f){a=i.render(a,b,d);if("function"===typeof f)f(a);else return a}});CN6.add("modernizr",function(){});
window.Modernizr=function(i,b,e){function g(a,c){return typeof a===c}function a(a,c){for(var b in a){var d=a[b];if(!~(""+d).indexOf("-")&&o[d]!==e)return"pfx"==c?d:!0}return!1}function h(b,c,d){var f=b.charAt(0).toUpperCase()+b.slice(1),h=(b+" "+w.join(f+" ")+f).split(" ");if(g(c,"string")||g(c,"undefined"))return a(h,c);h=(b+" "+A.join(f+" ")+f).split(" ");a:{var b=h,k;for(k in b)if(f=c[b[k]],f!==e){if(!1===d){c=b[k];break a}c=g(f,"function")?f.bind(d||c):f;break a}c=!1}return c}function r(){d.input=
function(a){for(var c=0,d=a.length;c<d;c++)C[a[c]]=!!(a[c]in q);if(C.list)C.list=!(!b.createElement("datalist")||!i.HTMLDataListElement);return C}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" "));d.inputtypes=function(a){for(var c=0,d,f,h=a.length;c<h;c++){q.setAttribute("type",f=a[c]);if(d="text"!==q.type)q.value=B,q.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(f)&&q.style.WebkitAppearance!==e?(k.appendChild(q),d=b.defaultView,d=
d.getComputedStyle&&"textfield"!==d.getComputedStyle(q,null).WebkitAppearance&&0!==q.offsetHeight,k.removeChild(q)):/^(search|tel)$/.test(f)||(d=/^(url|email)$/.test(f)?q.checkValidity&&!1===q.checkValidity():q.value!=B);x[a[c]]=!!d}return x}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d={},k=b.documentElement,f=b.createElement("modernizr"),o=f.style,q=b.createElement("input"),B=":)",y={}.toString,s=" -webkit- -moz- -o- -ms- ".split(" "),
w="Webkit Moz O ms".split(" "),A="webkit moz o ms".split(" "),f={},x={},C={},D=[],E=D.slice,m,n=function(a,c,d,f){var h,e=b.createElement("div"),g=b.body,i=g?g:b.createElement("body");if(parseInt(d,10))for(;d--;)h=b.createElement("div"),h.id=f?f[d]:"modernizr"+(d+1),e.appendChild(h);d=['&#173;<style id="smodernizr">',a,"</style>"].join("");e.id="modernizr";(g?e:i).innerHTML+=d;i.appendChild(e);if(!g)i.style.background="",k.appendChild(i);a=c(e,a);!g?i.parentNode.removeChild(i):e.parentNode.removeChild(e);
return!!a},p=function(){var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return function(c,d){var d=d||b.createElement(a[c]||"div"),c="on"+c,f=c in d;f||(d.setAttribute||(d=b.createElement("div")),d.setAttribute&&d.removeAttribute&&(d.setAttribute(c,""),f=g(d[c],"function"),g(d[c],"undefined")||(d[c]=e),d.removeAttribute(c)));return f}}(),t={}.hasOwnProperty,F;F=!g(t,"undefined")&&!g(t.call,"undefined")?function(a,c){return t.call(a,c)}:function(a,
c){return c in a&&g(a.constructor.prototype[c],"undefined")};if(!Function.prototype.bind)Function.prototype.bind=function(a){var c=this;if("function"!=typeof c)throw new TypeError;var d=E.call(arguments,1),b=function(){if(this instanceof b){var f=function(){};f.prototype=c.prototype;var f=new f,h=c.apply(f,d.concat(E.call(arguments)));return Object(h)===h?h:f}return c.apply(a,d.concat(E.call(arguments)))};return b};f.flexbox=function(){return h("flexWrap")};f.flexboxlegacy=function(){return h("boxDirection")};
f.canvas=function(){var a=b.createElement("canvas");return!(!a.getContext||!a.getContext("2d"))};f.canvastext=function(){return!(!d.canvas||!g(b.createElement("canvas").getContext("2d").fillText,"function"))};f.webgl=function(){return!!i.WebGLRenderingContext};f.touch=function(){var a;"ontouchstart"in i||i.DocumentTouch&&b instanceof DocumentTouch?a=!0:n(["@media (",s.join("touch-enabled),("),"modernizr){#modernizr{top:9px;position:absolute}}"].join(""),function(c){a=9===c.offsetTop});return a};f.geolocation=
function(){return"geolocation"in navigator};f.postmessage=function(){return!!i.postMessage};f.websqldatabase=function(){return!!i.openDatabase};f.indexedDB=function(){return!!h("indexedDB",i)};f.hashchange=function(){return p("hashchange",i)&&(b.documentMode===e||7<b.documentMode)};f.history=function(){return!(!i.history||!history.pushState)};f.draganddrop=function(){var a=b.createElement("div");return"draggable"in a||"ondragstart"in a&&"ondrop"in a};f.websockets=function(){return"WebSocket"in i||
"MozWebSocket"in i};f.rgba=function(){o.cssText="background-color:rgba(150,255,150,.5)";return!!~(""+o.backgroundColor).indexOf("rgba")};f.hsla=function(){o.cssText="background-color:hsla(120,40%,100%,.5)";return!!~(""+o.backgroundColor).indexOf("rgba")||!!~(""+o.backgroundColor).indexOf("hsla")};f.multiplebgs=function(){o.cssText="background:url(https://),url(https://),red url(https://)";return/(url\s*\(.*?){3}/.test(o.background)};f.backgroundsize=function(){return h("backgroundSize")};f.borderimage=
function(){return h("borderImage")};f.borderradius=function(){return h("borderRadius")};f.boxshadow=function(){return h("boxShadow")};f.textshadow=function(){return""===b.createElement("div").style.textShadow};f.opacity=function(){var a=s.join("opacity:.55;")+"";o.cssText=a;return/^0.55$/.test(o.opacity)};f.cssanimations=function(){return h("animationName")};f.csscolumns=function(){return h("columnCount")};f.cssgradients=function(){var a=("background-image:"+"-webkit- ".split(" ").join("gradient(linear,left top,right bottom,from(#9f9),to(white));background-image:")+
s.join("linear-gradient(left top,#9f9, white);background-image:")).slice(0,-17);o.cssText=a;return!!~(""+o.backgroundImage).indexOf("gradient")};f.cssreflections=function(){return h("boxReflect")};f.csstransforms=function(){return!!h("transform")};f.csstransforms3d=function(){var a=!!h("perspective");a&&"webkitPerspective"in k.style&&n("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(c){a=9===c.offsetLeft&&3===c.offsetHeight});return a};f.csstransitions=
function(){return h("transition")};f.fontface=function(){var a;n('@font-face {font-family:"font";src:url("https://")}',function(c,d){var f=b.getElementById("smodernizr"),f=(f=f.sheet||f.styleSheet)?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"";a=/src/i.test(f)&&0===f.indexOf(d.split(" ")[0])});return a};f.generatedcontent=function(){var a;n(['#modernizr:after{content:"',B,'";visibility:hidden}'].join(""),function(c){a=1<=c.offsetHeight});return a};f.video=function(){var a=b.createElement("video"),
c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")}catch(d){}return c};f.audio=function(){var a=b.createElement("audio"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),c.mp3=a.canPlayType("audio/mpeg;").replace(/^no$/,
""),c.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),c.m4a=(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,"")}catch(d){}return c};f.localstorage=function(){try{return localStorage.setItem("modernizr","modernizr"),localStorage.removeItem("modernizr"),!0}catch(a){return!1}};f.sessionstorage=function(){try{return sessionStorage.setItem("modernizr","modernizr"),sessionStorage.removeItem("modernizr"),!0}catch(a){return!1}};f.webworkers=function(){return!!i.Worker};
f.applicationcache=function(){return!!i.applicationCache};f.svg=function(){return!!b.createElementNS&&!!b.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect};f.inlinesvg=function(){var a=b.createElement("div");a.innerHTML="<svg/>";return"http://www.w3.org/2000/svg"==(a.firstChild&&a.firstChild.namespaceURI)};f.smil=function(){return!!b.createElementNS&&/SVGAnimate/.test(y.call(b.createElementNS("http://www.w3.org/2000/svg","animate")))};f.svgclippaths=function(){return!!b.createElementNS&&
/SVGClipPath/.test(y.call(b.createElementNS("http://www.w3.org/2000/svg","clipPath")))};for(var v in f)F(f,v)&&(m=v.toLowerCase(),d[m]=f[v](),D.push((d[m]?"":"no-")+m));d.input||r();d.addTest=function(a,c){if("object"==typeof a)for(var b in a)F(a,b)&&d.addTest(b,a[b]);else{a=a.toLowerCase();if(d[a]!==e)return d;c="function"==typeof c?c():c;k.className+=" "+(c?"":"no-")+a;d[a]=c}return d};o.cssText="";f=q=null;(function(a,c){function d(){var a=p.elements;return"string"==typeof a?a.split(" "):a}function b(a){var c=
m[a[o]];c||(c={},q++,a[o]=q,m[q]=c);return c}function f(a,d,h){d||(d=c);if(n)return d.createElement(a);h||(h=b(d));d=h.cache[a]?h.cache[a].cloneNode():i.test(a)?(h.cache[a]=h.createElem(a)).cloneNode():h.createElem(a);return d.canHaveChildren&&!k.test(a)?h.frag.appendChild(d):d}function h(a,c){if(!c.cache)c.cache={},c.createElem=a.createElement,c.createFrag=a.createDocumentFragment,c.frag=c.createFrag();a.createElement=function(d){return!p.shivMethods?c.createElem(d):f(d,a,c)};a.createDocumentFragment=
Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+d().join().replace(/\w+/g,function(a){c.createElem(a);c.frag.createElement(a);return'c("'+a+'")'})+");return n}")(p,c.frag)}function e(a){a||(a=c);var d=b(a);if(p.shivCSS&&!r&&!d.hasCSS){var f,g=a;f=g.createElement("p");g=g.getElementsByTagName("head")[0]||g.documentElement;f.innerHTML="x<style>article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}</style>";
f=g.insertBefore(f.lastChild,g.firstChild);d.hasCSS=!!f}n||h(a,d);return a}var g=a.html5||{},k=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,i=/^<|^(?:a|b|button|code|div|fieldset|form|h1|h2|h3|h4|h5|h6|i|iframe|img|input|label|li|link|ol|option|p|param|q|script|select|span|strong|style|table|tbody|td|textarea|tfoot|th|thead|tr|ul)$/i,r,o="_html5shiv",q=0,m={},n;(function(){try{var a=c.createElement("a");a.innerHTML="<xyz></xyz>";r="hidden"in a;var d;if(!(d=1==a.childNodes.length)){c.createElement("a");
var b=c.createDocumentFragment();d="undefined"==typeof b.cloneNode||"undefined"==typeof b.createDocumentFragment||"undefined"==typeof b.createElement}n=d}catch(f){n=r=!0}})();var p={elements:g.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:!1!==g.shivCSS,supportsUnknownElements:n,shivMethods:!1!==g.shivMethods,type:"default",shivDocument:e,createElement:f,createDocumentFragment:function(a,
f){a||(a=c);if(n)return a.createDocumentFragment();for(var f=f||b(a),h=f.frag.cloneNode(),e=0,g=d(),k=g.length;e<k;e++)h.createElement(g[e]);return h}};a.html5=p;e(c)})(this,b);d._version="2.6.1";d._prefixes=s;d._domPrefixes=A;d._cssomPrefixes=w;d.mq=function(a){var c=i.matchMedia||i.msMatchMedia;if(c)return c(a).matches;var d;n("@media "+a+" { #modernizr { position: absolute; } }",function(a){d="absolute"==(i.getComputedStyle?getComputedStyle(a,null):a.currentStyle).position});return d};d.hasEvent=
p;d.testProp=function(d){return a([d])};d.testAllProps=h;d.testStyles=n;d.prefixed=function(a,c,d){return c?h(a,c,d):h(a,"pfx")};k.className=k.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(" js "+D.join(" "));return d}(this,this.document);
CN6.add("oop",function(i){i.merge=function(){for(var b=arguments,e={},g=0,a=b.length;g<a;g++)this.mix(e,b[g],!0);return e};i.extend=function(b,e,g,a){if(!e||!b)return b;var h=Object.prototype,i=e.prototype,d=function(a){function d(){}d.prototype=a;return new d}(i);b.prototype=d;d.constructor=b;b.superclass=i;if(e!==Object&&i.constructor===h.constructor)i.constructor=e;g&&this.mix(d,g,!0);a&&this.mix(b,a,!0);return b}});
CN6.add("event",function(i){function b(){}var e=function(b,a,h){var e=this.events||(this.events={}),b=e[b]||(e[b]=[]);if(a)a._once=!!h,b.push(a)};b.prototype={on:function(b,a){e.call(this,b,a)},one:function(b,a){e.call(this,b,a,!0)},off:function(b,a){var h=this.events;if(h=h&&h[b])if(a)for(var e=0;e<h.length;e++)a==h[e]&&h.splice(e,1);else this.events[b]=[]},trigger:function(b){var a=this.events,a=a&&a[b],h=[].slice.call(arguments);h.shift();if(a)for(var e=0;e<a.length;e++){var d=a[e];d.apply(this,
h);d._once&&a.splice(e,1)}}};i.Event=b});CN6.add("attribute",function(i){function b(){}var e=i.Event;b.prototype={get:function(b){return this._access(b)},set:function(b,a){this._access(b,a)},_access:function(b,a){var e=this._data_,i={};e||(e=this._data_={});if(void 0===a)return this.trigger("getData",i,b),e[b];this.trigger("setData",i,b,a);e[b]=a;this.trigger("changeData",i,b,a)}};i.mix(b.prototype,e.prototype);i.Attribute=b},{requires:["event"]});
CN6.add("lazyload",function(i){var b={threshold:-1},e=jQuery,g=[],a,h=function(d){a||(a=setTimeout(function(){for(var b=0,f;b<g.length;b++)f=g[b],"resize"==d.type&&f._makeThreshold(),f._loadItem(e(window).scrollTop()),0==f.getItemLength()&&(g.splice(b,1),--b);0==g.length&&e(window).off("scroll",h).off("resize",h);a=null},100))},r=function(a,k){this.opt=e.extend({},b,k);this.image=e();this.textarea=e();this.callbackFn=[];this.callbackElem=[];this.extension=this.viewportHeight=0;this._filterItem(a);
this._makeThreshold();this._loadItem();if(0==g.length)e(window).on("scroll",h).on("resize",h);g.push(this)};r.prototype={_filterItem:function(a){var a=!a?[document]:e.isArray(a)?a:[a],b=this;e.each(a,function(a,d){b.image=b.image.add(e(d).find("img").filter(function(){return this.getAttribute("data-lazyload_src")}));b.textarea=b.textarea.add(e(d).find("textarea.cn6_lazyload"))})},_loadItem:function(a){a=a||e(window).scrollTop();this._loadImage(a);this._loadTextarea(a);this._fireCallback(a)},_loadImage:function(a){var b=
this,f=e();this.image.each(function(h,g){var i;if(g.parentNode)g=e(this),i=e(g).offset().top,b._checkThreshold(a,i)?(g.attr("src",g.attr("data-lazyload_src")),g.removeAttr("data-lazyload_src")):f=f.add(g)});this.image=f},_loadTextarea:function(a){var b=this,f=e();this.textarea.each(function(h,g){var i;if(g.parentNode)g=e(g),i=g.offset().top,b._checkThreshold(a,i)?(i=e("<div>"),i.html(g.val()),g.parent().append(i),g.css("display","none"),g.removeClass("cn6_lazyload")):f=f.add(g)});this.textarea=f},
_fireCallback:function(a){for(var b=[],f=[],h,g;(h=this.callbackElem.shift())&&(g=this.callbackFn.shift());){var i;h=h[0]?h[0]:h;if(!h.parentNode)return;h=e(h);i=h.offset().top;this._checkThreshold(a,i)?g.call(h):(b.push(h[0]),f.push(g))}this.callbackFn=f;this.callbackElem=b},_makeThreshold:function(){var a=this.opt.threshold,b=e(window).height();this.extension=0>a?0.1*b:a;this.viewportHeight=b},_checkThreshold:function(a,b){var f=this.viewportHeight,h=this.extension;return b>a-h&&b<a+f+h?!0:!1},
getItemLength:function(){return this.image.length+this.textarea.length+this.callbackElem.length},addCallback:function(a,b){this.callbackElem.push(a);this.callbackFn.push(b);this._loadItem()},destroy:function(){for(var a=0;a<g.length;a++)this==g[a]&&g.splice(a,1);this.image=this.textarea=this.callbackElem=this.callbackFn=null}};r.loadItem=function(a){a=e(a);0!=a.length&&(e.nodeName(a[0],"img")?a.each(function(a,b){var d=e(b);d.attr("src",d.attr("data-lazyload_src"));d.removeAttr("data-lazyload_src")}):
e.nodeName(a[0],"textarea")&&a.each(function(a,b){var d=e(b),h=e("div");h.html(d.val());d.parent.append(h);d.css("display","none")}))};i.Lazyload=r},{requires:["jquery"]});
CN6.add("widget-base",function(i){function b(a){a&&this.fit(e(a).eq(0))}var e=jQuery,g=i.Attribute;b.prototype={fit:function(a){this.id=this.mark(a);return a},elem:function(){return this.mark(this.id)},config:function(a,b){1==arguments.length&&(b=a,a=this.getConfig()||{});var g=i.merge(a,b),d=this,k;this.name=this.name||g.name||"Widget";if(k=g.events)e.each(k,function(a,b){d.on(a,b)}),g.events=k=null;this.set("conf",g);return g},getConfig:function(){return this.get("conf")},mark:function(a){var b,
g;return"string"==typeof a?e("#"+a):b=(b=a.attr("id"))?b:a.attr("id",g=i.guid())&&g},destroy:function(){this.trigger("destory");this.elem().remove();delete this._callbacks;delete this._callbacksOnce}};i.mix(b.prototype,g.prototype);i.mix(b,b.prototype,!1,["mark"]);i.Widget=b},{requires:["oop","event","attribute","jquery"]});CN6.add("widget-plugin",function(i){i.mix(i.Widget.prototype,{plug:function(b,e){i.mix(this,b,!0);b.setup&&b.setup(this,e);b.teardown&&this.on("destory",b.teardown)}})},{requires:["widget-base"]});
CN6.add("widget",function(){},{requires:["widget-base","widget-plugin"]});CN6.add("winflex",function(i){var b=jQuery,e=new i.Event,g=null,a=0,h=0;e.change=function(a){e.on("change",a)};e.adapt=function(){var g=b(window).width(),d=b(window).height(),i=0>a-g,f=0>h-d;a=g;h=d;e.trigger("change",b(window).width(),b(window).height(),i,f)};b(window).on("resize",function(){g||(g=setTimeout(function(){g=null;e.adapt()},500))});return e},{requires:["event","jquery"]});
CN6.add("girlfall",function(i){var b=jQuery,e=b(".pinterest-recommend").outerHeight()+15,g=new i.girlfall.Fall(b(".pinterest-canvas"),e),a=new i.Lazyload,h=function(){g.fillCanvas();0<g.allgirl.length&&a.addCallback(b("#pf"),h)};g.on("ready",h);i.winflex.change(function(){g.calculateColumn()})},{requires:["girlfall.Fall","lazyload","winflex"]});
CN6.add("girlfall.Fall",function(i){var b=jQuery,e=b("#pinterest-template-card")[0].text,g=function(a,h){this.fit(a);this.allgirl=this.colByNo=this.col=null;this.loadingArea=[0,0];this.barrier=h;this.initialize=b.proxy(this,"initialize");b.getJSON("/event/promimg/proLiveInfo.php").done(this.initialize)};i.mix(g.prototype,{initialize:function(a){if("001"==a.flag)this.allgirl=a.content,this.calculateColumn(),this.trigger("ready")},calculateColumn:function(){var a=Math.max(1E3,b(window).width()),h=this.col,
e=[],d={},a=Math.floor(a/249)+(234<=a%249?1:0);if(!(h&&h.length==a)){for(var g=0;g<a;g++)e[g]=d[g]={item:[],height:0,bound:249*g,no:g,ceiling:0};e[g-1].ceiling=this.barrier;this.elem().css("width",249*a-15);this.col=e;this.colByNo=d;h&&this.redistributeGirl(h)}},redistributeGirl:function(a){for(var b=[],e=0;e<a.length;e++)b=b.concat(a[e].item);this.distributeGirl(b);this.render();this.setLoadingArea()},getExtremeColumn:function(a){var b=this.col,e=this.colByNo;b.sort(a?function(a,b){return b.height+
b.ceiling-(a.height+a.ceiling)}:function(a,b){return a.height+a.ceiling-(b.height+b.ceiling)});return e[b[0].no]},getShorterColumn:function(){return this.getExtremeColumn(0)},getLongerColumn:function(){return this.getExtremeColumn(1)},render:function(){for(var a=this.col,e=0;e<a.length;e++)for(var g=a[e].item,d=a[e].ceiling,i=a[e].bound,f=0;f<g.length;f++){var o=g[f],q=b("#"+o.id);Modernizr.csstransforms?q.css("transform","translate("+i+"px, "+d+"px)"):(q.css("left",i),q.css("top",d));d+=o.height+
15}a=this.getLongerColumn();this.setCanvasHeight(a.height+a.ceiling)},loadGirl:function(){for(var a=this.allgirl.splice(0,2*this.col.length),b=this.elem(),e=0;e<a.length;e++){var d=a[e],g=this.createGirl(d),f=i.guid();Modernizr.csstransforms?g.css("transform","translate("+this.loadingArea[0]+"px, "+this.loadingArea[1]+"px)"):(g.css("left",this.loadingArea[0]),g.css("top",this.loadingArea[1]));g.attr("id",f);b.append(g);i.mix(d,{height:g.outerHeight(),id:f})}this.distributeGirl(a)},distributeGirl:function(a){for(var b=
0;b<a.length;b++){var e=a[b],d=this.getShorterColumn();d.item.push(e);d.height+=e.height+15}},fillCanvas:function(){if(!this.isCanvasFull()){for(;!this.isCanvasFull();)this.loadGirl();this.render();this.setLoadingArea()}},isCanvasFull:function(){var a=b(window).height(),e=b(window).scrollTop(),g=this.getShorterColumn();return g.height+g.ceiling>e+a||0==this.allgirl.length?!0:!1},createGirl:function(a){return b(Mustache.to_html(e,a))},setLoadingArea:function(){var a=this.colByNo["0"];this.loadingArea=
[a.bound,a.height+a.ceiling]},setCanvasHeight:function(a){this.elem().css("height",a)}});i.mix(g.prototype,i.Widget.prototype);return g},{requires:["widget","mustache","modernizr"]});(function(){var i,b,e=0;if(document.currentScript)b=document.currentScript;else{for(i=document.getElementsByTagName("script");e<i.length;e++)if("interactive"==i[e].readyState){b=i[e];break}b||(b=i[i.length-1])}i=b.src.match(/^(.*\/)\w+\.js$/)[1];CN6.config("base",i)})();CN6.add("girlfall",{path:"girlfall.js"});
