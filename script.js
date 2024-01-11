colors = [["--primary", "--primary-variant"], ["--secondary", "--secondary-variant"], ["--tertiary", "--tertiary-variant"], ["--quaternary", "--quaternary-variant"]];

activeSection = 1;
function changeSection(direction) {
    if (direction == "forward") {
        document.querySelector("header .active").classList.remove("active");
        document.querySelector("header > nav > article:nth-child(" + (activeSection + 1) + ")").classList.add("active");
        activeSection++;
    }
    else if (direction == "backward") {
        document.querySelector("header .active").classList.remove("active");
        document.querySelector("header > nav > article:nth-child(" + (activeSection - 1) + ")").classList.add("active");
        activeSection--;
    }
    document.querySelector("header nav").scrollLeft += document.querySelector("header .active").getBoundingClientRect().left - 10;
}


var lastScrollTop = 0;
firstSection = document.querySelectorAll("main section")[1];
lastSection = document.querySelectorAll("main section")[document.querySelectorAll("main section").length - 1];
logo = document.querySelector("#main-logo");



document.querySelector("main").addEventListener("touchmove", () => {
    var st = document.querySelector("main").scrollTop;
    if (st > lastScrollTop) {
        // downscroll
        document.querySelectorAll("main section").forEach(element => {
            if (element.getBoundingClientRect().top < window.innerHeight / 2 && Array.prototype.indexOf.call(element.parentNode.children, element) > activeSection - 1) {
                changeSection("forward");
            }
        })

        animateElement.forEach(element => {
            if (element.getBoundingClientRect().top < window.innerHeight * 0.75) {
                element.classList.add('animate');
            }
        });
    } else if (st < lastScrollTop) {
        // upscroll
        document.querySelectorAll("main section").forEach(element => {
            if (element.getBoundingClientRect().top + element.offsetHeight > window.innerHeight / 2 && Array.prototype.indexOf.call(element.parentNode.children, element) < activeSection - 1) {
                changeSection("backward");
            }
        })

        animateElement.forEach(element => {
            if (element.getBoundingClientRect().top > window.innerHeight) {
                element.classList.remove('animate');
            }
        });
    } // else was horizontal scroll
    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling


}, false);


document.addEventListener("scroll", () => {
    var st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
        // downscroll
        document.querySelectorAll("main section").forEach(element => {
            if (element.getBoundingClientRect().top < window.innerHeight / 2 && Array.prototype.indexOf.call(element.parentNode.children, element) > activeSection - 1) {
                changeSection("forward");
            }
        })

        animateElement.forEach(element => {
            if (element.getBoundingClientRect().top < window.innerHeight * 0.75) {
                element.classList.add('animate');
            }
        });


    } else if (st < lastScrollTop) {
        // upscroll
        document.querySelectorAll("main section").forEach(element => {
            if (element.getBoundingClientRect().top + element.offsetHeight > window.innerHeight / 2 && Array.prototype.indexOf.call(element.parentNode.children, element) < activeSection - 1) {
                changeSection("backward");
            }
        })

        animateElement.forEach(element => {
            if (element.getBoundingClientRect().top > window.innerHeight) {
                element.classList.remove('animate');
            }
        });
    } // else was horizontal scroll
    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling



    document.querySelectorAll("main section").forEach(element => {
        //SCROLL POSITION
        if (activeSection == 1) {
            if (logo.getBoundingClientRect().top + logo.getBoundingClientRect().height > document.querySelector("header nav article:nth-child(1)").getBoundingClientRect().height) {
                // console.log("AAAAAAh")
            }
        }
        else if (activeSection == document.querySelectorAll("main section").length) {
            document.querySelectorAll(".scrollView > div")[activeSection - 2].style.top = 100 - (lastSection.getBoundingClientRect().top + lastSection.offsetHeight - window.innerHeight) / (lastSection.offsetHeight * 0.75) * 100 + "%";
        }
        else {
            if (100 - ((element.getBoundingClientRect().top * -1) - element.offsetHeight + window.innerHeight / 2) / -element.offsetHeight * 100 > 0 && 100 - ((element.getBoundingClientRect().top * -1) - element.offsetHeight + window.innerHeight / 2) / -element.offsetHeight * 100 < 100) {
                document.querySelectorAll(".scrollView > div")[activeSection - 2].style.top = 100 - ((element.getBoundingClientRect().top * -1) - element.offsetHeight + window.innerHeight / 2) / -element.offsetHeight * 100 + "%";
            }
        }

        //H2 TRANSFORM
        if (activeSection != 1 && activeSection != document.querySelectorAll("main section").length && (element.getBoundingClientRect().top * -1) / (element.offsetHeight - (window.innerHeight / 2)) * 85 > 0 && (element.getBoundingClientRect().top * -1) / (element.offsetHeight - (window.innerHeight / 2)) * 85 < 85) {
            document.querySelector("header > nav > article.active p").style.transform = "translateX(" + ((element.getBoundingClientRect().top * -1) / (element.offsetHeight - (window.innerHeight / 2)) * 85) * -1 + "%)";
        }
        else if (activeSection == document.querySelectorAll("main section").length && ((element.getBoundingClientRect().top * -1) / (element.offsetHeight - window.innerHeight) * 85) > 0) {
            document.querySelector("header > nav > article.active p").style.transform = "translateX(" + ((element.getBoundingClientRect().top * -1) / (element.offsetHeight - window.innerHeight) * 85) * -1 + "%)";
        }
        else if (Array.prototype.indexOf.call(document.querySelectorAll("main section"), element) == activeSection - 1 && 100 - ((element.getBoundingClientRect().top * -1) - element.offsetHeight + window.innerHeight / 2) / -element.offsetHeight * 100 > 0 && activeSection != 1) {
            document.querySelector("header > nav > article.active p").style.transform = "translateX(0%)";
        }
    })

}, false);

document.querySelector("main").addEventListener("scroll", () => {
    var st = document.querySelector("main").scrollTop;
    if (st > lastScrollTop) {
        // downscroll

        animateElement.forEach(element => {
            if (element.getBoundingClientRect().top < window.innerHeight * 0.75) {
                element.classList.add('animate');
            }
        });
    } else if (st < lastScrollTop) {
        // upscroll

        animateElement.forEach(element => {
            if (element.getBoundingClientRect().top > window.innerHeight) {
                element.classList.remove('animate');
            }
        });
    } // else was horizontal scroll
    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);


document.querySelectorAll("header > nav > article").forEach(element => {
    element.addEventListener("click", () => {
        document.getElementById(document.querySelectorAll("main section")[Array.prototype.indexOf.call(document.querySelectorAll("header > nav > article"), element)].id).scrollIntoView({ behavior: "smooth" });
    })
})


function showContactCard() {
    if (document.querySelector("#contact-card").classList.contains("active")) {
        document.querySelector("#contact-card").classList.remove("active");
        document.querySelector("#contact-card").style.left = "";
        document.querySelector("#contact-card").style.top = "";
        document.querySelector("#contact-card-button .icon").innerHTML = '<svg width="40" height="40" version="1.1" id="Calque_4" xmlns="http://www.w3.org/2000/svg"                     xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 800 800"                     style="enable-background:new 0 0 800 800;" xml:space="preserve">                     <path d="M133.3,642.7c0,50,40.6,90.6,90.6,90.6h352.2c50,0,90.6-40.6,90.6-90.6V157.3c0-50-40.6-90.6-90.6-90.6H223.9            c-50,0-90.6,40.6-90.6,90.6V642.7z M400,250c36.8,0,66.7,29.8,66.7,66.7s-29.8,66.7-66.7,66.7s-66.7-29.8-66.7-66.7            S363.2,250,400,250z M273.7,540.5c23.6-69.8,99.3-107.2,169-83.6c39.4,13.3,70.3,44.2,83.6,83.6c5.4,17.5-4.4,36-21.9,41.4            c-3.3,1-6.7,1.5-10.1,1.5H306c-18.4,0.2-33.5-14.6-33.7-33C272.3,547,272.7,543.7,273.7,540.5z" />                 </svg>'
    }
    else {
        document.querySelector("#contact-card").classList.add("active");
        document.querySelector("#contact-card-button .icon").innerHTML = '<svg id="Calque_5" width="40" height="40" data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"                 onclick="showContactCard()">                 <defs>                     <style>                         .cls-1-contact {                             fill: none;                             stroke: #04183B;                             stroke-linecap: round;                             stroke-width: 56px;                         }                          .cls-1-contact,                         .cls-2-contact {                             stroke-miterlimit: 10;                         }                     </style>                 </defs>                 <circle class="cls-2-contact" cx="500" cy="500" r="400" />                 <g>                     <line class="cls-1-contact" x1="302.01" y1="302.01" x2="697.99" y2="697.99" />                     <line class="cls-1-contact" x1="302.01" y1="697.99" x2="697.99" y2="302.01" />                 </g>             </svg>'
    }
}

var contactCard = document.querySelector("#contact-card");
var contactDragArea = document.querySelector("#contact-card .window-header");
var isDraggingContact = false;
var dragOffsetContact = { x: 0, y: 0 };

contactDragArea.addEventListener("mousedown", function (event) {
    isDraggingContact = true;

    // Calculate the offset between the mouse position and the top-left corner of the div
    dragOffsetContact.x = event.clientX - contactCard.offsetLeft;
    dragOffsetContact.y = event.clientY - contactCard.offsetTop;
});

document.addEventListener("mousemove", function (event) {
    if (isDraggingContact && contactCard.classList.contains("active")) {
        // Calculate the new position of the div
        var newLeft = event.clientX - dragOffsetContact.x;
        var newTop = event.clientY - dragOffsetContact.y;

        // Get the boundaries of the parent element
        var parentRect = document.querySelector("main").getBoundingClientRect();

        // Check if the new position is outside the parent element
        if (newLeft < parentRect.left) {
            newLeft = parentRect.left;
        }
        else if (newLeft + contactCard.offsetWidth > parentRect.right) {
            newLeft = parentRect.right - contactCard.offsetWidth;
        }

        if (newTop < 0) {
            newTop = 0;
        }
        else if (newTop + contactDragArea.offsetHeight > window.innerHeight) {
            newTop = window.innerHeight - contactDragArea.offsetHeight;
        }

        // Move the div to the new position
        contactCard.style.left = newLeft + "px";
        contactCard.style.top = newTop + "px";

        document.querySelector("body").style.userSelect = "none";
    }
    else {
        document.querySelector("body").style.userSelect = "auto";
    }
});

document.addEventListener("mouseup", function (event) {
    isDraggingContact = false;
});



//=========== COMPÉTENCES =============

var posChar = 0;
var textPres = [
    "Eric Mai",
    "Développeur Web",
    "Étudiant",
];
textCounter = 0;
var tempoDev = 0;
var isWriting = true;
var devTitle = document.querySelector("#presentation h1");


function typeWritting() {
    if (tempoDev > 0) {
        tempoDev -= 1;
    }
    else if (tempoDev == 0 && isWriting == false) {
        if (devTitle.innerHTML.length > 0) {
            devTitle.innerHTML = devTitle.innerHTML.slice(0, -1);

        }
        else {
            isWriting = true;
            posChar = 0;
            textCounter++;
            if (textCounter == textPres.length) {
                textCounter = 0;
            }
        }

    }
    else if (posChar < textPres[textCounter].length && isWriting == true) {
        devTitle.innerHTML += textPres[textCounter].charAt(posChar);
        posChar++;
    }
    else {
        tempoDev = 10;
        isWriting = false;
    }

    setTimeout(typeWritting, 100);
}

typeWritting()


// document.querySelectorAll("#portfolio article").forEach(element => {
//     element.addEventListener("click", () => {

//         try {
//             document.querySelector("#portfolio article.active").classList.remove("active");
//         }
//         catch (e) {

//         }
//         element.classList.add("active");
//         document.querySelector(".project-viewer").classList.add("active");
//         document.querySelector(".project-list").classList.add("active");

//     })
// })

// Sélectionnez l'élément à observer
const animateElement = document.querySelectorAll('.profil-text article, .profil-list li');





document.querySelector("#cmd-input").addEventListener("input", () => {
    document.querySelector("#cmd-text").textContent = document.querySelector("#cmd-input").value;
})

document.querySelector("#cmd-input").addEventListener("keyup", (e) => {
    if (e.keyCode === 13) {
        cmdValue = document.querySelector("#cmd-input").value;
        document.querySelector("#terminal > ul > li:last-child").innerHTML = document.querySelector("#cmd-input").value;
        showCompetence(cmdValue);
    }
});

// document.getElementById('foobar').addEventListener('keyup', e => {
//     console.log('Caret at: ', e.target.selectionStart)
//   })


document.querySelectorAll("#close-project, #close-layer, .open-popup").forEach(element => {
    element.addEventListener("click", () => {
        if (document.querySelector("#project-popup").classList.contains("hide")) {
            document.querySelector("#popup-container").style.removeProperty('transform');
            document.querySelector("#project-popup").classList.remove("hide");
            document.querySelector("body").style.overflow = "hidden";
        }
        else {
            document.querySelector("#popup-container").style.transform = "scale(0)";
            setTimeout(() => {
                document.querySelector("#project-popup").classList.add("hide");
                document.querySelector("body").style.overflow = "auto";
            }, 200);
            // document.querySelector("#project-popup").classList.add("hide");
            // document.querySelector("body").style.overflow = "auto";
        }
    })
});

competences = {
    "HTML": {
        "title": "HTML",
        "icon": "img/icon/HTML.png",
        "progression": 75,
        "competence": ["Créer un site structuré", "Utiliser les balises sémantiques", "Intégrer des éléments multimédia (vidéo/audio)", "Utiliser les balises meta", "Mettre en forme pour être adapté responsive"]
    }
}


function showCompetence(langage) {
    compLine = document.createElement("li");
    newCmdInput = document.createElement("li");
    newCmdInput.classList.add("li-input");
    newCmdInput.classList.add("cmd");
    newCmdInput.innerHTML = '<input type="text" name="" id="cmd-input" autocomplete="off"><span id="cmd-text"></span><span id="cmd-caret">_</span>';

    if (competences[langage] == undefined) {
        compLine.innerHTML = "Comande inconnue. Veuillez réessayer avec un des langages cités plus haut.";
    }
    else {
        progressLine = document.createElement("li");
        progressLine.classList.add("progress-li");
        progressLine.innerHTML = `Maîtrise : <div class='progress-container'><div style='transform: translateX(-${parseInt(100 - competences[langage].progression)}%)'></div></div>${competences[langage].progression}%`;
        compLine.classList.add("competence-info");
        textComp = "";
        competences[langage].competence.forEach(comp => {
            textComp += `<li>- ${comp}</li>`;
        });

        compLine.innerHTML = `<ul style='gap:10px;'>${textComp}</ul><div><img src='img/icon/HTML.png' alt='icon HTML' loading='lazy'></img></div>`;

        document.querySelector("#terminal > ul").appendChild(progressLine);
    }
    document.querySelector("#terminal > ul").appendChild(compLine);

    document.querySelector("#terminal > ul").appendChild(newCmdInput);
    console.log(document.querySelector("#cmd-input"));
    addEventListeners();

}

function addEventListeners() {
    document.querySelector("#cmd-input").addEventListener("input", () => {
        document.querySelector("#cmd-text").textContent = document.querySelector("#cmd-input").value;
    })

    document.querySelector("#cmd-input").addEventListener("keyup", (e) => {
        if (e.keyCode === 13) {
            cmdValue = document.querySelector("#cmd-input").value;
            document.querySelector("#terminal > ul > li:last-child").innerHTML = document.querySelector("#cmd-input").value;
            showCompetence(cmdValue);
        }
    });
}
