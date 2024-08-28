let options = document.getElementById("options");
let option = options.querySelectorAll(".opt"); // Corrected selector

option.forEach(opt => {
    opt.addEventListener("click", () => {
        option.forEach(o => o.classList.remove("selected"));
        opt.classList.add("selected");

        if (opt.innerHTML === "Design") {
            document.getElementById("web").style.display = "none";
            document.getElementById("figma").style.display = "flex";
        } else if (opt.innerHTML === "Websites") {
            document.getElementById("web").style.display = "flex";
            document.getElementById("figma").style.display = "none";
        } else {
            document.getElementById("web").style.display = "flex";
            document.getElementById("figma").style.display = "flex";
        }

        console.log(opt.innerHTML);
    });
});
