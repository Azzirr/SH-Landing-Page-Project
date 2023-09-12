document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(function (link) {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: "smooth",
                });
            }
        });
    });
});

const navLinks = document.querySelectorAll(".second-nav a");
function checkSectionVisibility() {
  document.querySelectorAll("section").forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionBottom = sectionTop + section.clientHeight;
    const windowScroll = window.scrollY;
    if (windowScroll >= sectionTop && windowScroll < sectionBottom) {
      const targetId = section.getAttribute("id");
      navLinks.forEach((link) => {
        if (link.getAttribute("href") === `#${targetId}`) {
          link.classList.add("focus-on-scroll");
        } else {
          link.classList.remove("focus-on-scroll");
        }
      });
    }
  });
}
window.addEventListener("load", checkSectionVisibility);
window.addEventListener("scroll", checkSectionVisibility);

// FOOTER DELETE CLASS
if ( window.innerWidth < 768 ) {
  document.querySelector("div").classList.remove('footer-desktop');
}