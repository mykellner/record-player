let player = new Audio ()
let currentTime;
let ourElement = "";
let thisSound = "";
let playing = false;

function playPause(sound, ID) {

    currentTime = player.currentTime;

    player.src = sound;

    if(thisSound != sound){
        playing = false;
        ourElement.className = "fas fa-play fa-2x";
        thisSound = sound;
    } 

    ourElement = ID;

    player.currentTime = currentTime;


    if(playing == false){
        player.play();
        playing = true; 
        ourElement.className = "fas fa-pause fa-2x"; 
    
    
    } else if (playing == true) {
        player.pause();
        playing = false;
        ourElement.className = "fas fa-play fa-2x";

      
    } 
    
}

function stop(button){

    let parentElement = button.closest(".button-wrapper");
    let thisButton = parentElement.querySelector("i");
    console.log(thisButton);

    if(thisButton == ourElement){

        player.pause();
        player.currentTime = 0;
        playing = false;
        ourElement.className = "fas fa-play fa-2x";

    }
}

function search(input) {

    let musicDivs = document.querySelectorAll(".music-div");
    for(let div of musicDivs){
        if(div.textContent.toLowerCase().includes(input.toLowerCase())){
            div.style.display = "flex";
        } else {
            div.style.display = "none"
        }
    }
}