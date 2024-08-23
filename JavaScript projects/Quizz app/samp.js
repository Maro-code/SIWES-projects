let baddeets = document.getElementById("baddeets");
baddeets.style.display = "none";
let USER = document.getElementById("USER");
function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    
    if (username != "" && password == "admin") {
        window.location.assign(`./Quizzz.html?USER=${encodeURIComponent(username)}`);
    } else {
        baddeets.style.display = "flex";
    }
}

function dismiss() {
    if (baddeets.style.display === "flex") {
        baddeets.style.display = "none";
    }
}
