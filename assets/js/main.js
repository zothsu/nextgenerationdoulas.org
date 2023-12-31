const navBtn = document.querySelector("#nav-btn");
const navContainer = document.querySelector("#nav-container");


navBtn.addEventListener("click", function () {
  navContainer.classList.toggle("appear");

  if (navContainer.classList.contains("appear")) {
    menuIsOpen();
  } else {
    menuIsClosed();
  }
});

document.addEventListener("click", function (e) {
  if (!navContainer.contains(e.target) && e.target !== navBtn) {
    navContainer.classList.remove("appear");
    menuIsClosed();
  }
});

function menuIsClosed() {
  navBtn.classList.add("fa-bars");
  navBtn.classList.remove("fa-xmark");
}

function menuIsOpen() {
  navBtn.classList.remove("fa-bars");
  navBtn.classList.add("fa-xmark");
}


const boardMembers = [
  {
    name: "Emilie Young",
    title: "THW, Doula & Childbirth Educator",
    role: "Director, Founder",
    email: "emilie.young@NextGenDoulas.org",
  },
  {
    name: "Tina Riley",
    title: "Accountant (beankeeper)",
    role: "Treasurer",
    email: "rileytina@hotmail.com",
  },
  {
    name: "Danielle Dalbok",
    title: "MSW, Therapist",
    role: "Board Member",
    email: "EMAIL",
  },
  {
    name: "Reyah Travis",
    title: "PCA, MS, QMHA-R, Family Trauma Therapist",
    role: "Board Member",
    email: "Sandi@insconnectga.com",
  },
  {
    name: "Magda D'Angelis-Morris",
    title: "DMD, MS, Equity Strategy Manager, Educator",
    role: "Board Member",
    email: "magda.dangelis@pcc.edu",

  },
  {
    name: "Zoe Sullivan",
    title: "Web Developer",
    role: "Board Member",
    email: "zoetsullivan@gmail.com",
  }
];