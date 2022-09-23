
function createLevelOne(game){
    sky = game.add.image(4000, 300, 'sky');
    caveEntry = game.add.image(6274, 300,'cave_entry')
    // bigRock = game.add.image(6000, 460,'bigRock').setDepth(1)

    player_invisible_stop = game.physics.add.staticGroup(); 
    stop_before_boss =  player_invisible_stop.create(5935, 516, 'stop').setVisible(false)

    platforms = game.physics.add.staticGroup();
    platforms.create(400, 568, 'ground').setScale(40, 2).refreshBody(); // le sol
    platform_array.push(platforms.create(600, 400, 'ground'));
    platform_array.push(platforms.create(50, 250, 'ground'));
    platform_array.push(platforms.create(750, 220, 'ground'));
    platform_array.push(platforms.create(1200, 400, 'ground'));
    platform_array.push(platforms.create(1750, 270, 'ground'));
    platform_array.push(platforms.create(2330, 400, 'ground'));
    platform_array.push(platforms.create(2330, 120, 'ground'));
    platform_array.push(platforms.create(3000, 270, 'ground'));
    platform_array.push(platforms.create(3540, 220, 'ground'));
    platform_array.push(platforms.create(4000, 300, 'ground'));
    platform_array.push(platforms.create(4500, 400, 'ground'));

    invisible_stops = game.physics.add.staticGroup()

    platform_array.forEach((element=>{
        levelY = element.y;
        startX = element.x - element.width/2;
        stopX = element.x + element.width/2;
 
        invisible_stops.create(startX, levelY-30).setVisible(false);
        
        invisible_stops.create(stopX, levelY-30).setVisible(false);
    }))
    //truelle
    console.log("camera.main", game.cameras.main)

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


function prepareForBoss(game){
    frontOfBoss = true;

    game.cameras.main.setBounds(4700, 0, worldWidth, 600);
    platforms.create(4700, levelY-30,"stop").setVisible(false   );

    ennemies.children.entries.forEach(element => {
            element.destroy();
    });
    aspicots.children.entries.forEach(element => {
                element.destroy();
    });
    bullets.children.entries.forEach(element => {
        element.destroy();
    });
            
 
}

