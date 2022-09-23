const worldWidth = 6374;

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug:true,
            width: worldWidth,
            height: 600,
        }
    },
    scene: [LevelOne]
};

var game = new Phaser.Game(config);
