var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug:true
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


function create ()
{
    createLevelOne(this);

    createPlayer(this)

    animPlayerMoves(this)

    defineCommands(this)
   
    addStars(this)

    addBombs(this)

    addProjectiles(this)

    addColliders(this)    



}


function update () {

    playerCommands(this);


}





