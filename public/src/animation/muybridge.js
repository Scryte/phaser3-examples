var config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 1024,
    height: 600,
    backgroundColor: '#efefef',
    state: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.spritesheet('muybridge', 'assets/animations/muybridge01.png', { frameWidth: 119, frameHeight: 228 });
}

function create ()
{
    var config = {
        key: 'run',
        frames: 'muybridge',
        framerate: 15,
        repeat: -1
    };

    this.anims.create(config);

    //  Each frame is 119px wide

    group = this.add.group();

    group.createMultiple({ key: 'muybridge', frame: 0, repeat: 8 });

    group.gridAlign({ width: 9, height: 1, cellWidth: 119, y: 170 });

    this.anims.staggerPlay('run', group.getChildren(), -0.1);
}
