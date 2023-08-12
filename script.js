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



i = 1;
function changeSection(direction) {
    if (direction == "forward") {
        document.querySelector(".active").classList.remove("active");
        document.querySelector("header > nav > div:nth-child(" + (i + 1) + ")").classList.add("active");
        i++;
    }
    else if (direction == "backward") {
        document.querySelector(".active").classList.remove("active");
        document.querySelector("header > nav > div:nth-child(" + (i - 1) + ")").classList.add("active");
        i--;
    }
}


var lastScrollTop = 0;
firstSection = document.querySelectorAll("main section")[0];
lastSection = document.querySelectorAll("main section")[document.querySelectorAll("main section").length - 1];


document.addEventListener("scroll", () => {
    var st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
        // downscroll
        document.querySelectorAll("main section").forEach(element => {

            if (element.getBoundingClientRect().top < window.innerHeight / 2 && Array.prototype.indexOf.call(element.parentNode.children, element) > i - 1) {
                changeSection("forward");
            }
        })
    } else if (st < lastScrollTop) {
        // upscroll
        document.querySelectorAll("main section").forEach(element => {
            if (element.getBoundingClientRect().top + element.offsetHeight > window.innerHeight / 2 && Array.prototype.indexOf.call(element.parentNode.children, element) < i - 1) {
                changeSection("backward");
            }

        })
    } // else was horizontal scroll
    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling



    document.querySelectorAll("main section").forEach(element => {
        if (i == 1) {
            if ((firstSection.getBoundingClientRect().top * -1) / (firstSection.offsetHeight - window.innerHeight / 2) * 100 > 0 && (firstSection.getBoundingClientRect().top * -1) / (firstSection.offsetHeight - window.innerHeight / 2) * 100 < 100) {
                document.querySelectorAll(".scrollView > div > div")[i - 1].style.top = (firstSection.getBoundingClientRect().top * -1) / (firstSection.offsetHeight - window.innerHeight / 2) * 100 + "%";
                document.querySelector("header > nav > div.active h2").style.transform = "translateX(" + (firstSection.getBoundingClientRect().top * -1) / (firstSection.offsetHeight - window.innerHeight / 2) * -75 + "%)";
            }
            else if ((firstSection.getBoundingClientRect().top * -1) / (firstSection.offsetHeight - window.innerHeight / 2) * 100 < 0) {
                document.querySelectorAll(".scrollView > div > div")[i - 1].style.top = "0";
                document.querySelector("header > nav > div.active h2").style.transform = "translateX(0%)";
            }
        }
        else if (i == document.querySelectorAll("main section").length) {
            document.querySelectorAll(".scrollView > div > div")[i - 1].style.top = 100 - (lastSection.getBoundingClientRect().top + lastSection.offsetHeight - window.innerHeight) / (lastSection.offsetHeight * 0.75) * 100 + "%";
        }
        else {
            if (100 - ((element.getBoundingClientRect().top * -1) - element.offsetHeight + window.innerHeight / 2) / -element.offsetHeight * 100 > 0 && 100 - ((element.getBoundingClientRect().top * -1) - element.offsetHeight + window.innerHeight / 2) / -element.offsetHeight * 100 < 100) {
                document.querySelectorAll(".scrollView > div > div")[i - 1].style.top = 100 - ((element.getBoundingClientRect().top * -1) - element.offsetHeight + window.innerHeight / 2) / -element.offsetHeight * 100 + "%";
            }
        }


        if (i != 1 && i != document.querySelectorAll("main section").length && (115 - ((element.getBoundingClientRect().top * -1) - element.offsetHeight) / -element.offsetHeight * 115)*-1 < 0 && Array.prototype.indexOf.call(document.querySelectorAll("main section"), element) == i-1) {
            document.querySelector("header > nav > div.active h2").style.transform = "translateX(" + (115 - ((element.getBoundingClientRect().top * -1) - element.offsetHeight) / -element.offsetHeight * 115)*-1 + "%)";
        }
        else if (Array.prototype.indexOf.call(document.querySelectorAll("main section"), element) == i-1 && 100 - ((element.getBoundingClientRect().top * -1) - element.offsetHeight + window.innerHeight / 2) / -element.offsetHeight * 100 > 0) {
            document.querySelector("header > nav > div.active h2").style.transform = "translateX(0%)";
        }
        
        if (i == document.querySelectorAll("main section").length && (75 - (lastSection.getBoundingClientRect().top + window.innerHeight) / lastSection.offsetHeight * 150)*-1 < 0) {
            document.querySelector("header > nav > div.active h2").style.transform = "translateX(" + (75 - (lastSection.getBoundingClientRect().top + window.innerHeight) / lastSection.offsetHeight * 150)*-1 + "%)";
        }
    })

}, false);


document.querySelectorAll("header > nav > div").forEach(element => {
    element.addEventListener("click", () => {
        document.getElementById(document.querySelectorAll("main section")[Array.prototype.indexOf.call(document.querySelectorAll("header > nav > div"), element)].id).scrollIntoView({ behavior: "smooth" });
    })
})



//=========== COMPÉTENCES =============

var i = 0;
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
            i = 0;
        }

    }
    else if (i < text.length && isWriting == true) {
        document.querySelector("#titre-comp-1").innerHTML += text.charAt(i);
        i++;
    }
    else {
        tempoDev = 50;
        isWriting = false;
    }
    setTimeout(typeWritting, 100);
}

typeWritting()