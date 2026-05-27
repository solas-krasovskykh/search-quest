function checkPasswords() 
{
    var resultBox = document.getElementById("hint");
    var password = document.getElementById("password");
    var password2 = document.getElementById("password2");
    var passwords = [password.value.toLowerCase(), password2.value.toLowerCase()];
    passwords.sort();
    if((passwords[0] == "supercrip" || passwords[0] == "supercrips") && (passwords[1] == "victim" || passwords[1] == "victims")) {
        resultBox.innerHTML = "Great job! Here's your next hint.";
        resultBox.href = "https://solas-krasovskykh.github.io/search-quest/media/photohint2.jpg"
    }
    else {
        resultBox.innerHTML = "hmm, not quite there, try again"; 
    }
 }