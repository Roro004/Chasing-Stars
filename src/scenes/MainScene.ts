import Planet from '../objects/Planet'
import PointySprite from '../objects/PointySprite'

export default class MainScene extends Phaser.Scene {
  pointy!: PointySprite
  planetA!: Planet

  pointLocations = []

  constructor() {
    super({ key: 'MainScene' })
  }

  preload() {}

  create() {
    this.pointy = new PointySprite(this, 400, 300)

    this.planetA = new Planet(this, 200, 500, 100, 100)
  }

  update() {}
}
