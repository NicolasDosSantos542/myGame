//contient toutes les fonctions spécifique au joueur et son personnage:
// attack, receiveAttack, createPlayer (name) etc

function createPlayer(game){

    player = game.physics.add.sprite(100, 450, 'salamecheMove');
    player.setBounce(0.2);
    player.setCollideWorldBounds(true);
    player.flipX = -1
}

function playerCommands(game){
    if (cursors.left.isDown)
    {
        player.flipX=false;
        
        player.setVelocityX(-1600);
    
        player.anims.play('left', true);
    }
    else if (cursors.right.isDown)
    {
        player.flipX=true;
        player.setVelocityX(1600);
    
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
function hitEnnemy (player, bomb)
{
    this.physics.pause();

    player.setTint(0xff0000);

    player.anims.play('turn');

    this.add.text(50, 250, 'Game Over', { fontSize: '128px', fill: '#000' });

    const replayButton =this.add.text(100, 350, 'try again', {fontSize: '32px', fill: "#000"})
                                .setInteractive()
                                .on("pointerdown",()=>{
                                    restartGame()
                                })

    gameOver = true;

}

// TODO: creer une fonction attack() qui prend en parametre un objet de type enum sous cette forme : enum={fireball: "fireball", melee : "melee"}
// et faire le switchcase en fonction de l'objet plutôt que d'une string
function fireball(){
    console.log(fireballs.countActive(true))
    // if(fireballs.countActive(true)){
        var fireball=fireballs.create(player.x,player.y, 'fireball');


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
        

    // }

}
