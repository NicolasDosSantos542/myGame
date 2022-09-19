//toutes les animations
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

function animEnnemyMoves(){
    this.game.anims.create({
        key: 'pikachuMovesLeft',
        frames: game.anims.generateFrameNumbers('pikachuMove', { start: 0, end: 4}),
        frameRate: 10,
        repeat: -1
    });

    this.game.anims.create({
        key : 'pikachuDies',
        frames: game.anims.generateFrameNumbers('pikachuDying', { start: 2, end: 3}),
        frameRate : 10,
        repeat : -1

    })

    this.game.anims.create({
        key : 'aspicotMove',
        frames: game.anims.generateFrameNumbers('aspicotMove', { start: 0, end: 5}),
        frameRate : 10,
        repeat : -1
    })
    this.game.anims.create({
        key : 'aspicotDies',
        frames: game.anims.generateFrameNumbers('aspicotDies', { start: 0, end: 5}),
        frameRate : 10,
        repeat : -1
    })
    this.game.anims.create({
        key : 'rattataMove',
        frames: game.anims.generateFrameNumbers('rattataMove', { start: 0, end: 9}),
        frameRate : 10,
        repeat : -1
    })
    this.game.anims.create({
        key : 'rattataDies',
        frames: game.anims.generateFrameNumbers('rattataDies', { start: 0, end: 5}),
        frameRate : 10,
        repeat : -1
    })  
    this.game.anims.create({
        key : 'roucoupsMove',
        frames: game.anims.generateFrameNumbers('roucoupsMove', { start: 0, end: 2}),
        frameRate : 10,
        repeat : -1
    })
    this.game.anims.create({
        key : 'roucoupsDies',
        frames: game.anims.generateFrameNumbers('roucoupsDies', { start: 0, end: 1}),
        frameRate : 10,
        repeat : -1
    })
}

