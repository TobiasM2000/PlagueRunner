function openNewPage(showpage, hidepage){
    document.getElementById(showpage).style.display='block';
    document.getElementById(hidepage).style.display='none';
}

var character = document.getElementById("Character");
var zombie = document.getElementById("Zombie")
function jump(){
    if(Character.classList != "animate"){
        Character.classList.add("animate");
    }
    setTimeout(function(){
        Character.classList.remove("animate");
    }, 500);
}

var checkDead = setInterval(function(){
    var characterTop = parseInt(window.getComputedStyle(Character).getPropertyValue("top"));
    var zombieLeft = parseInt(window.getComputedStyle(Zombie).getPropertyValue("left"))
    if(zombieLeft < 30 && zombieLeft > 10 && characterTop >= 140){
        console.log("hier kommt sound");
        playLoseSound();
        isfailed = true;
        openNewPage('LevelFailed', 'Level1')
    }
},2)


function Lvl1VictoryTimer(){
    timer = setTimeout(alertVictory, 29000);
}

function alertVictory(){
    if(isfailed){
        return
    }
        openNewPage('LevelVictory', 'Level1')
}


var isfailed = false;
function initializeLevel1(){
    isfailed = false;
}

function playLoseSound(){ 
    document.getElementById('LoseSound').play();
    document.getElementById('LoseSound').volume = 10;
    }

/*
const red = document.querySelector('#Zombie');

function changeAnimationTime() {
  var animationDuration = Math.random() + 1.5;
  red.style.setProperty('--animation-time', animationDuration +'s');
}

setInterval(changeAnimationTime, 1000);
*/