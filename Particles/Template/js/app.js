define([
  "jquery",
  "requestAnimationFrame",
  "Stats",
  "mousetrap",
  "clock",
  "graphics",
  "utils",
  "glMatrix",
  "datGUI"
  ],
  function(
    ignore,
    ignore,
    ignore,
    ignore,
    ignore,
    Graphics,
    Utils,
    glm,
    GUI   // TODO: fix this
  ) {

  var App = {

    canvas: null,
    stats: null,
    clock: null,
    gui: null,
    guiParams: null,

    mouse: {
      x: 0,
      y: 0,
      dx: 0,
      dy: 0,
      buttons: new Array(4)
    },

    camCtrlMode: false,

    init: function() {
      this.canvas = $("#webgl-canvas")[0];
      Graphics.init(this.canvas);
      this.clock = new Clock();

      this.initMouse();

      this.update();

      webmeterColor = Utils.hexToRgb(webmeterColor);
      Graphics.shaders.particle.uniforms.uColor.value[0] = webmeterColor[0] / 255.0;
      Graphics.shaders.particle.uniforms.uColor.value[1] = webmeterColor[1] / 255.0;
      Graphics.shaders.particle.uniforms.uColor.value[2] = webmeterColor[2] / 255.0;

      var webglContainer = $("#webgl-container")[0];
      webglContainer.style.backgroundColor = webmeterBackground;

      Graphics.shaders.particle.uniforms.uColor.value[3] = webmeterAlpha;

      Graphics.shaders.particleCompute.uniforms.uKForce.value = webmeterGravity;
    },

    update: function() {
      requestAnimationFrame(App.update);
      App.mouseUpdate();
      Graphics.update(App.clock.getDelta());
    },

    initMouse: function() {
      var dom = this.canvas;

      dom.oncontextmenu = function() { return false; };

      (function(self) {
        $(dom).mousemove(function(event) {
          self.mouse.dx = event.pageX - self.mouse.x;
          self.mouse.dy = event.pageY - self.mouse.y;
          self.mouse.x = event.pageX;
          self.mouse.y = event.pageY;
          event.preventDefault();
        }).mousedown(function(event) {
          self.mouse.buttons[event.which] = true;
          event.preventDefault();
        }).mouseup(function(event) {
          self.mouse.buttons[event.which] = false;
          event.preventDefault();
        });
      })(this);
    },

    mouseUpdate: function() {
      // test moving gravity
      if (!this.camCtrlMode) {
        var u = this.mouse.x / Graphics.width;
        var v = 1.0 - (this.mouse.y / Graphics.height);
        var point = Graphics.camera.getPointOnTargetPlane(u,v);
        Graphics.shaders.particleCompute.uniforms.uInputPos.value = point;
      }
      
      this.mouse.dx = 0.0;
      this.mouse.dy = 0.0;
    }

  };

  return App;
});