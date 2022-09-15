//toutes les fonctions de loading d'images et de spritesheet (séparées pour les mobs, pour les niveaux, etc)
function imageLoader(game){
    //load world
    game.load.image('sky', 'game/assets/sky.png');
    game.load.image('ground', 'game/assets/platform.png');
    //load pickers
    game.load.image('star', 'game/assets/star.png');
    //load weapons
    game.load.image('bomb', 'game/assets/bomb.png');
    game.load.image('fireball', 'game/assets/attacks/fireball.png')
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
    game.load.spritesheet('pikachuMove',
        'game/assets/pika/pikachuMove.png',
        { frameWidth: 60, frameHeight: 60, endFrame: 2 });

     game.load.spritesheet('pikachu',
        'game/assets/pika/spritePikachu.png',
        { frameWidth: 60, frameHeight: 60, endFrame: 0});


    game.load.spritesheet('jumpPikachu',
        'game/assets/pika/jumpPikachu.png',
        { frameWidth: 60, frameHeight: 60, endFrame: 1 })
        

    game.load.spritesheet('pikaAtackFoudre',
        'game/assets/pika/pikachuAttack.png',
        { frameWidth: 60, frameHeight: 60, endFrame: 0 })
        
    game.load.spritesheet('pikachuDying',
        'game/assets/pika/pikachu_die.png',
        { frameWidth: 61, frameHeight: 47, endFrame: 2 })
        

    //spell pika
    game.load.spritesheet('thunderbolt',
        'game/assets/attacks/thunderbolt.png',
        { frameWidth: 60, frameHeight: 220, endFrame: 0 })
        

    game.load.spritesheet('lightning',
        'game/assets/attacks/lightning.png',
        { frameWidth: 100, frameHeight: 60, endFrame: 0 })
        

    
}