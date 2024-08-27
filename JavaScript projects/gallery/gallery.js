let displayTile = document.getElementById("dispcont");
displayTile.style.display = "none";

function show() {
  let images = document.querySelectorAll("img");
  let display = document.querySelector("#image-display img");

  images.forEach((image) => {
    image.addEventListener("click", () => {
      display.src = image.src;
      displayTile.style.display = "flex";
    });
  });
}
function cancel(){
    if(displayTile.style.display == "flex"){
        displayTile.style.display = "none";
    }else{
        displayTile.style.display = "flex";
    }
}