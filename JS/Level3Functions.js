var characterLvl3 = document.getElementById("CharacterLvl3");
var zombieLvl3 = document.getElementById("ZombieLvl3")
function jumpLvl3(){
    if(CharacterLvl3.classList != "animateLvl3"){
        CharacterLvl3.classList.add("animateLvl3");
    }
    setTimeout(function(){
        CharacterLvl3.classList.remove("animateLvl3");
    }, 500);
}

var checkDeadLvl3 = setInterval(function(){
    var characterTop = parseInt(window.getComputedStyle(CharacterLvl3).getPropertyValue("top"));
    var zombieLeft = parseInt(window.getComputedStyle(ZombieLvl3).getPropertyValue("left"))
    if(zombieLeft < 30 && zombieLeft > 10 && characterTop >= 140){
        //isfailedLvl3 = true;
        //openNewPage('LevelFailed', 'Level3')
    }
},2)


function Lvl3VictoryTimer(){
    timer = setTimeout(alertVictoryLvl3, 29000);
}

function alertVictoryLvl3(){
    if(isfailedLvl3){
        return
    }
        openNewPage('LevelVictory', 'Level3')
}


var isfailedLvl3;
function initializeLevel3(){
    isfailedLvl3 = false;
}