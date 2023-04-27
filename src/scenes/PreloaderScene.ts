export default class PreloaderScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PreloaderScene' })
  }

  preload() {
    // this.load.image('pointy', './assets/img/pointy/pointy-idle.png')

    this.load.atlas(
      'pointy',
      'assets/textures/pointy/pointy.png',
      'assets/textures/pointy/pointy.json',
    )

    this.load.atlas(
      'planet',
      'assets/textures/planets/planet.png',
      'assets/textures/planets/planet.json',
    )

    this.load.atlas(
      'flecks',
      'assets/textures/flecks/flecks.png',
      'assets/textures/flecks/flecks.json',
    )

    this.load.image('pointer', 'assets/textures/pointer/pointer.png')

    this.load.image('pointer', 'assets/textures/star/star-s.png')

    this.load.image('pointer', 'assets/textures/star/star-f.png')
  }

  create() {
    this.scene.start('MainScene')
  }

  update() {}
}
