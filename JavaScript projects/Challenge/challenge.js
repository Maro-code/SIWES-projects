const controls = document.getElementById("controls");
const button = document.getElementById("btn");
const count = document.getElementById("count");
const word = document.querySelector("#btn h3");
let picture = document.getElementById("pic");
button.addEventListener("click", () => {
    const currentDirection = getComputedStyle(controls).flexDirection;

    if((count.innerHTML == "1/2") && (word.innerHTML == "Next") && (currentDirection == "row")) {
        picture.src="./pic2.png";
        word.innerHTML = "Previous";
        count.innerHTML = "2/2";
        count.style.borderLeft = "none";
        count.style.borderRight = "2px solid";
        count.style.paddingLeft = "none";
        count.style.paddingRight = "0.5rem";
        count.style.marginLeft = "none";
        count.style.marginRight = "0.5rem";
        controls.style.flexDirection = "row-reverse";
    } else {
        picture.src="./pic1.png";
        word.innerHTML = "Next";
        count.innerHTML = "1/2";
        count.style.borderRight = "none";
        count.style.borderLeft = "2px solid";
        count.style.paddingRight = "none";
        count.style.paddingLeft = "0.5rem";
        count.style.marginRight = "none";
        count.style.marginLeft = "0.5rem";
        controls.style.flexDirection = "row";
    }
});
