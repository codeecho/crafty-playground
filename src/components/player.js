Crafty.c('Player', {
    required: '2D, Canvas, Color, Solid, Twoway, Gravity, Collision',
    init: function(){
        this.color('white')
            .twoway(200)
            .gravity('Floor')
            .checkHits('Floor');
    },
    events: {
        "Moved": function(){
          if (this.x >= (800 / 2))
          {
            Crafty.viewport.x = (this.x - (800 / 2)) * -1;
          }
        } 
    }
})