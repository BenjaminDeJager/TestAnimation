class Dragon {
    constructor(game, x, y) {
        Object.assign(this, { game, x, y });

        this.game.Dragon = this;

        // spritesheet
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/right.png");

        this.size = 100; //if I ever want to try to scale it.
        this.facing = 0; // 0 = right, 1 = down, 2 = left, 3 = up
        this.framesPerMin = 10 // I'm using this many frames per second


        this.animations = [];
        this.loadAnimations();
    };

    loadAnimations() {
        for (var i = 0; i < 6; i++) { // six states
            this.animations.push([]);

        }
    };
