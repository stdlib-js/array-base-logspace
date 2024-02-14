// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";function r(r){return r!=r}var e=Math.floor;function t(r){return e(r)===r}function n(r){return t(r/2)}function i(r){return n(r>0?r-1:r+1)}var o=Number.POSITIVE_INFINITY,a=Number.NEGATIVE_INFINITY;function u(r){return r===o||r===a}var c=Math.sqrt;function f(r){return Math.abs(r)}var l="function"==typeof Object.defineProperty?Object.defineProperty:null,s=Object.defineProperty;function p(r){return"number"==typeof r}function y(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function g(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+y(i):y(i)+r,n&&(r="-"+r)),r}var d=String.prototype.toLowerCase,v=String.prototype.toUpperCase;function h(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!p(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=g(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=g(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===v.call(r.specifier)?v.call(t):d.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function b(r){return"string"==typeof r}var w=Math.abs,m=String.prototype.toLowerCase,A=String.prototype.toUpperCase,S=String.prototype.replace,_=/e\+(\d)$/,E=/e-(\d)$/,U=/^(\d+)$/,I=/^(\d+)e/,j=/\.0$/,x=/\.0*e/,T=/(\..*[^0])0*e/;function k(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!p(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":w(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=S.call(t,T,"$1e"),t=S.call(t,x,"e"),t=S.call(t,j,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=S.call(t,_,"e+0$1"),t=S.call(t,E,"e-0$1"),r.alternate&&(t=S.call(t,U,"$1."),t=S.call(t,I,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===A.call(r.specifier)?A.call(t):m.call(t)}function F(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function O(r,e,t){var n=e-r.length;return n<0?r:r=t?r+F(n):F(n)+r}var N=String.fromCharCode,V=isNaN,$=Array.isArray;function G(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function H(r){var e,t,n,i,o,a,u,c,f;if(!$(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",u=1,c=0;c<r.length;c++)if(b(n=r[c]))a+=n;else{if(e=void 0!==n.precision,!(n=G(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(i=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,V(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,V(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=h(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!V(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=V(o)?String(n.arg):N(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=k(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=g(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=O(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a}var W=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function C(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function L(r){var e,t,n,i;for(t=[],i=0,n=W.exec(r);n;)(e=r.slice(i,W.lastIndex-n[0].length)).length&&t.push(e),t.push(C(n)),i=W.lastIndex,n=W.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function P(r){return"string"==typeof r}function R(r){var e,t;if(!P(r))throw new TypeError(R("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[L(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return H.apply(null,e)}var Z=Object.prototype,M=Z.toString,X=Z.__defineGetter__,Y=Z.__defineSetter__,q=Z.__lookupGetter__,z=Z.__lookupSetter__,B=function(){try{return l({},"x",{}),!0}catch(r){return!1}}()?s:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===M.call(r))throw new TypeError(R("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===M.call(t))throw new TypeError(R("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(q.call(r,e)||z.call(r,e)?(n=r.__proto__,r.__proto__=Z,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&X&&X.call(r,e,t.get),a&&Y&&Y.call(r,e,t.set),r};function D(r,e,t){B(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var J="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function K(){return J&&"symbol"==typeof Symbol.toStringTag}var Q=Object.prototype.toString,rr=Object.prototype.hasOwnProperty;function er(r,e){return null!=r&&rr.call(r,e)}var tr,nr="function"==typeof Symbol?Symbol:void 0,ir="function"==typeof nr?nr.toStringTag:"",or=K()?function(r){var e,t,n;if(null==r)return Q.call(r);t=r[ir],e=er(r,ir);try{r[ir]=void 0}catch(e){return Q.call(r)}return n=Q.call(r),e?r[ir]=t:delete r[ir],n}:function(r){return Q.call(r)},ar="function"==typeof Uint32Array,ur="function"==typeof Uint32Array?Uint32Array:null,cr="function"==typeof Uint32Array?Uint32Array:void 0;tr=function(){var r,e,t;if("function"!=typeof ur)return!1;try{e=new ur(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(ar&&t instanceof Uint32Array||"[object Uint32Array]"===or(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?cr:function(){throw new Error("not implemented")};var fr,lr=tr,sr=Object.prototype.toString,pr="function"==typeof Symbol?Symbol:void 0,yr="function"==typeof pr?pr.toStringTag:"",gr=K()?function(r){var e,t,n;if(null==r)return sr.call(r);t=r[yr],e=er(r,yr);try{r[yr]=void 0}catch(e){return sr.call(r)}return n=sr.call(r),e?r[yr]=t:delete r[yr],n}:function(r){return sr.call(r)},dr="function"==typeof Float64Array,vr="function"==typeof Float64Array?Float64Array:null,hr="function"==typeof Float64Array?Float64Array:void 0;fr=function(){var r,e,t;if("function"!=typeof vr)return!1;try{e=new vr([1,3.14,-3.14,NaN]),t=e,r=(dr&&t instanceof Float64Array||"[object Float64Array]"===gr(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?hr:function(){throw new Error("not implemented")};var br,wr=fr,mr=Object.prototype.toString,Ar="function"==typeof Symbol?Symbol:void 0,Sr="function"==typeof Ar?Ar.toStringTag:"",_r=K()?function(r){var e,t,n;if(null==r)return mr.call(r);t=r[Sr],e=er(r,Sr);try{r[Sr]=void 0}catch(e){return mr.call(r)}return n=mr.call(r),e?r[Sr]=t:delete r[Sr],n}:function(r){return mr.call(r)},Er="function"==typeof Uint8Array,Ur="function"==typeof Uint8Array?Uint8Array:null,Ir="function"==typeof Uint8Array?Uint8Array:void 0;br=function(){var r,e,t;if("function"!=typeof Ur)return!1;try{e=new Ur(e=[1,3.14,-3.14,256,257]),t=e,r=(Er&&t instanceof Uint8Array||"[object Uint8Array]"===_r(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Ir:function(){throw new Error("not implemented")};var jr,xr=br,Tr=Object.prototype.toString,kr="function"==typeof Symbol?Symbol:void 0,Fr="function"==typeof kr?kr.toStringTag:"",Or=K()?function(r){var e,t,n;if(null==r)return Tr.call(r);t=r[Fr],e=er(r,Fr);try{r[Fr]=void 0}catch(e){return Tr.call(r)}return n=Tr.call(r),e?r[Fr]=t:delete r[Fr],n}:function(r){return Tr.call(r)},Nr="function"==typeof Uint16Array,Vr="function"==typeof Uint16Array?Uint16Array:null,$r="function"==typeof Uint16Array?Uint16Array:void 0;jr=function(){var r,e,t;if("function"!=typeof Vr)return!1;try{e=new Vr(e=[1,3.14,-3.14,65536,65537]),t=e,r=(Nr&&t instanceof Uint16Array||"[object Uint16Array]"===Or(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?$r:function(){throw new Error("not implemented")};var Gr,Hr={uint16:jr,uint8:xr};(Gr=new Hr.uint16(1))[0]=4660;var Wr,Cr,Lr=52===new Hr.uint8(Gr.buffer)[0];!0===Lr?(Wr=1,Cr=0):(Wr=0,Cr=1);var Pr={HIGH:Wr,LOW:Cr},Rr=new wr(1),Zr=new lr(Rr.buffer),Mr=Pr.HIGH,Xr=Pr.LOW;function Yr(r,e,t,n){return Rr[0]=r,e[n]=Zr[Mr],e[n+t]=Zr[Xr],e}function qr(r){return Yr(r,[0,0],1,0)}D(qr,"assign",Yr);var zr=!0===Lr?0:1,Br=new wr(1),Dr=new lr(Br.buffer);function Jr(r,e){return Br[0]=r,Dr[zr]=e>>>0,Br[0]}function Kr(r){return 0|r}var Qr,re,ee=2147483647,te=!0===Lr?1:0,ne=new wr(1),ie=new lr(ne.buffer);function oe(r){return ne[0]=r,ie[te]}!0===Lr?(Qr=1,re=0):(Qr=0,re=1);var ae={HIGH:Qr,LOW:re},ue=new wr(1),ce=new lr(ue.buffer),fe=ae.HIGH,le=ae.LOW;function se(r,e){return ce[fe]=r,ce[le]=e,ue[0]}var pe=[0,0];function ye(r,e){var t,n;return qr.assign(r,pe,1,0),t=pe[0],t&=ee,n=oe(e),se(t|=n&=2147483648,pe[1])}var ge=!0===Lr?1:0,de=new wr(1),ve=new lr(de.buffer);function he(r,e){return de[0]=r,ve[ge]=e>>>0,de[0]}var be=1023,we=1048576,me=[1,1.5],Ae=[0,.5849624872207642],Se=[0,1.350039202129749e-8];function _e(e,t,n,i){return r(e)||u(e)?(t[i]=e,t[i+n]=0,t):0!==e&&f(e)<22250738585072014e-324?(t[i]=4503599627370496*e,t[i+n]=-52,t):(t[i]=e,t[i+n]=0,t)}D((function(r){return _e(r,[0,0],1,0)}),"assign",_e);var Ee=[0,0],Ue=[0,0];function Ie(e,t){var n,i;return 0===t||0===e||r(e)||u(e)?e:(_e(e,Ee,1,0),t+=Ee[1],t+=function(r){var e=oe(r);return(e=(2146435072&e)>>>20)-be|0}(e=Ee[0]),t<-1074?ye(0,e):t>1023?e<0?a:o:(t<=-1023?(t+=52,i=2220446049250313e-31):i=1,qr.assign(e,Ue,1,0),n=Ue[0],n&=2148532223,i*se(n|=t+be<<20,Ue[1])))}var je=1048575,xe=1048576,Te=1083179008,ke=1e300,Fe=1e-300,Oe=[0,0],Ne=[0,0];function Ve(e,n){var l,s,p,y,g,d,v,h,b,w,m,A,S,_;if(r(e)||r(n))return NaN;if(qr.assign(n,Oe,1,0),g=Oe[0],0===Oe[1]){if(0===n)return 1;if(1===n)return e;if(-1===n)return 1/e;if(.5===n)return c(e);if(-.5===n)return 1/c(e);if(2===n)return e*e;if(3===n)return e*e*e;if(4===n)return(e*=e)*e;if(u(n))return function(r,e){return-1===r?(r-r)/(r-r):1===r?1:f(r)<1==(e===o)?0:o}(e,n)}if(qr.assign(e,Oe,1,0),y=Oe[0],0===Oe[1]){if(0===y)return function(r,e){return e===a?o:e===o?0:e>0?i(e)?r:0:i(e)?ye(o,r):o}(e,n);if(1===e)return 1;if(-1===e&&i(n))return-1;if(u(e))return e===a?Ve(-0,-n):n<0?0:o}if(e<0&&!1===t(n))return(e-e)/(e-e);if(p=f(e),l=y&ee|0,s=g&ee|0,v=g>>>31|0,d=(d=y>>>31|0)&&i(n)?-1:1,s>1105199104){if(s>1139802112)return function(r,e){return(oe(r)&ee)<=1072693247?e<0?1/0:0:e>0?1/0:0}(e,n);if(l<1072693247)return 1===v?d*ke*ke:d*Fe*Fe;if(l>1072693248)return 0===v?d*ke*ke:d*Fe*Fe;m=function(r,e){var t,n,i,o,a,u;return t=(a=1.9259629911266175e-8*(i=e-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((n=Jr(n=(o=1.4426950216293335*i)+a,0))-o),r[0]=n,r[1]=t,r}(Ne,p)}else m=function(r,e,t){var n,i,o,a,u,c,f,l,s,p,y,g,d,v,h,b,w,m,A,S,_;return m=0,t<we&&(m-=53,t=oe(e*=9007199254740992)),m+=(t>>20)-be|0,t=1072693248|(A=1048575&t|0),A<=235662?S=0:A<767610?S=1:(S=0,m+=1,t-=we),a=Jr(i=(b=(e=he(e,t))-(f=me[S]))*(w=1/(e+f)),0),n=524288+(t>>1|536870912),c=he(0,n+=S<<18),h=(o=i*i)*o*(0===(_=o)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),c=Jr(c=3+(o=a*a)+(h+=(u=w*(b-a*c-a*(e-(c-f))))*(a+i)),0),d=(y=-7.028461650952758e-9*(s=Jr(s=(b=a*c)+(w=u*c+(h-(c-3-o))*i),0))+.9617966939259756*(w-(s-b))+Se[S])-((g=Jr(g=(p=.9617967009544373*s)+y+(l=Ae[S])+(v=m),0))-v-l-p),r[0]=g,r[1]=d,r}(Ne,p,l);if(A=(w=(n-(h=Jr(n,0)))*m[0]+n*m[1])+(b=h*m[0]),qr.assign(A,Oe,1,0),S=Kr(Oe[0]),_=Kr(Oe[1]),S>=Te){if(0!=(S-Te|_))return d*ke*ke;if(w+8008566259537294e-32>A-b)return d*ke*ke}else if((S&ee)>=1083231232){if(0!=(S-3230714880|_))return d*Fe*Fe;if(w<=A-b)return d*Fe*Fe}return A=function(r,e,t){var n,i,o,a,u,c,f,l,s,p;return s=((l=r&ee|0)>>20)-be|0,f=0,l>1071644672&&(i=he(0,((f=r+(xe>>s+1)>>>0)&~(je>>(s=((f&ee)>>20)-be|0)))>>>0),f=(f&je|xe)>>20-s>>>0,r<0&&(f=-f),e-=i),r=Kr(r=oe(c=1-((c=(o=.6931471824645996*(i=Jr(i=t+e,0)))+(a=.6931471805599453*(t-(i-e))+-1.904654299957768e-9*i))*(n=c-(i=c*c)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(n-2)-((u=a-(c-o))+c*u)-c))),(r+=f<<20>>>0)>>20<=0?Ie(c,f):he(c,r)}(S,b,w),d*A}return function(r,e,t){var n,i,o,a;if(0===t)return[];for(o=(e-r)/(i=t-1),n=[Ve(10,r)],a=1;a<i;a++)n.push(Ve(10,r+o*a));return n.push(Ve(10,e)),n}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).logspace=e();
//# sourceMappingURL=browser.js.map
