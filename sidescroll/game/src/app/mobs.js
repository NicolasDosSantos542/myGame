//contient toutes les fonctions spécifiques aux mobs:
// create etc

function receiveAttack(bomb){
    // bomb.destroy();
    // score+=50;


}

function addEnnemie(game, string){
    ennemies = game.physics.add.group();
    switch(string){
        case "pikachu" :
            addPikachu(game);
            break
        case "aspicot":
            addAspicot(game)
        }
}

function addPikachu(game){

    pikachus = game.physics.add.group({});
    pikachu = pikachus.create(800,300, 'pikachuMove')
    pikachu.setVelocityX(-160)
    pikachu.anims.play('pikachuMovesLeft',true)


}

function receiveAttack(ennemy, fireball){

    ennemyString = findTheEnnemy(ennemy)
    ennemyDies(ennemy, ennemyString)
    fireball.destroy()
    ennemy.setActive(false).setVelocityY(-120)
    ennemy.setVelocityX(0);
    setInterval(function () {ennemy.destroy()}, 1000); 

}

function findTheEnnemy(ennemy){
    let str=ennemy.texture.key;
    return str.split(/(?=[A-Z])/)[0];
}

function ennemyDies(ennemy, string){

   ennemy.anims.play(string+'Dies',true)
}

function sendRunnerEnnemy(game){

    if(game.time.now < nextFireTime) {
        return;
    }
    nextEnnemySpawn = game.time.now + spawnRate;
   
  
    positions= [130,320,450 ];
    
    const y = positions[Math.floor(Math.random() * positions.length)];
    
    
    console.log("brouette", runnerEnnemy)
    ennemy = ennemies.create(player.x+600,y, runnerEnnemy+'Move')
    ennemy.setVelocityX(-160)
    ennemy.anims.play(runnerEnnemy+'Move',true)
     
    


}

function reverseEnnemy(pikachu, invisible_stop){
    if(pikachu.flipX == true){
        pikachu.flipX = false;
        pikachu.setVelocityX (-160);
    }else{
        pikachu.flipX = true;
        pikachu.setVelocityX (160);
    }
}

function addAspicot(game){
    
    aspicots = game.physics.add.group({});
    platform_array.forEach((platform)=>{
        
        aspicot = aspicots.create(platform.x,platform.y-30, 'aspicotMove')
        aspicot.anims.play('aspicotMove',true)
        aspicot.setVelocityX(-160)
        
    })
    
}