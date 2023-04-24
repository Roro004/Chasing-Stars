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
      'assets/textures/planets/planet.png',
      'assets/textures/planets/planet.json',
    )

    // this.load.atlas(
    //   'assets/textures/flecks/flecks.png',
    //   'assets/textures/flecks/flecks.json',
    // )

    
  }

  create() {
    this.scene.start('MainScene')
  }

  update() {}
}
