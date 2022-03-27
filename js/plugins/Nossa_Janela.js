var LZO = LZO || {};

 function Nossa_Janelinha() {
    this.initialize.apply(this, arguments);
}

Nossa_Janelinha.prototype = Object.create(Window_Base.prototype);
Nossa_Janelinha.prototype.constructor = Nossa_Janelinha;

Nossa_Janelinha.prototype.initialize = function(x, y) {
    var width = this.windowWidth();
    var height = this.windowHeight();
    Window_Base.prototype.initialize.call(this, x, y, width, height);
    this.refresh();
};

Nossa_Janelinha.prototype.windowWidth = function() {
    return 240;
};

Nossa_Janelinha.prototype.windowHeight = function() {
    return 240;
};

Nossa_Janelinha.prototype.refresh = function() {
    this.contents.clear();
};

LZO.MapStart = Scene_Map.prototype.start; 
Scene_Map.prototype.start = function() {
   LZO.MapStart.call(this);
   this._goldWindow = new Window_Gold(0, 0);
    this._goldWindow.y = Graphics.boxHeight - this._goldWindow.height;
    this.addWindow(this._goldWindow);
};