function checkPassword() 
{
    var resultBox = document.getElementById("hint");
    var password = document.getElementById("password");
    if(password.value.toLowerCase() == "library") {
        resultBox.innerHTML="RS:D:TSOLWFW:320:2:6?";
    }
    else {
        resultBox.innerHTML="hmm, not quite there, try again"; 
    }
   // OR you can use ternary operator
   // resultBox.innerHTML =  (textA) ? textA : textB;
 }

function checkPassword2() 
{
    var resultBox = document.getElementById("answer");
    var password = document.getElementById("password2");
    if(password.value.toLowerCase() == "eden") {
        resultBox.innerHTML = "You're nearly done! Here's your map.";
        resultBox.href = "https://i.postimg.cc/CL3qZW3V/back-to-the-beginning-harvest.jpg"
    }
    else {
        resultBox.innerHTML = "hmm, not quite there, try again"; 
    }
 }