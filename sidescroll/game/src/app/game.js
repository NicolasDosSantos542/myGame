
function defineCommands(game){

    cursors = game.input.keyboard.createCursorKeys();
    keyAttack = game.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.I);
    keyJ = game.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.J);
    keyK = game.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.K);
    keyL = game.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.L);

}

function addColliders(game){

    game.physics.add.collider(player, platforms);

    game.physics.add.collider(stars, platforms);

    game.physics.add.collider(bombs, platforms);

    game.physics.add.collider(player, bombs, hitEnnemy, null, game);

    game.physics.add.collider(fireballs, [platforms], fireballCollide, null, game);

    game.physics.add.collider(pikachus, [platforms]);

    game.physics.add.collider(pikachus, fireballs, receiveAttack, null, game);

    game.physics.add.collider(player, pikachus, hitEnnemy, null, game );

}

function addProjectiles(game){

    fireballs = game.physics.add.group({
        lifespan:0.1,
        allowGravity: false
    });

}


function restartGame(){
    game.registry.destroy(); // destroy registry
    game.events.off(); // disable all active events
    game.scene.restart(); // restart current scene

}