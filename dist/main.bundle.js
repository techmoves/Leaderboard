(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(81),o=t.n(r),a=t(645),c=t.n(a)()(o());c.push([e.id,"h1 {\r\n  text-align: center;\r\n}\r\n\r\n.recente-scores {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.flex-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n}\r\n\r\n.container {\r\n  display: flex;\r\n  justify-items: center;\r\n  justify-content: space-around;\r\n}\r\n\r\n.top-2 {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 20px;\r\n}\r\n\r\n.btn {\r\n  height: 24px;\r\n}\r\n\r\nul li {\r\n  list-style: none;\r\n  padding-top: 11px;\r\n}\r\n\r\ntable {\r\n  width: 100%;\r\n  text-align: left;\r\n  border-collapse: collapse;\r\n}\r\n\r\nthead {\r\n  background-color: #aba7a7;\r\n}\r\n\r\ntr:nth-child(even) {\r\n  background-color: #f2f2f2;\r\n  margin-top: 10px;\r\n}\r\n\r\n.submit {\r\n  margin: 15px 0 0 0;\r\n}\r\n\r\ninput {\r\n  margin: 15px 0 0 0;\r\n\r\n}",""]);const s=c},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var s=0;s<this.length;s++){var i=this[s][0];null!=i&&(c[i]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);r&&c[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),n.push(u))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},c=[],s=0;s<e.length;s++){var i=e[s],l=r.base?i[0]+r.base:i[0],u=a[l]||0,p="".concat(l," ").concat(u);a[l]=u+1;var d=t(p),f={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==d)n[d].references++,n[d].updater(f);else{var m=o(f,r);r.byIndex=s,n.splice(s,0,{identifier:p,updater:m,references:1})}c.push(p)}return c}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var s=t(a[c]);n[s].references--}for(var i=r(e,o),l=0;l<a.length;l++){var u=t(a[l]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}a=i}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),a=t(569),c=t.n(a),s=t(565),i=t.n(s),l=t(216),u=t.n(l),p=t(589),d=t.n(p),f=t(426),m={};m.styleTagTransform=d(),m.setAttributes=i(),m.insert=c().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=u(),n()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const h=()=>{let e=[];return localStorage.getItem("scores")&&(e=JSON.parse(localStorage.getItem("scores"))),e},v=(e=h())=>{const n=document.querySelector(".tb");n.innerHTML="",e.forEach((e=>{const t=document.createElement("tr"),r=document.createElement("td"),o=document.createElement("td");r.textContent=e.name,o.textContent=e.score,t.appendChild(r),t.appendChild(o),n.appendChild(t)}))},y=document.querySelector(".form");document.querySelector(".Refresh").addEventListener("click",(()=>{localStorage.setItem("scores",JSON.stringify([])),v()})),y.addEventListener("submit",(async e=>{e.preventDefault();((e,n)=>{const t=h();t.push({name:e,score:n}),localStorage.setItem("scores",JSON.stringify(t))})(y.name.value,y.score.value),(async(e,n)=>{const t={user:e,Score:n};v(),await(async()=>(await fetch("https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/4iWhaPUyox6pHAr1pbvY/scores/",{method:"POST",body:JSON.stringify(t),headers:{"Content-type":"application/json; charset=UTF-8"}})).json())().then((e=>e))})(y.name.value,y.score.value),v(),y.reset()})),v(),(async()=>{await(async()=>(await fetch("https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/4iWhaPUyox6pHAr1pbvY/scores/",{method:"GET",headers:{"Content-type":"application/json; charset=UTF-8"}})).json())().then((e=>e.result))})()})()})();