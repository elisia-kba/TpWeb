    Forme.prototype.paint = function (ctx){
        ctx.strokeStyle = this.couleur;
        ctx.lineWidth = this.epaisseur;
    }
    
    Rectangle.prototype.paint = function(ctx) {
        Forme.prototype.paint.call(this,ctx);
        ctx.strokeRect(this.initX,this.initY,this.hauteur,this.largeur);
        
    };

    Line.prototype.paint = function(ctx) {
        Forme.prototype.paint.call(this,ctx);
        ctx.beginPath();
        ctx.moveTo(this.initX, this.initY);
        ctx.lineTo(this.finalX, this.finalY);
        ctx.stroke();
    };

    Drawing.prototype.paint = function(ctx) {
        ctx.fillStyle = '#F0F0F0';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        this.formes.forEach(element => element.paint(ctx));
    };

