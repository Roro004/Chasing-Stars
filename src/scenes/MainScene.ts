import Planet from '../objects/Planet'
import PointySprite from '../objects/PointySprite'
import Flecks from '../objects/Flecks'
import Star from '../objects/Star'
import Pointer from '../objects/Pointer'
import { Math } from 'phaser'

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
    const x = Math.Between(0, 800)
    const y = Math.Between(0, 600)
    this.fleck = new Flecks(this, x, y, width, height)
    // for (var i = 0;i<7;i++){
    //   var xx=Phaser.Math.Between(0,game.config.width);
    //   var yy=Phaser.Math.Between(0,game.congig.height)
    // }



    this.planetA = new Planet(this, 200, 500, 100, 100)
    this.planetB = new Planet(this, 400, 400, 200, 200)
    this.planetC = new Planet(this, 500, 500, 200, 200)
    this.pointer = new Pointer(this, 200, 500, 100, 100)
    // this.star-s = new Star(this, 300, 500, 100, 100)

    //  pointy.body.allowGravity = false
    //  // Set an initial motion
    //  pointy.body.velocity.x = 100
  }

  update() {
    // // Calculate gravity as the normalised vector from the ship to the planet
    // this.pointy.body.gravity = new Phaser.Point(
    //   this.pointy.body.x - ship.body.x,
    //   planet.body.y - ship.body.y,
    // )
    // // Normalize and multiply by actual strength of gravity desired
    // this.pointy.body.gravity = this.pointy.body.gravity.normalize().multiply(300, 300)
  }
}
