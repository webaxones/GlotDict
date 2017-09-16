!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.DOMPurify=t()}(this,function(){"use strict";function e(e,t){for(var n=t.length;n--;)"string"==typeof t[n]&&(t[n]=t[n].toLowerCase()),e[t[n]]=!0;return e}function t(e){var t={},n=void 0;for(n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}function n(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(){var h=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p(),g=function(e){return o(e)};if(g.version="1.0.2",g.removed=[],!h||!h.document||9!==h.document.nodeType)return g.isSupported=!1,g;var y=h.document,v=!1,b=!1,T=h.document,A=h.DocumentFragment,x=h.HTMLTemplateElement,S=h.Node,k=h.NodeFilter,w=h.NamedNodeMap,E=void 0===w?h.NamedNodeMap||h.MozNamedAttrMap:w,O=h.Text,M=h.Comment,N=h.DOMParser,L=h.XMLHttpRequest,D=void 0===L?h.XMLHttpRequest:L,_=h.encodeURI,R=void 0===_?h.encodeURI:_;if("function"==typeof x){var C=T.createElement("template");C.content&&C.content.ownerDocument&&(T=C.content.ownerDocument)}var F=T,z=F.implementation,H=F.createNodeIterator,I=F.getElementsByTagName,j=F.createDocumentFragment,U=y.importNode,q={};g.isSupported=z&&void 0!==z.createHTMLDocument&&9!==T.documentMode;var W=null,B=e({},[].concat(n(r),n(i),n(a),n(l),n(s))),G=null,P=e({},[].concat(n(c),n(d),n(u),n(m))),V=null,X=null,Y=!0,K=!0,$=!1,J=!1,Q=!1,Z=/\{\{[\s\S]*|[\s\S]*\}\}/gm,ee=/<%[\s\S]*|[\s\S]*%>/gm,te=!1,ne=!1,oe=!1,re=!1,ie=!1,ae=!1,le=!0,se=!0,ce={},de=e({},["audio","head","math","script","style","template","svg","video"]),ue=e({},["audio","video","img","source","image"]),me=e({},["alt","class","for","id","label","name","pattern","placeholder","summary","title","value","style","xmlns"]),fe=null,pe=T.createElement("form"),he=function(o){"object"!==(void 0===o?"undefined":f(o))&&(o={}),W="ALLOWED_TAGS"in o?e({},o.ALLOWED_TAGS):B,G="ALLOWED_ATTR"in o?e({},o.ALLOWED_ATTR):P,V="FORBID_TAGS"in o?e({},o.FORBID_TAGS):{},X="FORBID_ATTR"in o?e({},o.FORBID_ATTR):{},ce="USE_PROFILES"in o&&o.USE_PROFILES,Y=!1!==o.ALLOW_ARIA_ATTR,K=!1!==o.ALLOW_DATA_ATTR,$=o.ALLOW_UNKNOWN_PROTOCOLS||!1,J=o.SAFE_FOR_JQUERY||!1,Q=o.SAFE_FOR_TEMPLATES||!1,te=o.WHOLE_DOCUMENT||!1,re=o.RETURN_DOM||!1,ie=o.RETURN_DOM_FRAGMENT||!1,ae=o.RETURN_DOM_IMPORT||!1,oe=o.FORCE_BODY||!1,le=!1!==o.SANITIZE_DOM,se=!1!==o.KEEP_CONTENT,Q&&(K=!1),ie&&(re=!0),ce&&(W=e({},[].concat(n(s))),G=[],!0===ce.html&&(e(W,r),e(G,c)),!0===ce.svg&&(e(W,i),e(G,d),e(G,m)),!0===ce.svgFilters&&(e(W,a),e(G,d),e(G,m)),!0===ce.mathMl&&(e(W,l),e(G,u),e(G,m))),o.ADD_TAGS&&(W===B&&(W=t(W)),e(W,o.ADD_TAGS)),o.ADD_ATTR&&(G===P&&(G=t(G)),e(G,o.ADD_ATTR)),o.ADD_URI_SAFE_ATTR&&e(me,o.ADD_URI_SAFE_ATTR),se&&(W["#text"]=!0),Object&&"freeze"in Object&&Object.freeze(o),fe=o},ge=function(e){g.removed.push({element:e});try{e.parentNode.removeChild(e)}catch(t){e.outerHTML=""}},ye=function(e,t){g.removed.push({attribute:t.getAttributeNode(e),from:t}),t.removeAttribute(e)},ve=function(e){var t=void 0,n=void 0;if(oe&&(e="<remove></remove>"+e),b){try{e=R(e)}catch(e){}var o=new D;o.responseType="document",o.open("GET","data:text/html;charset=utf-8,"+e,!1),o.send(null),t=o.response}if(v)try{t=(new N).parseFromString(e,"text/html")}catch(e){}return t&&t.documentElement||((n=(t=z.createHTMLDocument("")).body).parentNode.removeChild(n.parentNode.firstElementChild),n.outerHTML=e),I.call(t,te?"html":"body")[0]};g.isSupported&&function(){var e=ve('<svg><g onload="this.parentNode.remove()"></g></svg>');e.querySelector("svg")||(b=!0);try{(e=ve('<svg><p><style><img src="</style><img src=x onerror=alert(1)//">')).querySelector("svg img")&&(v=!0)}catch(e){}}();var be=function(e){return H.call(e.ownerDocument||e,e,k.SHOW_ELEMENT|k.SHOW_COMMENT|k.SHOW_TEXT,function(){return k.FILTER_ACCEPT},!1)},Te=function(e){return!(e instanceof O||e instanceof M)&&!("string"==typeof e.nodeName&&"string"==typeof e.textContent&&"function"==typeof e.removeChild&&e.attributes instanceof E&&"function"==typeof e.removeAttribute&&"function"==typeof e.setAttribute)},Ae=function(e){return"object"===(void 0===S?"undefined":f(S))?e instanceof S:e&&"object"===(void 0===e?"undefined":f(e))&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},xe=function(e,t,n){q[e]&&q[e].forEach(function(e){e.call(g,t,n,fe)})},Se=function(e){var t=void 0;if(xe("beforeSanitizeElements",e,null),Te(e))return ge(e),!0;var n=e.nodeName.toLowerCase();if(xe("uponSanitizeElement",e,{tagName:n,allowedTags:W}),!W[n]||V[n]){if(se&&!de[n]&&"function"==typeof e.insertAdjacentHTML)try{e.insertAdjacentHTML("AfterEnd",e.innerHTML)}catch(e){}return ge(e),!0}return!J||e.firstElementChild||e.content&&e.content.firstElementChild||!/</g.test(e.textContent)||(g.removed.push({element:e.cloneNode()}),e.innerHTML=e.textContent.replace(/</g,"&lt;")),Q&&3===e.nodeType&&(t=(t=(t=e.textContent).replace(Z," ")).replace(ee," "),e.textContent!==t&&(g.removed.push({element:e.cloneNode()}),e.textContent=t)),xe("afterSanitizeElements",e,null),!1},ke=/^data-[\-\w.\u00B7-\uFFFF]/,we=/^aria-[\-\w]+$/,Ee=/^(?:(?:(?:f|ht)tps?|mailto|tel):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i,Oe=/^(?:\w+script|data):/i,Me=/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205f\u3000]/g,Ne=function(e){var t=void 0,n=void 0,o=void 0,r=void 0,i=void 0,a=void 0,l=void 0;if(xe("beforeSanitizeAttributes",e,null),a=e.attributes){var s={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:G};for(l=a.length;l--;){if(t=a[l],n=t.name,o=t.value.trim(),r=n.toLowerCase(),s.attrName=r,s.attrValue=o,s.keepAttr=!0,xe("uponSanitizeAttribute",e,s),o=s.attrValue,"name"===r&&"IMG"===e.nodeName&&a.id)i=a.id,a=Array.prototype.slice.apply(a),ye("id",e),ye(n,e),a.indexOf(i)>l&&e.setAttribute("id",i.value);else{if("INPUT"===e.nodeName&&"type"===r&&"file"===o&&(G[r]||!X[r]))continue;"id"===n&&e.setAttribute(n,""),ye(n,e)}if(s.keepAttr&&(!le||"id"!==r&&"name"!==r||!(o in h||o in T||o in pe))){if(Q&&(o=(o=o.replace(Z," ")).replace(ee," ")),K&&ke.test(r));else if(Y&&we.test(r));else{if(!G[r]||X[r])continue;if(me[r]);else if(Ee.test(o.replace(Me,"")));else if("src"!==r&&"xlink:href"!==r||0!==o.indexOf("data:")||!ue[e.nodeName.toLowerCase()]){if($&&!Oe.test(o.replace(Me,"")));else if(o)continue}else;}try{e.setAttribute(n,o),g.removed.pop()}catch(e){}}}xe("afterSanitizeAttributes",e,null)}},Le=function e(t){var n=void 0,o=be(t);for(xe("beforeSanitizeShadowDOM",t,null);n=o.nextNode();)xe("uponSanitizeShadowNode",n,null),Se(n)||(n.content instanceof A&&e(n.content),Ne(n));xe("afterSanitizeShadowDOM",t,null)};return g.sanitize=function(e,t){var n=void 0,o=void 0,r=void 0,i=void 0,a=void 0;if(e||(e="\x3c!--\x3e"),"string"!=typeof e&&!Ae(e)){if("function"!=typeof e.toString)throw new TypeError("toString is not a function");e=e.toString()}if(!g.isSupported){if("object"===f(h.toStaticHTML)||"function"==typeof h.toStaticHTML){if("string"==typeof e)return h.toStaticHTML(e);if(Ae(e))return h.toStaticHTML(e.outerHTML)}return e}if(ne||he(t),g.removed=[],e instanceof S)1===(o=(n=ve("\x3c!--\x3e")).ownerDocument.importNode(e,!0)).nodeType&&"BODY"===o.nodeName?n=o:n.appendChild(o);else{if(!re&&!te&&-1===e.indexOf("<"))return e;if(!(n=ve(e)))return re?null:""}oe&&ge(n.firstChild);for(var l=be(n);r=l.nextNode();)3===r.nodeType&&r===i||Se(r)||(r.content instanceof A&&Le(r.content),Ne(r),i=r);if(re){if(ie)for(a=j.call(n.ownerDocument);n.firstChild;)a.appendChild(n.firstChild);else a=n;return ae&&(a=U.call(y,a,!0)),a}return te?n.outerHTML:n.innerHTML},g.setConfig=function(e){he(e),ne=!0},g.clearConfig=function(){fe=null,ne=!1},g.addHook=function(e,t){"function"==typeof t&&(q[e]=q[e]||[],q[e].push(t))},g.removeHook=function(e){q[e]&&q[e].pop()},g.removeHooks=function(e){q[e]&&(q[e]=[])},g.removeAllHooks=function(){q={}},g}var r=["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"],i=["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","audio","canvas","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","video","view","vkern"],a=["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feMerge","feMergeNode","feMorphology","feOffset","feSpecularLighting","feTile","feTurbulence"],l=["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmuliscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mpspace","msqrt","mystyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"],s=["#text"],c=["accept","action","align","alt","autocomplete","background","bgcolor","border","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","coords","datetime","default","dir","disabled","download","enctype","face","for","headers","height","hidden","high","href","hreflang","id","ismap","label","lang","list","loop","low","max","maxlength","media","method","min","multiple","name","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","span","srclang","start","src","step","style","summary","tabindex","title","type","usemap","valign","value","width","xmlns"],d=["accent-height","accumulate","additivive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","tabindex","targetx","targety","transform","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"],u=["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"],m=["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"],f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p=function(){return"undefined"==typeof window?null:window};return o()});
//# sourceMappingURL=purify.min.js.map
