function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

projectName = [
    "PRONOTE",
    "City Craft",
    "Moyenne",
    "CV",
    "Lyris"
];

projectDesc = [
    "Outils qui permet de générer un emploi du temps personnalisé, copié à partir du code source du site PRONOTE d'Index Education",
    "Projet de fin de module du cours de développement front-end qui consistait à créer un jeu à l'aide de HTML/CSS/JS",
    "Un simulateur que j'ai crée durant la terminal pour prédire ma moyenne à chaque devoir",
    "Reproduction d'un CV PDF en HTML/CSS",
    "Création d'une maquette sur Adobe XD pour une plateforme fictive de rencontre entre producteurs de musique et artistes indépendant, puis création du site en HTML/CSS à partir de la maquette"
];

projectURL = [
    "https://github.com/Khantonai/PRONOTE",
    "https://github.com/Khantonai/City-Craft",
    "https://github.com/Khantonai/Simulateur-de-moyenne",
    "https://github.com/Khantonai/Old-CV",
    "https://xd.adobe.com/view/15e2c9c5-c10a-4a55-854b-7fc3c345c4f5-40b1/"
];

var menu = document.querySelector("#menu");
/*
menu.addEventListener("mouseenter", function (e) {
    menu.style.width = "200px";
})

menu.addEventListener("mouseleave", function (e) {
    menu.style.width = "50px";
})
*/




class CircleCreator {
    constructor(id, posX, posY, speedX, speedY, color, size, marge) {
        this.id = id;
        this.posX = posX;
        this.posY = posY;
        this.speedX = speedX;
        this.speedY = speedY;
        this.color = color;
        this.size = size;
        this.marge = marge;
    }
}

var circle1 = new CircleCreator(document.querySelector("#circle1"), -100, -100, 0, 0, 0, 0, undefined);
var circle2 = new CircleCreator(document.querySelector("#circle2"), -100, -100, 0, 0, 0, 0, undefined);
var circle3 = new CircleCreator(document.querySelector("#circle3"), -100, -100, 0, 0, 0, 0, undefined);
var circle4 = new CircleCreator(document.querySelector("#circle4"), -100, -100, 0, 0, 0, 0, undefined);


var circleColor = ["#FEC93B", "#07689F", "#40A8C5", "#A2D5F2"];

function circleMovement() {


    circle1.marge = circle1.size / 10 * window.innerWidth;
    circle2.marge = circle2.size / 10 * window.innerWidth;
    circle3.marge = circle3.size / 10 * window.innerWidth;
    circle4.marge = circle4.size / 10 * window.innerWidth;


    if (circle1.id.offsetLeft > window.innerWidth || circle1.id.offsetTop > window.innerHeight || circle1.id.offsetLeft < 0 - circle1.marge || circle1.id.offsetTop < 0 - circle1.marge) {
        circle1.size = getRandomInt(1, 4);
        circle1.id.style.width = (circle1.size * 10) + "vmin";
        circle1.id.style.height = (circle1.size * 10) + "vmin";
        circle1.marge = circle1.size / 10 * window.innerWidth;
        createCircle = circlePatern(circle1.marge);
        circle1.posX = createCircle[0];
        circle1.posY = createCircle[1];
        circle1.id.style.left = circle1.posX + "px";
        circle1.id.style.top = circle1.posY + "px";
        circle1.speedX = createCircle[2];
        circle1.speedY = createCircle[3];
        // circle1.id.style.backgroundColor = circleColor[createCircle[4]];
        circle1.id.style.backgroundColor = circleColor[0];
    }
    else {
        circle1.id.style.left = circle1.posX + "px";
        circle1.id.style.top = circle1.posY + "px";
        circle1.posX += circle1.speedX;
        circle1.posY += circle1.speedY;
    }

    if (circle2.id.offsetLeft > window.innerWidth || circle2.id.offsetTop > window.innerHeight || circle2.id.offsetLeft < 0 - circle2.marge || circle2.id.offsetTop < 0 - circle2.marge) {
        circle2.size = getRandomInt(1, 4);
        circle2.id.style.width = (circle2.size * 10) + "vmin";
        circle2.id.style.height = (circle2.size * 10) + "vmin";
        circle2.marge = circle2.size / 10 * window.innerWidth;
        createCircle2 = circlePatern(circle2.marge);
        circle2.posX = createCircle2[0];
        circle2.posY = createCircle2[1];
        circle2.id.style.left = circle2.posX + "px";
        circle2.id.style.top = circle2.posY + "px";
        circle2.speedX = createCircle2[2];
        circle2.speedY = createCircle2[3];
        //circle2.id.style.backgroundColor = circleColor[createCircle2[4]]
        circle2.id.style.backgroundColor = circleColor[1];
    }
    else {
        circle2.id.style.left = circle2.posX + "px";
        circle2.id.style.top = circle2.posY + "px";
        circle2.posX += circle2.speedX;
        circle2.posY += circle2.speedY;
    }

    if (circle3.id.offsetLeft > window.innerWidth || circle3.id.offsetTop > window.innerHeight || circle3.id.offsetLeft < 0 - circle3.marge || circle3.id.offsetTop < 0 - circle3.marge) {
        circle3.size = getRandomInt(1, 4);
        circle3.id.style.width = (circle3.size * 10) + "vmin";
        circle3.id.style.height = (circle3.size * 10) + "vmin";
        circle3.marge = circle3.size / 10 * window.innerWidth;
        createcircle3 = circlePatern(circle3.marge);
        circle3.posX = createcircle3[0];
        circle3.posY = createcircle3[1];
        circle3.id.style.left = circle3.posX + "px";
        circle3.id.style.top = circle3.posY + "px";
        circle3.speedX = createcircle3[2];
        circle3.speedY = createcircle3[3];
        //circle3.id.style.backgroundColor = circleColor[createcircle3[4]];
        circle3.id.style.backgroundColor = circleColor[3];
    }
    else {
        circle3.id.style.left = circle3.posX + "px";
        circle3.id.style.top = circle3.posY + "px";
        circle3.posX += circle3.speedX;
        circle3.posY += circle3.speedY;
    }

    setTimeout(circleMovement, 10);

}

function circlePatern(marge) {


    if (getRandomInt(0, 2) == 0) {
        posX = getRandomInt(0, window.innerWidth + 1)
        if (getRandomInt(0, 2) == 0) {
            posY = -circle1.marge;
        }
        else {
            posY = window.innerHeight;
        }

    }
    else {
        if (getRandomInt(0, 2) == 0) {
            posX = -circle1.marge;
        }
        else {
            posX = window.innerWidth;
        }
        posY = getRandomInt(0, window.innerHeight + 1);
    }

    if (posX > window.innerWidth / 2) {
        speedX = getRandomInt(3, 9) / -10;
    }
    else {
        speedX = getRandomInt(3, 9) / 10;
    }

    if (posY > window.innerHeight / 2) {
        speedY = getRandomInt(3, 9) / -10;
    }
    else {
        speedY = getRandomInt(3, 9) / 10;
    }

    color = getRandomInt(0, 4);

    return [posX, posY, speedX, speedY, color];
}

circleMovement();


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

function openCat(id) {
    if (document.querySelector("#" + id).style.height == "65px" || document.querySelector("#" + id).style.height == "") {


        document.querySelector("#" + id).style.height = "calc(85px + " + document.querySelector("#" + id + " > .portfolio-grid").offsetHeight + "px)";
    }
    else {
        document.querySelector("#" + id).style.height = "65px";
    }

    document.querySelectorAll("#" + id + " > div > svg").forEach(element => {
        if (document.querySelector("#" + id).style.height == "65px" || document.querySelector("#" + id).style.height == "") {
            element.style.transform = "rotate(0deg)";
        }
        else {

            element.style.transform = "rotate(-180deg)";
        }

    }); 
}


window.addEventListener("resize", (e) => {

    document.querySelectorAll(".cat-portfolio").forEach(element => {
        if (element.style.height != "65px" && element.style.height != "") {
            setTimeout(() => {
                element.style.height = "calc(85px + " + document.querySelector("#" + element.id + " > .portfolio-grid").offsetHeight + "px)";
            }, 350);
        }
    });

})

function openProject(id) {
    
    if (id == "close") {
        document.querySelector("#right-portfolio-page").style.display = "none";
        document.querySelector("#portfolio-page > .border").style.display = "none";
        document.querySelector("#left-portfolio-page").style.flex = "0 0 calc(100% - 20px)";

        document.querySelector(".portfolio-grid > div > p").style.fontSize = "1.5vw";

        document.querySelectorAll(".portfolio-grid > div").forEach(element => {
            element.style.flex = "0 0 calc((100% - 22vw) / 5)";
            element.style.height = "calc(-25px + 19.5vw)";
        });

        document.querySelectorAll(".cat-portfolio").forEach(element => {
            if (element.style.height != "65px" && element.style.height != "") {
                setTimeout(() => {
                    element.style.height = "calc(85px + " + document.querySelector("#" + element.id + " > .portfolio-grid").offsetHeight + "px)";
                }, 1000);
            }
        });
    }
    else if (document.querySelector("#" + id).style.height == "" || document.querySelector("#" + id).style.height == "calc(-25px + 19.5vw)") {
        document.querySelector("#right-portfolio-page").style.display = "flex";
        document.querySelector("#portfolio-page > .border").style.display = "block";
        document.querySelector("#left-portfolio-page").style.flex = "0 0 calc(40% - 20px)";

        document.querySelector(".portfolio-grid > div > p").style.fontSize = "1.4vw";

        document.querySelectorAll(".portfolio-grid > div").forEach(element => {
            element.style.flex = "0 0 calc((100% - 9vw) / 2)";
            element.style.height = "15vw";
        });
    }


    document.querySelectorAll(".cat-portfolio").forEach(element => {
        if (element.style.height != "65px" && element.style.height != "") {
            setTimeout(() => {
                element.style.height = "calc(85px + " + document.querySelector("#" + element.id + " > .portfolio-grid").offsetHeight + "px)";

            }, 450);
        }



        document.querySelectorAll("#img-container > img").forEach(element => {
            element.remove();
        });

        document.querySelector("#navRight").style.visibility = "visible";
        document.querySelector("#navLeft").style.visibility = "hidden";
        document.querySelector("#img-container").style.left = 0

        i = 0;

        while (checkImg("images/" + id + "/screen" + i + ".png") == true) {
            var carrousel = document.createElement("img");
            carrousel.src = "images/" + id + "/screen" + i + ".png";
            carrousel.alt = "image" + i + " " + id;
            document.querySelector("#img-container").appendChild(carrousel);
            i++;
        }

        document.querySelector("#project-info > h2").textContent = document.querySelector("#" + id + " > h3").textContent;

        document.querySelector("#project-info > h3").textContent = document.querySelector("#" + id + " > p").textContent;

        document.querySelector("#project-info > p").textContent = projectDesc[projectName.indexOf(document.querySelector("#project-info > h2").textContent)];
        
        //----- Problème Safari ------
        setTimeout(() => {
            document.querySelector("#project-info > p").textContent = projectDesc[projectName.indexOf(document.querySelector("#project-info > h2").textContent)];
        }, 350);
        //----------------------------
        
        if (projectURL[projectName.indexOf(document.querySelector("#project-info > h2").textContent)] != "" && projectURL[projectName.indexOf(document.querySelector("#project-info > h2").textContent)] != undefined) {
            document.querySelector("#project-info > a").setAttribute("href", projectURL[projectName.indexOf(document.querySelector("#project-info > h2").textContent)]);
            document.querySelector("#project-info > a").textContent = projectURL[projectName.indexOf(document.querySelector("#project-info > h2").textContent)].slice(8);
        }
        else {
            document.querySelector("#project-info > a").setAttribute("href", "");
            document.querySelector("#project-info > a").textContent = "";
        }


    });
}

function checkImg(url) {
    var xhr = new XMLHttpRequest();
    xhr.open('HEAD', url, false);
    xhr.send();
    return xhr.status !== 404;
}


function imgNav(side) {
    if (side == "left") {

        document.querySelector("#img-container").style.left = parseInt(document.querySelector("#img-container").style.left.replace("vw", "")) + 25 + "vw";

        if (document.querySelector("#img-container").style.left == "0vw" || document.querySelector("#img-container").style.left == "") {
            document.querySelector("#navLeft").style.visibility = "hidden";
        }

        document.querySelector("#navRight").style.visibility = "visible";
    }
    else {
        if (document.querySelector("#img-container").style.left == "0vw" || document.querySelector("#img-container").style.left == "") {
            document.querySelector("#img-container").style.left = "-25vw";
        }
        else {
            document.querySelector("#img-container").style.left = parseInt(document.querySelector("#img-container").style.left.replace("vw", "")) - 25 + "vw";
        }

        if (document.querySelector("#img-container").offsetWidth == Math.round(window.innerWidth * ((parseInt(document.querySelector("#img-container").style.left.replace("vw", "")) * -1 + 25) / 100))) {
            document.querySelector("#navRight").style.visibility = "hidden";
        }

        document.querySelector("#navLeft").style.visibility = "visible";
    }
}

typeWritting();


