(()=>{var e={721:e=>{function t(){}t.prototype.get=function(e){(e=e||{}).dummyText&&(e.dummyText=escape(e.dummyText));var t=[50,100,150,200,250,300,350,400,450,500,550,600],r=[!!e.gray&&"g",e.width||t[Math.ceil(12*Math.random())],e.height||t[Math.ceil(12*Math.random())],e.category||"cats",e.imageIndex,e.dummyText],o=r.length,n=e.protocol||"http",a=e.baseUrl||"lorempixel.com",d=a.lastIndexOf("/");a=d===a.length-1?a.substr(0,d):a;for(var l=0;l<o;l++)r[l]||r.splice(l,1);return n+"://"+a+"/"+r.join("/")},e.exports=new t}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,r),a.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";var e=r(721),t=(r.n(e)().get(),document.getElementById("root")),o=document.createElement("h1");o.innerHTML="Hello world!",t.appendChild(o);var n=document.getElementById("cats"),a=document.createElement("img");a.setAttribute("src","https://lorempixel.com/150/150/cats/"),a.classList.add("koti"),n.appendChild(a)})()})();