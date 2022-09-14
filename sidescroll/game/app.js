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



    cursors = this.input.keyboard.createCursorKeys();
    keyAttack = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.I);
    keyJ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.J);
    keyK = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.K);
    keyL = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.L);
    
    this.physics.add.collider(player, platforms);

    stars = this.physics.add.group({
        key: 'star',
        repeat: 11,
        setXY: { x: 12, y: 0, stepX: 70 }
    });
    
    stars.children.iterate(function (child) {
    
        child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
    
    });
    this.physics.add.collider(stars, platforms);
    this.physics.add.overlap(player, stars, collectStar, null, this);

    scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });

    bombs = this.physics.add.group();
    this.physics.add.collider(bombs, platforms);
    this.physics.add.collider(player, bombs, hitBomb, null, this);

    fireballs = this.physics.add.group({
        lifespan:0.1,
        allowGravity: false
    });
    this.physics.add.collider(fireballs, [platforms], fireballCollide, null, this);

    console.log("fireballs > ", fireballs)



}


function update () {



    if (cursors.left.isDown)
    {
        player.flipX=false;
        
        player.setVelocityX(-160);
    
        player.anims.play('left', true);
    }
    else if (cursors.right.isDown)
    {
        player.flipX=true;
        player.setVelocityX(160);
    
        player.anims.play('right', true);
    }
    else
    {
        player.setVelocityX(0);
    
        player.anims.play('turn');
    }
    
    if (cursors.up.isDown && player.body.touching.down)
    {
        player.setVelocityY(-340);
    }

    if(Phaser.Input.Keyboard.JustDown(keyAttack)) {

        console.log('I key pressed')
        player.setVelocityX(0);

        player.anims.play('fireHit', true)
        fireball();

     } else if(keyJ.isDown) {
        console.log('J key pressed')

     } else if(keyK.isDown) {
        console.log('K key pressed')        
        player.setVelocityX(-160);

        player.anims.play('left', true);
     } else if(keyL.isDown) {
        console.log('L key pressed')
     }

}

function collectStar (player, star)
{
    star.disableBody(true, true);

    score += 10;
    scoreText.setText('Score: ' + score);

    if (stars.countActive(true) === 0)
    {
        stars.children.iterate(function (child) {

            child.enableBody(true, child.x, 0, true, true);

        });

        var x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);

        var bomb = bombs.create(x, 16, 'bomb');
        bomb.setBounce(1);
        bomb.setCollideWorldBounds(true);
        bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);

    }
}
function hitBomb (player, bomb)
{
    this.physics.pause();

    player.setTint(0xff0000);

    player.anims.play('turn');

    this.add.text(50, 250, 'Game Over', { fontSize: '128px', fill: '#000' });

    const replayButton =this.add.text(100, 350, 'try again', {fontSize: '32px', fill: "#000"})
                                .setInteractive()
                                .on("pointerdown",()=>{
                                    console.log("toto");
                                    restartGame()
                                })

    gameOver = true;

}

function fireball(){
    console.log(fireballs.countActive(true))
    // if(fireballs.countActive(true)){
        var fireball=fireballs.create(player.x,player.y, 'fireball');
        console.log("touotou", fireball.y)


        if(player.flipX){
            fireball.setVelocityY(0)
            fireball.setVelocityX(400)
            fireball.flipX=true;

        }else{
            fireball.setVelocityY(0)
            fireball.setVelocityX(-400)
        }
        // fireball.setBounce(1);
        // fireball.setCollideWorldBounds(true);
        
        console.log("fireball : ", fireball)
        console.log("fireball tirée", player);

    // }

}

function receiveAttack(bomb){
    // bomb.destroy();
    // score+=50;


}

function restartGame(){
    console.log("restart game", game)
    game.registry.destroy(); // destroy registry
    game.events.off(); // disable all active events
    game.scene.restart(); // restart current scene

}
function fireballCollide(fireball, platform){
    // fireball.setActive(false).setVisible(false);
    fireball.destroy();

}