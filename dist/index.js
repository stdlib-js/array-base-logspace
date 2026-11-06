"use strict";var c=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(s){throw (r=0, s)}};};var v=c(function(q,p){
var a=require('@stdlib/math-base-special-pow/dist');function n(e,r,s){var t,i,o,u;if(s===0)return[];for(i=s-1,o=(r-e)/i,t=[a(10,e)],u=1;u<i;u++)t.push(a(10,e+o*u));return t.push(a(10,r)),t}p.exports=n
});var f=v();module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
