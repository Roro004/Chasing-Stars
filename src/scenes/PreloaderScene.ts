export default class PreloaderScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PreloaderScene' })
  }

  preload() {

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

    this.load.image('pointerr', 'assets/textures/pointerr/pointerr.png')

    this.load.image('target', 'assets/textures/target/target.png')


    this.load.image('pause', 'assets/textures/pause/pause.png')

    this.load.image('star-s', 'assets/textures/star/star-s.png')

    this.load.image('star-f', 'assets/textures/star/star-f.png')
  }

  create() {
    this.scene.start('MainScene')
  }

  update() {}
}
