
class LevelOne extends Phaser.Scene {
    constructor() {
        super({
            key: "LevelOne"
        });

    }


    preload ()
    {
       
        imageLoader(this);
    }
    
    
    create (){
    
        this.cameras.main.setBounds(0, 0, worldWidth, 600);
        createLevelOne(this);
        
        
        createPlayer(this)
        this.cameras.main.startFollow(player);
    
        animPlayerMoves(this)
        animEnnemyMoves(this)
    
        defineCommands(this)
       
        addBalls(this)
    
        addBombs(this)
    
        addProjectiles(this)
        
        addEnnemie(this, 'pikachu')
        
        addEnnemie(this, 'aspicot')
    
        addBoss(this)
        
        addColliders(this)  //doit être impérativement APRÈS les monstres, personnages et plateformes 

        this.input.on('pointerdown', () =>console.log({ "x" : game.input.pointers[0].worldX, "y" : game.input.pointers[0].worldY}));
    }
    
    
    update () {
        let textX = this.cameras.main.midPoint.x - 384;
        scoreText.setPosition(textX, 16)
        playerPowerText.setPosition(textX, 42)
    
        destroyFireballs(this)
        destroyOffScreen(ennemies)
    
        
        if(player.x <4700 && !frontOfBoss){
    
           sendCrossingEnnemy(this);
           sendFlyingEnnemy(this);
        }
        if(player.x > 4700){
        prepareForBoss(this);
        bossPattern(this)
        }
        playerCommands(this);
        rangeAttack(aspicots, this)
        if(this.cameras.main.midPoint.x >= worldWidth-600 || stopFollow){
            stopFollow = true;
            this.cameras.main.setBounds(worldWidth-800, 0, worldWidth, 0);
            this.cameras.main.stopFollow(player);

        }
    
        if (  bossHitPoints >= bossLifeMax){
            if (player.x < worldWidth-800 ){
                player.setX(worldWidth-700)
            }
            levelBoss.setActive(false).setVisible(false);
    
    
        }
    
    }
    
    
}

