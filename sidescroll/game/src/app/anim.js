//toutes les animations
console.log("aaaaaaaanniiiiiiims")
function animPlayerMoves(game){

    game.anims.create({
        key: 'left',
        frames: game.anims.generateFrameNumbers('salamecheMove', { start: 0, end: 6}),
        frameRate: 10,
        repeat: -1
    });

    game.anims.create({
        key: 'turn',
        frames: [ { key: 'salamecheMove', frame: 0 } ],
    });

    game.anims.create({
        key: 'right',
        frames: game.anims.generateFrameNumbers('salamecheMove', { start: 0, end : 6}),
        frameRate: 10,
        repeat: -1
    });
    game.anims.create({
        key:'fireHit',
        frames : game.anims.generateFrameNumbers('salamecheHit', {start : 9, end : 10}),
        frameRate : 10,
        repeat:-1
    });
}

game.load.image('fireball', 'game/assets/fireball.png')
game.load.spritesheet('salamecheMove', 
    'game/assets/salameche/walk.png',
    { frameWidth: 50, frameHeight: 50, startFrame:0, endFrame:2}
);
game.load.spritesheet('salamecheHit', 
    'game/assets/salameche/fire_hit.png',
    { frameWidth: 50, frameHeight: 50, startFrame:0, endFrame : 10}
);

