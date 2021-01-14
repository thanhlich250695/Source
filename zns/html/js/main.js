// Util 4.1.3
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("jquery")):"function"==typeof define&&define.amd?define(["jquery"],e):t.Util=e(t.jQuery)}(this,function(t){"use strict";return function(r){var e="transitionend";function t(t){var e=this,n=!1;return r(this).one(s.TRANSITION_END,function(){n=!0}),setTimeout(function(){n||s.triggerTransitionEnd(e)},t),this}var s={TRANSITION_END:"bsTransitionEnd",getUID:function(t){for(;t+=~~(1e6*Math.random()),document.getElementById(t););return t},getSelectorFromElement:function(t){var e=t.getAttribute("data-target");e&&"#"!==e||(e=t.getAttribute("href")||"");try{return document.querySelector(e)?e:null}catch(t){return null}},getTransitionDurationFromElement:function(t){if(!t)return 0;var e=r(t).css("transition-duration");return parseFloat(e)?(e=e.split(",")[0],1e3*parseFloat(e)):0},reflow:function(t){return t.offsetHeight},triggerTransitionEnd:function(t){r(t).trigger(e)},supportsTransitionEnd:function(){return Boolean(e)},isElement:function(t){return(t[0]||t).nodeType},typeCheckConfig:function(t,e,n){for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){var i=n[r],o=e[r],u=o&&s.isElement(o)?"element":(a=o,{}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());if(!new RegExp(i).test(u))throw new Error(t.toUpperCase()+': Option "'+r+'" provided type "'+u+'" but expected type "'+i+'".')}var a}};return r.fn.emulateTransitionEnd=t,r.event.special[s.TRANSITION_END]={bindType:e,delegateType:e,handle:function(t){if(r(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}},s}(t=t&&t.hasOwnProperty("default")?t.default:t)});

// Collapse 4.1.3
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("jquery"),require("./util.js")):"function"==typeof define&&define.amd?define(["jquery","./util.js"],t):e.Collapse=t(e.jQuery,e.Util)}(this,function(e,o){"use strict";function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(i){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{},t=Object.keys(l);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(l).filter(function(e){return Object.getOwnPropertyDescriptor(l,e).enumerable}))),t.forEach(function(e){var t,n,r;t=i,r=l[n=e],n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r})}return i}var c,a,g,t,n,u,h,f,d,_,m,p,y,v,C,A,s;return e=e&&e.hasOwnProperty("default")?e.default:e,o=o&&o.hasOwnProperty("default")?o.default:o,a="collapse",t="."+(g="bs.collapse"),n=(c=e).fn[a],u={toggle:!0,parent:""},h={toggle:"boolean",parent:"(string|element)"},f={SHOW:"show"+t,SHOWN:"shown"+t,HIDE:"hide"+t,HIDDEN:"hidden"+t,CLICK_DATA_API:"click"+t+".data-api"},d="show",_="collapse",m="collapsing",p="collapsed",y="width",v="height",C=".show, .collapsing",A='[data-toggle="collapse"]',s=function(){function s(t,e){this._isTransitioning=!1,this._element=t,this._config=this._getConfig(e),this._triggerArray=c.makeArray(document.querySelectorAll('[data-toggle="collapse"][href="#'+t.id+'"],[data-toggle="collapse"][data-target="#'+t.id+'"]'));for(var n=[].slice.call(document.querySelectorAll(A)),r=0,i=n.length;r<i;r++){var l=n[r],a=o.getSelectorFromElement(l),s=[].slice.call(document.querySelectorAll(a)).filter(function(e){return e===t});null!==a&&0<s.length&&(this._selector=a,this._triggerArray.push(l))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var e,t,n,r=s.prototype;return r.toggle=function(){c(this._element).hasClass(d)?this.hide():this.show()},r.show=function(){var e,t,n=this;if(!this._isTransitioning&&!c(this._element).hasClass(d)&&(this._parent&&0===(e=[].slice.call(this._parent.querySelectorAll(C)).filter(function(e){return e.getAttribute("data-parent")===n._config.parent})).length&&(e=null),!(e&&(t=c(e).not(this._selector).data(g))&&t._isTransitioning))){var r=c.Event(f.SHOW);if(c(this._element).trigger(r),!r.isDefaultPrevented()){e&&(s._jQueryInterface.call(c(e).not(this._selector),"hide"),t||c(e).data(g,null));var i=this._getDimension();c(this._element).removeClass(_).addClass(m),this._element.style[i]=0,this._triggerArray.length&&c(this._triggerArray).removeClass(p).attr("aria-expanded",!0),this.setTransitioning(!0);var l="scroll"+(i[0].toUpperCase()+i.slice(1)),a=o.getTransitionDurationFromElement(this._element);c(this._element).one(o.TRANSITION_END,function(){c(n._element).removeClass(m).addClass(_).addClass(d),n._element.style[i]="",n.setTransitioning(!1),c(n._element).trigger(f.SHOWN)}).emulateTransitionEnd(a),this._element.style[i]=this._element[l]+"px"}}},r.hide=function(){var e=this;if(!this._isTransitioning&&c(this._element).hasClass(d)){var t=c.Event(f.HIDE);if(c(this._element).trigger(t),!t.isDefaultPrevented()){var n=this._getDimension();this._element.style[n]=this._element.getBoundingClientRect()[n]+"px",o.reflow(this._element),c(this._element).addClass(m).removeClass(_).removeClass(d);var r=this._triggerArray.length;if(0<r)for(var i=0;i<r;i++){var l=this._triggerArray[i],a=o.getSelectorFromElement(l);if(null!==a)c([].slice.call(document.querySelectorAll(a))).hasClass(d)||c(l).addClass(p).attr("aria-expanded",!1)}this.setTransitioning(!0);this._element.style[n]="";var s=o.getTransitionDurationFromElement(this._element);c(this._element).one(o.TRANSITION_END,function(){e.setTransitioning(!1),c(e._element).removeClass(m).addClass(_).trigger(f.HIDDEN)}).emulateTransitionEnd(s)}}},r.setTransitioning=function(e){this._isTransitioning=e},r.dispose=function(){c.removeData(this._element,g),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},r._getConfig=function(e){return(e=l({},u,e)).toggle=Boolean(e.toggle),o.typeCheckConfig(a,e,h),e},r._getDimension=function(){return c(this._element).hasClass(y)?y:v},r._getParent=function(){var n=this,e=null;o.isElement(this._config.parent)?(e=this._config.parent,void 0!==this._config.parent.jquery&&(e=this._config.parent[0])):e=document.querySelector(this._config.parent);var t='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]',r=[].slice.call(e.querySelectorAll(t));return c(r).each(function(e,t){n._addAriaAndCollapsedClass(s._getTargetFromElement(t),[t])}),e},r._addAriaAndCollapsedClass=function(e,t){if(e){var n=c(e).hasClass(d);t.length&&c(t).toggleClass(p,!n).attr("aria-expanded",n)}},s._getTargetFromElement=function(e){var t=o.getSelectorFromElement(e);return t?document.querySelector(t):null},s._jQueryInterface=function(r){return this.each(function(){var e=c(this),t=e.data(g),n=l({},u,e.data(),"object"==typeof r&&r?r:{});if(!t&&n.toggle&&/show|hide/.test(r)&&(n.toggle=!1),t||(t=new s(this,n),e.data(g,t)),"string"==typeof r){if(void 0===t[r])throw new TypeError('No method named "'+r+'"');t[r]()}})},e=s,n=[{key:"VERSION",get:function(){return"4.1.3"}},{key:"Default",get:function(){return u}}],(t=null)&&i(e.prototype,t),n&&i(e,n),s}(),c(document).on(f.CLICK_DATA_API,A,function(e){"A"===e.currentTarget.tagName&&e.preventDefault();var n=c(this),t=o.getSelectorFromElement(this),r=[].slice.call(document.querySelectorAll(t));c(r).each(function(){var e=c(this),t=e.data(g)?"toggle":n.data();s._jQueryInterface.call(e,t)})}),c.fn[a]=s._jQueryInterface,c.fn[a].Constructor=s,c.fn[a].noConflict=function(){return c.fn[a]=n,s._jQueryInterface},s});

// Popover
/*
 Copyright (C) Federico Zivolo 2017
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */(function(e,t){'object'==typeof exports&&'undefined'!=typeof module?module.exports=t():'function'==typeof define&&define.amd?define(t):e.Popper=t()})(this,function(){'use strict';function e(e){return e&&'[object Function]'==={}.toString.call(e)}function t(e,t){if(1!==e.nodeType)return[];var o=getComputedStyle(e,null);return t?o[t]:o}function o(e){return'HTML'===e.nodeName?e:e.parentNode||e.host}function n(e){if(!e)return document.body;switch(e.nodeName){case'HTML':case'BODY':return e.ownerDocument.body;case'#document':return e.body;}var i=t(e),r=i.overflow,p=i.overflowX,s=i.overflowY;return /(auto|scroll)/.test(r+s+p)?e:n(o(e))}function r(e){var o=e&&e.offsetParent,i=o&&o.nodeName;return i&&'BODY'!==i&&'HTML'!==i?-1!==['TD','TABLE'].indexOf(o.nodeName)&&'static'===t(o,'position')?r(o):o:e?e.ownerDocument.documentElement:document.documentElement}function p(e){var t=e.nodeName;return'BODY'!==t&&('HTML'===t||r(e.firstElementChild)===e)}function s(e){return null===e.parentNode?e:s(e.parentNode)}function d(e,t){if(!e||!e.nodeType||!t||!t.nodeType)return document.documentElement;var o=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,i=o?e:t,n=o?t:e,a=document.createRange();a.setStart(i,0),a.setEnd(n,0);var l=a.commonAncestorContainer;if(e!==l&&t!==l||i.contains(n))return p(l)?l:r(l);var f=s(e);return f.host?d(f.host,t):d(e,s(t).host)}function a(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:'top',o='top'===t?'scrollTop':'scrollLeft',i=e.nodeName;if('BODY'===i||'HTML'===i){var n=e.ownerDocument.documentElement,r=e.ownerDocument.scrollingElement||n;return r[o]}return e[o]}function l(e,t){var o=2<arguments.length&&void 0!==arguments[2]&&arguments[2],i=a(t,'top'),n=a(t,'left'),r=o?-1:1;return e.top+=i*r,e.bottom+=i*r,e.left+=n*r,e.right+=n*r,e}function f(e,t){var o='x'===t?'Left':'Top',i='Left'==o?'Right':'Bottom';return parseFloat(e['border'+o+'Width'],10)+parseFloat(e['border'+i+'Width'],10)}function m(e,t,o,i){return J(t['offset'+e],t['scroll'+e],o['client'+e],o['offset'+e],o['scroll'+e],ie()?o['offset'+e]+i['margin'+('Height'===e?'Top':'Left')]+i['margin'+('Height'===e?'Bottom':'Right')]:0)}function h(){var e=document.body,t=document.documentElement,o=ie()&&getComputedStyle(t);return{height:m('Height',e,t,o),width:m('Width',e,t,o)}}function c(e){return se({},e,{right:e.left+e.width,bottom:e.top+e.height})}function g(e){var o={};if(ie())try{o=e.getBoundingClientRect();var i=a(e,'top'),n=a(e,'left');o.top+=i,o.left+=n,o.bottom+=i,o.right+=n}catch(e){}else o=e.getBoundingClientRect();var r={left:o.left,top:o.top,width:o.right-o.left,height:o.bottom-o.top},p='HTML'===e.nodeName?h():{},s=p.width||e.clientWidth||r.right-r.left,d=p.height||e.clientHeight||r.bottom-r.top,l=e.offsetWidth-s,m=e.offsetHeight-d;if(l||m){var g=t(e);l-=f(g,'x'),m-=f(g,'y'),r.width-=l,r.height-=m}return c(r)}function u(e,o){var i=ie(),r='HTML'===o.nodeName,p=g(e),s=g(o),d=n(e),a=t(o),f=parseFloat(a.borderTopWidth,10),m=parseFloat(a.borderLeftWidth,10),h=c({top:p.top-s.top-f,left:p.left-s.left-m,width:p.width,height:p.height});if(h.marginTop=0,h.marginLeft=0,!i&&r){var u=parseFloat(a.marginTop,10),b=parseFloat(a.marginLeft,10);h.top-=f-u,h.bottom-=f-u,h.left-=m-b,h.right-=m-b,h.marginTop=u,h.marginLeft=b}return(i?o.contains(d):o===d&&'BODY'!==d.nodeName)&&(h=l(h,o)),h}function b(e){var t=e.ownerDocument.documentElement,o=u(e,t),i=J(t.clientWidth,window.innerWidth||0),n=J(t.clientHeight,window.innerHeight||0),r=a(t),p=a(t,'left'),s={top:r-o.top+o.marginTop,left:p-o.left+o.marginLeft,width:i,height:n};return c(s)}function w(e){var i=e.nodeName;return'BODY'===i||'HTML'===i?!1:'fixed'===t(e,'position')||w(o(e))}function y(e,t,i,r){var p={top:0,left:0},s=d(e,t);if('viewport'===r)p=b(s);else{var a;'scrollParent'===r?(a=n(o(t)),'BODY'===a.nodeName&&(a=e.ownerDocument.documentElement)):'window'===r?a=e.ownerDocument.documentElement:a=r;var l=u(a,s);if('HTML'===a.nodeName&&!w(s)){var f=h(),m=f.height,c=f.width;p.top+=l.top-l.marginTop,p.bottom=m+l.top,p.left+=l.left-l.marginLeft,p.right=c+l.left}else p=l}return p.left+=i,p.top+=i,p.right-=i,p.bottom-=i,p}function E(e){var t=e.width,o=e.height;return t*o}function v(e,t,o,i,n){var r=5<arguments.length&&void 0!==arguments[5]?arguments[5]:0;if(-1===e.indexOf('auto'))return e;var p=y(o,i,r,n),s={top:{width:p.width,height:t.top-p.top},right:{width:p.right-t.right,height:p.height},bottom:{width:p.width,height:p.bottom-t.bottom},left:{width:t.left-p.left,height:p.height}},d=Object.keys(s).map(function(e){return se({key:e},s[e],{area:E(s[e])})}).sort(function(e,t){return t.area-e.area}),a=d.filter(function(e){var t=e.width,i=e.height;return t>=o.clientWidth&&i>=o.clientHeight}),l=0<a.length?a[0].key:d[0].key,f=e.split('-')[1];return l+(f?'-'+f:'')}function O(e,t,o){var i=d(t,o);return u(o,i)}function L(e){var t=getComputedStyle(e),o=parseFloat(t.marginTop)+parseFloat(t.marginBottom),i=parseFloat(t.marginLeft)+parseFloat(t.marginRight),n={width:e.offsetWidth+i,height:e.offsetHeight+o};return n}function x(e){var t={left:'right',right:'left',bottom:'top',top:'bottom'};return e.replace(/left|right|bottom|top/g,function(e){return t[e]})}function S(e,t,o){o=o.split('-')[0];var i=L(e),n={width:i.width,height:i.height},r=-1!==['right','left'].indexOf(o),p=r?'top':'left',s=r?'left':'top',d=r?'height':'width',a=r?'width':'height';return n[p]=t[p]+t[d]/2-i[d]/2,n[s]=o===s?t[s]-i[a]:t[x(s)],n}function T(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function D(e,t,o){if(Array.prototype.findIndex)return e.findIndex(function(e){return e[t]===o});var i=T(e,function(e){return e[t]===o});return e.indexOf(i)}function C(t,o,i){var n=void 0===i?t:t.slice(0,D(t,'name',i));return n.forEach(function(t){t['function']&&console.warn('`modifier.function` is deprecated, use `modifier.fn`!');var i=t['function']||t.fn;t.enabled&&e(i)&&(o.offsets.popper=c(o.offsets.popper),o.offsets.reference=c(o.offsets.reference),o=i(o,t))}),o}function N(){if(!this.state.isDestroyed){var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=O(this.state,this.popper,this.reference),e.placement=v(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.offsets.popper=S(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position='absolute',e=C(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}function k(e,t){return e.some(function(e){var o=e.name,i=e.enabled;return i&&o===t})}function W(e){for(var t=[!1,'ms','Webkit','Moz','O'],o=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<t.length-1;n++){var i=t[n],r=i?''+i+o:e;if('undefined'!=typeof document.body.style[r])return r}return null}function P(){return this.state.isDestroyed=!0,k(this.modifiers,'applyStyle')&&(this.popper.removeAttribute('x-placement'),this.popper.style.left='',this.popper.style.position='',this.popper.style.top='',this.popper.style[W('transform')]=''),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function B(e){var t=e.ownerDocument;return t?t.defaultView:window}function H(e,t,o,i){var r='BODY'===e.nodeName,p=r?e.ownerDocument.defaultView:e;p.addEventListener(t,o,{passive:!0}),r||H(n(p.parentNode),t,o,i),i.push(p)}function A(e,t,o,i){o.updateBound=i,B(e).addEventListener('resize',o.updateBound,{passive:!0});var r=n(e);return H(r,'scroll',o.updateBound,o.scrollParents),o.scrollElement=r,o.eventsEnabled=!0,o}function I(){this.state.eventsEnabled||(this.state=A(this.reference,this.options,this.state,this.scheduleUpdate))}function M(e,t){return B(e).removeEventListener('resize',t.updateBound),t.scrollParents.forEach(function(e){e.removeEventListener('scroll',t.updateBound)}),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t}function R(){this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=M(this.reference,this.state))}function U(e){return''!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function Y(e,t){Object.keys(t).forEach(function(o){var i='';-1!==['width','height','top','right','bottom','left'].indexOf(o)&&U(t[o])&&(i='px'),e.style[o]=t[o]+i})}function j(e,t){Object.keys(t).forEach(function(o){var i=t[o];!1===i?e.removeAttribute(o):e.setAttribute(o,t[o])})}function F(e,t,o){var i=T(e,function(e){var o=e.name;return o===t}),n=!!i&&e.some(function(e){return e.name===o&&e.enabled&&e.order<i.order});if(!n){var r='`'+t+'`';console.warn('`'+o+'`'+' modifier is required by '+r+' modifier in order to work, be sure to include it before '+r+'!')}return n}function K(e){return'end'===e?'start':'start'===e?'end':e}function q(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],o=ae.indexOf(e),i=ae.slice(o+1).concat(ae.slice(0,o));return t?i.reverse():i}function V(e,t,o,i){var n=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),r=+n[1],p=n[2];if(!r)return e;if(0===p.indexOf('%')){var s;switch(p){case'%p':s=o;break;case'%':case'%r':default:s=i;}var d=c(s);return d[t]/100*r}if('vh'===p||'vw'===p){var a;return a='vh'===p?J(document.documentElement.clientHeight,window.innerHeight||0):J(document.documentElement.clientWidth,window.innerWidth||0),a/100*r}return r}function z(e,t,o,i){var n=[0,0],r=-1!==['right','left'].indexOf(i),p=e.split(/(\+|\-)/).map(function(e){return e.trim()}),s=p.indexOf(T(p,function(e){return-1!==e.search(/,|\s/)}));p[s]&&-1===p[s].indexOf(',')&&console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');var d=/\s*,\s*|\s+/,a=-1===s?[p]:[p.slice(0,s).concat([p[s].split(d)[0]]),[p[s].split(d)[1]].concat(p.slice(s+1))];return a=a.map(function(e,i){var n=(1===i?!r:r)?'height':'width',p=!1;return e.reduce(function(e,t){return''===e[e.length-1]&&-1!==['+','-'].indexOf(t)?(e[e.length-1]=t,p=!0,e):p?(e[e.length-1]+=t,p=!1,e):e.concat(t)},[]).map(function(e){return V(e,n,t,o)})}),a.forEach(function(e,t){e.forEach(function(o,i){U(o)&&(n[t]+=o*('-'===e[i-1]?-1:1))})}),n}function G(e,t){var o,i=t.offset,n=e.placement,r=e.offsets,p=r.popper,s=r.reference,d=n.split('-')[0];return o=U(+i)?[+i,0]:z(i,p,s,d),'left'===d?(p.top+=o[0],p.left-=o[1]):'right'===d?(p.top+=o[0],p.left+=o[1]):'top'===d?(p.left+=o[0],p.top-=o[1]):'bottom'===d&&(p.left+=o[0],p.top+=o[1]),e.popper=p,e}for(var _=Math.min,X=Math.floor,J=Math.max,Q='undefined'!=typeof window&&'undefined'!=typeof document,Z=['Edge','Trident','Firefox'],$=0,ee=0;ee<Z.length;ee+=1)if(Q&&0<=navigator.userAgent.indexOf(Z[ee])){$=1;break}var i,te=Q&&window.Promise,oe=te?function(e){var t=!1;return function(){t||(t=!0,window.Promise.resolve().then(function(){t=!1,e()}))}}:function(e){var t=!1;return function(){t||(t=!0,setTimeout(function(){t=!1,e()},$))}},ie=function(){return void 0==i&&(i=-1!==navigator.appVersion.indexOf('MSIE 10')),i},ne=function(e,t){if(!(e instanceof t))throw new TypeError('Cannot call a class as a function')},re=function(){function e(e,t){for(var o,n=0;n<t.length;n++)o=t[n],o.enumerable=o.enumerable||!1,o.configurable=!0,'value'in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}return function(t,o,i){return o&&e(t.prototype,o),i&&e(t,i),t}}(),pe=function(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e},se=Object.assign||function(e){for(var t,o=1;o<arguments.length;o++)for(var i in t=arguments[o],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},de=['auto-start','auto','auto-end','top-start','top','top-end','right-start','right','right-end','bottom-end','bottom','bottom-start','left-end','left','left-start'],ae=de.slice(3),le={FLIP:'flip',CLOCKWISE:'clockwise',COUNTERCLOCKWISE:'counterclockwise'},fe=function(){function t(o,i){var n=this,r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};ne(this,t),this.scheduleUpdate=function(){return requestAnimationFrame(n.update)},this.update=oe(this.update.bind(this)),this.options=se({},t.Defaults,r),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=o&&o.jquery?o[0]:o,this.popper=i&&i.jquery?i[0]:i,this.options.modifiers={},Object.keys(se({},t.Defaults.modifiers,r.modifiers)).forEach(function(e){n.options.modifiers[e]=se({},t.Defaults.modifiers[e]||{},r.modifiers?r.modifiers[e]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(e){return se({name:e},n.options.modifiers[e])}).sort(function(e,t){return e.order-t.order}),this.modifiers.forEach(function(t){t.enabled&&e(t.onLoad)&&t.onLoad(n.reference,n.popper,n.options,t,n.state)}),this.update();var p=this.options.eventsEnabled;p&&this.enableEventListeners(),this.state.eventsEnabled=p}return re(t,[{key:'update',value:function(){return N.call(this)}},{key:'destroy',value:function(){return P.call(this)}},{key:'enableEventListeners',value:function(){return I.call(this)}},{key:'disableEventListeners',value:function(){return R.call(this)}}]),t}();return fe.Utils=('undefined'==typeof window?global:window).PopperUtils,fe.placements=de,fe.Defaults={placement:'bottom',eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(e){var t=e.placement,o=t.split('-')[0],i=t.split('-')[1];if(i){var n=e.offsets,r=n.reference,p=n.popper,s=-1!==['bottom','top'].indexOf(o),d=s?'left':'top',a=s?'width':'height',l={start:pe({},d,r[d]),end:pe({},d,r[d]+r[a]-p[a])};e.offsets.popper=se({},p,l[i])}return e}},offset:{order:200,enabled:!0,fn:G,offset:0},preventOverflow:{order:300,enabled:!0,fn:function(e,t){var o=t.boundariesElement||r(e.instance.popper);e.instance.reference===o&&(o=r(o));var i=y(e.instance.popper,e.instance.reference,t.padding,o);t.boundaries=i;var n=t.priority,p=e.offsets.popper,s={primary:function(e){var o=p[e];return p[e]<i[e]&&!t.escapeWithReference&&(o=J(p[e],i[e])),pe({},e,o)},secondary:function(e){var o='right'===e?'left':'top',n=p[o];return p[e]>i[e]&&!t.escapeWithReference&&(n=_(p[o],i[e]-('right'===e?p.width:p.height))),pe({},o,n)}};return n.forEach(function(e){var t=-1===['left','top'].indexOf(e)?'secondary':'primary';p=se({},p,s[t](e))}),e.offsets.popper=p,e},priority:['left','right','top','bottom'],padding:5,boundariesElement:'scrollParent'},keepTogether:{order:400,enabled:!0,fn:function(e){var t=e.offsets,o=t.popper,i=t.reference,n=e.placement.split('-')[0],r=X,p=-1!==['top','bottom'].indexOf(n),s=p?'right':'bottom',d=p?'left':'top',a=p?'width':'height';return o[s]<r(i[d])&&(e.offsets.popper[d]=r(i[d])-o[a]),o[d]>r(i[s])&&(e.offsets.popper[d]=r(i[s])),e}},arrow:{order:500,enabled:!0,fn:function(e,o){var i;if(!F(e.instance.modifiers,'arrow','keepTogether'))return e;var n=o.element;if('string'==typeof n){if(n=e.instance.popper.querySelector(n),!n)return e;}else if(!e.instance.popper.contains(n))return console.warn('WARNING: `arrow.element` must be child of its popper element!'),e;var r=e.placement.split('-')[0],p=e.offsets,s=p.popper,d=p.reference,a=-1!==['left','right'].indexOf(r),l=a?'height':'width',f=a?'Top':'Left',m=f.toLowerCase(),h=a?'left':'top',g=a?'bottom':'right',u=L(n)[l];d[g]-u<s[m]&&(e.offsets.popper[m]-=s[m]-(d[g]-u)),d[m]+u>s[g]&&(e.offsets.popper[m]+=d[m]+u-s[g]),e.offsets.popper=c(e.offsets.popper);var b=d[m]+d[l]/2-u/2,w=t(e.instance.popper),y=parseFloat(w['margin'+f],10),E=parseFloat(w['border'+f+'Width'],10),v=b-e.offsets.popper[m]-y-E;return v=J(_(s[l]-u,v),0),e.arrowElement=n,e.offsets.arrow=(i={},pe(i,m,Math.round(v)),pe(i,h,''),i),e},element:'[x-arrow]'},flip:{order:600,enabled:!0,fn:function(e,t){if(k(e.instance.modifiers,'inner'))return e;if(e.flipped&&e.placement===e.originalPlacement)return e;var o=y(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement),i=e.placement.split('-')[0],n=x(i),r=e.placement.split('-')[1]||'',p=[];switch(t.behavior){case le.FLIP:p=[i,n];break;case le.CLOCKWISE:p=q(i);break;case le.COUNTERCLOCKWISE:p=q(i,!0);break;default:p=t.behavior;}return p.forEach(function(s,d){if(i!==s||p.length===d+1)return e;i=e.placement.split('-')[0],n=x(i);var a=e.offsets.popper,l=e.offsets.reference,f=X,m='left'===i&&f(a.right)>f(l.left)||'right'===i&&f(a.left)<f(l.right)||'top'===i&&f(a.bottom)>f(l.top)||'bottom'===i&&f(a.top)<f(l.bottom),h=f(a.left)<f(o.left),c=f(a.right)>f(o.right),g=f(a.top)<f(o.top),u=f(a.bottom)>f(o.bottom),b='left'===i&&h||'right'===i&&c||'top'===i&&g||'bottom'===i&&u,w=-1!==['top','bottom'].indexOf(i),y=!!t.flipVariations&&(w&&'start'===r&&h||w&&'end'===r&&c||!w&&'start'===r&&g||!w&&'end'===r&&u);(m||b||y)&&(e.flipped=!0,(m||b)&&(i=p[d+1]),y&&(r=K(r)),e.placement=i+(r?'-'+r:''),e.offsets.popper=se({},e.offsets.popper,S(e.instance.popper,e.offsets.reference,e.placement)),e=C(e.instance.modifiers,e,'flip'))}),e},behavior:'flip',padding:5,boundariesElement:'viewport'},inner:{order:700,enabled:!1,fn:function(e){var t=e.placement,o=t.split('-')[0],i=e.offsets,n=i.popper,r=i.reference,p=-1!==['left','right'].indexOf(o),s=-1===['top','left'].indexOf(o);return n[p?'left':'top']=r[o]-(s?n[p?'width':'height']:0),e.placement=x(t),e.offsets.popper=c(n),e}},hide:{order:800,enabled:!0,fn:function(e){if(!F(e.instance.modifiers,'hide','preventOverflow'))return e;var t=e.offsets.reference,o=T(e.instance.modifiers,function(e){return'preventOverflow'===e.name}).boundaries;if(t.bottom<o.top||t.left>o.right||t.top>o.bottom||t.right<o.left){if(!0===e.hide)return e;e.hide=!0,e.attributes['x-out-of-boundaries']=''}else{if(!1===e.hide)return e;e.hide=!1,e.attributes['x-out-of-boundaries']=!1}return e}},computeStyle:{order:850,enabled:!0,fn:function(e,t){var o=t.x,i=t.y,n=e.offsets.popper,p=T(e.instance.modifiers,function(e){return'applyStyle'===e.name}).gpuAcceleration;void 0!==p&&console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');var s,d,a=void 0===p?t.gpuAcceleration:p,l=r(e.instance.popper),f=g(l),m={position:n.position},h={left:X(n.left),top:X(n.top),bottom:X(n.bottom),right:X(n.right)},c='bottom'===o?'top':'bottom',u='right'===i?'left':'right',b=W('transform');if(d='bottom'==c?-f.height+h.bottom:h.top,s='right'==u?-f.width+h.right:h.left,a&&b)m[b]='translate3d('+s+'px, '+d+'px, 0)',m[c]=0,m[u]=0,m.willChange='transform';else{var w='bottom'==c?-1:1,y='right'==u?-1:1;m[c]=d*w,m[u]=s*y,m.willChange=c+', '+u}var E={"x-placement":e.placement};return e.attributes=se({},E,e.attributes),e.styles=se({},m,e.styles),e.arrowStyles=se({},e.offsets.arrow,e.arrowStyles),e},gpuAcceleration:!0,x:'bottom',y:'right'},applyStyle:{order:900,enabled:!0,fn:function(e){return Y(e.instance.popper,e.styles),j(e.instance.popper,e.attributes),e.arrowElement&&Object.keys(e.arrowStyles).length&&Y(e.arrowElement,e.arrowStyles),e},onLoad:function(e,t,o,i,n){var r=O(n,t,e),p=v(o.placement,r,t,e,o.modifiers.flip.boundariesElement,o.modifiers.flip.padding);return t.setAttribute('x-placement',p),Y(t,{position:'absolute'}),o},gpuAcceleration:void 0}}},fe});

// Dropdown 4.1.3
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("jquery"),require("popper.js"),require("./util.js")):"function"==typeof define&&define.amd?define(["jquery","popper.js","./util.js"],t):e.Dropdown=t(e.jQuery,e.Popper,e.Util)}(this,function(e,i,s){"use strict";function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(o){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{},t=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(i).filter(function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable}))),t.forEach(function(e){var t,n,r;t=o,r=i[n=e],n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r})}return o}var f,l,c,h,t,n,p,d,g,_,m,y,v,w,b,P,r,C,A,E,D,I,j,O,N,k,T,K,u;return e=e&&e.hasOwnProperty("default")?e.default:e,i=i&&i.hasOwnProperty("default")?i.default:i,s=s&&s.hasOwnProperty("default")?s.default:s,l="dropdown",h="."+(c="bs.dropdown"),t=".data-api",n=(f=e).fn[l],p=new RegExp("38|40|27"),d={HIDE:"hide"+h,HIDDEN:"hidden"+h,SHOW:"show"+h,SHOWN:"shown"+h,CLICK:"click"+h,CLICK_DATA_API:"click"+h+t,KEYDOWN_DATA_API:"keydown"+h+t,KEYUP_DATA_API:"keyup"+h+t},g="disabled",_="is-show",m="dropup",y="dropright",v="dropleft",w="dropdown-menu-right",b="position-static",P='[data-toggle="dropdown"]',r=".dropdown form",C=".dropdown-menu",A=".navbar-nav",E=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",D="top-start",I="top-end",j="bottom-start",O="bottom-end",N="right-start",k="left-start",T={offset:0,flip:!0,boundary:"scrollParent",reference:"toggle",display:"dynamic"},K={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element)",display:"string"},u=function(){function u(e,t){this._element=e,this._popper=null,this._config=this._getConfig(t),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var e,t,n,r=u.prototype;return r.toggle=function(){if(!this._element.disabled&&!f(this._element).hasClass(g)){var e=u._getParentFromElement(this._element),t=f(this._menu).hasClass(_);if(u._clearMenus(),!t){var n={relatedTarget:this._element},r=f.Event(d.SHOW,n);if(f(e).trigger(r),!r.isDefaultPrevented()){if(!this._inNavbar){if(void 0===i)throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");var o=this._element;"parent"===this._config.reference?o=e:s.isElement(this._config.reference)&&(o=this._config.reference,void 0!==this._config.reference.jquery&&(o=this._config.reference[0])),"scrollParent"!==this._config.boundary&&f(e).addClass(b),this._popper=new i(o,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&0===f(e).closest(A).length&&f(document.body).children().on("mouseover",null,f.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),f(this._menu).toggleClass(_),f(e).toggleClass(_).trigger(f.Event(d.SHOWN,n))}}}},r.dispose=function(){f.removeData(this._element,c),f(this._element).off(h),this._element=null,(this._menu=null)!==this._popper&&(this._popper.destroy(),this._popper=null)},r.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},r._addEventListeners=function(){var t=this;f(this._element).on(d.CLICK,function(e){e.preventDefault(),e.stopPropagation(),t.toggle()})},r._getConfig=function(e){return e=a({},this.constructor.Default,f(this._element).data(),e),s.typeCheckConfig(l,e,this.constructor.DefaultType),e},r._getMenuElement=function(){if(!this._menu){var e=u._getParentFromElement(this._element);e&&(this._menu=e.querySelector(C))}return this._menu},r._getPlacement=function(){var e=f(this._element.parentNode),t=j;return e.hasClass(m)?(t=D,f(this._menu).hasClass(w)&&(t=I)):e.hasClass(y)?t=N:e.hasClass(v)?t=k:f(this._menu).hasClass(w)&&(t=O),t},r._detectNavbar=function(){return 0<f(this._element).closest(".navbar").length},r._getPopperConfig=function(){var t=this,e={};"function"==typeof this._config.offset?e.fn=function(e){return e.offsets=a({},e.offsets,t._config.offset(e.offsets)||{}),e}:e.offset=this._config.offset;var n={placement:this._getPlacement(),modifiers:{offset:e,flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}};return"static"===this._config.display&&(n.modifiers.applyStyle={enabled:!1}),n},u._jQueryInterface=function(t){return this.each(function(){var e=f(this).data(c);if(e||(e=new u(this,"object"==typeof t?t:null),f(this).data(c,e)),"string"==typeof t){if(void 0===e[t])throw new TypeError('No method named "'+t+'"');e[t]()}})},u._clearMenus=function(e){if(!e||3!==e.which&&("keyup"!==e.type||9===e.which))for(var t=[].slice.call(document.querySelectorAll(P)),n=0,r=t.length;n<r;n++){var o=u._getParentFromElement(t[n]),i=f(t[n]).data(c),s={relatedTarget:t[n]};if(e&&"click"===e.type&&(s.clickEvent=e),i){var a=i._menu;if(f(o).hasClass(_)&&!(e&&("click"===e.type&&/input|textarea/i.test(e.target.tagName)||"keyup"===e.type&&9===e.which)&&f.contains(o,e.target))){var l=f.Event(d.HIDE,s);f(o).trigger(l),l.isDefaultPrevented()||("ontouchstart"in document.documentElement&&f(document.body).children().off("mouseover",null,f.noop),t[n].setAttribute("aria-expanded","false"),f(a).removeClass(_),f(o).removeClass(_).trigger(f.Event(d.HIDDEN,s)))}}}},u._getParentFromElement=function(e){var t,n=s.getSelectorFromElement(e);return n&&(t=document.querySelector(n)),t||e.parentNode},u._dataApiKeydownHandler=function(e){if((/input|textarea/i.test(e.target.tagName)?!(32===e.which||27!==e.which&&(40!==e.which&&38!==e.which||f(e.target).closest(C).length)):p.test(e.which))&&(e.preventDefault(),e.stopPropagation(),!this.disabled&&!f(this).hasClass(g))){var t=u._getParentFromElement(this),n=f(t).hasClass(_);if((n||27===e.which&&32===e.which)&&(!n||27!==e.which&&32!==e.which)){var r=[].slice.call(t.querySelectorAll(E));if(0!==r.length){var o=r.indexOf(e.target);38===e.which&&0<o&&o--,40===e.which&&o<r.length-1&&o++,o<0&&(o=0),r[o].focus()}}else{if(27===e.which){var i=t.querySelector(P);f(i).trigger("focus")}f(this).trigger("click")}}},e=u,n=[{key:"VERSION",get:function(){return"4.1.3"}},{key:"Default",get:function(){return T}},{key:"DefaultType",get:function(){return K}}],(t=null)&&o(e.prototype,t),n&&o(e,n),u}(),f(document).on(d.KEYDOWN_DATA_API,P,u._dataApiKeydownHandler).on(d.KEYDOWN_DATA_API,C,u._dataApiKeydownHandler).on(d.CLICK_DATA_API+" "+d.KEYUP_DATA_API,u._clearMenus).on(d.CLICK_DATA_API,P,function(e){e.preventDefault(),e.stopPropagation(),u._jQueryInterface.call(f(this),"toggle")}).on(d.CLICK_DATA_API,r,function(e){e.stopPropagation()}),f.fn[l]=u._jQueryInterface,f.fn[l].Constructor=u,f.fn[l].noConflict=function(){return f.fn[l]=n,u._jQueryInterface},u});

// Disabled click inside dropdown
$(document).on('click', '.dropdown-touch', function (e) {
	e.stopPropagation();
});

/* Read More JS */
const ReadMore = (() => {
let s;

return {
	settings() {
	return {
		content: document.querySelectorAll('.js-read-more'),
		originalContentArr: [],
		truncatedContentArr: [],
		moreLink: "Xem thêm",
		lessLink: "Thu gọn",
	}
	},

	init() {
	s = this.settings();
	this.bindEvents();
	},

	bindEvents() {
	ReadMore.truncateText();
	},

	/**
	* Count Words
	* Helper to handle word count.
	* @param {string} str - Target content string.
	*/
	countWords(str) {
	return str.split(/\s+/).length;
	},

	/**
	* Ellpise Content
	* @param {string} str - content string.
	* @param {number} wordsNum - Number of words to show before truncation.
	*/
	ellipseContent(str, wordsNum) {
	return str.split(/\s+/).slice(0, wordsNum).join(' ') + '...';
	},

	truncateText() {

	for (let i = 0; i < s.content.length; i++) {
		//console.log(s.content)
		const originalContent = s.content[i].innerHTML;
		const numberOfWords = s.content[i].dataset.rmWords;
		const truncateContent = ReadMore.ellipseContent(originalContent, numberOfWords);
		const originalContentWords = ReadMore.countWords(originalContent);

		s.originalContentArr.push(originalContent);
		s.truncatedContentArr.push(truncateContent);

		if (numberOfWords < originalContentWords) {
		s.content[i].innerHTML = s.truncatedContentArr[i];
		let self = i;
		ReadMore.createLink(self)
		}
	}
	ReadMore.handleClick(s.content);
	},

	/**
	* Create Link
	* Creates and Inserts Read More Link
	* @param {number} index - index reference of looped item
	*/
	createLink(index) {
	const linkWrap = document.createElement('span');

	linkWrap.className = 'read-more-link-wrap';

	linkWrap.innerHTML = `<a id="read-more_${index}"
								class="read-more-link"
								style="cursor:pointer;">
								${s.moreLink}
							</a>`;

	// Inset created link
	s.content[index].parentNode.insertBefore(linkWrap, s.content[index].nextSibling);

	},

	/**
	* Handle Click
	* Toggle Click eve
	*/
	handleClick(el) {
	const readMoreLink = document.querySelectorAll('.read-more-link');

	for (let j = 0, l = readMoreLink.length; j < l; j++) {

		readMoreLink[j].addEventListener('click', function() {

		const moreLinkID = this.getAttribute('id');
		let index = moreLinkID.split('_')[1];

		el[index].classList.toggle('is-expanded');

		if (this.dataset.clicked !== 'true') {
			el[index].innerHTML = s.originalContentArr[index];
			this.innerHTML = s.lessLink;
			this.dataset.clicked = true;
		} else {
			el[index].innerHTML = s.truncatedContentArr[index];
			this.innerHTML = s.moreLink;
			this.dataset.clicked = false;
		}
		});
	}
	},

	/**
	* Open All
	* Method to expand all instances on the page.
	* Will probably be useful with a destroy method.
	*/
	openAll() {
	const instances = document.querySelectorAll('.read-more-link');
		for (let i = 0; i < instances.length; i++) {
		content[i].innerHTML = s.truncatedContentArr[i];
		instances[i].innerHTML = s.moreLink;
		}
	}
	}
})();
//export default ReadMore;
ReadMore.init();

// Chuyển đổi account
$(".switch-account").click(function(){
	$(".content-inside").addClass("is-hidden");
	$(".content-inside-extend").removeClass("is-hidden");
});
$(".heading-extend").click(function(){
	$(".content-inside").removeClass("is-hidden");
	$(".content-inside-extend").addClass("is-hidden");
});
$(".dropdown-menu").click(function(e){
	e.stopPropagation();
});
tippy('.func-add', {
	content: "Thêm",
});
tippy('.func-remove', {
	content: "Xóa",
});
tippy('.func-copy', {
	theme: 'light-border',
	content: "Copy",
});
tippy('.tippy-question', {
	theme: 'bg-white',
	content: "Sử dụng các tham số có sẵn để hệ thống hiển thị nội dung được cá nhân hóa đến từng khách hàng",
});
tippy('.tippy-oa', {
	theme: 'bg-white',
	content: "Bạn muốn gửi tin cho Người Nhận trong trường hợp nào?",
});
tippy('.edit-content', {
	theme: 'interactive',
	allowHTML: true,
	content: 
			`
				<div class="tippy-input">
					<div class="contenteditable" contenteditable> ádsadas
					</div>
					<button class="button is-primary" disabled>
						<i class="icz icz-check"></i>
					</button>
				</div>
			`,
	trigger:"click",
	interactive: true,
	placement: 'top',
});