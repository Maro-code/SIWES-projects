function reverse(input){
    return input.split("").reverse().join("");
}
function isPalindrome(){
    let userInput = document.getElementById("userinput").value;
    userReversed = reverse(userInput);
    if(userInput === userReversed){
        window.alert("It is a palindrome");
        userInput = "";
    }else{
        window.alert("It is not a palindrome");
        userInput = "";
    }
}