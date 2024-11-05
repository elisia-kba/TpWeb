
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
  this.posInit ={ x: 0, y: 0 };
  this.posFinal = { x: 0, y: 0 };
  this.pressed = false;
  this.interactor = interactor;

  this.mousedown = function (evt){
    console.log("down",evt)
    var pos = getMousePosition(canvas,evt)
    this.posInit.x = pos.x;
    this.posInit.y = pos.y;
    this.pressed = true;
    if (this.interactor && typeof this.interactor.onInteractionStart === 'function') {
      this.interactor.onInteractionStart(this);
    }
  }.bind(this)
  
  this.mouseup = function (evt){
    console.log("up",evt)
    var pos = getMousePosition(canvas,evt)
    this.posFinal.x = pos.x;
    this.posFinal.y = pos.y;
    this.pressed = false;
    if (this.interactor && typeof this.interactor.onInteractionEnd === 'function') {
      this.interactor.onInteractionEnd(this);
    }
  }.bind(this)
  
  this.mousemove = function(evt){
    if(this.pressed){
      var pos = getMousePosition(canvas,evt)
      this.posFinal.x = pos.x;
      this.posFinal.y = pos.y;
      this.pressed = true;
      if (this.interactor && typeof this.interactor.onInteractionUpdate === 'function') {
        this.interactor.onInteractionUpdate(this);
      }
    }
  }.bind(this)

canvas.addEventListener('mousedown', this.mousedown, false);
canvas.addEventListener('mousemove', this.mousemove, false);
canvas.addEventListener('mouseup', this.mouseup, false); 
};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};



