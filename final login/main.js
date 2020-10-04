function showNav() {
    document.getElementsByClassName("navigation")[0].classList.toggle("active");
}


var ppbutton = document.getElementById("v-btn");
ppbutton.addEventListener("click", playPause);

myVideo = document.getElementById("myvid");
function playPause() {
    if (myVideo.paused) {
        myVideo.play();
        ppbutton.innerHTML = "Pause";
    }
    else {
        myVideo.pause();
        ppbutton.innerHTML = "Play";
    }
}
