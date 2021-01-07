var vuurwerk = [];
var zwaartekracht;
function setup(){
    createCanvas(800, 600);
    colorMode(HSB);
    zwaartekracht = createVector(0, 0.2);
    stroke(255);
    strokeWeight(4);
    background(0);
}

function draw(){
    background(0, 0, 0, 0.15);
    if (Math.random()*1 < 0.05){ // enkel in array pushen indien dit waar is (5% kans)
    vuurwerk.push(new Vuurwerk());
    }
    for (var i= vuurwerk.length -1; i >= 0; i--){
        vuurwerk[i].update();
        vuurwerk[i].show();
        if (vuurwerk[i].done()){ // zelfde doen voor het vuurwerk (uit array halen voor performance nadat animatie voltooid is)
            vuurwerk.splice(i, 1);
        }
    }
}


// Object Punt met bepaalde positie, snelheid en versnelling

function Punt(x, y, kleur, explosie){
    this.positie = createVector(x, y);
    this.explosie = explosie;
    this.duurtijd = 255;
    this.kleur = kleur;
    if (this.explosie){
        this.snelheid = createVector(0, random(-12, -8));
    } else {
        this.snelheid = p5.Vector.random2D();
        this.snelheid.mult(random(1, 6)) // random richting command van p5
    }
    this.versnelling = createVector(0, 0);

    this.addKracht = function(kracht){ //zwaartekracht toevoegen
        this.versnelling.add(kracht);
    }


    this.update = function() {
        if(!this.explosie){
            this.snelheid.mult(0.95); // kleine vertraging toevoegen als de explosie gebeurd
            this.duurtijd -= random(-1, 10); 
        }
        this.snelheid.add(this.versnelling);
        this.positie.add(this.snelheid);
        this.versnelling.mult(0); // versnelling terug op nul zetten
    }

    this.done = function(){
        if(this.duurtijd < 0){
            return true;
        } else {
            return false;
        }
    }
    
    this.show = function(){
        if (!this.explosie){
            strokeWeight(2);
            stroke(kleur, 255, 255, this.duurtijd);
        } else {
            strokeWeight(4)
            stroke(kleur, 255, 255);
        }
        point(this.positie.x, this.positie.y)
    }
}

function Vuurwerk(){

    this.kleur = random(255);
    this.vuurwerk = new Punt(random(width), height, this.kleur, true);
    this.ontploft = false;
    this.nieuwePunten = [];

    this.done = function(){
        if (this.ontploft && this.nieuwePunten.length == 0){
            return true;
        } else {
            return false;
        }
    }

    this.update = function(){
        if (!this.ontploft){
            this.vuurwerk.addKracht(zwaartekracht);
            this.vuurwerk.update();
            if (this.vuurwerk.snelheid.y >= 0){ // hoogste punt is de snelheid 0
                this.ontploft = true; // ontploft wordt true dus roepen we de functie op die de ontploffing doet
                this.ontplof();
            }
        }
        for (var i = this.nieuwePunten.length - 1; i >= 0; i--){
            this.nieuwePunten[i].addKracht(zwaartekracht);
            this.nieuwePunten[i].update();
            if (this.nieuwePunten[i].done()){ // als nieuwe punt gedaan is met animatie, willen we deze terug verwijderen uit de array voor de performance. Dus we roepen de done() functie hier op om dit te controleren
                this.nieuwePunten.splice(i, 1); // verwijderen van het punt uit de array
            }
        }
    }
    this.ontplof = function(){
        for (var i = 0; i< 100; i++){
            var nieuwPunt = new Punt(this.vuurwerk.positie.x, this.vuurwerk.positie.y, this.kleur, false); // 100 nieuwe punten bij ontplof
            this.nieuwePunten.push(nieuwPunt); // pushen deze in de nieuwe punten array

        }
    }
    this.show = function(){
        if (!this.ontploft){
            this.vuurwerk.show();
        }
        for (var i = 0; i< this.nieuwePunten.length; i++){
            this.nieuwePunten[i].show();
        }
    }
}