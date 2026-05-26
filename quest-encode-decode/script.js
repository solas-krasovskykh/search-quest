function checkPassword()
{
    var resultBox = document.getElementById("hint");
    var password = document.getElementById("password");
    var imagehint = document.getElementById("imagehint");

    if(password.value.toLowerCase() == "science") {
        resultBox.innerHTML = "Ready for the next one?";
        resultBox.href = "https://solas-krasovskykh.github.io/search-quest/archive/quest-archive/quest-archive.html"
    }
    else {
        resultBox.innerHTML = "hmm, not quite there, try again";
    }
}