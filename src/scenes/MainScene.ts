import Planet from '../objects/Planet'
import PointySprite from '../objects/PointySprite'
import Flecks from '../objects/Flecks'
import Star from '../objects/Star'
import Pointer from '../objects/Pointer'
import Target from '../objects/Target'

// let width = 800
// let height = 600

let fleckid = 0

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
    for (let i = 0; i < 30; i++) {
      this.fleck = new Flecks(this)
      fleckid++
      console.log(fleckid)
    }

    // for (var i = 0;i<7;i++){
    //   var xx=Phaser.Math.Between(0,game.config.width);
    //   var yy=Phaser.Math.Between(0,game.congig.height)
    // }

    this.planetA = new Planet(this, 200, 500, 100, 100)
    this.planetB = new Planet(this, 400, 400, 200, 200)
    this.planetC = new Planet(this, 500, 500, 200, 200)

    // this.star = new Star(this, 500, 500, 100, 100)

    // // EXAMPLE ONLY
    // this.time.addEvent({
    //   delay: 1000,
    //   callback: () => {
    //     this.scene.pause()
    //   },
    // })
  }

  update() {
    //console.log(this.pointy, this.planetA)
    this.physics.accelerateToObject(this.pointy, this.planetA, 10)
    // this.physics.accelerateToObject(this.pointy, cursor., 10)

    this.pointer = new Pointer(
      this,
      this.pointy.x + 70,
      this.pointy.y,
      100,
      100,

          this.pointer = new Target(
      this,
      200,
      200,
      100,
      100,
    )
  }
}
