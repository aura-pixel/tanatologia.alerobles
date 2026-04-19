// HERO ANIMATION
window.addEventListener("load", () => {

  const heroContent = document.querySelector(".hero-content");
  const heroButtons = document.querySelectorAll(".hero-btn");

  // animar texto
  setTimeout(() => {
    heroContent.classList.add("active");
  }, 200);

  // animar botones escalonado
  heroButtons.forEach((btn, index) => {
    setTimeout(() => {
      btn.classList.add("active");
    }, 600 + (index * 200));
  });

});

// HEADER SCROLL EFFECT
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");

  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// MOBILE MENU
const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// CERRAR MENU AL HACER CLICK
const links = document.querySelectorAll(".nav a");

links.forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});

const confianzaItems = document.querySelectorAll(".confianza-item");

function showConfianza() {
  const trigger = window.innerHeight;

  confianzaItems.forEach((item, index) => {
    const top = item.getBoundingClientRect().top;

    if (top < trigger - 100) {
      setTimeout(() => {
        item.style.opacity = "1";
        item.style.transform = "translateY(0)";
      }, index * 150);
    }
  });
}

window.addEventListener("scroll", showConfianza);

const cards = document.querySelectorAll(".card");

function showCards() {
  const trigger = window.innerHeight;

  cards.forEach((card, index) => {
    const top = card.getBoundingClientRect().top;

    if (top < trigger - 100) {
      setTimeout(() => {
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
      }, index * 120);
    }
  });
}

window.addEventListener("scroll", showCards);

const procesoItems = document.querySelectorAll(".proceso-item");

function showProceso() {
  const trigger = window.innerHeight;

  procesoItems.forEach((item, index) => {
    const top = item.getBoundingClientRect().top;

    if (top < trigger - 100) {
      setTimeout(() => {
        item.style.opacity = "1";
        item.style.transform = "translateY(0)";
      }, index * 120);
    }
  });
}

window.addEventListener("scroll", showProceso);

const pasos = document.querySelectorAll(".paso");

function showPasos() {
  const trigger = window.innerHeight;

  pasos.forEach((paso, index) => {
    const top = paso.getBoundingClientRect().top;

    if (top < trigger - 100) {
      setTimeout(() => {
        paso.style.opacity = "1";
        paso.style.transform = "translateY(0)";
      }, index * 150);
    }
  });
}

window.addEventListener("scroll", showPasos);

const sobreSection = document.querySelector(".sobre-content");

function showSobre() {
  const trigger = window.innerHeight;
  const top = sobreSection.getBoundingClientRect().top;

  if (top < trigger - 100) {
    sobreSection.style.opacity = "1";
    sobreSection.style.transform = "translateY(0)";
  }
}

window.addEventListener("scroll", showSobre);

const galeriaImgs = document.querySelectorAll(".galeria img");

function showGaleria() {
  const trigger = window.innerHeight;

  galeriaImgs.forEach((img, index) => {
    const top = img.getBoundingClientRect().top;

    if (top < trigger - 100) {
      setTimeout(() => {
        img.style.opacity = "1";
        img.style.transform = "scale(1)";
      }, index * 120);
    }
  });
}

window.addEventListener("scroll", showGaleria);

const modalidadCards = document.querySelectorAll(".modalidad-card");

function showModalidad() {
  const trigger = window.innerHeight;

  modalidadCards.forEach((card, index) => {
    const top = card.getBoundingClientRect().top;

    if (top < trigger - 100) {
      setTimeout(() => {
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
      }, index * 150);
    }
  });
}

window.addEventListener("scroll", showModalidad);

const frases = document.querySelectorAll(".frases-mini p");

function showFrases() {
  const trigger = window.innerHeight;

  frases.forEach((frase, index) => {
    const top = frase.getBoundingClientRect().top;

    if (top < trigger - 100) {
      setTimeout(() => {
        frase.style.opacity = "1";
        frase.style.transform = "translateY(0)";
      }, index * 150);
    }
  });
}

window.addEventListener("scroll", showFrases);