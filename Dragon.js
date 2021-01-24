class Dragon {
    constructor(game, x, y) {
        Object.assign(this, { game, x, y });
        this.x = x;
        this.y = y;
        this.sizeX = 144;
        this.sizeY = 100;
        this.frameCount = 3
        this.frameDuration = 0.2
        this.framePaddingX = 0
        this.framePaddingy = 0
        this.scale = 1
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/flying_twin_headed_dragon-blue.png");

        this.elapsedTime = 0;
        this.totalTime = this.frameCount * this.frameDuration;
    };

    update() {
    };

    draw() {
      this.elapsedTime += this.game.clockTick
      let frame = this.currentFrame();
      this.game.ctx.rotate(Math.PI);
      this.game.ctx.drawImage(this.spritesheet,
        0 + frame * (this.sizeX + this.framePaddingX),
        0,
        140, 120,
        this.x, this.y,
        140 * this.scale, 140 * this.scale
      );
      this.game.ctx.rotate(Math.PI);
    };

    currentFrame() {
        return Math.floor(this.elapsedTime / this.frameDuration) % this.frameCount;
    };
}
// this.animations.push(
//   new Animator(
//     ASSET_MANAGER.getAsset("./sprites/reddragonflydown1.png",
//       this.x, this.y,
//       this.sizeX, this.sizeY,
//       this.frameCount, this.frameDuration,
//       this.framePadding,
//       false, true
//     )
//   )
// )
// this.animations.push(
//   new Animator(
//     ASSET_MANAGER.getAsset("./sprites/reddragonflyleft2.png",
//       this.x, this.y,
//       this.sizeX, this.sizeY,
//       this.frameCount, this.frameDuration,
//       this.framePadding,
//       false, true
//     )
//   )
// )
// this.animations.push(
//   new Animator(
//     ASSET_MANAGER.getAsset("./sprites/reddragonflyup3.png",
//       this.x, this.y,
//       this.sizeX, this.sizeY,
//       this.frameCount, this.frameDuration,
//       this.framePadding,
//       false, true
//     )
//   )
// )
