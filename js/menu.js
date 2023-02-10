(() => {
  const mobileMenu = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");
  const logoRef = document.querySelector("[data-logo]");

    mobileMenu.addEventListener("click", () => {
        const expanded = mobileMenu.getAttribute("aria-expanded") === "true" || false;
        mobileMenu.setAttribute("aria-expanded", !expanded);
      
        mobileMenu.classList.toggle("menu__button--is-open");
        mobileMenuRef.classList.toggle("menu--is-open");
        logoRef.classList.toggle("logo--is-close");
        document.body.classList.toggle("modal-open")
        
  
  });
})();