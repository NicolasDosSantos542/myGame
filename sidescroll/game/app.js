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
    console.log("preload this = ", this)
    this.load.image('sky', 'game/assets/sky.png');
    this.load.image('ground', 'game/assets/platform.png');
    this.load.image('star', 'game/assets/star.png');
    this.load.image('bomb', 'game/assets/bomb.png');
    this.load.image('fireball', 'game/assets/fireball.png')
    this.load.spritesheet('salamecheMove', 
        'game/assets/salameche/walk.png',
        { frameWidth: 50, frameHeight: 50, startFrame:0, endFrame:2}
    );
    this.load.spritesheet('salamecheHit', 
        'game/assets/salameche/fire_hit.png',
        { frameWidth: 50, frameHeight: 50, startFrame:0, endFrame : 10}
    );

}
var platforms;
var player;
var fireballs;
var cursors;
var stars;
var score = 0;
var scoreText;
var bomb;
let keyI;
let keyJ;
let keyK;
let keyL;


function create ()
{
    this.add.image(400, 300, 'sky');

    platforms = this.physics.add.staticGroup();
    platforms.create(400, 568, 'ground').setScale(3).refreshBody();
    platforms.create(600, 400, 'ground');
    platforms.create(50, 250, 'ground');
    platforms.create(750, 220, 'ground');


    player = this.physics.add.sprite(100, 450, 'salamecheMove');
    player.setBounce(0.2);
    player.setCollideWorldBounds(true);

    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('salamecheMove', { start: 0, end: 6}),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'turn',
        frames: [ { key: 'salamecheMove', frame: 0 } ],
    });

    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('salamecheMove', { start: 0, end : 6}),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key:'fireHit',
        frames : this.anims.generateFrameNumbers('salamecheHit', {start : 9, end : 10}),
        frameRate : 10,
        repeat:-1
    });

    cursors = this.input.keyboard.createCursorKeys();
    keyI = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.I);
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

    fireballs = this.physics.add.group();
    console.log("fireballs > ", fireballs)
    // this.physics.add.collider(bomb, fireballs, hitFireball(bomb), null, this)

    // fireballs = game.add.group();
    // fireballs.enableBody = true;
    // fireballs.physicsBodyType = Phaser.Physics.ARCADE;
 
    // fireballs.createMultiple(50, 'fireball');
    // fireballs.setAll('checkWorldBounds', true);
    // fireballs.setAll('outOfBoundsKill', true);
    



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

    if(Phaser.Input.Keyboard.JustDown(keyI)) {

        console.log('I key pressed')
        player.setVelocityX(0);

        player.anims.play('fireHit', true)

     } else if(keyJ.isDown) {
        console.log('J key pressed')
        player.anims.play('fireHit', true)
        fireball();

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
    var fireball=fireballs.create(player.x,player.y, 'fireball');

    if(player.flipX){
        fireball.setVelocityX(1600)
    }else{
        fireball.setVelocityX(-1600)
    }
    // fireball.setBounce(1);
    // fireball.setCollideWorldBounds(true);

    console.log("fireball tirée", player);
}

function hitFireball(bomb){
    // bomb.destroy();
    // score+=50;


}

function restartGame(){
    console.log("restart game", game)
    game.registry.destroy(); // destroy registry
    game.events.off(); // disable all active events
    game.scene.restart(); // restart current scene

}