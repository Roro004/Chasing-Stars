export default class PreloaderScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PreloaderScene' })
  }

  preload() {
    this.load.image('pointy', './assets/img/pointy/pointy-idle.png')
  }

  create() {
    this.scene.start('MainScene')
  }

  update() {}
}
