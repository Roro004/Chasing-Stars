export default class PreloaderScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PreloaderScene' })
  }

  preload() {
    // this.load.image('pointy', './assets/img/pointy/pointy-idle.png')

    this.load.atlas(
      'pointy',
      'assets/img/pointy/pointy.png',
      'assets/img/pointy/pointy.json'
    )

    this.load.atlas(
      'planet',
      'assets/img/planet/planet.png',
      'assets/img/planet/planet.json'
    )
  }

  create() {
    this.scene.start('MainScene')
  }

  update() {}
}
