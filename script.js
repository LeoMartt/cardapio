const btnMobile = document.querySelector("#btn-mobile");

function toggleMenu(event) {
  if (event.type === "touchstart") event.preventDefault();
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
  const active = nav.classList.contains("active");
  event.currentTarget.setAttribute("aria-expanded", active);
  if (active) {
    event.currentTarget.setAttribute("aria-label", "Fechar Menu");
  } else {
    event.currentTarget.setAttribute("aria-label", "Abrir Menu");
  }
}

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);

/* SCROLL SUAVE */

const linksInternos = document.querySelectorAll("#menu a[href^='#']");

function scrollToSection(event) {
  event.preventDefault();
  const href = event.currentTarget.getAttribute("href");
  const section = document.querySelector(href);
  const topo = section.offsetTop;

  window.scrollTo({
    top: topo,
    behavior: "smooth",
  });

  // Fecha o menu após clicar em um link interno
  const nav = document.getElementById("nav");
  nav.classList.remove("active");
  btnMobile.setAttribute("aria-expanded", false);
  btnMobile.setAttribute("aria-label", "Abrir Menu");
}

linksInternos.forEach((link) => {
  link.addEventListener("click", scrollToSection);
});
