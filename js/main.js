
// ==========================
// 🌿 HEADER SCROLL (sombra)
// ==========================
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});


// ==========================
// 📱 MENÚ LATERAL
// ==========================
const menuToggle = document.getElementById("menu-toggle");
const sideMenu = document.getElementById("side-menu");
const closeMenu = document.getElementById("close-menu");
const overlay = document.getElementById("overlay");

menuToggle.addEventListener("click", () => {
  sideMenu.classList.add("active");
  overlay.classList.add("active");
});

closeMenu.addEventListener("click", () => {
  sideMenu.classList.remove("active");
  overlay.classList.remove("active");
});

overlay.addEventListener("click", () => {
  sideMenu.classList.remove("active");
  overlay.classList.remove("active");
});


// cerrar menú al dar click en links
document.querySelectorAll(".side-menu a").forEach(link => {
  link.addEventListener("click", () => {
    sideMenu.classList.remove("active");
    overlay.classList.remove("active");
  });
});


// ==========================
// 🪟 MODAL SUAVE
// ==========================
const modal = document.getElementById("modal");
const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");

if (openBtn) {
  openBtn.addEventListener("click", () => {
    modal.style.display = "block";

    // pequeña animación
    setTimeout(() => {
      modal.classList.add("show");
    }, 10);
  });
}

if (closeBtn) {
  closeBtn.addEventListener("click", () => {
    modal.classList.remove("show");

    setTimeout(() => {
      modal.style.display = "none";
    }, 100);
  });
}

// cerrar al dar click fuera
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("show");

    setTimeout(() => {
      modal.style.display = "none";
    }, 100);
  }
});


// ==========================
// ✨ ANIMACIONES AL SCROLL
// ==========================

const revealElements = document.querySelectorAll(
  ".section-title, .section-text, .card, .bloque, .paso, .sobre-content, .sobre-img, .modalidad-card, .contacto-container, .frases-grid img"
);

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("reveal-active");
    }
  });
}, {
  threshold: 0.10
});

revealElements.forEach(el => {
  el.classList.add("reveal");
  revealObserver.observe(el);
});


// ==========================
// ⏱️ DELAY PROGRESIVO
// ==========================
revealElements.forEach((el, i) => {
  el.style.transitionDelay = `${i * 0.05}s`;
});

// efecto click tipo "presión"
document.querySelectorAll(".btn, .btn-main, .btn-outline").forEach(btn => {
  btn.addEventListener("mousedown", () => {
    btn.style.transform = "scale(0.96)";
  });

  btn.addEventListener("mouseup", () => {
    btn.style.transform = "scale(1)";
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "scale(1)";
  });
});

document.querySelectorAll(".galeria img, .frases-grid img").forEach(img => {

  img.addEventListener("mousemove", (e) => {
    const rect = img.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const moveX = (x - rect.width / 2) / 20;
    const moveY = (y - rect.height / 2) / 20;

    img.style.transform = `scale(1.03) translate(${moveX}px, ${moveY}px)`;
  });

  img.addEventListener("mouseleave", () => {
    img.style.transform = "scale(1)";
  });

});


// ==========================
// 📍 MENÚ ACTIVO SEGÚN SECCIÓN
// ==========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".side-menu a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120; // ajuste por header
    const sectionHeight = section.clientHeight;

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");

    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});