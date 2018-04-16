require('../components/floor');
require('../components/player');

exports = module.exports = {
    init: function(){
        Crafty.background("black");
        
        Crafty.e('Floor')
            .attr({x: 0, y: 380, w: 1600, h: 10});
        
        Crafty.e("2D, DOM, Text, Mouse")
            .attr({ w: 300, h: 20, x: 100, y: 200 })
            .text("Exit")
            .css({ "text-align": "center"})
            .textFont({size: '20px', weight: 'bold'})
            .textColor("#FFFFFF")
            .bind('Click', function(MouseEvent){
              Crafty.enterScene("HomeScreen");
            });
            
        Crafty.e('Player')
            .attr({x: 20, y: 0, w: 30, h: 30});
    },
    events: {
        EnterFrame: function(){
            if (Crafty.frame() % 2 == 0)
                drop();
        }
    }
}

function drop()
{
    var randomx = Math.floor((Math.random() * 800) + 50);
    Crafty.e('Drop, 2D, Canvas, Color, Solid, Gravity, Collision')
        .attr({x: randomx, y: 0, w: 2, h: 15})
        .color('#FFFFFF')
        .gravity()
        .checkHits('Player')
        .bind("HitOn", function(){
            this.destroy();
        })
        .bind("EnterFrame", function() {
            if (this.y > 400)
              this.destroy();
        });
}