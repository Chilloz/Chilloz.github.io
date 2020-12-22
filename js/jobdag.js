arrAfbeeldingen = ["img/rock.png", "img/paper.png", "img/scissors.png"];
var spelerscore = 0;
var computerscore = 0;
function startWedstrijd() {
    var x = document.getElementById("match");
    var y = document.getElementById("intro");
    x.style.display = "block";
    y.style.display = "none";
}

function checkRondeSchaar(){
    document.getElementById("spelerhand").src = "img/scissors.png";
    var random = arrAfbeeldingen[Math.floor(Math.random()*3)];
    if (random == "img/rock.png"){
        document.getElementById("computerhand").src = "img/rock.png";
        computerscore++;
        document.getElementById("puntencomputer").innerHTML = computerscore;      
    } else if (random == "img/paper.png"){
        document.getElementById("computerhand").src = "img/paper.png";
        spelerscore++;
        document.getElementById("puntenspeler").innerHTML = spelerscore;
    } else if (random == "img/scissors.png"){
        document.getElementById("computerhand").src = "img/scissors.png";
    };
    if (spelerscore == 3){
            // location.replace("https://chilloz.github.io/main.html");
    };
}
function checkRondeSteen(){
    document.getElementById("spelerhand").src = "img/rock.png";
    var random = arrAfbeeldingen[Math.floor(Math.random()*3)];
    if (random == "img/rock.png"){
        document.getElementById("computerhand").src = "img/rock.png";
    } else if (random == "img/paper.png"){
        computerscore++;
        document.getElementById("puntencomputer").innerHTML = computerscore;
        document.getElementById("computerhand").src = "img/paper.png";
    } else if (random == "img/scissors.png"){
        spelerscore++;
        document.getElementById("puntenspeler").innerHTML = spelerscore;
        document.getElementById("computerhand").src = "img/scissors.png";
    };
    if (spelerscore == 3){
            // location.replace("https://chilloz.github.io/main.html");
    };
}
function checkRondePapier(){
    document.getElementById("spelerhand").src = "img/paper.png";
    var random = arrAfbeeldingen[Math.floor(Math.random()*3)];
    if (random == "img/rock.png"){
        spelerscore++;
        document.getElementById("puntenspeler").innerHTML = spelerscore;
        document.getElementById("computerhand").src = "img/rock.png";
    } else if (random == "img/paper.png"){
        document.getElementById("computerhand").src = "img/paper.png";
    } else if (random == "img/scissors.png"){
        computerscore++;
        document.getElementById("puntencomputer").innerHTML = computerscore;
        document.getElementById("computerhand").src = "img/scissors.png";
    };
    if (spelerscore == 3){
            // location.replace("https://chilloz.github.io/main.html");
    };
}


