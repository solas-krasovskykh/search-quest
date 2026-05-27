function checkPassword() 
{
    var resultBox = document.getElementById("hint");
    var password = document.getElementById("password");

    if(password.value.toLowerCase() == "search") {
        resultBox.innerHTML = "Good start! Did you know that UITM has had quite a few achievements? For example, we got the first place in Podkarpacka Akademicka Liga Unihokeja 2021!";
    }
    else {
        resultBox.innerHTML = "hmm, not quite there, try again"; 
    }
 }