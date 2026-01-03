/* ===== Loading ===== */
    AOS.init();

window.addEventListener("load", function () {
  const loading = document.querySelector(".loding");

  setTimeout(() => {
    loading.classList.add("hide");

    setTimeout(() => {
      loading.style.display = "none";
    }, 800);
  });
});
/*header scrol */
let lastScroll = 0;
const pillNav = document.querySelector(".ccs-pillNav");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll < lastScroll) {
    pillNav.classList.remove("hide"); // طالع لفوق
  } else {
    pillNav.classList.add("hide"); // نازل لتحت
  }

  lastScroll = currentScroll <= 0 ? 0 : currentScroll;
});
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".ccs-pillItem");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.offsetHeight;

    if (
      window.pageYOffset >= sectionTop &&
      window.pageYOffset < sectionTop + sectionHeight
    ) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});
  const toggle = document.getElementById("menuToggle");
  const nav = document.getElementById("mobileNav");

  toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");
    nav.classList.toggle("show");
  });

