
console.log("woooooorld")
function createLevelOne(game){
    game.add.image(400, 300, 'sky');

    platforms = game.physics.add.staticGroup();
    platforms.create(400, 568, 'ground').setScale(3).refreshBody();
    platforms.create(600, 400, 'ground');
    platforms.create(50, 250, 'ground');
    platforms.create(750, 220, 'ground');

}