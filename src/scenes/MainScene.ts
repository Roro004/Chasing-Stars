export default class MainScene extends Phaser.Scene {
  constructor() {
    super({ key: 'MainScene' })
  }

  preload() {}

  create() {
    this.add.image(400, 300, 'pointy')
  }

  update() {}
}
