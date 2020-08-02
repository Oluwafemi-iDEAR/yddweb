/*!
* jquery.inputmask.bundle.js
* https://github.com/RobinHerbots/jquery.inputmask 
* Copyright (c) 2010 - 2016 Robin Herbots  
* Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
* Version: 3.3.2-27
*/
!function(a){function b(c,d){return this instanceof b?(a.isPlainObject(c)?d=c:(d=d||{},d.alias=c),this.el=void 0,this.opts=a.extend(!0,{},this.defaults,d),this.noMasksCache=d&&void 0!==d.definitions,this.userOptions=d||{},this.events={},void e(this.opts.alias,d,this.opts)):new b(c,d)}function c(a){var b=document.createElement("input"),c="on"+a,d=c in b;return d||(b.setAttribute(c,"return;"),d="function"==typeof b[c]),b=null,d}function d(b,c){var d=b.getAttribute("type"),e="INPUT"===b.tagName&&-1!==a.inArray(d,c.supportsInputType)||b.isContentEditable||"TEXTAREA"===b.tagName;if(!e&&"INPUT"===b.tagName){var f=document.createElement("input");f.setAttribute("type",d),e="text"===f.type,f=null}return e}function e(b,c,d){var f=d.aliases[b];return f?(f.alias&&e(f.alias,void 0,d),a.extend(!0,d,f),a.extend(!0,d,c),!0):(null===d.mask&&(d.mask=b),!1)}function f(b,c,d){function f(a,c){c=void 0!==c?c:b.getAttribute("data-inputmask-"+a),null!==c&&("string"==typeof c&&(0===a.indexOf("on")?c=window[c]:"false"===c?c=!1:"true"===c&&(c=!0)),d[a]=c)}var g,h,i,j,k=b.getAttribute("data-inputmask");if(k&&""!==k&&(k=k.replace(new RegExp("'","g"),'"'),h=JSON.parse("{"+k+"}")),h){i=void 0;for(j in h)if("alias"===j.toLowerCase()){i=h[j];break}}f("alias",i),d.alias&&e(d.alias,d,c);for(g in c){if(h){i=void 0;for(j in h)if(j.toLowerCase()===g.toLowerCase()){i=h[j];break}}f(g,i)}return a.extend(!0,c,d),c}function g(c,d){function e(b){function d(a,b,c,d){this.matches=[],this.isGroup=a||!1,this.isOptional=b||!1,this.isQuantifier=c||!1,this.isAlternator=d||!1,this.quantifier={min:1,max:1}}function e(b,d,e){var f=c.definitions[d];e=void 0!==e?e:b.matches.length;var g=b.matches[e-1];if(f&&!r){f.placeholder=a.isFunction(f.placeholder)?f.placeholder(c):f.placeholder;for(var h=f.prevalidator,i=h?h.length:0,j=1;j<f.cardinality;j++){var k=i>=j?h[j-1]:[],l=k.validator,m=k.cardinality;b.matches.splice(e++,0,{fn:l?"string"==typeof l?new RegExp(l):new function(){this.test=l}:new RegExp("."),cardinality:m?m:1,optionality:b.isOptional,newBlockMarker:void 0===g||g.def!==(f.definitionSymbol||d),casing:f.casing,def:f.definitionSymbol||d,placeholder:f.placeholder,mask:d}),g=b.matches[e-1]}b.matches.splice(e++,0,{fn:f.validator?"string"==typeof f.validator?new RegExp(f.validator):new function(){this.test=f.validator}:new RegExp("."),cardinality:f.cardinality,optionality:b.isOptional,newBlockMarker:void 0===g||g.def!==(f.definitionSymbol||d),casing:f.casing,def:f.definitionSymbol||d,placeholder:f.placeholder,mask:d})}else b.matches.splice(e++,0,{fn:null,cardinality:0,optionality:b.isOptional,newBlockMarker:void 0===g||g.def!==d,casing:null,def:c.staticDefinitionSymbol||d,placeholder:void 0!==c.staticDefinitionSymbol?d:void 0,mask:d}),r=!1}function f(a,b){a.isGroup&&(a.isGroup=!1,e(a,c.groupmarker.start,0),b!==!0&&e(a,c.groupmarker.end))}function g(a,b,c,d){b.matches.length>0&&(void 0===d||d)&&(c=b.matches[b.matches.length-1],f(c)),e(b,a)}function h(){if(t.length>0){if(m=t[t.length-1],g(k,m,o,!m.isAlternator),m.isAlternator){n=t.pop();for(var a=0;a<n.matches.length;a++)n.matches[a].isGroup=!1;t.length>0?(m=t[t.length-1],m.matches.push(n)):s.matches.push(n)}}else g(k,s,o)}function i(a){function b(a){return a===c.optionalmarker.start?a=c.optionalmarker.end:a===c.optionalmarker.end?a=c.optionalmarker.start:a===c.groupmarker.start?a=c.groupmarker.end:a===c.groupmarker.end&&(a=c.groupmarker.start),a}a.matches=a.matches.reverse();for(var d in a.matches){var e=parseInt(d);if(a.matches[d].isQuantifier&&a.matches[e+1]&&a.matches[e+1].isGroup){var f=a.matches[d];a.matches.splice(d,1),a.matches.splice(e+1,0,f)}void 0!==a.matches[d].matches?a.matches[d]=i(a.matches[d]):a.matches[d]=b(a.matches[d])}return a}for(var j,k,l,m,n,o,p,q=/(?:[?*+]|\{[0-9\+\*]+(?:,[0-9\+\*]*)?\})|[^.?*+^${[]()|\\]+|./g,r=!1,s=new d,t=[],u=[];j=q.exec(b);)if(k=j[0],r)h();else switch(k.charAt(0)){case c.escapeChar:r=!0;break;case c.optionalmarker.end:case c.groupmarker.end:if(l=t.pop(),void 0!==l)if(t.length>0){if(m=t[t.length-1],m.matches.push(l),m.isAlternator){n=t.pop();for(var v=0;v<n.matches.length;v++)n.matches[v].isGroup=!1;t.length>0?(m=t[t.length-1],m.matches.push(n)):s.matches.push(n)}}else s.matches.push(l);else h();break;case c.optionalmarker.start:t.push(new d(!1,!0));break;case c.groupmarker.start:t.push(new d(!0));break;case c.quantifiermarker.start:var w=new d(!1,!1,!0);k=k.replace(/[{}]/g,"");var x=k.split(","),y=isNaN(x[0])?x[0]:parseInt(x[0]),z=1===x.length?y:isNaN(x[1])?x[1]:parseInt(x[1]);if(("*"===z||"+"===z)&&(y="*"===z?0:1),w.quantifier={min:y,max:z},t.length>0){var A=t[t.length-1].matches;j=A.pop(),j.isGroup||(p=new d(!0),p.matches.push(j),j=p),A.push(j),A.push(w)}else j=s.matches.pop(),j.isGroup||(p=new d(!0),p.matches.push(j),j=p),s.matches.push(j),s.matches.push(w);break;case c.alternatormarker:t.length>0?(m=t[t.length-1],o=m.matches.pop()):o=s.matches.pop(),o.isAlternator?t.push(o):(n=new d(!1,!1,!1,!0),n.matches.push(o),t.push(n));break;default:h()}for(;t.length>0;)l=t.pop(),f(l,!0),s.matches.push(l);return s.matches.length>0&&(o=s.matches[s.matches.length-1],f(o),u.push(s)),c.numericInput&&i(u[0]),u}function f(f,g){if(null===f||""===f)return void 0;if(1===f.length&&c.greedy===!1&&0!==c.repeat&&(c.placeholder=""),c.repeat>0||"*"===c.repeat||"+"===c.repeat){var h="*"===c.repeat?0:"+"===c.repeat?1:c.repeat;f=c.groupmarker.start+f+c.groupmarker.end+c.quantifiermarker.start+h+","+c.repeat+c.quantifiermarker.end}var i;return void 0===b.prototype.masksCache[f]||d===!0?(i={mask:f,maskToken:e(f),validPositions:{},_buffer:void 0,buffer:void 0,tests:{},metadata:g},d!==!0&&(b.prototype.masksCache[c.numericInput?f.split("").reverse().join(""):f]=i,i=a.extend(!0,{},b.prototype.masksCache[c.numericInput?f.split("").reverse().join(""):f]))):i=a.extend(!0,{},b.prototype.masksCache[c.numericInput?f.split("").reverse().join(""):f]),i}function g(a){return a=a.toString()}var h;if(a.isFunction(c.mask)&&(c.mask=c.mask(c)),a.isArray(c.mask)){if(c.mask.length>1){c.keepStatic=null===c.keepStatic?!0:c.keepStatic;var i="(";return a.each(c.numericInput?c.mask.reverse():c.mask,function(b,c){i.length>1&&(i+=")|("),i+=g(void 0===c.mask||a.isFunction(c.mask)?c:c.mask)}),i+=")",f(i,c.mask)}c.mask=c.mask.pop()}return c.mask&&(h=void 0===c.mask.mask||a.isFunction(c.mask.mask)?f(g(c.mask),c.mask):f(g(c.mask.mask),c.mask)),h}function h(e,f,g){function i(a,b,c){b=b||0;var d,e,f,h=[],i=0,j=o();ha=void 0!==fa?fa.maxLength:void 0,-1===ha&&(ha=void 0);do{if(a===!0&&m().validPositions[i]){var k=m().validPositions[i];e=k.match,d=k.locator.slice(),h.push(c===!0?k.input:I(i,e))}else f=s(i,d,i-1),e=f.match,d=f.locator.slice(),(g.jitMasking===!1||j>i||isFinite(g.jitMasking)&&g.jitMasking>i)&&h.push(I(i,e));i++}while((void 0===ha||ha>i)&&(null!==e.fn||""!==e.def)||b>i);return""===h[h.length-1]&&h.pop(),m().maskLength=i+1,h}function m(){return f}function n(a){var b=m();b.buffer=void 0,a!==!0&&(b._buffer=void 0,b.validPositions={},b.p=0)}function o(a,b,c){var d=-1,e=-1,f=c||m().validPositions;void 0===a&&(a=-1);for(var g in f){var h=parseInt(g);f[h]&&(b||null!==f[h].match.fn)&&(a>=h&&(d=h),h>=a&&(e=h))}return-1!==d&&a-d>1||a>e?d:e}function p(b,c,d,e){if(e||g.insertMode&&void 0!==m().validPositions[b]&&void 0===d){var f,h=a.extend(!0,{},m().validPositions),i=o();for(f=b;i>=f;f++)delete m().validPositions[f];m().validPositions[b]=c;var j,k=!0,l=m().validPositions,p=!1;for(f=j=b;i>=f;f++){var q=h[f];if(void 0!==q)for(var r=j,s=-1;r<m().maskLength&&(null==q.match.fn&&l[f]&&(l[f].match.optionalQuantifier===!0||l[f].match.optionality===!0)||null!=q.match.fn);){if(null===q.match.fn||!g.keepStatic&&l[f]&&(void 0!==l[f+1]&&w(f+1,l[f].locator.slice(),f).length>1||void 0!==l[f].alternation)?r++:r=E(j),p===!1&&h[r]&&h[r].match.def===q.match.def){m().validPositions[r]=a.extend(!0,{},h[r]),m().validPositions[r].input=q.input,j=r,k=!0;break}if(u(r,q.match.def)){var t=C(r,q.input,!0,!0);if(k=t!==!1,j=t.caret||t.insert?o():r,p=!0,k)break}else{if(k=null==q.match.fn,s===r)break;s=r}}if(!k)break}if(!k)return m().validPositions=a.extend(!0,{},h),n(!0),!1}else m().validPositions[b]=c;return n(!0),!0}function q(b,c,d,e){function f(a){var b=m().validPositions[a];if(void 0!==b&&null===b.match.fn){var c=m().validPositions[a-1],d=m().validPositions[a+1];return void 0!==c&&void 0!==d}return!1}var h,i=b,j=a.extend(!0,{},m().validPositions),k=!1;for(m().p=b,h=c-1;h>=i;h--)void 0!==m().validPositions[h]&&(d===!0||!f(h)&&g.canClearPosition(m(),h,o(),e,g)!==!1)&&delete m().validPositions[h];for(n(!0),h=i+1;h<=o();){for(;void 0!==m().validPositions[i];)i++;var l=m().validPositions[i];if(i>h&&(h=i+1),void 0===m().validPositions[h]&&D(h)||void 0!==l)h++;else{var p=s(h);k===!1&&j[i]&&j[i].match.def===p.match.def?(m().validPositions[i]=a.extend(!0,{},j[i]),m().validPositions[i].input=p.input,delete m().validPositions[h],h++):u(i,p.match.def)?C(i,p.input||I(h),!0)!==!1&&(delete m().validPositions[h],h++,k=!0):D(h)||(h++,i--),i++}}n(!0)}function r(a,b){for(var c,d=a,e=o(),f=m().validPositions[e]||w(0)[0],h=void 0!==f.alternation?f.locator[f.alternation].toString().split(","):[],i=0;i<d.length&&(c=d[i],!c.match||(!g.greedy&&!b||c.match.optionalQuantifier===!0)&&(c.match.optionality!==!1&&c.match.newBlockMarker!==!1||c.match.optionalQuantifier===!0)||!(void 0===f.alternation||f.alternation!==c.alternation||void 0!==c.locator[f.alternation]&&B(c.locator[f.alternation].toString().split(","),h)));i++);return c}function s(a,b,c){return m().validPositions[a]||r(w(a,b?b.slice():b,c))}function t(a){return m().validPositions[a]?m().validPositions[a]:w(a)[0]}function u(a,b){for(var c=!1,d=w(a),e=0;e<d.length;e++)if(d[e].match&&d[e].match.def===b){c=!0;break}return c}function v(b,c){var d,e;return(m().tests[b]||m().validPositions[b])&&a.each(m().tests[b]||[m().validPositions[b]],function(a,b){var f=b.alternation?b.locator[b.alternation].toString().indexOf(c):-1;(void 0===e||e>f)&&-1!==f&&(d=b,e=f)}),d}function w(b,c,d){function e(c,d,f,g){function i(f,g,k){function p(b,c){var d=0===a.inArray(b,c.matches);return d||a.each(c.matches,function(a,e){return e.isQuantifier===!0&&(d=p(b,c.matches[a-1]))?!1:void 0}),d}function q(a,b){var c=v(a,b);return c?c.locator.slice(c.alternation+1):[]}if(j>1e4)throw"Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. "+m().mask;if(j===b&&void 0===f.matches)return l.push({match:f,locator:g.reverse(),cd:o}),!0;if(void 0!==f.matches){if(f.isGroup&&k!==f){if(f=i(c.matches[a.inArray(f,c.matches)+1],g))return!0}else if(f.isOptional){var r=f;if(f=e(f,d,g,k)){if(h=l[l.length-1].match,!p(h,r))return!0;n=!0,j=b}}else if(f.isAlternator){var s,t=f,u=[],w=l.slice(),x=g.length,y=d.length>0?d.shift():-1;if(-1===y||"string"==typeof y){var z,A=j,B=d.slice(),C=[];if("string"==typeof y)C=y.split(",");else for(z=0;z<t.matches.length;z++)C.push(z);for(var D=0;D<C.length;D++){if(z=parseInt(C[D]),l=[],d=q(j,z),f=i(t.matches[z]||c.matches[z],[z].concat(g),k)||f,f!==!0&&void 0!==f&&C[C.length-1]<t.matches.length){var E=a.inArray(f,c.matches)+1;c.matches.length>E&&(f=i(c.matches[E],[E].concat(g.slice(1,g.length)),k),f&&(C.push(E.toString()),a.each(l,function(a,b){b.alternation=g.length-1})))}s=l.slice(),j=A,l=[];for(var F=0;F<B.length;F++)d[F]=B[F];for(var G=0;G<s.length;G++){var H=s[G],I=!1;H.alternation=H.alternation||x;for(var J=0;J<u.length;J++){var K=u[J];if(H.match.def===K.match.def&&("string"!=typeof y||-1!==a.inArray(H.locator[H.alternation].toString(),C))){I=H.match.mask===K.match.mask,-1===K.locator[H.alternation].toString().indexOf(H.locator[H.alternation])&&(K.locator[H.alternation]=K.locator[H.alternation]+","+H.locator[H.alternation],K.alternation=H.alternation);break}}I||u.push(H)}}"string"==typeof y&&(u=a.map(u,function(b,c){if(isFinite(c)){var d,e=b.alternation,f=b.locator[e].toString().split(",");b.locator[e]=void 0,b.alternation=void 0;for(var g=0;g<f.length;g++)d=-1!==a.inArray(f[g],C),d&&(void 0!==b.locator[e]?(b.locator[e]+=",",b.locator[e]+=f[g]):b.locator[e]=parseInt(f[g]),b.alternation=e);if(void 0!==b.locator[e])return b}})),l=w.concat(u),j=b,n=l.length>0}else f=i(t.matches[y]||c.matches[y],[y].concat(g),k);if(f)return!0}else if(f.isQuantifier&&k!==c.matches[a.inArray(f,c.matches)-1])for(var L=f,M=d.length>0?d.shift():0;M<(isNaN(L.quantifier.max)?M+1:L.quantifier.max)&&b>=j;M++){var N=c.matches[a.inArray(L,c.matches)-1];if(f=i(N,[M].concat(g),N)){if(h=l[l.length-1].match,h.optionalQuantifier=M>L.quantifier.min-1,p(h,N)){if(M>L.quantifier.min-1){n=!0,j=b;break}return!0}return!0}}else if(f=e(f,d,g,k))return!0}else j++}for(var k=d.length>0?d.shift():0;k<c.matches.length;k++)if(c.matches[k].isQuantifier!==!0){var p=i(c.matches[k],[k].concat(f),g);if(p&&j===b)return p;if(j>b)break}}function f(b){var c=[];return a.isArray(b)||(b=[b]),b.length>0&&(void 0===b[0].alternation?(c=r(b.slice()).locator.slice(),0===c.length&&(c=b[0].locator.slice())):a.each(b,function(a,b){if(""!==b.def)if(0===c.length)c=b.locator.slice();else for(var d=0;d<c.length;d++)b.locator[d]&&-1===c[d].toString().indexOf(b.locator[d])&&(c[d]+=","+b.locator[d])})),c}function g(a){return a}var h,i=m().maskToken,j=c?d:0,k=c?c.slice():[0],l=[],n=!1,o=c?c.join(""):"";if(b>-1){if(void 0===c){for(var p,q=b-1;void 0===(p=m().validPositions[q]||m().tests[q])&&q>-1;)q--;void 0!==p&&q>-1&&(k=f(p),o=k.join(""),j=q)}if(m().tests[b]&&m().tests[b][0].cd===o)return g(m().tests[b]);for(var s=k.shift();s<i.length;s++){var t=e(i[s],k,[s]);if(t&&j===b||j>b)break}}return(0===l.length||n)&&l.push({match:{fn:null,cardinality:0,optionality:!0,casing:null,def:"",placeholder:""},locator:[],cd:o}),void 0!==c&&m().tests[b]?a.extend(!0,[],l):(m().tests[b]=a.extend(!0,[],l),m().tests[b])}function x(){return void 0===m()._buffer&&(m()._buffer=i(!1,1),void 0===m().buffer&&m()._buffer.slice()),m()._buffer}function y(a){return(void 0===m().buffer||a===!0)&&(m().buffer=i(!0,o(),!0)),m().buffer}function z(a,b,c){var d;if(a===!0)n(),a=0,b=c.length;else for(d=a;b>d;d++)delete m().validPositions[d];for(d=a;b>d;d++)n(!0),c[d]!==g.skipOptionalPartCharacter&&C(d,c[d],!0,!0)}function A(a,c,d){switch(c.casing){case"upper":a=a.toUpperCase();break;case"lower":a=a.toLowerCase();break;case"title":var e=m().validPositions[d-1];a=0===d||e&&e.input===String.fromCharCode(b.keyCode.SPACE)?a.toUpperCase():a.toLowerCase()}return a}function B(b,c){for(var d=g.greedy?c:c.slice(0,1),e=!1,f=0;f<b.length;f++)if(-1!==a.inArray(b[f],d)){e=!0;break}return e}function C(c,d,e,f){function h(a){return ja?a.begin-a.end>1||a.begin-a.end===1&&g.insertMode:a.end-a.begin>1||a.end-a.begin===1&&g.insertMode}function i(b,d,e,f){var i=!1;return a.each(w(b),function(j,k){for(var l=k.match,r=d?1:0,s="",t=l.cardinality;t>r;t--)s+=G(b-(t-1));if(d&&(s+=d),y(!0),i=null!=l.fn?l.fn.test(s,m(),b,e,g,h(c)):d!==l.def&&d!==g.skipOptionalPartCharacter||""===l.def?!1:{c:l.placeholder||l.def,pos:b},i!==!1){var u=void 0!==i.c?i.c:d;u=u===g.skipOptionalPartCharacter&&null===l.fn?l.placeholder||l.def:u;var v=b,w=y();if(void 0!==i.remove&&(a.isArray(i.remove)||(i.remove=[i.remove]),a.each(i.remove.sort(function(a,b){return b-a}),function(a,b){q(b,b+1,!0)})),void 0!==i.insert&&(a.isArray(i.insert)||(i.insert=[i.insert]),a.each(i.insert.sort(function(a,b){return a-b}),function(a,b){C(b.pos,b.c,!1,f)})),i.refreshFromBuffer){var x=i.refreshFromBuffer;if(e=!0,z(x===!0?x:x.start,x.end,w),void 0===i.pos&&void 0===i.c)return i.pos=o(),!1;if(v=void 0!==i.pos?i.pos:b,v!==b)return i=a.extend(i,C(v,u,!0,f)),!1}else if(i!==!0&&void 0!==i.pos&&i.pos!==b&&(v=i.pos,z(b,v,y().slice()),v!==b))return i=a.extend(i,C(v,u,!0)),!1;return i!==!0&&void 0===i.pos&&void 0===i.c?!1:(j>0&&n(!0),p(v,a.extend({},k,{input:A(u,l,v)}),f,h(c))||(i=!1),!1)}}),i}function j(b,c,d,e){for(var f,h,i,j,k,l,p=a.extend(!0,{},m().validPositions),q=o();q>=0&&(j=m().validPositions[q],!j||void 0===j.alternation||(f=q,h=m().validPositions[f].alternation,s(f).locator[j.alternation]===j.locator[j.alternation]));q--);if(void 0!==h){f=parseInt(f);for(var r in m().validPositions)if(r=parseInt(r),j=m().validPositions[r],r>=f&&void 0!==j.alternation){var t;0===f?(t=[],a.each(m().tests[f],function(a,b){void 0!==b.locator[h]&&(t=t.concat(b.locator[h].toString().split(",")))})):t=m().validPositions[f].locator[h].toString().split(",");var u=void 0!==j.locator[h]?j.locator[h]:t[0];u.length>0&&(u=u.split(",")[0]);for(var w=0;w<t.length;w++){var x=[],y=0,z=0;if(u<t[w]){for(var A,B,D=r;D>=0;D--)if(A=m().validPositions[D],void 0!==A){var E=v(D,t[w]);m().validPositions[D].match.def!==E.match.def&&(m().validPositions[D].generatedInput!==!0&&x.push(m().validPositions[D].input),m().validPositions[D]=E,m().validPositions[D].input=I(D),null===m().validPositions[D].match.fn&&z++,A=E),B=A.locator[h],A.locator[h]=parseInt(t[w]);break}if(u!==A.locator[h]){for(k=r+1;k<o(void 0,!0)+1;k++)l=m().validPositions[k],l&&null!=l.match.fn?x.push(l.input):b>k&&y++,delete m().validPositions[k];for(n(!0),g.keepStatic=!g.keepStatic,i=!0;x.length>0;){var F=x.shift();if(F!==g.skipOptionalPartCharacter&&!(i=C(o(void 0,!0)+1,F,!1,e)))break}if(A.alternation=h,A.locator[h]=B,i){var G=o(b)+1;for(k=r+1;k<o()+1;k++)l=m().validPositions[k],(void 0===l||null==l.match.fn)&&b>k&&z++;b+=z-y,i=C(b>G?G:b,c,d,e)}if(g.keepStatic=!g.keepStatic,i)return i;n(),m().validPositions=a.extend(!0,{},p)}}}break}}return!1}function k(b,c){for(var d=m().validPositions[c],e=d.locator,f=e.length,g=b;c>g;g++)if(void 0===m().validPositions[g]&&!D(g,!0)){var h=w(g),i=h[0],j=-1;a.each(h,function(a,b){for(var c=0;f>c&&(void 0!==b.locator[c]&&B(b.locator[c].toString().split(","),e[c].toString().split(",")));c++)c>j&&(j=c,i=b)}),p(g,a.extend({},i,{input:i.match.placeholder||i.match.def}),!0)}}e=e===!0;var l=c;void 0!==c.begin&&(l=ja&&!h(c)?c.end:c.begin);for(var t=!1,u=a.extend(!0,{},m().validPositions),x=l-1;x>-1&&!m().validPositions[x];x--);var F;for(x++;l>x;x++)void 0===m().validPositions[x]&&(g.jitMasking===!1||g.jitMasking>x)&&((F=s(x,s(x-1).locator,x-1)).match.def===g.radixPointDefinitionSymbol||!D(x,!0)||a.inArray(g.radixPoint,y())<x&&F.match.fn&&F.match.fn.test(I(x),m(),x,!1,g))&&(t=i(x,F.match.placeholder||(null==F.match.fn?F.match.def:""!==I(x)?I(x):y()[x]),!0,f),t!==!1&&(m().validPositions[t.pos||x].generatedInput=!0));if(h(c)&&(Q(void 0,b.keyCode.DELETE,c),l=m().p),l<m().maskLength&&(t=i(l,d,e,f),(!e||f===!0)&&t===!1)){var H=m().validPositions[l];if(!H||null!==H.match.fn||H.match.def!==d&&d!==g.skipOptionalPartCharacter){if((g.insertMode||void 0===m().validPositions[E(l)])&&!D(l,!0)){var J=w(l).slice();""===J[J.length-1].match.def&&J.pop();var K=r(J,!0);K&&(K=K.match.placeholder||K.match.def,i(l,K,e,f));for(var L=l+1,M=E(l);M>=L;L++)if(t=i(L,d,e,f),t!==!1){k(l,L),l=L;break}}}else t={caret:E(l)}}return t===!1&&g.keepStatic&&(t=j(l,d,e,f)),t===!0&&(t={pos:l}),a.isFunction(g.postValidation)&&t!==!1&&!e&&f!==!0&&(t=g.postValidation(y(!0),t,g)?t:!1),void 0===t.pos&&(t.pos=l),t===!1&&(n(!0),m().validPositions=a.extend(!0,{},u)),t}function D(a,b){var c;if(b?(c=s(a).match,""===c.def&&(c=t(a).match)):c=t(a).match,null!=c.fn)return c.fn;if(b!==!0&&a>-1&&!g.keepStatic&&void 0===m().validPositions[a]){var d=w(a);return d.length>2}return!1}function E(a,b){var c=m().maskLength;if(a>=c)return c;for(var d=a;++d<c&&(b===!0&&(t(d).match.newBlockMarker!==!0||!D(d))||b!==!0&&!D(d)););return d}function F(a,b){var c=a;if(0>=c)return 0;for(;--c>0&&(b===!0&&t(c).match.newBlockMarker!==!0||b!==!0&&!D(c)&&w(c).length<2););return c}function G(a){return void 0===m().validPositions[a]?I(a):m().validPositions[a].input}function H(b,c,d,e,f){if(e&&a.isFunction(g.onBeforeWrite)){var h=g.onBeforeWrite(e,c,d,g);if(h){if(h.refreshFromBuffer){var i=h.refreshFromBuffer;z(i===!0?i:i.start,i.end,h.buffer||c),c=y(!0)}void 0!==d&&(d=void 0!==h.caret?h.caret:d)}}b.inputmask._valueSet(c.join("")),void 0===d||void 0!==e&&"blur"===e.type||L(b,d),f===!0&&(la=!0,a(b).trigger("input"))}function I(a,b){if(b=b||t(a).match,void 0!==b.placeholder)return b.placeholder;if(null===b.fn){if(a>-1&&!g.keepStatic&&void 0===m().validPositions[a]){var c,d=w(a),e=[];if(d.length>2)for(var f=0;f<d.length;f++)if(d[f].match.optionality!==!0&&d[f].match.optionalQuantifier!==!0&&(null===d[f].match.fn||void 0===c||d[f].match.fn.test(c.match.def,m(),a,!0,g)!==!1)&&(e.push(d[f]),null===d[f].match.fn&&(c=d[f]),e.length>1&&new RegExp("[0-9a-bA-Z]").test(e[0].match.def)))return g.placeholder.charAt(a%g.placeholder.length)}return b.def}return g.placeholder.charAt(a%g.placeholder.length)}function J(c,d,e,f){function h(){var a=!1,b=x().slice(l,E(l)).join("").indexOf(k);if(-1!==b&&!D(l)){a=!0;for(var c=x().slice(l,l+b),d=0;d<c.length;d++)if(" "!==c[d]){a=!1;break}}return a}var i,j=f.slice(),k="",l=0;if(n(),m().p=E(-1),!e)if(g.autoUnmask!==!0){var p=x().slice(0,E(-1)).join(""),q=j.join("").match(new RegExp("^"+b.escapeRegex(p),"g"));q&&q.length>0&&(j.splice(0,q.length*p.length),l=E(l))}else l=E(l);a.each(j,function(b,d){if(void 0!==d){var f=new a.Event("keypress");f.which=d.charCodeAt(0),k+=d;var j=o(void 0,!0),p=m().validPositions[j],q=s(j+1,p?p.locator.slice():void 0,j);if(!h()||e||g.autoUnmask){var r=e?b:null==q.match.fn&&q.match.optionality&&j+1<m().p?j+1:m().p;i=S.call(c,f,!0,!1,e,r),l=r+1,k=""}else i=S.call(c,f,!0,!1,!0,j+1);if(!e&&a.isFunction(g.onBeforeWrite)&&(i=g.onBeforeWrite(f,y(),i.forwardPosition,g),i&&i.refreshFromBuffer)){var t=i.refreshFromBuffer;z(t===!0?t:t.start,t.end,i.buffer),n(!0),i.caret&&(m().p=i.caret)}}}),d&&H(c,y(),document.activeElement===c?E(o(0)):void 0,new a.Event("checkval"))}function K(b){if(b&&void 0===b.inputmask)return b.value;var c=[],d=m().validPositions;for(var e in d)d[e].match&&null!=d[e].match.fn&&c.push(d[e].input);var f=0===c.length?"":(ja?c.reverse():c).join("");if(a.isFunction(g.onUnMask)){var h=(ja?y().slice().reverse():y()).join("");f=g.onUnMask(h,f,g)||f}return f}function L(a,b,c,d){function e(a){if(d!==!0&&ja&&"number"==typeof a&&(!g.greedy||""!==g.placeholder)){var b=y().join("").length;a=b-a}return a}var f;if("number"!=typeof b)return a.setSelectionRange?(b=a.selectionStart,c=a.selectionEnd):window.getSelection?(f=window.getSelection().getRangeAt(0),(f.commonAncestorContainer.parentNode===a||f.commonAncestorContainer===a)&&(b=f.startOffset,c=f.endOffset)):document.selection&&document.selection.createRange&&(f=document.selection.createRange(),b=0-f.duplicate().moveStart("character",-a.inputmask._valueGet().length),c=b+f.text.length),{begin:e(b),end:e(c)};b=e(b),c=e(c),c="number"==typeof c?c:b;var h=parseInt(((a.ownerDocument.defaultView||window).getComputedStyle?(a.ownerDocument.defaultView||window).getComputedStyle(a,null):a.currentStyle).fontSize)*c;if(a.scrollLeft=h>a.scrollWidth?h:0,j||g.insertMode!==!1||b!==c||c++,a.setSelectionRange)a.selectionStart=b,a.selectionEnd=c;else if(window.getSelection){if(f=document.createRange(),void 0===a.firstChild||null===a.firstChild){var i=document.createTextNode("");a.appendChild(i)}f.setStart(a.firstChild,b<a.inputmask._valueGet().length?b:a.inputmask._valueGet().length),f.setEnd(a.firstChild,c<a.inputmask._valueGet().length?c:a.inputmask._valueGet().length),f.collapse(!0);var k=window.getSelection();k.removeAllRanges(),k.addRange(f)}else a.createTextRange&&(f=a.createTextRange(),f.collapse(!0),f.moveEnd("character",c),f.moveStart("character",b),f.select())}function M(b){var c,d,e=y(),f=e.length,g=o(),h={},i=m().validPositions[g],j=void 0!==i?i.locator.slice():void 0;for(c=g+1;c<e.length;c++)d=s(c,j,c-1),j=d.locator.slice(),h[c]=a.extend(!0,{},d);var k=i&&void 0!==i.alternation?i.locator[i.alternation]:void 0;for(c=f-1;c>g&&(d=h[c],(d.match.optionality||d.match.optionalQuantifier||k&&(k!==h[c].locator[i.alternation]&&null!=d.match.fn||null===d.match.fn&&d.locator[i.alternation]&&B(d.locator[i.alternation].toString().split(","),k.toString().split(","))&&""!==w(c)[0].def))&&e[c]===I(c,d.match));c--)f--;return b?{l:f,def:h[f]?h[f].match:void 0}:f}function N(a){for(var b=M(),c=a.length-1;c>b&&!D(c);c--);return a.splice(b,c+1-b),a}function O(b){if(a.isFunction(g.isComplete))return g.isComplete(b,g);if("*"===g.repeat)return void 0;var c=!1,d=M(!0),e=F(d.l);if(void 0===d.def||d.def.newBlockMarker||d.def.optionality||d.def.optionalQuantifier){c=!0;for(var f=0;e>=f;f++){var h=s(f).match;if(null!==h.fn&&void 0===m().validPositions[f]&&h.optionality!==!0&&h.optionalQuantifier!==!0||null===h.fn&&b[f]!==I(f,h)){c=!1;break}}}return c}function P(b){function c(b){if(a.valHooks&&(void 0===a.valHooks[b]||a.valHooks[b].inputmaskpatch!==!0)){var c=a.valHooks[b]&&a.valHooks[b].get?a.valHooks[b].get:function(a){return a.value},d=a.valHooks[b]&&a.valHooks[b].set?a.valHooks[b].set:function(a,b){return a.value=b,a};a.valHooks[b]={get:function(a){if(a.inputmask){if(a.inputmask.opts.autoUnmask)return a.inputmask.unmaskedvalue();var b=c(a);return-1!==o(void 0,void 0,a.inputmask.maskset.validPositions)||g.nullable!==!0?b:""}return c(a)},set:function(b,c){var e,f=a(b);return e=d(b,c),b.inputmask&&f.trigger("setvalue"),e},inputmaskpatch:!0}}}function d(){return this.inputmask?this.inputmask.opts.autoUnmask?this.inputmask.unmaskedvalue():-1!==o()||g.nullable!==!0?document.activeElement===this&&g.clearMaskOnLostFocus?(ja?N(y().slice()).reverse():N(y().slice())).join(""):h.call(this):"":h.call(this)}function e(b){i.call(this,b),this.inputmask&&a(this).trigger("setvalue")}function f(b){oa.on(b,"mouseenter",function(b){var c=a(this),d=this,e=d.inputmask._valueGet();e!==y().join("")&&c.trigger("setvalue")})}var h,i;if(!b.inputmask.__valueGet){if(Object.getOwnPropertyDescriptor){"function"!=typeof Object.getPrototypeOf&&(Object.getPrototypeOf="object"==typeof"test".__proto__?function(a){return a.__proto__}:function(a){return a.constructor.prototype});var j=Object.getPrototypeOf?Object.getOwnPropertyDescriptor(Object.getPrototypeOf(b),"value"):void 0;j&&j.get&&j.set?(h=j.get,i=j.set,Object.defineProperty(b,"value",{get:d,set:e,configurable:!0})):"INPUT"!==b.tagName&&(h=function(){return this.textContent},i=function(a){this.textContent=a},Object.defineProperty(b,"value",{get:d,set:e,configurable:!0}))}else document.__lookupGetter__&&b.__lookupGetter__("value")&&(h=b.__lookupGetter__("value"),i=b.__lookupSetter__("value"),b.__defineGetter__("value",d),b.__defineSetter__("value",e));b.inputmask.__valueGet=h,b.inputmask._valueGet=function(a){return ja&&a!==!0?h.call(this.el).split("").reverse().join(""):h.call(this.el)},b.inputmask.__valueSet=i,b.inputmask._valueSet=function(a,b){i.call(this.el,null===a||void 0===a?"":b!==!0&&ja?a.split("").reverse().join(""):a)},void 0===h&&(h=function(){return this.value},i=function(a){this.value=a},c(b.type),f(b))}}function Q(c,d,e,f){function h(){if(g.keepStatic){n(!0);var b,d=[],e=a.extend(!0,{},m().validPositions);for(b=o();b>=0;b--){var f=m().validPositions[b];if(f&&(null!=f.match.fn&&d.push(f.input),delete m().validPositions[b],void 0!==f.alternation&&f.locator[f.alternation]===s(b).locator[f.alternation]))break}if(b>-1)for(;d.length>0;){m().p=E(o());var h=new a.Event("keypress");h.which=d.pop().charCodeAt(0),S.call(c,h,!0,!1,!1,m().p)}else m().validPositions=a.extend(!0,{},e)}}if((g.numericInput||ja)&&(d===b.keyCode.BACKSPACE?d=b.keyCode.DELETE:d===b.keyCode.DELETE&&(d=b.keyCode.BACKSPACE),ja)){var i=e.end;e.end=e.begin,e.begin=i}d===b.keyCode.BACKSPACE&&(e.end-e.begin<1||g.insertMode===!1)?(e.begin=F(e.begin),void 0===m().validPositions[e.begin]||m().validPositions[e.begin].input!==g.groupSeparator&&m().validPositions[e.begin].input!==g.radixPoint||e.begin--):d===b.keyCode.DELETE&&e.begin===e.end&&(e.end=D(e.end)?e.end+1:E(e.end)+1,void 0===m().validPositions[e.begin]||m().validPositions[e.begin].input!==g.groupSeparator&&m().validPositions[e.begin].input!==g.radixPoint||e.end++),q(e.begin,e.end,!1,f),f!==!0&&h();var j=o(e.begin);j<e.begin?m().p=E(j):f!==!0&&(m().p=e.begin)}function R(d){var e=this,f=a(e),h=d.keyCode,i=L(e);if(h===b.keyCode.BACKSPACE||h===b.keyCode.DELETE||l&&h===b.keyCode.BACKSPACE_SAFARI||d.ctrlKey&&h===b.keyCode.X&&!c("cut"))d.preventDefault(),Q(e,h,i),H(e,y(),m().p,d,ea!==y().join("")),e.inputmask._valueGet()===x().join("")?f.trigger("cleared"):O(y())===!0&&f.trigger("complete"),g.showTooltip&&(e.title=g.tooltip||m().mask);else if(h===b.keyCode.END||h===b.keyCode.PAGE_DOWN){d.preventDefault();var j=E(o());g.insertMode||j!==m().maskLength||d.shiftKey||j--,L(e,d.shiftKey?i.begin:j,j,!0)}else h===b.keyCode.HOME&&!d.shiftKey||h===b.keyCode.PAGE_UP?(d.preventDefault(),L(e,0,d.shiftKey?i.begin:0,!0)):(g.undoOnEscape&&h===b.keyCode.ESCAPE||90===h&&d.ctrlKey)&&d.altKey!==!0?(J(e,!0,!1,ea.split("")),f.trigger("click")):h!==b.keyCode.INSERT||d.shiftKey||d.ctrlKey?g.tabThrough===!0&&h===b.keyCode.TAB?(d.shiftKey===!0?(null===t(i.begin).match.fn&&(i.begin=E(i.begin)),i.end=F(i.begin,!0),i.begin=F(i.end,!0)):(i.begin=E(i.begin,!0),i.end=E(i.begin,!0),i.end<m().maskLength&&i.end--),i.begin<m().maskLength&&(d.preventDefault(),L(e,i.begin,i.end))):g.insertMode!==!1||d.shiftKey||(h===b.keyCode.RIGHT?setTimeout(function(){var a=L(e);L(e,a.begin)},0):h===b.keyCode.LEFT&&setTimeout(function(){var a=L(e);L(e,ja?a.begin+1:a.begin-1)},0)):(g.insertMode=!g.insertMode,L(e,g.insertMode||i.begin!==m().maskLength?i.begin:i.begin-1));g.onKeyDown.call(this,d,y(),L(e).begin,g),ma=-1!==a.inArray(h,g.ignorables)}function S(c,d,e,f,h){var i=this,j=a(i),k=c.which||c.charCode||c.keyCode;if(!(d===!0||c.ctrlKey&&c.altKey)&&(c.ctrlKey||c.metaKey||ma))return k===b.keyCode.ENTER&&ea!==y().join("")&&(ea=y().join(""),setTimeout(function(){j.trigger("change")},0)),!0;if(k){46===k&&c.shiftKey===!1&&","===g.radixPoint&&(k=44);var l,o=d?{begin:h,end:h}:L(i),p=String.fromCharCode(k);m().writeOutBuffer=!0;var q=C(o,p,f);if(q!==!1){var r=q.pos;if(n(!0),void 0!==q.caret)l=q.caret;else{var s=m().validPositions;l=!g.keepStatic&&(void 0!==s[r+1]&&w(r+1,s[r].locator.slice(),r).length>1||void 0!==s[r].alternation)?r+1:E(r)}m().p=l}if(e!==!1){var t=this;if(setTimeout(function(){g.onKeyValidation.call(t,k,q,g)},0),m().writeOutBuffer&&q!==!1){var u=y();H(i,u,g.numericInput&&void 0===q.caret?F(l):l,c,d!==!0),d!==!0&&setTimeout(function(){O(u)===!0&&j.trigger("complete")},0)}}if(g.showTooltip&&(i.title=g.tooltip||m().mask),c.preventDefault(),d)return q.forwardPosition=l,q}}function T(b){var c,d=this,e=b.originalEvent||b,f=a(d),h=d.inputmask._valueGet(!0),i=L(d);ja&&(c=i.end,i.end=i.begin,i.begin=c);var j=h.substr(0,i.begin),k=h.substr(i.end,h.length);j===(ja?x().reverse():x()).slice(0,i.begin).join("")&&(j=""),k===(ja?x().reverse():x()).slice(i.end).join("")&&(k=""),ja&&(c=j,j=k,k=c),window.clipboardData&&window.clipboardData.getData?h=j+window.clipboardData.getData("Text")+k:e.clipboardData&&e.clipboardData.getData&&(h=j+e.clipboardData.getData("text/plain")+k);var l=h;if(a.isFunction(g.onBeforePaste)){if(l=g.onBeforePaste(h,g),l===!1)return b.preventDefault();l||(l=h)}return J(d,!1,!1,ja?l.split("").reverse():l.toString().split("")),H(d,y(),E(o()),b,!0),O(y())===!0&&f.trigger("complete"),b.preventDefault()}function U(c){var d=this,e=d.inputmask._valueGet();if(y().join("")!==e){var f=L(d);if(e=e.replace(new RegExp("("+b.escapeRegex(x().join(""))+")*"),""),k){var g=e.replace(y().join(""),"");if(1===g.length){var h=new a.Event("keypress");return h.which=g.charCodeAt(0),S.call(d,h,!0,!0,!1,m().validPositions[f.begin-1]?f.begin:f.begin-1),!1}}if(f.begin>e.length&&(L(d,e.length),f=L(d)),y().length-e.length!==1||e.charAt(f.begin)===y()[f.begin]||e.charAt(f.begin+1)===y()[f.begin]||D(f.begin)){for(var i=o()+1,j=y().slice(i).join("");null===e.match(b.escapeRegex(j)+"$");)j=j.slice(1);e=e.replace(j,""),e=e.split(""),J(d,!0,!1,e),O(y())===!0&&a(d).trigger("complete")}else c.keyCode=b.keyCode.BACKSPACE,R.call(d,c);c.preventDefault()}}function V(b){var c=this,d=c.inputmask._valueGet();J(c,!0,!1,(a.isFunction(g.onBeforeMask)?g.onBeforeMask(d,g)||d:d).split("")),ea=y().join(""),(g.clearMaskOnLostFocus||g.clearIncomplete)&&c.inputmask._valueGet()===x().join("")&&c.inputmask._valueSet("")}function W(a){var b=this,c=b.inputmask._valueGet();
g.showMaskOnFocus&&(!g.showMaskOnHover||g.showMaskOnHover&&""===c)?b.inputmask._valueGet()!==y().join("")&&H(b,y(),E(o())):na===!1&&L(b,E(o())),g.positionCaretOnTab===!0&&setTimeout(function(){L(b,E(o()))},0),ea=y().join("")}function X(a){var b=this;if(na=!1,g.clearMaskOnLostFocus&&document.activeElement!==b){var c=y().slice(),d=b.inputmask._valueGet();d!==b.getAttribute("placeholder")&&""!==d&&(-1===o()&&d===x().join("")?c=[]:N(c),H(b,c))}}function Y(b){function c(b){if(""!==g.radixPoint){var c=m().validPositions;if(void 0===c[b]||c[b].input===I(b)){if(b<E(-1))return!0;var d=a.inArray(g.radixPoint,y());if(-1!==d){for(var e in c)if(e>d&&c[e].input!==I(e))return!1;return!0}}}return!1}var d=this;setTimeout(function(){if(document.activeElement===d){var b=L(d);if(b.begin===b.end)switch(g.positionCaretOnClick){case"none":break;case"radixFocus":if(c(b.begin)){L(d,g.numericInput?E(a.inArray(g.radixPoint,y())):a.inArray(g.radixPoint,y()));break}default:var e=b.begin,f=o(e,!0),h=E(f);if(h>e)L(d,D(e)||D(e-1)?e:E(e));else{var i=I(h);(""!==i&&y()[h]!==i||!D(h,!0)&&t(h).match.def===i)&&(h=E(h)),L(d,h)}}}},0)}function Z(a){var b=this;setTimeout(function(){L(b,0,E(o()))},0)}function $(c){var d=this,e=a(d),f=L(d),h=c.originalEvent||c,i=window.clipboardData||h.clipboardData,j=ja?y().slice(f.end,f.begin):y().slice(f.begin,f.end);i.setData("text",ja?j.reverse().join(""):j.join("")),document.execCommand&&document.execCommand("copy"),Q(d,b.keyCode.DELETE,f),H(d,y(),m().p,c,ea!==y().join("")),d.inputmask._valueGet()===x().join("")&&e.trigger("cleared"),g.showTooltip&&(d.title=g.tooltip||m().mask)}function _(b){var c=a(this),d=this;if(d.inputmask){var e=d.inputmask._valueGet(),f=y().slice();ea!==f.join("")&&setTimeout(function(){c.trigger("change"),ea=f.join("")},0),""!==e&&(g.clearMaskOnLostFocus&&(-1===o()&&e===x().join("")?f=[]:N(f)),O(f)===!1&&(setTimeout(function(){c.trigger("incomplete")},0),g.clearIncomplete&&(n(),f=g.clearMaskOnLostFocus?[]:x().slice())),H(d,f,void 0,b))}}function aa(a){var b=this;na=!0,document.activeElement!==b&&g.showMaskOnHover&&b.inputmask._valueGet()!==y().join("")&&H(b,y())}function ba(a){ea!==y().join("")&&ga.trigger("change"),g.clearMaskOnLostFocus&&-1===o()&&fa.inputmask._valueGet&&fa.inputmask._valueGet()===x().join("")&&fa.inputmask._valueSet(""),g.removeMaskOnSubmit&&(fa.inputmask._valueSet(fa.inputmask.unmaskedvalue(),!0),setTimeout(function(){H(fa,y())},0))}function ca(a){setTimeout(function(){ga.trigger("setvalue")},0)}function da(b){if(fa=b,ga=a(fa),g.showTooltip&&(fa.title=g.tooltip||m().mask),("rtl"===fa.dir||g.rightAlign)&&(fa.style.textAlign="right"),("rtl"===fa.dir||g.numericInput)&&(fa.dir="ltr",fa.removeAttribute("dir"),fa.inputmask.isRTL=!0,ja=!0),oa.off(fa),P(fa),d(fa,g)&&(oa.on(fa,"submit",ba),oa.on(fa,"reset",ca),oa.on(fa,"mouseenter",aa),oa.on(fa,"blur",_),oa.on(fa,"focus",W),oa.on(fa,"mouseleave",X),oa.on(fa,"click",Y),oa.on(fa,"dblclick",Z),oa.on(fa,"paste",T),oa.on(fa,"dragdrop",T),oa.on(fa,"drop",T),oa.on(fa,"cut",$),oa.on(fa,"complete",g.oncomplete),oa.on(fa,"incomplete",g.onincomplete),oa.on(fa,"cleared",g.oncleared),g.inputEventOnly!==!0&&(oa.on(fa,"keydown",R),oa.on(fa,"keypress",S)),oa.on(fa,"input",U)),oa.on(fa,"setvalue",V),""!==fa.inputmask._valueGet()||g.clearMaskOnLostFocus===!1||document.activeElement===fa){var c=a.isFunction(g.onBeforeMask)?g.onBeforeMask(fa.inputmask._valueGet(),g)||fa.inputmask._valueGet():fa.inputmask._valueGet();J(fa,!0,!1,c.split(""));var e=y().slice();ea=e.join(""),O(e)===!1&&g.clearIncomplete&&n(),g.clearMaskOnLostFocus&&document.activeElement!==fa&&(-1===o()?e=[]:N(e)),H(fa,e),document.activeElement===fa&&L(fa,E(o()))}}var ea,fa,ga,ha,ia,ja=!1,ka=!1,la=!1,ma=!1,na=!0,oa={on:function(c,d,e){var f=function(c){if(void 0===this.inputmask&&"FORM"!==this.nodeName){var d=a.data(this,"_inputmask_opts");d?new b(d).mask(this):oa.off(this)}else{if("setvalue"===c.type||!(this.disabled||this.readOnly&&!("keydown"===c.type&&c.ctrlKey&&67===c.keyCode||g.tabThrough===!1&&c.keyCode===b.keyCode.TAB))){switch(c.type){case"input":if(la===!0)return la=!1,c.preventDefault();break;case"keydown":ka=!1,la=!1;break;case"keypress":if(ka===!0)return c.preventDefault();ka=!0;break;case"click":if(k){var f=this;return setTimeout(function(){e.apply(f,arguments)},0),!1}}var h=e.apply(this,arguments);return h===!1&&(c.preventDefault(),c.stopPropagation()),h}c.preventDefault()}};c.inputmask.events[d]=c.inputmask.events[d]||[],c.inputmask.events[d].push(f),-1!==a.inArray(d,["submit","reset"])?null!=c.form&&a(c.form).on(d,f):a(c).on(d,f)},off:function(b,c){if(b.inputmask&&b.inputmask.events){var d;c?(d=[],d[c]=b.inputmask.events[c]):d=b.inputmask.events,a.each(d,function(c,d){for(;d.length>0;){var e=d.pop();-1!==a.inArray(c,["submit","reset"])?null!=b.form&&a(b.form).off(c,e):a(b).off(c,e)}delete b.inputmask.events[c]})}}};if(void 0!==e)switch(e.action){case"isComplete":return fa=e.el,O(y());case"unmaskedvalue":return fa=e.el,void 0!==fa&&void 0!==fa.inputmask?(f=fa.inputmask.maskset,g=fa.inputmask.opts,ja=fa.inputmask.isRTL):(ia=e.value,g.numericInput&&(ja=!0),ia=(a.isFunction(g.onBeforeMask)?g.onBeforeMask(ia,g)||ia:ia).split(""),J(void 0,!1,!1,ja?ia.reverse():ia),a.isFunction(g.onBeforeWrite)&&g.onBeforeWrite(void 0,y(),0,g)),K(fa);case"mask":fa=e.el,f=fa.inputmask.maskset,g=fa.inputmask.opts,ja=fa.inputmask.isRTL,ea=y().join(""),da(fa);break;case"format":return g.numericInput&&(ja=!0),ia=(a.isFunction(g.onBeforeMask)?g.onBeforeMask(e.value,g)||e.value:e.value).split(""),J(void 0,!1,!1,ja?ia.reverse():ia),a.isFunction(g.onBeforeWrite)&&g.onBeforeWrite(void 0,y(),0,g),e.metadata?{value:ja?y().slice().reverse().join(""):y().join(""),metadata:h({action:"getmetadata"},f,g)}:ja?y().slice().reverse().join(""):y().join("");case"isValid":g.numericInput&&(ja=!0),e.value?(ia=e.value.split(""),J(void 0,!1,!0,ja?ia.reverse():ia)):e.value=y().join("");for(var pa=y(),qa=M(),ra=pa.length-1;ra>qa&&!D(ra);ra--);return pa.splice(qa,ra+1-qa),O(pa)&&e.value===y().join("");case"getemptymask":return x().join("");case"remove":fa=e.el,ga=a(fa),f=fa.inputmask.maskset,g=fa.inputmask.opts,fa.inputmask._valueSet(K(fa)),oa.off(fa);var sa;Object.getOwnPropertyDescriptor&&Object.getPrototypeOf?(sa=Object.getOwnPropertyDescriptor(Object.getPrototypeOf(fa),"value"),sa&&fa.inputmask.__valueGet&&Object.defineProperty(fa,"value",{get:fa.inputmask.__valueGet,set:fa.inputmask.__valueSet,configurable:!0})):document.__lookupGetter__&&fa.__lookupGetter__("value")&&fa.inputmask.__valueGet&&(fa.__defineGetter__("value",fa.inputmask.__valueGet),fa.__defineSetter__("value",fa.inputmask.__valueSet)),fa.inputmask=void 0;break;case"getmetadata":if(a.isArray(f.metadata)){for(var ta,ua=o(void 0,!0),va=ua;va>=0;va--)if(m().validPositions[va]&&void 0!==m().validPositions[va].alternation){ta=m().validPositions[va].alternation;break}return void 0!==ta?f.metadata[m().validPositions[va].locator[ta]]:[]}return f.metadata}}b.prototype={defaults:{placeholder:"_",optionalmarker:{start:"[",end:"]"},quantifiermarker:{start:"{",end:"}"},groupmarker:{start:"(",end:")"},alternatormarker:"|",escapeChar:"\\",mask:null,oncomplete:a.noop,onincomplete:a.noop,oncleared:a.noop,repeat:0,greedy:!0,autoUnmask:!1,removeMaskOnSubmit:!1,clearMaskOnLostFocus:!0,insertMode:!0,clearIncomplete:!1,aliases:{},alias:null,onKeyDown:a.noop,onBeforeMask:null,onBeforePaste:function(b,c){return a.isFunction(c.onBeforeMask)?c.onBeforeMask(b,c):b},onBeforeWrite:null,onUnMask:null,showMaskOnFocus:!0,showMaskOnHover:!0,onKeyValidation:a.noop,skipOptionalPartCharacter:" ",showTooltip:!1,tooltip:void 0,numericInput:!1,rightAlign:!1,undoOnEscape:!0,radixPoint:"",radixPointDefinitionSymbol:void 0,groupSeparator:"",keepStatic:null,positionCaretOnTab:!1,tabThrough:!1,supportsInputType:["text","tel","password"],definitions:{9:{validator:"[0-9]",cardinality:1,definitionSymbol:"*"},a:{validator:"[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",cardinality:1,definitionSymbol:"*"},"*":{validator:"[0-9A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",cardinality:1}},ignorables:[8,9,13,19,27,33,34,35,36,37,38,39,40,45,46,93,112,113,114,115,116,117,118,119,120,121,122,123],isComplete:null,canClearPosition:a.noop,postValidation:null,staticDefinitionSymbol:void 0,jitMasking:!1,nullable:!0,inputEventOnly:!1,positionCaretOnClick:"lvp"},masksCache:{},mask:function(c){var d=this;return"string"==typeof c&&(c=document.getElementById(c)||document.querySelectorAll(c)),c=c.nodeName?[c]:c,a.each(c,function(c,e){var i=a.extend(!0,{},d.opts);f(e,i,a.extend(!0,{},d.userOptions));var j=g(i,d.noMasksCache);void 0!==j&&(void 0!==e.inputmask&&e.inputmask.remove(),e.inputmask=new b,e.inputmask.opts=i,e.inputmask.noMasksCache=d.noMasksCache,e.inputmask.userOptions=a.extend(!0,{},d.userOptions),e.inputmask.el=e,e.inputmask.maskset=j,e.inputmask.isRTL=!1,a.data(e,"_inputmask_opts",i),h({action:"mask",el:e}))}),c&&c[0]?c[0].inputmask||this:this},option:function(b,c){return"string"==typeof b?this.opts[b]:"object"==typeof b?(a.extend(this.userOptions,b),this.el&&c!==!0&&this.mask(this.el),this):void 0},unmaskedvalue:function(a){return h({action:"unmaskedvalue",el:this.el,value:a},this.el&&this.el.inputmask?this.el.inputmask.maskset:g(this.opts,this.noMasksCache),this.opts)},remove:function(){return this.el?(h({action:"remove",el:this.el}),this.el.inputmask=void 0,this.el):void 0},getemptymask:function(){return h({action:"getemptymask"},this.maskset||g(this.opts,this.noMasksCache),this.opts)},hasMaskedValue:function(){return!this.opts.autoUnmask},isComplete:function(){return h({action:"isComplete",el:this.el},this.maskset||g(this.opts,this.noMasksCache),this.opts)},getmetadata:function(){return h({action:"getmetadata"},this.maskset||g(this.opts,this.noMasksCache),this.opts)},isValid:function(a){return h({action:"isValid",value:a},this.maskset||g(this.opts,this.noMasksCache),this.opts)},format:function(a,b){return h({action:"format",value:a,metadata:b},this.maskset||g(this.opts,this.noMasksCache),this.opts)}},b.extendDefaults=function(c){a.extend(!0,b.prototype.defaults,c)},b.extendDefinitions=function(c){a.extend(!0,b.prototype.defaults.definitions,c)},b.extendAliases=function(c){a.extend(!0,b.prototype.defaults.aliases,c)},b.format=function(a,c,d){return b(c).format(a,d)},b.unmask=function(a,c){return b(c).unmaskedvalue(a)},b.isValid=function(a,c){return b(c).isValid(a)},b.remove=function(b){a.each(b,function(a,b){b.inputmask&&b.inputmask.remove()})},b.escapeRegex=function(a){var b=["/",".","*","+","?","|","(",")","[","]","{","}","\\","$","^"];return a.replace(new RegExp("(\\"+b.join("|\\")+")","gim"),"\\$1")},b.keyCode={ALT:18,BACKSPACE:8,BACKSPACE_SAFARI:127,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91,X:88};var i=navigator.userAgent,j=/mobile/i.test(i),k=/iemobile/i.test(i),l=/iphone/i.test(i)&&!k;return window.Inputmask=b,b}(jQuery),function(a,b){return void 0===a.fn.inputmask&&(a.fn.inputmask=function(c,d){var e,f=this[0];if(void 0===d&&(d={}),"string"==typeof c)switch(c){case"unmaskedvalue":return f&&f.inputmask?f.inputmask.unmaskedvalue():a(f).val();case"remove":return this.each(function(){this.inputmask&&this.inputmask.remove()});case"getemptymask":return f&&f.inputmask?f.inputmask.getemptymask():"";case"hasMaskedValue":return f&&f.inputmask?f.inputmask.hasMaskedValue():!1;case"isComplete":return f&&f.inputmask?f.inputmask.isComplete():!0;case"getmetadata":return f&&f.inputmask?f.inputmask.getmetadata():void 0;case"setvalue":a(f).val(d),f&&void 0===f.inputmask&&a(f).triggerHandler("setvalue");break;case"option":if("string"!=typeof d)return this.each(function(){return void 0!==this.inputmask?this.inputmask.option(d):void 0});if(f&&void 0!==f.inputmask)return f.inputmask.option(d);break;default:return d.alias=c,e=new b(d),this.each(function(){e.mask(this)})}else{if("object"==typeof c)return e=new b(c),void 0===c.mask&&void 0===c.alias?this.each(function(){return void 0!==this.inputmask?this.inputmask.option(c):void e.mask(this)}):this.each(function(){e.mask(this)});if(void 0===c)return this.each(function(){e=new b(d),e.mask(this)})}}),a.fn.inputmask}(jQuery,Inputmask),function(a,b){return b.extendDefinitions({h:{validator:"[01][0-9]|2[0-3]",cardinality:2,prevalidator:[{validator:"[0-2]",cardinality:1}]},s:{validator:"[0-5][0-9]",cardinality:2,prevalidator:[{validator:"[0-5]",cardinality:1}]},d:{validator:"0[1-9]|[12][0-9]|3[01]",cardinality:2,prevalidator:[{validator:"[0-3]",cardinality:1}]},m:{validator:"0[1-9]|1[012]",cardinality:2,prevalidator:[{validator:"[01]",cardinality:1}]},y:{validator:"(19|20)\\d{2}",cardinality:4,prevalidator:[{validator:"[12]",cardinality:1},{validator:"(19|20)",cardinality:2},{validator:"(19|20)\\d",cardinality:3}]}}),b.extendAliases({"dd/mm/yyyy":{mask:"1/2/y",placeholder:"dd/mm/yyyy",regex:{val1pre:new RegExp("[0-3]"),val1:new RegExp("0[1-9]|[12][0-9]|3[01]"),val2pre:function(a){var c=b.escapeRegex.call(this,a);return new RegExp("((0[1-9]|[12][0-9]|3[01])"+c+"[01])")},val2:function(a){var c=b.escapeRegex.call(this,a);return new RegExp("((0[1-9]|[12][0-9])"+c+"(0[1-9]|1[012]))|(30"+c+"(0[13-9]|1[012]))|(31"+c+"(0[13578]|1[02]))")}},leapday:"29/02/",separator:"/",yearrange:{minyear:1900,maxyear:2099},isInYearRange:function(a,b,c){if(isNaN(a))return!1;var d=parseInt(a.concat(b.toString().slice(a.length))),e=parseInt(a.concat(c.toString().slice(a.length)));return(isNaN(d)?!1:d>=b&&c>=d)||(isNaN(e)?!1:e>=b&&c>=e)},determinebaseyear:function(a,b,c){var d=(new Date).getFullYear();if(a>d)return a;if(d>b){for(var e=b.toString().slice(0,2),f=b.toString().slice(2,4);e+c>b;)e--;var g=e+f;return a>g?a:g}if(d>=a&&b>=d){for(var h=d.toString().slice(0,2);h+c>b;)h--;var i=h+c;return a>i?a:i}return d},onKeyDown:function(c,d,e,f){var g=a(this);if(c.ctrlKey&&c.keyCode===b.keyCode.RIGHT){var h=new Date;g.val(h.getDate().toString()+(h.getMonth()+1).toString()+h.getFullYear().toString()),g.trigger("setvalue")}},getFrontValue:function(a,b,c){for(var d=0,e=0,f=0;f<a.length&&"2"!==a.charAt(f);f++){var g=c.definitions[a.charAt(f)];g?(d+=e,e=g.cardinality):e++}return b.join("").substr(d,e)},definitions:{1:{validator:function(a,b,c,d,e){var f=e.regex.val1.test(a);return d||f||a.charAt(1)!==e.separator&&-1==="-./".indexOf(a.charAt(1))||!(f=e.regex.val1.test("0"+a.charAt(0)))?f:(b.buffer[c-1]="0",{refreshFromBuffer:{start:c-1,end:c},pos:c,c:a.charAt(0)})},cardinality:2,prevalidator:[{validator:function(a,b,c,d,e){var f=a;isNaN(b.buffer[c+1])||(f+=b.buffer[c+1]);var g=1===f.length?e.regex.val1pre.test(f):e.regex.val1.test(f);if(!d&&!g){if(g=e.regex.val1.test(a+"0"))return b.buffer[c]=a,b.buffer[++c]="0",{pos:c,c:"0"};if(g=e.regex.val1.test("0"+a))return b.buffer[c]="0",c++,{pos:c}}return g},cardinality:1}]},2:{validator:function(a,b,c,d,e){var f=e.getFrontValue(b.mask,b.buffer,e);-1!==f.indexOf(e.placeholder[0])&&(f="01"+e.separator);var g=e.regex.val2(e.separator).test(f+a);if(!d&&!g&&(a.charAt(1)===e.separator||-1!=="-./".indexOf(a.charAt(1)))&&(g=e.regex.val2(e.separator).test(f+"0"+a.charAt(0))))return b.buffer[c-1]="0",{refreshFromBuffer:{start:c-1,end:c},pos:c,c:a.charAt(0)};if(e.mask.indexOf("2")===e.mask.length-1&&g){var h=b.buffer.join("").substr(4,4)+a;if(h!==e.leapday)return!0;var i=parseInt(b.buffer.join("").substr(0,4),10);return i%4===0?i%100===0?i%400===0?!0:!1:!0:!1}return g},cardinality:2,prevalidator:[{validator:function(a,b,c,d,e){isNaN(b.buffer[c+1])||(a+=b.buffer[c+1]);var f=e.getFrontValue(b.mask,b.buffer,e);-1!==f.indexOf(e.placeholder[0])&&(f="01"+e.separator);var g=1===a.length?e.regex.val2pre(e.separator).test(f+a):e.regex.val2(e.separator).test(f+a);return d||g||!(g=e.regex.val2(e.separator).test(f+"0"+a))?g:(b.buffer[c]="0",c++,{pos:c})},cardinality:1}]},y:{validator:function(a,b,c,d,e){if(e.isInYearRange(a,e.yearrange.minyear,e.yearrange.maxyear)){var f=b.buffer.join("").substr(0,6);if(f!==e.leapday)return!0;var g=parseInt(a,10);return g%4===0?g%100===0?g%400===0?!0:!1:!0:!1}return!1},cardinality:4,prevalidator:[{validator:function(a,b,c,d,e){var f=e.isInYearRange(a,e.yearrange.minyear,e.yearrange.maxyear);if(!d&&!f){var g=e.determinebaseyear(e.yearrange.minyear,e.yearrange.maxyear,a+"0").toString().slice(0,1);if(f=e.isInYearRange(g+a,e.yearrange.minyear,e.yearrange.maxyear))return b.buffer[c++]=g.charAt(0),{pos:c};if(g=e.determinebaseyear(e.yearrange.minyear,e.yearrange.maxyear,a+"0").toString().slice(0,2),f=e.isInYearRange(g+a,e.yearrange.minyear,e.yearrange.maxyear))return b.buffer[c++]=g.charAt(0),b.buffer[c++]=g.charAt(1),{pos:c}}return f},cardinality:1},{validator:function(a,b,c,d,e){var f=e.isInYearRange(a,e.yearrange.minyear,e.yearrange.maxyear);if(!d&&!f){var g=e.determinebaseyear(e.yearrange.minyear,e.yearrange.maxyear,a).toString().slice(0,2);if(f=e.isInYearRange(a[0]+g[1]+a[1],e.yearrange.minyear,e.yearrange.maxyear))return b.buffer[c++]=g.charAt(1),{pos:c};if(g=e.determinebaseyear(e.yearrange.minyear,e.yearrange.maxyear,a).toString().slice(0,2),e.isInYearRange(g+a,e.yearrange.minyear,e.yearrange.maxyear)){var h=b.buffer.join("").substr(0,6);if(h!==e.leapday)f=!0;else{var i=parseInt(a,10);f=i%4===0?i%100===0?i%400===0?!0:!1:!0:!1}}else f=!1;if(f)return b.buffer[c-1]=g.charAt(0),b.buffer[c++]=g.charAt(1),b.buffer[c++]=a.charAt(0),{refreshFromBuffer:{start:c-3,end:c},pos:c}}return f},cardinality:2},{validator:function(a,b,c,d,e){return e.isInYearRange(a,e.yearrange.minyear,e.yearrange.maxyear)},cardinality:3}]}},insertMode:!1,autoUnmask:!1},"mm/dd/yyyy":{placeholder:"mm/dd/yyyy",alias:"dd/mm/yyyy",regex:{val2pre:function(a){var c=b.escapeRegex.call(this,a);return new RegExp("((0[13-9]|1[012])"+c+"[0-3])|(02"+c+"[0-2])")},val2:function(a){var c=b.escapeRegex.call(this,a);return new RegExp("((0[1-9]|1[012])"+c+"(0[1-9]|[12][0-9]))|((0[13-9]|1[012])"+c+"30)|((0[13578]|1[02])"+c+"31)")},val1pre:new RegExp("[01]"),val1:new RegExp("0[1-9]|1[012]")},leapday:"02/29/",onKeyDown:function(c,d,e,f){var g=a(this);if(c.ctrlKey&&c.keyCode===b.keyCode.RIGHT){var h=new Date;g.val((h.getMonth()+1).toString()+h.getDate().toString()+h.getFullYear().toString()),g.trigger("setvalue")}}},"yyyy/mm/dd":{mask:"y/1/2",placeholder:"yyyy/mm/dd",alias:"mm/dd/yyyy",leapday:"/02/29",onKeyDown:function(c,d,e,f){var g=a(this);if(c.ctrlKey&&c.keyCode===b.keyCode.RIGHT){var h=new Date;g.val(h.getFullYear().toString()+(h.getMonth()+1).toString()+h.getDate().toString()),g.trigger("setvalue")}}},"dd.mm.yyyy":{mask:"1.2.y",placeholder:"dd.mm.yyyy",leapday:"29.02.",separator:".",alias:"dd/mm/yyyy"},"dd-mm-yyyy":{mask:"1-2-y",placeholder:"dd-mm-yyyy",leapday:"29-02-",separator:"-",alias:"dd/mm/yyyy"},"mm.dd.yyyy":{mask:"1.2.y",placeholder:"mm.dd.yyyy",leapday:"02.29.",separator:".",alias:"mm/dd/yyyy"},"mm-dd-yyyy":{mask:"1-2-y",placeholder:"mm-dd-yyyy",leapday:"02-29-",separator:"-",alias:"mm/dd/yyyy"},"yyyy.mm.dd":{mask:"y.1.2",placeholder:"yyyy.mm.dd",leapday:".02.29",separator:".",alias:"yyyy/mm/dd"},"yyyy-mm-dd":{mask:"y-1-2",placeholder:"yyyy-mm-dd",leapday:"-02-29",separator:"-",alias:"yyyy/mm/dd"},datetime:{mask:"1/2/y h:s",placeholder:"dd/mm/yyyy hh:mm",alias:"dd/mm/yyyy",regex:{hrspre:new RegExp("[012]"),hrs24:new RegExp("2[0-4]|1[3-9]"),hrs:new RegExp("[01][0-9]|2[0-4]"),ampm:new RegExp("^[a|p|A|P][m|M]"),mspre:new RegExp("[0-5]"),ms:new RegExp("[0-5][0-9]")},timeseparator:":",hourFormat:"24",definitions:{h:{validator:function(a,b,c,d,e){if("24"===e.hourFormat&&24===parseInt(a,10))return b.buffer[c-1]="0",b.buffer[c]="0",{refreshFromBuffer:{start:c-1,end:c},c:"0"};var f=e.regex.hrs.test(a);if(!d&&!f&&(a.charAt(1)===e.timeseparator||-1!=="-.:".indexOf(a.charAt(1)))&&(f=e.regex.hrs.test("0"+a.charAt(0))))return b.buffer[c-1]="0",b.buffer[c]=a.charAt(0),c++,{refreshFromBuffer:{start:c-2,end:c},pos:c,c:e.timeseparator};if(f&&"24"!==e.hourFormat&&e.regex.hrs24.test(a)){var g=parseInt(a,10);return 24===g?(b.buffer[c+5]="a",b.buffer[c+6]="m"):(b.buffer[c+5]="p",b.buffer[c+6]="m"),g-=12,10>g?(b.buffer[c]=g.toString(),b.buffer[c-1]="0"):(b.buffer[c]=g.toString().charAt(1),b.buffer[c-1]=g.toString().charAt(0)),{refreshFromBuffer:{start:c-1,end:c+6},c:b.buffer[c]}}return f},cardinality:2,prevalidator:[{validator:function(a,b,c,d,e){var f=e.regex.hrspre.test(a);return d||f||!(f=e.regex.hrs.test("0"+a))?f:(b.buffer[c]="0",c++,{pos:c})},cardinality:1}]},s:{validator:"[0-5][0-9]",cardinality:2,prevalidator:[{validator:function(a,b,c,d,e){var f=e.regex.mspre.test(a);return d||f||!(f=e.regex.ms.test("0"+a))?f:(b.buffer[c]="0",c++,{pos:c})},cardinality:1}]},t:{validator:function(a,b,c,d,e){return e.regex.ampm.test(a+"m")},casing:"lower",cardinality:1}},insertMode:!1,autoUnmask:!1},datetime12:{mask:"1/2/y h:s t\\m",placeholder:"dd/mm/yyyy hh:mm xm",alias:"datetime",hourFormat:"12"},"mm/dd/yyyy hh:mm xm":{mask:"1/2/y h:s t\\m",placeholder:"mm/dd/yyyy hh:mm xm",alias:"datetime12",regex:{val2pre:function(a){var c=b.escapeRegex.call(this,a);return new RegExp("((0[13-9]|1[012])"+c+"[0-3])|(02"+c+"[0-2])")},val2:function(a){var c=b.escapeRegex.call(this,a);return new RegExp("((0[1-9]|1[012])"+c+"(0[1-9]|[12][0-9]))|((0[13-9]|1[012])"+c+"30)|((0[13578]|1[02])"+c+"31)")},val1pre:new RegExp("[01]"),val1:new RegExp("0[1-9]|1[012]")},leapday:"02/29/",onKeyDown:function(c,d,e,f){var g=a(this);if(c.ctrlKey&&c.keyCode===b.keyCode.RIGHT){var h=new Date;g.val((h.getMonth()+1).toString()+h.getDate().toString()+h.getFullYear().toString()),g.trigger("setvalue")}}},"hh:mm t":{mask:"h:s t\\m",placeholder:"hh:mm xm",alias:"datetime",hourFormat:"12"},"h:s t":{mask:"h:s t\\m",placeholder:"hh:mm xm",alias:"datetime",hourFormat:"12"},"hh:mm:ss":{mask:"h:s:s",placeholder:"hh:mm:ss",alias:"datetime",autoUnmask:!1},"hh:mm":{mask:"h:s",placeholder:"hh:mm",alias:"datetime",autoUnmask:!1},date:{alias:"dd/mm/yyyy"},"mm/yyyy":{mask:"1/y",placeholder:"mm/yyyy",leapday:"donotuse",separator:"/",alias:"mm/dd/yyyy"},shamsi:{regex:{val2pre:function(a){var c=b.escapeRegex.call(this,a);return new RegExp("((0[1-9]|1[012])"+c+"[0-3])")},val2:function(a){var c=b.escapeRegex.call(this,a);return new RegExp("((0[1-9]|1[012])"+c+"(0[1-9]|[12][0-9]))|((0[1-9]|1[012])"+c+"30)|((0[1-6])"+c+"31)")},val1pre:new RegExp("[01]"),val1:new RegExp("0[1-9]|1[012]")},yearrange:{minyear:1300,maxyear:1499},mask:"y/1/2",leapday:"/12/30",placeholder:"yyyy/mm/dd",alias:"mm/dd/yyyy",clearIncomplete:!0}}),b}(jQuery,Inputmask),function(a,b){return b.extendDefinitions({A:{validator:"[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",cardinality:1,casing:"upper"},"&":{validator:"[0-9A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",cardinality:1,casing:"upper"},"#":{validator:"[0-9A-Fa-f]",cardinality:1,casing:"upper"}}),b.extendAliases({url:{definitions:{i:{validator:".",cardinality:1}},mask:"(\\http://)|(\\http\\s://)|(ftp://)|(ftp\\s://)i{+}",insertMode:!1,autoUnmask:!1},ip:{mask:"i[i[i]].i[i[i]].i[i[i]].i[i[i]]",definitions:{i:{validator:function(a,b,c,d,e){return c-1>-1&&"."!==b.buffer[c-1]?(a=b.buffer[c-1]+a,a=c-2>-1&&"."!==b.buffer[c-2]?b.buffer[c-2]+a:"0"+a):a="00"+a,new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]").test(a)},cardinality:1}},onUnMask:function(a,b,c){return a}},email:{mask:"*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]",greedy:!1,onBeforePaste:function(a,b){return a=a.toLowerCase(),a.replace("mailto:","")},definitions:{"*":{validator:"[0-9A-Za-z!#$%&'*+/=?^_`{|}~-]",cardinality:1,casing:"lower"},"-":{validator:"[0-9A-Za-z-]",cardinality:1,casing:"lower"}},onUnMask:function(a,b,c){return a}},mac:{mask:"##:##:##:##:##:##"},vin:{mask:"V{13}9{4}",definitions:{V:{validator:"[A-HJ-NPR-Za-hj-npr-z\\d]",cardinality:1,casing:"upper"}},clearIncomplete:!0,autoUnmask:!0}}),b}(jQuery,Inputmask),function(a,b){return b.extendAliases({numeric:{mask:function(a){function c(b){for(var c="",d=0;d<b.length;d++)c+=a.definitions[b.charAt(d)]||a.optionalmarker.start===b.charAt(d)||a.optionalmarker.end===b.charAt(d)||a.quantifiermarker.start===b.charAt(d)||a.quantifiermarker.end===b.charAt(d)||a.groupmarker.start===b.charAt(d)||a.groupmarker.end===b.charAt(d)||a.alternatormarker===b.charAt(d)?"\\"+b.charAt(d):b.charAt(d);return c}if(0!==a.repeat&&isNaN(a.integerDigits)&&(a.integerDigits=a.repeat),a.repeat=0,a.groupSeparator===a.radixPoint&&("."===a.radixPoint?a.groupSeparator=",":","===a.radixPoint?a.groupSeparator=".":a.groupSeparator="")," "===a.groupSeparator&&(a.skipOptionalPartCharacter=void 0),a.autoGroup=a.autoGroup&&""!==a.groupSeparator,a.autoGroup&&("string"==typeof a.groupSize&&isFinite(a.groupSize)&&(a.groupSize=parseInt(a.groupSize)),isFinite(a.integerDigits))){var d=Math.floor(a.integerDigits/a.groupSize),e=a.integerDigits%a.groupSize;a.integerDigits=parseInt(a.integerDigits)+(0===e?d-1:d),a.integerDigits<1&&(a.integerDigits="*")}a.placeholder.length>1&&(a.placeholder=a.placeholder.charAt(0)),"radixFocus"===a.positionCaretOnClick&&""===a.placeholder&&a.integerOptional===!1&&(a.positionCaretOnClick="lvp"),a.definitions[";"]=a.definitions["~"],a.definitions[";"].definitionSymbol="~",a.numericInput===!0&&(a.positionCaretOnClick="radixFocus"===a.positionCaretOnClick?"lvp":a.positionCaretOnClick,a.digitsOptional=!1,isNaN(a.digits)&&(a.digits=2),a.decimalProtect=!1);var f=c(a.prefix);return f+="[+]",f+=a.integerOptional===!0?"~{1,"+a.integerDigits+"}":"~{"+a.integerDigits+"}",void 0!==a.digits&&(isNaN(a.digits)||parseInt(a.digits)>0)&&(a.decimalProtect&&(a.radixPointDefinitionSymbol=":"),f+=a.digitsOptional?"["+(a.decimalProtect?":":a.radixPoint)+";{1,"+a.digits+"}]":(a.decimalProtect?":":a.radixPoint)+";{"+a.digits+"}"),f+="[-]",f+=c(a.suffix),a.greedy=!1,null!==a.min&&(a.min=a.min.toString().replace(new RegExp(b.escapeRegex(a.groupSeparator),"g"),""),","===a.radixPoint&&(a.min=a.min.replace(a.radixPoint,"."))),null!==a.max&&(a.max=a.max.toString().replace(new RegExp(b.escapeRegex(a.groupSeparator),"g"),""),","===a.radixPoint&&(a.max=a.max.replace(a.radixPoint,"."))),f},placeholder:"",greedy:!1,digits:"*",digitsOptional:!0,radixPoint:".",positionCaretOnClick:"radixFocus",groupSize:3,groupSeparator:"",autoGroup:!1,allowPlus:!0,allowMinus:!0,negationSymbol:{front:"-",back:""},integerDigits:"+",integerOptional:!0,prefix:"",suffix:"",rightAlign:!0,decimalProtect:!0,min:null,max:null,step:1,insertMode:!0,autoUnmask:!1,unmaskAsNumber:!1,postFormat:function(c,d,e){e.numericInput===!0&&(c=c.reverse(),isFinite(d)&&(d=c.join("").length-d-1));var f,g,h=!1;c.length>=e.suffix.length&&c.join("").indexOf(e.suffix)===c.length-e.suffix.length&&(c.length=c.length-e.suffix.length,h=!0),d=d>=c.length?c.length-1:d<e.prefix.length?e.prefix.length:d;var i=!1,j=c[d],k=c.slice();j===e.groupSeparator&&(k.splice(d--,1),j=k[d]),j!==e.radixPoint&&j!==e.negationSymbol.front&&j!==e.negationSymbol.back&&(k[d]="?");var l=k.join(""),m=l;if(l.length>0&&e.autoGroup||-1!==l.indexOf(e.groupSeparator)){var n=b.escapeRegex(e.groupSeparator);i=0===l.indexOf(e.groupSeparator),l=l.replace(new RegExp(n,"g"),"");var o=l.split(e.radixPoint);if(l=""===e.radixPoint?l:o[0],l!==e.prefix+"?0"&&l.length>=e.groupSize+e.prefix.length)for(var p=new RegExp("([-+]?[\\d?]+)([\\d?]{"+e.groupSize+"})");p.test(l)&&""!==e.groupSeparator;)l=l.replace(p,"$1"+e.groupSeparator+"$2"),l=l.replace(e.groupSeparator+e.groupSeparator,e.groupSeparator);""!==e.radixPoint&&o.length>1&&(l+=e.radixPoint+o[1])}for(i=m!==l,c.length=l.length,f=0,g=l.length;g>f;f++)c[f]=l.charAt(f);var q=a.inArray("?",c);if(-1===q&&(q=a.inArray(j,c)),c[q]=j,!i&&h)for(f=0,g=e.suffix.length;g>f;f++)c.push(e.suffix.charAt(f));return q=e.numericInput&&isFinite(d)?c.join("").length-q-1:q,e.numericInput&&(c=c.reverse(),a.inArray(e.radixPoint,c)<q&&c.join("").length-e.suffix.length!==q&&(q-=1)),{pos:q,refreshFromBuffer:i,buffer:c}},onBeforeWrite:function(c,d,e,f){var g;if(c&&("blur"===c.type||"checkval"===c.type||"keydown"===c.type)){var h=f.numericInput?d.slice().reverse().join(""):d.join(""),i=h.replace(f.prefix,"");i=i.replace(f.suffix,""),i=i.replace(new RegExp(b.escapeRegex(f.groupSeparator),"g"),""),","===f.radixPoint&&(i=i.replace(f.radixPoint,"."));var j=i.match(new RegExp("[-"+b.escapeRegex(f.negationSymbol.front)+"]","g"));if(j=null!==j&&1===j.length,i=i.replace(new RegExp("[-"+b.escapeRegex(f.negationSymbol.front)+"]","g"),""),i=i.replace(new RegExp(b.escapeRegex(f.negationSymbol.back)+"$"),""),isNaN(f.placeholder)&&(i=i.replace(new RegExp(b.escapeRegex(f.placeholder),"g"),"")),i=i===f.negationSymbol.front?i+"0":i,""!==i&&isFinite(i)){var k=parseFloat(i),l=j?-1*k:k;if(null!==f.min&&isFinite(f.min)&&l<parseFloat(f.min)?(k=Math.abs(f.min),j=f.min<0,h=void 0):null!==f.max&&isFinite(f.max)&&l>parseFloat(f.max)&&(k=Math.abs(f.max),j=f.max<0,h=void 0),i=k.toString().replace(".",f.radixPoint).split(""),isFinite(f.digits)){var m=a.inArray(f.radixPoint,i),n=a.inArray(f.radixPoint,h);-1===m&&(i.push(f.radixPoint),m=i.length-1);for(var o=1;o<=f.digits;o++)f.digitsOptional||void 0!==i[m+o]&&i[m+o]!==f.placeholder.charAt(0)?-1!==n&&void 0!==h[n+o]&&(i[m+o]=i[m+o]||h[n+o]):i[m+o]="0";i[i.length-1]===f.radixPoint&&delete i[i.length-1]}if(k.toString()!==i&&k.toString()+"."!==i||j)return!j||0===k&&"blur"===c.type||(i.unshift(f.negationSymbol.front),i.push(f.negationSymbol.back)),i=(f.prefix+i.join("")).split(""),f.numericInput&&(i=i.reverse()),g=f.postFormat(i,f.numericInput?e:e-1,f),g.buffer&&(g.refreshFromBuffer=g.buffer.join("")!==d.join("")),g}}return f.autoGroup?(g=f.postFormat(d,f.numericInput?e:e-1,f),g.caret=e<=f.prefix.length?g.pos:g.pos+1,g):void 0},regex:{integerPart:function(a){return new RegExp("["+b.escapeRegex(a.negationSymbol.front)+"+]?\\d+")},integerNPart:function(a){return new RegExp("[\\d"+b.escapeRegex(a.groupSeparator)+b.escapeRegex(a.placeholder.charAt(0))+"]+")}},signHandler:function(a,b,c,d,e){if(!d&&e.allowMinus&&"-"===a||e.allowPlus&&"+"===a){var f=b.buffer.join("").match(e.regex.integerPart(e));if(f&&f[0].length>0)return b.buffer[f.index]===("-"===a?"+":e.negationSymbol.front)?"-"===a?""!==e.negationSymbol.back?{pos:f.index,c:e.negationSymbol.front,remove:f.index,caret:c,insert:{pos:b.buffer.length-e.suffix.length-1,c:e.negationSymbol.back}}:{pos:f.index,c:e.negationSymbol.front,remove:f.index,caret:c}:""!==e.negationSymbol.back?{pos:f.index,c:"+",remove:[f.index,b.buffer.length-e.suffix.length-1],caret:c}:{pos:f.index,c:"+",remove:f.index,caret:c}:b.buffer[f.index]===("-"===a?e.negationSymbol.front:"+")?"-"===a&&""!==e.negationSymbol.back?{remove:[f.index,b.buffer.length-e.suffix.length-1],caret:c-1}:{remove:f.index,caret:c-1}:"-"===a?""!==e.negationSymbol.back?{pos:f.index,c:e.negationSymbol.front,caret:c+1,insert:{pos:b.buffer.length-e.suffix.length,c:e.negationSymbol.back}}:{pos:f.index,c:e.negationSymbol.front,caret:c+1}:{pos:f.index,c:a,caret:c+1}}return!1},radixHandler:function(b,c,d,e,f){if(!e&&f.numericInput!==!0&&b===f.radixPoint&&void 0!==f.digits&&(isNaN(f.digits)||parseInt(f.digits)>0)){var g=a.inArray(f.radixPoint,c.buffer),h=c.buffer.join("").match(f.regex.integerPart(f));if(-1!==g&&c.validPositions[g])return c.validPositions[g-1]?{caret:g+1}:{pos:h.index,c:h[0],caret:g+1};if(!h||"0"===h[0]&&h.index+1!==d)return c.buffer[h?h.index:d]="0",{pos:(h?h.index:d)+1,c:f.radixPoint}}return!1},leadingZeroHandler:function(b,c,d,e,f,g){if(!e)if(f.numericInput===!0){var h=c.buffer.slice("").reverse(),i=h[f.prefix.length];if("0"===i&&void 0===c.validPositions[d-1])return{pos:d,remove:h.length-f.prefix.length-1}}else{var j=a.inArray(f.radixPoint,c.buffer),k=c.buffer.slice(0,-1!==j?j:void 0).join("").match(f.regex.integerNPart(f));if(k&&(-1===j||j>=d)){var l=-1===j?0:parseInt(c.buffer.slice(j+1).join(""));if(0===k[0].indexOf(""!==f.placeholder?f.placeholder.charAt(0):"0")&&(k.index+1===d||g!==!0&&0===l))return c.buffer.splice(k.index,1),{pos:k.index,remove:k.index};if("0"===b&&d<=k.index&&k[0]!==f.groupSeparator)return!1;
}}return!0},definitions:{"~":{validator:function(c,d,e,f,g,h){var i=g.signHandler(c,d,e,f,g);if(!i&&(i=g.radixHandler(c,d,e,f,g),!i&&(i=f?new RegExp("[0-9"+b.escapeRegex(g.groupSeparator)+"]").test(c):new RegExp("[0-9]").test(c),i===!0&&(i=g.leadingZeroHandler(c,d,e,f,g,h),i===!0)))){var j=a.inArray(g.radixPoint,d.buffer);i=-1!==j&&(g.digitsOptional===!1||d.validPositions[e])&&g.numericInput!==!0&&e>j&&!f?{pos:e,remove:e}:{pos:e}}return i},cardinality:1},"+":{validator:function(a,b,c,d,e){var f=e.signHandler(a,b,c,d,e);return!f&&(d&&e.allowMinus&&a===e.negationSymbol.front||e.allowMinus&&"-"===a||e.allowPlus&&"+"===a)&&(f=d||"-"!==a?!0:""!==e.negationSymbol.back?{pos:c,c:"-"===a?e.negationSymbol.front:"+",caret:c+1,insert:{pos:b.buffer.length,c:e.negationSymbol.back}}:{pos:c,c:"-"===a?e.negationSymbol.front:"+",caret:c+1}),f},cardinality:1,placeholder:""},"-":{validator:function(a,b,c,d,e){var f=e.signHandler(a,b,c,d,e);return!f&&d&&e.allowMinus&&a===e.negationSymbol.back&&(f=!0),f},cardinality:1,placeholder:""},":":{validator:function(a,c,d,e,f){var g=f.signHandler(a,c,d,e,f);if(!g){var h="["+b.escapeRegex(f.radixPoint)+"]";g=new RegExp(h).test(a),g&&c.validPositions[d]&&c.validPositions[d].match.placeholder===f.radixPoint&&(g={caret:d+1})}return g?{c:f.radixPoint}:g},cardinality:1,placeholder:function(a){return a.radixPoint}}},onUnMask:function(a,c,d){if(""===c&&d.nullable===!0)return c;var e=a.replace(d.prefix,"");return e=e.replace(d.suffix,""),e=e.replace(new RegExp(b.escapeRegex(d.groupSeparator),"g"),""),d.unmaskAsNumber?(""!==d.radixPoint&&-1!==e.indexOf(d.radixPoint)&&(e=e.replace(b.escapeRegex.call(this,d.radixPoint),".")),Number(e)):e},isComplete:function(a,c){var d=a.join(""),e=a.slice();if(c.postFormat(e,0,c),e.join("")!==d)return!1;var f=d.replace(c.prefix,"");return f=f.replace(c.suffix,""),f=f.replace(new RegExp(b.escapeRegex(c.groupSeparator),"g"),""),","===c.radixPoint&&(f=f.replace(b.escapeRegex(c.radixPoint),".")),isFinite(f)},onBeforeMask:function(a,c){if(""!==c.radixPoint&&isFinite(a))a=a.toString().replace(".",c.radixPoint);else{var d=a.match(/,/g),e=a.match(/\./g);e&&d?e.length>d.length?(a=a.replace(/\./g,""),a=a.replace(",",c.radixPoint)):d.length>e.length?(a=a.replace(/,/g,""),a=a.replace(".",c.radixPoint)):a=a.indexOf(".")<a.indexOf(",")?a.replace(/\./g,""):a=a.replace(/,/g,""):a=a.replace(new RegExp(b.escapeRegex(c.groupSeparator),"g"),"")}if(0===c.digits&&(-1!==a.indexOf(".")?a=a.substring(0,a.indexOf(".")):-1!==a.indexOf(",")&&(a=a.substring(0,a.indexOf(",")))),""!==c.radixPoint&&isFinite(c.digits)&&-1!==a.indexOf(c.radixPoint)){var f=a.split(c.radixPoint),g=f[1].match(new RegExp("\\d*"))[0];if(parseInt(c.digits)<g.toString().length){var h=Math.pow(10,parseInt(c.digits));a=a.replace(b.escapeRegex(c.radixPoint),"."),a=Math.round(parseFloat(a)*h)/h,a=a.toString().replace(".",c.radixPoint)}}return a.toString()},canClearPosition:function(a,b,c,d,e){var f=a.validPositions[b].input,g=f!==e.radixPoint||null!==a.validPositions[b].match.fn&&e.decimalProtect===!1||isFinite(f)||b===c||f===e.groupSeparator||f===e.negationSymbol.front||f===e.negationSymbol.back;return g},onKeyDown:function(c,d,e,f){var g=a(this);if(c.ctrlKey)switch(c.keyCode){case b.keyCode.UP:g.val(parseFloat(this.inputmask.unmaskedvalue())+parseInt(f.step)),g.trigger("setvalue");break;case b.keyCode.DOWN:g.val(parseFloat(this.inputmask.unmaskedvalue())-parseInt(f.step)),g.trigger("setvalue")}}},currency:{prefix:"$ ",groupSeparator:",",alias:"numeric",placeholder:"0",autoGroup:!0,digits:2,digitsOptional:!1,clearMaskOnLostFocus:!1},decimal:{alias:"numeric"},integer:{alias:"numeric",digits:0,radixPoint:""},percentage:{alias:"numeric",digits:2,radixPoint:".",placeholder:"0",autoGroup:!1,min:0,max:100,suffix:" %",allowPlus:!1,allowMinus:!1}}),b}(jQuery,Inputmask),function(a,b){return b.extendAliases({abstractphone:{countrycode:"",phoneCodes:[],mask:function(a){return a.definitions={"#":a.definitions[9]},a.phoneCodes.sort(function(a,b){return(a.mask||a)<(b.mask||b)?-1:1})},keepStatic:!1,onBeforeMask:function(a,b){var c=a.replace(/^0{1,2}/,"").replace(/[\s]/g,"");return(c.indexOf(b.countrycode)>1||-1===c.indexOf(b.countrycode))&&(c="+"+b.countrycode+c),c}}}),b}(jQuery,Inputmask),function(a,b){return b.extendAliases({Regex:{mask:"r",greedy:!1,repeat:"*",regex:null,regexTokens:null,tokenizer:/\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g,quantifierFilter:/[0-9]+[^,]/,isComplete:function(a,b){return new RegExp(b.regex).test(a.join(""))},definitions:{r:{validator:function(b,c,d,e,f){function g(a,b){this.matches=[],this.isGroup=a||!1,this.isQuantifier=b||!1,this.quantifier={min:1,max:1},this.repeaterPart=void 0}function h(){var a,b,c=new g,d=[];for(f.regexTokens=[];a=f.tokenizer.exec(f.regex);)switch(b=a[0],b.charAt(0)){case"(":d.push(new g(!0));break;case")":k=d.pop(),d.length>0?d[d.length-1].matches.push(k):c.matches.push(k);break;case"{":case"+":case"*":var e=new g(!1,!0);b=b.replace(/[{}]/g,"");var h=b.split(","),i=isNaN(h[0])?h[0]:parseInt(h[0]),j=1===h.length?i:isNaN(h[1])?h[1]:parseInt(h[1]);if(e.quantifier={min:i,max:j},d.length>0){var l=d[d.length-1].matches;a=l.pop(),a.isGroup||(k=new g(!0),k.matches.push(a),a=k),l.push(a),l.push(e)}else a=c.matches.pop(),a.isGroup||(k=new g(!0),k.matches.push(a),a=k),c.matches.push(a),c.matches.push(e);break;default:d.length>0?d[d.length-1].matches.push(b):c.matches.push(b)}c.matches.length>0&&f.regexTokens.push(c)}function i(b,c){var d=!1;c&&(m+="(",o++);for(var e=0;e<b.matches.length;e++){var f=b.matches[e];if(f.isGroup===!0)d=i(f,!0);else if(f.isQuantifier===!0){var g=a.inArray(f,b.matches),h=b.matches[g-1],k=m;if(isNaN(f.quantifier.max)){for(;f.repeaterPart&&f.repeaterPart!==m&&f.repeaterPart.length>m.length&&!(d=i(h,!0)););d=d||i(h,!0),d&&(f.repeaterPart=m),m=k+f.quantifier.max}else{for(var l=0,n=f.quantifier.max-1;n>l&&!(d=i(h,!0));l++);m=k+"{"+f.quantifier.min+","+f.quantifier.max+"}"}}else if(void 0!==f.matches)for(var p=0;p<f.length&&!(d=i(f[p],c));p++);else{var q;if("["==f.charAt(0)){q=m,q+=f;for(var r=0;o>r;r++)q+=")";var s=new RegExp("^("+q+")$");d=s.test(j)}else for(var t=0,u=f.length;u>t;t++)if("\\"!==f.charAt(t)){q=m,q+=f.substr(0,t+1),q=q.replace(/\|$/,"");for(var r=0;o>r;r++)q+=")";var s=new RegExp("^("+q+")$");if(d=s.test(j))break}m+=f}if(d)break}return c&&(m+=")",o--),d}var j,k,l=c.buffer.slice(),m="",n=!1,o=0;null===f.regexTokens&&h(),l.splice(d,0,b),j=l.join("");for(var p=0;p<f.regexTokens.length;p++){var q=f.regexTokens[p];if(n=i(q,q.isGroup))break}return n},cardinality:1}}}}),b}(jQuery,Inputmask);

/* jQuery livequery Version: 1.1.1 */
!function(e){e.extend(e.fn,{livequery:function(i,t,u){var n,r=this;return e.isFunction(i)&&(u=t,t=i,i=void 0),e.each(e.livequery.queries,function(e,s){return r.selector!=s.selector||r.context!=s.context||i!=s.type||t&&t.$lqguid!=s.fn.$lqguid||u&&u.$lqguid!=s.fn2.$lqguid?void 0:(n=s)&&!1}),n=n||new e.livequery(this.selector,this.context,i,t,u),n.stopped=!1,n.run(),this},expire:function(i,t,u){var n=this;return e.isFunction(i)&&(u=t,t=i,i=void 0),e.each(e.livequery.queries,function(r,s){n.selector!=s.selector||n.context!=s.context||i&&i!=s.type||t&&t.$lqguid!=s.fn.$lqguid||u&&u.$lqguid!=s.fn2.$lqguid||this.stopped||e.livequery.stop(s.id)}),this}}),e.livequery=function(i,t,u,n,r){return this.selector=i,this.context=t,this.type=u,this.fn=n,this.fn2=r,this.elements=[],this.stopped=!1,this.id=e.livequery.queries.push(this)-1,n.$lqguid=n.$lqguid||e.livequery.guid++,r&&(r.$lqguid=r.$lqguid||e.livequery.guid++),this},e.livequery.prototype={stop:function(){var e=this;this.type?this.elements.unbind(this.type,this.fn):this.fn2&&this.elements.each(function(i,t){e.fn2.apply(t)}),this.elements=[],this.stopped=!0},run:function(){if(!this.stopped){var i=this,t=this.elements,u=e(this.selector,this.context),n=u.not(t);this.elements=u,this.type?(n.bind(this.type,this.fn),t.length>0&&e.each(t,function(t,n){e.inArray(n,u)<0&&e.event.remove(n,i.type,i.fn)})):(n.each(function(){i.fn.apply(this)}),this.fn2&&t.length>0&&e.each(t,function(t,n){e.inArray(n,u)<0&&i.fn2.apply(n)}))}}},e.extend(e.livequery,{guid:0,queries:[],queue:[],running:!1,timeout:null,checkQueue:function(){if(e.livequery.running&&e.livequery.queue.length)for(var i=e.livequery.queue.length;i--;)e.livequery.queries[e.livequery.queue.shift()].run()},pause:function(){e.livequery.running=!1},play:function(){e.livequery.running=!0,e.livequery.run()},registerPlugin:function(){e.each(arguments,function(i,t){if(e.fn[t]){var u=e.fn[t];e.fn[t]=function(){var i=u.apply(this,arguments);return e.livequery.run(),i}}})},run:function(i){void 0!=i?e.inArray(i,e.livequery.queue)<0&&e.livequery.queue.push(i):e.each(e.livequery.queries,function(i){e.inArray(i,e.livequery.queue)<0&&e.livequery.queue.push(i)}),e.livequery.timeout&&clearTimeout(e.livequery.timeout),e.livequery.timeout=setTimeout(e.livequery.checkQueue,20)},stop:function(i){void 0!=i?e.livequery.queries[i].stop():e.each(e.livequery.queries,function(i){e.livequery.queries[i].stop()})}}),e.livequery.registerPlugin("append","prepend","after","before","wrap","attr","removeAttr","addClass","removeClass","toggleClass","empty","remove","html"),e(function(){e.livequery.play()})}(jQuery);

/* == jquery mousewheel plugin == Version: 3.1.13, License: MIT License (MIT) */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a:a(jQuery)}(function(a){function b(b){var g=b||window.event,h=i.call(arguments,1),j=0,l=0,m=0,n=0,o=0,p=0;if(b=a.event.fix(g),b.type="mousewheel","detail"in g&&(m=-1*g.detail),"wheelDelta"in g&&(m=g.wheelDelta),"wheelDeltaY"in g&&(m=g.wheelDeltaY),"wheelDeltaX"in g&&(l=-1*g.wheelDeltaX),"axis"in g&&g.axis===g.HORIZONTAL_AXIS&&(l=-1*m,m=0),j=0===m?l:m,"deltaY"in g&&(m=-1*g.deltaY,j=m),"deltaX"in g&&(l=g.deltaX,0===m&&(j=-1*l)),0!==m||0!==l){if(1===g.deltaMode){var q=a.data(this,"mousewheel-line-height");j*=q,m*=q,l*=q}else if(2===g.deltaMode){var r=a.data(this,"mousewheel-page-height");j*=r,m*=r,l*=r}if(n=Math.max(Math.abs(m),Math.abs(l)),(!f||f>n)&&(f=n,d(g,n)&&(f/=40)),d(g,n)&&(j/=40,l/=40,m/=40),j=Math[j>=1?"floor":"ceil"](j/f),l=Math[l>=1?"floor":"ceil"](l/f),m=Math[m>=1?"floor":"ceil"](m/f),k.settings.normalizeOffset&&this.getBoundingClientRect){var s=this.getBoundingClientRect();o=b.clientX-s.left,p=b.clientY-s.top}return b.deltaX=l,b.deltaY=m,b.deltaFactor=f,b.offsetX=o,b.offsetY=p,b.deltaMode=0,h.unshift(b,j,l,m),e&&clearTimeout(e),e=setTimeout(c,200),(a.event.dispatch||a.event.handle).apply(this,h)}}function c(){f=null}function d(a,b){return k.settings.adjustOldDeltas&&"mousewheel"===a.type&&b%120===0}var e,f,g=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],h="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],i=Array.prototype.slice;if(a.event.fixHooks)for(var j=g.length;j;)a.event.fixHooks[g[--j]]=a.event.mouseHooks;var k=a.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var c=h.length;c;)this.addEventListener(h[--c],b,!1);else this.onmousewheel=b;a.data(this,"mousewheel-line-height",k.getLineHeight(this)),a.data(this,"mousewheel-page-height",k.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var c=h.length;c;)this.removeEventListener(h[--c],b,!1);else this.onmousewheel=null;a.removeData(this,"mousewheel-line-height"),a.removeData(this,"mousewheel-page-height")},getLineHeight:function(b){var c=a(b),d=c["offsetParent"in a.fn?"offsetParent":"parent"]();return d.length||(d=a("body")),parseInt(d.css("fontSize"),10)||parseInt(c.css("fontSize"),10)||16},getPageHeight:function(b){return a(b).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})});!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a:a(jQuery)}(function(a){function b(b){var g=b||window.event,h=i.call(arguments,1),j=0,l=0,m=0,n=0,o=0,p=0;if(b=a.event.fix(g),b.type="mousewheel","detail"in g&&(m=-1*g.detail),"wheelDelta"in g&&(m=g.wheelDelta),"wheelDeltaY"in g&&(m=g.wheelDeltaY),"wheelDeltaX"in g&&(l=-1*g.wheelDeltaX),"axis"in g&&g.axis===g.HORIZONTAL_AXIS&&(l=-1*m,m=0),j=0===m?l:m,"deltaY"in g&&(m=-1*g.deltaY,j=m),"deltaX"in g&&(l=g.deltaX,0===m&&(j=-1*l)),0!==m||0!==l){if(1===g.deltaMode){var q=a.data(this,"mousewheel-line-height");j*=q,m*=q,l*=q}else if(2===g.deltaMode){var r=a.data(this,"mousewheel-page-height");j*=r,m*=r,l*=r}if(n=Math.max(Math.abs(m),Math.abs(l)),(!f||f>n)&&(f=n,d(g,n)&&(f/=40)),d(g,n)&&(j/=40,l/=40,m/=40),j=Math[j>=1?"floor":"ceil"](j/f),l=Math[l>=1?"floor":"ceil"](l/f),m=Math[m>=1?"floor":"ceil"](m/f),k.settings.normalizeOffset&&this.getBoundingClientRect){var s=this.getBoundingClientRect();o=b.clientX-s.left,p=b.clientY-s.top}return b.deltaX=l,b.deltaY=m,b.deltaFactor=f,b.offsetX=o,b.offsetY=p,b.deltaMode=0,h.unshift(b,j,l,m),e&&clearTimeout(e),e=setTimeout(c,200),(a.event.dispatch||a.event.handle).apply(this,h)}}function c(){f=null}function d(a,b){return k.settings.adjustOldDeltas&&"mousewheel"===a.type&&b%120===0}var e,f,g=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],h="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],i=Array.prototype.slice;if(a.event.fixHooks)for(var j=g.length;j;)a.event.fixHooks[g[--j]]=a.event.mouseHooks;var k=a.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var c=h.length;c;)this.addEventListener(h[--c],b,!1);else this.onmousewheel=b;a.data(this,"mousewheel-line-height",k.getLineHeight(this)),a.data(this,"mousewheel-page-height",k.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var c=h.length;c;)this.removeEventListener(h[--c],b,!1);else this.onmousewheel=null;a.removeData(this,"mousewheel-line-height"),a.removeData(this,"mousewheel-page-height")},getLineHeight:function(b){var c=a(b),d=c["offsetParent"in a.fn?"offsetParent":"parent"]();return d.length||(d=a("body")),parseInt(d.css("fontSize"),10)||parseInt(c.css("fontSize"),10)||16},getPageHeight:function(b){return a(b).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})});
/* == malihu jquery custom scrollbar plugin == Version: 3.1.4, License: MIT License (MIT) */
!function(e){"undefined"!=typeof module&&module.exports?module.exports=e:e(jQuery,window,document)}(function(e){!function(t){var o="function"==typeof define&&define.amd,a="undefined"!=typeof module&&module.exports,n="https:"==document.location.protocol?"https:":"http:",i="cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js";o||(a?require("jquery-mousewheel")(e):e.event.special.mousewheel||e("head").append(decodeURI("%3Cscript src="+n+"//"+i+"%3E%3C/script%3E"))),t()}(function(){var t,o="mCustomScrollbar",a="mCS",n=".mCustomScrollbar",i={setTop:0,setLeft:0,axis:"y",scrollbarPosition:"inside",scrollInertia:950,autoDraggerLength:!0,alwaysShowScrollbar:0,snapOffset:0,mouseWheel:{enable:!0,scrollAmount:"auto",axis:"y",deltaFactor:"auto",disableOver:["select","option","keygen","datalist","textarea"]},scrollButtons:{scrollType:"stepless",scrollAmount:"auto"},keyboard:{enable:!0,scrollType:"stepless",scrollAmount:"auto"},contentTouchScroll:25,documentTouchScroll:!0,advanced:{autoScrollOnFocus:"input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",updateOnContentResize:!0,updateOnImageLoad:"auto",autoUpdateTimeout:60},theme:"light",callbacks:{onTotalScrollOffset:0,onTotalScrollBackOffset:0,alwaysTriggerOffsets:!0}},r=0,l={},s=window.attachEvent&&!window.addEventListener?1:0,c=!1,d=["mCSB_dragger_onDrag","mCSB_scrollTools_onDrag","mCS_img_loaded","mCS_disabled","mCS_destroyed","mCS_no_scrollbar","mCS-autoHide","mCS-dir-rtl","mCS_no_scrollbar_y","mCS_no_scrollbar_x","mCS_y_hidden","mCS_x_hidden","mCSB_draggerContainer","mCSB_buttonUp","mCSB_buttonDown","mCSB_buttonLeft","mCSB_buttonRight"],u={init:function(t){var t=e.extend(!0,{},i,t),o=f.call(this);if(t.live){var s=t.liveSelector||this.selector||n,c=e(s);if("off"===t.live)return void m(s);l[s]=setTimeout(function(){c.mCustomScrollbar(t),"once"===t.live&&c.length&&m(s)},500)}else m(s);return t.setWidth=t.set_width?t.set_width:t.setWidth,t.setHeight=t.set_height?t.set_height:t.setHeight,t.axis=t.horizontalScroll?"x":p(t.axis),t.scrollInertia=t.scrollInertia>0&&t.scrollInertia<17?17:t.scrollInertia,"object"!=typeof t.mouseWheel&&1==t.mouseWheel&&(t.mouseWheel={enable:!0,scrollAmount:"auto",axis:"y",preventDefault:!1,deltaFactor:"auto",normalizeDelta:!1,invert:!1}),t.mouseWheel.scrollAmount=t.mouseWheelPixels?t.mouseWheelPixels:t.mouseWheel.scrollAmount,t.mouseWheel.normalizeDelta=t.advanced.normalizeMouseWheelDelta?t.advanced.normalizeMouseWheelDelta:t.mouseWheel.normalizeDelta,t.scrollButtons.scrollType=g(t.scrollButtons.scrollType),h(t),e(o).each(function(){var o=e(this);if(!o.data(a)){o.data(a,{idx:++r,opt:t,scrollRatio:{y:null,x:null},overflowed:null,contentReset:{y:null,x:null},bindEvents:!1,tweenRunning:!1,sequential:{},langDir:o.css("direction"),cbOffsets:null,trigger:null,poll:{size:{o:0,n:0},img:{o:0,n:0},change:{o:0,n:0}}});var n=o.data(a),i=n.opt,l=o.data("mcs-axis"),s=o.data("mcs-scrollbar-position"),c=o.data("mcs-theme");l&&(i.axis=l),s&&(i.scrollbarPosition=s),c&&(i.theme=c,h(i)),v.call(this),n&&i.callbacks.onCreate&&"function"==typeof i.callbacks.onCreate&&i.callbacks.onCreate.call(this),e("#mCSB_"+n.idx+"_container img:not(."+d[2]+")").addClass(d[2]),u.update.call(null,o)}})},update:function(t,o){var n=t||f.call(this);return e(n).each(function(){var t=e(this);if(t.data(a)){var n=t.data(a),i=n.opt,r=e("#mCSB_"+n.idx+"_container"),l=e("#mCSB_"+n.idx),s=[e("#mCSB_"+n.idx+"_dragger_vertical"),e("#mCSB_"+n.idx+"_dragger_horizontal")];if(!r.length)return;n.tweenRunning&&V(t),o&&n&&i.callbacks.onBeforeUpdate&&"function"==typeof i.callbacks.onBeforeUpdate&&i.callbacks.onBeforeUpdate.call(this),t.hasClass(d[3])&&t.removeClass(d[3]),t.hasClass(d[4])&&t.removeClass(d[4]),l.css("max-height","none"),l.height()!==t.height()&&l.css("max-height",t.height()),_.call(this),"y"===i.axis||i.advanced.autoExpandHorizontalScroll||r.css("width",x(r)),n.overflowed=y.call(this),M.call(this),i.autoDraggerLength&&S.call(this),b.call(this),T.call(this);var c=[Math.abs(r[0].offsetTop),Math.abs(r[0].offsetLeft)];"x"!==i.axis&&(n.overflowed[0]?s[0].height()>s[0].parent().height()?B.call(this):(Q(t,c[0].toString(),{dir:"y",dur:0,overwrite:"none"}),n.contentReset.y=null):(B.call(this),"y"===i.axis?k.call(this):"yx"===i.axis&&n.overflowed[1]&&Q(t,c[1].toString(),{dir:"x",dur:0,overwrite:"none"}))),"y"!==i.axis&&(n.overflowed[1]?s[1].width()>s[1].parent().width()?B.call(this):(Q(t,c[1].toString(),{dir:"x",dur:0,overwrite:"none"}),n.contentReset.x=null):(B.call(this),"x"===i.axis?k.call(this):"yx"===i.axis&&n.overflowed[0]&&Q(t,c[0].toString(),{dir:"y",dur:0,overwrite:"none"}))),o&&n&&(2===o&&i.callbacks.onImageLoad&&"function"==typeof i.callbacks.onImageLoad?i.callbacks.onImageLoad.call(this):3===o&&i.callbacks.onSelectorChange&&"function"==typeof i.callbacks.onSelectorChange?i.callbacks.onSelectorChange.call(this):i.callbacks.onUpdate&&"function"==typeof i.callbacks.onUpdate&&i.callbacks.onUpdate.call(this)),X.call(this)}})},scrollTo:function(t,o){if("undefined"!=typeof t&&null!=t){var n=f.call(this);return e(n).each(function(){var n=e(this);if(n.data(a)){var i=n.data(a),r=i.opt,l={trigger:"external",scrollInertia:r.scrollInertia,scrollEasing:"mcsEaseInOut",moveDragger:!1,timeout:60,callbacks:!0,onStart:!0,onUpdate:!0,onComplete:!0},s=e.extend(!0,{},l,o),c=Y.call(this,t),d=s.scrollInertia>0&&s.scrollInertia<17?17:s.scrollInertia;c[0]=j.call(this,c[0],"y"),c[1]=j.call(this,c[1],"x"),s.moveDragger&&(c[0]*=i.scrollRatio.y,c[1]*=i.scrollRatio.x),s.dur=ae()?0:d,setTimeout(function(){null!==c[0]&&"undefined"!=typeof c[0]&&"x"!==r.axis&&i.overflowed[0]&&(s.dir="y",s.overwrite="all",Q(n,c[0].toString(),s)),null!==c[1]&&"undefined"!=typeof c[1]&&"y"!==r.axis&&i.overflowed[1]&&(s.dir="x",s.overwrite="none",Q(n,c[1].toString(),s))},s.timeout)}})}},stop:function(){var t=f.call(this);return e(t).each(function(){var t=e(this);t.data(a)&&V(t)})},disable:function(t){var o=f.call(this);return e(o).each(function(){var o=e(this);if(o.data(a)){o.data(a);X.call(this,"remove"),k.call(this),t&&B.call(this),M.call(this,!0),o.addClass(d[3])}})},destroy:function(){var t=f.call(this);return e(t).each(function(){var n=e(this);if(n.data(a)){var i=n.data(a),r=i.opt,l=e("#mCSB_"+i.idx),s=e("#mCSB_"+i.idx+"_container"),c=e(".mCSB_"+i.idx+"_scrollbar");r.live&&m(r.liveSelector||e(t).selector),X.call(this,"remove"),k.call(this),B.call(this),n.removeData(a),Z(this,"mcs"),c.remove(),s.find("img."+d[2]).removeClass(d[2]),l.replaceWith(s.contents()),n.removeClass(o+" _"+a+"_"+i.idx+" "+d[6]+" "+d[7]+" "+d[5]+" "+d[3]).addClass(d[4])}})}},f=function(){return"object"!=typeof e(this)||e(this).length<1?n:this},h=function(t){var o=["rounded","rounded-dark","rounded-dots","rounded-dots-dark"],a=["rounded-dots","rounded-dots-dark","3d","3d-dark","3d-thick","3d-thick-dark","inset","inset-dark","inset-2","inset-2-dark","inset-3","inset-3-dark"],n=["minimal","minimal-dark"],i=["minimal","minimal-dark"],r=["minimal","minimal-dark"];t.autoDraggerLength=e.inArray(t.theme,o)>-1?!1:t.autoDraggerLength,t.autoExpandScrollbar=e.inArray(t.theme,a)>-1?!1:t.autoExpandScrollbar,t.scrollButtons.enable=e.inArray(t.theme,n)>-1?!1:t.scrollButtons.enable,t.autoHideScrollbar=e.inArray(t.theme,i)>-1?!0:t.autoHideScrollbar,t.scrollbarPosition=e.inArray(t.theme,r)>-1?"outside":t.scrollbarPosition},m=function(e){l[e]&&(clearTimeout(l[e]),Z(l,e))},p=function(e){return"yx"===e||"xy"===e||"auto"===e?"yx":"x"===e||"horizontal"===e?"x":"y"},g=function(e){return"stepped"===e||"pixels"===e||"step"===e||"click"===e?"stepped":"stepless"},v=function(){var t=e(this),n=t.data(a),i=n.opt,r=i.autoExpandScrollbar?" "+d[1]+"_expand":"",l=["<div id='mCSB_"+n.idx+"_scrollbar_vertical' class='mCSB_scrollTools mCSB_"+n.idx+"_scrollbar mCS-"+i.theme+" mCSB_scrollTools_vertical"+r+"'><div class='"+d[12]+"'><div id='mCSB_"+n.idx+"_dragger_vertical' class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>","<div id='mCSB_"+n.idx+"_scrollbar_horizontal' class='mCSB_scrollTools mCSB_"+n.idx+"_scrollbar mCS-"+i.theme+" mCSB_scrollTools_horizontal"+r+"'><div class='"+d[12]+"'><div id='mCSB_"+n.idx+"_dragger_horizontal' class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"],s="yx"===i.axis?"mCSB_vertical_horizontal":"x"===i.axis?"mCSB_horizontal":"mCSB_vertical",c="yx"===i.axis?l[0]+l[1]:"x"===i.axis?l[1]:l[0],u="yx"===i.axis?"<div id='mCSB_"+n.idx+"_container_wrapper' class='mCSB_container_wrapper' />":"",f=i.autoHideScrollbar?" "+d[6]:"",h="x"!==i.axis&&"rtl"===n.langDir?" "+d[7]:"";i.setWidth&&t.css("width",i.setWidth),i.setHeight&&t.css("height",i.setHeight),i.setLeft="y"!==i.axis&&"rtl"===n.langDir?"989999px":i.setLeft,t.addClass(o+" _"+a+"_"+n.idx+f+h).wrapInner("<div id='mCSB_"+n.idx+"' class='mCustomScrollBox mCS-"+i.theme+" "+s+"'><div id='mCSB_"+n.idx+"_container' class='mCSB_container' style='position:relative; top:"+i.setTop+"; left:"+i.setLeft+";' dir='"+n.langDir+"' /></div>");var m=e("#mCSB_"+n.idx),p=e("#mCSB_"+n.idx+"_container");"y"===i.axis||i.advanced.autoExpandHorizontalScroll||p.css("width",x(p)),"outside"===i.scrollbarPosition?("static"===t.css("position")&&t.css("position","relative"),t.css("overflow","visible"),m.addClass("mCSB_outside").after(c)):(m.addClass("mCSB_inside").append(c),p.wrap(u)),w.call(this);var g=[e("#mCSB_"+n.idx+"_dragger_vertical"),e("#mCSB_"+n.idx+"_dragger_horizontal")];g[0].css("min-height",g[0].height()),g[1].css("min-width",g[1].width())},x=function(t){var o=[t[0].scrollWidth,Math.max.apply(Math,t.children().map(function(){return e(this).outerWidth(!0)}).get())],a=t.parent().width();return o[0]>a?o[0]:o[1]>a?o[1]:"100%"},_=function(){var t=e(this),o=t.data(a),n=o.opt,i=e("#mCSB_"+o.idx+"_container");if(n.advanced.autoExpandHorizontalScroll&&"y"!==n.axis){i.css({width:"auto","min-width":0,"overflow-x":"scroll"});var r=Math.ceil(i[0].scrollWidth);3===n.advanced.autoExpandHorizontalScroll||2!==n.advanced.autoExpandHorizontalScroll&&r>i.parent().width()?i.css({width:r,"min-width":"100%","overflow-x":"inherit"}):i.css({"overflow-x":"inherit",position:"absolute"}).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({width:Math.ceil(i[0].getBoundingClientRect().right+.4)-Math.floor(i[0].getBoundingClientRect().left),"min-width":"100%",position:"relative"}).unwrap()}},w=function(){var t=e(this),o=t.data(a),n=o.opt,i=e(".mCSB_"+o.idx+"_scrollbar:first"),r=te(n.scrollButtons.tabindex)?"tabindex='"+n.scrollButtons.tabindex+"'":"",l=["<a href='#' class='"+d[13]+"' oncontextmenu='return false;' "+r+" />","<a href='#' class='"+d[14]+"' oncontextmenu='return false;' "+r+" />","<a href='#' class='"+d[15]+"' oncontextmenu='return false;' "+r+" />","<a href='#' class='"+d[16]+"' oncontextmenu='return false;' "+r+" />"],s=["x"===n.axis?l[2]:l[0],"x"===n.axis?l[3]:l[1],l[2],l[3]];n.scrollButtons.enable&&i.prepend(s[0]).append(s[1]).next(".mCSB_scrollTools").prepend(s[2]).append(s[3])},S=function(){var t=e(this),o=t.data(a),n=e("#mCSB_"+o.idx),i=e("#mCSB_"+o.idx+"_container"),r=[e("#mCSB_"+o.idx+"_dragger_vertical"),e("#mCSB_"+o.idx+"_dragger_horizontal")],l=[n.height()/i.outerHeight(!1),n.width()/i.outerWidth(!1)],c=[parseInt(r[0].css("min-height")),Math.round(l[0]*r[0].parent().height()),parseInt(r[1].css("min-width")),Math.round(l[1]*r[1].parent().width())],d=s&&c[1]<c[0]?c[0]:c[1],u=s&&c[3]<c[2]?c[2]:c[3];r[0].css({height:d,"max-height":r[0].parent().height()-10}).find(".mCSB_dragger_bar").css({"line-height":c[0]+"px"}),r[1].css({width:u,"max-width":r[1].parent().width()-10})},b=function(){var t=e(this),o=t.data(a),n=e("#mCSB_"+o.idx),i=e("#mCSB_"+o.idx+"_container"),r=[e("#mCSB_"+o.idx+"_dragger_vertical"),e("#mCSB_"+o.idx+"_dragger_horizontal")],l=[i.outerHeight(!1)-n.height(),i.outerWidth(!1)-n.width()],s=[l[0]/(r[0].parent().height()-r[0].height()),l[1]/(r[1].parent().width()-r[1].width())];o.scrollRatio={y:s[0],x:s[1]}},C=function(e,t,o){var a=o?d[0]+"_expanded":"",n=e.closest(".mCSB_scrollTools");"active"===t?(e.toggleClass(d[0]+" "+a),n.toggleClass(d[1]),e[0]._draggable=e[0]._draggable?0:1):e[0]._draggable||("hide"===t?(e.removeClass(d[0]),n.removeClass(d[1])):(e.addClass(d[0]),n.addClass(d[1])))},y=function(){var t=e(this),o=t.data(a),n=e("#mCSB_"+o.idx),i=e("#mCSB_"+o.idx+"_container"),r=null==o.overflowed?i.height():i.outerHeight(!1),l=null==o.overflowed?i.width():i.outerWidth(!1),s=i[0].scrollHeight,c=i[0].scrollWidth;return s>r&&(r=s),c>l&&(l=c),[r>n.height(),l>n.width()]},B=function(){var t=e(this),o=t.data(a),n=o.opt,i=e("#mCSB_"+o.idx),r=e("#mCSB_"+o.idx+"_container"),l=[e("#mCSB_"+o.idx+"_dragger_vertical"),e("#mCSB_"+o.idx+"_dragger_horizontal")];if(V(t),("x"!==n.axis&&!o.overflowed[0]||"y"===n.axis&&o.overflowed[0])&&(l[0].add(r).css("top",0),Q(t,"_resetY")),"y"!==n.axis&&!o.overflowed[1]||"x"===n.axis&&o.overflowed[1]){var s=dx=0;"rtl"===o.langDir&&(s=i.width()-r.outerWidth(!1),dx=Math.abs(s/o.scrollRatio.x)),r.css("left",s),l[1].css("left",dx),Q(t,"_resetX")}},T=function(){function t(){r=setTimeout(function(){e.event.special.mousewheel?(clearTimeout(r),W.call(o[0])):t()},100)}var o=e(this),n=o.data(a),i=n.opt;if(!n.bindEvents){if(I.call(this),i.contentTouchScroll&&D.call(this),E.call(this),i.mouseWheel.enable){var r;t()}z.call(this),H.call(this),i.advanced.autoScrollOnFocus&&P.call(this),i.scrollButtons.enable&&U.call(this),i.keyboard.enable&&F.call(this),n.bindEvents=!0}},k=function(){var t=e(this),o=t.data(a),n=o.opt,i=a+"_"+o.idx,r=".mCSB_"+o.idx+"_scrollbar",l=e("#mCSB_"+o.idx+",#mCSB_"+o.idx+"_container,#mCSB_"+o.idx+"_container_wrapper,"+r+" ."+d[12]+",#mCSB_"+o.idx+"_dragger_vertical,#mCSB_"+o.idx+"_dragger_horizontal,"+r+">a"),s=e("#mCSB_"+o.idx+"_container");n.advanced.releaseDraggableSelectors&&l.add(e(n.advanced.releaseDraggableSelectors)),n.advanced.extraDraggableSelectors&&l.add(e(n.advanced.extraDraggableSelectors)),o.bindEvents&&(e(document).add(e(!A()||top.document)).unbind("."+i),l.each(function(){e(this).unbind("."+i)}),clearTimeout(t[0]._focusTimeout),Z(t[0],"_focusTimeout"),clearTimeout(o.sequential.step),Z(o.sequential,"step"),clearTimeout(s[0].onCompleteTimeout),Z(s[0],"onCompleteTimeout"),o.bindEvents=!1)},M=function(t){var o=e(this),n=o.data(a),i=n.opt,r=e("#mCSB_"+n.idx+"_container_wrapper"),l=r.length?r:e("#mCSB_"+n.idx+"_container"),s=[e("#mCSB_"+n.idx+"_scrollbar_vertical"),e("#mCSB_"+n.idx+"_scrollbar_horizontal")],c=[s[0].find(".mCSB_dragger"),s[1].find(".mCSB_dragger")];"x"!==i.axis&&(n.overflowed[0]&&!t?(s[0].add(c[0]).add(s[0].children("a")).css("display","block"),l.removeClass(d[8]+" "+d[10])):(i.alwaysShowScrollbar?(2!==i.alwaysShowScrollbar&&c[0].css("display","none"),l.removeClass(d[10])):(s[0].css("display","none"),l.addClass(d[10])),l.addClass(d[8]))),"y"!==i.axis&&(n.overflowed[1]&&!t?(s[1].add(c[1]).add(s[1].children("a")).css("display","block"),l.removeClass(d[9]+" "+d[11])):(i.alwaysShowScrollbar?(2!==i.alwaysShowScrollbar&&c[1].css("display","none"),l.removeClass(d[11])):(s[1].css("display","none"),l.addClass(d[11])),l.addClass(d[9]))),n.overflowed[0]||n.overflowed[1]?o.removeClass(d[5]):o.addClass(d[5])},O=function(t){var o=t.type,a=t.target.ownerDocument!==document&&null!==frameElement?[e(frameElement).offset().top,e(frameElement).offset().left]:null,n=A()&&t.target.ownerDocument!==top.document&&null!==frameElement?[e(t.view.frameElement).offset().top,e(t.view.frameElement).offset().left]:[0,0];switch(o){case"pointerdown":case"MSPointerDown":case"pointermove":case"MSPointerMove":case"pointerup":case"MSPointerUp":return a?[t.originalEvent.pageY-a[0]+n[0],t.originalEvent.pageX-a[1]+n[1],!1]:[t.originalEvent.pageY,t.originalEvent.pageX,!1];case"touchstart":case"touchmove":case"touchend":var i=t.originalEvent.touches[0]||t.originalEvent.changedTouches[0],r=t.originalEvent.touches.length||t.originalEvent.changedTouches.length;return t.target.ownerDocument!==document?[i.screenY,i.screenX,r>1]:[i.pageY,i.pageX,r>1];default:return a?[t.pageY-a[0]+n[0],t.pageX-a[1]+n[1],!1]:[t.pageY,t.pageX,!1]}},I=function(){function t(e){var t=m.find("iframe");if(t.length){var o=e?"auto":"none";t.css("pointer-events",o)}}function o(e,t,o,a){if(m[0].idleTimer=u.scrollInertia<233?250:0,n.attr("id")===h[1])var i="x",r=(n[0].offsetLeft-t+a)*d.scrollRatio.x;else var i="y",r=(n[0].offsetTop-e+o)*d.scrollRatio.y;Q(l,r.toString(),{dir:i,drag:!0})}var n,i,r,l=e(this),d=l.data(a),u=d.opt,f=a+"_"+d.idx,h=["mCSB_"+d.idx+"_dragger_vertical","mCSB_"+d.idx+"_dragger_horizontal"],m=e("#mCSB_"+d.idx+"_container"),p=e("#"+h[0]+",#"+h[1]),g=u.advanced.releaseDraggableSelectors?p.add(e(u.advanced.releaseDraggableSelectors)):p,v=u.advanced.extraDraggableSelectors?e(!A()||top.document).add(e(u.advanced.extraDraggableSelectors)):e(!A()||top.document);p.bind("mousedown."+f+" touchstart."+f+" pointerdown."+f+" MSPointerDown."+f,function(o){if(o.stopImmediatePropagation(),o.preventDefault(),$(o)){c=!0,s&&(document.onselectstart=function(){return!1}),t(!1),V(l),n=e(this);var a=n.offset(),d=O(o)[0]-a.top,f=O(o)[1]-a.left,h=n.height()+a.top,m=n.width()+a.left;h>d&&d>0&&m>f&&f>0&&(i=d,r=f),C(n,"active",u.autoExpandScrollbar)}}).bind("touchmove."+f,function(e){e.stopImmediatePropagation(),e.preventDefault();var t=n.offset(),a=O(e)[0]-t.top,l=O(e)[1]-t.left;o(i,r,a,l)}),e(document).add(v).bind("mousemove."+f+" pointermove."+f+" MSPointerMove."+f,function(e){if(n){var t=n.offset(),a=O(e)[0]-t.top,l=O(e)[1]-t.left;if(i===a&&r===l)return;o(i,r,a,l)}}).add(g).bind("mouseup."+f+" touchend."+f+" pointerup."+f+" MSPointerUp."+f,function(){n&&(C(n,"active",u.autoExpandScrollbar),n=null),c=!1,s&&(document.onselectstart=null),t(!0)})},D=function(){function o(e){if(!ee(e)||c||O(e)[2])return void(t=0);t=1,b=0,C=0,d=1,y.removeClass("mCS_touch_action");var o=I.offset();u=O(e)[0]-o.top,f=O(e)[1]-o.left,z=[O(e)[0],O(e)[1]]}function n(e){if(ee(e)&&!c&&!O(e)[2]&&(T.documentTouchScroll||e.preventDefault(),e.stopImmediatePropagation(),(!C||b)&&d)){g=J();var t=M.offset(),o=O(e)[0]-t.top,a=O(e)[1]-t.left,n="mcsLinearOut";if(E.push(o),W.push(a),z[2]=Math.abs(O(e)[0]-z[0]),z[3]=Math.abs(O(e)[1]-z[1]),B.overflowed[0])var i=D[0].parent().height()-D[0].height(),r=u-o>0&&o-u>-(i*B.scrollRatio.y)&&(2*z[3]<z[2]||"yx"===T.axis);if(B.overflowed[1])var l=D[1].parent().width()-D[1].width(),h=f-a>0&&a-f>-(l*B.scrollRatio.x)&&(2*z[2]<z[3]||"yx"===T.axis);r||h?(U||e.preventDefault(),b=1):(C=1,y.addClass("mCS_touch_action")),U&&e.preventDefault(),w="yx"===T.axis?[u-o,f-a]:"x"===T.axis?[null,f-a]:[u-o,null],I[0].idleTimer=250,B.overflowed[0]&&s(w[0],R,n,"y","all",!0),B.overflowed[1]&&s(w[1],R,n,"x",L,!0)}}function i(e){if(!ee(e)||c||O(e)[2])return void(t=0);t=1,e.stopImmediatePropagation(),V(y),p=J();var o=M.offset();h=O(e)[0]-o.top,m=O(e)[1]-o.left,E=[],W=[]}function r(e){if(ee(e)&&!c&&!O(e)[2]){d=0,e.stopImmediatePropagation(),b=0,C=0,v=J();var t=M.offset(),o=O(e)[0]-t.top,a=O(e)[1]-t.left;if(!(v-g>30)){_=1e3/(v-p);var n="mcsEaseOut",i=2.5>_,r=i?[E[E.length-2],W[W.length-2]]:[0,0];x=i?[o-r[0],a-r[1]]:[o-h,a-m];var u=[Math.abs(x[0]),Math.abs(x[1])];_=i?[Math.abs(x[0]/4),Math.abs(x[1]/4)]:[_,_];var f=[Math.abs(I[0].offsetTop)-x[0]*l(u[0]/_[0],_[0]),Math.abs(I[0].offsetLeft)-x[1]*l(u[1]/_[1],_[1])];w="yx"===T.axis?[f[0],f[1]]:"x"===T.axis?[null,f[1]]:[f[0],null],S=[4*u[0]+T.scrollInertia,4*u[1]+T.scrollInertia];var y=parseInt(T.contentTouchScroll)||0;w[0]=u[0]>y?w[0]:0,w[1]=u[1]>y?w[1]:0,B.overflowed[0]&&s(w[0],S[0],n,"y",L,!1),B.overflowed[1]&&s(w[1],S[1],n,"x",L,!1)}}}function l(e,t){var o=[1.5*t,2*t,t/1.5,t/2];return e>90?t>4?o[0]:o[3]:e>60?t>3?o[3]:o[2]:e>30?t>8?o[1]:t>6?o[0]:t>4?t:o[2]:t>8?t:o[3]}function s(e,t,o,a,n,i){e&&Q(y,e.toString(),{dur:t,scrollEasing:o,dir:a,overwrite:n,drag:i})}var d,u,f,h,m,p,g,v,x,_,w,S,b,C,y=e(this),B=y.data(a),T=B.opt,k=a+"_"+B.idx,M=e("#mCSB_"+B.idx),I=e("#mCSB_"+B.idx+"_container"),D=[e("#mCSB_"+B.idx+"_dragger_vertical"),e("#mCSB_"+B.idx+"_dragger_horizontal")],E=[],W=[],R=0,L="yx"===T.axis?"none":"all",z=[],P=I.find("iframe"),H=["touchstart."+k+" pointerdown."+k+" MSPointerDown."+k,"touchmove."+k+" pointermove."+k+" MSPointerMove."+k,"touchend."+k+" pointerup."+k+" MSPointerUp."+k],U=void 0!==document.body.style.touchAction;I.bind(H[0],function(e){o(e)}).bind(H[1],function(e){n(e)}),M.bind(H[0],function(e){i(e)}).bind(H[2],function(e){r(e)}),P.length&&P.each(function(){e(this).bind("load",function(){A(this)&&e(this.contentDocument||this.contentWindow.document).bind(H[0],function(e){o(e),i(e)}).bind(H[1],function(e){n(e)}).bind(H[2],function(e){r(e)})})})},E=function(){function o(){return window.getSelection?window.getSelection().toString():document.selection&&"Control"!=document.selection.type?document.selection.createRange().text:0}function n(e,t,o){d.type=o&&i?"stepped":"stepless",d.scrollAmount=10,q(r,e,t,"mcsLinearOut",o?60:null)}var i,r=e(this),l=r.data(a),s=l.opt,d=l.sequential,u=a+"_"+l.idx,f=e("#mCSB_"+l.idx+"_container"),h=f.parent();f.bind("mousedown."+u,function(){t||i||(i=1,c=!0)}).add(document).bind("mousemove."+u,function(e){if(!t&&i&&o()){var a=f.offset(),r=O(e)[0]-a.top+f[0].offsetTop,c=O(e)[1]-a.left+f[0].offsetLeft;r>0&&r<h.height()&&c>0&&c<h.width()?d.step&&n("off",null,"stepped"):("x"!==s.axis&&l.overflowed[0]&&(0>r?n("on",38):r>h.height()&&n("on",40)),"y"!==s.axis&&l.overflowed[1]&&(0>c?n("on",37):c>h.width()&&n("on",39)))}}).bind("mouseup."+u+" dragend."+u,function(){t||(i&&(i=0,n("off",null)),c=!1)})},W=function(){function t(t,a){if(V(o),!L(o,t.target)){var r="auto"!==i.mouseWheel.deltaFactor?parseInt(i.mouseWheel.deltaFactor):s&&t.deltaFactor<100?100:t.deltaFactor||100,d=i.scrollInertia;if("x"===i.axis||"x"===i.mouseWheel.axis)var u="x",f=[Math.round(r*n.scrollRatio.x),parseInt(i.mouseWheel.scrollAmount)],h="auto"!==i.mouseWheel.scrollAmount?f[1]:f[0]>=l.width()?.9*l.width():f[0],m=Math.abs(e("#mCSB_"+n.idx+"_container")[0].offsetLeft),p=c[1][0].offsetLeft,g=c[1].parent().width()-c[1].width(),v="y"===i.mouseWheel.axis?t.deltaY||a:t.deltaX;else var u="y",f=[Math.round(r*n.scrollRatio.y),parseInt(i.mouseWheel.scrollAmount)],h="auto"!==i.mouseWheel.scrollAmount?f[1]:f[0]>=l.height()?.9*l.height():f[0],m=Math.abs(e("#mCSB_"+n.idx+"_container")[0].offsetTop),p=c[0][0].offsetTop,g=c[0].parent().height()-c[0].height(),v=t.deltaY||a;"y"===u&&!n.overflowed[0]||"x"===u&&!n.overflowed[1]||((i.mouseWheel.invert||t.webkitDirectionInvertedFromDevice)&&(v=-v),i.mouseWheel.normalizeDelta&&(v=0>v?-1:1),(v>0&&0!==p||0>v&&p!==g||i.mouseWheel.preventDefault)&&(t.stopImmediatePropagation(),t.preventDefault()),t.deltaFactor<5&&!i.mouseWheel.normalizeDelta&&(h=t.deltaFactor,d=17),Q(o,(m-v*h).toString(),{dir:u,dur:d}))}}if(e(this).data(a)){var o=e(this),n=o.data(a),i=n.opt,r=a+"_"+n.idx,l=e("#mCSB_"+n.idx),c=[e("#mCSB_"+n.idx+"_dragger_vertical"),e("#mCSB_"+n.idx+"_dragger_horizontal")],d=e("#mCSB_"+n.idx+"_container").find("iframe");d.length&&d.each(function(){e(this).bind("load",function(){A(this)&&e(this.contentDocument||this.contentWindow.document).bind("mousewheel."+r,function(e,o){t(e,o)})})}),l.bind("mousewheel."+r,function(e,o){t(e,o)})}},R=new Object,A=function(t){var o=!1,a=!1,n=null;if(void 0===t?a="#empty":void 0!==e(t).attr("id")&&(a=e(t).attr("id")),a!==!1&&void 0!==R[a])return R[a];if(t){try{var i=t.contentDocument||t.contentWindow.document;n=i.body.innerHTML}catch(r){}o=null!==n}else{try{var i=top.document;n=i.body.innerHTML}catch(r){}o=null!==n}return a!==!1&&(R[a]=o),o},L=function(t,o){var n=o.nodeName.toLowerCase(),i=t.data(a).opt.mouseWheel.disableOver,r=["select","textarea"];return e.inArray(n,i)>-1&&!(e.inArray(n,r)>-1&&!e(o).is(":focus"))},z=function(){var t,o=e(this),n=o.data(a),i=a+"_"+n.idx,r=e("#mCSB_"+n.idx+"_container"),l=r.parent(),s=e(".mCSB_"+n.idx+"_scrollbar ."+d[12]);s.bind("mousedown."+i+" touchstart."+i+" pointerdown."+i+" MSPointerDown."+i,function(o){c=!0,e(o.target).hasClass("mCSB_dragger")||(t=1)}).bind("touchend."+i+" pointerup."+i+" MSPointerUp."+i,function(){c=!1}).bind("click."+i,function(a){if(t&&(t=0,e(a.target).hasClass(d[12])||e(a.target).hasClass("mCSB_draggerRail"))){V(o);var i=e(this),s=i.find(".mCSB_dragger");if(i.parent(".mCSB_scrollTools_horizontal").length>0){if(!n.overflowed[1])return;var c="x",u=a.pageX>s.offset().left?-1:1,f=Math.abs(r[0].offsetLeft)-u*(.9*l.width())}else{if(!n.overflowed[0])return;var c="y",u=a.pageY>s.offset().top?-1:1,f=Math.abs(r[0].offsetTop)-u*(.9*l.height())}Q(o,f.toString(),{dir:c,scrollEasing:"mcsEaseInOut"})}})},P=function(){var t=e(this),o=t.data(a),n=o.opt,i=a+"_"+o.idx,r=e("#mCSB_"+o.idx+"_container"),l=r.parent();r.bind("focusin."+i,function(){var o=e(document.activeElement),a=r.find(".mCustomScrollBox").length,i=0;o.is(n.advanced.autoScrollOnFocus)&&(V(t),clearTimeout(t[0]._focusTimeout),t[0]._focusTimer=a?(i+17)*a:0,t[0]._focusTimeout=setTimeout(function(){var e=[oe(o)[0],oe(o)[1]],a=[r[0].offsetTop,r[0].offsetLeft],s=[a[0]+e[0]>=0&&a[0]+e[0]<l.height()-o.outerHeight(!1),a[1]+e[1]>=0&&a[0]+e[1]<l.width()-o.outerWidth(!1)],c="yx"!==n.axis||s[0]||s[1]?"all":"none";"x"===n.axis||s[0]||Q(t,e[0].toString(),{dir:"y",scrollEasing:"mcsEaseInOut",overwrite:c,dur:i}),"y"===n.axis||s[1]||Q(t,e[1].toString(),{dir:"x",scrollEasing:"mcsEaseInOut",overwrite:c,dur:i})},t[0]._focusTimer))})},H=function(){var t=e(this),o=t.data(a),n=a+"_"+o.idx,i=e("#mCSB_"+o.idx+"_container").parent();i.bind("scroll."+n,function(){0===i.scrollTop()&&0===i.scrollLeft()||e(".mCSB_"+o.idx+"_scrollbar").css("visibility","hidden")})},U=function(){var t=e(this),o=t.data(a),n=o.opt,i=o.sequential,r=a+"_"+o.idx,l=".mCSB_"+o.idx+"_scrollbar",s=e(l+">a");s.bind("mousedown."+r+" touchstart."+r+" pointerdown."+r+" MSPointerDown."+r+" mouseup."+r+" touchend."+r+" pointerup."+r+" MSPointerUp."+r+" mouseout."+r+" pointerout."+r+" MSPointerOut."+r+" click."+r,function(a){function r(e,o){i.scrollAmount=n.scrollButtons.scrollAmount,q(t,e,o)}if(a.preventDefault(),$(a)){var l=e(this).attr("class");switch(i.type=n.scrollButtons.scrollType,a.type){case"mousedown":case"touchstart":case"pointerdown":case"MSPointerDown":if("stepped"===i.type)return;c=!0,o.tweenRunning=!1,r("on",l);break;case"mouseup":case"touchend":case"pointerup":case"MSPointerUp":case"mouseout":case"pointerout":case"MSPointerOut":if("stepped"===i.type)return;c=!1,i.dir&&r("off",l);break;case"click":if("stepped"!==i.type||o.tweenRunning)return;r("on",l)}}})},F=function(){function t(t){function a(e,t){r.type=i.keyboard.scrollType,r.scrollAmount=i.keyboard.scrollAmount,"stepped"===r.type&&n.tweenRunning||q(o,e,t)}switch(t.type){case"blur":n.tweenRunning&&r.dir&&a("off",null);break;case"keydown":case"keyup":var l=t.keyCode?t.keyCode:t.which,s="on";if("x"!==i.axis&&(38===l||40===l)||"y"!==i.axis&&(37===l||39===l)){if((38===l||40===l)&&!n.overflowed[0]||(37===l||39===l)&&!n.overflowed[1])return;"keyup"===t.type&&(s="off"),e(document.activeElement).is(u)||(t.preventDefault(),t.stopImmediatePropagation(),a(s,l))}else if(33===l||34===l){if((n.overflowed[0]||n.overflowed[1])&&(t.preventDefault(),t.stopImmediatePropagation()),"keyup"===t.type){V(o);var f=34===l?-1:1;if("x"===i.axis||"yx"===i.axis&&n.overflowed[1]&&!n.overflowed[0])var h="x",m=Math.abs(c[0].offsetLeft)-f*(.9*d.width());else var h="y",m=Math.abs(c[0].offsetTop)-f*(.9*d.height());Q(o,m.toString(),{dir:h,scrollEasing:"mcsEaseInOut"})}}else if((35===l||36===l)&&!e(document.activeElement).is(u)&&((n.overflowed[0]||n.overflowed[1])&&(t.preventDefault(),t.stopImmediatePropagation()),"keyup"===t.type)){if("x"===i.axis||"yx"===i.axis&&n.overflowed[1]&&!n.overflowed[0])var h="x",m=35===l?Math.abs(d.width()-c.outerWidth(!1)):0;else var h="y",m=35===l?Math.abs(d.height()-c.outerHeight(!1)):0;Q(o,m.toString(),{dir:h,scrollEasing:"mcsEaseInOut"})}}}var o=e(this),n=o.data(a),i=n.opt,r=n.sequential,l=a+"_"+n.idx,s=e("#mCSB_"+n.idx),c=e("#mCSB_"+n.idx+"_container"),d=c.parent(),u="input,textarea,select,datalist,keygen,[contenteditable='true']",f=c.find("iframe"),h=["blur."+l+" keydown."+l+" keyup."+l];f.length&&f.each(function(){e(this).bind("load",function(){A(this)&&e(this.contentDocument||this.contentWindow.document).bind(h[0],function(e){t(e)})})}),s.attr("tabindex","0").bind(h[0],function(e){t(e)})},q=function(t,o,n,i,r){function l(e){u.snapAmount&&(f.scrollAmount=u.snapAmount instanceof Array?"x"===f.dir[0]?u.snapAmount[1]:u.snapAmount[0]:u.snapAmount);var o="stepped"!==f.type,a=r?r:e?o?p/1.5:g:1e3/60,n=e?o?7.5:40:2.5,s=[Math.abs(h[0].offsetTop),Math.abs(h[0].offsetLeft)],d=[c.scrollRatio.y>10?10:c.scrollRatio.y,c.scrollRatio.x>10?10:c.scrollRatio.x],m="x"===f.dir[0]?s[1]+f.dir[1]*(d[1]*n):s[0]+f.dir[1]*(d[0]*n),v="x"===f.dir[0]?s[1]+f.dir[1]*parseInt(f.scrollAmount):s[0]+f.dir[1]*parseInt(f.scrollAmount),x="auto"!==f.scrollAmount?v:m,_=i?i:e?o?"mcsLinearOut":"mcsEaseInOut":"mcsLinear",w=!!e;return e&&17>a&&(x="x"===f.dir[0]?s[1]:s[0]),Q(t,x.toString(),{dir:f.dir[0],scrollEasing:_,dur:a,onComplete:w}),e?void(f.dir=!1):(clearTimeout(f.step),void(f.step=setTimeout(function(){l()},a)))}function s(){clearTimeout(f.step),Z(f,"step"),V(t)}var c=t.data(a),u=c.opt,f=c.sequential,h=e("#mCSB_"+c.idx+"_container"),m="stepped"===f.type,p=u.scrollInertia<26?26:u.scrollInertia,g=u.scrollInertia<1?17:u.scrollInertia;switch(o){case"on":if(f.dir=[n===d[16]||n===d[15]||39===n||37===n?"x":"y",n===d[13]||n===d[15]||38===n||37===n?-1:1],V(t),te(n)&&"stepped"===f.type)return;l(m);break;case"off":s(),(m||c.tweenRunning&&f.dir)&&l(!0)}},Y=function(t){var o=e(this).data(a).opt,n=[];return"function"==typeof t&&(t=t()),t instanceof Array?n=t.length>1?[t[0],t[1]]:"x"===o.axis?[null,t[0]]:[t[0],null]:(n[0]=t.y?t.y:t.x||"x"===o.axis?null:t,n[1]=t.x?t.x:t.y||"y"===o.axis?null:t),"function"==typeof n[0]&&(n[0]=n[0]()),"function"==typeof n[1]&&(n[1]=n[1]()),n},j=function(t,o){if(null!=t&&"undefined"!=typeof t){var n=e(this),i=n.data(a),r=i.opt,l=e("#mCSB_"+i.idx+"_container"),s=l.parent(),c=typeof t;o||(o="x"===r.axis?"x":"y");var d="x"===o?l.outerWidth(!1)-s.width():l.outerHeight(!1)-s.height(),f="x"===o?l[0].offsetLeft:l[0].offsetTop,h="x"===o?"left":"top";switch(c){case"function":return t();case"object":var m=t.jquery?t:e(t);if(!m.length)return;return"x"===o?oe(m)[1]:oe(m)[0];case"string":case"number":if(te(t))return Math.abs(t);if(-1!==t.indexOf("%"))return Math.abs(d*parseInt(t)/100);if(-1!==t.indexOf("-="))return Math.abs(f-parseInt(t.split("-=")[1]));if(-1!==t.indexOf("+=")){var p=f+parseInt(t.split("+=")[1]);return p>=0?0:Math.abs(p)}if(-1!==t.indexOf("px")&&te(t.split("px")[0]))return Math.abs(t.split("px")[0]);if("top"===t||"left"===t)return 0;if("bottom"===t)return Math.abs(s.height()-l.outerHeight(!1));if("right"===t)return Math.abs(s.width()-l.outerWidth(!1));if("first"===t||"last"===t){var m=l.find(":"+t);return"x"===o?oe(m)[1]:oe(m)[0]}return e(t).length?"x"===o?oe(e(t))[1]:oe(e(t))[0]:(l.css(h,t),void u.update.call(null,n[0]))}}},X=function(t){function o(){return clearTimeout(f[0].autoUpdate),0===l.parents("html").length?void(l=null):void(f[0].autoUpdate=setTimeout(function(){return c.advanced.updateOnSelectorChange&&(s.poll.change.n=i(),s.poll.change.n!==s.poll.change.o)?(s.poll.change.o=s.poll.change.n,void r(3)):c.advanced.updateOnContentResize&&(s.poll.size.n=l[0].scrollHeight+l[0].scrollWidth+f[0].offsetHeight+l[0].offsetHeight+l[0].offsetWidth,s.poll.size.n!==s.poll.size.o)?(s.poll.size.o=s.poll.size.n,void r(1)):!c.advanced.updateOnImageLoad||"auto"===c.advanced.updateOnImageLoad&&"y"===c.axis||(s.poll.img.n=f.find("img").length,s.poll.img.n===s.poll.img.o)?void((c.advanced.updateOnSelectorChange||c.advanced.updateOnContentResize||c.advanced.updateOnImageLoad)&&o()):(s.poll.img.o=s.poll.img.n,void f.find("img").each(function(){n(this)}))},c.advanced.autoUpdateTimeout))}function n(t){function o(e,t){return function(){return t.apply(e,arguments)}}function a(){this.onload=null,
e(t).addClass(d[2]),r(2)}if(e(t).hasClass(d[2]))return void r();var n=new Image;n.onload=o(n,a),n.src=t.src}function i(){c.advanced.updateOnSelectorChange===!0&&(c.advanced.updateOnSelectorChange="*");var e=0,t=f.find(c.advanced.updateOnSelectorChange);return c.advanced.updateOnSelectorChange&&t.length>0&&t.each(function(){e+=this.offsetHeight+this.offsetWidth}),e}function r(e){clearTimeout(f[0].autoUpdate),u.update.call(null,l[0],e)}var l=e(this),s=l.data(a),c=s.opt,f=e("#mCSB_"+s.idx+"_container");return t?(clearTimeout(f[0].autoUpdate),void Z(f[0],"autoUpdate")):void o()},N=function(e,t,o){return Math.round(e/t)*t-o},V=function(t){var o=t.data(a),n=e("#mCSB_"+o.idx+"_container,#mCSB_"+o.idx+"_container_wrapper,#mCSB_"+o.idx+"_dragger_vertical,#mCSB_"+o.idx+"_dragger_horizontal");n.each(function(){K.call(this)})},Q=function(t,o,n){function i(e){return s&&c.callbacks[e]&&"function"==typeof c.callbacks[e]}function r(){return[c.callbacks.alwaysTriggerOffsets||w>=S[0]+y,c.callbacks.alwaysTriggerOffsets||-B>=w]}function l(){var e=[h[0].offsetTop,h[0].offsetLeft],o=[x[0].offsetTop,x[0].offsetLeft],a=[h.outerHeight(!1),h.outerWidth(!1)],i=[f.height(),f.width()];t[0].mcs={content:h,top:e[0],left:e[1],draggerTop:o[0],draggerLeft:o[1],topPct:Math.round(100*Math.abs(e[0])/(Math.abs(a[0])-i[0])),leftPct:Math.round(100*Math.abs(e[1])/(Math.abs(a[1])-i[1])),direction:n.dir}}var s=t.data(a),c=s.opt,d={trigger:"internal",dir:"y",scrollEasing:"mcsEaseOut",drag:!1,dur:c.scrollInertia,overwrite:"all",callbacks:!0,onStart:!0,onUpdate:!0,onComplete:!0},n=e.extend(d,n),u=[n.dur,n.drag?0:n.dur],f=e("#mCSB_"+s.idx),h=e("#mCSB_"+s.idx+"_container"),m=h.parent(),p=c.callbacks.onTotalScrollOffset?Y.call(t,c.callbacks.onTotalScrollOffset):[0,0],g=c.callbacks.onTotalScrollBackOffset?Y.call(t,c.callbacks.onTotalScrollBackOffset):[0,0];if(s.trigger=n.trigger,0===m.scrollTop()&&0===m.scrollLeft()||(e(".mCSB_"+s.idx+"_scrollbar").css("visibility","visible"),m.scrollTop(0).scrollLeft(0)),"_resetY"!==o||s.contentReset.y||(i("onOverflowYNone")&&c.callbacks.onOverflowYNone.call(t[0]),s.contentReset.y=1),"_resetX"!==o||s.contentReset.x||(i("onOverflowXNone")&&c.callbacks.onOverflowXNone.call(t[0]),s.contentReset.x=1),"_resetY"!==o&&"_resetX"!==o){if(!s.contentReset.y&&t[0].mcs||!s.overflowed[0]||(i("onOverflowY")&&c.callbacks.onOverflowY.call(t[0]),s.contentReset.x=null),!s.contentReset.x&&t[0].mcs||!s.overflowed[1]||(i("onOverflowX")&&c.callbacks.onOverflowX.call(t[0]),s.contentReset.x=null),c.snapAmount){var v=c.snapAmount instanceof Array?"x"===n.dir?c.snapAmount[1]:c.snapAmount[0]:c.snapAmount;o=N(o,v,c.snapOffset)}switch(n.dir){case"x":var x=e("#mCSB_"+s.idx+"_dragger_horizontal"),_="left",w=h[0].offsetLeft,S=[f.width()-h.outerWidth(!1),x.parent().width()-x.width()],b=[o,0===o?0:o/s.scrollRatio.x],y=p[1],B=g[1],T=y>0?y/s.scrollRatio.x:0,k=B>0?B/s.scrollRatio.x:0;break;case"y":var x=e("#mCSB_"+s.idx+"_dragger_vertical"),_="top",w=h[0].offsetTop,S=[f.height()-h.outerHeight(!1),x.parent().height()-x.height()],b=[o,0===o?0:o/s.scrollRatio.y],y=p[0],B=g[0],T=y>0?y/s.scrollRatio.y:0,k=B>0?B/s.scrollRatio.y:0}b[1]<0||0===b[0]&&0===b[1]?b=[0,0]:b[1]>=S[1]?b=[S[0],S[1]]:b[0]=-b[0],t[0].mcs||(l(),i("onInit")&&c.callbacks.onInit.call(t[0])),clearTimeout(h[0].onCompleteTimeout),G(x[0],_,Math.round(b[1]),u[1],n.scrollEasing),!s.tweenRunning&&(0===w&&b[0]>=0||w===S[0]&&b[0]<=S[0])||G(h[0],_,Math.round(b[0]),u[0],n.scrollEasing,n.overwrite,{onStart:function(){n.callbacks&&n.onStart&&!s.tweenRunning&&(i("onScrollStart")&&(l(),c.callbacks.onScrollStart.call(t[0])),s.tweenRunning=!0,C(x),s.cbOffsets=r())},onUpdate:function(){n.callbacks&&n.onUpdate&&i("whileScrolling")&&(l(),c.callbacks.whileScrolling.call(t[0]))},onComplete:function(){if(n.callbacks&&n.onComplete){"yx"===c.axis&&clearTimeout(h[0].onCompleteTimeout);var e=h[0].idleTimer||0;h[0].onCompleteTimeout=setTimeout(function(){i("onScroll")&&(l(),c.callbacks.onScroll.call(t[0])),i("onTotalScroll")&&b[1]>=S[1]-T&&s.cbOffsets[0]&&(l(),c.callbacks.onTotalScroll.call(t[0])),i("onTotalScrollBack")&&b[1]<=k&&s.cbOffsets[1]&&(l(),c.callbacks.onTotalScrollBack.call(t[0])),s.tweenRunning=!1,h[0].idleTimer=0,C(x,"hide")},e)}}})}},G=function(e,t,o,a,n,i,r){function l(){S.stop||(x||m.call(),x=J()-v,s(),x>=S.time&&(S.time=x>S.time?x+f-(x-S.time):x+f-1,S.time<x+1&&(S.time=x+1)),S.time<a?S.id=h(l):g.call())}function s(){a>0?(S.currVal=u(S.time,_,b,a,n),w[t]=Math.round(S.currVal)+"px"):w[t]=o+"px",p.call()}function c(){f=1e3/60,S.time=x+f,h=window.requestAnimationFrame?window.requestAnimationFrame:function(e){return s(),setTimeout(e,.01)},S.id=h(l)}function d(){null!=S.id&&(window.requestAnimationFrame?window.cancelAnimationFrame(S.id):clearTimeout(S.id),S.id=null)}function u(e,t,o,a,n){switch(n){case"linear":case"mcsLinear":return o*e/a+t;case"mcsLinearOut":return e/=a,e--,o*Math.sqrt(1-e*e)+t;case"easeInOutSmooth":return e/=a/2,1>e?o/2*e*e+t:(e--,-o/2*(e*(e-2)-1)+t);case"easeInOutStrong":return e/=a/2,1>e?o/2*Math.pow(2,10*(e-1))+t:(e--,o/2*(-Math.pow(2,-10*e)+2)+t);case"easeInOut":case"mcsEaseInOut":return e/=a/2,1>e?o/2*e*e*e+t:(e-=2,o/2*(e*e*e+2)+t);case"easeOutSmooth":return e/=a,e--,-o*(e*e*e*e-1)+t;case"easeOutStrong":return o*(-Math.pow(2,-10*e/a)+1)+t;case"easeOut":case"mcsEaseOut":default:var i=(e/=a)*e,r=i*e;return t+o*(.499999999999997*r*i+-2.5*i*i+5.5*r+-6.5*i+4*e)}}e._mTween||(e._mTween={top:{},left:{}});var f,h,r=r||{},m=r.onStart||function(){},p=r.onUpdate||function(){},g=r.onComplete||function(){},v=J(),x=0,_=e.offsetTop,w=e.style,S=e._mTween[t];"left"===t&&(_=e.offsetLeft);var b=o-_;S.stop=0,"none"!==i&&d(),c()},J=function(){return window.performance&&window.performance.now?window.performance.now():window.performance&&window.performance.webkitNow?window.performance.webkitNow():Date.now?Date.now():(new Date).getTime()},K=function(){var e=this;e._mTween||(e._mTween={top:{},left:{}});for(var t=["top","left"],o=0;o<t.length;o++){var a=t[o];e._mTween[a].id&&(window.requestAnimationFrame?window.cancelAnimationFrame(e._mTween[a].id):clearTimeout(e._mTween[a].id),e._mTween[a].id=null,e._mTween[a].stop=1)}},Z=function(e,t){try{delete e[t]}catch(o){e[t]=null}},$=function(e){return!(e.which&&1!==e.which)},ee=function(e){var t=e.originalEvent.pointerType;return!(t&&"touch"!==t&&2!==t)},te=function(e){return!isNaN(parseFloat(e))&&isFinite(e)},oe=function(e){var t=e.parents(".mCSB_container");return[e.offset().top-t.offset().top,e.offset().left-t.offset().left]},ae=function(){function e(){var e=["webkit","moz","ms","o"];if("hidden"in document)return"hidden";for(var t=0;t<e.length;t++)if(e[t]+"Hidden"in document)return e[t]+"Hidden";return null}var t=e();return t?document[t]:!1};e.fn[o]=function(t){return u[t]?u[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void e.error("Method "+t+" does not exist"):u.init.apply(this,arguments)},e[o]=function(t){return u[t]?u[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void e.error("Method "+t+" does not exist"):u.init.apply(this,arguments)},e[o].defaults=i,window[o]=!0,e(window).bind("load",function(){e(n)[o](),e.extend(e.expr[":"],{mcsInView:e.expr[":"].mcsInView||function(t){var o,a,n=e(t),i=n.parents(".mCSB_container");if(i.length)return o=i.parent(),a=[i[0].offsetTop,i[0].offsetLeft],a[0]+oe(n)[0]>=0&&a[0]+oe(n)[0]<o.height()-n.outerHeight(!1)&&a[1]+oe(n)[1]>=0&&a[1]+oe(n)[1]<o.width()-n.outerWidth(!1)},mcsInSight:e.expr[":"].mcsInSight||function(t){var o,a,n,i,r=e(t),l=r.parents(".mCSB_container");if(l.length)return o=[r.outerHeight(!1),r.outerWidth(!1)],n=[l[0].offsetTop+oe(r)[0],l[0].offsetLeft+oe(r)[1]],a=[l.parent()[0].offsetHeight,l.parent()[0].offsetWidth],i=[o[0]<a[0]?[.9,.1]:[.6,.4],o[1]<a[1]?[.9,.1]:[.6,.4]],n[0]-a[0]*i[0][0]<0&&n[0]+o[0]-a[0]*i[0][1]>=0&&n[1]-a[1]*i[1][0]<0&&n[1]+o[1]-a[1]*i[1][1]>=0},mcsOverflow:e.expr[":"].mcsOverflow||function(t){var o=e(t).data(a);if(o)return o.overflowed[0]||o.overflowed[1]}})})})});

/*
*   JavaScript interface for the SoundCloud Player widget
*   Author: Matas Petrikas, matas@soundcloud.com
*   Copyright (c) 2009  SoundCloud Ltd.
*   Licensed under the MIT license:
*   http://www.opensource.org/licenses/mit-license.php
*/
!function(){var e=/msie/i.test(navigator.userAgent)&&!/opera/i.test(navigator.userAgent);window.soundcloud={version:"0.1",debug:!1,_listeners:[],_redispatch:function(e,t,n){var i,o=this._listeners[e]||[],r="soundcloud:"+e;try{i=this.getPlayer(t)}catch(s){return void(this.debug&&window.console&&console.error("unable to dispatch widget event "+e+" for the widget id "+t,n,s))}window.jQuery?jQuery(i).trigger(r,[n]):window.Prototype&&$(i).fire(r,n);for(var d=0,a=o.length;a>d;d+=1)o[d].apply(i,[i,n]);this.debug&&window.console&&console.log(r,e,t,n)},addEventListener:function(e,t){this._listeners[e]||(this._listeners[e]=[]),this._listeners[e].push(t)},removeEventListener:function(e,t){for(var n=this._listeners[e]||[],i=0,o=n.length;o>i;i+=1)n[i]===t&&n.splice(i,1)},getPlayer:function(t){var n;try{if(!t)throw"The SoundCloud Widget DOM object needs an id atribute, please refer to SoundCloud Widget API documentation.";if(n=e?window[t]:document[t]){if(n.api_getFlashId)return n;throw"The SoundCloud Widget External Interface is not accessible. Check that allowscriptaccess is set to 'always' in embed code"}throw"The SoundCloud Widget with an id "+t+" couldn't be found"}catch(i){throw console&&console.error&&console.error(i),i}},onPlayerReady:function(e,t){this._redispatch("onPlayerReady",e,t)},onMediaStart:function(e,t){this._redispatch("onMediaStart",e,t)},onMediaEnd:function(e,t){this._redispatch("onMediaEnd",e,t)},onMediaPlay:function(e,t){this._redispatch("onMediaPlay",e,t)},onMediaPause:function(e,t){this._redispatch("onMediaPause",e,t)},onMediaBuffering:function(e,t){this._redispatch("onMediaBuffering",e,t)},onMediaSeek:function(e,t){this._redispatch("onMediaSeek",e,t)},onMediaDoneBuffering:function(e,t){this._redispatch("onMediaDoneBuffering",e,t)},onPlayerError:function(e,t){this._redispatch("onPlayerError",e,t)}}}();

/*
*   SoundCloud Custom Player jQuery Plugin
*   Author: Matas Petrikas, matas@soundcloud.com
*   Copyright (c) 2009  SoundCloud Ltd.
*   Licensed under the MIT license:
*   http://www.opensource.org/licenses/mit-license.php 
*
*   Usage:
*   <a href="http://soundcloud.com/matas/hobnotropic" class="sc-player">My new dub track</a>
*   The link will be automatically replaced by the HTML based player
*/
!function(e){var artworkImage,n,a,t,i=function(e){var n=function(e){return{h:Math.floor(e/36e5),m:Math.floor(e/6e4%60),s:Math.floor(e/1e3%60)}}(e),a=[];return n.h>0&&a.push(n.h),a.push(n.m<10&&n.h>0?"0"+n.m:n.m),a.push(n.s<10?"0"+n.s:n.s),a.join(".")},s=function(e){return e.sort(function(){return 1-Math.floor(3*Math.random())}),e},r=!0,o=!1,c=e(document),l=function(e){try{r&&window.console&&window.console.log&&window.console.log.apply(window.console,arguments)}catch(n){}},u=o?"sandbox-soundcloud.com":"soundcloud.com",d="https:"===document.location.protocol,p=function(e,n){var a=(d||/^https/i.test(e)?"https":"http")+"://api."+u+"/resolve?url=",t="format=json&consumer_key="+n+"&callback=?";return d&&(e=e.replace(/^http:/,"https:")),/api\./.test(e)?e+"?"+t:a+e+"&"+t},f=function(){var n=function(){var e=!1;try{var n=new Audio;e=n.canPlayType&&/maybe|probably/.test(n.canPlayType("audio/mpeg"))}catch(a){}return e}(),a={onReady:function(){c.trigger("scPlayer:onAudioReady")},onPlay:function(){c.trigger("scPlayer:onMediaPlay")},onPause:function(){c.trigger("scPlayer:onMediaPause")},onEnd:function(){c.trigger("scPlayer:onMediaEnd")},onBuffer:function(e){c.trigger({type:"scPlayer:onMediaBuffering",percent:e})}},t=function(){var n=new Audio,t=function(e){var n=e.target,t=(n.buffered.length&&n.buffered.end(0))/n.duration*100;a.onBuffer(t),n.currentTime===n.duration&&a.onEnd()},i=function(e){var n=e.target,t=(n.buffered.length&&n.buffered.end(0))/n.duration*100;a.onBuffer(t)};return e('<div class="sc-player-engine-container"></div>').appendTo(document.body).append(n),n.addEventListener("play",a.onPlay,!1),n.addEventListener("pause",a.onPause,!1),n.addEventListener("timeupdate",t,!1),n.addEventListener("progress",i,!1),{load:function(e,a){n.pause(),n.src=e.stream_url+(/\?/.test(e.stream_url)?"&":"?")+"consumer_key="+a,n.load(),n.play()},play:function(){n.play()},pause:function(){n.pause()},stop:function(){n.currentTime&&(n.currentTime=0,n.pause())},seek:function(e){n.currentTime=n.duration*e,n.play()},getDuration:function(){return 1e3*n.duration},getPosition:function(){return 1e3*n.currentTime},setVolume:function(e){n.volume=e/100}}},i=function(){var n,t="scPlayerEngine",i=function(n){var a=(d?"https":"http")+"://player."+u+"/player.swf?url="+n+"&amp;enable_api=true&amp;player_type=engine&amp;object_id="+t;return e.browser.msie?'<object height="100%" width="100%" id="'+t+'" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" data="'+a+'"><param name="movie" value="'+a+'" /><param name="allowscriptaccess" value="always" /></object>':'<object height="100%" width="100%" id="'+t+'"><embed allowscriptaccess="always" height="100%" width="100%" src="'+a+'" type="application/x-shockwave-flash" name="'+t+'" /></object>'};return soundcloud.addEventListener("onPlayerReady",function(e,i){n=soundcloud.getPlayer(t),a.onReady()}),soundcloud.addEventListener("onMediaEnd",a.onEnd),soundcloud.addEventListener("onMediaBuffering",function(e,n){a.onBuffer(n.percent)}),soundcloud.addEventListener("onMediaPlay",a.onPlay),soundcloud.addEventListener("onMediaPause",a.onPause),{load:function(a){var t=a.uri;n?n.api_load(t):e('<div class="sc-player-engine-container"></div>').appendTo(document.body).html(i(t))},play:function(){n&&n.api_play()},pause:function(){n&&n.api_pause()},stop:function(){n&&n.api_stop()},seek:function(e){n&&n.api_seekTo(n.api_getTrackDuration()*e)},getDuration:function(){return n&&n.api_getTrackDuration&&1e3*n.api_getTrackDuration()},getPosition:function(){return n&&n.api_getTrackPosition&&1e3*n.api_getTrackPosition()},setVolume:function(e){n&&n.api_setVolume&&n.api_setVolume(e)}}};return n?t():i()}(),y=!1,m=[],v={},h=function(a,t,i){var s=0,r={node:a,tracks:[]},o=function(a){var i=p(a.url,n);e.getJSON(i,function(n){ artworkImage = n.artwork_url.replace("-large", "-t300x300");  s+=1,n.tracks?r.tracks=r.tracks.concat(n.tracks):n.duration?(n.permalink_url=a.url,r.tracks.push(n)):n.creator?t.push({url:n.uri+"/tracks"}):n.username?/favorites/.test(a.url)?t.push({url:n.uri+"/favorites"}):t.push({url:n.uri+"/tracks"}):e.isArray(n)&&(r.tracks=r.tracks.concat(n)),t[s]?o(t[s]):r.node.trigger({type:"onTrackDataLoaded",playerObj:r,url:i})})};n=i,m.push(r),o(t[s])},g=function(e,n){return n?'<div class="sc-loading-artwork">Loading Artwork</div>':e.artwork_url?'<img src="'+artworkImage+'"/>':'<img src="'+artworkImage+'"/>'},k=function(n,a){e(".sc-info",n).each(function(n){e("h3",this).html('<a href="'+a.permalink_url+'">'+a.title+"</a>"),e("h4",this).html('by <a href="'+a.user.permalink_url+'">'+a.user.username+"</a>"),e("p",this).html(a.description||"no Description")}),e(".sc-artwork-list li",n).each(function(n){var t=e(this),i=t.data("sc-track");i===a?t.addClass("active").find(".sc-loading-artwork").each(function(n){e(this).removeClass("sc-loading-artwork").html(g(a,!1))}):t.removeClass("active")}),e(".sc-duration",n).html(i(a.duration)),e(".sc-waveform-container",n).html('<img src="'+a.waveform_url+'" />'),n.trigger("onPlayerTrackSwitch.scPlayer",[a])},P=function(e){var t=e.permalink_url;a===t?f.play():(a=t,f.load(e,n))},b=function(n){return m[e(n).data("sc-player").id]},w=function(n,a){a&&e("div.sc-player.playing").removeClass("playing"),e(n).toggleClass("playing",a).trigger(a?"onPlayerPlay":"onPlayerPause")},T=function(n,a){var t=b(n).tracks[a||0];k(n,t),v={$buffer:e(".sc-buffer",n),$played:e(".sc-played",n),position:e(".sc-position",n)[0]},w(n,!0),P(t)},_=function(e){w(e,!1),f.pause()},M=function(){var e=v.$played.closest(".sc-player");v.$played.css("width","0%"),v.position.innerHTML=i(0),w(e,!1),f.stop(),e.trigger("onPlayerTrackFinish")},C=function(n,a){f.seek(a),e(n).trigger("onPlayerSeek"),w(n,!0)},E=function(n){var a=e(n);l("track finished get the next one"),$nextItem=e(".sc-trackslist li.active",a).next("li"),$nextItem.length||($nextItem=a.nextAll("div.sc-player:first").find(".sc-trackslist li.active")),$nextItem.click()},D=function(){var e=80,n=document.cookie.split(";"),a=new RegExp("scPlayer_volume=(\\d+)");for(var t in n)if(a.test(n[t])){e=parseInt(n[t].match(a)[1],10);break}return e}(),L=function(e){var n=Math.floor(e),a=new Date;a.setTime(a.getTime()+31536e6),D=n,document.cookie=["scPlayer_volume=",n,"; expires=",a.toUTCString(),'; path="/"'].join(""),f.setVolume(D)};c.bind("scPlayer:onAudioReady",function(e){l("onPlayerReady: audio engine is ready"),f.play(),L(D)}).bind("scPlayer:onMediaPlay",function(e){clearInterval(t),t=setInterval(function(){var e=f.getDuration(),n=f.getPosition(),a=n/e;v.$played.css("width",100*a+"%"),v.position.innerHTML=i(n),c.trigger({type:"onMediaTimeUpdate.scPlayer",duration:e,position:n,relative:a})},500)}).bind("scPlayer:onMediaPause",function(e){clearInterval(t),t=null}).bind("scPlayer:onVolumeChange",function(e){L(e.volume)}).bind("scPlayer:onMediaEnd",function(e){M()}).bind("scPlayer:onMediaBuffering",function(e){v.$buffer.css("width",e.percent+"%")}),e.scPlayer=function(n,a){var t=e.extend({},e.scPlayer.defaults,n),r=m.length,o=a&&e(a),c=o[0].className.replace("sc-player",""),l=t.links||e.map(e("a",o).add(o.filter("a")),function(e){return{limit:e.rel,url:e.href,title:e.innerHTML}}),u=e('<div class="sc-player loading"></div>').data("sc-player",{id:r}),d=e('<ol class="sc-artwork-list"></ol>').appendTo(u),p=(e('<div class="sc-info"><h3></h3><h4></h4><p></p><a href="#" class="sc-info-close">X</a></div>').appendTo(u),e('<div class="sc-controls"></div>').appendTo(u),e('<ol class="sc-trackslist"></ol>').appendTo(u));return(c||t.customClass)&&u.addClass(c).addClass(t.customClass),u.find(".sc-controls").append('<a href="#play" class="sc-play">Play</a> <a href="#pause" class="sc-pause hidden">Pause</a>').end().append('<a href="#info" class="sc-info-toggle hidden">Info</a>').append('<div class="sc-scrubber"></div>').find(".sc-scrubber").append('<div class="sc-volume-slider hidden"><span class="sc-volume-status" style="width:'+D+'%"></span></div>').append('<div class="sc-time-span"><div class="sc-waveform-container"></div><div class="sc-buffer"></div><div class="sc-played"></div></div>').append('<div class="sc-time-indicators"><span class="sc-position"></span> | <span class="sc-duration"></span></div>'),h(u,l,t.apiKey),u.bind("onTrackDataLoaded.scPlayer",function(n){var a=n.playerObj.tracks; t.randomize&&(a=s(a)),e.each(a,function(n,a){ if(!(n>=l[0].limit)){var s=0===n;e('<li><a href="'+a.permalink_url+'">'+(null!=a.artwork_url?'<img src="'+artworkImage+'"/>':'<img src="'+artworkImage+'"/>')+"<span>"+a.title+'</span></a><span class="sc-track-duration">'+i(a.duration)+"</span></li></li>").data("sc-track",{id:n}).toggleClass("active",s).appendTo(p),e("<li></li>").append(g(a,n>=t.loadArtworks)).appendTo(d).toggleClass("active",s).data("sc-track",a)}}),u.each(function(){e.isFunction(t.beforeRender)&&t.beforeRender.call(this,a)}),e(".sc-duration",u)[0].innerHTML=i(a[0].duration),e(".sc-position",u)[0].innerHTML=i(0),k(u,a[0]),t.continuePlayback&&u.bind("onPlayerTrackFinish",function(e){E(u)}),u.removeClass("loading").trigger("onPlayerInit"),t.autoPlay&&!y&&(T(u),y=!0)}),o.each(function(n){e(this).replaceWith(u)}),u},e.scPlayer.stopAll=function(){e(".sc-player.playing a.sc-pause").click()},e.scPlayer.destroy=function(){e(".sc-player, .sc-player-engine-container").remove()},e.fn.scPlayer=function(n){return y=!1,this.each(function(){e.scPlayer(n,this)}),this},e.scPlayer.defaults=e.fn.scPlayer.defaults={customClass:null,beforeRender:function(n){e(this)},onDomReady:function(){e("a.sc-player, div.sc-player").scPlayer(),e(".podcast-box .sc-player-custom").mCustomScrollbar({autoHideScrollbar:!0})},autoPlay:!1,continuePlayback:!0,randomize:!1,loadArtworks:5,size:10,apiKey:"htuiRd1JP11Ww0X72T1C3g"},e(document).on("click","a.sc-play, a.sc-pause",function(n){var a=e(this).closest(".sc-player").find("ol.sc-trackslist");return a.find("li.active").click(),!1}),e(document).on("click","a.sc-info-toggle, a.sc-info-close",function(n){var a=e(this);return a.closest(".sc-player").find(".sc-info").toggleClass("active").end().find("a.sc-info-toggle").toggleClass("active"),!1}),e(document).on("click",".sc-trackslist li",function(n){var a=e(this),t=a.closest(".sc-player"),i=a.data("sc-track").id,s=t.is(":not(.playing)")||a.is(":not(.active)");return s?T(t,i):_(t),a.addClass("active").siblings("li").removeClass("active"),e(".artworks li",t).each(function(n){e(this).toggleClass("active",n===i)}),!1});var x=function(n,a){var t=e(n).closest(".sc-time-span"),i=t.find(".sc-buffer"),s=t.find(".sc-waveform-container img"),r=t.closest(".sc-player"),o=Math.min(i.width(),a-s.offset().left)/s.width();C(r,o)},R=function(e){1===e.targetTouches.length&&(x(e.target,e.targetTouches&&e.targetTouches.length&&e.targetTouches[0].clientX),e.preventDefault())};e(document).on("click",".sc-time-span",function(e){return x(this,e.pageX),!1}).on("touchstart",".sc-time-span",function(e){this.addEventListener("touchmove",R,!1),e.originalEvent.preventDefault()}).on("touchend",".sc-time-span",function(e){this.removeEventListener("touchmove",R,!1),e.originalEvent.preventDefault()});var j=function(n,a){var t=e(n),i=t.offset().left,s=t.width(),r=function(e){return Math.floor((e-i)/s*100)},o=function(e){c.trigger({type:"scPlayer:onVolumeChange",volume:r(e.pageX)})};t.bind("mousemove.sc-player",o),o(a)},A=function(n,a){e(n).unbind("mousemove.sc-player")};e(document).on("mousedown",".sc-volume-slider",function(e){j(this,e)}).on("mouseup",".sc-volume-slider",function(e){A(this,e)}),c.bind("scPlayer:onVolumeChange",function(n){e("span.sc-volume-status").css({width:n.volume+"%"})}),e(function(){e.isFunction(e.scPlayer.defaults.onDomReady)&&e.scPlayer.defaults.onDomReady()})}(jQuery);


/*!
 * imagesLoaded PACKAGED v4.1.0
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

!function(t,e){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",e):"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}(this,function(){function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},n=i[t]=i[t]||[];return-1==n.indexOf(e)&&n.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var i=this._onceEvents=this._onceEvents||{},n=i[t]=i[t]||[];return n[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=i.indexOf(e);return-1!=n&&i.splice(n,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=0,o=i[n];e=e||[];for(var r=this._onceEvents&&this._onceEvents[t];o;){var s=r&&r[o];s&&(this.off(t,o),delete r[o]),o.apply(this,e),n+=s?0:1,o=i[n]}return this}},t}),function(t,e){"use strict";"function"==typeof define&&define.amd?define(["ev-emitter/ev-emitter"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("ev-emitter")):t.imagesLoaded=e(t,t.EvEmitter)}(window,function(t,e){function i(t,e){for(var i in e)t[i]=e[i];return t}function n(t){var e=[];if(Array.isArray(t))e=t;else if("number"==typeof t.length)for(var i=0;i<t.length;i++)e.push(t[i]);else e.push(t);return e}function o(t,e,r){return this instanceof o?("string"==typeof t&&(t=document.querySelectorAll(t)),this.elements=n(t),this.options=i({},this.options),"function"==typeof e?r=e:i(this.options,e),r&&this.on("always",r),this.getImages(),h&&(this.jqDeferred=new h.Deferred),void setTimeout(function(){this.check()}.bind(this))):new o(t,e,r)}function r(t){this.img=t}function s(t,e){this.url=t,this.element=e,this.img=new Image}var h=t.jQuery,a=t.console;o.prototype=Object.create(e.prototype),o.prototype.options={},o.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},o.prototype.addElementImages=function(t){"IMG"==t.nodeName&&this.addImage(t),this.options.background===!0&&this.addElementBackgroundImages(t);var e=t.nodeType;if(e&&d[e]){for(var i=t.querySelectorAll("img"),n=0;n<i.length;n++){var o=i[n];this.addImage(o)}if("string"==typeof this.options.background){var r=t.querySelectorAll(this.options.background);for(n=0;n<r.length;n++){var s=r[n];this.addElementBackgroundImages(s)}}}};var d={1:!0,9:!0,11:!0};return o.prototype.addElementBackgroundImages=function(t){var e=getComputedStyle(t);if(e)for(var i=/url\((['"])?(.*?)\1\)/gi,n=i.exec(e.backgroundImage);null!==n;){var o=n&&n[2];o&&this.addBackground(o,t),n=i.exec(e.backgroundImage)}},o.prototype.addImage=function(t){var e=new r(t);this.images.push(e)},o.prototype.addBackground=function(t,e){var i=new s(t,e);this.images.push(i)},o.prototype.check=function(){function t(t,i,n){setTimeout(function(){e.progress(t,i,n)})}var e=this;return this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?void this.images.forEach(function(e){e.once("progress",t),e.check()}):void this.complete()},o.prototype.progress=function(t,e,i){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!t.isLoaded,this.emitEvent("progress",[this,t,e]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,t),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&a&&a.log("progress: "+i,t,e)},o.prototype.complete=function(){var t=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(t,[this]),this.emitEvent("always",[this]),this.jqDeferred){var e=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[e](this)}},r.prototype=Object.create(e.prototype),r.prototype.check=function(){var t=this.getIsImageComplete();return t?void this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),void(this.proxyImage.src=this.img.src))},r.prototype.getIsImageComplete=function(){return this.img.complete&&void 0!==this.img.naturalWidth},r.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.img,e])},r.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},r.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},r.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},r.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype=Object.create(r.prototype),s.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url;var t=this.getIsImageComplete();t&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},s.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.element,e])},o.makeJQueryPlugin=function(e){e=e||t.jQuery,e&&(h=e,h.fn.imagesLoaded=function(t,e){var i=new o(this,t,e);return i.jqDeferred.promise(h(this))})},o.makeJQueryPlugin(),o});

/*!
 * Isotope PACKAGED v3.0.1
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * http://isotope.metafizzy.co
 * Copyright 2016 Metafizzy
 */

!function(t,e){"use strict";"function"==typeof define&&define.amd?define("jquery-bridget/jquery-bridget",["jquery"],function(i){e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("jquery")):t.jQueryBridget=e(t,t.jQuery)}(window,function(t,e){"use strict";function i(i,s,a){function u(t,e,n){var o,s="$()."+i+'("'+e+'")';return t.each(function(t,u){var h=a.data(u,i);if(!h)return void r(i+" not initialized. Cannot call methods, i.e. "+s);var d=h[e];if(!d||"_"==e.charAt(0))return void r(s+" is not a valid method");var l=d.apply(h,n);o=void 0===o?l:o}),void 0!==o?o:t}function h(t,e){t.each(function(t,n){var o=a.data(n,i);o?(o.option(e),o._init()):(o=new s(n,e),a.data(n,i,o))})}a=a||e||t.jQuery,a&&(s.prototype.option||(s.prototype.option=function(t){a.isPlainObject(t)&&(this.options=a.extend(!0,this.options,t))}),a.fn[i]=function(t){if("string"==typeof t){var e=o.call(arguments,1);return u(this,t,e)}return h(this,t),this},n(a))}function n(t){!t||t&&t.bridget||(t.bridget=i)}var o=Array.prototype.slice,s=t.console,r="undefined"==typeof s?function(){}:function(t){s.error(t)};return n(e||t.jQuery),i}),function(t,e){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",e):"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}("undefined"!=typeof window?window:this,function(){function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},n=i[t]=i[t]||[];return-1==n.indexOf(e)&&n.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var i=this._onceEvents=this._onceEvents||{},n=i[t]=i[t]||{};return n[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=i.indexOf(e);return-1!=n&&i.splice(n,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=0,o=i[n];e=e||[];for(var s=this._onceEvents&&this._onceEvents[t];o;){var r=s&&s[o];r&&(this.off(t,o),delete s[o]),o.apply(this,e),n+=r?0:1,o=i[n]}return this}},t}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("get-size/get-size",[],function(){return e()}):"object"==typeof module&&module.exports?module.exports=e():t.getSize=e()}(window,function(){"use strict";function t(t){var e=parseFloat(t),i=-1==t.indexOf("%")&&!isNaN(e);return i&&e}function e(){}function i(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0;h>e;e++){var i=u[e];t[i]=0}return t}function n(t){var e=getComputedStyle(t);return e||a("Style returned "+e+". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"),e}function o(){if(!d){d=!0;var e=document.createElement("div");e.style.width="200px",e.style.padding="1px 2px 3px 4px",e.style.borderStyle="solid",e.style.borderWidth="1px 2px 3px 4px",e.style.boxSizing="border-box";var i=document.body||document.documentElement;i.appendChild(e);var o=n(e);s.isBoxSizeOuter=r=200==t(o.width),i.removeChild(e)}}function s(e){if(o(),"string"==typeof e&&(e=document.querySelector(e)),e&&"object"==typeof e&&e.nodeType){var s=n(e);if("none"==s.display)return i();var a={};a.width=e.offsetWidth,a.height=e.offsetHeight;for(var d=a.isBorderBox="border-box"==s.boxSizing,l=0;h>l;l++){var f=u[l],c=s[f],m=parseFloat(c);a[f]=isNaN(m)?0:m}var p=a.paddingLeft+a.paddingRight,y=a.paddingTop+a.paddingBottom,g=a.marginLeft+a.marginRight,v=a.marginTop+a.marginBottom,_=a.borderLeftWidth+a.borderRightWidth,I=a.borderTopWidth+a.borderBottomWidth,z=d&&r,x=t(s.width);x!==!1&&(a.width=x+(z?0:p+_));var S=t(s.height);return S!==!1&&(a.height=S+(z?0:y+I)),a.innerWidth=a.width-(p+_),a.innerHeight=a.height-(y+I),a.outerWidth=a.width+g,a.outerHeight=a.height+v,a}}var r,a="undefined"==typeof console?e:function(t){console.error(t)},u=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],h=u.length,d=!1;return s}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("desandro-matches-selector/matches-selector",e):"object"==typeof module&&module.exports?module.exports=e():t.matchesSelector=e()}(window,function(){"use strict";var t=function(){var t=Element.prototype;if(t.matches)return"matches";if(t.matchesSelector)return"matchesSelector";for(var e=["webkit","moz","ms","o"],i=0;i<e.length;i++){var n=e[i],o=n+"MatchesSelector";if(t[o])return o}}();return function(e,i){return e[t](i)}}),function(t,e){"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["desandro-matches-selector/matches-selector"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("desandro-matches-selector")):t.fizzyUIUtils=e(t,t.matchesSelector)}(window,function(t,e){var i={};i.extend=function(t,e){for(var i in e)t[i]=e[i];return t},i.modulo=function(t,e){return(t%e+e)%e},i.makeArray=function(t){var e=[];if(Array.isArray(t))e=t;else if(t&&"number"==typeof t.length)for(var i=0;i<t.length;i++)e.push(t[i]);else e.push(t);return e},i.removeFrom=function(t,e){var i=t.indexOf(e);-1!=i&&t.splice(i,1)},i.getParent=function(t,i){for(;t!=document.body;)if(t=t.parentNode,e(t,i))return t},i.getQueryElement=function(t){return"string"==typeof t?document.querySelector(t):t},i.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},i.filterFindElements=function(t,n){t=i.makeArray(t);var o=[];return t.forEach(function(t){if(t instanceof HTMLElement){if(!n)return void o.push(t);e(t,n)&&o.push(t);for(var i=t.querySelectorAll(n),s=0;s<i.length;s++)o.push(i[s])}}),o},i.debounceMethod=function(t,e,i){var n=t.prototype[e],o=e+"Timeout";t.prototype[e]=function(){var t=this[o];t&&clearTimeout(t);var e=arguments,s=this;this[o]=setTimeout(function(){n.apply(s,e),delete s[o]},i||100)}},i.docReady=function(t){var e=document.readyState;"complete"==e||"interactive"==e?t():document.addEventListener("DOMContentLoaded",t)},i.toDashed=function(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()};var n=t.console;return i.htmlInit=function(e,o){i.docReady(function(){var s=i.toDashed(o),r="data-"+s,a=document.querySelectorAll("["+r+"]"),u=document.querySelectorAll(".js-"+s),h=i.makeArray(a).concat(i.makeArray(u)),d=r+"-options",l=t.jQuery;h.forEach(function(t){var i,s=t.getAttribute(r)||t.getAttribute(d);try{i=s&&JSON.parse(s)}catch(a){return void(n&&n.error("Error parsing "+r+" on "+t.className+": "+a))}var u=new e(t,i);l&&l.data(t,o,u)})})},i}),function(t,e){"function"==typeof define&&define.amd?define("outlayer/item",["ev-emitter/ev-emitter","get-size/get-size"],e):"object"==typeof module&&module.exports?module.exports=e(require("ev-emitter"),require("get-size")):(t.Outlayer={},t.Outlayer.Item=e(t.EvEmitter,t.getSize))}(window,function(t,e){"use strict";function i(t){for(var e in t)return!1;return e=null,!0}function n(t,e){t&&(this.element=t,this.layout=e,this.position={x:0,y:0},this._create())}function o(t){return t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}var s=document.documentElement.style,r="string"==typeof s.transition?"transition":"WebkitTransition",a="string"==typeof s.transform?"transform":"WebkitTransform",u={WebkitTransition:"webkitTransitionEnd",transition:"transitionend"}[r],h={transform:a,transition:r,transitionDuration:r+"Duration",transitionProperty:r+"Property",transitionDelay:r+"Delay"},d=n.prototype=Object.create(t.prototype);d.constructor=n,d._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},d.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},d.getSize=function(){this.size=e(this.element)},d.css=function(t){var e=this.element.style;for(var i in t){var n=h[i]||i;e[n]=t[i]}},d.getPosition=function(){var t=getComputedStyle(this.element),e=this.layout._getOption("originLeft"),i=this.layout._getOption("originTop"),n=t[e?"left":"right"],o=t[i?"top":"bottom"],s=this.layout.size,r=-1!=n.indexOf("%")?parseFloat(n)/100*s.width:parseInt(n,10),a=-1!=o.indexOf("%")?parseFloat(o)/100*s.height:parseInt(o,10);r=isNaN(r)?0:r,a=isNaN(a)?0:a,r-=e?s.paddingLeft:s.paddingRight,a-=i?s.paddingTop:s.paddingBottom,this.position.x=r,this.position.y=a},d.layoutPosition=function(){var t=this.layout.size,e={},i=this.layout._getOption("originLeft"),n=this.layout._getOption("originTop"),o=i?"paddingLeft":"paddingRight",s=i?"left":"right",r=i?"right":"left",a=this.position.x+t[o];e[s]=this.getXValue(a),e[r]="";var u=n?"paddingTop":"paddingBottom",h=n?"top":"bottom",d=n?"bottom":"top",l=this.position.y+t[u];e[h]=this.getYValue(l),e[d]="",this.css(e),this.emitEvent("layout",[this])},d.getXValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&!e?t/this.layout.size.width*100+"%":t+"px"},d.getYValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&e?t/this.layout.size.height*100+"%":t+"px"},d._transitionTo=function(t,e){this.getPosition();var i=this.position.x,n=this.position.y,o=parseInt(t,10),s=parseInt(e,10),r=o===this.position.x&&s===this.position.y;if(this.setPosition(t,e),r&&!this.isTransitioning)return void this.layoutPosition();var a=t-i,u=e-n,h={};h.transform=this.getTranslate(a,u),this.transition({to:h,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},d.getTranslate=function(t,e){var i=this.layout._getOption("originLeft"),n=this.layout._getOption("originTop");return t=i?t:-t,e=n?e:-e,"translate3d("+t+"px, "+e+"px, 0)"},d.goTo=function(t,e){this.setPosition(t,e),this.layoutPosition()},d.moveTo=d._transitionTo,d.setPosition=function(t,e){this.position.x=parseInt(t,10),this.position.y=parseInt(e,10)},d._nonTransition=function(t){this.css(t.to),t.isCleaning&&this._removeStyles(t.to);for(var e in t.onTransitionEnd)t.onTransitionEnd[e].call(this)},d.transition=function(t){if(!parseFloat(this.layout.options.transitionDuration))return void this._nonTransition(t);var e=this._transn;for(var i in t.onTransitionEnd)e.onEnd[i]=t.onTransitionEnd[i];for(i in t.to)e.ingProperties[i]=!0,t.isCleaning&&(e.clean[i]=!0);if(t.from){this.css(t.from);var n=this.element.offsetHeight;n=null}this.enableTransition(t.to),this.css(t.to),this.isTransitioning=!0};var l="opacity,"+o(a);d.enableTransition=function(){if(!this.isTransitioning){var t=this.layout.options.transitionDuration;t="number"==typeof t?t+"ms":t,this.css({transitionProperty:l,transitionDuration:t,transitionDelay:this.staggerDelay||0}),this.element.addEventListener(u,this,!1)}},d.onwebkitTransitionEnd=function(t){this.ontransitionend(t)},d.onotransitionend=function(t){this.ontransitionend(t)};var f={"-webkit-transform":"transform"};d.ontransitionend=function(t){if(t.target===this.element){var e=this._transn,n=f[t.propertyName]||t.propertyName;if(delete e.ingProperties[n],i(e.ingProperties)&&this.disableTransition(),n in e.clean&&(this.element.style[t.propertyName]="",delete e.clean[n]),n in e.onEnd){var o=e.onEnd[n];o.call(this),delete e.onEnd[n]}this.emitEvent("transitionEnd",[this])}},d.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(u,this,!1),this.isTransitioning=!1},d._removeStyles=function(t){var e={};for(var i in t)e[i]="";this.css(e)};var c={transitionProperty:"",transitionDuration:"",transitionDelay:""};return d.removeTransitionStyles=function(){this.css(c)},d.stagger=function(t){t=isNaN(t)?0:t,this.staggerDelay=t+"ms"},d.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])},d.remove=function(){return r&&parseFloat(this.layout.options.transitionDuration)?(this.once("transitionEnd",function(){this.removeElem()}),void this.hide()):void this.removeElem()},d.reveal=function(){delete this.isHidden,this.css({display:""});var t=this.layout.options,e={},i=this.getHideRevealTransitionEndProperty("visibleStyle");e[i]=this.onRevealTransitionEnd,this.transition({from:t.hiddenStyle,to:t.visibleStyle,isCleaning:!0,onTransitionEnd:e})},d.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")},d.getHideRevealTransitionEndProperty=function(t){var e=this.layout.options[t];if(e.opacity)return"opacity";for(var i in e)return i},d.hide=function(){this.isHidden=!0,this.css({display:""});var t=this.layout.options,e={},i=this.getHideRevealTransitionEndProperty("hiddenStyle");e[i]=this.onHideTransitionEnd,this.transition({from:t.visibleStyle,to:t.hiddenStyle,isCleaning:!0,onTransitionEnd:e})},d.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},d.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},n}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("outlayer/outlayer",["ev-emitter/ev-emitter","get-size/get-size","fizzy-ui-utils/utils","./item"],function(i,n,o,s){return e(t,i,n,o,s)}):"object"==typeof module&&module.exports?module.exports=e(t,require("ev-emitter"),require("get-size"),require("fizzy-ui-utils"),require("./item")):t.Outlayer=e(t,t.EvEmitter,t.getSize,t.fizzyUIUtils,t.Outlayer.Item)}(window,function(t,e,i,n,o){"use strict";function s(t,e){var i=n.getQueryElement(t);if(!i)return void(u&&u.error("Bad element for "+this.constructor.namespace+": "+(i||t)));this.element=i,h&&(this.$element=h(this.element)),this.options=n.extend({},this.constructor.defaults),this.option(e);var o=++l;this.element.outlayerGUID=o,f[o]=this,this._create();var s=this._getOption("initLayout");s&&this.layout()}function r(t){function e(){t.apply(this,arguments)}return e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e}function a(t){if("number"==typeof t)return t;var e=t.match(/(^\d*\.?\d*)(\w*)/),i=e&&e[1],n=e&&e[2];if(!i.length)return 0;i=parseFloat(i);var o=m[n]||1;return i*o}var u=t.console,h=t.jQuery,d=function(){},l=0,f={};s.namespace="outlayer",s.Item=o,s.defaults={containerStyle:{position:"relative"},initLayout:!0,originLeft:!0,originTop:!0,resize:!0,resizeContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}};var c=s.prototype;n.extend(c,e.prototype),c.option=function(t){n.extend(this.options,t)},c._getOption=function(t){var e=this.constructor.compatOptions[t];return e&&void 0!==this.options[e]?this.options[e]:this.options[t]},s.compatOptions={initLayout:"isInitLayout",horizontal:"isHorizontal",layoutInstant:"isLayoutInstant",originLeft:"isOriginLeft",originTop:"isOriginTop",resize:"isResizeBound",resizeContainer:"isResizingContainer"},c._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),n.extend(this.element.style,this.options.containerStyle);var t=this._getOption("resize");t&&this.bindResize()},c.reloadItems=function(){this.items=this._itemize(this.element.children)},c._itemize=function(t){for(var e=this._filterFindItemElements(t),i=this.constructor.Item,n=[],o=0;o<e.length;o++){var s=e[o],r=new i(s,this);n.push(r)}return n},c._filterFindItemElements=function(t){return n.filterFindElements(t,this.options.itemSelector)},c.getItemElements=function(){return this.items.map(function(t){return t.element})},c.layout=function(){this._resetLayout(),this._manageStamps();var t=this._getOption("layoutInstant"),e=void 0!==t?t:!this._isLayoutInited;this.layoutItems(this.items,e),this._isLayoutInited=!0},c._init=c.layout,c._resetLayout=function(){this.getSize()},c.getSize=function(){this.size=i(this.element)},c._getMeasurement=function(t,e){var n,o=this.options[t];o?("string"==typeof o?n=this.element.querySelector(o):o instanceof HTMLElement&&(n=o),this[t]=n?i(n)[e]:o):this[t]=0},c.layoutItems=function(t,e){t=this._getItemsForLayout(t),this._layoutItems(t,e),this._postLayout()},c._getItemsForLayout=function(t){return t.filter(function(t){return!t.isIgnored})},c._layoutItems=function(t,e){if(this._emitCompleteOnItems("layout",t),t&&t.length){var i=[];t.forEach(function(t){var n=this._getItemLayoutPosition(t);n.item=t,n.isInstant=e||t.isLayoutInstant,i.push(n)},this),this._processLayoutQueue(i)}},c._getItemLayoutPosition=function(){return{x:0,y:0}},c._processLayoutQueue=function(t){this.updateStagger(),t.forEach(function(t,e){this._positionItem(t.item,t.x,t.y,t.isInstant,e)},this)},c.updateStagger=function(){var t=this.options.stagger;return null===t||void 0===t?void(this.stagger=0):(this.stagger=a(t),this.stagger)},c._positionItem=function(t,e,i,n,o){n?t.goTo(e,i):(t.stagger(o*this.stagger),t.moveTo(e,i))},c._postLayout=function(){this.resizeContainer()},c.resizeContainer=function(){var t=this._getOption("resizeContainer");if(t){var e=this._getContainerSize();e&&(this._setContainerMeasure(e.width,!0),this._setContainerMeasure(e.height,!1))}},c._getContainerSize=d,c._setContainerMeasure=function(t,e){if(void 0!==t){var i=this.size;i.isBorderBox&&(t+=e?i.paddingLeft+i.paddingRight+i.borderLeftWidth+i.borderRightWidth:i.paddingBottom+i.paddingTop+i.borderTopWidth+i.borderBottomWidth),t=Math.max(t,0),this.element.style[e?"width":"height"]=t+"px"}},c._emitCompleteOnItems=function(t,e){function i(){o.dispatchEvent(t+"Complete",null,[e])}function n(){r++,r==s&&i()}var o=this,s=e.length;if(!e||!s)return void i();var r=0;e.forEach(function(e){e.once(t,n)})},c.dispatchEvent=function(t,e,i){var n=e?[e].concat(i):i;if(this.emitEvent(t,n),h)if(this.$element=this.$element||h(this.element),e){var o=h.Event(e);o.type=t,this.$element.trigger(o,i)}else this.$element.trigger(t,i)},c.ignore=function(t){var e=this.getItem(t);e&&(e.isIgnored=!0)},c.unignore=function(t){var e=this.getItem(t);e&&delete e.isIgnored},c.stamp=function(t){t=this._find(t),t&&(this.stamps=this.stamps.concat(t),t.forEach(this.ignore,this))},c.unstamp=function(t){t=this._find(t),t&&t.forEach(function(t){n.removeFrom(this.stamps,t),this.unignore(t)},this)},c._find=function(t){return t?("string"==typeof t&&(t=this.element.querySelectorAll(t)),t=n.makeArray(t)):void 0},c._manageStamps=function(){this.stamps&&this.stamps.length&&(this._getBoundingRect(),this.stamps.forEach(this._manageStamp,this))},c._getBoundingRect=function(){var t=this.element.getBoundingClientRect(),e=this.size;this._boundingRect={left:t.left+e.paddingLeft+e.borderLeftWidth,top:t.top+e.paddingTop+e.borderTopWidth,right:t.right-(e.paddingRight+e.borderRightWidth),bottom:t.bottom-(e.paddingBottom+e.borderBottomWidth)}},c._manageStamp=d,c._getElementOffset=function(t){var e=t.getBoundingClientRect(),n=this._boundingRect,o=i(t),s={left:e.left-n.left-o.marginLeft,top:e.top-n.top-o.marginTop,right:n.right-e.right-o.marginRight,bottom:n.bottom-e.bottom-o.marginBottom};return s},c.handleEvent=n.handleEvent,c.bindResize=function(){t.addEventListener("resize",this),this.isResizeBound=!0},c.unbindResize=function(){t.removeEventListener("resize",this),this.isResizeBound=!1},c.onresize=function(){this.resize()},n.debounceMethod(s,"onresize",100),c.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},c.needsResizeLayout=function(){var t=i(this.element),e=this.size&&t;return e&&t.innerWidth!==this.size.innerWidth},c.addItems=function(t){var e=this._itemize(t);return e.length&&(this.items=this.items.concat(e)),e},c.appended=function(t){var e=this.addItems(t);e.length&&(this.layoutItems(e,!0),this.reveal(e))},c.prepended=function(t){var e=this._itemize(t);if(e.length){var i=this.items.slice(0);this.items=e.concat(i),this._resetLayout(),this._manageStamps(),this.layoutItems(e,!0),this.reveal(e),this.layoutItems(i)}},c.reveal=function(t){if(this._emitCompleteOnItems("reveal",t),t&&t.length){var e=this.updateStagger();t.forEach(function(t,i){t.stagger(i*e),t.reveal()})}},c.hide=function(t){if(this._emitCompleteOnItems("hide",t),t&&t.length){var e=this.updateStagger();t.forEach(function(t,i){t.stagger(i*e),t.hide()})}},c.revealItemElements=function(t){var e=this.getItems(t);this.reveal(e)},c.hideItemElements=function(t){var e=this.getItems(t);this.hide(e)},c.getItem=function(t){for(var e=0;e<this.items.length;e++){var i=this.items[e];if(i.element==t)return i}},c.getItems=function(t){t=n.makeArray(t);var e=[];return t.forEach(function(t){var i=this.getItem(t);i&&e.push(i)},this),e},c.remove=function(t){var e=this.getItems(t);this._emitCompleteOnItems("remove",e),e&&e.length&&e.forEach(function(t){t.remove(),n.removeFrom(this.items,t)},this)},c.destroy=function(){var t=this.element.style;t.height="",t.position="",t.width="",this.items.forEach(function(t){t.destroy()}),this.unbindResize();var e=this.element.outlayerGUID;delete f[e],delete this.element.outlayerGUID,h&&h.removeData(this.element,this.constructor.namespace)},s.data=function(t){t=n.getQueryElement(t);var e=t&&t.outlayerGUID;return e&&f[e]},s.create=function(t,e){var i=r(s);return i.defaults=n.extend({},s.defaults),n.extend(i.defaults,e),i.compatOptions=n.extend({},s.compatOptions),i.namespace=t,i.data=s.data,i.Item=r(o),n.htmlInit(i,t),h&&h.bridget&&h.bridget(t,i),i};var m={ms:1,s:1e3};return s.Item=o,s}),function(t,e){"function"==typeof define&&define.amd?define("isotope/js/item",["outlayer/outlayer"],e):"object"==typeof module&&module.exports?module.exports=e(require("outlayer")):(t.Isotope=t.Isotope||{},t.Isotope.Item=e(t.Outlayer))}(window,function(t){"use strict";function e(){t.Item.apply(this,arguments)}var i=e.prototype=Object.create(t.Item.prototype),n=i._create;i._create=function(){this.id=this.layout.itemGUID++,n.call(this),this.sortData={}},i.updateSortData=function(){if(!this.isIgnored){this.sortData.id=this.id,this.sortData["original-order"]=this.id,this.sortData.random=Math.random();var t=this.layout.options.getSortData,e=this.layout._sorters;for(var i in t){var n=e[i];this.sortData[i]=n(this.element,this)}}};var o=i.destroy;return i.destroy=function(){o.apply(this,arguments),this.css({display:""})},e}),function(t,e){"function"==typeof define&&define.amd?define("isotope/js/layout-mode",["get-size/get-size","outlayer/outlayer"],e):"object"==typeof module&&module.exports?module.exports=e(require("get-size"),require("outlayer")):(t.Isotope=t.Isotope||{},t.Isotope.LayoutMode=e(t.getSize,t.Outlayer))}(window,function(t,e){"use strict";function i(t){this.isotope=t,t&&(this.options=t.options[this.namespace],this.element=t.element,this.items=t.filteredItems,this.size=t.size)}var n=i.prototype,o=["_resetLayout","_getItemLayoutPosition","_manageStamp","_getContainerSize","_getElementOffset","needsResizeLayout","_getOption"];return o.forEach(function(t){n[t]=function(){return e.prototype[t].apply(this.isotope,arguments)}}),n.needsVerticalResizeLayout=function(){var e=t(this.isotope.element),i=this.isotope.size&&e;return i&&e.innerHeight!=this.isotope.size.innerHeight},n._getMeasurement=function(){this.isotope._getMeasurement.apply(this,arguments)},n.getColumnWidth=function(){this.getSegmentSize("column","Width")},n.getRowHeight=function(){this.getSegmentSize("row","Height")},n.getSegmentSize=function(t,e){var i=t+e,n="outer"+e;if(this._getMeasurement(i,n),!this[i]){var o=this.getFirstItemSize();this[i]=o&&o[n]||this.isotope.size["inner"+e]}},n.getFirstItemSize=function(){var e=this.isotope.filteredItems[0];return e&&e.element&&t(e.element)},n.layout=function(){this.isotope.layout.apply(this.isotope,arguments)},n.getSize=function(){this.isotope.getSize(),this.size=this.isotope.size},i.modes={},i.create=function(t,e){function o(){i.apply(this,arguments)}return o.prototype=Object.create(n),o.prototype.constructor=o,e&&(o.options=e),o.prototype.namespace=t,i.modes[t]=o,o},i}),function(t,e){"function"==typeof define&&define.amd?define("masonry/masonry",["outlayer/outlayer","get-size/get-size"],e):"object"==typeof module&&module.exports?module.exports=e(require("outlayer"),require("get-size")):t.Masonry=e(t.Outlayer,t.getSize)}(window,function(t,e){var i=t.create("masonry");return i.compatOptions.fitWidth="isFitWidth",i.prototype._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns(),this.colYs=[];for(var t=0;t<this.cols;t++)this.colYs.push(0);this.maxY=0},i.prototype.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var t=this.items[0],i=t&&t.element;this.columnWidth=i&&e(i).outerWidth||this.containerWidth}var n=this.columnWidth+=this.gutter,o=this.containerWidth+this.gutter,s=o/n,r=n-o%n,a=r&&1>r?"round":"floor";s=Math[a](s),this.cols=Math.max(s,1)},i.prototype.getContainerWidth=function(){var t=this._getOption("fitWidth"),i=t?this.element.parentNode:this.element,n=e(i);this.containerWidth=n&&n.innerWidth},i.prototype._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth%this.columnWidth,i=e&&1>e?"round":"ceil",n=Math[i](t.size.outerWidth/this.columnWidth);n=Math.min(n,this.cols);for(var o=this._getColGroup(n),s=Math.min.apply(Math,o),r=o.indexOf(s),a={x:this.columnWidth*r,y:s},u=s+t.size.outerHeight,h=this.cols+1-o.length,d=0;h>d;d++)this.colYs[r+d]=u;return a},i.prototype._getColGroup=function(t){if(2>t)return this.colYs;for(var e=[],i=this.cols+1-t,n=0;i>n;n++){var o=this.colYs.slice(n,n+t);e[n]=Math.max.apply(Math,o)}return e},i.prototype._manageStamp=function(t){var i=e(t),n=this._getElementOffset(t),o=this._getOption("originLeft"),s=o?n.left:n.right,r=s+i.outerWidth,a=Math.floor(s/this.columnWidth);a=Math.max(0,a);var u=Math.floor(r/this.columnWidth);u-=r%this.columnWidth?0:1,u=Math.min(this.cols-1,u);for(var h=this._getOption("originTop"),d=(h?n.top:n.bottom)+i.outerHeight,l=a;u>=l;l++)this.colYs[l]=Math.max(d,this.colYs[l])},i.prototype._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var t={height:this.maxY};return this._getOption("fitWidth")&&(t.width=this._getContainerFitWidth()),t},i.prototype._getContainerFitWidth=function(){for(var t=0,e=this.cols;--e&&0===this.colYs[e];)t++;return(this.cols-t)*this.columnWidth-this.gutter},i.prototype.needsResizeLayout=function(){var t=this.containerWidth;return this.getContainerWidth(),t!=this.containerWidth},i}),function(t,e){"function"==typeof define&&define.amd?define("isotope/js/layout-modes/masonry",["../layout-mode","masonry/masonry"],e):"object"==typeof module&&module.exports?module.exports=e(require("../layout-mode"),require("masonry-layout")):e(t.Isotope.LayoutMode,t.Masonry)}(window,function(t,e){"use strict";var i=t.create("masonry"),n=i.prototype,o={_getElementOffset:!0,layout:!0,_getMeasurement:!0};for(var s in e.prototype)o[s]||(n[s]=e.prototype[s]);var r=n.measureColumns;n.measureColumns=function(){this.items=this.isotope.filteredItems,r.call(this)};var a=n._getOption;return n._getOption=function(t){return"fitWidth"==t?void 0!==this.options.isFitWidth?this.options.isFitWidth:this.options.fitWidth:a.apply(this.isotope,arguments)},i}),function(t,e){"function"==typeof define&&define.amd?define("isotope/js/layout-modes/fit-rows",["../layout-mode"],e):"object"==typeof exports?module.exports=e(require("../layout-mode")):e(t.Isotope.LayoutMode)}(window,function(t){"use strict";var e=t.create("fitRows"),i=e.prototype;return i._resetLayout=function(){this.x=0,this.y=0,this.maxY=0,this._getMeasurement("gutter","outerWidth")},i._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth+this.gutter,i=this.isotope.size.innerWidth+this.gutter;0!==this.x&&e+this.x>i&&(this.x=0,this.y=this.maxY);var n={x:this.x,y:this.y};return this.maxY=Math.max(this.maxY,this.y+t.size.outerHeight),this.x+=e,n},i._getContainerSize=function(){return{height:this.maxY}},e}),function(t,e){"function"==typeof define&&define.amd?define("isotope/js/layout-modes/vertical",["../layout-mode"],e):"object"==typeof module&&module.exports?module.exports=e(require("../layout-mode")):e(t.Isotope.LayoutMode)}(window,function(t){"use strict";var e=t.create("vertical",{horizontalAlignment:0}),i=e.prototype;return i._resetLayout=function(){this.y=0},i._getItemLayoutPosition=function(t){t.getSize();var e=(this.isotope.size.innerWidth-t.size.outerWidth)*this.options.horizontalAlignment,i=this.y;return this.y+=t.size.outerHeight,{x:e,y:i}},i._getContainerSize=function(){return{height:this.y}},e}),function(t,e){"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size","desandro-matches-selector/matches-selector","fizzy-ui-utils/utils","isotope/js/item","isotope/js/layout-mode","isotope/js/layout-modes/masonry","isotope/js/layout-modes/fit-rows","isotope/js/layout-modes/vertical"],function(i,n,o,s,r,a){return e(t,i,n,o,s,r,a)}):"object"==typeof module&&module.exports?module.exports=e(t,require("outlayer"),require("get-size"),require("desandro-matches-selector"),require("fizzy-ui-utils"),require("isotope/js/item"),require("isotope/js/layout-mode"),require("isotope/js/layout-modes/masonry"),require("isotope/js/layout-modes/fit-rows"),require("isotope/js/layout-modes/vertical")):t.Isotope=e(t,t.Outlayer,t.getSize,t.matchesSelector,t.fizzyUIUtils,t.Isotope.Item,t.Isotope.LayoutMode)}(window,function(t,e,i,n,o,s,r){function a(t,e){return function(i,n){for(var o=0;o<t.length;o++){var s=t[o],r=i.sortData[s],a=n.sortData[s];if(r>a||a>r){var u=void 0!==e[s]?e[s]:e,h=u?1:-1;return(r>a?1:-1)*h}}return 0}}var u=t.jQuery,h=String.prototype.trim?function(t){return t.trim()}:function(t){return t.replace(/^\s+|\s+$/g,"")},d=e.create("isotope",{layoutMode:"masonry",isJQueryFiltering:!0,sortAscending:!0});d.Item=s,d.LayoutMode=r;var l=d.prototype;l._create=function(){this.itemGUID=0,this._sorters={},this._getSorters(),e.prototype._create.call(this),this.modes={},this.filteredItems=this.items,this.sortHistory=["original-order"];for(var t in r.modes)this._initLayoutMode(t)},l.reloadItems=function(){this.itemGUID=0,e.prototype.reloadItems.call(this)},l._itemize=function(){for(var t=e.prototype._itemize.apply(this,arguments),i=0;i<t.length;i++){var n=t[i];n.id=this.itemGUID++}return this._updateItemsSortData(t),t},l._initLayoutMode=function(t){var e=r.modes[t],i=this.options[t]||{};this.options[t]=e.options?o.extend(e.options,i):i,this.modes[t]=new e(this)},l.layout=function(){return!this._isLayoutInited&&this._getOption("initLayout")?void this.arrange():void this._layout()},l._layout=function(){var t=this._getIsInstant();this._resetLayout(),this._manageStamps(),this.layoutItems(this.filteredItems,t),this._isLayoutInited=!0},l.arrange=function(t){this.option(t),this._getIsInstant();var e=this._filter(this.items);this.filteredItems=e.matches,this._bindArrangeComplete(),this._isInstant?this._noTransition(this._hideReveal,[e]):this._hideReveal(e),this._sort(),this._layout()},l._init=l.arrange,l._hideReveal=function(t){this.reveal(t.needReveal),this.hide(t.needHide)},l._getIsInstant=function(){var t=this._getOption("layoutInstant"),e=void 0!==t?t:!this._isLayoutInited;return this._isInstant=e,e},l._bindArrangeComplete=function(){function t(){e&&i&&n&&o.dispatchEvent("arrangeComplete",null,[o.filteredItems])}var e,i,n,o=this;this.once("layoutComplete",function(){e=!0,t()}),this.once("hideComplete",function(){i=!0,t()}),this.once("revealComplete",function(){n=!0,t()})},l._filter=function(t){var e=this.options.filter;e=e||"*";for(var i=[],n=[],o=[],s=this._getFilterTest(e),r=0;r<t.length;r++){var a=t[r];if(!a.isIgnored){var u=s(a);u&&i.push(a),u&&a.isHidden?n.push(a):u||a.isHidden||o.push(a)}}return{matches:i,needReveal:n,needHide:o}},l._getFilterTest=function(t){return u&&this.options.isJQueryFiltering?function(e){return u(e.element).is(t)}:"function"==typeof t?function(e){return t(e.element)}:function(e){return n(e.element,t)}},l.updateSortData=function(t){var e;t?(t=o.makeArray(t),e=this.getItems(t)):e=this.items,this._getSorters(),this._updateItemsSortData(e)},l._getSorters=function(){var t=this.options.getSortData;for(var e in t){var i=t[e];this._sorters[e]=f(i)}},l._updateItemsSortData=function(t){for(var e=t&&t.length,i=0;e&&e>i;i++){var n=t[i];n.updateSortData()}};var f=function(){function t(t){if("string"!=typeof t)return t;var i=h(t).split(" "),n=i[0],o=n.match(/^\[(.+)\]$/),s=o&&o[1],r=e(s,n),a=d.sortDataParsers[i[1]];
return t=a?function(t){return t&&a(r(t))}:function(t){return t&&r(t)}}function e(t,e){return t?function(e){return e.getAttribute(t)}:function(t){var i=t.querySelector(e);return i&&i.textContent}}return t}();d.sortDataParsers={parseInt:function(t){return parseInt(t,10)},parseFloat:function(t){return parseFloat(t)}},l._sort=function(){var t=this.options.sortBy;if(t){var e=[].concat.apply(t,this.sortHistory),i=a(e,this.options.sortAscending);this.filteredItems.sort(i),t!=this.sortHistory[0]&&this.sortHistory.unshift(t)}},l._mode=function(){var t=this.options.layoutMode,e=this.modes[t];if(!e)throw new Error("No layout mode: "+t);return e.options=this.options[t],e},l._resetLayout=function(){e.prototype._resetLayout.call(this),this._mode()._resetLayout()},l._getItemLayoutPosition=function(t){return this._mode()._getItemLayoutPosition(t)},l._manageStamp=function(t){this._mode()._manageStamp(t)},l._getContainerSize=function(){return this._mode()._getContainerSize()},l.needsResizeLayout=function(){return this._mode().needsResizeLayout()},l.appended=function(t){var e=this.addItems(t);if(e.length){var i=this._filterRevealAdded(e);this.filteredItems=this.filteredItems.concat(i)}},l.prepended=function(t){var e=this._itemize(t);if(e.length){this._resetLayout(),this._manageStamps();var i=this._filterRevealAdded(e);this.layoutItems(this.filteredItems),this.filteredItems=i.concat(this.filteredItems),this.items=e.concat(this.items)}},l._filterRevealAdded=function(t){var e=this._filter(t);return this.hide(e.needHide),this.reveal(e.matches),this.layoutItems(e.matches,!0),e.matches},l.insert=function(t){var e=this.addItems(t);if(e.length){var i,n,o=e.length;for(i=0;o>i;i++)n=e[i],this.element.appendChild(n.element);var s=this._filter(e).matches;for(i=0;o>i;i++)e[i].isLayoutInstant=!0;for(this.arrange(),i=0;o>i;i++)delete e[i].isLayoutInstant;this.reveal(s)}};var c=l.remove;return l.remove=function(t){t=o.makeArray(t);var e=this.getItems(t);c.call(this,t);for(var i=e&&e.length,n=0;i&&i>n;n++){var s=e[n];o.removeFrom(this.filteredItems,s)}},l.shuffle=function(){for(var t=0;t<this.items.length;t++){var e=this.items[t];e.sortData.random=Math.random()}this.options.sortBy="random",this._sort(),this._layout()},l._noTransition=function(t,e){var i=this.options.transitionDuration;this.options.transitionDuration=0;var n=t.apply(this,e);return this.options.transitionDuration=i,n},l.getFilteredItemElements=function(){return this.filteredItems.map(function(t){return t.element})},d});

/*! Magnific Popup - v1.0.0 - 2015-09-17
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2015 Dmitry Semenov; */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):window.jQuery||window.Zepto)}(function(a){var b,c,d,e,f,g,h="Close",i="BeforeClose",j="AfterClose",k="BeforeAppend",l="MarkupParse",m="Open",n="Change",o="mfp",p="."+o,q="mfp-ready",r="mfp-removing",s="mfp-prevent-close",t=function(){},u=!!window.jQuery,v=a(window),w=function(a,c){b.ev.on(o+a+p,c)},x=function(b,c,d,e){var f=document.createElement("div");return f.className="mfp-"+b,d&&(f.innerHTML=d),e?c&&c.appendChild(f):(f=a(f),c&&f.appendTo(c)),f},y=function(c,d){b.ev.triggerHandler(o+c,d),b.st.callbacks&&(c=c.charAt(0).toLowerCase()+c.slice(1),b.st.callbacks[c]&&b.st.callbacks[c].apply(b,a.isArray(d)?d:[d]))},z=function(c){return c===g&&b.currTemplate.closeBtn||(b.currTemplate.closeBtn=a(b.st.closeMarkup.replace("%title%",b.st.tClose)),g=c),b.currTemplate.closeBtn},A=function(){a.magnificPopup.instance||(b=new t,b.init(),a.magnificPopup.instance=b)},B=function(){var a=document.createElement("p").style,b=["ms","O","Moz","Webkit"];if(void 0!==a.transition)return!0;for(;b.length;)if(b.pop()+"Transition"in a)return!0;return!1};t.prototype={constructor:t,init:function(){var c=navigator.appVersion;b.isIE7=-1!==c.indexOf("MSIE 7."),b.isIE8=-1!==c.indexOf("MSIE 8."),b.isLowIE=b.isIE7||b.isIE8,b.isAndroid=/android/gi.test(c),b.isIOS=/iphone|ipad|ipod/gi.test(c),b.supportsTransition=B(),b.probablyMobile=b.isAndroid||b.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),d=a(document),b.popupsCache={}},open:function(c){var e;if(c.isObj===!1){b.items=c.items.toArray(),b.index=0;var g,h=c.items;for(e=0;e<h.length;e++)if(g=h[e],g.parsed&&(g=g.el[0]),g===c.el[0]){b.index=e;break}}else b.items=a.isArray(c.items)?c.items:[c.items],b.index=c.index||0;if(b.isOpen)return void b.updateItemHTML();b.types=[],f="",c.mainEl&&c.mainEl.length?b.ev=c.mainEl.eq(0):b.ev=d,c.key?(b.popupsCache[c.key]||(b.popupsCache[c.key]={}),b.currTemplate=b.popupsCache[c.key]):b.currTemplate={},b.st=a.extend(!0,{},a.magnificPopup.defaults,c),b.fixedContentPos="auto"===b.st.fixedContentPos?!b.probablyMobile:b.st.fixedContentPos,b.st.modal&&(b.st.closeOnContentClick=!1,b.st.closeOnBgClick=!1,b.st.showCloseBtn=!1,b.st.enableEscapeKey=!1),b.bgOverlay||(b.bgOverlay=x("bg").on("click"+p,function(){b.close()}),b.wrap=x("wrap").attr("tabindex",-1).on("click"+p,function(a){b._checkIfClose(a.target)&&b.close()}),b.container=x("container",b.wrap)),b.contentContainer=x("content"),b.st.preloader&&(b.preloader=x("preloader",b.container,b.st.tLoading));var i=a.magnificPopup.modules;for(e=0;e<i.length;e++){var j=i[e];j=j.charAt(0).toUpperCase()+j.slice(1),b["init"+j].call(b)}y("BeforeOpen"),b.st.showCloseBtn&&(b.st.closeBtnInside?(w(l,function(a,b,c,d){c.close_replaceWith=z(d.type)}),f+=" mfp-close-btn-in"):b.wrap.append(z())),b.st.alignTop&&(f+=" mfp-align-top"),b.fixedContentPos?b.wrap.css({overflow:b.st.overflowY,overflowX:"hidden",overflowY:b.st.overflowY}):b.wrap.css({top:v.scrollTop(),position:"absolute"}),(b.st.fixedBgPos===!1||"auto"===b.st.fixedBgPos&&!b.fixedContentPos)&&b.bgOverlay.css({height:d.height(),position:"absolute"}),b.st.enableEscapeKey&&d.on("keyup"+p,function(a){27===a.keyCode&&b.close()}),v.on("resize"+p,function(){b.updateSize()}),b.st.closeOnContentClick||(f+=" mfp-auto-cursor"),f&&b.wrap.addClass(f);var k=b.wH=v.height(),n={};if(b.fixedContentPos&&b._hasScrollBar(k)){var o=b._getScrollbarSize();o&&(n.marginRight=o)}b.fixedContentPos&&(b.isIE7?a("body, html").css("overflow","hidden"):n.overflow="hidden");var r=b.st.mainClass;return b.isIE7&&(r+=" mfp-ie7"),r&&b._addClassToMFP(r),b.updateItemHTML(),y("BuildControls"),a("html").css(n),b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo||a(document.body)),b._lastFocusedEl=document.activeElement,setTimeout(function(){b.content?(b._addClassToMFP(q),b._setFocus()):b.bgOverlay.addClass(q),d.on("focusin"+p,b._onFocusIn)},16),b.isOpen=!0,b.updateSize(k),y(m),c},close:function(){b.isOpen&&(y(i),b.isOpen=!1,b.st.removalDelay&&!b.isLowIE&&b.supportsTransition?(b._addClassToMFP(r),setTimeout(function(){b._close()},b.st.removalDelay)):b._close())},_close:function(){y(h);var c=r+" "+q+" ";if(b.bgOverlay.detach(),b.wrap.detach(),b.container.empty(),b.st.mainClass&&(c+=b.st.mainClass+" "),b._removeClassFromMFP(c),b.fixedContentPos){var e={marginRight:""};b.isIE7?a("body, html").css("overflow",""):e.overflow="",a("html").css(e)}d.off("keyup"+p+" focusin"+p),b.ev.off(p),b.wrap.attr("class","mfp-wrap").removeAttr("style"),b.bgOverlay.attr("class","mfp-bg"),b.container.attr("class","mfp-container"),!b.st.showCloseBtn||b.st.closeBtnInside&&b.currTemplate[b.currItem.type]!==!0||b.currTemplate.closeBtn&&b.currTemplate.closeBtn.detach(),b._lastFocusedEl&&a(b._lastFocusedEl).focus(),b.currItem=null,b.content=null,b.currTemplate=null,b.prevHeight=0,y(j)},updateSize:function(a){if(b.isIOS){var c=document.documentElement.clientWidth/window.innerWidth,d=window.innerHeight*c;b.wrap.css("height",d),b.wH=d}else b.wH=a||v.height();b.fixedContentPos||b.wrap.css("height",b.wH),y("Resize")},updateItemHTML:function(){var c=b.items[b.index];b.contentContainer.detach(),b.content&&b.content.detach(),c.parsed||(c=b.parseEl(b.index));var d=c.type;if(y("BeforeChange",[b.currItem?b.currItem.type:"",d]),b.currItem=c,!b.currTemplate[d]){var f=b.st[d]?b.st[d].markup:!1;y("FirstMarkupParse",f),f?b.currTemplate[d]=a(f):b.currTemplate[d]=!0}e&&e!==c.type&&b.container.removeClass("mfp-"+e+"-holder");var g=b["get"+d.charAt(0).toUpperCase()+d.slice(1)](c,b.currTemplate[d]);b.appendContent(g,d),c.preloaded=!0,y(n,c),e=c.type,b.container.prepend(b.contentContainer),y("AfterChange")},appendContent:function(a,c){b.content=a,a?b.st.showCloseBtn&&b.st.closeBtnInside&&b.currTemplate[c]===!0?b.content.find(".mfp-close").length||b.content.append(z()):b.content=a:b.content="",y(k),b.container.addClass("mfp-"+c+"-holder"),b.contentContainer.append(b.content)},parseEl:function(c){var d,e=b.items[c];if(e.tagName?e={el:a(e)}:(d=e.type,e={data:e,src:e.src}),e.el){for(var f=b.types,g=0;g<f.length;g++)if(e.el.hasClass("mfp-"+f[g])){d=f[g];break}e.src=e.el.attr("data-mfp-src"),e.src||(e.src=e.el.attr("href"))}return e.type=d||b.st.type||"inline",e.index=c,e.parsed=!0,b.items[c]=e,y("ElementParse",e),b.items[c]},addGroup:function(a,c){var d=function(d){d.mfpEl=this,b._openClick(d,a,c)};c||(c={});var e="click.magnificPopup";c.mainEl=a,c.items?(c.isObj=!0,a.off(e).on(e,d)):(c.isObj=!1,c.delegate?a.off(e).on(e,c.delegate,d):(c.items=a,a.off(e).on(e,d)))},_openClick:function(c,d,e){var f=void 0!==e.midClick?e.midClick:a.magnificPopup.defaults.midClick;if(f||!(2===c.which||c.ctrlKey||c.metaKey||c.altKey||c.shiftKey)){var g=void 0!==e.disableOn?e.disableOn:a.magnificPopup.defaults.disableOn;if(g)if(a.isFunction(g)){if(!g.call(b))return!0}else if(v.width()<g)return!0;c.type&&(c.preventDefault(),b.isOpen&&c.stopPropagation()),e.el=a(c.mfpEl),e.delegate&&(e.items=d.find(e.delegate)),b.open(e)}},updateStatus:function(a,d){if(b.preloader){c!==a&&b.container.removeClass("mfp-s-"+c),d||"loading"!==a||(d=b.st.tLoading);var e={status:a,text:d};y("UpdateStatus",e),a=e.status,d=e.text,b.preloader.html(d),b.preloader.find("a").on("click",function(a){a.stopImmediatePropagation()}),b.container.addClass("mfp-s-"+a),c=a}},_checkIfClose:function(c){if(!a(c).hasClass(s)){var d=b.st.closeOnContentClick,e=b.st.closeOnBgClick;if(d&&e)return!0;if(!b.content||a(c).hasClass("mfp-close")||b.preloader&&c===b.preloader[0])return!0;if(c===b.content[0]||a.contains(b.content[0],c)){if(d)return!0}else if(e&&a.contains(document,c))return!0;return!1}},_addClassToMFP:function(a){b.bgOverlay.addClass(a),b.wrap.addClass(a)},_removeClassFromMFP:function(a){this.bgOverlay.removeClass(a),b.wrap.removeClass(a)},_hasScrollBar:function(a){return(b.isIE7?d.height():document.body.scrollHeight)>(a||v.height())},_setFocus:function(){(b.st.focus?b.content.find(b.st.focus).eq(0):b.wrap).focus()},_onFocusIn:function(c){return c.target===b.wrap[0]||a.contains(b.wrap[0],c.target)?void 0:(b._setFocus(),!1)},_parseMarkup:function(b,c,d){var e;d.data&&(c=a.extend(d.data,c)),y(l,[b,c,d]),a.each(c,function(a,c){if(void 0===c||c===!1)return!0;if(e=a.split("_"),e.length>1){var d=b.find(p+"-"+e[0]);if(d.length>0){var f=e[1];"replaceWith"===f?d[0]!==c[0]&&d.replaceWith(c):"img"===f?d.is("img")?d.attr("src",c):d.replaceWith('<img src="'+c+'" class="'+d.attr("class")+'" />'):d.attr(e[1],c)}}else b.find(p+"-"+a).html(c)})},_getScrollbarSize:function(){if(void 0===b.scrollbarSize){var a=document.createElement("div");a.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(a),b.scrollbarSize=a.offsetWidth-a.clientWidth,document.body.removeChild(a)}return b.scrollbarSize}},a.magnificPopup={instance:null,proto:t.prototype,modules:[],open:function(b,c){return A(),b=b?a.extend(!0,{},b):{},b.isObj=!0,b.index=c||0,this.instance.open(b)},close:function(){return a.magnificPopup.instance&&a.magnificPopup.instance.close()},registerModule:function(b,c){c.options&&(a.magnificPopup.defaults[b]=c.options),a.extend(this.proto,c.proto),this.modules.push(b)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&#215;</button>',tClose:"Close (Esc)",tLoading:"Loading..."}},a.fn.magnificPopup=function(c){A();var d=a(this);if("string"==typeof c)if("open"===c){var e,f=u?d.data("magnificPopup"):d[0].magnificPopup,g=parseInt(arguments[1],10)||0;f.items?e=f.items[g]:(e=d,f.delegate&&(e=e.find(f.delegate)),e=e.eq(g)),b._openClick({mfpEl:e},d,f)}else b.isOpen&&b[c].apply(b,Array.prototype.slice.call(arguments,1));else c=a.extend(!0,{},c),u?d.data("magnificPopup",c):d[0].magnificPopup=c,b.addGroup(d,c);return d};var C,D,E,F="inline",G=function(){E&&(D.after(E.addClass(C)).detach(),E=null)};a.magnificPopup.registerModule(F,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){b.types.push(F),w(h+"."+F,function(){G()})},getInline:function(c,d){if(G(),c.src){var e=b.st.inline,f=a(c.src);if(f.length){var g=f[0].parentNode;g&&g.tagName&&(D||(C=e.hiddenClass,D=x(C),C="mfp-"+C),E=f.after(D).detach().removeClass(C)),b.updateStatus("ready")}else b.updateStatus("error",e.tNotFound),f=a("<div>");return c.inlineElement=f,f}return b.updateStatus("ready"),b._parseMarkup(d,{},c),d}}});var H,I="ajax",J=function(){H&&a(document.body).removeClass(H)},K=function(){J(),b.req&&b.req.abort()};a.magnificPopup.registerModule(I,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){b.types.push(I),H=b.st.ajax.cursor,w(h+"."+I,K),w("BeforeChange."+I,K)},getAjax:function(c){H&&a(document.body).addClass(H),b.updateStatus("loading");var d=a.extend({url:c.src,success:function(d,e,f){var g={data:d,xhr:f};y("ParseAjax",g),b.appendContent(a(g.data),I),c.finished=!0,J(),b._setFocus(),setTimeout(function(){b.wrap.addClass(q)},16),b.updateStatus("ready"),y("AjaxContentAdded")},error:function(){J(),c.finished=c.loadError=!0,b.updateStatus("error",b.st.ajax.tError.replace("%url%",c.src))}},b.st.ajax.settings);return b.req=a.ajax(d),""}}});var L,M=function(c){if(c.data&&void 0!==c.data.title)return c.data.title;var d=b.st.image.titleSrc;if(d){if(a.isFunction(d))return d.call(b,c);if(c.el)return c.el.attr(d)||""}return""};a.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var c=b.st.image,d=".image";b.types.push("image"),w(m+d,function(){"image"===b.currItem.type&&c.cursor&&a(document.body).addClass(c.cursor)}),w(h+d,function(){c.cursor&&a(document.body).removeClass(c.cursor),v.off("resize"+p)}),w("Resize"+d,b.resizeImage),b.isLowIE&&w("AfterChange",b.resizeImage)},resizeImage:function(){var a=b.currItem;if(a&&a.img&&b.st.image.verticalFit){var c=0;b.isLowIE&&(c=parseInt(a.img.css("padding-top"),10)+parseInt(a.img.css("padding-bottom"),10)),a.img.css("max-height",b.wH-c)}},_onImageHasSize:function(a){a.img&&(a.hasSize=!0,L&&clearInterval(L),a.isCheckingImgSize=!1,y("ImageHasSize",a),a.imgHidden&&(b.content&&b.content.removeClass("mfp-loading"),a.imgHidden=!1))},findImageSize:function(a){var c=0,d=a.img[0],e=function(f){L&&clearInterval(L),L=setInterval(function(){return d.naturalWidth>0?void b._onImageHasSize(a):(c>200&&clearInterval(L),c++,void(3===c?e(10):40===c?e(50):100===c&&e(500)))},f)};e(1)},getImage:function(c,d){var e=0,f=function(){c&&(c.img[0].complete?(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("ready")),c.hasSize=!0,c.loaded=!0,y("ImageLoadComplete")):(e++,200>e?setTimeout(f,100):g()))},g=function(){c&&(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("error",h.tError.replace("%url%",c.src))),c.hasSize=!0,c.loaded=!0,c.loadError=!0)},h=b.st.image,i=d.find(".mfp-img");if(i.length){var j=document.createElement("img");j.className="mfp-img",c.el&&c.el.find("img").length&&(j.alt=c.el.find("img").attr("alt")),c.img=a(j).on("load.mfploader",f).on("error.mfploader",g),j.src=c.src,i.is("img")&&(c.img=c.img.clone()),j=c.img[0],j.naturalWidth>0?c.hasSize=!0:j.width||(c.hasSize=!1)}return b._parseMarkup(d,{title:M(c),img_replaceWith:c.img},c),b.resizeImage(),c.hasSize?(L&&clearInterval(L),c.loadError?(d.addClass("mfp-loading"),b.updateStatus("error",h.tError.replace("%url%",c.src))):(d.removeClass("mfp-loading"),b.updateStatus("ready")),d):(b.updateStatus("loading"),c.loading=!0,c.hasSize||(c.imgHidden=!0,d.addClass("mfp-loading"),b.findImageSize(c)),d)}}});var N,O=function(){return void 0===N&&(N=void 0!==document.createElement("p").style.MozTransform),N};a.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(a){return a.is("img")?a:a.find("img")}},proto:{initZoom:function(){var a,c=b.st.zoom,d=".zoom";if(c.enabled&&b.supportsTransition){var e,f,g=c.duration,j=function(a){var b=a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),d="all "+c.duration/1e3+"s "+c.easing,e={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},f="transition";return e["-webkit-"+f]=e["-moz-"+f]=e["-o-"+f]=e[f]=d,b.css(e),b},k=function(){b.content.css("visibility","visible")};w("BuildControls"+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.content.css("visibility","hidden"),a=b._getItemToZoom(),!a)return void k();f=j(a),f.css(b._getOffset()),b.wrap.append(f),e=setTimeout(function(){f.css(b._getOffset(!0)),e=setTimeout(function(){k(),setTimeout(function(){f.remove(),a=f=null,y("ZoomAnimationEnded")},16)},g)},16)}}),w(i+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.st.removalDelay=g,!a){if(a=b._getItemToZoom(),!a)return;f=j(a)}f.css(b._getOffset(!0)),b.wrap.append(f),b.content.css("visibility","hidden"),setTimeout(function(){f.css(b._getOffset())},16)}}),w(h+d,function(){b._allowZoom()&&(k(),f&&f.remove(),a=null)})}},_allowZoom:function(){return"image"===b.currItem.type},_getItemToZoom:function(){return b.currItem.hasSize?b.currItem.img:!1},_getOffset:function(c){var d;d=c?b.currItem.img:b.st.zoom.opener(b.currItem.el||b.currItem);var e=d.offset(),f=parseInt(d.css("padding-top"),10),g=parseInt(d.css("padding-bottom"),10);e.top-=a(window).scrollTop()-f;var h={width:d.width(),height:(u?d.innerHeight():d[0].offsetHeight)-g-f};return O()?h["-moz-transform"]=h.transform="translate("+e.left+"px,"+e.top+"px)":(h.left=e.left,h.top=e.top),h}}});var P="iframe",Q="//about:blank",R=function(a){if(b.currTemplate[P]){var c=b.currTemplate[P].find("iframe");c.length&&(a||(c[0].src=Q),b.isIE8&&c.css("display",a?"block":"none"))}};a.magnificPopup.registerModule(P,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){b.types.push(P),w("BeforeChange",function(a,b,c){b!==c&&(b===P?R():c===P&&R(!0))}),w(h+"."+P,function(){R()})},getIframe:function(c,d){var e=c.src,f=b.st.iframe;a.each(f.patterns,function(){return e.indexOf(this.index)>-1?(this.id&&(e="string"==typeof this.id?e.substr(e.lastIndexOf(this.id)+this.id.length,e.length):this.id.call(this,e)),e=this.src.replace("%id%",e),!1):void 0});var g={};return f.srcAction&&(g[f.srcAction]=e),b._parseMarkup(d,g,c),b.updateStatus("ready"),d}}});var S=function(a){var c=b.items.length;return a>c-1?a-c:0>a?c+a:a},T=function(a,b,c){return a.replace(/%curr%/gi,b+1).replace(/%total%/gi,c)};a.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var c=b.st.gallery,e=".mfp-gallery",g=Boolean(a.fn.mfpFastClick);return b.direction=!0,c&&c.enabled?(f+=" mfp-gallery",w(m+e,function(){c.navigateByImgClick&&b.wrap.on("click"+e,".mfp-img",function(){return b.items.length>1?(b.next(),!1):void 0}),d.on("keydown"+e,function(a){37===a.keyCode?b.prev():39===a.keyCode&&b.next()})}),w("UpdateStatus"+e,function(a,c){c.text&&(c.text=T(c.text,b.currItem.index,b.items.length))}),w(l+e,function(a,d,e,f){var g=b.items.length;e.counter=g>1?T(c.tCounter,f.index,g):""}),w("BuildControls"+e,function(){if(b.items.length>1&&c.arrows&&!b.arrowLeft){var d=c.arrowMarkup,e=b.arrowLeft=a(d.replace(/%title%/gi,c.tPrev).replace(/%dir%/gi,"left")).addClass(s),f=b.arrowRight=a(d.replace(/%title%/gi,c.tNext).replace(/%dir%/gi,"right")).addClass(s),h=g?"mfpFastClick":"click";e[h](function(){b.prev()}),f[h](function(){b.next()}),b.isIE7&&(x("b",e[0],!1,!0),x("a",e[0],!1,!0),x("b",f[0],!1,!0),x("a",f[0],!1,!0)),b.container.append(e.add(f))}}),w(n+e,function(){b._preloadTimeout&&clearTimeout(b._preloadTimeout),b._preloadTimeout=setTimeout(function(){b.preloadNearbyImages(),b._preloadTimeout=null},16)}),void w(h+e,function(){d.off(e),b.wrap.off("click"+e),b.arrowLeft&&g&&b.arrowLeft.add(b.arrowRight).destroyMfpFastClick(),b.arrowRight=b.arrowLeft=null})):!1},next:function(){b.direction=!0,b.index=S(b.index+1),b.updateItemHTML()},prev:function(){b.direction=!1,b.index=S(b.index-1),b.updateItemHTML()},goTo:function(a){b.direction=a>=b.index,b.index=a,b.updateItemHTML()},preloadNearbyImages:function(){var a,c=b.st.gallery.preload,d=Math.min(c[0],b.items.length),e=Math.min(c[1],b.items.length);for(a=1;a<=(b.direction?e:d);a++)b._preloadItem(b.index+a);for(a=1;a<=(b.direction?d:e);a++)b._preloadItem(b.index-a)},_preloadItem:function(c){if(c=S(c),!b.items[c].preloaded){var d=b.items[c];d.parsed||(d=b.parseEl(c)),y("LazyLoad",d),"image"===d.type&&(d.img=a('<img class="mfp-img" />').on("load.mfploader",function(){d.hasSize=!0}).on("error.mfploader",function(){d.hasSize=!0,d.loadError=!0,y("LazyLoadError",d)}).attr("src",d.src)),d.preloaded=!0}}}});var U="retina";a.magnificPopup.registerModule(U,{options:{replaceSrc:function(a){return a.src.replace(/\.\w+$/,function(a){return"@2x"+a})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var a=b.st.retina,c=a.ratio;c=isNaN(c)?c():c,c>1&&(w("ImageHasSize."+U,function(a,b){b.img.css({"max-width":b.img[0].naturalWidth/c,width:"100%"})}),w("ElementParse."+U,function(b,d){d.src=a.replaceSrc(d,c)}))}}}}),function(){var b=1e3,c="ontouchstart"in window,d=function(){v.off("touchmove"+f+" touchend"+f)},e="mfpFastClick",f="."+e;a.fn.mfpFastClick=function(e){return a(this).each(function(){var g,h=a(this);if(c){var i,j,k,l,m,n;h.on("touchstart"+f,function(a){l=!1,n=1,m=a.originalEvent?a.originalEvent.touches[0]:a.touches[0],j=m.clientX,k=m.clientY,v.on("touchmove"+f,function(a){m=a.originalEvent?a.originalEvent.touches:a.touches,n=m.length,m=m[0],(Math.abs(m.clientX-j)>10||Math.abs(m.clientY-k)>10)&&(l=!0,d())}).on("touchend"+f,function(a){d(),l||n>1||(g=!0,a.preventDefault(),clearTimeout(i),i=setTimeout(function(){g=!1},b),e())})})}h.on("click"+f,function(){g||e()})})},a.fn.destroyMfpFastClick=function(){a(this).off("touchstart"+f+" click"+f),c&&v.off("touchmove"+f+" touchend"+f)}}(),A()});


/*
* jquery-match-height 0.7.0 by @liabru
* http://brm.io/jquery-match-height/
* License MIT
*/
!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],t):"undefined"!=typeof module&&module.exports?module.exports=t(require("jquery")):t(jQuery)}(function(t){var e=-1,o=-1,i=function(t){return parseFloat(t)||0},a=function(e){var o=1,a=t(e),n=null,r=[];return a.each(function(){var e=t(this),a=e.offset().top-i(e.css("margin-top")),s=r.length>0?r[r.length-1]:null;null===s?r.push(e):Math.floor(Math.abs(n-a))<=o?r[r.length-1]=s.add(e):r.push(e),n=a}),r},n=function(e){var o={
byRow:!0,property:"height",target:null,remove:!1};return"object"==typeof e?t.extend(o,e):("boolean"==typeof e?o.byRow=e:"remove"===e&&(o.remove=!0),o)},r=t.fn.matchHeight=function(e){var o=n(e);if(o.remove){var i=this;return this.css(o.property,""),t.each(r._groups,function(t,e){e.elements=e.elements.not(i)}),this}return this.length<=1&&!o.target?this:(r._groups.push({elements:this,options:o}),r._apply(this,o),this)};r.version="0.7.0",r._groups=[],r._throttle=80,r._maintainScroll=!1,r._beforeUpdate=null,
r._afterUpdate=null,r._rows=a,r._parse=i,r._parseOptions=n,r._apply=function(e,o){var s=n(o),h=t(e),l=[h],c=t(window).scrollTop(),p=t("html").outerHeight(!0),d=h.parents().filter(":hidden");return d.each(function(){var e=t(this);e.data("style-cache",e.attr("style"))}),d.css("display","block"),s.byRow&&!s.target&&(h.each(function(){var e=t(this),o=e.css("display");"inline-block"!==o&&"flex"!==o&&"inline-flex"!==o&&(o="block"),e.data("style-cache",e.attr("style")),e.css({display:o,"padding-top":"0",
"padding-bottom":"0","margin-top":"0","margin-bottom":"0","border-top-width":"0","border-bottom-width":"0",height:"100px",overflow:"hidden"})}),l=a(h),h.each(function(){var e=t(this);e.attr("style",e.data("style-cache")||"")})),t.each(l,function(e,o){var a=t(o),n=0;if(s.target)n=s.target.outerHeight(!1);else{if(s.byRow&&a.length<=1)return void a.css(s.property,"");a.each(function(){var e=t(this),o=e.attr("style"),i=e.css("display");"inline-block"!==i&&"flex"!==i&&"inline-flex"!==i&&(i="block");var a={
display:i};a[s.property]="",e.css(a),e.outerHeight(!1)>n&&(n=e.outerHeight(!1)),o?e.attr("style",o):e.css("display","")})}a.each(function(){var e=t(this),o=0;s.target&&e.is(s.target)||("border-box"!==e.css("box-sizing")&&(o+=i(e.css("border-top-width"))+i(e.css("border-bottom-width")),o+=i(e.css("padding-top"))+i(e.css("padding-bottom"))),e.css(s.property,n-o+"px"))})}),d.each(function(){var e=t(this);e.attr("style",e.data("style-cache")||null)}),r._maintainScroll&&t(window).scrollTop(c/p*t("html").outerHeight(!0)),
this},r._applyDataApi=function(){var e={};t("[data-match-height], [data-mh]").each(function(){var o=t(this),i=o.attr("data-mh")||o.attr("data-match-height");i in e?e[i]=e[i].add(o):e[i]=o}),t.each(e,function(){this.matchHeight(!0)})};var s=function(e){r._beforeUpdate&&r._beforeUpdate(e,r._groups),t.each(r._groups,function(){r._apply(this.elements,this.options)}),r._afterUpdate&&r._afterUpdate(e,r._groups)};r._update=function(i,a){if(a&&"resize"===a.type){var n=t(window).width();if(n===e)return;e=n;
}i?-1===o&&(o=setTimeout(function(){s(a),o=-1},r._throttle)):s(a)},t(r._applyDataApi),t(window).bind("load",function(t){r._update(!1,t)}),t(window).bind("resize orientationchange",function(t){r._update(!0,t)})});


/*
 *
 * readyScripts.js is the place to put all calls that require the DOM to be ready first.
 * When a script begins with $(function) it is the same as $(document).ready(function).
 *
 * Because this self-invoking function begins with $(function), all scripts inside it
 * will automatically inherit that feature. Most site scripts will live in here.
 *
 * readyScripts.js should be placed just before the closing body tag in the document.
 *
 */

$(function() {
	var JSON = (function() {
		var cache = {}, request = {},
			_const = function() {
				this.set_data = function(u, v) {
					request = $.ajax({
						type: "GET",
						async: true,
						dataType: "json",
						crossDomain: true,
						url: u,
						data: v,
						contentType: "application/json; charset=utf-8",
						accept: "application/vnd.vimeo.*+json;version=3.4", 
						beforeSend: function (xhr) {
						    xhr.setRequestHeader ("Authorization", "bearer 16c2225dacb52ea28658fdbfca2e4dcb");
						},    
						jsonp: "callback",
						error: function (xhr, ajaxOptions, thrownError) {
							console.log(xhr.status + " " + thrownError + ". Please contact the site administrator.");
						}
					});
				};
			};
						
		_const.prototype = {
			result: function() { return request; }
		};		
		
			return _const;  
	})();

	function isNumeric(n) { return !isNaN(parseFloat(n)) && isFinite(n); }
	
	/**Parses string formatted as YYYY-MM-DD to a Date object.
	 * If the supplied string does not match the format, an 
	 * invalid Date (value NaN) is returned.
	 * @param {string} dateStringInRange format YYYY-MM-DD, with year in
	 * range of 0000-9999, inclusive.
	 * @return {Date} Date object representing the string.
	 */

	  function parseISO8601(dateStringInRange) {
		var isoExp = /^\s*(\d{4})-(\d\d)-(\d\d)\s*$/,
			date = new Date(NaN), month,
			parts = isoExp.exec(dateStringInRange);

		if(parts) {
		  month = +parts[2];
		  date.setFullYear(parts[1], month - 1, parts[3]);
		  if(month != date.getMonth() + 1) {
			date.setTime(NaN);
		  }
		}
		return date;
	  }
	
	/* Add comma to numbers every three digits */
	$.fn.digits = function(){ 
		return this.each(function(){ 
			$(this).text( $(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") ); 
		})
	};
	
	function randomCharNum() {
		var text = "";
		var charnum = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

		for( var i=0; i < 5; i++ )
			text += charnum.charAt(Math.floor(Math.random() * charnum.length));

		return text;
	}

	var doc = document,body = $(doc.body),win = window,
	readyScripts = {
		init: function() {
			this.ui.init();	
			this.route.init();	
		},
		ui: {
			init: function() {
				readyScripts.ui.metaImage();
				readyScripts.ui.tabletMenuHandler();
				readyScripts.ui.customMenu();
				readyScripts.ui.headerSearch();
				readyScripts.ui.slick();
				readyScripts.ui.fixedHeader();
				// readyScripts.ui.videoThumbs();
				readyScripts.ui.videoFancyBox();
				// readyScripts.ui.thumbnailHover();
				readyScripts.ui.equalHeight();
				readyScripts.ui.customMatchHeight();
				// readyScripts.ui.paginateVideos();
				readyScripts.ui.playFeaturedVideo();
				// readyScripts.ui.wrapVideoLinks();
				readyScripts.ui.googleMap();
				readyScripts.ui.customAccordion();
				readyScripts.ui.imageLightbox();
				readyScripts.ui.updateBlogTitle();
				readyScripts.ui.openNewTab();
				readyScripts.ui.latestPodcast();
				readyScripts.ui.updatePhotoGallery();
				readyScripts.ui.checkImg();
				readyScripts.ui.libraryCategory();
				readyScripts.ui.articleVideo();
				readyScripts.ui.tags();
				readyScripts.ui.relatedArticles();
				readyScripts.ui.tabs();
				readyScripts.ui.unitCounter();
				readyScripts.ui.scrollingContent();
				readyScripts.ui.accordionList();
				readyScripts.ui.accountMenu();
				readyScripts.ui.unitAccordion();
				readyScripts.ui.borderHide();
				readyScripts.ui.togglePopup();
				readyScripts.ui.foundationTabs();
				readyScripts.ui.flickrAlbums();
				readyScripts.ui.accordionMenu();
				readyScripts.ui.vimeoVideo();				
			},
			metaImage: function(){
				if(!$('meta.meta-img')[0]) return;
				$('meta.meta-img').attr('content',$('.article-banner img').attr('src'));
			},
			tabletMenuHandler: function(){
				var initiator = 0;
				$('#primary .menu .has-dropdown > a, #primary .quick-links .has-dropdown > a').livequery('click',function(e){
					if($(window).width() > 1024) return;
					var $this = $(this);
					e.preventDefault();
					initiator++;
					setTimeout(function(){
						if(initiator == 2){
							window.location = $this.attr('href');
						}
						console.log(initiator);
						initiator = 0;
					},300);
					
				});
			},
			customMenu :function () {
				body.find('.quick-links > ul')
				  .clone()
				  .addClass('dropdown')
				  .appendTo('.mobile-menu .top-bar-section > ul')
				  .wrap('<li class="has-dropdown quick" />')
				  .parent()
				  .prepend('<a href="#">Quick Links</a>');
				body.find('.has-dropdown.quick ul')
				  .prepend('<li class="title back"><h5><a href="javascript:void(0)">Back</a></h5></li>');
				if (bcpie.globals.user.isLoggedIn == false) {
					body.find('#pageheader .mobile-menu .top-bar-section ul li ul li.ministers-menu ul').remove();
					body.find('#pageheader .mobile-menu .top-bar-section ul li ul li.ministers-menu').removeClass('has-dropdown');
				}
			},
			headerSearch: function(){
				if(!$('#pageheader #primary .search-box .search')[0]) return;
				$('.siteSearch-form input[name="CAT_Search"],form[name="catsearchform75129"] input[name="CAT_Search"]').on('change',function(){
					var $this = $(this),
						action = $this.parents('form').attr('action');
					$this.parents('form').attr('action',action +'&keyword='+ $this.val());
				});

				$('#pageheader #primary .search-box .search a').on('click',function(e){
					var $this = $(this);
					$this.parents('.search-box').toggleClass('open');

					e.preventDefault();
				});
			},
			slick: function() {

				var slicks = body.find('.slick');
				for (var i = 0; i < slicks.length; i++) {
					$(slicks[i]).slick({
						prevArrow: '<button type="button" class="slick-prev fa fa-chevron-left"></button>',
						nextArrow: '<button type="button" class="slick-next fa fa-chevron-right"></button>',
						appendArrows: $(slicks[i]).closest('.slider').find('.slider-nav').find('.columns'),
						autoplay: true,
						autoplaySpeed: 5000
					});
				}

				var slicks2 = body.find('.image-slider:not(.afterclick)');
				for (var i = 0; i < slicks2.length; i++) {
					$(slicks2[i]).slick({
						prevArrow: '<button type="button" class="slick-prev fa fa-chevron-left"></button>',
						nextArrow: '<button type="button" class="slick-next fa fa-chevron-right"></button>',
						appendArrows: $(slicks2[i]).closest('.image-slider-wrapper').find('.slider-nav').find('.columns'),
						autoplay: true, 
						autoplaySpeed: 5000
					});
				}

				body.find('.main-video-slick').slick({
					prevArrow: '<button type="button" class="slick-prev fa fa-chevron-left"></button>',
					nextArrow: '<button type="button" class="slick-next fa fa-chevron-right"></button>',
					asNavFor: '.featureSlick'
				});   

				body.find('.vimeoBadge.featureVideo a').addClass('fancybox-media');
				
				body.find('.featureVideo .clip').wrapAll('<div class="featureSlick" />');
				body.find('.featureSlick').slick({
					infinite: true,
					slidesToShow: 5,
					slidesToScroll: 1,
					prevArrow: '<button type="button" class="slick-prev fa fa-chevron-left"></button>',
					nextArrow: '<button type="button" class="slick-next fa fa-chevron-right"></button>',
					responsive: [
						{
							breakpoint: 815,
							settings: {
								slidesToShow: 4
							}
						},
						{
							breakpoint: 641,
							settings: {
								slidesToShow: 3
							}
						},
						{
							breakpoint: 480,
							settings: {
								slidesToShow: 2
							}
						},
						{
							breakpoint: 360,
							settings: {
								slidesToShow: 1
							}
						}
					]
				}); 

				body.find('.testimonial-slider').slick({
					dots: true,
					arrows: false,
					fade: true,
					infinite: true,
					cssEase: "linear",
					adaptiveHeight: true
				}); 

				body.find('.mzine-issue-slider').slick({
					fade: true,
					infinite: true,
					arrows: true,
					dots: false,

				});

				// $('.slick-mob').slick({
				// 	arrows: false,
				// 	dots: true,
				// 	infinite: true,
				// });

			},
			fixedHeader: function() { // Function for reducing header when scrolling down	
				var nav = body.find('#pageheader').find('.nav-container'),
					header = nav,
					logo = nav.find('.logo'),
					search = nav.find('.search'),
					isHeaderCollapsed = false,
					width;
			
				$(win).on('scroll', function() {
					// Once scrolled below 150, do the followings
					if ($(win).scrollTop() > 150) {
						width = parseInt(nav.children('.row').css('width').replace('px', ''));
						if(width > 959) {
							nav.addClass('shrink large');
							nav.removeClass('medium');
						}else if(width >= 641) {
							nav.addClass('shrink medium');
							nav.removeClass('large');
						}
					}else {
						nav.removeClass('shrink medium large');
					}
				});
			},
			videoThumbs : function() {
				body.find('.vimeoBadge .clip').each(function(){
					var $this = $(this);

					if(!$this.find('.loaded')[0]) $(this).wrapInner('<div class="clip-inner" />');
				});
			},
			videoFancyBox: function() {
				body.find('.vimeoBadge .caption > a').each(function(){
					$(this).addClass('fancybox-media');
					$(this).livequery('click', function(e){
						e.preventDefault();
					});
				});
				body.find('.vimeoBadge .clip-inner > a').each(function(){
					$(this).addClass('fancybox-media');
				});    
				
				body.find('.fancybox-media')
				.attr('rel', 'media-gallery')
				.fancybox({
					openEffect : 'none',
					closeEffect : 'none',
					prevEffect : 'none',
					nextEffect : 'none',

					arrows : false,
					helpers : {
						media : {},
						buttons : {}
					}
				});
			},
			thumbnailHover: function(){
				body.find('.vimeoBadge div[data-video="vimeo"]:not(.loaded) .clip-inner').each( function() { 
					var $this = $(this);

					$this.hoverdir({
						hoverDelay : 75
					});					 
				});
				/* body.find('.podcast-block .podcast-box').each( function() { 
					$(this).hoverdir({
						hoverDelay : 75
					}); 
				}); */
				body.find('.previous-issues .previssues-box').each( function() { 
					$(this).hoverdir({
						hoverDelay : 75
					}); 
				});
			},
			equalHeight: function(){
				$(win).load(function() {
					equalheight('.video-block .eqheight');
				});          
				$(win).resize(function(){
					equalheight('.video-block .eqheight');
				});
				
				$(win).load(function() {
					equalheight('.youth-block .eqheight');
				});          
				$(win).resize(function(){
					equalheight('.youth-block .eqheight');
				});
				
				$(win).load(function() {
					equalheight('.safety-block .eqheight');
				});          
				$(win).resize(function(){
					equalheight('.safety-block .eqheight');
				});
				
				$(win).load(function() {
					equalheight('.podcast-block .podcast-head, .podcast-block .podcast-box');
				});          
				$(win).resize(function(){
					equalheight('.podcast-block .podcast-head, .podcast-block .podcast-box');
				});
				
				$(win).load(function() {
					equalheight('.feature-container .eqheight');
				});          
				$(win).resize(function(){
					equalheight('.feature-container .eqheight');
				});
				
				$(win).load(function() {
					equalheight('.feature-container2 .eqheight');
				});          
				$(win).resize(function(){
					equalheight('.feature-container2 .eqheight');
				});
			},			
			customMatchHeight: function(){
				if(!$('.higherway-list')[0]) return;
				var $boxContainer = $('.higherway-list');
				$boxContainer.imagesLoaded( function() {
				    $boxContainer.find('li').matchHeight();
				    $boxContainer.find('.higherway-img').matchHeight();
				});
			},
			viewMoreVideos: function () {
				var videoSize = body.find(".vimeoBadge .clip").size();
				var videoLen = 15;
				body.find('.vimeoBadge .clip:lt('+videoLen+')').show();

				body.find('.video-block .view-more').click(function () {
					videoLen = (videoLen + 15 <= videoSize) ? videoLen + 15 : videoSize;
					body.find('#video-badge .clip:lt('+videoLen+')').show();
					var v = body.find("#video-badge");
					var t = v.scrollTop();
					v.stop().animate({scrollTop:t+865}, '500', 'swing', function() {});                    
					equalheight('.video-block .eqheight');
				});                

				body.find('.youth-block .view-more').click(function () {
					videoLen = (videoLen + 15 <= videoSize) ? videoLen + 15 : videoSize;
					body.find('#youth-badge .clip:lt('+videoLen+')').show();
					var y = body.find("#youth-badge");
					var t = v.scrollTop();
					y.stop().animate({scrollTop:t+370}, '500', 'swing', function() {});
					equalheight('.youth-block .eqheight');
				});
			},
			paginateVideos: function(){
				body.find('#pagecontent .videoBadge').pajinate({
					num_page_links_to_display : 5,
					items_per_page : 15,
					item_container_id : '.videoContent',
					nav_panel_id : '.videoNav',
					show_paginate_if_one : false
					
				});                    
				equalheight('.video-block .eqheight');
				
				body.find("#pagecontent .youthBadge .clip").wrap("<li></li>");
				body.find('#pagecontent .youthBadge').pajinate({
					num_page_links_to_display : 5,
					items_per_page : 6,
					item_container_id : '.youthContent',
					nav_panel_id : '.youthNav',
					show_paginate_if_one : false
					
				});                    
				equalheight('.youth-block .eqheight');
				
				body.find('#pagecontent .videosBadge').pajinate({
					num_page_links_to_display : 5,
					items_per_page : 6,
					item_container_id : '.videosContent',
					nav_panel_id : '.videosNav',
					show_paginate_if_one : false
					
				});                    
				equalheight('.videos-block .eqheight');
			},
			playFeaturedVideo: function(){
				if(!~window.location.pathname.indexOf('/media-center')) return;
				if(!body.find('#video-badge ul li:first a')[0]) return;

				var vimeoID = body.find('#video-badge ul li:first a').attr('href').split('.com/')[1];

				body.find('#pageheader .header-top .content-top .main-video .video-box').html('<iframe src="https://player.vimeo.com/video/'+ vimeoID +'?color=ffffff&byline=0&portrait=0" width="1020" height="500" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');

				body.find('.btn-live-webcast').on('click',function(e){
					e.preventDefault();
					body.find('#pageheader .header-top .content-top .main-video .video-box').html('<iframe width="1020" height="500" frameborder="0" allowfullscreen="" src="https://www.youtube.com/embed/EX-gexYcNxQ?feature=player_embedded"></iframe>')
					body.find('.on-air-now').show();
				});


			},
			wrapVideoLinks: function(){
				body.find('.vimeoBadge div[data-video="vimeo"]:not(.loaded) .clip .clip-inner').each(function(){
					var h = $(this).find('.caption a').attr('href');

					$(this).find('.caption').wrapAll('<a href="'+h+'" target="_blank" class="fancybox-media" rel="media-gallery"></a>');
					$(this).find('.caption > a').contents().unwrap(); 
				});
			},
			googleMap: function(){
				var elements = body.find('.google-map');
		
				elements.each(function() {
					
					var latlng = $(this).attr('data-latlng').split(',');
					var lat = jQuery.trim(latlng[0]);
					var lng = jQuery.trim(latlng[1]);
					var address = $(this).attr('data-address');
					var displayType = $(this).attr('data-display-type');
					var zoomLevel = parseInt($(this).attr('data-zoom-level'));
					$(this).css('height', $(this).attr('data-height'));
					
					switch(displayType.toUpperCase()) {
						case 'ROADMAP' : displayType = google.maps.MapTypeId.ROADMAP; break;
						case 'SATELLITE' : displayType = google.maps.MapTypeId.SATELLITE; break;
						case 'HYBRID' : displayType = google.maps.MapTypeId.HYBRID; break;
						case 'TERRAIN' : displayType = google.maps.MapTypeId.TERRAIN; break;
						default : displayType = google.maps.MapTypeId.ROADMAP; break;
					}
					
					var geocoder = new google.maps.Geocoder();
					var latlng = new google.maps.LatLng(lat, lng);
					var myOptions = {
						scrollwheel : false,
						zoom : zoomLevel,
						center : latlng,
						mapTypeId : displayType
					}
					
					var map = new google.maps.Map($(this)[0], myOptions);
					
					geocoder.geocode({
						'address' : address,
						'latLng' : latlng,
					}, function(results, status) {
						if (status == google.maps.GeocoderStatus.OK) {
							
							if(jQuery.trim(address).length > 0) {
								var marker = new google.maps.Marker({
									map : map,
									position : results[0].geometry.location
								});
								
								map.setCenter(results[0].geometry.location);
								
							} else {
								var marker = new google.maps.Marker({
									map : map,
									position : latlng
								});
								
								marker.setPosition(latlng); map.setCenter(latlng);
								
							}
							
						} else {
							alert("Geocode was not successful for the following reason: " + status);
						}
					});
					
				}); 
			},
			customAccordion: function(){
				/*body.find('[data-accordion="toggle"] .accordion-navigation > a').on('click', function() {
				    $(this).parent().toggleClass('active');
			      $(this).next().toggleClass('active');
                    
					
				body.find(this).parent().find('.content').slideToggle('normal');
				return false;
				});*/
				body.find('[data-accordion="no-toggle"] .accordion-navigation > a').on('click', function () {
					var dd_parent = $(this).parent().parent();

					if(dd_parent.hasClass('active')){
						body.find('.accordion dd div.content:visible').slideToggle('normal');
					} else {
						body.find('.accordion dd div.content').slideUp('normal');
						body.find(this).parent().find('.content').slideToggle('normal');
					}
					return false;					
				});
			},
			imageLightbox: function(){
				body.find("a.clickable-lightbox").fancybox({
					'titleShow'     : false,
					'transitionIn'  : 'elastic',
					'transitionOut' : 'elastic',
					'easingIn'      : 'easeOutBack',
					'easingOut'     : 'easeInBack'
				});
			},
			updateBlogTitle: function() {
				var link = bcpie.globals.path;
				if (link.indexOf("devotional") >= 0 && body.find('.article-box').data("blogpost") == true) {
					body.find('main h1').html("Today's Devotional.");
				}
			},
			openNewTab: function() {
				body.find('#pagecontent .flickr_badge_image a').each(function(){
					$(this).attr('target','_blank');
				});
			},
			latestPodcast: function() {
				body.find(".sc-player-custom ol.sc-trackslist").wrap('<div class="sc-trackslist-scroller"/>');
				body.find(".sc-player-custom .sc-trackslist-scroller").mCustomScrollbar({
					autoHideScrollbar:true
				});
			},
			PodcastItem: function(){
			},
			updatePhotoGallery: function() {
				body.find('#pagecontent .photo-gallery ul a').each(function(){
					$(this).wrap("<li />");
					var imgSrc = $(this).find('img').attr('src');
					$(this).find('img').attr({
						src : imgSrc+'?Action=thumbnail&amp;Width=255&amp;Height=170&amp;Algorithm=fill_proportional&amp;USM=1',
						width : '255',
						height : '170'
					});
					$(this).attr('target', '_blank');
				});
			},
			checkImg: function() {
				var bodyImg = body.find('.news-box .news-thumb img');

				$(bodyImg).each(function(){
					$.ajax({
					    url: $(this).attr('src'),
					    type:'HEAD',
					    error: function()
					    {
					        $(this).remove();
					    }
					});		
				});
			},
			libraryCategory: function(){
				if(!$('.categories-wrapper')[0]) return;
				var $grid = $('.categories-wrapper');
			    $grid.imagesLoaded(function() {
			        $grid.isotope({
						itemSelector: '.category-item',
						masonry: {
							columnWidth: 256
						}
					});
			    });

			    /*$grid.find('.category-item:not(.fixed-box)').each(function() { 
			        $(this).hoverdir({
			            hoverDelay : 75,
			            selector : '.category-item-hover',
			        });
			    });*/

		     	$grid.find('#categories-filter').change(function() {
			        var selector = $(this).val();
			        $grid.isotope({
			            filter : selector + ', .fixed-box'
			        });
			        
			        return false;
			    });
			},
			articleVideo: function(){
				if(!$('.video-popup,.sc-popup, .unit-wrapper .unit-detail #audio')[0]) return;

				console.log('yes');

				$('.video-popup,.sc-popup, .unit-wrapper .unit-detail #audio').magnificPopup({
					type: 'iframe',
				    iframe: {
					  	markup: '<div class="mfp-iframe-scaler">'+
						            '<div class="mfp-close"></div>'+
						            '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
						          '</div>',
					  	patterns: {
						    youtube: {
						      index: 'youtube.com/',

						      id: 'v=', 
						      src: '//www.youtube.com/embed/%id%?autoplay=1'
						    },
						    vimeo: {
						      index: 'vimeo.com/',
						      id: '/',
						      src: '//player.vimeo.com/video/%id%?autoplay=1'
						    },
						    gmaps: {
						      index: '//maps.google.',
						      src: '%id%&output=embed'
						    },
						    soundcloud: {
						      index: 'soundcloud.com/',
						      id: '',
						      src: '//w.soundcloud.com/player/?url=%id%&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true'
						    },
					  	},
					  	srcAction: 'iframe_src',
					}
				});
			},
			tags: function() {
				if(!$('#tagarticles')[0] && !$('.tagarticles')[0]) return;

				$('.tagarticles').html($('#tagarticles').html());
			},
			relatedArticles: function() {
				if(!$('#relatedarticles')[0] && !$('.relatedarticles')[0]) return;

				$('.relatedarticles').html($('#relatedarticles').html());
			},
			tabs:function(){
				$('.tabs a').bind('click', function (e) {
					var $slider = $($(this).attr('href')).find('.image-slider.afterclick');
					
					setTimeout(function() {
						$slider.slick({
							prevArrow: '<button type="button" class="slick-prev fa fa-chevron-left"></button>',
							nextArrow: '<button type="button" class="slick-next fa fa-chevron-right"></button>',
							appendArrows: $slider.closest('.image-slider-wrapper').find('.slider-nav').find('.columns'),
							autoplay: true, 
							autoplaySpeed: 5000
						}).removeClass('afterclick');
					}, 1000);
				});
				
				if(!$('.tabs-wrapper')[0]) return;
					
				$('.tabs-wrapper .tabs-navigation a').livequery('click',function(e){
					var $this = $(this),
						target = $(this).attr('href');

					$('.tabs-wrapper .tabs-navigation a.active').removeClass('active');
					$this.addClass('active');
					$this.parents('.tabs-wrapper').find('.tabs-panel.active').removeClass('active');
					$this.parents('.tabs-wrapper').find(target).addClass('active');
					
					e.preventDefault();
				});
			},
			unitCounter: function(){
				if(!$('.unit-wrapper.numeric-counter li')[0]) return;
				$('.unit-wrapper.numeric-counter li').each(function(i,v){
					var counter = i + 1;
					$(this).find('a').prepend( counter +'. ');
				});
			},
			scrollingContent: function () {
				if(!$('.scrolling-content-wrapper')[0]) return;
				var targetval= 0;
				$('.scrolling-content-wrapper .scrolling-nav a').on('click',function(e){

					var target = $(this).attr('href'),
						parent = $(this).parents('.scrolling-content-wrapper').find('.scrolling-content');
					$(this).parents('.scrolling-nav').find('a.active').removeClass('active');
					$(this).addClass('active');

					if(parent.find(target+':first-child')[0]){
						parent.animate({scrollTop: 0 }, 'fast');
					}else{
						parent.scrollTop(0);
						parent.animate({scrollTop: $(target).position().top - 2.796875}, 'fast');
					}
					e.preventDefault();
				});
			},
			accordionList: function(){
				if(!$('.accordion-wrapper')[0]) return;
				var wrapper = $('.accordion-wrapper')

				wrapper.find('.accordion-item .accordion-toggle > a').on('click',function(e){
					var target = $(this);
					if(target.parent('.accordion-toggle.active')[0]){
						target.parent().removeClass('active').find('> ul').slideToggle();
					}else{
						target.closest('ul').find('> .active').removeClass('active').find(' > ul').slideToggle();
						target.parent().addClass('active').find('> ul').slideToggle();
					}
					e.preventDefault();
				});
			},
			accountMenu: function(){
				if(!$('#pagecontent .account-wrapper .account-holder .account-sidebar .account-menu')[0]) return;
				$('#pagecontent .account-wrapper .account-holder .account-sidebar .account-menu-toggle a').on('click',function(e){
					$(this).parents('.account-sidebar').find('> .account-menu').slideToggle();
					e.preventDefault();
				});
			},
			unitAccordion: function(){

				if(!$('.unit-wrapper')[0]) return;

				$('.accordion-holder .accordion-item .accordion-head').on('click',function(){
					var $this = $(this).parent();
					if($this.hasClass('active')){
						$this.removeClass('active').find('> .accordion-content').slideToggle();
					}else{
						$this.parents('.accordion-holder').find('.accordion-item.active').removeClass('active').find('> .accordion-content').slideToggle();;
						$this.addClass('active').find('> .accordion-content').slideToggle();
					}
					
				});
			},
			borderHide: function(){
				if(!$('.unit-detail')[0]) return;
				
				if ($('#subheading').is(':empty')){
					$('#subheading').remove();
					//$('#subheading').remove();
				}
			},
			togglePopup: function(){
				if(!$('.togglePopup')[0]) return;

				$('.togglePopup').magnificPopup({
				  	type:'inline',
				  	midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
				});
			},
			foundationTabs: function(){
				$(document).foundation('tab', 'reflow');
			},
			flickrAlbums: function(){
				if(!$('#flickr-albums')[0]) return;

				
				var  mainSliderCheck = true,
					$mainSlider = $('#flickr-albums .flickr-main-slider'),
					$mainThumbnail = $('#flickr-albums .flickr-main-thumbnail-slider'),
					apikey = 'f9fda58d7b93b910119d2fd2125012cd',
					userid = '130955075@N04';

				$.getJSON("https://api.flickr.com/services/rest/?method=flickr.photosets.getList&api_key="+apikey+"&user_id="+userid+"&format=json&jsoncallback=?", function (data) {

					var list = $("<ul></ul>"),
						$albumslider = $('#flickr-sets .albums-slider'),
						totalAlbums = data.length,
						$listSets = '';

				    $.each(data.photosets.photoset, function (i, set) {

						var farmid = set.farm,
							albumid = set.id,
							serverid = set.server,
							photoid = set.primary,
							secretid = set.secret,
							title = set.title._content;

						if(title.toLowerCase().indexOf('portland camp meeting 2019') !== -1){
					    	if(mainSliderCheck){
					    		state = 'active';
					    		mainslider(albumid);
					    		mainSliderCheck = false;
					    	}else{
					    		state = '';
					    	}

							$listSets = $listSets + '<div>'+
	                            '<div class="albums-item">'+
	                            	'<div class="img-holder" style="background: url(http://c1.staticflickr.com/'+farmid+'/'+serverid+'/'+photoid+'_'+secretid+'_z.jpg)no-repeat center/cover;" >'+
	                                	'<a href="#" data-photosetid="'+albumid+'" class="'+state+'" ><img src="/images/album-holder-default.jpg" alt="'+title+'"><span class="album-title">'+title+'</span></a>'+
	                                '</div>'+
	                            '</div>'+
	                        '</div>';
                        }

				    });


				    function mainslider(photosetid){

				    	var $mainListSets = '';

				    	$.getJSON("https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key="+apikey+"&photoset_id="+photosetid+"&user_id="+userid+"&format=json&nojsoncallback=1", function (data1) {

				    		$mainSlider.parent().find('.album-title').text(data1.photoset.title);

				    		$.each(data1.photoset.photo, function (i, set) {

				    			var farmid = set.farm,
									serverid = set.server,
									photoid = set.id,
									secretid = set.secret,
									title = set.title;

								$mainListSets = $mainListSets + '<div>'+
		                            '<div class="flickr-photo-item">'+
		                            	'<div class="img-holder" style="background: url(http://c1.staticflickr.com/'+farmid+'/'+serverid+'/'+photoid+'_'+secretid+'_z.jpg)no-repeat center/cover;" >'+
		                                	'<img src="/images/album-holder-default.jpg" alt="'+title+'">'+
		                                '</div>'+
		                            '</div>'+
		                        '</div>';

				    		});

				    		if($mainSlider.hasClass('slick-slider')){
				    			$mainSlider.slick('unslick');
				    			$mainThumbnail.slick('unslick');
				    		}

				    		$mainSlider.html($mainListSets);


				    		$mainSlider.slick({
						    	infinite: true,
								slidesToShow: 1,
								slidesToScroll: 1,
								prevArrow: '<button type="button" class="slick-prev fa fa-chevron-left"></button>',
								nextArrow: '<button type="button" class="slick-next fa fa-chevron-right"></button>',
								asNavFor: '#flickr-albums .flickr-main-thumbnail-slider',
						    });

						    $mainSlider.parent().removeClass('loading');

						    $mainThumbnail.html($mainListSets);

						    $mainThumbnail.slick({
						    	infinite: true,
								slidesToShow: 6,
								slidesToScroll: 1,
								arrows: false,
								asNavFor: '#flickr-albums .flickr-main-slider',
								focusOnSelect: true,
								responsive: [
								    {
								      breakpoint: 767,
								      settings: {
								        slidesToShow: 4,
								      }
								    }
							  	]
						    });

				    	});

				    }

				    $albumslider.html($listSets);
				    $albumslider.slick({
				    	infinite: true,
						slidesToShow: 4,
						slidesToScroll: 1,
						prevArrow: '<button type="button" class="slick-prev fa fa-chevron-left"></button>',
						nextArrow: '<button type="button" class="slick-next fa fa-chevron-right"></button>',
						responsive: [
							{
								breakpoint: 767,
								settings: {
									slidesToShow: 3
								}
							},
							{
								breakpoint: 640,
								settings: {
									slidesToShow: 2
								}
							},
							{
								breakpoint: 480,
								settings: {
									slidesToShow: 1
								}
							}
						]
				    });


				    $albumslider.find('.albums-item a').livequery('click',function(e){
				    	e.preventDefault();
				    	var albumid = $(this).data('photosetid');
				    	if(!$(this).hasClass('active')){
				    		$mainSlider.parent().addClass('loading');
				    		mainslider(albumid);
				    	 	$albumslider.find('.albums-item a.active').removeClass('active');
				    	 	$(this).addClass('active');
				    	}
				    });

				});

			},

			accordionMenu: function(){
				// $('#pageheader .menu-kol a').on('click', function(e){
				// 	$parents = $(this).parents('#pageheader .header-top-inner');
				// 	$parents.toggleClass('menu-open');
				// 	$parents.find('.menu-main-hover').toggleClass('open');
				// });
				// $('.menu-main-hover .close').on('click', function(e){
				// 	$parents = $(this).parents('.menu-mob');					
				// 	$(this).closest('.menu-main-hover').removeClass('open');
				// 	$parents.find('.menu-main-hover-second').addClass('open');
				// });
				// $('.menu-main-hover-second .close').on('click', function(e){
				// 	$(this).parents('.menu-main-hover-second').removeClass('open');
				// });
				// $('.menu-main-hover-second .back').on('click', function(e){
				// 	$parents = $(this).parents('.menu-mob');
				// 	$(this).closest('.menu-main-hover-second').removeClass('open');
				// 	$parents.find('.menu-main-hover').addClass('open');
				// });
			},

			vimeoVideo: function(){
				if(!$('div[data-video="vimeo"]')[0]) return;
				
				var json = new JSON();

				$('div[data-video="vimeo"]:not(.loaded)').each(function() {
					var $this = $(this), url = $this.data('url');

					if(url == undefined) {
						readyScripts.ui.videoThumbs();
						readyScripts.ui.thumbnailHover();
						readyScripts.ui.paginateVideos();
						readyScripts.ui.wrapVideoLinks();

						$this.addClass('loaded');
					} else {
						json.set_data(url, {}); 

						json.result().done(function(response) {
							var arr = [];

							$.each(response.data, function(k, v) {
								arr.push('<li><div class="clip s160"><a href="'+ v.link +'" target="_blank" style="background-image:url('+ v.pictures.sizes[3].link +')"><img src="'+ v.pictures.sizes[3].link +'" srcset="'+ v.pictures.sizes[3].link +' 2x" width="160" border="0" /></a><div class="caption"><a href="'+ v.link +'" target="_blank">'+ v.name +'</a></div></div></li>'); 
							});

							$this.html('<ul class="videoContent clearfix">'+ arr.join('\n') +'</ul>');	

							readyScripts.ui.videoThumbs();
							readyScripts.ui.thumbnailHover();
							readyScripts.ui.paginateVideos();
							readyScripts.ui.wrapVideoLinks();

							$this.addClass('loaded');
						});
					}
				});
			}
		},
		
		route: {
			init: function() {
				readyScripts.route.booking();
				readyScripts.route.churchMapping.init();
				readyScripts.route.receipt();
				readyScripts.route.subscribe();
				readyScripts.route.accountorderHistory();
				readyScripts.route.library.init();
			},

			churchMapping: {
				init: function(){
					readyScripts.route.churchMapping.list();
				},
				list: function(){
					if(!$('#churh-map')[0]) return;

					function initialize() {
						var mapOptions = {
							center: new google.maps.LatLng( 13.58582006253172, -45.50356260739669),
							minZoom:3,
							zoom: 3,
							mapTypeId: google.maps.MapTypeId.ROADMAP
						};

						var map = new google.maps.Map(document.getElementById("churh-map"),
								mapOptions);
							

						var markers = [];
					    var infoWindowContent = [];
						
					    $.each(window.locations.items, function(k, v) {
					        var elem = $(this),
					            _address = v.address1,
					            _city = v.city,
					            _state = v.state,
					            _postcode = v.zipcode,
					            _lat = v['Google Latitude'],
					            _lng = v['Google Longitude'],
					            _country = v.country,
					            _address2 = v['2nd Address'],
					            _desc = v.description,
					            _name = v.name,
								pinIco = new google.maps.MarkerImage('images/pin.png');

							if(_lat != "" && _lng != ""){

								markers.push([_name,_address + ' ' + _city + ' ' + _state + ' ' + _postcode, _lat, _lng,pinIco]);
								infoWindowContent.push(['<div class="info_content"><h4>' + _name + '</h4>' + _desc + '</div>']);
							}

					    });
					    // Display multiple markers on a map
					    var infoWindow = new google.maps.InfoWindow(),
					        marker, i;

					    // Loop through our array of markers & place each one on the map  
					    for (i = 0; i < markers.length; i++) {
					        var position = new google.maps.LatLng(markers[i][2], markers[i][3]);
					        // bounds.extend(position);
					        marker = new google.maps.Marker({
					            position: position,
					            map: map,
					            icon:  markers[i][4],
					            title: markers[i][0]
					        });

					        // Allow each marker to have an info window    
					        google.maps.event.addListener(marker, 'click', (function(marker, i) {
					            return function() {
					                infoWindow.setContent(infoWindowContent[i][0]);
					                infoWindow.open(map, marker);
					            }
					        })(marker, i));

					    }

					    var allowedBounds,boundLimits,lastValidCenter,newLat,newLng;

				    	allowedBounds = new google.maps.LatLngBounds(
								new google.maps.LatLng(-73, -180),           // top left corner of map
								new google.maps.LatLng(73, 180)            // bottom right corner
		    					
							);

				    	boundLimits = {
								maxLat : allowedBounds.getNorthEast().lat(),
								maxLng : allowedBounds.getNorthEast().lng(),
								minLat : allowedBounds.getSouthWest().lat(),
								minLng : allowedBounds.getSouthWest().lng()
							};

						lastValidCenter = map.getCenter();


						google.maps.event.addListener(map, 'center_changed', function() {

							center = map.getCenter();

							if (allowedBounds.contains(center)) {
								lastValidCenter = map.getCenter();
								return;
							}

							newLat = lastValidCenter.lat();
							newLng = lastValidCenter.lng();
							if(center.lng() > boundLimits.minLng && center.lng() < boundLimits.maxLng){
								newLng = center.lng();
							}
							
							if(center.lat() > boundLimits.minLat && center.lat() < boundLimits.maxLat){
								newLat = center.lat();
							}

							map.panTo(new google.maps.LatLng(newLat, newLng));
						});
					}
					google.maps.event.addDomListener(window, 'load', initialize);
				}
			},

			booking: function(){
				if(!$('#rentals')[0] && !~window.location.pathname.indexOf('/OrderRetrievev2.aspx')) return;
				
				if($('#sameAddress')[0]){
					$('#sameAddress').on('click',function(e){
						if ($(this).is(':checked')) { 
							$('#stat').val('true');
						}else{
							$('#stat').val('');
						}
					});
				}

				function BookAccomodation() {
					this.totalAmount = function() {
						if($('#checkout:visible')[0]) $('#checkout').addClass('hidden'); 
						if($('.accomodationbooking-list > li')[0]) {
							var totalamount = 0;
						
							$('.accomodationbooking-list > li').each(function() {
								var $this = $(this),
									data = $this.data();
								
								if(isNumeric(data.totalamount)) totalamount += parseFloat(data.totalamount);
							});
							
							$('.amount').text(totalamount.toFixed(2)).digits().prepend('$'); 
							$('#checkout').removeClass('hidden'); 
						} else {
							$('.amount').text('0.00').digits().prepend('$'); 
						}
					};
				}
				
				var BookAccomodation = new BookAccomodation();
				
				BookAccomodation.totalAmount();
				
				$('#pagecontent .order-cart-summary .order-cart-summary-scroll').mCustomScrollbar();
				$('#checkintime,#checkouttime, #edit-booking-popup input[name=checkintime], #edit-booking-popup input[name=checkouttime]').inputmask({ mask: "99:99"});
								
				function calAmount($el, arrival, departure, timein, timeout, price) {	
					var days = 1;
				
					if(!isNumeric(price)) return days;
					
					var mapObj = {
						Jan: '0',
						Feb: '1',
						Mar: '2',
						Apr: '3',
						May: '4',
						Jun: '5',
						Jul: '6',
						Aug: '7', 
						Sep: '8',
						Oct: '9',
						Nov: '10',
						Dec: '11'
					};
							
					if(arrival != '' && departure != '') {
						var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds;
												 
						var fromTime = arrival.split('-').reverse().join('-').replace(/Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec/gi, function(matched){
							return mapObj[matched];
						}), aftd = fromTime.split('-'), aftt = timein.split(' '), afthm = aftt[0].split(':'), ftt = aftt[1], fth = parseInt(afthm[0]), ftm = parseInt(afthm[1]), aft24hrformat = (!~ftt.indexOf('pm') ? fth : (fth + 12));
										
						var toTime = departure.split('-').reverse().join('-').replace(/Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec/gi, function(matched){
							return mapObj[matched];
						}), attd = toTime.split('-'), attt = timeout.split(' '), atthm = attt[0].split(':'), ttt = attt[1], tth = parseInt(atthm[0]), ttm = parseInt(atthm[1]), att24hrformat = (!~ttt.indexOf('pm') ? tth : (tth + 12));
						
						var fromTimeDate = new Date(Date.UTC(parseInt(aftd[0]), parseInt(aftd[1]), parseInt(aftd[2]), aft24hrformat, ftm, 0));
						var toTimeDate = new Date(Date.UTC(parseInt(attd[0]), parseInt(attd[1]), parseInt(attd[2]), att24hrformat, ttm, 0));
												 
						days = Math.round(Math.abs((fromTimeDate.getTime() - toTimeDate.getTime())/(oneDay)));
						days = (days == 0) ? 1 : days;
						
						$el.find('input[name="CAT_Custom_12"]').val(price * days);  
					}
					
					return days;
				}

				function accommodationList() {
					var $grid = $('.accommodation-list');

					$grid.isotope({
						itemSelector: '.accomodation-item',
						layoutMode: 'fitRows'
					});

					$grid.find('.accomodation-item ').each(function(){
						var $this = $(this),
							_id = $this.data('id');
						$('<div />').load('/_ajax-booking-list?itemid='+_id, function() {
							$('.accommodation-list .accomodation-item[data-id="'+_id+'"] .book-availability').text($(this).find('#system-message').text());
						});	
					});

					$('.accomodation-filter a').on('click', function(e) {

						var $this = $(this);
						
						$('.accomodation-filter a.active').removeClass('active');
						$this.addClass('active');
						$grid.isotope({filter: $this.attr('href').split('#')[1]});
						
						e.preventDefault();
					});
				}
				
				function accommodationPopup() {
					$('#booking-popup #checkIn').datepicker({
						showAnim: 'drop',
						dateFormat: 'dd-M-yy',
						minDate: '-0D',
						beforeShowDay: function(date){
					        var dateString = $.datepicker.formatDate('mm/dd/yy', date);
							for( var x = 0 ; x <= notAvailableRange.length ; x++){
						        if (notAvailableRange[x] == dateString) {
						            available = false;
						            break;
						        } else {
						            available = true;
						        }
					        }
					        if(!available){
					        	return [false, "ui-state-booked", notAvailableRange[x]];
					        }else{
					        	return [true];
					        }
					    },
					    onClose: function (selectedDate) {
					    	$("#checkOut").val('');
			            }
					});

					$('#booking-popup #checkOut').datepicker({
	                	showAnim: 'drop',
						dateFormat: 'dd-M-yy',
						minDate: '-0D',
					    beforeShow: function(){
					    	var checkin = $("#checkIn").datepicker('getDate');
               				if (checkin) return {minDate: checkin}
					    },
						beforeShowDay: function(date){
					        var dateString = $.datepicker.formatDate('mm/dd/yy', date);
							for( var x = 0 ; x <= notAvailableRange.length ; x++){
						        if (notAvailableRange[x] == dateString) {
						            available = false;
						            break;
						        } else {
						            available = true;
						        }
					        }
					        if(!available){
					        	return [false, "ui-state-booked", notAvailableRange[x]];
					        }else{
					        	return [true];
					        }
					    }
	                });

					$('.book-popup').on('focus',function(){$(this).blur();}); // hover fix on magnipic popup

					$('.booking-content .book-popup').livequery('click', function(e) {
						var $this = $(this),
							popupSRC = $this.attr('href');
						
						$.magnificPopup.open({
							items: {
					          	src: popupSRC,
					      	},
						   	type:'inline',
						   	callbacks: {
							beforeOpen: function() {
								return false;
							}, 
							elementParse: function(item) {
								var $thumb = $this.parents('.accommodation-thumb'),
									$item = $this.parents('.accomodation-item');
								
								var contentDescEl = $thumb.find('.content-holder .desc-data'),
									contentExtraEl = $thumb.find('.content-holder .extra-data'),
									contentFacilitiesEl = $thumb.find('.content-holder .facilities-data'),
									contentMainEl = $thumb.find('.main'),
									catalogid = $item.data('catalogid'),
									accId = $item.data('id'),
									accEi = bcpie.globals.user.entityId,
									accName = $item.data('name'),
									accPrice = $item.data('price'),
									attributes = $item.find('.productAttributes').clone();
									
								var $popup = $('#booking-popup'),
									$info = $popup.find('.book-info'),
									$contentholder =  $info.find('.content-holder'),
									$mainholder =  $info.find('.main-holder'),
									$tabs =  $info.find('.tabs-wrapper .tabs-navigation');
									
								var descEl = $contentholder.find('#desc-data'),
									extraEl = $contentholder.find('#extra-data'),
									facEl = $contentholder.find('#facilities-data'),
									desctab = $tabs.find('.desc-tab'),
									extratab = $tabs.find('.ext-tab'),
									factab = $tabs.find('.fac-tab');
									
								$mainholder.html(contentMainEl.html());
								
								$popup.find('#catalogid').val(catalogid);
								$popup.find('#acc-id').val(accId);
								$popup.find('#ItemName').val(accEi + ' - ' + accName);
								$popup.find('#CAT_Custom_8').val(accPrice);
								
								if(attributes[0]) {
									$(attributes.html()).insertAfter($popup.find('form > .row > .medium-12:eq(3)'));
									
									$popup.find('.catProductAttributeGroup').addClass('medium-12 columns');
									$popup.find('select[mandatory="1"]').addClass('customvalidation-dropdown');
									$popup.find('input[type="radio"][mandatory="1"]').addClass('customvalidation-radio');
									
									$popup.find('.catProductAttributeGroup').each(function() {
										var $radio = $(this).find('.customvalidation-radio');
										
										if($radio[0] && $radio.length == 1) $radio.prop('checked', true);
									});
								}
								
								if(!contentDescEl[0]) { 
									descEl.html();
									descEl.removeClass('active');
									desctab.removeClass('active').hide();
								} else {
									descEl.html(contentDescEl.html());
									desctab.show();
								}
								
								if(!contentExtraEl[0]) {
									extraEl.html();
									extratab.hide();
								} else {
									extraEl.html(contentExtraEl.html());
									extratab.show();
								}
								
								if(!contentFacilitiesEl[0]) {
									facEl.html();
									factab.hide();
								} else {
									facEl.html(contentFacilitiesEl.html());
									factab.show();
								}

								var notAvailable = [];
									notAvailableRange = [];
									notAvailable = eval('[' +$item.find('.book-availability').text()+ ']');
								for( var x = 0 ; x < notAvailable.length ; x++){
									var start = notAvailable[x].startDate;
									var end = notAvailable[x].endDate;
							        for (var d = new Date(start);
							            d <= new Date(end);
							            d.setDate(d.getDate() + 1)) {
							                notAvailableRange.push($.datepicker.formatDate('mm/dd/yy', d));
							        }
						        }

								$('#booking-popup #dateAvailability').datepicker({
									numberOfMonths: 3,
									dateFormat: 'mm/dd/yy',
									minDate: '-0D',
									beforeShowDay: function(date){
								        var dateString = $.datepicker.formatDate('mm/dd/yy', date);
										for( var x = 0 ; x <= notAvailableRange.length ; x++){
									        if (notAvailableRange[x] == dateString) {
									            available = false;
									            break;
									        } else {
									            available = true;
									        }
								        }
								        if(!available){
								        	return [false, "ui-state-booked", notAvailableRange[x]];
								        }else{
								        	return [true];
								        }
								    } 
				                });

							},
							close: function() {
								var $popup = $('#booking-popup'),
									$navigation = $popup.find('.book-info .tabs-wrapper .tabs-navigation'),
									$content = $popup.find('.book-info .tabs-wrapper .tabs-content');
									
								$navigation.find('a.active').removeClass('active');
								$content.find('.tabs-panel.active').removeClass('active');
								$navigation.find('> li:first a').addClass('active');
								$content.find('.tabs-panel:first').addClass('active');
								
								$popup.find('form[name="addtobooking"]')[0].reset();
								$popup.find('form[name="addtobooking"] select.error').removeClass('error');
								$popup.find('.catProductAttributeGroup').remove();
								
								$('#booking-popup #dateAvailability').datepicker("destroy");
						    }
						}
						});
						
						e.preventDefault();
					});
					
					$('.booking-content .cart-summary .action-link .edit').livequery('click', function(e) {
						var $this = $(this);
							popupSRC = $this.attr('href');
						
						$.magnificPopup.open({
							items: {
					          	src: popupSRC,
					      	},
						   	type:'inline',
							callbacks: {
								elementParse: function(item){
									var $item = $this.parents('.item'),
										$itemformval = $this.parents('.item').find('.item-data .form-data'),
										$itempop = $('#edit-booking-popup ');
								
									var contentDescEl = $item.find('.desc-data'),
										contentExtraEl = $item.find('.extra-data'),
										contentFacilitiesEl = $item.find('.facilities-data'),
										contentMainEl = $item.find('.main'),
										timein = $itemformval.data('timein'),
										timeout = $itemformval.data('timeout'),
										timeinabbr = $itemformval.data('timeinabbr'),
										timeoutabbr = $itemformval.data('timeoutabbr'),
										datein = $itemformval.data('datein'),
										dateout = $itemformval.data('dateout'),
										dateinnum = $itemformval.data('dateinnum'),
										dateoutnum = $itemformval.data('dateoutnum'),
										sets = $itemformval.data('sets'),
										purpose = $itemformval.text(),
										token = $item.data('token'),
										cartitemid = $item.data('cartitemidentifier'),
										catalogid = $item.data('catalogid'),
										accId = $item.data('id'),
										bookId = $item.data('bookid'),
										accName = $item.data('name'),
										accPrice = $('.accomodation-item[data-id="'+ accId +'"]').data('price'),
										attributes = $('.accomodation-item[data-id="'+ accId +'"] .productAttributes').clone();
										totalAmount = $item.data('totalamount'),
										desc = $item.data('desc');
									
									var descEl = $itempop.find('.content-holder #desc-data'),
										extraEl = $itempop.find('.content-holder #extra-data'),
										facEl = $itempop.find('.content-holder #facilities-data'),
										mainEl = $itempop.find('.main-holder'),
										desctab = $itempop.find('.tabs-wrapper .tabs-navigation .desc-tab'),
										extratab = $itempop.find('.tabs-wrapper .tabs-navigation .ext-tab'),
										factab = $itempop.find('.tabs-wrapper .tabs-navigation .fac-tab');

									$itempop.find('input[name="cartitemid"]').val(cartitemid);
									$itempop.find('input[name="CAT_Custom_14"]').val(token);
									$itempop.find('input[name="catalogid"]').val(catalogid);
									$itempop.find('#BookID').val(bookId);
									$itempop.find('#acc-id').val(accId);
									$itempop.find('#ItemName').val(accName);
									$itempop.find('#CAT_Custom_8').val(accPrice);
									$itempop.find('#CAT_Custom_12').val(totalAmount);
									mainEl.html(contentMainEl.html());
									
									if(attributes[0]) {
										$(attributes.html()).insertAfter($itempop.find('form > .row > .medium-12:eq(3)'));
										
										$itempop.find('.catProductAttributeGroup').addClass('medium-12 columns');
										$itempop.find('select[mandatory="1"]').addClass('customvalidation-dropdown');
										$itempop.find('input[type="radio"][mandatory="1"]').addClass('customvalidation-radio');
										
										$.each(desc.slice(0, -1).split('|'), function(k, v) {
											$itempop.find('select option:contains('+ $.trim(v) +')').prop('selected', true);
											$('.catProdAttributeItem span:contains("'+ $.trim(v) +'")').prev().prop('checked', true);
										});
									}
									
									if(!contentDescEl[0]){
										descEl.html();
										descEl.removeClass('active');
										desctab.removeClass('active').hide();
										
									}else{
										descEl.html(contentDescEl.html());
										desctab.show();
									}
									
									if(!contentExtraEl[0]){
										extraEl.html();
										extratab.hide();
									}else{
										extraEl.html(contentExtraEl.html());
										extratab.show();
									}
									
									if(!contentFacilitiesEl[0]){
										facEl.html();
										factab.hide();
									}else{
										facEl.html(contentFacilitiesEl.html());
										factab.show();
									}
									
									$itempop.find('input[name="CAT_Custom_2"]').val(datein);
									$itempop.find('input[name="CAT_Custom_3"]').val(dateout);
																		
									$itempop.find('select[name="editcheckinhr"] option[value="'+ timein.split(':')[0] +'"]').prop('selected', true);
									$itempop.find('select[name="editcheckinmin"] option[value="'+ timein.split(':')[1] +'"]').prop('selected', true);
									$itempop.find('select[name="editcheckouthr"] option[value="'+ timeout.split(':')[0] +'"]').prop('selected', true);
									$itempop.find('select[name="editcheckoutmin"] option[value="'+ timeout.split(':')[1] +'"]').prop('selected', true);
									$itempop.find('select[name="editcheckintimeabbr"] option[value="'+ timeinabbr +'"]').prop('selected', true);
									$itempop.find('select[name="editcheckouttimeabbr"] option[value="'+ timeoutabbr +'"]').prop('selected', true);
									
									$itempop.find('input[name="CAT_Custom_4"]').val(timein + ' ' + timeinabbr);
									$itempop.find('input[name="CAT_Custom_5"]').val(timeout + ' ' +timeoutabbr);
									$itempop.find('input[name="CAT_Custom_11"]').val(sets);
									$itempop.find('textarea[name="CAT_Custom_7"]').val(purpose);
									$itempop.find('input[name="CAT_Custom_15"]').val('Pending'); 

									var notAvailable = [],
										notAvailableRange = [],
										editnotAvailableRange = [];

										notAvailable = eval('[' +$('.accommodation-list .accomodation-item[data-id="'+accId+'"] .book-availability').text()+ ']');

									for( var x = 0 ; x < notAvailable.length ; x++){
										var start = notAvailable[x].startDate;
										var end = notAvailable[x].endDate;
										if(start != dateinnum && end != dateoutnum){
									        for (var d = new Date(start);
									            d <= new Date(end);
									            d.setDate(d.getDate() + 1)) {
									                editnotAvailableRange.push($.datepicker.formatDate('mm/dd/yy', d));
									        }
									    }
							        }

							        for( var x = 0 ; x < notAvailable.length ; x++){
										var start = notAvailable[x].startDate;
										var end = notAvailable[x].endDate;
								        for (var d = new Date(start);
								            d <= new Date(end);
								            d.setDate(d.getDate() + 1)) {
								                notAvailableRange.push($.datepicker.formatDate('mm/dd/yy', d));
								        }
							        }


							        $('#edit-booking-popup #checkIn').datepicker({
										showAnim: 'drop',
										dateFormat: 'dd-M-yy',
										minDate: '-0D',
										beforeShowDay: function(date){
									        var dateString = $.datepicker.formatDate('mm/dd/yy', date);
											for( var x = 0 ; x <= editnotAvailableRange.length ; x++){
										        if (editnotAvailableRange[x] == dateString) {
										            available = false;
										            break;
										        } else {
										            available = true;
										        }
									        }
									        if(!available){
									        	return [false, "ui-state-booked", editnotAvailableRange[x]];
									        }else{
									        	return [true];
									        }
									    },
									    onClose: function (selectedDate) {
									    	$("#checkOut").val('');
							            }
									});

									$('#edit-booking-popup #checkOut').datepicker({
					                	showAnim: 'drop',
										dateFormat: 'dd-M-yy',
										minDate: '-0D',
									    beforeShow: function(){
									    	var checkin = $("#checkIn").datepicker('getDate');
				               				if (checkin) return {minDate: checkin}
									    },
										beforeShowDay: function(date){
									        var dateString = $.datepicker.formatDate('mm/dd/yy', date);
											for( var x = 0 ; x <= editnotAvailableRange.length ; x++){
										        if (editnotAvailableRange[x] == dateString) {
										            available = false;
										            break;
										        } else {
										            available = true;
										        }
									        }
									        if(!available){
									        	return [false, "ui-state-booked", editnotAvailableRange[x]];
									        }else{
									        	return [true];
									        }
									    }
					                });

									$('#edit-booking-popup #dateAvailability').datepicker({
										numberOfMonths: 3,
										dateFormat: 'mm/dd/yy',
										minDate: '-0D',
										beforeShowDay: function(date){
									        var dateString = $.datepicker.formatDate('mm/dd/yy', date);
											for( var x = 0 ; x <= notAvailableRange.length ; x++){
										        if (notAvailableRange[x] == dateString) {
										            available = false;
										            break;
										        } else {
										            available = true;
										        }
									        }
									        if(!available){
									        	return [false, "ui-state-booked", notAvailableRange[x]];
									        }else{
									        	return [true];
									        }
									    }
					                });

								},
								close: function() {
							      var $popup = $('#edit-booking-popup'),
										$navigation = $popup.find('.book-info .tabs-wrapper .tabs-navigation'),
										$content = $popup.find('.book-info .tabs-wrapper .tabs-content');
										
									$navigation.find('a.active').removeClass('active');
									$content.find('.tabs-panel.active').removeClass('active');
									$navigation.find('> li:first a').addClass('active');
									$content.find('.tabs-panel:first').addClass('active');
									$popup.find('#acc-id').val('');
									$popup.find('.catProductAttributeGroup').remove();
									$('#edit-booking-popup #dateAvailability, #edit-booking-popup #checkIn, #edit-booking-popup #checkOut').datepicker( "destroy" );
							    }
							}
						});
						
						e.preventDefault();
					});
				}
				
				function book() {
					var cartOID = null;
					
					$('form[name="addtobooking"]').livequery('submit', function(e) {
						var $this = $(this), attr = [], attramount = 0, selectedattributes = '';

						$this.find('.catProdAttributeItem select option:not([value=""]):selected').each(function() {
							attr.push($(this).val() + '|1');
							attramount += parseFloat($(this).text().split('$')[1]);
							
							selectedattributes += $(this).text() + '|';
						});
						
						$this.find('.catProductAttributeGroup').each(function() {							
							var $radio = $(this).find('.customvalidation-radio:visible:first'),
								$radioSelected = $this.find('input[name="'+ $radio.attr('name') +'"]:checked');
						
							if($radio[0] && $radioSelected[0]) {
								
								attr.push($radioSelected.attr('id') + '|1');
								attramount += parseFloat($radioSelected.next().text().split('$')[1]);
								
								selectedattributes += $radioSelected.next().text() + '|';
							}
						});
											
						if(attramount > 0) $this.find('input[name="CAT_Custom_8"]').val(parseFloat($this.find('input[name="CAT_Custom_8"]').val()) + attramount);
						
						$this.find('input[name="ItemDescription"]').val(selectedattributes);
							
						var cookie = $.cookie('CartID'),
							rand = randomCharNum(),
							catalogid = parseInt($this.find('input[name="catalogid"]').val()),
							id = parseInt($this.find('input[name="CAT_Custom_13"]').val()),
							arrival = $this.find('input[name="CAT_Custom_2"]').val(),
							departure = $this.find('input[name="CAT_Custom_3"]').val(),
							timein = $this.find('input[name="CAT_Custom_4"]').val(),
							timeout = $this.find('input[name="CAT_Custom_5"]').val(),
							price = parseFloat($this.find('input[name="CAT_Custom_8"]').val()),
							guest = $this.find('input[name="CAT_Custom_11"]').val(),
							purpose = $this.find('textarea[name="CAT_Custom_7"]').val();
							
						$this.find('input[name="CAT_Custom_14"]').val(rand);
						$this.find('input[name="CAT_Custom_15"]').val('Pending');
						
						var desc = guest +' guest on '+ arrival + ' to ' + departure +' @ '+ timein + ' to ' + timeout +'. Purpose: '+ purpose + ' cartitemidentifier: '+ rand;
						
						$this.find('.customvalidation-dropdown:visible').each(function() {
							if($(this).val() == null || $(this).val() == '') $(this).addClass('error');
						}).livequery('change', function() {
							if($(this).val() != '') $(this).removeClass('error');
						});
						
						$this.find('.catProductAttributeGroup').each(function() {
							var $radio = $(this).find('.customvalidation-radio:visible:first');
						
							if($radio[0] && !$this.find('input[name="'+ $radio.attr('name') +'"]:checked')[0]) {
								if(!$(this).find('.catProdAttributeItem:last .error')[0]) $(this).find('.catProdAttributeItem:last').append('<small class="error">Please choose '+ $(this).find('.catProdAttributeTitle').text() +'</small>');
							}
						}).livequery('change', function() {
							$(this).find('.catProdAttributeItem:last .error').remove();
						});
					
						if(bcpie.globals.user.isLoggedIn == false) {    
							alert('Please login in order to book');

							window.location.href = 'my-account/login-create-accountd99e.html?origin=/rentals';
						} else {
							if(!$this.find('.error')[0]) {
								var days = calAmount($this, arrival, departure, timein, timeout, price);
							
								bcpie.ajax.webapp.item.save({
									webapp: $this.data('webapp'),
									content: $this,
								}).complete(function(data, status, xhr) {

									alert('Added to Cart');
									$this[0].reset();
	
									CMS.CatalogueRetrieve.ServerSideAddItemToOrder((cookie == undefined) ? -1 : cookie, catalogid, id, days, '', attr, desc, false, 3, false, '', true);
									
									$('<div />').load('/_ajax-submitted-items?itemid=40583&filter=latest #system-message', function() {
										$('.accomodationbooking-list').html($(this).find('#system-message').html());

										$('<div />').load('/_ajax-booking-list?itemid='+id, function() {
											$('.accommodation-list .accomodation-item[data-id="'+id+'"] .book-availability').text($(this).find('#system-message').text());
										});	

										BookAccomodation.totalAmount();
										
										$.magnificPopup.close();
									});
								});
							}
						}
						
						e.preventDefault();
					});
										
					$('form[name="edittobooking"]').livequery('submit', function(e) {
						var $this = $(this), attr = [], attramount = 0, selectedattributes = '';

						$this.find('.catProdAttributeItem select option:not([value=""]):selected').each(function() {
							attr.push($(this).val() + '|1');
							attramount += parseFloat($(this).text().split('$')[1]);
							
							selectedattributes += $(this).text() + '|';
						});
						
						$this.find('.catProductAttributeGroup').each(function() {							
							var $radio = $(this).find('.customvalidation-radio:visible:first'),
								$radioSelected = $this.find('input[name="'+ $radio.attr('name') +'"]:checked');
						
							if($radio[0] && $radioSelected[0]) {
								
								attr.push($radioSelected.attr('id') + '|1');
								attramount += parseFloat($radioSelected.next().text().split('$')[1]);
								
								selectedattributes += $radioSelected.next().text() + '|';
							}
						});
											
						if(attramount > 0) $this.find('input[name="CAT_Custom_8"]').val(parseFloat($this.find('input[name="CAT_Custom_8"]').val()) + attramount);
						
						$this.find('input[name="ItemDescription"]').val(selectedattributes);
						
						var cookie = $.cookie('CartID'),
							rand =  $this.find('input[name="CAT_Custom_14"]').val(),
							catalogid = parseInt($this.find('input[name="catalogid"]').val()),
							arrival = $this.find('input[name="CAT_Custom_2"]').val(),
							departure = $this.find('input[name="CAT_Custom_3"]').val(),
							id = parseInt($this.find('input[name="CAT_Custom_13"]').val()),
							timein = $this.find('input[name="CAT_Custom_4"]').val(),
							timeout = $this.find('input[name="CAT_Custom_5"]').val(),
							price = parseFloat($this.find('input[name="CAT_Custom_8"]').val()),
							BookID = $this.find('input[name="BookID"]').val(),
							cartitemid = parseInt($this.find('input[name="cartitemid"]').val()),
							guest = $this.find('input[name="CAT_Custom_11"]').val(),
							purpose = $this.find('textarea[name="CAT_Custom_7"]').val();
					
						$this.find('input[name="CAT_Custom_15"]').val('Pending'); 
						
						var desc = guest +' guest on '+ arrival + ' to ' + departure +' @ '+ timein + ' to ' + timeout +'. Purpose: '+ purpose + ' cartitemidentifier: '+ rand;
						
						$this.find('.customvalidation-dropdown:visible').each(function() {
							if($(this).val() == null || $(this).val() == '') $(this).addClass('error');
						}).livequery('change', function() {
							if($(this).val() != '') $(this).removeClass('error');
						});
						
						$this.find('.catProductAttributeGroup').each(function() {
							var $radio = $(this).find('.customvalidation-radio:visible:first');
						
							if($radio[0] && !$this.find('input[name="'+ $radio.attr('name') +'"]:checked')[0]) {
								if(!$(this).find('.catProdAttributeItem:last .error')[0]) $(this).find('.catProdAttributeItem:last').append('<small class="error">Please choose '+ $(this).find('.catProdAttributeTitle').text() +'</small>');
							}
						}).livequery('change', function() {
							$(this).find('.catProdAttributeItem:last .error').remove();
						});
						
						if(bcpie.globals.user.isLoggedIn == false) {
							alert('Please login in order to book');
							window.location.href = 'my-account/login-create-accountd99e.html?origin=/rentals';
						} else {
							if(!$this.find('.error')[0]) {

								var days = calAmount($this, arrival, departure, timein, timeout, price);
								
								bcpie.ajax.webapp.item.save({
									webapp: $this.data('webapp'),
									item: BookID,
									content: $this,
								}).complete(function(data, status, xhr) {
									alert('Cart is updated!');
									$this[0].reset();
								
									CMS.CatalogueRetrieve.ServerSideAddItemToOrder((cookie == undefined) ? -1 : cookie, catalogid, id, days, '', attr, desc, false, 3, false, '', true);
									
									if(cartOID == null)  {
										$('<div />').load('/OrderRetrievev2.aspx #cartinfo', function() {
											cartOID = parseInt($(this).find('#cartinfo').data('oid'));
										
											CMS.OrderRetrievev2.ServerSideUpdateItemQuanity(cartOID, 0, id, cartitemid, 0, '', 'US', false, false, true);
										});	
									} else {
										CMS.OrderRetrievev2.ServerSideUpdateItemQuanity(cartOID, 0, id, cartitemid, 0, '', 'US', false, false, true);
									}
									
									$('<div />').load('/_ajax-submitted-items?itemid=Rentals&filter=latest #system-message', function() {	
										$('.accomodationbooking-list').html($(this).find('#system-message').html());
										
										$('<div />').load('/_ajax-booking-list?itemid='+id, function() {
											$('.accommodation-list .accomodation-item[data-id="'+id+'"] .book-availability').text($(this).find('#system-message').text());
										});	
										
										BookAccomodation.totalAmount();
										
										$.magnificPopup.close();
									});
								});
							}
						}
						
						e.preventDefault();
					});
						
					$('.remove').livequery('click', function(e) {
						var cookie = $.cookie('CartID'),
							$this = $(this),
							id = parseInt($this.parents('.item').data('id')),
							cartitemid = parseInt($this.parents('.item').data('cartitemidentifier'));
							
						bcpie.ajax.webapp.item.delete({
							webapp: $this.data('webapp'),
							item: $this.data('itemid')
						}).complete(function(data, status, xhr) {
							$this.parents('li.item').remove(); 
							
							BookAccomodation.totalAmount();
							
							$('<div />').load('/_ajax-booking-list?itemid='+id, function() {
								$('.accommodation-list .accomodation-item[data-id="'+id+'"] .book-availability').text($(this).find('#system-message').text());
							});	
							
							alert('Item is successfully removed from the cart.'); 
							
							if(cartOID == null)  {
								$('<div />').load('/OrderRetrievev2.aspx #cartinfo', function() {
									cartOID = parseInt($(this).find('#cartinfo').data('oid'));
								
									CMS.OrderRetrievev2.ServerSideUpdateItemQuanity(cartOID, 0, id, cartitemid, 0, '', 'US', false, false, true);
								});	
							} else {
								CMS.OrderRetrievev2.ServerSideUpdateItemQuanity(cartOID, 0, id, cartitemid, 0, '', 'US', false, false, true);
							}
						});
						
						e.preventDefault();
					});

					if($('.accomodationbooking-list[data-cartstatus="empty-cart"]')[0]){

						$('.accomodationbooking-list .remove').each(function(){
							var cookie = $.cookie('CartID'),
							$this = $(this),
							id = parseInt($this.parents('.item').data('id')),
							cartitemid = parseInt($this.parents('.item').data('cartitemidentifier'));
							
							bcpie.ajax.webapp.item.delete({
								webapp: $this.data('webapp'),
								item: $this.data('itemid')
							}).complete(function(data, status, xhr) {
								$this.parents('li.item').remove(); 
								BookAccomodation.totalAmount();
							});
							$('.accomodationbooking-list').html('No items found.');
							$('.amount').text('0.00').digits().prepend('$');
						});
					}
				}
				
				BookAccomodation.totalAmount();
				accommodationList();
				accommodationPopup();
				book();
			}, 
			
			receipt: function() {
				if(!~window.location.pathname.indexOf('/library/online-magazine/subscribe')) return;   
				
				$("#all").on('change', function(){
					$('.check-list .field-holder input:not(#all):checkbox').prop('checked', $('#all').is(':checked'));   
				});
			},
			
			subscribe: function() {
				if(!$('#accomodationbooking')[0]) return;   
				
				var $el = $('#accomodationbooking');
				
				$el.find('form').each(function() {
					bcpie.ajax.webapp.item.save({
						webapp: $(this).data('webapp'), 
						item: $(this).data('itemid'),
						content: $(this)
					});
				});
			},

			accountorderHistory: function() {
				if(!$('.booking-history')[0])return;
				
				$('.invoicePopup').magnificPopup({
				  	type:'inline',
				  	midClick: true, // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
					callbacks: {
						beforeOpen: function(elem) {
							var $details = $('#invoice-popup'),
								mp = $.magnificPopup.instance,
								$t = $(mp.st.el[0]).parents('.table-row');
							
							$details.find('.preview-invoicedate').text($t.data('invoicedate'));
							$details.find('.preview-invoicenumber').text($t.data('invoicenumber'));
							$details.find('.preview-invoiceamount').text($t.data('invoiceamount'));
							$details.find('.preview-invoiceitems').html($t.find('.orderitems').html());
						}
					}
				});
				
				$('.bookingPopup').magnificPopup({
				  	type:'inline',
				  	midClick: true, // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
					callbacks: {
						beforeOpen: function(elem) {
							var $form = $('form[name="finalbookingpayment"]');
							
							var mp = $.magnificPopup.instance,
								$t = $(mp.st.el[0]).parents('.table-row');
							
							$form.trigger('reset');
							
							$form.find('input[name="InvoiceNumber"]').val($t.data('invoicenumber'));
							$form.find('input[name="Amount"]').val($t.data('invoiceamount'));
							$form.find('textarea[name="CAT_Custom_2131447"]').val($.trim($t.find('#email-orderdetails').html()));
						}
					}
				});
				
				if(globals.get.invoice != undefined && $('.table-row[data-invoicenumber="'+ globals.get.invoice +'"][data-invoicestatus="Awaiting Payment"]')[0]) {
					var $invoice = $('.table-row[data-invoicenumber="'+ globals.get.invoice +'"]'),
						$form = $('form[name="finalbookingpayment"]');
					
					$form.find('input[name="Amount"]').val($invoice.data('invoiceamount'));
					
					$.magnificPopup.open({items: {src: '#pay-popup'},type: 'inline'}, 0);
				}
			},  

			library: {
				init: function() {
					if($('.side-photos')[0]) {
						$.getJSON('http://api.flickr.com/services/feeds/photos_public.gne?id=130955075@N04&amp;lang=en-us&amp;format=json&amp;jsoncallback=?', function (data) {
							$.each(data.items, function(k, v) {
								if(k < 6) $('.side-photos').append('<div class="flickr_badge_image" id="flickr_badge_image1"><a href="'+ v.link +'" target="_blank"><img src="'+ v.media.m +'" alt="A photo on Flickr" title="'+ v.media.title +'" width="100" height="67"></a></div>');
							});
						});
					}
					
					readyScripts.route.library.curriculumLayout.init();
					readyScripts.route.library.onlineMagazine.init();
					readyScripts.route.library.curriculum();
					readyScripts.route.library.doctrinal();
					readyScripts.route.library.curriculumSectionVisibility();
					readyScripts.route.library.foreignLanguages();
					readyScripts.route.library.historical();
					readyScripts.route.library.historicalDetail();
					readyScripts.route.library.pageTitle();
					readyScripts.route.library.mainLibrarySearchResult();
					readyScripts.route.library.publishing.init();
				},

				onlineMagazine: {
					init: function(){
						readyScripts.route.library.onlineMagazine.onlineDetail();
						readyScripts.route.library.onlineMagazine.issueVolume();
						readyScripts.route.library.onlineMagazine.sidebarRelated();
					},
					onlineDetail: function(){
						if(!$('.mzine-detail-wrapper .article-detail')[0]) return;
						
						var $authorposts = $('#authorposts');

						var category = $('.mzine-detail-wrapper').data('category').toLowerCase();

						$('#pagecontent .mzine-wrapper .mzine-header .mzine-menu > ul > li a').each(function(){
							var label = $(this).text().toLowerCase();
							if(category.indexOf(label) > -1){
								$(this).addClass('active');
							}
						});
							
						bcpie.ajax.webapp.search({
							json: 'false',
							webapp: 38559,
							formID: 772852,
							responsePageID: 20500927 + '&limit=50&sort=alphabetical&template=/Layouts/WebApps/[Library Application] - Online Magazine Articles/list-authorpost.tpl',
							content: { 
								CAT_txtKeywords: '',
								CAT_Category: '',
								CAT_Custom_34: $authorposts.data('authorid')
							}
						}).complete(function(data, status, xhr) {
							var $el = $(data.responseText),
								$items = $el.find('.search-items'),
								a = [];
							
							$items.each(function() {
								if($.trim($(this).text()) != $.trim($authorposts.data('posttitle'))) a.push($(this).html());
							});
							
							var b = a.splice(0,Math.floor(a.length / 2));
														
							if(a.length > 0) $('#authorposts').html('<h6><strong>More by this author</strong></h6><div class="row"><div class="medium-6 columns"><ul>'+ a.join('\n') +'</ul></div><div class="medium-6 columns"><ul>'+ b.join('\n') +'</ul></div></div>');
						});
					},
					issueVolume: function(){
						if(!$('.issuevolume-ajax')[0]) return

						var $parent = $('.issuevolume-ajax'),
							volume = $parent.data('volume'),
							webapp = $parent.data('webapp'),
							formid = $parent.data('formid'),
							responseid = $parent.data('webappresponsepageid');

							getArticle(volume,webapp,formid,responseid);

						$('.mzine-issue-slider').on('afterChange', function(event, slick, currentSlide){
						  	var volumeId = $('.mzine-issue-slider .slick-current .mzine-issue-item').data('itemid');
						  	$parent.data('volume', volumeId);
						  	$parent.find('.mzine-article-holder:visible').addClass('hidden');
						  	$parent.find('.mzine-article-list > ul > li').remove();
						  	getArticle(volumeId,webapp,formid,responseid);
						});

						function getArticle(volume,webapp,formid,responseid){
							bcpie.ajax.webapp.search({
								json: 'false',
								webapp: webapp,
								formID: formid,
								responsePageID: responseid,
								content: { 
									CAT_txtKeywords: '',
									CAT_Category: '',
									CAT_Custom_30: volume,
									CAT_Custom_26: 1
								}
							}).complete(function(data, status, xhr) {
								var $el = $(data.responseText).find('.webappsearchresults');

								$el.find('.mzine-article-item').each(function(){
									var cat = $(this).data('category');
									$('#cat_' + cat).parents('.mzine-article-holder.hidden').removeClass('hidden');
									$('#cat_' + cat).append($(this).parents('.search-items > li'));
								});

							});
						}

					},
					sidebarRelated: function(){
						if(!$('.relatedarticles')[0]) return;

						var $parent = $('.related-ajax'),
							tag = $parent.data('tag'),
							webapp = $parent.data('webapp'),
							formid = $parent.data('formid'),
							itemid = $parent.data('id'),
							responseid = $parent.data('webappresponsepageid');

							getArticle(tag,webapp,formid,responseid,itemid);

						function getArticle(tag,webapp,formid,responseid,itemid){
							var x = 0,
								tag = tag.toString(),
								tagSplit = tag.split(',');
								tagSplitsize = tagSplit.length;;
								
							$.each(tagSplit,function(i,v){
								var tag = v;

								bcpie.ajax.webapp.search({
									json: 'false',
									async: false,
									webapp: webapp,
									formID: formid,
									responsePageID: responseid,
									content: { 
										CAT_txtKeywords: '',
										CAT_Category: '',
										CAT_Custom_24: tag
									}
								}).complete(function(data, status, xhr) {
									var $el = $(data.responseText).find('.webappsearchresults');
									$el.find('.search-items:not(.id_' + itemid + ')').each(function(i,v){
										var $this = $(this);
										$parent.find('> ul').append($this.html());

									});
									x = x + 1;	
									if(x == tagSplitsize){
										if($('.relatedarticles').find('> ul > li').length > 0){
											$('.relatedarticles').removeClass('hidden');
											if($('.relatedarticles').find('> ul > li').length > 0){
												$('.relatedarticles').find('> ul > li').each(function(i,v){
													if(i > 4) $(this).remove();
												});
											}
										}
									}
								});
							});
						}

					}

				},
				curriculumLayout:{
					init: function(){
						readyScripts.route.library.curriculumLayout.icoLink();
						readyScripts.route.library.curriculumLayout.answerstudentPage();
						readyScripts.route.library.curriculumLayout.primarypalsstudentPage();
						readyScripts.route.library.curriculumLayout.primarypalsteacherPage();
					},
					icoLink: function(){
						var $this = $('.ico-holder');
						if(!$this[0]) return;

						$this.find('a').each(function(){
							$(this).attr('target','_blank');
						});

					},
					answerstudentPage: function(){
						var $this = $('.unit-wrapper.answerlesson-article');
						if(!$this[0]) return;

						var item = $this.find('.ico-holder').clone(),
							audio = item.find('#audio').attr('href'),
							file = item.find('#file').attr('href');
							
						if(audio == '') item.find('#audio').remove();
						if(file == '') item.find('#file').remove();

						$this.find('#lesson-title').append(item);

					},
					primarypalsstudentPage: function(){
						var $this = $('.unit-wrapper.primarypalslesson-article');
						if(!$this[0]) return;

						var item = $this.find('.ico-holder').clone(),
							audio = item.find('#audio').attr('href'),
							file = item.find('#file').attr('href');

						if(audio == '') item.find('#audio').remove();
						if(file == '') item.find('#file').remove();

						$this.find('#lesson-title').append(item);
					},
					primarypalsteacherPage: function(){
						var $this = $('.unit-wrapper.primarypalsteacher-article');
						if(!$this[0]) return;

						var item = $this.find('.ico-holder').clone(),
							audio = item.find('#audio').attr('href'),
							file = item.find('#file').attr('href');
						if(audio == '') item.find('#audio').remove();
						if(file == '') item.find('#file').remove();

						$this.find('#lesson-title').append(item);

						if($('#supp-scripture').text() == '') $('#supp-scripture').parents('dl').remove(); 
					}
				},
				curriculum: function() {
					if(window.location.pathname.indexOf('/curriculum') < 0 && !$('.curriculum-page')[0]) return;
					if(!$('.ajax-request')[0]) return;
					
					var counter = 1,
						inc = 0,
						len = $('.ajax-request').length;

					$('.ajax-request').each(function() {
						var $this = $(this),
							cols = parseInt($this.data('cols')),
							obj = $this.data();
							
						bcpie.ajax.webapp.search({
							json: 'false',
							webapp: obj.webappid,
							formID: obj.webappformid,
							responsePageID: obj.webappresponsepageid,
							content: { 
								CAT_txtKeywords: '',
								CAT_Category: obj.category,
								CAT_Custom_2: obj.itemid
							}
						}).complete(function(data, status, xhr) {
							var $el = $(data.responseText).find('.webappsearchresults'),
								col1 = [], col2 = [], col3 = [],x = 1,
								totalItems = parseInt($el.find('.searchitems').length),
								split = Math.ceil(totalItems / cols);
							$el.find('.searchitems').each(function(k, v) {
								var _this = $(this).html(),
									anchor = _this.replace('[counter]', counter),
									x = k + 1,
									$list = '<li>' + _this +'</li>';

								switch(cols){
									case  3:
										if(x <= split) {
											col1.push($list);
										}else if( x > split && x <= (split * 2)){
											if(totalItems == 4 && x == (split * 2)){
												col3.push($list);
											}else{
												col2.push($list);	
											}
											
										}else{
											col3.push($list);
										}
									break;

									case  2:
										if(x <= split) {
											col1.push($list);
										}else{
											col2.push($list);
										}
									break;

									default:
										col1.push($list);

									break;
								}
								counter++;
							});
							$this.html($this.html().replace('[col1]', col1.join('\n')).replace('[col2]', col2.join('\n')).replace('[col3]', col3.join('\n'))).find('.hidden').removeClass('hidden');
						
							inc++;

							if(inc == len){
								readyScripts.route.library.counterList($('.unit-item:first').data('listtype'));
							}
						});
					});
				},

				doctrinal: function(){

					if(window.location.pathname.indexOf('/doctrinal') < 0 && !$('.doctrinal-wrapper')[0]) return;
					if(!$('.ajax-request')[0]) return;

					var counter = 1,
						inc = 0,
						len = $('.ajax-request').length;

					$('.ajax-request').each(function() {
						var $this = $(this),
							cols = parseInt($this.data('cols')),
							obj = $this.data();
							
						bcpie.ajax.webapp.search({
							json: 'false',
							webapp: obj.webappid,
							formID: obj.webappformid,
							responsePageID: obj.webappresponsepageid,
							content: { 
								CAT_txtKeywords: '',
								CAT_Category: obj.category,
								CAT_Custom_2: obj.itemid
							}
						}).complete(function(data, status, xhr) {
							var $el = $(data.responseText).find('.webappsearchresults'),
								col1 = [], col2 = [], col3 = [],x = 1,
								totalItems = parseInt($el.find('.searchitems').length),
								split = Math.ceil(totalItems / cols);
							$el.find('.searchitems').each(function(k, v) {
								var _this = $(this).html(),
									anchor = _this.replace('[counter]', counter),
									x = k + 1,
									$list = '<li>' + _this +'</li>';

								switch(cols){
									case  3:
										if(x <= split) {
											col1.push($list);
										}else if( x > split && x <= (split * 2)){
											if(totalItems == 4 && x == (split * 2)){
												col3.push($list);
											}else{
												col2.push($list);	
											}
											
										}else{
											col3.push($list);
										}
									break;

									case  2:
										if(x <= split) {
											col1.push($list);
										}else{
											col2.push($list);
										}
									break;

									default:
										col1.push($list);

									break;
								}
								counter++;
							});
							$this.html($this.html().replace('[col1]', col1.join('\n')).replace('[col2]', col2.join('\n')).replace('[col3]', col3.join('\n'))).find('.hidden').removeClass('hidden');
						
							inc++;

							if(inc == len){
								readyScripts.route.library.counterList($('.unit-item:first').data('listtype'));
							}
						});
					});
				},

				curriculumSectionVisibility: function(){
					if(!$('#suggested-response li')[0]) $('#suggested-response').parents('dl').remove();
				},

				foreignLanguages: function(){
					if(window.location.pathname.indexOf('/foreign-languages') < 0 && !$('.languages-wrapper')[0]) return;
					if(!$('.ajax-request')[0]) return;

					var counter = 1,
						inc = 0,
						len = $('.ajax-request').length;

					$('.ajax-request').each(function() {
						var $this = $(this),
							cols = parseInt($this.data('cols')),
							obj = $this.data();
							
						bcpie.ajax.webapp.search({
							json: 'false',
							webapp: obj.webappid,
							formID: obj.webappformid,
							responsePageID: obj.webappresponsepageid,
							content: { 
								CAT_txtKeywords: '',
								CAT_Category: obj.category,
								CAT_Custom_2: obj.itemid
							}
						}).complete(function(data, status, xhr) {
							var $el = $(data.responseText).find('.webappsearchresults'),
								col1 = [], col2 = [], col3 = [],x = 1,
								totalItems = parseInt($el.find('.searchitems').length),
								split = Math.ceil(totalItems / cols);
							$el.find('.searchitems').each(function(k, v) {
								var _this = $(this).html(),
									anchor = _this.replace('[counter]', counter),
									x = k + 1,
									$list = '<li>' + _this +'</li>';

								switch(cols){
									case  3:
										if(x <= split) {
											col1.push($list);
										}else if( x > split && x <= (split * 2)){
											if(totalItems == 4 && x == (split * 2)){
												col3.push($list);
											}else{
												col2.push($list);	
											}
											
										}else{
											col3.push($list);
										}
									break;

									case  2:
										if(x <= split) {
											col1.push($list);
										}else{
											col2.push($list);
										}
									break;

									default:
										col1.push($list);

									break;
								}
								counter++;
							});
							$this.html($this.html().replace('[col1]', col1.join('\n')).replace('[col2]', col2.join('\n')).replace('[col3]', col3.join('\n'))).find('.hidden').removeClass('hidden');
						
							inc++;

							if(inc == len){
								readyScripts.route.library.counterList($('.unit-item:first').data('listtype'));
							}
						});
					});
				},

				historical: function(){
					
					if(window.location.pathname.indexOf('/historical') < 0 && !$('.historical-wrapper')[0]) return;
					if(!$('.ajax-request')[0]) return;
					
					var counter = 1,
						inc = 0,
						len = $('.ajax-request').length;

					$('.ajax-request').each(function() {
						var $this = $(this),
							cols = parseInt($this.data('cols')),
							obj = $this.data();
							
						bcpie.ajax.webapp.search({
							json: 'false',
							webapp: obj.webappid,
							formID: obj.webappformid,
							responsePageID: obj.webappresponsepageid,
							content: { 
								CAT_txtKeywords: '',
								CAT_Category: obj.category,
								CAT_Custom_2: obj.itemid
							}
						}).complete(function(data, status, xhr) {
							var $el = $(data.responseText).find('.webappsearchresults'),
								col1 = [], col2 = [], col3 = [],x = 1,
								totalItems = parseInt($el.find('.searchitems').length),
								split = Math.ceil(totalItems / cols);
							$el.find('.searchitems').each(function(k, v) {
								var _this = $(this).html(),
									anchor = _this.replace('[counter]', counter),
									x = k + 1,
									$list = '<li>' + _this +'</li>';

								switch(cols){
									case  3:
										if(x <= split) {
											col1.push($list);
										}else if( x > split && x <= (split * 2)){
											if(totalItems == 4 && x == (split * 2)){
												col3.push($list);
											}else{
												col2.push($list);	
											}
											
										}else{
											col3.push($list);
										}
									break;

									case  2:
										if(x <= split) {
											col1.push($list);
										}else{
											col2.push($list);
										}
									break;

									default:
										col1.push($list);

									break;
								}
								counter++;
							});
							$this.html($this.html().replace('[col1]', col1.join('\n')).replace('[col2]', col2.join('\n')).replace('[col3]', col3.join('\n'))).find('.hidden').removeClass('hidden');
						
							inc++;
						});
					});
				},
				historicalDetail: function(){
					if(!$('#pagecontent .historical-article #introduction .dropcap')[0]) return

					var $intro = $('#pagecontent .historical-article #introduction p:first'),
						introDesc = $intro.text();
					$intro.text(introDesc.substring(1, introDesc.length));

				},
				counterList: function(data){
					var counter = 1;
						
					switch(data){
						case 'numerical': 
							$('.unit-item.numerical-list li a').each(function(){
							  	$(this).prepend('<span>' + counter + '.</span> ');
							 	counter = counter + 1;
							});
						break;
						case 'alphabetical': 
							function nextChar(c) {
							    return String.fromCharCode(c.charCodeAt(0) + 1).toUpperCase();
							}
							$('.unit-item.alphabetical-list').each(function(){
								var countAlp = 'A';
								$(this).find('li a').each(function(){
									$(this).prepend('<span>'+ countAlp + '.</span> ');
									countAlp = nextChar(countAlp);
								});
							});
							
						break;
					}
				},

				sortTable:function(){
					var $parent = $('.filter-table tbody'),
					$parentitem = $parent.children('tr');

					$parentitem.sort(function(a,b){
						var an = a.getAttribute('data-name'),
							bn = b.getAttribute('data-name');

						if(an > bn) {
							return 1;
						}
						if(an < bn) {
							return -1;
						}
						return 0;
					});

					$parentitem.detach().appendTo($parent);
				},

				pageTitle: function(){
					if(!$('.page-title')[0]) return;

					$('head title').text($('#breadcrumbs .this_crumb').text());
				},
				
				mainLibrarySearchResult: function(){
					if(window.location.pathname != '/main-library-search-results' && window.location.pathname != '/online-magazine-search-results') return;
					
					var obj = {
						'The Apostolic Faith Magazine': {ccid: 38559, fid: 772852, tpl: '/Layouts/WebApps/[Library Application] - Online Magazine Articles/_search-result.tpl'},
						'Doctrinal Resources': {ccid: 41622, fid: 895332, tpl: '/Layouts/WebApps/[Library Application] - Doctrinal Articles/_search-result.tpl'},
						'Curriculum Series': {ccid: 40986, fid: 874915, tpl: '/Layouts/WebApps/[Library Application] - Curriculum Articles/_search-result.tpl'}, 
						'Historical Materials': {ccid: 41675, fid: 896235, tpl: '/Layouts/WebApps/[Library Application] - Historical Articles/_search-result.tpl'}, 
						'Foreign Languages': {ccid: 41634, fid: 895489, tpl: '/Layouts/WebApps/[Library Application] - Foreign Languages Articles/_search-result.tpl'}
					};
						
					$.each(obj,function(k, v) {
						bcpie.ajax.webapp.search({
							json: 'false',
							webapp: v.ccid,
							formID: v.fid,
							responsePageID: 20500927 + '&limit=5&sort=alphabetical&template=' + v.tpl,
							content: { 
								CAT_txtKeywords: globals.get.keyword
							}
						}).complete(function(data, status, xhr) {
							var $el = $(data.responseText);
							var $searchresults = $('.search-content > div[data-category="'+ k +'"]');

							
							 
							$el.find('.webappsearchresults .desc').each(function() {
								$(this).text($(this).text().replace(/(?:\r\n|\r|\n)/g, ' ').replace(/  /g,'').substring(0, 200) + '..');
							});

							$searchresults.append($el.find('.webappsearchresults').html());

							$searchresults.append('<hr />');
							$searchresults.find('.pagination').wrapAll('<div class="generic-pagination"></div>').removeClass('pagination');
							$searchresults.find('.generic-pagination ul li').each(function() {
								$(this).find('a').attr('href', $(this).find('a').attr('href') + '&limit=5&sort=alphabetical&template=' + encodeURIComponent(v.tpl));
							});
						});
					});

					$('.generic-pagination ul li a').livequery('click', function(e) {
						var $this = $(this);
						
						$('<div />').load($(this).attr('href'), function(d) {
							var $el = $(this);
							var $searchresults = $this.parents('.ajaxresult');
							
							$searchresults.find('.search-result, .generic-pagination, hr').remove();
							
							$el.find('.system-message .desc').each(function() {
								$(this).text($(this).text().replace(/(?:\r\n|\r|\n)/g, ' ').replace(/  /g,'').substring(0, 200) + '..');
							});
							$searchresults.append($el.find('.system-message').html());
							$searchresults.append('<hr />');
							$searchresults.find('.pagination').wrapAll('<div class="generic-pagination"></div>').removeClass('pagination');
							$searchresults.find('.generic-pagination ul li').each(function() {
								$(this).find('a').attr('href', $(this).find('a').attr('href') + '&limit=5&sort=alphabetical&template=' + encodeURIComponent(obj[$searchresults.data('category')].tpl));
							});
						});
						
						e.preventDefault();
					});
				},

				publishing:{
					
					init: function(){
						if(!$('#publishing-page')[0]) return;

						this.listing();
					},
					list_tpl: $('<div/>').html('<div class="publish-content"><div class="emblem-list" data-cols="2" ><div class="row hidden"><div class="medium-6 columns"><ul>[col1]</ul></div><div class="medium-6 columns"><ul>[col2]</ul></div></div></div></div>'),
					listing: function(){

						$parent = $('#publishing-page');

						$parent.find('.tab-title a').click(function(){
							var _id = $(this).data('id'),
								_target = $(this).attr('href');

							if(!$(_target).find('> .tab-holder > .tabs-content > .content')[0]){

								if($(_target).find('.publish-content')[0]) return;

								$(_target).html('<div class="loading"><i class="fa fa-spinner fa-spin"</i></div>');

								var $this = $(_target),
									cols = 2,
									counter = 1;

								bcpie.ajax.webapp.search({
									json: 'false',
									webapp: 46554,
									formID: 1144525,
									responsePageID: '20500927&A=WebApp&Page=1&limit=100&sort=weightreverse&template=/Layouts/WebApps/[Library Application] - Publishing Articles/_list-generic.tpl',
									content: { 
										CAT_txtKeywords: '',
										CAT_Category: 879996,
										CAT_Custom_2: _id
									}
								}).complete(function(data, status, xhr) {

									var $el = $(data.responseText).find('.webappsearchresults'),
										col1 = [], col2 = [], col3 = [],x = 1,
										totalItems = parseInt($el.find('.searchitems').length),
										split = Math.ceil(totalItems / cols);

									$el.find('.searchitems').each(function(k, v) {

										
										var _this = $(this).html(),
											x = k + 1,
											$list = '<li>' + _this +'</li>';

										switch(cols){
											case  3:
												if(x <= split) {
													col1.push($list);
												}else if( x > split && x <= (split * 2)){
													if(totalItems == 4 && x == (split * 2)){
														col3.push($list);
													}else{
														col2.push($list);	
													}
													
												}else{
													col3.push($list);
												}
											break;

											case  2:
												if(x <= split) {
													col1.push($list);
												}else{
													col2.push($list);
												}
											break;

											default:
												col1.push($list);

											break;
										}
										counter++;
									});

									$this.html(readyScripts.route.library.publishing.list_tpl.html().replace('[col1]', col1.join('\n')).replace('[col2]', col2.join('\n')).replace('[col3]', col3.join('\n'))).find('.hidden').removeClass('hidden');

									if(totalItems < 1){
										$this.html('<div class="publish-content"><span class="message">No result found.</span></div>');
									}
								});
							}

						});

						$parent.find('.unit-item').each(function(){
							$(this).find('.tabs > li:first-child a').click();
						});


					}

				}
			}
		}
	};
	
	$(document).ready(function() { readyScripts.init(); });
});


