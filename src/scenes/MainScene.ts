import Planet from '../objects/Planet'
import PointySprite from '../objects/PointySprite'
import Flecks from '../objects/Flecks'
import Star from '../objects/Star'

let width = 800
let height = 600

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

    this.fleck = new Flecks(this, 200, 500, width, height)
    // for (var i = 0;i<7;i++){
    //   var xx=Phaser.Math.Between(0,game.config.width);
    //   var yy=Phaser.Math.Between(0,game.congig.height)
    // }
    

        this.planetA = new Planet(this, 200, 500, 100, 100)
  }

  update() {}
}
