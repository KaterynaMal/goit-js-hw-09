!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");var n=null;t.addEventListener("click",(function(){n||(t.disabled=!0,n=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3))})),e.addEventListener("click",(function(){clearInterval(n),n=null,t.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.3ab23583.js.map
