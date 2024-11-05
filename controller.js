
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = 0;

	document.getElementById('butRect').onclick = (_) => this.currEditingMode = editingMode.rect;
	document.getElementById('butLine').onclick = (_) => this.currEditingMode = editingMode.line;
	document.getElementById('spinnerWidth').onchange = (e) => this.currLineWidth = e.target.value;
	document.getElementById('colour').onchange = (e)	=> this.currColour = e.target.value;

	new DnD(canvas, this);
	this.onInteractionStart= function (dnd){
		console.log("Début de l'interaction");
		if(this.currEditingMode === editingMode.rect){
			this.currentShape = new Rectangle();
		}
		else {
			 this.currentShape = new Line();
		}
	}.bind(this)

	this.onInteractionUpdate = function (dnd){
		console.log("Update de l'interaction");
		if(this.currEditingMode == editingMode.rect){
			this.currentShape = new Rectangle(dnd.posInit.x,dnd.posInit.y,dnd.posFinal.x-dnd.posInit.x,
				dnd.posFinal.y - dnd.posInit.y, this.currLineWidth,this.currColour);
		}
		else {
			this.currentShape = new Line(dnd.posInit.x,dnd.posInit.y,dnd.posFinal.x,
				dnd.posFinal.y, this.currLineWidth,this.currColour);
		}
		drawing.paint(ctx);
		this.currentShape.paint(ctx);
	}.bind(this)

	this.onInteractionEnd = function (dnd){
		drawing.paint(ctx);
		drawing.formes.push(this.currentShape)
		this.currentShape.paint(ctx);
		console.log("Fin de l'interaction");
	}.bind(this)
	



};


