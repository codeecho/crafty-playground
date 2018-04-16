exports = module.exports = function extendCrafty(){
    Crafty.sc = function(id, data){
        return Crafty.scene(id, function(){
            data.init && data.init();
            if(data.events){
                for(let key in data.events){
                    Crafty.bind(key, data.events[key]);
                }
            }
        }, function(){
            if(data.events){
                for(let key in data.events){
                    Crafty.unbind(key, data.events[key]);
                }
            }
            data.uninit && data.uninit();
        });
    }
}