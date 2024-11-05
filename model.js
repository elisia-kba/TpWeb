function Drawing () {
    this.formes = [];

}


function Forme (initX,initY, epaisseur,couleur){
    this.initX = initX;
    this.initY = initY;
    this.couleur= couleur;
    this.epaisseur = epaisseur;
}

function Rectangle (initX,initY,hauteur,largeur,epaisseur,couleur ){
    Forme.call(this,initX,initY,epaisseur,couleur);
    this.hauteur = hauteur;
    this.largeur = largeur;

};
Rectangle.prototype = new Forme();

function Line (initX,initY,finalX,finalY,epaisseur,couleur ){
    Forme.call(this,initX,initY,epaisseur,couleur);
    this.finalX = finalX;
    this.finalY = finalY;

};
Line.prototype = new Forme();

