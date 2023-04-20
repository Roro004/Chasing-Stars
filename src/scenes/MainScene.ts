import PointySprite from '../objects/PointySprite'

export default class MainScene extends Phaser.Scene {
  pointy!: PointySprite

  pointLocations = []

  constructor() {
    super({ key: 'MainScene' })
  }

  preload() {}

  create() {
    this.pointy = new PointySprite(this, 400, 300)

    this.input.on('pointerdown', (pointer) => {
      this.pointLocations.push(pointer)
      console.log(this.pointLocations.length)
    })
  }

  update() {}
}
