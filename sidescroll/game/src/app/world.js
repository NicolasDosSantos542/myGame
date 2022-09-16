
function createLevelOne(game){
    sky = game.add.image(4000, 300, 'sky');

    platforms = game.physics.add.staticGroup();
    platforms.create(400, 568, 'ground').setScale(40, 2).refreshBody();
    platforms.create(600, 400, 'ground');
    platforms.create(50, 250, 'ground');
    platforms.create(750, 220, 'ground');
    platforms.create(1200, 400, 'ground');
    platforms.create(1750, 270, 'ground');
    platforms.create(2330, 400, 'ground');
    platforms.create(2330, 120, 'ground');
    platforms.create(3000, 270, 'ground');
    platforms.create(3540, 220, 'ground');
    platforms.create(4000, 300, 'ground');
    platforms.create(4500, 400, 'ground');
    

    scoreText = game.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });


}

function addBalls(game){
    balls = game.physics.add.group({
        key: 'pokeball',
        repeat: 20,
        setXY: { x: 12, y: 0, stepX: 300 }
    });
    
    balls.children.iterate(function (child) {
    
        child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
    
    });
    game.physics.add.overlap(player, balls, collectBall, null, game);
    
}

function addBombs(game){
    bombs = game.physics.add.group();

}


function fireballCollide(fireball, platform){
    // fireball.setActive(false).setVisible(false);
    fireball.destroy();

}

function addCollectable(game, string){

    balls = game.physics.add.group({
        key: string,
        repeat: 20,
        setXY: { x: 12, y: 0, stepX: 100}
    });
}