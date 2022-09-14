//contient toutes les fonctions spécifique au joueur et son personnage:
// attack, receiveAttack, createPlayer (name) etc

createPlayer(game){

    player = this.physics.add.sprite(100, 450, 'salamecheMove');
    player.setBounce(0.2);
    player.setCollideWorldBounds(true);
    player.flipX = -1
}