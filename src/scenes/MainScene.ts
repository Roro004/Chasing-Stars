import Planet from '../objects/Planet'
import PointySprite from '../objects/PointySprite'
import Flecks from '../objects/Flecks'
import Star from '../objects/Star'
import Pointerr from '../objects/Pointerr'
import Target from '../objects/Target'
import Pause from '../objects/Pause'



// let width = 800
// let height = 600
let targetLocations = [];
let current = [];
let next = [];
let fleckid = 0

export default class MainScene extends Phaser.Scene {
  pointy!: PointySprite
  planetA!: Planet

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
    //const target = this.add.image(0, 0, 'target')




    // build current and next points for (x,y)
    // let both take from targetLocations[] to direct pointy

    // make pointy go to locations one after the other
    this.input.on(
      'pointerdown',
      function (Pointer) {
        this.target = new Target(this, Pointer.x, Pointer.y, 55, 55)

        // record that input in the target locations
        targetLocations.push(Pointer.x, Pointer.y)
        let currentx = targetLocations.at(0)
        let currenty = targetLocations.at(1)


      },
      this,
    )
        console.log(targetLocations)


//?????
    // this.input.on('pointerdown', function(pointer, target) {
    //   target.destroy()
    // })
    //  this.target.on(
    //    'pointerdown',
    //    function (Pointer) {
    //     target.destroy()

    // record that input in the target locations
    //  targetLocations.push(Pointer.x, Pointer.y)

    //  console.log(targetLocations)
    //    },
    //    this,
    //  )

    //  this.input.on('pointerdown', (pointer) =>
    //   {
    //       target.copyPosition(pointer).setVisible(true);

    //       target.body.stop();

    this.planetA = new Planet(this, 200, 500, 100, 100)
    this.planetB = new Planet(this, 400, 400, 200, 200)
    this.planetC = new Planet(this, 500, 500, 200, 200)

this.pauseA = new Pause(this, 750, 25, 200, 200)

this.input.on('pausedown', function (pointer,pause) {
  this.scene.pause()
})
   //  this.target = new Target(this, this.currentx, currenty, 55, 55)

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

    // if ('spacebar'.isDown) {
    //   weapon.fire()
    // }
 // pointerr.destroy()
  }
}
