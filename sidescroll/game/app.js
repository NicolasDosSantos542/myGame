const worldWidth = 6000;

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            // debug:true,
            width: worldWidth,
            height: 600,
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload ()
{
   
    imageLoader(this);
}


function create (){
    console.log("game",game)
    this.cameras.main.setBounds(0, 0, worldWidth, 600);
    
    createLevelOne(this);
    
    createPlayer(this)
    this.cameras.main.startFollow(player);

    animPlayerMoves(this)
    animEnnemyMoves(this)

    defineCommands(this)
   
    addBalls(this)

    addBombs(this)

    addProjectiles(this)
    
    addEnnemie(this, 'pikachu')
    
    addEnnemie(this, 'aspicot')
    
    
    
    addColliders(this)  //doit être impérativement APRÈS les monstres, personnages et plateformes 
}


function update () {
    this.input.on('pointerdown', () =>console.log({ "x" : game.input.pointers[0].worldX, "y" : game.input.pointers[0].worldY}));
    // console.log({ "x" : game.input.mousePointer.x, "y" : game.input.mousePointer.y})
    // gogoPikachu();
    playerCommands(this);


}





