!function(e){var t={};function n(r){if(t[r])return t[r].exports;var c=t[r]={i:r,l:!1,exports:{}};return e[r].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(r,c,function(t){return e[t]}.bind(null,c));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";n.r(t);n(2),n(3),n(4),n(5)},function(e,t){var n=!1;function r(){window.innerWidth<=768?n||(n=!0,new Swiper(".mySwiper",{direction:"horizontal",slidesPerView:"auto",spaceBetween:16,pagination:{el:".swiper-pagination",clickable:!0}})):n&&(n=!1)}r(),window.addEventListener("resize",r)},function(e,t){var n=document.querySelector(".dropdown"),r=document.querySelector(".burger");n.addEventListener("click",(function(){r.classList.remove("burger_hidden")})),document.querySelector(".burger_close").addEventListener("click",(function(){r.classList.add("burger_hidden")}));var c=document.querySelector(".burger__container");r.addEventListener("click",(function(e){e.composedPath().includes(c)||r.classList.add("burger_hidden")}));var i=document.querySelectorAll(".button_close"),o=document.querySelector(".feedback");i[0].addEventListener("click",(function(){o.classList.add("feedback_hidden")}));var d=document.querySelector(".feedback__container");o.addEventListener("click",(function(e){e.composedPath().includes(d)||o.classList.add("feedback_hidden")}));var l=document.querySelectorAll(".button__chat");l[1].addEventListener("click",(function(){o.classList.remove("feedback_hidden")})),l[0].addEventListener("click",(function(){o.classList.remove("feedback_hidden"),window.innerWidth<1366&&r.classList.add("burger_hidden")}));var a=document.querySelector(".call");i[1].addEventListener("click",(function(){a.classList.add("call_hidden")}));var u=document.querySelector(".call__container");a.addEventListener("click",(function(e){e.composedPath().includes(u)||a.classList.add("call_hidden")}));var s=document.querySelectorAll(".button_call");s[1].addEventListener("click",(function(){a.classList.remove("call_hidden")})),s[0].addEventListener("click",(function(){a.classList.remove("call_hidden"),window.innerWidth<1366&&r.classList.add("burger_hidden")}))},function(e,t){var n=document.querySelectorAll(".readMore"),r=document.querySelectorAll(".list"),c=!1,i=document.querySelectorAll(".readMore__icon"),o=document.querySelectorAll(".readMore__text");if(window.innerWidth>=768)for(var d=function(e){n[e].addEventListener("click",(function(){c?(r[e-1].removeAttribute("style"),i[e].classList.remove("readMore_rotate"),o[e].textContent="Показать все",c=!1):(r[e-1].style.height="auto",i[e].classList.add("readMore_rotate"),o[e].textContent="Скрыть",c=!0)}))},l=1;l<n.length;l++)d(l)},function(e,t,n){}]);
//# sourceMappingURL=bundle.js.map