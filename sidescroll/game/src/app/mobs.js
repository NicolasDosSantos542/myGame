//contient toutes les fonctions spécifiques aux mobs:
// create etc

function receiveAttack(bomb){
    // bomb.destroy();
    // score+=50;


}

function addEnnemie(game, string){
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
    console.log("ennemy", ennemy);
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

function gogoPikachu(){
    if (pikachus.countActive(true) <= 2)
    {
        positions= [130,320,450 ];
        
        const y = positions[Math.floor(Math.random() * positions.length)];
        
        

        pikachu = pikachus.create(800,y, 'pikachuMove')
        pikachu.setVelocityX(-160)
        pikachu.anims.play('pikachuMovesLeft',true)
     
    }


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