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


navSectionHeight = 0;
document.querySelectorAll("header > nav > div").forEach(element => {
    element.style.top = 48 * navSectionHeight + "px";
    navSectionHeight++;
})



i = 1
function activeSection(direction) {
    if (direction == "forward") {
        document.querySelector(".active").classList.replace("active", "not-active");    
        document.querySelector("header > nav > div:nth-child("+(i+1)+")").classList.add("active");
        document.querySelector(".active h1").style.top = (window.innerHeight / 2 - document.querySelector(".active").offsetTop) - parseFloat(window.getComputedStyle(document.querySelector(".active h1")).height.slice(0,-2)) + "px";
        document.querySelectorAll(".not-active h1")[i-1].style.top = "0";
        i++;
    }
    else if (direction == "backward") {
        document.querySelector(".active h1").style.removeProperty("top");
        document.querySelector(".active").classList.remove("active");
        document.querySelectorAll(".not-active")[i-2].classList.replace("not-active", "active");
        document.querySelector(".active h1").style.top = (window.innerHeight / 2 - document.querySelector(".active").offsetTop) - parseFloat(window.getComputedStyle(document.querySelector(".active h1")).height.slice(0,-2)) + "px";
        i--;
    }
    
}


document.querySelector(".active h1").style.top = (window.innerHeight / 2 - document.querySelector(".active").offsetTop) - parseFloat(window.getComputedStyle(document.querySelector(".active h1")).height.slice(0,-2)) + "px";


var lastScrollTop = 0;


document.addEventListener("scroll", ()=> { 
   var st = window.pageYOffset || document.documentElement.scrollTop; 
   if (st > lastScrollTop) {
      // downscroll code
      document.querySelectorAll("main section").forEach(element => {

        if (element.getBoundingClientRect().top <= window.innerHeight / 2 - 100 && Array.prototype.indexOf.call(element.parentNode.children, element) > i -1) {
            activeSection("forward")
        }
    })
   } else if (st < lastScrollTop) {
      // upscroll code
      document.querySelectorAll("main section").forEach(element => {
        if (element.getBoundingClientRect().top + element.offsetHeight > window.innerHeight / 2 + 100 && Array.prototype.indexOf.call(element.parentNode.children, element) < i -1) {
            activeSection("backward")
        }
    
    })
   } // else was horizontal scroll
   lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);


document.querySelectorAll("header h1").forEach(element => {
    element.addEventListener("click", ()=> {
        document.getElementById(document.querySelectorAll("main section")[Array.prototype.indexOf.call(document.querySelectorAll("header h1"), element)].id).scrollIntoView({ behavior: "smooth"});        
    })
})