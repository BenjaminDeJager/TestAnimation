class Dragon {
    constructor(game, x, y) {
        Object.assign(this, { game, x, y });

        this.game.Dragon = this;

        this.x = x;
        this.y = y;
        this.sizeX = 200;
        this.sizeY = 200;
        this.frameCount = 16
        this.frameDuration = 8
        this.framePadding = 0.2

        this.animations = [];
        this.loadAnimations();
    };

    loadAnimations() {
      animations.push(
        new Animator(
          AssetManager.getAsset("./sprites/reddragonflyright0.png",
            this.x, this.y,
            this.sizeX, this.sizeY,
            this.frameCount, this.frameDuration,
            this.framePadding,
            false, true
          )
        );
      )
      animations.push(
        new Animator(
          AssetManager.getAsset("./sprites/reddragonflydown1.png",
            this.x, this.y,
            this.sizeX, this.sizeY,
            this.frameCount, this.frameDuration,
            this.framePadding,
            false, true
          )
        );
      )
      animations.push(
        new Animator(
          AssetManager.getAsset("./sprites/reddragonflyleft2.png",
            this.x, this.y,
            this.sizeX, this.sizeY,
            this.frameCount, this.frameDuration,
            this.framePadding,
            false, true
          )
        );
      )
      animations.push(
        new Animator(
          AssetManager.getAsset("./sprites/reddragonflyup3.png",
            this.x, this.y,
            this.sizeX, this.sizeY,
            this.frameCount, this.frameDuration,
            this.framePadding,
            false, true
          )
        );
      )
    }
}
