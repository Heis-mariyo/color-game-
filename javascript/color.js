alert("CONNECTED")

var button = document.querySelector("button");

var body = document.querySelector("body");

var ispurple = false;

button.addEventListener("click", function() {
    if (ispurple){
        body.style.background = "white";
    } else {
        body.style.background = "purple";
        
    }
    ispurple = !ispurple;
});

 