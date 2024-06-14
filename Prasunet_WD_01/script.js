window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("nav").style.padding = "10px 0";
        document.getElementById("nav").style.backgroundColor = "#06085c";
    } else {
        document.getElementById("nav").style.padding = "15px 0";
        document.getElementById("nav").style.backgroundColor = "#00001D";
    }
}
