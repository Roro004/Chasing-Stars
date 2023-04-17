export default class MainScene extends Phaser.Scene {
  constructor() {
    super({ key: 'MainScene' })
  }

  preload() {}

  create() {
    this.scene.start('MainScene')
  }

  update() {}
}
