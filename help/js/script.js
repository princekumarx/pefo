sessionStorage.setItem("greater", true);
// //* Loading Sidenavigation in crm module

// let crmNav = document.querySelector(".crmSideNav");

// //* fetching  file

// function getCrmNav() {
//   let crmSideNav = "../crm_module/crm_side_nav.html";
//   fetch(crmSideNav)
//     .then(res => res.text())
//     .then(res => {
//       crmNav.innerHTML = res;
//     });
// }

// window.addEventListener("load", function() {
//   getCrmNav();
// });

// console.log("crm");

//* LODING DYNAMIC HEADER

let nav = document.querySelector(".navbar");
let footer = document.querySelector(".footer");
//* fetching header file
let headerUrl;
let footerUrl;
// let pathName = window.location.pathname;
// let folderName = pathName.split("/")[1];
// if ( pathName === "/") {
//   headerUrl = "/header.html";
//   footerUrl = "/footer.html";
// } else {

//   headerUrl = `/${folderName}/header.html`;
// footerUrl = `/${folderName}/footer.html`;
// }

headerUrl = "../header.html";
footerUrl = "../footer.html";

function getHaderFile() {
  fetch(headerUrl)
    .then((res) => res.text())
    .then((res) => {
      nav.innerHTML = res;
    });
}
/*

//* fetching footer file

*/
function getFooterFile() {
  fetch(footerUrl)
    .then((res) => res.text())
    .then((res) => {
      footer.innerHTML = res;
    });
}
/*
 * calling function
 */
window.addEventListener("load", () => {
  getHaderFile();
  getFooterFile();
});

//* CRM JS

//* changing title

/*
 * NEW SIDE NAVBAR => ACCORDION
 */

let acc = document.querySelectorAll(".accordion");
let pn = document.querySelectorAll(".panel");

let subAcc = document.querySelectorAll(".sub-accord");
let subPn = document.querySelectorAll(".sub-panel");
let num = 0;

function closeTabs(p) {
  p.forEach(function (e) {
    e.style.maxHeight = null;
    let acc = e.previousElementSibling;
    acc.classList.remove("active");
  });
}

num = sessionStorage.getItem("n") || 0;

function accordFunction(e, i) {
  let panel = e.target.nextElementSibling;
  panel.style.transition = "max-height 0.2s ease-out";

  sessionStorage.setItem("n", i);

  if (panel.style.maxHeight) {
    e.target.classList.remove("active");

    panel.style.maxHeight = null;
  } else {
    closeTabs(pn);
    // upDatingBreadCrumbs();
    e.target.classList.add("active");

    panel.style.maxHeight = panel.scrollHeight + "px";
  }
}

acc.forEach((arr, i) => {
  arr.addEventListener(
    "click",
    function (e) {
      accordFunction(e, i);
    },
    true
  );
});

//calling an event
// aAccord.forEach((arr, i) => {
//   arr.addEventListener("click", function (e) {
//     accordFunction(e, i);
//   });
// });
/*
 * sub menu
 */
// subAcc.forEach((e, i) => {
//   e.addEventListener("click", function() {
//     let panel = this.nextElementSibling;
//     panel.style.transition = "max-height 0.2s ease-out";

//     if (panel.style.maxHeight) {
//       e.classList.remove("active");

//       panel.style.maxHeight = null;
//     } else {
//       e.classList.add("active");
//       console.log(num);
//       panel.style.maxHeight = panel.scrollHeight + "px";
//       acc[num].nextElementSibling.style.maxHeight = panel.scrollHeight + "65px";
//     }
//   });
// });

//* ADDING BACKGROUND TO CLICKED  navL
//let navLink = document.querySelectorAll(".nav-link");

// function removeBg() {
//   navLink.forEach((link) => {
//     link.classList.remove("linkActive");
//   });
// }

// navLink.forEach((link, i) => {
//   link.addEventListener("click", function (e) {
//     //e.preventDefault();
//     let linkText = link.children[0].innerHTML;
//     let linkHref = link.children[0].getAttribute("href");
//     sessionStorage.setItem("subTopicName", linkText);
//     sessionStorage.setItem("subTopicPageLink", linkHref);

//     // this.classList.add("linkActive");
//     // this.children[0].style.color = "white";
//   });
// });

//* POPUP JS

let here = document.querySelectorAll("#here");
let popup = document.querySelector("#popup");
let popupContainer = document.querySelector(".pop-container");
let content = document.querySelector("#content");
let closebtn = document.querySelector(".closebtn");
let header = document.querySelector(".header");
let body = document.querySelector("body");
//* adding event to each click more buttons

here.forEach((item) => {
  item.addEventListener("click", async (e) => {
    fetch(e.target.getAttribute("data-href"))
      .then((res) => res.text())
      .then((res) => {
        content.innerHTML = res;
      });
    content.style.display = "block";
    let topicTitle = e.target.getAttribute("data-header");
    header.innerHTML = topicTitle;
    //* console.log(topicTitle);
    popup.style.height = "77.3%";
    popupContainer.style.display = "block";
    popup.style.border = "2px solid #0088cc";
    closebtn.style.display = "block";
  });
});

function closeNav(e) {
  content.style.display = "none";
  popup.style.border = "none";

  closebtn.style.display = "none";
  popup.style.height = "0%";
  popupContainer.style.display = "none";
}

//getting module name when click on crm module
let module = document.querySelectorAll(".module");
let menuIcon = document.querySelector(".menu");

module.forEach((module, i) => {
  module.addEventListener("click", function (e) {
    let title = module.getAttribute("title");
    let link = module.getAttribute("data-href");
    sessionStorage.setItem("moduleName", title);
    sessionStorage.setItem("modulePageLink", link);
    localStorage.setItem("moduleName", title);
    localStorage.setItem("modulePageLink", link);
  });
});
//* closing nav menu and open

let root = document.documentElement;
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.querySelector(".menu").style.display = "none";
  document.querySelector(".closeNavBtn").style.display = "block";

  // root.style.setProperty("--display-none", "none");
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNavBtn() {
  document.getElementById("mySidenav").style.width = "0";
  document.querySelector(".closeNavBtn").style.display = "none";
  document.querySelector(".menu").style.display = "block";

  // root.style.setProperty("--display-none", "block");
}

// root.style.setProperty("--display-none", "block");
