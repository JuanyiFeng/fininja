/*
Craterconf deals

1) THE COMPLETE MOBILE GAME DEVELOPMENT COURSE - PLATINUM EDITION (15 GAMES)
30 hours of JavaScript game development with Phaser and Cordova.
https://academy.zenva.com/product/the-complete-mobile-game-development-course-platinum-edition/?zva_src=craterconf2016

Get $10 off using the coupon code: craterconf2016-plati
(must use before Monday)

2) PRE-ORDER ADVANCED GAME DEVELOPMENT WITH PHASER
Includes multi-player games, Firebase integration, path finding and more cool topics
https://academy.zenva.com/product/advanced-game-development-with-phaser/?zva_src=craterconf2016-adv

Get $5 off using the coupon code: craterconf2016-adv
(must use before Monday)

3) Other active promotions running until Sunday:
https://academy.zenva.com/product-category/english/?zva_sale_filter=1&zva_src=craterconf2016-adv

*/

//this game will have only 1 state
var GameState = {

  //initiate game settings
  init: function() {
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.pageAlignVertically = true;
    this.scale.pageAlighHorizontally = true;

    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    this.game.physics.arcade.gravity.y = 1000;
  },

  //load the game assets before the game starts
  preload: function() {
    this.load.image('ground', 'assets/images/ground.png');
    this.load.spritesheet('player', 'assets/images/player_spritesheet.png', 28, 30, 5, 1, 1);
  },
  //executed after everything is loaded
  create: function() {
    this.ground = this.add.sprite(100, 200, 'ground');
    this.game.physics.arcade.enable(this.ground);
    this.ground.body.allowGravity = false;

    this.player = this.add.sprite(100, 0, 'player', 3);
    this.player.animations.add('walking', [0, 1, 2, 1], 6, true);
    this.player.play('walking');

    this.platforms = this.add.group();
    this.platforms.enableBodu = true;
    this.platforms.create(50, 150, 'ground');
    this.platforms.create(150, 150, 'ground');
    this.platforms.create(50, 50, 'ground');
  },
  update: function() {
  },

};

//initiate the Phaser framework
var game = new Phaser.Game(360, 592, Phaser.AUTO);

game.state.add('GameState', GameState);
game.state.start('GameState');
