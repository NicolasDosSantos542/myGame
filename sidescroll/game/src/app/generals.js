
// function collectBall (player, star)
// {
//     star.disableBody(true, true);

//     score += 10;
//     scoreText.setText('Score: ' + score);

//     if (balls.countActive(true) === 0)
//     {
//         balls.children.iterate(function (child) {

//             child.enableBody(true, child.x, 0, true, true);

//         });

//         var x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);

//         var bomb = bombs.create(x, 16, 'bomb');
//         bomb.setBounce(1);
//         bomb.setCollideWorldBounds(true);
//         bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);

//     }
// }


function rangeAttack(shooters, game){
    
    if(game.time.now < nextFireTime) {
        return;
    }
    nextFireTime = game.time.now + fireRate;
    
    shooters.children.entries.forEach(shooter => {
        let distanceToPlayer = Math.abs(player.x-shooter.x)
        if(distanceToPlayer <=500){

            var bullet=bullets.create(shooter.x,shooter.y, 'pic');
            if(shooter.flipX){
                bullet.setVelocityY(0)
                bullet.setVelocityX(400)
                bullet.flipX=true;
                
            }else{
                bullet.setVelocityY(0)
                bullet.setVelocityX(-400)
            }
        }

    });


}
