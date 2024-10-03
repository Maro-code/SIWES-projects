let social_link = document.querySelectorAll("ul li");
social_link.forEach((link) => {
    link.addEventListener("mouseover", () => {
        link.classList.add("active");
    })
    link.addEventListener("mouseout", () => {
        link.classList.remove("active");
    })
})