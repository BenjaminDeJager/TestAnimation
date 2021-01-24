var gameEngine = new GameEngine();

var ASSET_MANAGER = new AssetManager();

// downloading stuff
ASSET_MANAGER.queueDownload("./sprites/reddragonflyright0.png");
ASSET_MANAGER.queueDownload("./sprites/reddragonflydown1.png");
ASSET_MANAGER.queueDownload("./sprites/reddragonflyleft2.png");
ASSET_MANAGER.queueDownload("./sprites/reddragonflyup3.png");

ASSET_MANAGER.downloadAll(function () {
	var gameEngine = new GameEngine();

	var canvas = document.getElementById('gameWorld');
	var ctx = canvas.getContext('2d');

	gameEngine.init(ctx);

	let theDragon = new dragon(gameEngine, 50, 50)
	gameEngine.addEntity(theDragon);

	gameEngine.start();
});
