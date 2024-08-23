
const correctPin= 2364;
let accountBal= 1000000;
const accountNum= 3189334455;
let name = prompt("Enter your name: ");
let pin = prompt("Enter your pin: ");
if(pin==correctPin){
    let accountNum2= prompt("Enter the account number: ");
    if(accountNum2 == accountNum){
        let active=true;
        alert("Welcome ", name);
    }
    else{
        let active=false;
        alert("Incorrect Account number!!");
        
    }
}else{
    active=false;
    alert("Incorrect Pin");
    
}
let newbal;
let count=0;
    let amountToWithdraw= prompt("Please enter withdrawal amount : ")
    if(amountToWithdraw>accountBal){
        alert("Insufficient Balance");
    }else{
        newbal=accountBal-amountToWithdraw;
        accountBal=newbal;
    }
alert("Your new balance is: "+ accountBal);
console.log("You withdrew: "+ amountToWithdraw);
console.log("Your new balance is: "+ accountBal);

//Transfer
let acnts=[3188698058,3188698055,3188698052];
let transferAmnt=prompt("Enter transfer amount: ");
let receiver= prompt("Enter receiver number: ");
if(transferAmnt<accountBal){
    for(let i=0; i<acnts.length; i++){
        if(receiver==acnts[i]){
            accountBal-=transferAmnt;
            alert("Transfer successful ")
            alert("Your new balance is: "+ accountBal);
            console.log("You transferred: "+ transferAmnt);
            console.log("Your new balance is: "+ accountBal);
            break;
        } else{
            alert("invalid entry!!");
            console.log("Invalid Entry!!");
            break;
        }
    }
}else{
    alert("Insufficient funds");
    console.log("Insufficient funds");
}
