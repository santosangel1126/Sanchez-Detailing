var backButtonEl = document.getElementById('back-button');


var goBack = function() {
    location.replace('./index.html');
    console.log("BACK BUTTON CLICKED")
}

backButtonEl.addEventListener("click", goBack);