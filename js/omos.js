document.addEventListener("DOMContentLoaded", hentJson);

let restauranter;
let minTemplate = document.querySelector("#myTemplate");
//hent Json
async function hentJson() {


    let jsonObjekt = await fetch("http://dyrmosedesign.dk/kea/Vandret/wordpress/wp-json/wp/v2/omos");
    restauranter = await jsonObjekt.json();
    visRestauranter();



}

function visRestauranter() {
    restauranter.forEach(element => {
        let klon = minTemplate.cloneNode(true).content;

        klon.querySelector("#data-titel").textContent = element.acf.titel;
        klon.querySelector("#data-stifter").textContent = element.acf.stifter;
        klon.querySelector("#data-titel_02").textContent = element.acf.titel_02;
        klon.querySelector("#data-titel_03").textContent = element.acf.titel_03;
        klon.querySelector("#data-titel_04").textContent = element.acf.titel_04;
        klon.querySelector("#data-tekst").textContent = element.acf.tekst;
        klon.querySelector("#data-tekst_02").textContent = element.acf.tekst_02;
        klon.querySelector("#data-tekst_03").textContent = element.acf.tekst_03;
        klon.querySelector("#data-tekst_04").textContent = element.acf.tekst_04;
        klon.querySelector("#data-tekst_05").textContent = element.acf.tekst_05;
        klon.querySelector("#data-tekst_06").textContent = element.acf.tekst_06;
        klon.querySelector("#data-tekst_07").textContent = element.acf.tekst_07;
        klon.querySelector("#data-tekst_08").textContent = element.acf.tekst_08;
        klon.querySelector("#data-tekst_09").textContent = element.acf.tekst_09;
        klon.querySelector("#data-billede").src = element.acf.billede.url;
        klon.querySelector("#data-billede_02").src = element.acf.billede_02.url;
        klon.querySelector("#data-billede_03").src = element.acf.billede_03.url;
        klon.querySelector("#data-billede_04").src = element.acf.billede_04.url;
        klon.querySelector("#data-billede_05").src = element.acf.billede_05.url;
        klon.querySelector("#data-billede_06").src = element.acf.billede_06.url;
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
