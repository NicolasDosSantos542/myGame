
function createLevelOne(game){
    sky = game.add.image(400, 300, 'sky');

    platforms = game.physics.add.staticGroup();
    platforms.create(400, 568, 'ground').setScale(3, 2).refreshBody();
    platforms.create(600, 400, 'ground');
    platforms.create(50, 250, 'ground');
    platforms.create(750, 220, 'ground');
    scoreText = game.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });


}

function addStars(game){
    stars = game.physics.add.group({
        key: 'star',
        repeat: 11,
        setXY: { x: 12, y: 0, stepX: 70 }
    });
    
    stars.children.iterate(function (child) {
    
        child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
    
    });
    game.physics.add.overlap(player, stars, collectStar, null, game);
    
}

function addBombs(game){
    bombs = game.physics.add.group();

}


function fireballCollide(fireball, platform){
    // fireball.setActive(false).setVisible(false);
    fireball.destroy();

}