let options = document.querySelectorAll(".option .icon-op");
let text = document.querySelectorAll(".option");
options.forEach(option => {
    option.style.display = "none";
});
text.forEach(txt => {
    txt.addEventListener("click", () => {
        options.forEach(option => {
            option.style.display = "none";
        });

        let option = txt.querySelector(".icon-op");
        if (option) {
            option.style.display = "flex";
        }
        if((txt.querySelector(" a")).innerHTML=="Resume"){
            window.open("https://maro-code.github.io/SIWES-projects/JavaScript%20projects/Myportfolio/resume/resume.html","_blank");
        }else if((txt.querySelector(" a")).innerHTML=="Contact"){
            window.open("http://127.0.0.1:5500/JavaScript%20projects/Myportfolio/contact/contact.html","_blank");
        }else if((txt.querySelector(" a")).innerHTML=="Home"){
            window.open("http://127.0.0.1:5500/JavaScript%20projects/Myportfolio/home/myport.html","_blank");
        }else if((txt.querySelector(" a")).innerHTML=="Portfolio"){
            window.open("http://127.0.0.1:5500/JavaScript%20projects/Myportfolio/portfolio2/portfolio.html","_blank");
        }
    });
});
