// // init controller
// var controller = new ScrollMagic.Controller();

// var blockTween = new TweenMax.to('#block', 1.5, {
//     backgroundColor: 'red',
//     height:'100vh'
// });

// var containerScene = new ScrollMagic.Scene({
//     triggerElement: '#container',
//     duration: 400
// })
// .setTween(blockTween)
// .setPin("#container")
// // .addIndicators()
// .setClassToggle('.cc', 'dd')
// .addTo(controller);


// var navSectionCounter = 0;
// document.querySelectorAll("header > nav > div").forEach(element => {
//     if (element.classList.contains("active")) {
//         document.querySelector(".active h1").style.top = (window.innerHeight / 2 - document.querySelector(".active").offsetTop) - parseFloat(window.getComputedStyle(document.querySelector(".active h1")).height.slice(0,-2)) + "px";
//     }
//     else{
//         element.style.top = (element.querySelector("h1").offsetHeight + window.getComputedStyle(element.querySelector("h1")).margin.slice(0,2) * 2)  * navSectionCounter + "px";
//     }
//     navSectionCounter++;
// })



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



document.addEventListener("touchmove", () => {
    var st = document.querySelector("main").scrollTop;
    if (st > lastScrollTop) {
        // downscroll
        document.querySelectorAll("main section").forEach(element => {
            if (element.getBoundingClientRect().top < window.innerHeight / 2 && Array.prototype.indexOf.call(element.parentNode.children, element) > activeSection - 1) {
                changeSection("forward");
            }
        })
    } else if (st < lastScrollTop) {
        // upscroll
        document.querySelectorAll("main section").forEach(element => {
            if (element.getBoundingClientRect().top + element.offsetHeight > window.innerHeight / 2 && Array.prototype.indexOf.call(element.parentNode.children, element) < activeSection - 1) {
                changeSection("backward");
            }
        })
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
    } else if (st < lastScrollTop) {
        // upscroll
        document.querySelectorAll("main section").forEach(element => {
            if (element.getBoundingClientRect().top + element.offsetHeight > window.innerHeight / 2 && Array.prototype.indexOf.call(element.parentNode.children, element) < activeSection - 1) {
                changeSection("backward");
            }
        })
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
            document.querySelector("header > nav > article.active h2").style.transform = "translateX(" + ((element.getBoundingClientRect().top * -1) / (element.offsetHeight - (window.innerHeight / 2)) * 85) * -1 + "%)";
        }
        else if (activeSection == document.querySelectorAll("main section").length && ((element.getBoundingClientRect().top * -1) / (element.offsetHeight - window.innerHeight) * 85) > 0 ) {
            document.querySelector("header > nav > article.active h2").style.transform = "translateX(" + ((element.getBoundingClientRect().top * -1) / (element.offsetHeight - window.innerHeight) * 85) * -1 + "%)";
        }
        else if (Array.prototype.indexOf.call(document.querySelectorAll("main section"), element) == activeSection - 1 && 100 - ((element.getBoundingClientRect().top * -1) - element.offsetHeight + window.innerHeight / 2) / -element.offsetHeight * 100 > 0 && activeSection != 1) {
            document.querySelector("header > nav > article.active h2").style.transform = "translateX(0%)";
        }
    })

}, false);


document.querySelectorAll("header > nav > article").forEach(element => {
    element.addEventListener("click", () => {
        document.getElementById(document.querySelectorAll("main section")[Array.prototype.indexOf.call(document.querySelectorAll("header > nav > article"), element)].id).scrollIntoView({ behavior: "smooth" });
    })
})





//=========== COMPÉTENCES =============

var posChar = 0;
var text = "Développement Web";
var tempoDev = 0;
var isWriting = true;


function typeWritting() {
    if (tempoDev > 0) {
        tempoDev -= 1;
    }
    else if (tempoDev == 0 && isWriting == false) {
        if (document.querySelector("#titre-comp-1").innerHTML.length > 0) {
            document.querySelector("#titre-comp-1").innerHTML = document.querySelector("#titre-comp-1").innerHTML.slice(0, -1);

        }
        else {
            isWriting = true;
            posChar = 0;
        }

    }
    else if (posChar < text.length && isWriting == true) {
        document.querySelector("#titre-comp-1").innerHTML += text.charAt(posChar);
        posChar++;
    }
    else {
        tempoDev = 50;
        isWriting = false;
    }
    setTimeout(typeWritting, 100);
}

typeWritting()




// const elts = {
//     text1: document.getElementById("text1"),
//     text2: document.getElementById("text2")
// };

// const texts = [
//     "Développeur",
//     "Web",
//     "Eric",
//     "Mai",
//     "Étudiant",
// ];

// const morphTime = 1;
// const cooldownTime = 0.25;

// let textIndex = texts.length - 1;
// let time = new Date();
// let morph = 0;
// let cooldown = cooldownTime;

// elts.text1.textContent = texts[textIndex % texts.length];
// elts.text2.textContent = texts[(textIndex + 1) % texts.length];

// function doMorph() {
//     morph -= cooldown;
//     cooldown = 0;

//     let fraction = morph / morphTime;

//     if (fraction > 1) {
//         cooldown = cooldownTime;
//         fraction = 1;
//     }

//     setMorph(fraction);
// }

// function setMorph(fraction) {
//     elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
//     elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

//     fraction = 1 - fraction;
//     elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
//     elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

//     elts.text1.textContent = texts[textIndex % texts.length];
//     elts.text2.textContent = texts[(textIndex + 1) % texts.length];
// }

// function doCooldown() {
//     morph = 0;

//     elts.text2.style.filter = "";
//     elts.text2.style.opacity = "100%";

//     elts.text1.style.filter = "";
//     elts.text1.style.opacity = "0%";
// }

// function animate() {
//     requestAnimationFrame(animate);

//     let newTime = new Date();
//     let shouldIncrementIndex = cooldown > 0;
//     let dt = (newTime - time) / 1000;
//     time = newTime;

//     cooldown -= dt;

//     if (cooldown <= 0) {
//         if (shouldIncrementIndex) {
//             textIndex++;
//         }

//         doMorph();
//     } else {
//         doCooldown();
//     }
// }

// animate();