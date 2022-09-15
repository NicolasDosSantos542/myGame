var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug:true,
            width: 8000,
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
    this.cameras.main.setBounds(0, 0, 8000, 600);
    
    createLevelOne(this);
    
    createPlayer(this)
    this.cameras.main.startFollow(player);

    animPlayerMoves(this)
    animPikachuMoves(this)

    defineCommands(this)
   
    addStars(this)

    addBombs(this)

    addProjectiles(this)
    
    addEnnemie(this, 'pikachu')
    
    
    
    
    addColliders(this)  //doit être impérativement APRÈS les monstres, personnages et plateformes 
}


function update () {

    // console.log({ "x" : game.input.mousePointer.x, "y" : game.input.mousePointer.y})
    // gogoPikachu();
    playerCommands(this);


}





