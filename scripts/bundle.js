(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
!function(e,t){"function"==typeof define&&define.amd?define(function(){return e.Reveal=t(),e.Reveal}):"object"==typeof exports?module.exports=t():e.Reveal=t()}(this,function(){"use strict";function e(e){if(t(),!on.transforms2d&&!on.transforms3d)return void document.body.setAttribute("class","no-transforms");window.addEventListener("load",x,!1);var r=Xt.getQueryHash();"undefined"!=typeof r.dependencies&&delete r.dependencies,d(en,e),d(en,r),m(),n()}function t(){on.transforms3d="WebkitPerspective"in document.body.style||"MozPerspective"in document.body.style||"msPerspective"in document.body.style||"OPerspective"in document.body.style||"perspective"in document.body.style,on.transforms2d="WebkitTransform"in document.body.style||"MozTransform"in document.body.style||"msTransform"in document.body.style||"OTransform"in document.body.style||"transform"in document.body.style,on.requestAnimationFrameMethod=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame,on.requestAnimationFrame="function"==typeof on.requestAnimationFrameMethod,on.canvas=!!document.createElement("canvas").getContext,Kt=navigator.userAgent.match(/(iphone|ipod|android)/gi)}function n(){function e(){a.length&&head.js.apply(null,a),r()}function t(t){head.ready(t.src.match(/([\w\d_\-]*)\.?js$|[^\\\/]*$/i)[0],function(){"function"==typeof t.callback&&t.callback.apply(this),0===--o&&e()})}for(var n=[],a=[],o=0,i=0,s=en.dependencies.length;s>i;i++){var c=en.dependencies[i];(!c.condition||c.condition())&&(c.async?a.push(c.src):n.push(c.src),t(c))}n.length?(o=n.length,head.js.apply(null,n)):e()}function r(){a(),X(),s(),nt(),V(!0),setTimeout(function(){an.slides.classList.remove("no-transition"),tn=!0,y("ready",{indexh:Ut,indexv:Bt,currentSlide:_t})},1)}function a(){an.theme=document.querySelector("#theme"),an.wrapper=document.querySelector(".reveal"),an.slides=document.querySelector(".reveal .slides"),an.slides.classList.add("no-transition"),an.background=o(an.wrapper,"div","backgrounds",null),an.progress=o(an.wrapper,"div","progress","<span></span>"),an.progressbar=an.progress.querySelector("span"),o(an.wrapper,"aside","controls",'<div class="navigate-left"></div><div class="navigate-right"></div><div class="navigate-up"></div><div class="navigate-down"></div>'),an.slideNumber=o(an.wrapper,"div","slide-number",""),o(an.wrapper,"div","state-background",null),o(an.wrapper,"div","pause-overlay",null),an.controls=document.querySelector(".reveal .controls"),an.controlsLeft=u(document.querySelectorAll(".navigate-left")),an.controlsRight=u(document.querySelectorAll(".navigate-right")),an.controlsUp=u(document.querySelectorAll(".navigate-up")),an.controlsDown=u(document.querySelectorAll(".navigate-down")),an.controlsPrev=u(document.querySelectorAll(".navigate-prev")),an.controlsNext=u(document.querySelectorAll(".navigate-next"))}function o(e,t,n,r){var a=e.querySelector("."+n);return a||(a=document.createElement(t),a.classList.add(n),null!==r&&(a.innerHTML=r),e.appendChild(a)),a}function i(){function e(e,t){var n={background:e.getAttribute("data-background"),backgroundSize:e.getAttribute("data-background-size"),backgroundImage:e.getAttribute("data-background-image"),backgroundColor:e.getAttribute("data-background-color"),backgroundRepeat:e.getAttribute("data-background-repeat"),backgroundPosition:e.getAttribute("data-background-position"),backgroundTransition:e.getAttribute("data-background-transition")},r=document.createElement("div");return r.className="slide-background",n.background&&(/^(http|file|\/\/)/gi.test(n.background)||/\.(svg|png|jpg|jpeg|gif|bmp)$/gi.test(n.background)?r.style.backgroundImage="url("+n.background+")":r.style.background=n.background),(n.background||n.backgroundColor||n.backgroundImage)&&r.setAttribute("data-background-hash",n.background+n.backgroundSize+n.backgroundImage+n.backgroundColor+n.backgroundRepeat+n.backgroundPosition+n.backgroundTransition),n.backgroundSize&&(r.style.backgroundSize=n.backgroundSize),n.backgroundImage&&(r.style.backgroundImage='url("'+n.backgroundImage+'")'),n.backgroundColor&&(r.style.backgroundColor=n.backgroundColor),n.backgroundRepeat&&(r.style.backgroundRepeat=n.backgroundRepeat),n.backgroundPosition&&(r.style.backgroundPosition=n.backgroundPosition),n.backgroundTransition&&r.setAttribute("data-background-transition",n.backgroundTransition),t.appendChild(r),r}g()&&document.body.classList.add("print-pdf"),an.background.innerHTML="",an.background.classList.add("no-transition"),u(document.querySelectorAll(Zt)).forEach(function(t){var n;n=g()?e(t,t):e(t,an.background),u(t.querySelectorAll("section")).forEach(function(t){g()?e(t,t):e(t,n)})}),en.parallaxBackgroundImage?(an.background.style.backgroundImage='url("'+en.parallaxBackgroundImage+'")',an.background.style.backgroundSize=en.parallaxBackgroundSize,setTimeout(function(){an.wrapper.classList.add("has-parallax-background")},1)):(an.background.style.backgroundImage="",an.wrapper.classList.remove("has-parallax-background"))}function s(e){var t=document.querySelectorAll(Qt).length;if(an.wrapper.classList.remove(en.transition),"object"==typeof e&&d(en,e),on.transforms3d===!1&&(en.transition="linear"),an.wrapper.classList.add(en.transition),an.wrapper.setAttribute("data-transition-speed",en.transitionSpeed),an.wrapper.setAttribute("data-background-transition",en.backgroundTransition),an.controls.style.display=en.controls?"block":"none",an.progress.style.display=en.progress?"block":"none",en.rtl?an.wrapper.classList.add("rtl"):an.wrapper.classList.remove("rtl"),en.center?an.wrapper.classList.add("center"):an.wrapper.classList.remove("center"),en.mouseWheel?(document.addEventListener("DOMMouseScroll",qt,!1),document.addEventListener("mousewheel",qt,!1)):(document.removeEventListener("DOMMouseScroll",qt,!1),document.removeEventListener("mousewheel",qt,!1)),en.rollingLinks?w():k(),en.previewLinks?L():(S(),L("[data-preview-link]")),t>1&&en.autoSlide&&en.autoSlideStoppable&&on.canvas&&on.requestAnimationFrame?(Vt=new Yt(an.wrapper,function(){return Math.min(Math.max((Date.now()-vn)/fn,0),1)}),Vt.on("click",Wt),hn=!1):Vt&&(Vt.destroy(),Vt=null),en.theme&&an.theme){var n=an.theme.getAttribute("href"),r=/[^\/]*?(?=\.css)/,a=n.match(r)[0];en.theme!==a&&(n=n.replace(r,en.theme),an.theme.setAttribute("href",n))}Y()}function c(){if(un=!0,window.addEventListener("hashchange",Rt,!1),window.addEventListener("resize",Ht,!1),en.touch&&(an.wrapper.addEventListener("touchstart",kt,!1),an.wrapper.addEventListener("touchmove",Lt,!1),an.wrapper.addEventListener("touchend",St,!1),window.navigator.msPointerEnabled&&(an.wrapper.addEventListener("MSPointerDown",Et,!1),an.wrapper.addEventListener("MSPointerMove",At,!1),an.wrapper.addEventListener("MSPointerUp",xt,!1))),en.keyboard&&document.addEventListener("keydown",wt,!1),en.progress&&an.progress&&an.progress.addEventListener("click",Mt,!1),en.focusBodyOnPageVisiblityChange){var e;"hidden"in document?e="visibilitychange":"msHidden"in document?e="msvisibilitychange":"webkitHidden"in document&&(e="webkitvisibilitychange"),e&&document.addEventListener(e,Ot,!1)}["touchstart","click"].forEach(function(e){an.controlsLeft.forEach(function(t){t.addEventListener(e,Tt,!1)}),an.controlsRight.forEach(function(t){t.addEventListener(e,Pt,!1)}),an.controlsUp.forEach(function(t){t.addEventListener(e,Nt,!1)}),an.controlsDown.forEach(function(t){t.addEventListener(e,It,!1)}),an.controlsPrev.forEach(function(t){t.addEventListener(e,Ct,!1)}),an.controlsNext.forEach(function(t){t.addEventListener(e,Dt,!1)})})}function l(){un=!1,document.removeEventListener("keydown",wt,!1),window.removeEventListener("hashchange",Rt,!1),window.removeEventListener("resize",Ht,!1),an.wrapper.removeEventListener("touchstart",kt,!1),an.wrapper.removeEventListener("touchmove",Lt,!1),an.wrapper.removeEventListener("touchend",St,!1),window.navigator.msPointerEnabled&&(an.wrapper.removeEventListener("MSPointerDown",Et,!1),an.wrapper.removeEventListener("MSPointerMove",At,!1),an.wrapper.removeEventListener("MSPointerUp",xt,!1)),en.progress&&an.progress&&an.progress.removeEventListener("click",Mt,!1),["touchstart","click"].forEach(function(e){an.controlsLeft.forEach(function(t){t.removeEventListener(e,Tt,!1)}),an.controlsRight.forEach(function(t){t.removeEventListener(e,Pt,!1)}),an.controlsUp.forEach(function(t){t.removeEventListener(e,Nt,!1)}),an.controlsDown.forEach(function(t){t.removeEventListener(e,It,!1)}),an.controlsPrev.forEach(function(t){t.removeEventListener(e,Ct,!1)}),an.controlsNext.forEach(function(t){t.removeEventListener(e,Dt,!1)})})}function d(e,t){for(var n in t)e[n]=t[n]}function u(e){return Array.prototype.slice.call(e)}function f(e,t){var n=e.x-t.x,r=e.y-t.y;return Math.sqrt(n*n+r*r)}function p(e,t){e.style.WebkitTransform=t,e.style.MozTransform=t,e.style.msTransform=t,e.style.OTransform=t,e.style.transform=t}function v(e){var t=0;if(e){var n=0;u(e.childNodes).forEach(function(e){"number"==typeof e.offsetTop&&e.style&&("absolute"===e.style.position&&(n+=1),t=Math.max(t,e.offsetTop+e.offsetHeight))}),0===n&&(t=e.offsetHeight)}return t}function h(e,t){if(t=t||0,e){var n=e.parentNode,r=n.childNodes;u(r).forEach(function(n){if("number"==typeof n.offsetHeight&&n!==e){var r=window.getComputedStyle(n),a=parseInt(r.marginTop,10),o=parseInt(r.marginBottom,10);t-=n.offsetHeight+a+o}});var a=window.getComputedStyle(e);t-=parseInt(a.marginTop,10)+parseInt(a.marginBottom,10)}return t}function g(){return/print-pdf/gi.test(window.location.search)}function m(){en.hideAddressBar&&Kt&&(window.addEventListener("load",b,!1),window.addEventListener("orientationchange",b,!1))}function b(){setTimeout(function(){window.scrollTo(0,1)},10)}function y(e,t){var n=document.createEvent("HTMLEvents",1,2);n.initEvent(e,!0,!0),d(n,t),an.wrapper.dispatchEvent(n)}function w(){if(on.transforms3d&&!("msPerspective"in document.body.style))for(var e=document.querySelectorAll(Qt+" a:not(.image)"),t=0,n=e.length;n>t;t++){var r=e[t];if(!(!r.textContent||r.querySelector("*")||r.className&&r.classList.contains(r,"roll"))){var a=document.createElement("span");a.setAttribute("data-title",r.text),a.innerHTML=r.innerHTML,r.classList.add("roll"),r.innerHTML="",r.appendChild(a)}}}function k(){for(var e=document.querySelectorAll(Qt+" a.roll"),t=0,n=e.length;n>t;t++){var r=e[t],a=r.querySelector("span");a&&(r.classList.remove("roll"),r.innerHTML=a.innerHTML)}}function L(e){var t=u(document.querySelectorAll(e?e:"a"));t.forEach(function(e){/^(http|www)/gi.test(e.getAttribute("href"))&&e.addEventListener("click",Ft,!1)})}function S(){var e=u(document.querySelectorAll("a"));e.forEach(function(e){/^(http|www)/gi.test(e.getAttribute("href"))&&e.removeEventListener("click",Ft,!1)})}function E(e){A(),an.preview=document.createElement("div"),an.preview.classList.add("preview-link-overlay"),an.wrapper.appendChild(an.preview),an.preview.innerHTML=["<header>",'<a class="close" href="#"><span class="icon"></span></a>','<a class="external" href="'+e+'" target="_blank"><span class="icon"></span></a>',"</header>",'<div class="spinner"></div>','<div class="viewport">','<iframe src="'+e+'"></iframe>',"</div>"].join(""),an.preview.querySelector("iframe").addEventListener("load",function(){an.preview.classList.add("loaded")},!1),an.preview.querySelector(".close").addEventListener("click",function(e){A(),e.preventDefault()},!1),an.preview.querySelector(".external").addEventListener("click",function(){A()},!1),setTimeout(function(){an.preview.classList.add("visible")},1)}function A(){an.preview&&(an.preview.setAttribute("src",""),an.preview.parentNode.removeChild(an.preview),an.preview=null)}function x(){if(an.wrapper&&!g()){var e=an.wrapper.offsetWidth,t=an.wrapper.offsetHeight;e-=t*en.margin,t-=t*en.margin;var n=en.width,r=en.height,a=20;q(en.width,en.height,a),"string"==typeof n&&/%$/.test(n)&&(n=parseInt(n,10)/100*e),"string"==typeof r&&/%$/.test(r)&&(r=parseInt(r,10)/100*t),an.slides.style.width=n+"px",an.slides.style.height=r+"px",rn=Math.min(e/n,t/r),rn=Math.max(rn,en.minScale),rn=Math.min(rn,en.maxScale),"undefined"==typeof an.slides.style.zoom||navigator.userAgent.match(/(iphone|ipod|ipad|android)/gi)?p(an.slides,"translate(-50%, -50%) scale("+rn+") translate(50%, 50%)"):an.slides.style.zoom=rn;for(var o=u(document.querySelectorAll(Qt)),i=0,s=o.length;s>i;i++){var c=o[i];"none"!==c.style.display&&(c.style.top=en.center||c.classList.contains("center")?c.classList.contains("stack")?0:Math.max(-(v(c)/2)-a,-r/2)+"px":"")}_(),Q()}}function q(e,t,n){u(an.slides.querySelectorAll("section > .stretch")).forEach(function(r){var a=h(r,t-2*n);if(/(img|video)/gi.test(r.nodeName)){var o=r.naturalWidth||r.videoWidth,i=r.naturalHeight||r.videoHeight,s=Math.min(e/o,a/i);r.style.width=o*s+"px",r.style.height=i*s+"px"}else r.style.width=e+"px",r.style.height=a+"px"})}function M(e,t){"object"==typeof e&&"function"==typeof e.setAttribute&&e.setAttribute("data-previous-indexv",t||0)}function T(e){if("object"==typeof e&&"function"==typeof e.setAttribute&&e.classList.contains("stack")){var t=e.hasAttribute("data-start-indexv")?"data-start-indexv":"data-previous-indexv";return parseInt(e.getAttribute(t)||0,10)}return 0}function P(){if(en.overview){dt();var e=an.wrapper.classList.contains("overview"),t=window.innerWidth<400?1e3:2500;an.wrapper.classList.add("overview"),an.wrapper.classList.remove("overview-deactivating"),clearTimeout(ln),clearTimeout(dn),ln=setTimeout(function(){for(var n=document.querySelectorAll(Zt),r=0,a=n.length;a>r;r++){var o=n[r],i=en.rtl?-105:105;if(o.setAttribute("data-index-h",r),p(o,"translateZ(-"+t+"px) translate("+(r-Ut)*i+"%, 0%)"),o.classList.contains("stack"))for(var s=o.querySelectorAll("section"),c=0,l=s.length;l>c;c++){var d=r===Ut?Bt:T(o),u=s[c];u.setAttribute("data-index-h",r),u.setAttribute("data-index-v",c),p(u,"translate(0%, "+105*(c-d)+"%)"),u.addEventListener("click",zt,!0)}else o.addEventListener("click",zt,!0)}j(),x(),e||y("overviewshown",{indexh:Ut,indexv:Bt,currentSlide:_t})},10)}}function N(){en.overview&&(clearTimeout(ln),clearTimeout(dn),an.wrapper.classList.remove("overview"),an.wrapper.classList.add("overview-deactivating"),dn=setTimeout(function(){an.wrapper.classList.remove("overview-deactivating")},1),u(document.querySelectorAll(Qt)).forEach(function(e){p(e,""),e.removeEventListener("click",zt,!0)}),W(Ut,Bt),lt(),y("overviewhidden",{indexh:Ut,indexv:Bt,currentSlide:_t}))}function I(e){"boolean"==typeof e?e?P():N():C()?N():P()}function C(){return an.wrapper.classList.contains("overview")}function D(e){return e=e?e:_t,e&&e.parentNode&&!!e.parentNode.nodeName.match(/section/i)}function R(){var e=document.body,t=e.requestFullScreen||e.webkitRequestFullscreen||e.webkitRequestFullScreen||e.mozRequestFullScreen||e.msRequestFullScreen;t&&t.apply(e)}function H(){var e=an.wrapper.classList.contains("paused");dt(),an.wrapper.classList.add("paused"),e===!1&&y("paused")}function O(){var e=an.wrapper.classList.contains("paused");an.wrapper.classList.remove("paused"),lt(),e&&y("resumed")}function z(){F()?O():H()}function F(){return an.wrapper.classList.contains("paused")}function W(e,t,n,r){jt=_t;var a=document.querySelectorAll(Zt);void 0===t&&(t=T(a[e])),jt&&jt.parentNode&&jt.parentNode.classList.contains("stack")&&M(jt.parentNode,Bt);var o=nn.concat();nn.length=0;var i=Ut||0,s=Bt||0;Ut=B(Zt,void 0===e?Ut:e),Bt=B(Gt,void 0===t?Bt:t),j(),x();e:for(var c=0,l=nn.length;l>c;c++){for(var d=0;d<o.length;d++)if(o[d]===nn[c]){o.splice(d,1);continue e}document.documentElement.classList.add(nn[c]),y(nn[c])}for(;o.length;)document.documentElement.classList.remove(o.pop());C()&&P();var f=a[Ut],p=f.querySelectorAll("section");_t=p[Bt]||f,"undefined"!=typeof n&&it(n);var v=Ut!==i||Bt!==s;v?y("slidechanged",{indexh:Ut,indexv:Bt,previousSlide:jt,currentSlide:_t,origin:r}):jt=null,jt&&(jt.classList.remove("present"),document.querySelector(Jt).classList.contains("present")&&setTimeout(function(){var e,t=u(document.querySelectorAll(Zt+".stack"));for(e in t)t[e]&&M(t[e],0)},0)),v&&(et(jt),J(_t)),K(),_(),V(),Q(),$(),rt(),lt()}function Y(){l(),c(),x(),fn=en.autoSlide,lt(),i(),U(),K(),_(),V(!0),$()}function X(){var e=u(document.querySelectorAll(Zt));e.forEach(function(e){var t=u(e.querySelectorAll("section"));t.forEach(function(e,t){t>0&&(e.classList.remove("present"),e.classList.remove("past"),e.classList.add("future"))})})}function U(){var e=u(document.querySelectorAll(Zt));e.forEach(function(e){var t=u(e.querySelectorAll("section"));t.forEach(function(e){ot(e.querySelectorAll(".fragment"))}),0===t.length&&ot(e.querySelectorAll(".fragment"))})}function B(e,t){var n=u(document.querySelectorAll(e)),r=n.length;if(r){en.loop&&(t%=r,0>t&&(t=r+t)),t=Math.max(Math.min(t,r-1),0);for(var a=0;r>a;a++){var o=n[a],i=en.rtl&&!D(o);if(o.classList.remove("past"),o.classList.remove("present"),o.classList.remove("future"),o.setAttribute("hidden",""),t>a){o.classList.add(i?"future":"past");for(var s=u(o.querySelectorAll(".fragment"));s.length;){var c=s.pop();c.classList.add("visible"),c.classList.remove("current-fragment")}}else if(a>t){o.classList.add(i?"past":"future");for(var l=u(o.querySelectorAll(".fragment.visible"));l.length;){var d=l.pop();d.classList.remove("visible"),d.classList.remove("current-fragment")}}o.querySelector("section")&&o.classList.add("stack")}n[t].classList.add("present"),n[t].removeAttribute("hidden");var f=n[t].getAttribute("data-state");f&&(nn=nn.concat(f.split(" ")))}else t=0;return t}function j(){var e,t,n=u(document.querySelectorAll(Zt)),r=n.length;if(r){var a=C()?10:en.viewDistance;Kt&&(a=C()?6:1);for(var o=0;r>o;o++){var i=n[o],s=u(i.querySelectorAll("section")),c=s.length;if(e=Math.abs((Ut-o)%(r-a))||0,i.style.display=e>a?"none":"block",c)for(var l=T(i),d=0;c>d;d++){var f=s[d];t=Math.abs(o===Ut?Bt-d:d-l),f.style.display=e+t>a?"none":"block"}}}}function _(){if(en.progress&&an.progress){var e=u(document.querySelectorAll(Zt)),t=document.querySelectorAll(Qt+":not(.stack)").length,n=0;e:for(var r=0;r<e.length;r++){for(var a=e[r],o=u(a.querySelectorAll("section")),i=0;i<o.length;i++){if(o[i].classList.contains("present"))break e;n++}if(a.classList.contains("present"))break;a.classList.contains("stack")===!1&&n++}an.progressbar.style.width=n/(t-1)*window.innerWidth+"px"}}function $(){if(en.slideNumber&&an.slideNumber){var e=Ut;Bt>0&&(e+=" - "+Bt),an.slideNumber.innerHTML=e}}function K(){var e=Z(),t=G();an.controlsLeft.concat(an.controlsRight).concat(an.controlsUp).concat(an.controlsDown).concat(an.controlsPrev).concat(an.controlsNext).forEach(function(e){e.classList.remove("enabled"),e.classList.remove("fragmented")}),e.left&&an.controlsLeft.forEach(function(e){e.classList.add("enabled")}),e.right&&an.controlsRight.forEach(function(e){e.classList.add("enabled")}),e.up&&an.controlsUp.forEach(function(e){e.classList.add("enabled")}),e.down&&an.controlsDown.forEach(function(e){e.classList.add("enabled")}),(e.left||e.up)&&an.controlsPrev.forEach(function(e){e.classList.add("enabled")}),(e.right||e.down)&&an.controlsNext.forEach(function(e){e.classList.add("enabled")}),_t&&(t.prev&&an.controlsPrev.forEach(function(e){e.classList.add("fragmented","enabled")}),t.next&&an.controlsNext.forEach(function(e){e.classList.add("fragmented","enabled")}),D(_t)?(t.prev&&an.controlsUp.forEach(function(e){e.classList.add("fragmented","enabled")}),t.next&&an.controlsDown.forEach(function(e){e.classList.add("fragmented","enabled")})):(t.prev&&an.controlsLeft.forEach(function(e){e.classList.add("fragmented","enabled")}),t.next&&an.controlsRight.forEach(function(e){e.classList.add("fragmented","enabled")})))}function V(e){var t=null,n=en.rtl?"future":"past",r=en.rtl?"past":"future";if(u(an.background.childNodes).forEach(function(a,o){Ut>o?a.className="slide-background "+n:o>Ut?a.className="slide-background "+r:(a.className="slide-background present",t=a),(e||o===Ut)&&u(a.childNodes).forEach(function(e,n){Bt>n?e.className="slide-background past":n>Bt?e.className="slide-background future":(e.className="slide-background present",o===Ut&&(t=e))})}),t){var a=$t?$t.getAttribute("data-background-hash"):null,o=t.getAttribute("data-background-hash");o&&o===a&&t!==$t&&an.background.classList.add("no-transition"),$t=t}setTimeout(function(){an.background.classList.remove("no-transition")},1)}function Q(){if(en.parallaxBackgroundImage){var e,t,n=document.querySelectorAll(Zt),r=document.querySelectorAll(Gt),a=an.background.style.backgroundSize.split(" ");1===a.length?e=t=parseInt(a[0],10):(e=parseInt(a[0],10),t=parseInt(a[1],10));var o=an.background.offsetWidth,i=n.length,s=-(e-o)/(i-1)*Ut,c=an.background.offsetHeight,l=r.length,d=l>0?-(t-c)/(l-1)*Bt:0;an.background.style.backgroundPosition=s+"px "+d+"px"}}function Z(){var e=document.querySelectorAll(Zt),t=document.querySelectorAll(Gt),n={left:Ut>0||en.loop,right:Ut<e.length-1||en.loop,up:Bt>0,down:Bt<t.length-1};if(en.rtl){var r=n.left;n.left=n.right,n.right=r}return n}function G(){if(_t&&en.fragments){var e=_t.querySelectorAll(".fragment"),t=_t.querySelectorAll(".fragment:not(.visible)");return{prev:e.length-t.length>0,next:!!t.length}}return{prev:!1,next:!1}}function J(e){e&&!tt()&&(u(e.querySelectorAll("video, audio")).forEach(function(e){e.hasAttribute("data-autoplay")&&e.play()}),u(e.querySelectorAll("iframe")).forEach(function(e){e.contentWindow.postMessage("slide:start","*")}),u(e.querySelectorAll('iframe[src*="youtube.com/embed/"]')).forEach(function(e){e.hasAttribute("data-autoplay")&&e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*")}))}function et(e){e&&(u(e.querySelectorAll("video, audio")).forEach(function(e){e.hasAttribute("data-ignore")||e.pause()}),u(e.querySelectorAll("iframe")).forEach(function(e){e.contentWindow.postMessage("slide:stop","*")}),u(e.querySelectorAll('iframe[src*="youtube.com/embed/"]')).forEach(function(e){e.hasAttribute("data-ignore")||"function"!=typeof e.contentWindow.postMessage||e.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")}))}function tt(){return!!window.location.search.match(/receiver/gi)}function nt(){var e=window.location.hash,t=e.slice(2).split("/"),n=e.replace(/#|\//gi,"");if(isNaN(parseInt(t[0],10))&&n.length){var r=document.querySelector("#"+n);if(r){var a=Xt.getIndices(r);W(a.h,a.v)}else W(Ut||0,Bt||0)}else{var o=parseInt(t[0],10)||0,i=parseInt(t[1],10)||0;(o!==Ut||i!==Bt)&&W(o,i)}}function rt(e){if(en.history)if(clearTimeout(cn),"number"==typeof e)cn=setTimeout(rt,e);else{var t="/";_t&&"string"==typeof _t.getAttribute("id")?t="/"+_t.getAttribute("id"):((Ut>0||Bt>0)&&(t+=Ut),Bt>0&&(t+="/"+Bt)),window.location.hash=t}}function at(e){var t,n=Ut,r=Bt;if(e){var a=D(e),o=a?e.parentNode:e,i=u(document.querySelectorAll(Zt));n=Math.max(i.indexOf(o),0),a&&(r=Math.max(u(e.parentNode.querySelectorAll("section")).indexOf(e),0))}if(!e&&_t){var s=_t.querySelectorAll(".fragment").length>0;if(s){var c=_t.querySelectorAll(".fragment.visible");t=c.length-1}}return{h:n,v:r,f:t}}function ot(e){e=u(e);var t=[],n=[],r=[];e.forEach(function(e){if(e.hasAttribute("data-fragment-index")){var r=parseInt(e.getAttribute("data-fragment-index"),10);t[r]||(t[r]=[]),t[r].push(e)}else n.push([e])}),t=t.concat(n);var a=0;return t.forEach(function(e){e.forEach(function(e){r.push(e),e.setAttribute("data-fragment-index",a)}),a++}),r}function it(e,t){if(_t&&en.fragments){var n=ot(_t.querySelectorAll(".fragment"));if(n.length){if("number"!=typeof e){var r=ot(_t.querySelectorAll(".fragment.visible")).pop();e=r?parseInt(r.getAttribute("data-fragment-index")||0,10):-1}"number"==typeof t&&(e+=t);var a=[],o=[];return u(n).forEach(function(t,n){t.hasAttribute("data-fragment-index")&&(n=parseInt(t.getAttribute("data-fragment-index"),10)),e>=n?(t.classList.contains("visible")||a.push(t),t.classList.add("visible"),t.classList.remove("current-fragment"),n===e&&t.classList.add("current-fragment")):(t.classList.contains("visible")&&o.push(t),t.classList.remove("visible"),t.classList.remove("current-fragment"))}),o.length&&y("fragmenthidden",{fragment:o[0],fragments:o}),a.length&&y("fragmentshown",{fragment:a[0],fragments:a}),K(),!(!a.length&&!o.length)}}return!1}function st(){return it(null,1)}function ct(){return it(null,-1)}function lt(){if(dt(),_t){var e=_t.parentNode?_t.parentNode.getAttribute("data-autoslide"):null,t=_t.getAttribute("data-autoslide");fn=t?parseInt(t,10):e?parseInt(e,10):en.autoSlide,u(_t.querySelectorAll("video, audio")).forEach(function(e){e.hasAttribute("data-autoplay")&&fn&&1e3*e.duration>fn&&(fn=1e3*e.duration+1e3)}),!fn||hn||F()||C()||Xt.isLastSlide()&&en.loop!==!0||(pn=setTimeout(bt,fn),vn=Date.now()),Vt&&Vt.setPlaying(-1!==pn)}}function dt(){clearTimeout(pn),pn=-1}function ut(){hn=!0,clearTimeout(pn),Vt&&Vt.setPlaying(!1)}function ft(){hn=!1,lt()}function pt(){en.rtl?(C()||st()===!1)&&Z().left&&W(Ut+1):(C()||ct()===!1)&&Z().left&&W(Ut-1)}function vt(){en.rtl?(C()||ct()===!1)&&Z().right&&W(Ut-1):(C()||st()===!1)&&Z().right&&W(Ut+1)}function ht(){(C()||ct()===!1)&&Z().up&&W(Ut,Bt-1)}function gt(){(C()||st()===!1)&&Z().down&&W(Ut,Bt+1)}function mt(){if(ct()===!1)if(Z().up)ht();else{var e=document.querySelector(Zt+".past:nth-child("+Ut+")");if(e){var t=e.querySelectorAll("section").length-1||void 0,n=Ut-1;W(n,t)}}}function bt(){st()===!1&&(Z().down?gt():vt()),lt()}function yt(){en.autoSlideStoppable&&ut()}function wt(e){yt(e);var t=(document.activeElement,!(!document.activeElement||!document.activeElement.type&&!document.activeElement.href&&"inherit"===document.activeElement.contentEditable));if(!(t||e.shiftKey&&32!==e.keyCode||e.altKey||e.ctrlKey||e.metaKey)){if(F()&&-1===[66,190,191].indexOf(e.keyCode))return!1;var n=!1;if("object"==typeof en.keyboard)for(var r in en.keyboard)if(parseInt(r,10)===e.keyCode){var a=en.keyboard[r];"function"==typeof a?a.apply(null,[e]):"string"==typeof a&&"function"==typeof Xt[a]&&Xt[a].call(),n=!0}if(n===!1)switch(n=!0,e.keyCode){case 80:case 33:mt();break;case 78:case 34:bt();break;case 72:case 37:pt();break;case 76:case 39:vt();break;case 75:case 38:ht();break;case 74:case 40:gt();break;case 36:W(0);break;case 35:W(Number.MAX_VALUE);break;case 32:C()?N():e.shiftKey?mt():bt();break;case 13:C()?N():n=!1;break;case 66:case 190:case 191:z();break;case 70:R();break;default:n=!1}n?e.preventDefault():27!==e.keyCode&&79!==e.keyCode||!on.transforms3d||(an.preview?A():I(),e.preventDefault()),lt()}}function kt(e){gn.startX=e.touches[0].clientX,gn.startY=e.touches[0].clientY,gn.startCount=e.touches.length,2===e.touches.length&&en.overview&&(gn.startSpan=f({x:e.touches[1].clientX,y:e.touches[1].clientY},{x:gn.startX,y:gn.startY}))}function Lt(e){if(gn.captured)navigator.userAgent.match(/android/gi)&&e.preventDefault();else{yt(e);var t=e.touches[0].clientX,n=e.touches[0].clientY;if(2===e.touches.length&&2===gn.startCount&&en.overview){var r=f({x:e.touches[1].clientX,y:e.touches[1].clientY},{x:gn.startX,y:gn.startY});Math.abs(gn.startSpan-r)>gn.threshold&&(gn.captured=!0,r<gn.startSpan?P():N()),e.preventDefault()}else if(1===e.touches.length&&2!==gn.startCount){var a=t-gn.startX,o=n-gn.startY;a>gn.threshold&&Math.abs(a)>Math.abs(o)?(gn.captured=!0,pt()):a<-gn.threshold&&Math.abs(a)>Math.abs(o)?(gn.captured=!0,vt()):o>gn.threshold?(gn.captured=!0,ht()):o<-gn.threshold&&(gn.captured=!0,gt()),en.embedded?(gn.captured||D(_t))&&e.preventDefault():e.preventDefault()}}}function St(){gn.captured=!1}function Et(e){e.pointerType===e.MSPOINTER_TYPE_TOUCH&&(e.touches=[{clientX:e.clientX,clientY:e.clientY}],kt(e))}function At(e){e.pointerType===e.MSPOINTER_TYPE_TOUCH&&(e.touches=[{clientX:e.clientX,clientY:e.clientY}],Lt(e))}function xt(e){e.pointerType===e.MSPOINTER_TYPE_TOUCH&&(e.touches=[{clientX:e.clientX,clientY:e.clientY}],St(e))}function qt(e){if(Date.now()-sn>600){sn=Date.now();var t=e.detail||-e.wheelDelta;t>0?bt():mt()}}function Mt(e){yt(e),e.preventDefault();var t=u(document.querySelectorAll(Zt)).length,n=Math.floor(e.clientX/an.wrapper.offsetWidth*t);W(n)}function Tt(e){e.preventDefault(),yt(),pt()}function Pt(e){e.preventDefault(),yt(),vt()}function Nt(e){e.preventDefault(),yt(),ht()}function It(e){e.preventDefault(),yt(),gt()}function Ct(e){e.preventDefault(),yt(),mt()}function Dt(e){e.preventDefault(),yt(),bt()}function Rt(){nt()}function Ht(){x()}function Ot(){var e=document.webkitHidden||document.msHidden||document.hidden;e===!1&&document.activeElement!==document.body&&(document.activeElement.blur(),document.body.focus())}function zt(e){if(un&&C()){e.preventDefault();for(var t=e.target;t&&!t.nodeName.match(/section/gi);)t=t.parentNode;if(t&&!t.classList.contains("disabled")&&(N(),t.nodeName.match(/section/gi))){var n=parseInt(t.getAttribute("data-index-h"),10),r=parseInt(t.getAttribute("data-index-v"),10);W(n,r)}}}function Ft(e){var t=e.target.getAttribute("href");t&&(E(t),e.preventDefault())}function Wt(){Xt.isLastSlide()&&en.loop===!1?(W(0,0),ft()):hn?ft():ut()}function Yt(e,t){this.diameter=50,this.thickness=3,this.playing=!1,this.progress=0,this.progressOffset=1,this.container=e,this.progressCheck=t,this.canvas=document.createElement("canvas"),this.canvas.className="playback",this.canvas.width=this.diameter,this.canvas.height=this.diameter,this.context=this.canvas.getContext("2d"),this.container.appendChild(this.canvas),this.render()}var Xt,Ut,Bt,jt,_t,$t,Kt,Vt,Qt=".reveal .slides section",Zt=".reveal .slides>section",Gt=".reveal .slides>section.present>section",Jt=".reveal .slides>section:first-of-type",en={width:960,height:700,margin:.1,minScale:.2,maxScale:1,controls:!0,progress:!0,slideNumber:!1,history:!1,keyboard:!0,overview:!0,center:!0,touch:!0,loop:!1,rtl:!1,fragments:!0,embedded:!1,autoSlide:0,autoSlideStoppable:!0,mouseWheel:!1,rollingLinks:!1,hideAddressBar:!0,previewLinks:!1,focusBodyOnPageVisiblityChange:!0,theme:null,transition:"default",transitionSpeed:"default",backgroundTransition:"default",parallaxBackgroundImage:"",parallaxBackgroundSize:"",viewDistance:3,dependencies:[]},tn=!1,nn=[],rn=1,an={},on={},sn=0,cn=0,ln=0,dn=0,un=!1,fn=0,pn=0,vn=-1,hn=!1,gn={startX:0,startY:0,startSpan:0,startCount:0,captured:!1,threshold:40};return Yt.prototype.setPlaying=function(e){var t=this.playing;this.playing=e,!t&&this.playing?this.animate():this.render()},Yt.prototype.animate=function(){var e=this.progress;this.progress=this.progressCheck(),e>.8&&this.progress<.2&&(this.progressOffset=this.progress),this.render(),this.playing&&on.requestAnimationFrameMethod.call(window,this.animate.bind(this))},Yt.prototype.render=function(){var e=this.playing?this.progress:0,t=this.diameter/2-this.thickness,n=this.diameter/2,r=this.diameter/2,a=14;this.progressOffset+=.1*(1-this.progressOffset);var o=-Math.PI/2+2*e*Math.PI,i=-Math.PI/2+2*this.progressOffset*Math.PI;this.context.save(),this.context.clearRect(0,0,this.diameter,this.diameter),this.context.beginPath(),this.context.arc(n,r,t+2,0,2*Math.PI,!1),this.context.fillStyle="rgba( 0, 0, 0, 0.4 )",this.context.fill(),this.context.beginPath(),this.context.arc(n,r,t,0,2*Math.PI,!1),this.context.lineWidth=this.thickness,this.context.strokeStyle="#666",this.context.stroke(),this.playing&&(this.context.beginPath(),this.context.arc(n,r,t,i,o,!1),this.context.lineWidth=this.thickness,this.context.strokeStyle="#fff",this.context.stroke()),this.context.translate(n-a/2,r-a/2),this.playing?(this.context.fillStyle="#fff",this.context.fillRect(0,0,a/2-2,a),this.context.fillRect(a/2+2,0,a/2-2,a)):(this.context.beginPath(),this.context.translate(2,0),this.context.moveTo(0,0),this.context.lineTo(a-2,a/2),this.context.lineTo(0,a),this.context.fillStyle="#fff",this.context.fill()),this.context.restore()},Yt.prototype.on=function(e,t){this.canvas.addEventListener(e,t,!1)},Yt.prototype.off=function(e,t){this.canvas.removeEventListener(e,t,!1)},Yt.prototype.destroy=function(){this.playing=!1,this.canvas.parentNode&&this.container.removeChild(this.canvas)},Xt={initialize:e,configure:s,sync:Y,slide:W,left:pt,right:vt,up:ht,down:gt,prev:mt,next:bt,navigateFragment:it,prevFragment:ct,nextFragment:st,navigateTo:W,navigateLeft:pt,navigateRight:vt,navigateUp:ht,navigateDown:gt,navigatePrev:mt,navigateNext:bt,layout:x,availableRoutes:Z,availableFragments:G,toggleOverview:I,togglePause:z,isOverview:C,isPaused:F,addEventListeners:c,removeEventListeners:l,getIndices:at,getSlide:function(e,t){var n=document.querySelectorAll(Zt)[e],r=n&&n.querySelectorAll("section");
return"undefined"!=typeof t?r?r[t]:void 0:n},getPreviousSlide:function(){return jt},getCurrentSlide:function(){return _t},getScale:function(){return rn},getConfig:function(){return en},getQueryHash:function(){var e={};location.search.replace(/[A-Z0-9]+?=([\w\.%-]*)/gi,function(t){e[t.split("=").shift()]=t.split("=").pop()});for(var t in e){var n=e[t];e[t]=unescape(n),"null"===n?e[t]=null:"true"===n?e[t]=!0:"false"===n?e[t]=!1:n.match(/^\d+$/)&&(e[t]=parseFloat(n))}return e},isFirstSlide:function(){return null==document.querySelector(Qt+".past")?!0:!1},isLastSlide:function(){return _t?_t.nextElementSibling?!1:D(_t)&&_t.parentNode.nextElementSibling?!1:!0:!1},isReady:function(){return tn},addEventListener:function(e,t,n){"addEventListener"in window&&(an.wrapper||document.querySelector(".reveal")).addEventListener(e,t,n)},removeEventListener:function(e,t,n){"addEventListener"in window&&(an.wrapper||document.querySelector(".reveal")).removeEventListener(e,t,n)}}});
},{}],2:[function(require,module,exports){
var Reveal=require("reveal.js/js/reveal.js",["Reveal"]);Reveal.initialize({controls:!0,progress:!0,slideNumber:!0,history:!0,keyboard:!0,overview:!0,center:!0,touch:!0,loop:!1,rtl:!1,fragments:!0,embedded:!1,autoSlide:0,autoSlideStoppable:!0,mouseWheel:!1,hideAddressBar:!0,previewLinks:!1,transition:"default",transitionSpeed:"default",backgroundTransition:"default",viewDistance:3,parallaxBackgroundImage:"",parallaxBackgroundSize:"",width:960,height:700,margin:.05,minScale:.2,maxScale:1.8});
},{"reveal.js/js/reveal.js":1}]},{},[2])