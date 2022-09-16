//toutes les fonctions de loading d'images et de spritesheet (séparées pour les mobs, pour les niveaux, etc)
function imageLoader(game){
    //load world
    game.load.image('sky', 'game/assets/images/sky_big.png');
    game.load.image('ground', 'game/assets/images/platform.png');
    //load pickers
    game.load.image('star', 'game/assets/images/star.png');
    //load weapons
    game.load.image('bomb', 'game/assets/images/bomb.png');
    game.load.image('fireball', 'game/assets/images/attacks/fireball.png')
    //load player
    game.load.spritesheet('salamecheMove', 
        'game/assets/sprites/salameche/salameche_walk.png',
        { frameWidth: 50, frameHeight: 50, startFrame:0, endFrame:2}
    );
    game.load.spritesheet('salamecheHit', 
        'game/assets/sprites/salameche/salameche_fire_hit.png',
        { frameWidth: 50, frameHeight: 50, startFrame:0, endFrame : 10}
    );
    //sidescroll/game/assets/images/attacks
    game.load.image('lightning', 'sidescroll/game/assets/images/attacks/lightning.png') ;
    game.load.image('rock_5', 'sidescroll/game/assets/images/attacks/rock_5.png') ;
    game.load.image('fireball', 'sidescroll/game/assets/images/attacks/fireball.png') ;
    game.load.image('thunderbolt', 'sidescroll/game/assets/images/attacks/thunderbolt.png') ;
    game.load.image('rock_4', 'sidescroll/game/assets/images/attacks/rock_4.png') ;
    game.load.image('rock_3', 'sidescroll/game/assets/images/attacks/rock_3.png') ;
    game.load.image('rock_1', 'sidescroll/game/assets/images/attacks/rock_1.png') ;
    game.load.image('rock_2', 'sidescroll/game/assets/images/attacks/rock_2.png') ;
    //anim pika
    game.load.spritesheet('pikachuMove',
        'game/assets/sprites/pika/pikachuMove.png',
        { frameWidth: 60, frameHeight: 60, endFrame: 2 });

     game.load.spritesheet('pikachu',
        'game/assets/sprites/pika/spritePikachu.png',
        { frameWidth: 60, frameHeight: 60, endFrame: 0});


    game.load.spritesheet('jumpPikachu',
        'game/assets/sprites/pika/jumpPikachu.png',
        { frameWidth: 60, frameHeight: 60, endFrame: 1 })
        

    game.load.spritesheet('pikaAtackFoudre',
        'game/assets/sprites/pika/pikachuAttack.png',
        { frameWidth: 60, frameHeight: 60, endFrame: 0 })
        
    game.load.spritesheet('pikachuDying',
        'game/assets/sprites/pika/pikachu_die.png',
        { frameWidth: 61, frameHeight: 47, endFrame: 2 })
        

    //spell pika
    game.load.spritesheet('thunderbolt',
        'game/assets/images/attacks/thunderbolt.png',
        { frameWidth: 60, frameHeight: 220, endFrame: 0 })
        

    game.load.spritesheet('lightning',
        'game/assets/images/attacks/lightning.png',
        { frameWidth: 100, frameHeight: 60, endFrame: 0 })
        
    //sidescroll/game/assets/sprites/onix
    game.load.spritesheet('onix_attack',
        'sidescroll/game/assets/sprites/onix/onix_attack.png',
        { frameWidth: 50, frameHeight: 115, startFrame:0, endFrame:2}) ;
    game.load.spritesheet('onix',
        'sidescroll/game/assets/sprites/onix/onix.png',
        { frameWidth: 50, frameHeight: 95, startFrame:0, endFrame:2}) ;
    game.load.spritesheet('onix_hit',
        'sidescroll/game/assets/sprites/onix/onix_hit.png',
        { frameWidth: 50, frameHeight: 83, startFrame:0, endFrame:2}) ;

}
