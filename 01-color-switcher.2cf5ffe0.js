const t={bodyEl:document.querySelector("body"),startEl:document.querySelector("[data-start]"),stopEl:document.querySelector("[data-stop]")};let e=null,o=!1;t.startEl.addEventListener("click",(function(){if(o)return;o=!0,e=setInterval((()=>{var e;e=`#${Math.floor(16777215*Math.random()).toString(16)}`,t.bodyEl.style.backgroundColor=e}),1e3)})),t.stopEl.addEventListener("click",(function(){o=!1,console.log(e),clearInterval(e)}));
//# sourceMappingURL=01-color-switcher.2cf5ffe0.js.map
