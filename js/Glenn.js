var font;
var bewegingen = [];
function preload(){
    font = loadFont("js/Montserrat-ExtraBold.ttf");
}

function setup(){
    createCanvas(800,600);
    background(0);
    var punten = font.textToPoints('Glenn', 70, 340, 200);
    for (let i = 0; i < punten.length; i++) {
        var punt = punten[i];
        var beweging = new Beweging(punt.x, punt.y);
        bewegingen.push(beweging);
    }
}

function draw(){
    background(0);
    for (var i = 0; i < bewegingen.length; i++){
        var b = bewegingen[i];
        b.update();
        b.show();
        // if (b.done()){
        //     b.splice(i, 1);
        // }
    }
}

function Beweging(x,y){
    this.positie = createVector(x,y);
    this.target = createVector(2*x,2*y);
    this.snelheid = p5.Vector.random2D();
    this.versnelling = createVector();
    this.duurtijd = 500;

    this.update = function() {
        this.duurtijd -= 3;
        if (this.duurtijd <= 500 && this.duurtijd > 250){
            this.positie = createVector(x, y);
        }
        if ( this.duurtijd <= 250 && this.duurtijd >= 0) {
            this.positie.add(this.snelheid);
        } else if (this.duurtijd < 0) {
            this.duurtijd = 500;
        }
    }

    this.show = function(){
        stroke(255);
        strokeWeight(8);
        point(this.positie.x, this.positie.y);
    }
    this.done = function(){
        if(this.duurtijd <= 0){
            return true;
        } else {
            return false;
        }
    }
}