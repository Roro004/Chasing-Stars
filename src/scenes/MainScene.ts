import Planet from '../objects/Planet'
import PointySprite from '../objects/PointySprite'
import Flecks from '../objects/Flecks'
import Star from '../objects/Star'
import Pointerr from '../objects/Pointerr'
import Target from '../objects/Target'


// let width = 800
// let height = 600

let fleckid = 0

export default class MainScene extends Phaser.Scene {
  pointy!: PointySprite
  planetA!: Planet

  targetLocations = []

  constructor() {
    super({ key: 'MainScene' })
  }

  preload() {}

  create() {
    this.pointy = new PointySprite(this, 400, 300)
    this.pointy.body.velocity.x = 50
    // this.pointy.setVelocityX(1000)


    for (let i = 0; i < 30; i++) {
      this.fleck = new Flecks(this)
      fleckid++
      console.log(fleckid)
    }

      // const target = this.add.image(0, 0, 'target').setVisible(false)


      //take a input when the mouse is pressed



    //     this.input.on('pointerdown', function (Pointer)
    //     {

    //         console.log('down');

    //         this.add.image(pointer.x, pointer.y, 'target');

    //     }, this);
    // }
      // record that input in the target locations


      // make pointy go to locations one after the other





      //  this.input.on('pointerdown', (pointer) =>
      //   {
      //       target.copyPosition(pointer).setVisible(true);

      //       target.body.stop();

    this.planetA = new Planet(this, 200, 500, 100, 100)
    this.planetB = new Planet(this, 400, 400, 200, 200)
    this.planetC = new Planet(this, 500, 500, 200, 200)

    // this.targetA = new Target(this, this.targetLocations.x, this.targetLocations.y, 55, 55)

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
    this.physics.accelerateToObject(this.pointy, this.planetA, 100)
      // this.physics.accelerateToObject(this.pointy, this.planetA, 10)
    // this.physics.accelerateToObject(this.pointy, cursor., 10)

    this.pointerr = new Pointerr(
      this,
      this.pointy.x + 70,
      this.pointy.y,
      100,
      100,
    )
  }
}
