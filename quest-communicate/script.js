/*function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
showTime();
setInterval(function () {
	showTime();
}, 1000);
*/

function checkPassword() 
{
    var resultBox = document.getElementById("hint");
    var password = document.getElementById("password");
    if(password.value.toLowerCase() == "library") {
        resultBox.innerHTML="*title initials*:*author initials*:*page*:*row*:*word*? (example: ML:CM:214:8:2?) hint: ↑";
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
        resultBox.innerHTML = "Here's your map.";
        resultBox.href = "https://drive..."
    }
    else {
        resultBox.innerHTML = "hmm, not quite there, try again"; 
    }
 }