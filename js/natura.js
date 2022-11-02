let universal = () => {
    console.log(document.getElementById("light").src);
    let suratismisamarti = document.getElementById("light").src;
    console.log(suratismisamarti)
    if(suratismisamarti == "file:///Users/jutadzigava/Desktop/%20/AODI/HTML%20:%20CSS/Homework%2010.1/img/off.png"){
        document.getElementById("light").src = "img/on.png";
        document.getElementById("universal").innerHTML = "ჩაქრობა";
        document.getElementById("universal").style.backgroundColor = "#880000";
    }
    else{
        document.getElementById("light").src = "img/off.png";
        document.getElementById("universal").innerHTML = "ანთება";
        document.getElementById("universal").style.backgroundColor = "#008840";
    }
}
