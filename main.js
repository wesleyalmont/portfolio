const navMenu = document.getElementById("nav-menu"),
  toggleMenu = document.getElementById("nav-toggle"),
  closeMenu = document.getElementById("nav-close");
  navbar = document.getElementById("navbar");

/* SHOW */
toggleMenu.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

/* CLOSE MENU */

closeMenu.addEventListener("click", () => {
  navMenu.classList.remove("show");
});

/*  ACTIVE AND REMOVE */
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  // active
  navLink.forEach((link) => link.classList.remove("active"));
  this.classList.add("active");

  navMenu.classList.remove("show");
}

navLink.forEach((link) => link.addEventListener("click", linkAction));

/* MENU STICKY */
// window.onscroll = function () {
//   fixedMenu();
// };

// const sticky = navbar.offsetTop ;
// console.log(sticky)
// function fixedMenu() {
//   if (window.pageYOffset > sticky) {
//     navbar.classList.add("sticky");
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }

/* EFFECT ON LOAD PAGE */

const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: false,
});

sr.reveal(".introduce__text", { delay: 200 });
sr.reveal(".introduce__name", { delay: 500 });

sr.reveal(".introduce__image", { delay: 200 });
sr.reveal(".introduce__items", { delay: 300 });

sr.reveal(".about__header", { delay: 200 });
sr.reveal(".about__text", { delay: 400 });
sr.reveal(".about__me", { delay: 500 });


sr.reveal(".works__header", { delay: 200 });
sr.reveal(".works__list", { delay: 300 });
sr.reveal(".about__me", { delay: 400 });


sr.reveal(".skills__header", { delay: 200 });
sr.reveal(".skills_graduation", { delay: 300 });
sr.reveal(".skills_language_title", { delay: 400 });
sr.reveal(".skills_language_title", { delay: 400 });

sr.reveal(".contact__header", { delay: 300 });
sr.reveal(".contact__form", { delay: 400 });

const buttomSr = ScrollReveal({
  origin: "bottom",
  distance: "250px",
  duration: 1000,
  reset: false,
});

buttomSr.reveal(".button__contact", { delay: 700 });
buttomSr.reveal(".skills__list", { delay: 700 });
buttomSr.reveal(".contact__buttons", { delay: 700 });
