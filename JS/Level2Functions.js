var characterLvl2 = document.getElementById("CharacterLvl2");
var zombieLvl2 = document.getElementById("ZombieLvl2")
function jumpLvl2(){
    if(CharacterLvl2.classList != "animateLvl2"){
        CharacterLvl2.classList.add("animateLvl2");
    }
    setTimeout(function(){
        CharacterLvl2.classList.remove("animateLvl2");
    }, 500);
}

var checkDeadLvl2 = setInterval(function(){
    var characterTop = parseInt(window.getComputedStyle(CharacterLvl2).getPropertyValue("top"));
    var zombieLeft = parseInt(window.getComputedStyle(ZombieLvl2).getPropertyValue("left"))
    if(zombieLeft < 30 && zombieLeft > 10 && characterTop >= 140){
        console.log("hier kommt sound");
        PlayLoseSound();
        isfailedLvl2 = true;
        openNewPage('LevelFailed', 'Level2')
    }
},2)


function Lvl2VictoryTimer(){
    timer = setTimeout(alertVictoryLvl2, 28300);
}

function alertVictoryLvl2(){
    if(isfailedLvl2){
        return
    }
        PlayVictorySound();
        isLevel3Unlocked = true;
        openNewPage('LevelVictory', 'Level2')
}


var isfailedLvl2;
function initializeLevel2(){
    isfailedLvl2 = false;
}

function PlayLoseSound(){ 
    document.getElementById('LoseSound').play();
}

function PlayVictorySound(){ 
    document.getElementById('VictorySound').play();
}