//toutes les animations

animPlayerMoves(this){

    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('salamecheMove', { start: 0, end: 6}),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'turn',
        frames: [ { key: 'salamecheMove', frame: 0 } ],
    });

    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('salamecheMove', { start: 0, end : 6}),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key:'fireHit',
        frames : this.anims.generateFrameNumbers('salamecheHit', {start : 9, end : 10}),
        frameRate : 10,
        repeat:-1
    });
}