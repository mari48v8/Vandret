//document.addEventListener("DOMContentLoaded", getJson);
//let page;
//
//async function getJson() {
//    let url = new URL(window.location.href);
//    let parameter = new URLSearchParams(url.search);
//    let id = parameter.get("id");
//
//
//    let pagetemplate = document.querySelector("#temp");
//    let pagecontainer = document.querySelector(".pagecontainer");
//
//
//
//    let jsonObjekt = await fetch("http://dyrmosedesign.dk/kea/Vandret/wordpress/wp-json/wp/v2/kontakt" + id)
//    page = await jsonObjekt.json();
//
//
//
//    let klon = pagetemplate.cloneNode(true).content;
//    klon.querySelector("[data-telefon]").textContent = element.acf.telefon;
//    klon.querySelector("[data-mail]").textContent = element.acf.mail;
//    klon.querySelector("[data-facebook]").textContent = element.acf.facebook;
//    klon.querySelector("[data-instagram]").textContent = element.acf.instagram;
//    klon.querySelector("[data-linkedin]").textContent = element.acf.linkedin;
//
//}



document.addEventListener("DOMContentLoaded", hentJson);

let restauranter;
let minTemplate = document.querySelector("#myTemplate");
//hent Json
async function hentJson() {

    let jsonObjekt = await fetch("http://dyrmosedesign.dk/kea/Vandret/wordpress/wp-json/wp/v2/kontakt");
    restauranter = await jsonObjekt.json();
    visRestauranter();


}

function visRestauranter() {
    restauranter.forEach(element => {
        let klon = minTemplate.cloneNode(true).content;

        klon.querySelector("#data-telefon").textContent = element.acf.telefon;
        klon.querySelector("#data-mail").textContent = element.acf.mail;
        klon.querySelector("#data-facebook").textContent = element.acf.facebook;
        klon.querySelector("#data-instagram").textContent = element.acf.instagram;
        klon.querySelector("#data-linkedin").textContent = element.acf.linkedin;
        document.querySelector("#modtager").appendChild(klon);
        templateModtager.appendChild(klon)
    })
}

// When the user scrolls the page, execute myFunction
window.onscroll = function () {
    myFunction()
};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function menuFunction() {
    var x = document.getElementById("navbar");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
