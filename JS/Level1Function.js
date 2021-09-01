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
    if(zombieLeft < 20 && zombieLeft > 0 && characterTop >= 130){
        Zombie.style.animation = "none";
        Zombie.style.display = "none";
        openNewPage('LevelFailed', 'Level1')
    }
},10)


function Lvl1Victory(){
    timer = setTimeout(alertVictory, 29000);
}

function alertVictory(){
        openNewPage('LevelVictory', 'Level1')
}