let navLink = document.querySelectorAll(".nav-link");
let pageTopicLinks = document.querySelectorAll(".pageTopicLink");
let aAccord = document.querySelectorAll(".accordion > a");
let accord = document.querySelectorAll(".accord > a");
//* changing breadCrumb topic name and url buttons
let breadCrumbContainer = document.querySelector(".page-header");
//selecting link inside html file for more Information
let linkInFile = document.querySelectorAll(".linkInFile");
//seleting bread crumbs topic link
// selecting h2 above sidenav name of module

let h2 = document.querySelector("h2");
//* getting module name
let moduleName;
let modulePageLink;
let moduleTopicName;
let moduleTopicPageLink;
let subTopicName;
let subTopicPageLink;

moduleName = localStorage.getItem("moduleName");
modulePageLink = localStorage.getItem("modulePageLink");
moduleTopicName = sessionStorage.getItem("moduleTopicName");
moduleTopicPageLink = sessionStorage.getItem("moduleTopicPageLink");
subTopicName = sessionStorage.getItem("subTopicName");
subTopicPageLink = sessionStorage.getItem("subTopicPageLink");
//changing of module in h2 above sidenav
h2.textContent = moduleName;
//* adding event to accord without any sub menu and changing breadcrumbs
accord.forEach((accord, i) => {
  accord.addEventListener("click", (e) => {
    sessionStorage.setItem("moduleTopicName", accord.innerHTML);
    sessionStorage.setItem("moduleTopicPageLink", accord.getAttribute("href"));
    sessionStorage.setItem("noBgColor", true);
  });
});
// bread click on change background true to false
function changeBg(e) {
  sessionStorage.setItem("noBgColor", false);
}
//more information link
linkInFile.forEach((links, i) => {
  links.addEventListener("click", function (e) {
    let href = links.getAttribute("href");
    let title = links.getAttribute("data-title");

    sessionStorage.setItem("subTopicName", title);
    sessionStorage.setItem("subTopicPageLink", href);
    sessionStorage.setItem("noBgColor", true);
  });
});
// page Topic Links_from_Contacts_Module

pageTopicLinks.forEach((topic, i) => {
  topic.addEventListener("click", function (e) {
    sessionStorage.setItem("subTopicName", topic.innerHTML);
    sessionStorage.setItem("subTopicPageLink", topic.getAttribute("href"));
    sessionStorage.setItem("noBgColor", true);
  });
});

// inside accord a tag
aAccord.forEach((a, i) => {
  a.addEventListener("click", function (e) {
    sessionStorage.setItem("moduleTopicName", a.innerHTML);
    sessionStorage.setItem("moduleTopicPageLink", a.getAttribute("href"));
    sessionStorage.setItem("n", i);
    localStorage.setItem("n", i);
    sessionStorage.setItem("noBgColor", false);
  });
});
// console.log(localStorage.getItem("n"));
// accordNum = localStorage.getItem("n");
// localNum =
//   accordNum || // console.log(localStorage.getItem("n"));
//   // accordNum = localStorage.getItem("n");
//   // localNum = accordNum || 0;
//   // let p = acc[localNum].nextElementSibling;
//   // p.style.transition = "none";
//   // p.style.maxHeight = p.scrollHeight + "px";
//   // acc[localNum].classList.toggle("active");
//   // acc[localNum].style.background = "none";

// loading  on page

aAccord.forEach((a, i) => {
  if (a.style.color) {
    let linkText = a.textContent;
    let linkHref = a.getAttribute("href");

    sessionStorage.setItem("moduleTopicName", linkText);
    sessionStorage.setItem("moduleTopicPageLink", linkHref);

    moduleTopicName = sessionStorage.getItem("moduleTopicName");
    moduleTopicPageLink = sessionStorage.getItem("moduleTopicPageLink");

    sessionStorage.setItem("subTopicName", " ");
    sessionStorage.setItem("subTopicPageLink", " ");
    subTopicName = sessionStorage.getItem("subTopicName");
    subTopicPageLink = sessionStorage.getItem("subTopicPageLink");

    sessionStorage.setItem("greater", false);
    console.log(a);
  }
});

// accordion
acc.forEach((a, i) => {
  a.addEventListener("click", function (e) {
    let accText = aAccord[i].innerHTML;
    let accLink = aAccord[i].getAttribute("href");
    sessionStorage.setItem("moduleTopicName", accText);
    sessionStorage.setItem("moduleTopicPageLink", accLink);
    sessionStorage.setItem("n", i);
  });
});
// accordion panel
navLink.forEach((link, i) => {
  link.addEventListener("click", function (e) {
    //e.preventDefault();
    let linkText = link.children[0].innerHTML;
    let linkHref = link.children[0].getAttribute("href");
    sessionStorage.setItem("subTopicName", linkText);
    sessionStorage.setItem("subTopicPageLink", linkHref);
    // this.classList.add("linkActive");
    // this.children[0].style.color = "white";
    sessionStorage.setItem("noBgColor", true);
  });
  // when accordion style property exist then
});
//updating breadcrumbs subTopicName when page loads
navLink.forEach((link, i) => {
  if (link.children[0].style.color) {
    // getting accordion value and href value
    let accText =
      link.parentElement.parentElement.previousElementSibling.children[0]
        .textContent;
    let accLink = link.parentElement.parentElement.previousElementSibling.children[0].getAttribute(
      "href"
    );
    sessionStorage.setItem("moduleTopicName", accText);
    sessionStorage.setItem("moduleTopicPageLink", accLink);

    let linkText = link.children[0].innerHTML;
    let linkHref = link.children[0].getAttribute("href");
    sessionStorage.setItem("subTopicName", linkText);
    sessionStorage.setItem("subTopicPageLink", linkHref);

    moduleTopicName = sessionStorage.getItem("moduleTopicName");
    moduleTopicPageLink = sessionStorage.getItem("moduleTopicPageLink");
    subTopicName = sessionStorage.getItem("subTopicName");
    subTopicPageLink = sessionStorage.getItem("subTopicPageLink");
    sessionStorage.setItem("noBgColor", true);
    //changing page title

    let titleBar = document.querySelector("title");

    titleBar.innerHTML = subTopicName;
  }
});
// dynamically adding moduleName in breadcrumbs
accord.forEach((links, i) => {
  if (links.style.color) {
    let linkText = links.textContent;
    let linkHref = links.getAttribute("href");

    sessionStorage.setItem("moduleTopicName", linkText);
    sessionStorage.setItem("moduleTopicPageLink", linkHref);

    moduleTopicName = sessionStorage.getItem("moduleTopicName");
    moduleTopicPageLink = sessionStorage.getItem("moduleTopicPageLink");
    sessionStorage.setItem("noBgColor", true);

    sessionStorage.setItem("subTopicName", " ");
    sessionStorage.setItem("subTopicPageLink", " ");

    subTopicName = sessionStorage.getItem("subTopicName");
    subTopicPageLink = sessionStorage.getItem("subTopicPageLink");
    sessionStorage.setItem("greater", false);
    //changing page title

    let titleBar = document.querySelector("title");

    titleBar.innerHTML = moduleTopicName;
  }
});

let greaterThan = sessionStorage.getItem("greater");
let than;
if (greaterThan === "true") {
  than = ">";
} else {
  than = " ";
}
function breadCrumbFunction() {
  let div = `<h1>
   
    <a href="../../index.html">Help Center</a>
    >
    <a class="moduleName" href="./${modulePageLink}">${moduleName}</a>

    >
    <a class="subToppic" onclick="changeBg()" href="${moduleTopicPageLink}"
      >${moduleTopicName}</a
    >
     
  ${than}
    <a class="subToppic" href="./${subTopicPageLink}"
      >${subTopicName}</a
    >

  
</h1>`;
  breadCrumbContainer.innerHTML = div;
}

function upDatingBreadCrumbs() {
  // let topicName = acc[num].children[0];
  // let attr = topicName.getAttribute("href");
  // moduleTopicName = topicName;
  // moduleTopicPageLink = attr;
  breadCrumbFunction();
}

upDatingBreadCrumbs();

let noBgColor = sessionStorage.getItem("noBgColor");
JSON.stringify(noBgColor);
if (noBgColor == "true") {
  acc[num].style.background = "none";
} else {
  acc[num].style.background = "rgba(186, 226, 246, 0.521)";
}
