window.onscroll = function() {myFunction2()};

var header = document.getElementById("item2");
var sticky = header.offsetTop;

function myFunction2() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}