// Util 4.1.3
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("jquery")):"function"==typeof define&&define.amd?define(["jquery"],e):t.Util=e(t.jQuery)}(this,function(t){"use strict";return function(r){var e="transitionend";function t(t){var e=this,n=!1;return r(this).one(s.TRANSITION_END,function(){n=!0}),setTimeout(function(){n||s.triggerTransitionEnd(e)},t),this}var s={TRANSITION_END:"bsTransitionEnd",getUID:function(t){for(;t+=~~(1e6*Math.random()),document.getElementById(t););return t},getSelectorFromElement:function(t){var e=t.getAttribute("data-target");e&&"#"!==e||(e=t.getAttribute("href")||"");try{return document.querySelector(e)?e:null}catch(t){return null}},getTransitionDurationFromElement:function(t){if(!t)return 0;var e=r(t).css("transition-duration");return parseFloat(e)?(e=e.split(",")[0],1e3*parseFloat(e)):0},reflow:function(t){return t.offsetHeight},triggerTransitionEnd:function(t){r(t).trigger(e)},supportsTransitionEnd:function(){return Boolean(e)},isElement:function(t){return(t[0]||t).nodeType},typeCheckConfig:function(t,e,n){for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){var i=n[r],o=e[r],u=o&&s.isElement(o)?"element":(a=o,{}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());if(!new RegExp(i).test(u))throw new Error(t.toUpperCase()+': Option "'+r+'" provided type "'+u+'" but expected type "'+i+'".')}var a}};return r.fn.emulateTransitionEnd=t,r.event.special[s.TRANSITION_END]={bindType:e,delegateType:e,handle:function(t){if(r(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}},s}(t=t&&t.hasOwnProperty("default")?t.default:t)});

// /* smooth scroll */
// !function(){function v(){t.keyboardSupport&&X("keydown",S)}function m(){if(!n&&document.body){n=!0;var e=document.body,o=document.documentElement,s=window.innerHeight,f=e.scrollHeight;if(i=document.compatMode.indexOf("CSS")>=0?o:e,l=e,v(),top!=self)a=!0;else if(f>s&&(e.offsetHeight<=s||o.offsetHeight<=s)){var d=document.createElement("div");d.style.cssText="position:absolute; z-index:-10000; top:0; left:0; right:0; height:"+i.scrollHeight+"px",document.body.appendChild(d);var m;c=function(){m||(m=setTimeout(function(){r||(d.style.height="0",d.style.height=i.scrollHeight+"px",m=null)},500))},setTimeout(c,10),X("resize",c);var w={attributes:!0,childList:!0,characterData:!1};if(u=new j(c),u.observe(e,w),i.offsetHeight<=s){var h=document.createElement("div");h.style.clear="both",e.appendChild(h)}}t.fixedBackground||r||(e.style.backgroundAttachment="scroll",o.style.backgroundAttachment="scroll")}}function w(){u&&u.disconnect(),Y(Z,y),Y("mousedown",x),Y("keydown",S),Y("resize",c),Y("load",m)}function g(e,r,a){if(B(r,a),1!=t.accelerationMax){var o=Date.now(),n=o-b;if(n<t.accelerationDelta){var i=(1+50/n)/2;i>1&&(i=Math.min(i,t.accelerationMax),r*=i,a*=i)}b=Date.now()}if(h.push({x:r,y:a,lastX:0>r?.99:-.99,lastY:0>a?.99:-.99,start:Date.now()}),!p){var l=e===document.body,u=function(){for(var n=Date.now(),i=0,c=0,s=0;s<h.length;s++){var f=h[s],d=n-f.start,v=d>=t.animationTime,m=v?1:d/t.animationTime;t.pulseAlgorithm&&(m=_(m));var w=f.x*m-f.lastX>>0,b=f.y*m-f.lastY>>0;i+=w,c+=b,f.lastX+=w,f.lastY+=b,v&&(h.splice(s,1),s--)}l?window.scrollBy(i,c):(i&&(e.scrollLeft+=i),c&&(e.scrollTop+=c)),r||a||(h=[]),h.length?R(u,e,1e3/t.frameRate+1):p=!1};R(u,e,0),p=!0}}function y(e){n||m();var r=e.target,a=H(r);if(!a||e.defaultPrevented||e.ctrlKey)return!0;if(A(l,"embed")||A(r,"embed")&&/\.pdf/i.test(r.src)||A(l,"object"))return!0;var o=-e.wheelDeltaX||e.deltaX||0,i=-e.wheelDeltaY||e.deltaY||0;return f&&(e.wheelDeltaX&&K(e.wheelDeltaX,120)&&(o=-120*(e.wheelDeltaX/Math.abs(e.wheelDeltaX))),e.wheelDeltaY&&K(e.wheelDeltaY,120)&&(i=-120*(e.wheelDeltaY/Math.abs(e.wheelDeltaY)))),o||i||(i=-e.wheelDelta||0),1===e.deltaMode&&(o*=40,i*=40),!t.touchpadSupport&&O(i)?!0:(Math.abs(o)>1.2&&(o*=t.stepSize/120),Math.abs(i)>1.2&&(i*=t.stepSize/120),g(a,o,i),e.preventDefault(),void T())}function S(e){var r=e.target,a=e.ctrlKey||e.altKey||e.metaKey||e.shiftKey&&e.keyCode!==d.spacebar;document.body.contains(l)||(l=document.activeElement);var o=/^(textarea|select|embed|object)$/i,n=/^(button|submit|radio|checkbox|file|color|image)$/i;if(o.test(r.nodeName)||A(r,"input")&&!n.test(r.type)||A(l,"video")||P(e)||r.isContentEditable||e.defaultPrevented||a)return!0;if((A(r,"button")||A(r,"input")&&n.test(r.type))&&e.keyCode===d.spacebar)return!0;var i,u=0,c=0,s=H(l),f=s.clientHeight;switch(s==document.body&&(f=window.innerHeight),e.keyCode){case d.up:c=-t.arrowScroll;break;case d.down:c=t.arrowScroll;break;case d.spacebar:i=e.shiftKey?1:-1,c=-i*f*.9;break;case d.pageup:c=.9*-f;break;case d.pagedown:c=.9*f;break;case d.home:c=-s.scrollTop;break;case d.end:var v=s.scrollHeight-s.scrollTop-f;c=v>0?v+10:0;break;case d.left:u=-t.arrowScroll;break;case d.right:u=t.arrowScroll;break;default:return!0}g(s,u,c),e.preventDefault(),T()}function x(e){l=e.target}function T(){clearTimeout(M),M=setInterval(function(){D={}},1e3)}function E(e,t){for(var r=e.length;r--;)D[k(e[r])]=t;return t}function H(e){var t=[],r=document.body,o=i.scrollHeight;do{var n=D[k(e)];if(n)return E(t,n);if(t.push(e),o===e.scrollHeight){var l=z(i)&&z(r),u=l||L(i);if(a&&C(i)||!a&&u)return E(t,F())}else if(C(e)&&L(e))return E(t,e)}while(e=e.parentElement)}function C(e){return e.clientHeight+10<e.scrollHeight}function z(e){var t=getComputedStyle(e,"").getPropertyValue("overflow-y");return"hidden"!==t}function L(e){var t=getComputedStyle(e,"").getPropertyValue("overflow-y");return"scroll"===t||"auto"===t}function X(e,t){window.addEventListener(e,t,!1)}function Y(e,t){window.removeEventListener(e,t,!1)}function A(e,t){return(e.nodeName||"").toLowerCase()===t.toLowerCase()}function B(e,t){e=e>0?1:-1,t=t>0?1:-1,(o.x!==e||o.y!==t)&&(o.x=e,o.y=t,h=[],b=0)}function O(e){return e?(s.length||(s=[e,e,e]),e=Math.abs(e),s.push(e),s.shift(),clearTimeout(N),N=setTimeout(function(){window.localStorage&&(localStorage.SS_deltaBuffer=s.join(","))},1e3),!q(120)&&!q(100)):void 0}function K(e,t){return Math.floor(e/t)==e/t}function q(e){return K(s[0],e)&&K(s[1],e)&&K(s[2],e)}function P(e){var t=e.target,r=!1;if(-1!=document.URL.indexOf("www.youtube.com/watch"))do if(r=t.classList&&t.classList.contains("html5-video-controls"))break;while(t=t.parentNode);return r}function I(e){var r,a,o;return e*=t.pulseScale,1>e?r=e-(1-Math.exp(-e)):(a=Math.exp(-1),e-=1,o=1-Math.exp(-e),r=a+o*(1-a)),r*t.pulseNormalize}function _(e){return e>=1?1:0>=e?0:(1==t.pulseNormalize&&(t.pulseNormalize/=I(1)),I(e))}function et(r){for(var a in r)e.hasOwnProperty(a)&&(t[a]=r[a])}var l,u,c,M,N,e={frameRate:150,animationTime:400,stepSize:100,pulseAlgorithm:!0,pulseScale:4,pulseNormalize:1,accelerationDelta:50,accelerationMax:3,keyboardSupport:!0,arrowScroll:50,touchpadSupport:!1,fixedBackground:!0,excluded:""},t=e,r=!1,a=!1,o={x:0,y:0},n=!1,i=document.documentElement,s=[],f=/^Mac/.test(navigator.platform),d={left:37,up:38,right:39,down:40,spacebar:32,pageup:33,pagedown:34,end:35,home:36},h=[],p=!1,b=Date.now(),k=function(){var e=0;return function(t){return t.uniqueID||(t.uniqueID=e++)}}(),D={};window.localStorage&&localStorage.SS_deltaBuffer&&(s=localStorage.SS_deltaBuffer.split(","));var Z,R=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e,t,r){window.setTimeout(e,r||1e3/60)}}(),j=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver,F=function(){var e;return function(){if(!e){var t=document.createElement("div");t.style.cssText="height:10000px;width:1px;",document.body.appendChild(t);{var r=document.body.scrollTop;document.documentElement.scrollTop}window.scrollBy(0,3),e=document.body.scrollTop!=r?document.body:document.documentElement,window.scrollBy(0,-3),document.body.removeChild(t)}return e}}(),V=window.navigator.userAgent,W=/Edge/.test(V),$=/chrome/i.test(V)&&!W,U=/safari/i.test(V)&&!W,G=/mobile/i.test(V),J=/Windows NT 6.1/i.test(V)&&/rv:11/i.test(V),Q=($||U||J)&&!G;"onwheel"in document.createElement("div")?Z="wheel":"onmousewheel"in document.createElement("div")&&(Z="mousewheel"),Z&&Q&&(X(Z,y),X("mousedown",x),X("load",m)),et.destroy=w,window.SmoothScrollOptions&&et(window.SmoothScrollOptions),"function"==typeof define&&define.amd?define(function(){return et}):"object"==typeof exports?module.exports=et:window.SmoothScroll=et}();

// Modal 4.1.3
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("jquery"),require("./util.js")):"function"==typeof define&&define.amd?define(["jquery","./util.js"],t):e.Modal=t(e.jQuery,e.Util)}(this,function(e,r){"use strict";function s(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function a(o){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{},t=Object.keys(s);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(s).filter(function(e){return Object.getOwnPropertyDescriptor(s,e).enumerable}))),t.forEach(function(e){var t,i,n;t=o,n=s[i=e],i in t?Object.defineProperty(t,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[i]=n})}return o}var l,d,h,c,t,u,_,f,m,g,p,S,b,v,i,y,w,E,I;return e=e&&e.hasOwnProperty("default")?e.default:e,r=r&&r.hasOwnProperty("default")?r.default:r,d="modal",c="."+(h="bs.modal"),t=(l=e).fn[d],u={backdrop:!0,keyboard:!0,focus:!0,show:!0},_={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},f={HIDE:"hide"+c,HIDDEN:"hidden"+c,SHOW:"show"+c,SHOWN:"shown"+c,FOCUSIN:"focusin"+c,RESIZE:"resize"+c,CLICK_DISMISS:"click.dismiss"+c,KEYDOWN_DISMISS:"keydown.dismiss"+c,MOUSEUP_DISMISS:"mouseup.dismiss"+c,MOUSEDOWN_DISMISS:"mousedown.dismiss"+c,CLICK_DATA_API:"click"+c+".data-api"},m="modal-scrollbar-measure",g="modal-backdrop",p="modal-open",S="fade",b="show",v=".modal-dialog",i='[data-toggle="modal"]',y='[data-dismiss="modal"]',w=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",E=".sticky-top",I=function(){function o(e,t){this._config=this._getConfig(t),this._element=e,this._dialog=e.querySelector(v),this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._scrollbarWidth=0}var e,t,i,n=o.prototype;return n.toggle=function(e){return this._isShown?this.hide():this.show(e)},n.show=function(e){var t=this;if(!this._isTransitioning&&!this._isShown){l(this._element).hasClass(S)&&(this._isTransitioning=!0);var i=l.Event(f.SHOW,{relatedTarget:e});l(this._element).trigger(i),this._isShown||i.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),l(document.body).addClass(p),this._setEscapeEvent(),this._setResizeEvent(),l(this._element).on(f.CLICK_DISMISS,y,function(e){return t.hide(e)}),l(this._dialog).on(f.MOUSEDOWN_DISMISS,function(){l(t._element).one(f.MOUSEUP_DISMISS,function(e){l(e.target).is(t._element)&&(t._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return t._showElement(e)}))}},n.hide=function(e){var t=this;if(e&&e.preventDefault(),!this._isTransitioning&&this._isShown){var i=l.Event(f.HIDE);if(l(this._element).trigger(i),this._isShown&&!i.isDefaultPrevented()){this._isShown=!1;var n=l(this._element).hasClass(S);if(n&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),l(document).off(f.FOCUSIN),l(this._element).removeClass(b),l(this._element).off(f.CLICK_DISMISS),l(this._dialog).off(f.MOUSEDOWN_DISMISS),n){var o=r.getTransitionDurationFromElement(this._element);l(this._element).one(r.TRANSITION_END,function(e){return t._hideModal(e)}).emulateTransitionEnd(o)}else this._hideModal()}}},n.dispose=function(){l.removeData(this._element,h),l(window,document,this._element,this._backdrop).off(c),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._scrollbarWidth=null},n.handleUpdate=function(){this._adjustDialog()},n._getConfig=function(e){return e=a({},u,e),r.typeCheckConfig(d,e,_),e},n._showElement=function(e){var t=this,i=l(this._element).hasClass(S);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.scrollTop=0,i&&r.reflow(this._element),l(this._element).addClass(b),this._config.focus&&this._enforceFocus();var n=l.Event(f.SHOWN,{relatedTarget:e}),o=function(){t._config.focus&&t._element.focus(),t._isTransitioning=!1,l(t._element).trigger(n)};if(i){var s=r.getTransitionDurationFromElement(this._element);l(this._dialog).one(r.TRANSITION_END,o).emulateTransitionEnd(s)}else o()},n._enforceFocus=function(){var t=this;l(document).off(f.FOCUSIN).on(f.FOCUSIN,function(e){document!==e.target&&t._element!==e.target&&0===l(t._element).has(e.target).length&&t._element.focus()})},n._setEscapeEvent=function(){var t=this;this._isShown&&this._config.keyboard?l(this._element).on(f.KEYDOWN_DISMISS,function(e){27===e.which&&(e.preventDefault(),t.hide())}):this._isShown||l(this._element).off(f.KEYDOWN_DISMISS)},n._setResizeEvent=function(){var t=this;this._isShown?l(window).on(f.RESIZE,function(e){return t.handleUpdate(e)}):l(window).off(f.RESIZE)},n._hideModal=function(){var e=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._isTransitioning=!1,this._showBackdrop(function(){l(document.body).removeClass(p),e._resetAdjustments(),e._resetScrollbar(),l(e._element).trigger(f.HIDDEN)})},n._removeBackdrop=function(){this._backdrop&&(l(this._backdrop).remove(),this._backdrop=null)},n._showBackdrop=function(e){var t=this,i=l(this._element).hasClass(S)?S:"";if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className=g,i&&this._backdrop.classList.add(i),l(this._backdrop).appendTo(document.body),l(this._element).on(f.CLICK_DISMISS,function(e){t._ignoreBackdropClick?t._ignoreBackdropClick=!1:e.target===e.currentTarget&&("static"===t._config.backdrop?t._element.focus():t.hide())}),i&&r.reflow(this._backdrop),l(this._backdrop).addClass(b),!e)return;if(!i)return void e();var n=r.getTransitionDurationFromElement(this._backdrop);l(this._backdrop).one(r.TRANSITION_END,e).emulateTransitionEnd(n)}else if(!this._isShown&&this._backdrop){l(this._backdrop).removeClass(b);var o=function(){t._removeBackdrop(),e&&e()};if(l(this._element).hasClass(S)){var s=r.getTransitionDurationFromElement(this._backdrop);l(this._backdrop).one(r.TRANSITION_END,o).emulateTransitionEnd(s)}else o()}else e&&e()},n._adjustDialog=function(){var e=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&e&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!e&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},n._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},n._checkScrollbar=function(){var e=document.body.getBoundingClientRect();this._isBodyOverflowing=e.left+e.right<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},n._setScrollbar=function(){var o=this;if(this._isBodyOverflowing){var e=[].slice.call(document.querySelectorAll(w)),t=[].slice.call(document.querySelectorAll(E));l(e).each(function(e,t){var i=t.style.paddingRight,n=l(t).css("padding-right");l(t).data("padding-right",i).css("padding-right",parseFloat(n)+o._scrollbarWidth+"px")}),l(t).each(function(e,t){var i=t.style.marginRight,n=l(t).css("margin-right");l(t).data("margin-right",i).css("margin-right",parseFloat(n)-o._scrollbarWidth+"px")});var i=document.body.style.paddingRight,n=l(document.body).css("padding-right");l(document.body).data("padding-right",i).css("padding-right",parseFloat(n)+this._scrollbarWidth+"px")}},n._resetScrollbar=function(){var e=[].slice.call(document.querySelectorAll(w));l(e).each(function(e,t){var i=l(t).data("padding-right");l(t).removeData("padding-right"),t.style.paddingRight=i||""});var t=[].slice.call(document.querySelectorAll(""+E));l(t).each(function(e,t){var i=l(t).data("margin-right");void 0!==i&&l(t).css("margin-right",i).removeData("margin-right")});var i=l(document.body).data("padding-right");l(document.body).removeData("padding-right"),document.body.style.paddingRight=i||""},n._getScrollbarWidth=function(){var e=document.createElement("div");e.className=m,document.body.appendChild(e);var t=e.getBoundingClientRect().width-e.clientWidth;return document.body.removeChild(e),t},o._jQueryInterface=function(i,n){return this.each(function(){var e=l(this).data(h),t=a({},u,l(this).data(),"object"==typeof i&&i?i:{});if(e||(e=new o(this,t),l(this).data(h,e)),"string"==typeof i){if(void 0===e[i])throw new TypeError('No method named "'+i+'"');e[i](n)}else t.show&&e.show(n)})},e=o,i=[{key:"VERSION",get:function(){return"4.1.3"}},{key:"Default",get:function(){return u}}],(t=null)&&s(e.prototype,t),i&&s(e,i),o}(),l(document).on(f.CLICK_DATA_API,i,function(e){var t,i=this,n=r.getSelectorFromElement(this);n&&(t=document.querySelector(n));var o=l(t).data(h)?"toggle":a({},l(t).data(),l(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||e.preventDefault();var s=l(t).one(f.SHOW,function(e){e.isDefaultPrevented()||s.one(f.HIDDEN,function(){l(i).is(":visible")&&i.focus()})});I._jQueryInterface.call(l(t),o,this)}),l.fn[d]=I._jQueryInterface,l.fn[d].Constructor=I,l.fn[d].noConflict=function(){return l.fn[d]=t,I._jQueryInterface},I});

// Modal Center
!function(i){"use strict";function o(){i(this).css("display","block");var o=i(this).find(".modal-dialog"),s=(i(window).height()-o.height())/2,n=parseInt(o.css("marginBottom"),10);s<n&&(s=n),o.css("margin-top",s)}i(document).on("show.bs.modal",".modal",o),i(window).on("resize",function(){i(".modal:visible").each(o)})}(jQuery);

// Menu 
$(function($){
	// browser window scroll (in pixels) after which the "menu" link is shown
	var offset = 300;
	var navigationContainer = $('#cd-nav'),
		mainNavigation = navigationContainer.find('#cd-main-nav ul');

	//hide or show the "menu" link
	checkMenu();
	$(window).scroll(function(){
		checkMenu();
	});

	//open or close the menu clicking on the bottom "menu" link
	$('.cd-nav-trigger').on('click', function(){
		$(this).toggleClass('menu-is-open');
		//we need to remove the transitionEnd event handler (we add it when scolling up with the menu open)
		mainNavigation.off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend').toggleClass('is-visible');

	});

	function checkMenu() {
		if( $(window).scrollTop() > offset && !navigationContainer.hasClass('is-fixed')) {
			navigationContainer.addClass('is-fixed').find('.cd-nav-trigger').one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(){
				mainNavigation.addClass('has-transitions');
			});
		} else if ($(window).scrollTop() <= offset) {
			//check if the menu is open when scrolling up
			if( mainNavigation.hasClass('is-visible')  && !$('html').hasClass('no-csstransitions') ) {
				//close the menu with animation
				mainNavigation.addClass('is-hidden').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
					//wait for the menu to be closed and do the rest
					mainNavigation.removeClass('is-visible is-hidden has-transitions');
					navigationContainer.removeClass('is-fixed');
					$('.cd-nav-trigger').removeClass('menu-is-open');
				});
			//check if the menu is open when scrolling up - fallback if transitions are not supported
			} else if( mainNavigation.hasClass('is-visible')  && $('html').hasClass('no-csstransitions') ) {
					mainNavigation.removeClass('is-visible has-transitions');
					navigationContainer.removeClass('is-fixed');
					$('.cd-nav-trigger').removeClass('menu-is-open');
			//scrolling up with menu closed
			} else {
				navigationContainer.removeClass('is-fixed');
				mainNavigation.removeClass('has-transitions');
			}
		} 
	}
});

$(window).scroll(function(){
    if ($(window).scrollTop() > $('header').height()) {
        $('header').addClass('is-fixed');
    }
    else {
        $('header').removeClass('is-fixed');
    }
});
// language mobile
$(document).ready(function(){
	if ($(window).width() <= 1024) {
        $('.context-language').click(function(){
			$('.select-language').toggleClass('is-active')
		});
    }
})