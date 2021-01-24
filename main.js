var gameEngine = new GameEngine();

var ASSET_MANAGER = new AssetManager();

// downloading stuff
ASSET_MANAGER.queueDownload("./sprites/flying_twin_headed_dragon-blue.png");
ASSET_MANAGER.queueDownload("./sprites/flying_twin_headed_dragon-red.png");

ASSET_MANAGER.downloadAll(function () {
	var gameEngine = new GameEngine();
	var canvas = document.getElementById('gameWorld');
	var ctx = canvas.getContext('2d');

	gameEngine.init(ctx);
	ctx.imageSmoothingEnabled = false;

	let theDragon = new Dragon(gameEngine, -150, -150);
	gameEngine.addEntity(theDragon);
	gameEngine.start();
});
