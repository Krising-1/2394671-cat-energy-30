var e=document.querySelector(".product-effect__button-wrapper"),s=e.querySelector(".product-effect__button"),i=e.querySelector(".product-effect__image-wrapper--before"),a=e.querySelector(".product-effect__image-after");window.addEventListener("resize",()=>{s.style.left="50%",i.style.width="100%",a.style.width="50%"});var r=o=>{let n=e.getBoundingClientRect(),t=Math.round(o.clientX-n.left);if(t<0||t>parseInt(getComputedStyle(e).width,10))return!1;s.style.left=`${t}px`,i.style.width=`${t}px`,a.style.width=`${parseInt(getComputedStyle(e).width,10)-t}px`},d=o=>{let n=e.getBoundingClientRect(),t=Math.round(o.touches[0].pageX-n.left);if(t<0||t>parseInt(getComputedStyle(e).width,10))return!1;s.style.left=`${t}px`,i.style.width=`${t}px`,a.style.width=`${parseInt(getComputedStyle(e).width,10)-t}px`},c=()=>{s.addEventListener("mousedown",()=>{e.addEventListener("mousemove",r)}),window.addEventListener("mouseup",()=>{e.removeEventListener("mousemove",r)}),s.addEventListener("touchstart",()=>{e.addEventListener("touchmove",d)}),window.addEventListener("touchend",()=>{e.removeEventListener("touchmove",d)})};var l=()=>{let o=document.querySelector(".main-nav"),n=document.querySelector(".main-header__toggle");o.classList.remove("main-nav--nojs"),n.classList.remove("main-header__toggle--nojs"),n.addEventListener("click",()=>{o.classList.contains("main-nav--close")?(o.classList.remove("main-nav--close"),o.classList.add("main-nav--open"),n.classList.remove("main-header__toggle--close"),n.classList.add("main-header__toggle--open")):(o.classList.add("main-nav--close"),o.classList.remove("main-nav--open"),n.classList.remove("main-header__toggle--open"),n.classList.add("main-header__toggle--close"))})};l();c();
