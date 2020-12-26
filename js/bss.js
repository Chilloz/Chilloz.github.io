arrAfbeeldingen = ["img/rock.png", "img/paper.png", "img/scissors.png"];
var spelerscore = 0;
var computerscore = 0;
function startWedstrijd() {
    var x = document.getElementById("match");
    var y = document.getElementById("intro");
    x.style.display = "block";
    y.style.display = "none";
}

var schaar={
    win: "img/paper.png",
    loss: "img/rock.png",
    img: "img/scissors.png"
};
var steen={
    win:"img/scissors.png",
    loss: "img/paper.png",
    img: "img/rock.png"
};
var papier={
    win:  "img/rock.png",
    loss: "img/scissors.png",
    img: "img/paper.png"
};
function checkRonde(choice){
    document.getElementById("spelerhand").src = choice.img;
    var random = arrAfbeeldingen[Math.floor(Math.random()*3)];
    if (random == choice.loss){
        document.getElementById("computerhand").src = choice.loss;
        computerscore++;
        document.getElementById("puntencomputer").innerHTML = computerscore;
    } else if (random == choice.win){
        document.getElementById("computerhand").src = choice.win;
        spelerscore++;
        document.getElementById("puntenspeler").innerHTML = spelerscore;
    } else if (random == choice.img){
        document.getElementById("computerhand").src = choice.img;
    };
    if (spelerscore == 3){
            // location.replace("https://chilloz.github.io/main.html%22);
    };
}




