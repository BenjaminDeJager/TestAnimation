class Animator {
    constructor(spritesheet, xStart, yStart, width, height, frameCount, frameDuration, framePadding, reverse, loop) {
        Object.assign(this, { spritesheet, xStart, yStart, height, width, frameCount, frameDuration, framePadding, reverse, loop });

        this.elapsedTime = 0;
        this.totalTime = this.frameCount * this.frameDuration;

    };

    drawFrame(tick, ctx, x, y, scale) {
        //console.log("drawing frame");
        this.elapsedTime += tick

        let frame = this.currentFrame();
        ctx.drawImage(this.spritesheet,
            this.xStart + frame * (this.width + this.framePadding), this.yStart, //source from sheet
            this.width, this.height,
            x, y,
            this.width * scale,
            this.height * scale);
    };

    currentFrame() {
        return Math.floor(this.elapsedTime / this.frameDuration);
    };

    isDone() {
        return (this.elapsedTime >= this.totalTime);
    };
};
