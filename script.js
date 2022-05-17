let toggleNavStatus = false;

let openCloseMenu= document.getElementById("btn").addEventListener("click", function () {
    let getOptions = document.querySelectorAll(".options button");
    let makeArray = Array.from(getOptions);

    if (toggleNavStatus === false) {
        let length = makeArray.length;

        for (let i = 0; i < length; i++) {
            makeArray[i].style.visibility = "visible";
        }
        toggleNavStatus = true;
    }

   else if (toggleNavStatus === true) {
        let length = makeArray.length;

       for (let i = 0; i < length; i++) {
            makeArray[i].style.visibility = "hidden";
        }
        toggleNavStatus = false;
    }
})

let chooseGrey= document.getElementById("home").addEventListener("click", function () {
    let makeGrey = document.querySelector("body");
    makeGrey.style.background = "lightgrey";
    document.getElementById("text").innerHTML = "The background-color is now GREY.";
    let getOptions = document.querySelectorAll(".options button");
    let makeArray = Array.from(getOptions);

    if (toggleNavStatus === false) {
        let length = makeArray.length;

        for (let i = 0; i < length; i++) {
            makeArray[i].style.visibility = "visible";
        }
        toggleNavStatus = true;
    }

   else if (toggleNavStatus === true) {
        let length = makeArray.length;

       for (let i = 0; i < length; i++) {
            makeArray[i].style.visibility = "hidden";
        }
        toggleNavStatus = false;
    }
})

let chooseRed= document.getElementById("red").addEventListener("click", function () {
    let makeRed = document.querySelector("body");
    makeRed.style.background = "red";
    document.getElementById("text").innerHTML = "The background-color is now RED."
    let getOptions = document.querySelectorAll(".options button");
    let makeArray = Array.from(getOptions);

    if (toggleNavStatus === false) {
        let length = makeArray.length;

        for (let i = 0; i < length; i++) {
            makeArray[i].style.visibility = "visible";
        }
        toggleNavStatus = true;
    }

   else if (toggleNavStatus === true) {
        let length = makeArray.length;

       for (let i = 0; i < length; i++) {
            makeArray[i].style.visibility = "hidden";
        }
        toggleNavStatus = false;
    }
})

let chooseOrange= document.getElementById("orange").addEventListener("click", function () {
    let makeOrange = document.querySelector("body");
    makeOrange.style.background = "orange";
    document.getElementById("text").innerHTML = "The background-color is now ORANGE."
    let getOptions = document.querySelectorAll(".options button");
    let makeArray = Array.from(getOptions);

    if (toggleNavStatus === false) {
        let length = makeArray.length;

        for (let i = 0; i < length; i++) {
            makeArray[i].style.visibility = "visible";
        }
        toggleNavStatus = true;
    }

   else if (toggleNavStatus === true) {
        let length = makeArray.length;

       for (let i = 0; i < length; i++) {
            makeArray[i].style.visibility = "hidden";
        }
        toggleNavStatus = false;
    }
})

let choosePurple= document.getElementById("purple").addEventListener("click", function () {
    let makePurple = document.querySelector("body");
    makePurple.style.background = "purple";
    document.getElementById("text").innerHTML = "The background-color is now PURPLE."
    let getOptions = document.querySelectorAll(".options button");
    let makeArray = Array.from(getOptions);

    if (toggleNavStatus === false) {
        let length = makeArray.length;

        for (let i = 0; i < length; i++) {
            makeArray[i].style.visibility = "visible";
        }
        toggleNavStatus = true;
    }

   else if (toggleNavStatus === true) {
        let length = makeArray.length;

       for (let i = 0; i < length; i++) {
            makeArray[i].style.visibility = "hidden";
        }
        toggleNavStatus = false;
    }
})

let chooseGreen= document.getElementById("green").addEventListener("click", function () {
    let makeGreen = document.querySelector("body");
    makeGreen.style.background = "green";
    document.getElementById("text").innerHTML = "The background-color is now GREEN."
    let getOptions = document.querySelectorAll(".options button");
    let makeArray = Array.from(getOptions);

    if (toggleNavStatus === false) {
        let length = makeArray.length;

        for (let i = 0; i < length; i++) {
            makeArray[i].style.visibility = "visible";
        }
        toggleNavStatus = true;
    }

   else if (toggleNavStatus === true) {
        let length = makeArray.length;

       for (let i = 0; i < length; i++) {
            makeArray[i].style.visibility = "hidden";
        }
        toggleNavStatus = false;
    }
})