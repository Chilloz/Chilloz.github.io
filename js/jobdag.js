arrAfbeeldingen = ["img/rock.png", "img/paper.png", "img/scissors.png"];
var spelerscore = 0;
var computerscore = 0;
// function speelLach(){
//     document.getElementById("audio").innerHTML = "<audio autoplay><source src='video/puppetlaugh.ogg' type='audio/ogg'><source src='video/puppetlaugh.mp3' type='audio/mpeg'></audio>"
// }
function startWedstrijd() {
    var x = document.getElementById("match");
    var y = document.getElementById("intro");
    x.style.display = "block";
    y.style.display = "none";
    document.getElementById("audio").innerHTML += "<audio autoplay><source src='video/Let The Game Begin.ogg' type='audio/ogg'><source src='video/Let The Game Begin.mp3' type='audio/mpeg'></audio>"
}

function checkRondeSchaar(){

    document.getElementById("spelerhand").src = "img/scissors.png";
    var keuzecomputer = "steen";
    var random = arrAfbeeldingen[Math.floor(Math.random()*4)];
    if (random == "img/rock.png"){
        keuzecomputer = "steen";
        document.getElementById("computerhand").src = "img/rock.png";
    } else if (random == "img/paper.png"){
        keuzecomputer = "papier";
        document.getElementById("computerhand").src = "img/paper.png";
    } else if (random == "img/scissors.png"){
        keuzecomputer = "schaar";
        document.getElementById("computerhand").src = "img/scissors.png";
    };
    if (keuzecomputer == "steen"){
        computerscore++;
        document.getElementById("puntencomputer").innerHTML = computerscore;
    } else if (keuzecomputer == "papier"){
        spelerscore++;
        document.getElementById("puntenspeler").innerHTML = spelerscore;
        if (spelerscore == 3){
            location.replace("http://127.0.0.1:5500/frontendscripting/Website%20Jobdag/main.html");
    };
    }
}
function checkRondeSteen(){

    document.getElementById("spelerhand").src = "img/rock.png";
    var keuzecomputer = "steen";
    var random = arrAfbeeldingen[Math.floor(Math.random()*4)];
    if (random == "img/rock.png"){
        keuzecomputer = "steen";
        document.getElementById("computerhand").src = "img/rock.png";
    } else if (random == "img/paper.png"){
        keuzecomputer = "papier";
        document.getElementById("computerhand").src = "img/paper.png";
    } else if (random == "img/scissors.png"){
        keuzecomputer = "schaar";
        document.getElementById("computerhand").src = "img/scissors.png";
    };
    if (keuzecomputer == "papier"){
        computerscore++;
        document.getElementById("puntencomputer").innerHTML = computerscore;
    } else if (keuzecomputer == "schaar"){
        spelerscore++;
        document.getElementById("puntenspeler").innerHTML = spelerscore;
        if (spelerscore == 3){
            location.replace("http://127.0.0.1:5500/frontendscripting/Website%20Jobdag/main.html");
    };
    }
}
function checkRondePapier(){

    document.getElementById("spelerhand").src = "img/paper.png";
    var keuzecomputer = "steen";
    var random = arrAfbeeldingen[Math.floor(Math.random()*4)];
    if (random == "img/rock.png"){
        keuzecomputer = "steen";
        document.getElementById("computerhand").src = "img/rock.png";
    } else if (random == "img/paper.png"){
        keuzecomputer = "papier";
        document.getElementById("computerhand").src = "img/paper.png";
    } else if (random == "img/scissors.png"){
        keuzecomputer = "schaar";
        document.getElementById("computerhand").src = "img/scissors.png";
    };
    if (keuzecomputer == "schaar"){
        computerscore++;
        document.getElementById("puntencomputer").innerHTML = computerscore;
    } else if (keuzecomputer == "steen"){
        spelerscore++;
        document.getElementById("puntenspeler").innerHTML = spelerscore;
        if (spelerscore == 3){
            location.replace("http://127.0.0.1:5500/frontendscripting/Website%20Jobdag/main.html");
    };
    }
}


