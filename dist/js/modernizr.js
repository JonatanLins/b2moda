window.Modernizr=function(e,t,n){function r(e){v.cssText=e}function o(e,t){return typeof e===t}function i(e,t){return!!~(""+e).indexOf(t)}function u(e,t){for(var r in e){var o=e[r];if(!i(o,"-")&&v[o]!==n)return"pfx"!=t||o}return!1}function s(e,t,r){for(var i in e){var u=t[e[i]];if(u!==n)return!1===r?e[i]:o(u,"function")?u.bind(r||t):u}return!1}function c(e,t,n){var r=e.charAt(0).toUpperCase()+e.slice(1),i=(e+" "+b.join(r+" ")+r).split(" ");return o(t,"string")||o(t,"undefined")?u(i,t):(i=(e+" "+w.join(r+" ")+r).split(" "),s(i,t,n))}var a,f,l={},d=t.documentElement,p="modernizr",m=t.createElement(p),v=m.style,y=" -webkit- -moz- -o- -ms- ".split(" "),h="Webkit Moz O ms",b=h.split(" "),w=h.toLowerCase().split(" "),x={},j=[],C=j.slice,E=function(e,n,r,o){var i,u,s,c,a=t.createElement("div"),f=t.body,l=f||t.createElement("body");if(parseInt(r,10))for(;r--;)s=t.createElement("div"),s.id=o?o[r]:p+(r+1),a.appendChild(s);return i=["&#173;",'<style id="s',p,'">',e,"</style>"].join(""),a.id=p,(f?a:l).innerHTML+=i,l.appendChild(a),f||(l.style.background="",l.style.overflow="hidden",c=d.style.overflow,d.style.overflow="hidden",d.appendChild(l)),u=n(a,e),f?a.parentNode.removeChild(a):(l.parentNode.removeChild(l),d.style.overflow=c),!!u},T=function(){var e={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return function(r,i){i=i||t.createElement(e[r]||"div");var u=(r="on"+r)in i;return u||(i.setAttribute||(i=t.createElement("div")),i.setAttribute&&i.removeAttribute&&(i.setAttribute(r,""),u=o(i[r],"function"),o(i[r],"undefined")||(i[r]=n),i.removeAttribute(r))),i=null,u}}(),_={}.hasOwnProperty;f=o(_,"undefined")||o(_.call,"undefined")?function(e,t){return t in e&&o(e.constructor.prototype[t],"undefined")}:function(e,t){return _.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=C.call(arguments,1),r=function(){if(this instanceof r){var o=function(){};o.prototype=t.prototype;var i=new o,u=t.apply(i,n.concat(C.call(arguments)));return Object(u)===u?u:i}return t.apply(e,n.concat(C.call(arguments)))};return r}),x.flexbox=function(){return c("flexWrap")},x.touch=function(){var n;return"ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch?n=!0:E(["@media (",y.join("touch-enabled),("),p,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(e){n=9===e.offsetTop}),n},x.cssanimations=function(){return c("animationName")},x.csstransitions=function(){return c("transition")};for(var A in x)f(x,A)&&(a=A.toLowerCase(),l[a]=x[A](),j.push((l[a]?"":"no-")+a));return l.addTest=function(e,t){if("object"==typeof e)for(var r in e)f(e,r)&&l.addTest(r,e[r]);else{if(e=e.toLowerCase(),l[e]!==n)return l;t="function"==typeof t?t():t,d.className+=" md_"+(t?"":"no-")+e,l[e]=t}return l},r(""),m=null,l._version="2.8.3",l._prefixes=y,l._domPrefixes=w,l._cssomPrefixes=b,l.hasEvent=T,l.testProp=function(e){return u([e])},l.testAllProps=c,l.testStyles=E,l.prefixed=function(e,t,n){return t?c(e,t,n):c(e,"pfx")},d.className=d.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+" md_js md_"+j.join(" md_"),l}(this,this.document);