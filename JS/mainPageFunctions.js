function openNewPage(showpage, hidepage){
    document.getElementById(showpage).style.display='block';
    document.getElementById(hidepage).style.display='none';
}

var isLevel1Unlocked = false;
var isLevel2Unlocked = false;
var isLevel3Unlocked = false;
var isEndStoryUnlocked = false;

function IsTheLevelUnlocked(showpage, hidepage, isLevelUnlocked, level){

    console.log(isLevelUnlocked);
    if(isLevelUnlocked == false)
    {
        return;
    }

    console.log("Weiter")

    switch(level){
        case 1:
            Lvl1VictoryTimer();
            initializeLevel1();
            Level1SoundOn();
            MenuSoundOff();
            break;
        case 2:
            Lvl2VictoryTimer();
            initializeLevel2();
            Level2SoundOn();
            MenuSoundOff();
            break;
        case 3:
            Lvl3VictoryTimer();
            initializeLevel3();
            Level3SoundOn();
            MenuSoundOff();
            break;
        case 4:
            MenuSoundOff();
            EndStorySoundOn();
            break;
    }

    openNewPage(showpage,hidepage);
}

//Mainpage animation

function copyImageToCanvas(){
    var image = document.getElementById("ufo");
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    var frame = 0;
    frame += 0,2;

    var playercenter = image.clientWidth;

    ctx.drawImage(image,100,100);
}

setTimeout(() => {
   copyImageToCanvas(); 
}, 300);