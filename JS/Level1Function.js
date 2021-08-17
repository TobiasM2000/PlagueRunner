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
        alert("LOOOOOSER NOOOB ")
    }
},10)