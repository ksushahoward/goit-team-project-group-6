!function(){var e,o,t,n;!function(){var e={openModalBtn:document.querySelector("[data-franchise-modal-open]"),closeModalBtn:document.querySelector("[data-franchise-modal-close]"),modal:document.querySelector("[data-franchise-modal]")};function o(){document.body.classList.toggle("modal-open"),e.modal.classList.toggle("modal-is-hidden")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)}(),e=document.querySelector(".js-menu-container"),o=document.querySelector(".js-open-menu"),t=document.querySelector(".js-close-menu"),n=function(){var t="true"===o.getAttribute("aria-expanded")||!1;o.setAttribute("aria-expanded",!t),e.classList.toggle("is-open"),bodyScrollLock[t?"enableBodyScroll":"disableBodyScroll"](document.body)},o.addEventListener("click",n),t.addEventListener("click",n),window.matchMedia("(min-width: 768px)").addEventListener("change",(function(t){t.matches&&(e.classList.remove("is-open"),o.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})),function(){var e={openModalBtn:document.querySelector("[data-locations-modal-open]"),closeModalBtn:document.querySelector("[data-locations-modal-close]"),modal:document.querySelector("[data-locations-modal]")};function o(){document.body.classList.toggle("modal-open"),e.modal.classList.toggle("modal-is-hidden")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)}()}();
//# sourceMappingURL=index.79143161.js.map
