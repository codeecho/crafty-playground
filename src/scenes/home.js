exports = module.exports = {
    init: function (){
      Crafty.background("#000");
      
      Crafty.e("2D, DOM, Text, Mouse")
          .attr({ w: 300, h: 20, x: 100, y: 200 })
          .text("Click to start")
          .css({ "text-align": "center"})
          .textFont({size: '20px', weight: 'bold'})
          .textColor("#FFFFFF")
          .bind('Click', function(MouseEvent){
            Crafty.enterScene("Level1");
          });
    
      Crafty.e("2D, DOM, Text")
      .attr({ w:400, h:40, x: 50, y: 50})
      .text("Rein")
      .textFont({size:'130px', weight:'bold'})
      .css({"text-align": "center"})
      .textColor("#FFFFFF");
  }
}