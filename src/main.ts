import Phaser from 'phaser'
import PreloaderScene from './scenes/PreloaderScene'
import MainScene from './scenes/MainScene'
import TestScene from './scenes/TestScene'
//import TestScene from './scenes/TestScene'

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  scale: {
    mode: Phaser.Scale.FIT,
    width: 800,
    height: 600,
    // zoom: 2,
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0, x: 0 },
      debug: true,
    },
  },
  // scene: [PreloaderScene, MainScene],
  scene: [TestScene],
}

const game = new Phaser.Game(config)

export default game
