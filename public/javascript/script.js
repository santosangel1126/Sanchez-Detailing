var bookButtonEl = document.getElementById("book-now-btn");

var bookNow = function() {
    location.replace('./calendly.html');
}



bookButtonEl.addEventListener("click", bookNow);
