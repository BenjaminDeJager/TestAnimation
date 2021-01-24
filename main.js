var gameEngine = new GameEngine();

var ASSET_MANAGER = new AssetManager();

// downloading stuff
AssetManager.queueDownload("./sprites/reddragonflyright0.png")
AssetManager.queueDownload("./sprites/reddragonflydown1.png")
AssetManager.queueDownload("./sprites/reddragonflyleft2.png")
AssetManager.queueDownload("./sprites/reddragonflyup3.png")

ASSET_MANAGER.downloadAll(function () {
	var canvas = document.getElementById('gameWorld');
	var ctx = canvas.getContext('2d');

	// PARAMS.CANVAS_WIDTH = canvas.width;

	gameEngine.init(ctx);

	// xStart, yStart, width, height, frameCount, frameDuration, framePadding, reverse, loop
	theDragon = new Animator(AssetManager.getAsset("./sprites/reddragonflyright0.png",
	150, 150, // (x,y) cords
	200, 200, // (x,y) size
	16, 8,    // frameCount and frameDuration,
	0.2,      // framePadding
	false, true
	))

	gameEngine.addEntity(theDragon);

	gameEngine.start();
});
