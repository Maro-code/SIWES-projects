document.addEventListener('DOMContentLoaded', function() {
    let options = document.querySelectorAll(".option .icon-op");
let texts = document.querySelectorAll(".option");

options.forEach(option => {
    option.style.display = "none";
});

// Add mouseover event listeners to each text option
texts.forEach(txt => { 
    
    txt.addEventListener("click", () => {
        options.forEach(option => {
            option.style.display = "none";
        });

        let iconOp = txt.querySelector(".icon-op");
        if (iconOp) {
            iconOp.style.display = "flex";
        }
        // Open links based on the text
        const linkText = txt.querySelector("a").innerHTML;
        if (linkText === "Resume") {
            window.open("https://maro-code.github.io/SIWES-projects/JavaScript%20projects/Myportfolio/resume/resume.html");
        } else if (linkText === "Contact") {
            window.open("http://127.0.0.1:5500/JavaScript%20projects/Myportfolio/contact/contact.html");
        } else if (linkText === "Home") {
            window.open("http://127.0.0.1:5500/JavaScript%20projects/Myportfolio/home/myport.html");
        } else if (linkText === "Portfolio") {
            window.open("http://127.0.0.1:5500/JavaScript%20projects/Myportfolio/portfolio2/portfolio.html");
        }
    });
});
});