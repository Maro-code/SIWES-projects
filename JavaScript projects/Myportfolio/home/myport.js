document.addEventListener('DOMContentLoaded', function() {
    let button = document.getElementById("btnprimary");
    let targ = document.getElementById("targ");
    targ.style.display = "none";
    button.addEventListener("mouseover",() =>{
        targ.style.display = "flex";
    })
    button.addEventListener("mouseout",() =>{
        targ.style.display = "none";
    })
    button.addEventListener("click",() =>{
        window.open("https://maro-code.github.io/SIWES-projects/JavaScript%20projects/Myportfolio/resume/resume.html");
    })
});