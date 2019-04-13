var button = document.querySelector("button");

button.addEventListener("click", function() {

    if (document.body.style.background === "blue") {
        document.body.style.background = "pink";
    } else {
        document.body.style.background = "blue";
    }
});