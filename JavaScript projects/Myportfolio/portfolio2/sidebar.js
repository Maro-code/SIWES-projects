document.addEventListener('DOMContentLoaded', function() {
    let options = document.querySelectorAll(".option .icon-op");
    let texts = document.querySelectorAll(".option");

    options.forEach(option => {
        option.style.display = "none";
    });

    // Add mouseover event listeners to each text option
    texts.forEach(txt => {
        txt.addEventListener("mouseover", () => {
            // Show the icon inside the current text option
            let iconOp = txt.querySelector(".icon-op");
            if (iconOp) {
                iconOp.style.display = "flex";
            }
        });

        txt.addEventListener("mouseout", () => {
            // Hide the icon when the mouse is out
            let iconOp = txt.querySelector(".icon-op");
            if (iconOp) {
                iconOp.style.display = "none";
            }
        });

        txt.addEventListener("click", () => {
            let iconOp = txt.querySelector(".icon-op");

            // Open links based on the text
            const linkText = txt.querySelector("a").innerHTML;
            switch (linkText) {
                case "Resume":
                    iconOp.style.display = "flex";
                    window.open("https://maro-code.github.io/SIWES-projects/JavaScript%20projects/Myportfolio/resume/resume.html");
                    break;
                case "Contact":
                    iconOp.style.display = "flex";
                    window.open("https://maro-code.github.io/SIWES-projects/JavaScript%20projects/Myportfolio/contact/contact.html");
                    break;
                case "Home":
                    iconOp.style.display = "flex";
                    window.open("https://maro-code.github.io/SIWES-projects/JavaScript%20projects/Myportfolio/home/myport.html");
                    break;
                case "Portfolio":
                    iconOp.style.display = "flex";
                    window.open("https://maro-code.github.io/SIWES-projects/JavaScript%20projects/Myportfolio/portfolio2/portfolio.html");
                    break;
            }
        });
    });

    let menu = document.getElementById("hamburger");
    let bar = document.getElementById("bar");
    menu.addEventListener("click", ()=>{
        menu.style.display = "none";
        bar.style.display = "flex";
    })

    function handleClickOutside(event) {
        if (!bar.contains(event.target) && !menu.contains(event.target)) {
            bar.style.display = "none";
            menu.style.display = "flex"; 
        }
    }

    function addClickOutsideListener() {
        if (window.innerWidth <= 768) {
            document.addEventListener("click", handleClickOutside);
        } else {
            document.removeEventListener("click", handleClickOutside);
        }
    }

    // Add the listener on load and when resizing the window
    addClickOutsideListener();
    window.addEventListener('resize', addClickOutsideListener);
});
