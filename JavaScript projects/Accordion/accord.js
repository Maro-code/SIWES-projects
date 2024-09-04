let target = document.getElementById("icon");
let ans = document.getElementById("ans");
ans.style.display = "none";
function spin(){
    if(target.style.transform == 'rotate(-90deg)'){
        target.style.transform = 'rotate(0deg)';
        ans.style.display = "flex";
    }else{
        target.style.transform = 'rotate(-90deg)';
        ans.style.display = "none";
    }
}