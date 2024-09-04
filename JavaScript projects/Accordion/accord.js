let target = document.querySelectorAll(".icon");
/*let ans = document.querySelectorAll("ans");
ans.style.display = "none";*/
    target.forEach(targ =>{
        targ.addEventListener("click",()=>{
            const par = targ.parentElement.parentElement;
            const answer = par.querySelector(" .ans");
            if(targ.style.transform == 'rotate(-90deg)'){
                targ.style.transform = 'rotate(0deg)';
                answer.style.display = "flex";
            }else{
                targ.style.transform = 'rotate(-90deg)';
                answer.style.display = "none";
            }
        })
    })