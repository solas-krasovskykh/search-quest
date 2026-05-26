function checkPassword() 
{
    var resultBox = document.getElementById("hint");
    var password = document.getElementById("password");

    if(password.value.toLowerCase() == "search") {
        resultBox.innerHTML = "Good start! Look behind the *something in the gym or reception*.";
    }
    else {
        resultBox.innerHTML = "hmm, not quite there, try again"; 
    }
 }