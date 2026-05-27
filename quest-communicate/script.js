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
        resultBox.innerHTML="TCEoL:DC:304:1:2? hint: ↑";
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
    if(password.value.toLowerCase() == "problem") {
        resultBox.innerHTML = "Here's your map.";
        resultBox.href = "https://solas-krasovskykh.github.io/search-quest/media/back%20to%20the%20beginning%20-%20harvest2.jpg"
    }
    else {
        resultBox.innerHTML = "is there a problem? try to consult some literature"; 
    }
 }