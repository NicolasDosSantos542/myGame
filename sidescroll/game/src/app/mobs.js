//contient toutes les fonctions spécifiques aux mobs:
// create etc

function receiveAttack(bomb){
    // bomb.destroy();
    // score+=50;


}

function addEnnemie(game, string){
    switch(string){
        case "pikachu" :
            // console.log(game)
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

function receiveAttack(pikachu, fireball){
    fireball.destroy()

    pikachu.setVelocityX(0);
    pikachu.setActive(false).setVelocityY(-120)
    pikachu.anims.play('pikachuDies',true)
    setInterval(function () {pikachu.destroy()}, 1000); 

    

}

function gogoPikachu(){
    console.log("gogo pikachu")
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
    console.log(pikachu.flipX);
    console.log(pikachu.body.velocity.x);
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
        console.log('youhou')
        aspicot.setVelocityX(-160)
        
    })

    
}