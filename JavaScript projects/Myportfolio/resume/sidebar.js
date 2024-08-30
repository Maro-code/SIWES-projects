document.addEventListener('DOMContentLoaded', function() {
    let options = document.querySelectorAll(".option .icon-op");
    let texts = document.querySelectorAll(".option");

    options.forEach(option => {
        option.style.display = "none";
    });

    // Add mouseover event listeners to each text option
    texts.forEach(txt => {
        txt.addEventListener("mouseover", () => {
            // Hide only the icons inside the current text option
            let iconOp = txt.querySelector(".icon-op");
            if (iconOp) {
                iconOp.style.display = "flex";
            }
        });

        txt.addEventListener("mouseout", () => {
            // Hide the icon when the mouse is out
            let iconOp = txt.querySelector(" .icon-op");
            if (iconOp) {
                iconOp.style.display = "none";
            }
        });

        /* Uncomment this section to handle click events
        txt.addEventListener("click", () => {
            let iconOp = txt.querySelector(".icon-op");
            if (iconOp) {
                iconOp.style.display = "flex";
            }

            // Open links based on the text
            const linkText = txt.querySelector("a").innerHTML;
            switch (linkText) {
                case "Resume":
                    window.open("https://maro-code.github.io/SIWES-projects/JavaScript%20projects/Myportfolio/resume/resume.html");
                    break;
                case "Contact":
                    window.open("https://maro-code.github.io/SIWES-projects/JavaScript%20projects/Myportfolio/contact/contact.html");
                    break;
                case "Home":
                    window.open("https://maro-code.github.io/SIWES-projects/JavaScript%20projects/Myportfolio/home/myport.html");
                    break;
                case "Portfolio":
                    window.open("https://maro-code.github.io/SIWES-projects/JavaScript%20projects/Myportfolio/portfolio2/portfolio.html");
                    break;
            }
        });
        */
    });
});
