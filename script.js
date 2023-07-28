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
document.querySelector("#xx").addEventListener("click", (element) => {
    document.querySelector("header > nav > div:nth-child("+i+")").classList.replace("active", "plus-active");    
    document.querySelector("header > nav > div:nth-child("+(i+1)+")").classList.add("active");
    document.querySelector(".active h1").style.top = (window.innerHeight / 2 - document.querySelector(".active").offsetTop) - parseFloat(window.getComputedStyle(document.querySelector(".active h1")).height.slice(0,-2)) + "px"
    document.querySelectorAll(".plus-active h1")[i-1].style.top = "0";
    i++;
});


document.querySelector(".active h1").style.top = (window.innerHeight / 2 - document.querySelector(".active").offsetTop) - parseFloat(window.getComputedStyle(document.querySelector(".active h1")).height.slice(0,-2)) + "px"