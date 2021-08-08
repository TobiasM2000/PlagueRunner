function openNewPage(showpage, hidepage){
    document.getElementById(showpage).style.display='block';
    document.getElementById(hidepage).style.display='none';
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