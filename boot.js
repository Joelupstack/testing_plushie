// Define custom Boot scene
class Boot extends Phaser.State {
  preload() {
    // Load just the loading background image
    this.load.image('loaderBG', 'assets/gui/pixel-plushies-loader-bg.png');
  }

  create() {
    // Fill screen color with your background tone (same as the image’s edge)
    this.stage.backgroundColor = '#fff6f1'; // light beige-pink (change to match your image exactly)

    // Add loader background centered
    const bg = this.add.sprite(this.world.centerX, this.world.centerY, 'loaderBG');
    bg.anchor.setTo(0.5);

    // Responsive scaling to fit screen while maintaining aspect ratio
    const scaleX = this.world.width / bg.width;
    const scaleY = this.world.height / bg.height;
    const scale = Math.min(scaleX, scaleY);
    bg.scale.setTo(scale);

    // Now start RenJS normally
    const RenJSConfig = {
      'name': 'Pixel Plushies', // Updated name for the game
      'w': 800,  // Width of the game window (can be changed later)
      'h': 600,  // Height of the game window (can be changed later)
      'renderer': Phaser.AUTO, // Renderer type
      'scaleMode': Phaser.ScaleManager.SHOW_ALL, // Ensures everything fits within the screen
      guiConfig: 'story/GUI.yaml',
      storyConfig: 'story/Config.yaml',
      storySetup: 'story/Setup.yaml',
      storyText: ['story/Story.yaml'],
      logChoices: true
    };

    const game = new RenJS.game(RenJSConfig);
    game.launch();
  }
}

// Initialize Phaser and start the Boot state
const game = new Phaser.Game(800, 600, Phaser.AUTO, '');
game.state.add('Boot', Boot);
game.state.start('Boot');

