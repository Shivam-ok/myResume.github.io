var progressBars = document.querySelectorAll(".skill-progress > div");



function initialiseBar(bar) {
    bar.setAttribute("data-visited", false);
    bar.style.width = 0 + '%';
}

for (var bar of progressBars) {
    initialiseBar(bar);
}



function fillBar(bar) {

    var currentWidth = 0;
    var targetWidth = bar.getAttribute("data-bar-width");
    var interval = setInterval(function () {
        if (currentWidth >= targetWidth) {
            clearInterval(interval);
            return;
        }
        currentWidth++;
        bar.style.width = currentWidth + '%';
    }, 5);

}



// This function uses a for loop for individual progress bars.
function checkScroll() {

    for (let bar of progressBars) {
        var barCoordinates = bar.getBoundingClientRect();
        if ((bar.getAttribute("data-visited") == "false") &&
            (barCoordinates.top <= (window.innerHeight - barCoordinates.height))) {
            bar.setAttribute("data-visited", true);
            fillBar(bar);
        } else if (barCoordinates.top > window.innerHeight) {
            bar.setAttribute("data-visited", false);
            initialiseBar(bar);
        }

    }
}

document.getElementById("contact-form").onsubmit=function(){
    document.getElementById('load').style.display="inline";
}

// send mail

function sendmail(){

    var name=$("#input-name").val();
    var email=$("#input-email").val();
    var message=$("#input-message").val();

    var body="Name : " + name + "<br>Email : " + email + "<br>Message : " + message;

    Email.send({
    SecureToken : "95558489-8d3a-49e5-8aa5-8b7c6339817d",
    To : "shivamchoudhary86005@gmail.com",
    From : "shivamchoudhary86005@gmail.com",
    Subject : "Contact Us",
    Body : body
    }).then(
     message => alert("Thanku For Submitting form ")
   );
}

window.addEventListener("scroll", checkScroll);

// This event fills the progress bars if they are displayed on the screen when the page is loaded.
//window.addEventListener("load", checkScroll);
