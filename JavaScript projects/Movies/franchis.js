let movies = document.querySelectorAll(".movies ul li");
let series = document.querySelectorAll(".series ul li");
series.forEach((item)  =>{
    item.addEventListener("mouseover", (event) => {
        item.style.backgroundColor = "#ff0909";
    })
    item.addEventListener("mouseout", (event) => {
        item.style.backgroundColor = "";
    })
})
movies.forEach((movie) =>{
    movie.addEventListener("mouseover", (event) => {
        movie.style.backgroundColor = "#2609ff";
        })
        movie.addEventListener("mouseout", (event) => {
            movie.style.backgroundColor = "";
            })
})