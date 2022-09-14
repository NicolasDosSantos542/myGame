//toutes les fonctions de loading d'images et de spritesheet (séparées pour les mobs, pour les niveaux, etc)
function imageLoader(game){
    game.load.image('sky', 'game/assets/sky.png');
    game.load.image('ground', 'game/assets/platform.png');
    game.load.image('star', 'game/assets/star.png');
    game.load.image('bomb', 'game/assets/bomb.png');
    game.load.image('fireball', 'game/assets/fireball.png')
    game.load.spritesheet('salamecheMove', 
        'game/assets/salameche/walk.png',
        { frameWidth: 50, frameHeight: 50, startFrame:0, endFrame:2}
    );
    game.load.spritesheet('salamecheHit', 
        'game/assets/salameche/fire_hit.png',
        { frameWidth: 50, frameHeight: 50, startFrame:0, endFrame : 10}
    );
    
}