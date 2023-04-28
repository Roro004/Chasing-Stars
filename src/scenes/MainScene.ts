import Planet from '../objects/Planet'
import PointySprite from '../objects/PointySprite'
import Flecks from '../objects/Flecks'
import Star from '../objects/Star'
import Pointer from '../objects/Pointer'

// let width = 800
// let height = 600

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
    this.pointy.body.velocity.x = 50
    // this.pointy.setVelocityX(1000)

    // const x = Phaser.Math.Between(0, 800)
    // const y = Phaser.Math.Between(0, 600)
    this.fleck = new Flecks(this)
    // for (var i = 0;i<7;i++){
    //   var xx=Phaser.Math.Between(0,game.config.width);
    //   var yy=Phaser.Math.Between(0,game.congig.height)
    // }

    this.planetA = new Planet(this, 200, 500, 100, 100)
    // this.planetB = new Planet(this, 400, 400, 200, 200)
    // this.planetC = new Planet(this, 500, 500, 200, 200)
    // this.pointer = new Pointer(this, 200, 500, 100, 100)
    // this.star = new Star(this, 500, 500, 100, 100)
  }

  update() {
    // console.log(this.pointy, this.planetA)
    this.physics.accelerateToObject(this.pointy, this.planetA, 10)
  }
}
