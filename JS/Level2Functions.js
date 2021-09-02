var characterLvl2 = document.getElementById("CharacterLvl2");
var zombieLvl2 = document.getElementById("ZombieLvl2")
function jumpLvl2(){
    console.log("jump 2");
    if(CharacterLvl2.classList != "animateLvl2"){
        CharacterLvl2.classList.add("animateLvl2");
    }
    setTimeout(function(){
        CharacterLvl2.classList.remove("animateLvl2");
    }, 500);
}

var checkDeadLvl2 = setInterval(function(){
    console.log("check Hitbox 2");
    var characterTop = parseInt(window.getComputedStyle(CharacterLvl2).getPropertyValue("top"));
    var zombieLeft = parseInt(window.getComputedStyle(ZombieLvl2).getPropertyValue("left"))
    if(zombieLeft < 30 && zombieLeft > 10 && characterTop >= 140){
        isfailedLvl2 = true;
        openNewPage('LevelFailed', 'Level2')
    }
},2)


function Lvl2VictoryTimer(){
    timer = setTimeout(alertVictoryLvl2, 29000);
}

function alertVictoryLvl2(){
    if(isfailedLvl2){
        return
    }
        openNewPage('LevelVictory', 'Level2')
}


var isfailedLvl2;
function initializeLevel2(){
    isfailedLvl2 = false;
}