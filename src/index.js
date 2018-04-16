const Crafty = require('craftyjs');

const {extendCrafty} = require('./utils')
extendCrafty();

const homeScreen = require('./scenes/home');
const level1 = require('./scenes/level1');

Crafty.init(800,400);

Crafty.sc("HomeScreen", homeScreen);
Crafty.sc("Level1", level1);

Crafty.enterScene("HomeScreen");

