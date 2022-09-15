//toutes les fonctions de loading d'images et de spritesheet (séparées pour les mobs, pour les niveaux, etc)
function imageLoader(game){
    //load world
    game.load.image('sky', 'game/assets/sky.png');
    game.load.image('ground', 'game/assets/platform.png');
    //load pickers
    game.load.image('star', 'game/assets/star.png');
    //load weapons
    game.load.image('bomb', 'game/assets/bomb.png');
    game.load.image('fireball', 'game/assets/fireball.png')
    //load player
    game.load.spritesheet('salamecheMove', 
        'game/assets/salameche/walk.png',
        { frameWidth: 50, frameHeight: 50, startFrame:0, endFrame:2}
    );
    game.load.spritesheet('salamecheHit', 
        'game/assets/salameche/fire_hit.png',
        { frameWidth: 50, frameHeight: 50, startFrame:0, endFrame : 10}
    );
    //anim pika
    // game.load.spritesheet('pikachu',
    //     './spriteSheet/pika/spritePikachu1.png',
    //     { frameWidth: 60, frameHeight: 60, endFrame: 0});
    // game.load.spritesheet('pikachuMooveRight1',
    //     './spriteSheet/pika/pikachuMooveRight2.png',
    //     { frameWidth: 60, frameHeight: 60, endFrame: 1 });
    // game.load.spritesheet('pikachuMooveLeft1',
    //     './spriteSheet/pika/spritePikachuMooveLeft3.png',
    //     { frameWidth: 60, frameHeight: 60, endFrame: 1 });
    // game.load.spritesheet('jumpPikachu1',
    //     './spriteSheet/pika/jumpPikachu1.png',
    //     { frameWidth: 60, frameHeight: 60, endFrame: 1 });
    // game.load.spritesheet('pikaAtackFoudre',
    //     './spriteSheet/pika/pikaAtack2.png',
    //     { frameWidth: 60, frameHeight: 60, endFrame: 0 });
    // //spell pika
    // game.load.spritesheet('foudreSpell',
    //     './spriteSheet/pika/animFoudre1.png',
    //     { frameWidth: 60, frameHeight: 220, endFrame: 0 });
    // game.load.spritesheet('eclair',
    //     './spriteSheet/pika/eclair1.png',
    //     { frameWidth: 100, frameHeight: 60, endFrame: 0 });
    
}