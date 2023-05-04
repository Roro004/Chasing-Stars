import Planet from '../objects/Planet'
import PointySprite from '../objects/PointySprite'
import Flecks from '../objects/Flecks'
import Star from '../objects/Star'
import Pointerr from '../objects/Pointerr'
import Target from '../objects/Target'
import Pause from '../objects/Pause'

// let width = 800
// let height = 600
let current = []
let next = []
let fleckid = 0

export default class MainScene extends Phaser.Scene {
  pointy: PointySprite
  planetA!: Planet
  flecksGroup: Phaser.Physics.Arcade.Group
  targets!: Phaser.Physics.Arcade.Group

  constructor() {
    super({ key: 'MainScene' })
  }

  preload() {}

  create() {
    // Create Pointy
    this.pointy = new PointySprite(this, 400, 300)

    if (this.pointy.body === null) {
      throw new Error("Pointy body doesn't exist.")
    }

    this.pointy.body.velocity.x = 50

    // // Create Flecks
    // this.flecksGroup = this.physics.add.group({
    //   classType: Flecks,
    //   key: 'flecks',
    //   repeat: 10,
    // })

    // this.pointy.setVelocityX(1000)

    // for (let i = 0; i < 30; i++) {
    //   this.fleck = new Flecks(this)
    //   fleckid++
    //   console.log(fleckid)
    // }

    // const target = this.add.image(0, 0, 'target').setVisible(false)

    //take a input when the mouse is pressed
    //const target = this.add.image(0, 0, 'target')

    // build current and next points for (x,y)
    // let both take from targetLocations[] to direct pointy

    // make pointy go to locations one after the other
    // this.input.on(
    //   'pointerdown',
    //   (Pointer) => {
    //     // this.target = new Target(this, Pointer.x, Pointer.y, 55, 55)

    //     console.log(Pointer)

    //     // record that input in the target locations
    //     this.targetLocations.push(Pointer.position)
    //     // let currentx = targetLocations.at(0)
    //     // let currenty = targetLocations.at(1)
    //     console.log(targetLocations)
    //   },
    //   this
    // )

    this.targets = this.physics.add.group({
      classType: Target,
    })

    this.physics.add.overlap(
      this.pointy,
      this.targets,
      this.pointyReachedTarget,
      null,
      this
    )

    this.input.on('pointerdown', (pointer: Phaser.Input.Pointer) => {
      // Note: 'new' is required
      const position = new Phaser.Math.Vector2(pointer.position)

      // creates a new target
      this.targets.get(position.x, position.y)
    })

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

    this.input.on('pausedown', function (pointer, pause) {
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
  pointyReachedTarget(_pointy: PointySprite, target: Target) {
    target.destroy()
  }

  update() {
    //console.log(this.pointy, this.planetA)
    this.physics.accelerateToObject(this.pointy, this.planetA, 100)
    // this.physics.accelerateToObject(this.pointy, this.planetA, 10)
    // this.physics.accelerateToObject(this.pointy, cursor., 10)

    if (this.targets.countActive() > 0) {
      const firstTarget: Target = this.targets.getFirstAlive()

      //
      // this.pointy.setVelocityX(10)
      // this.physics.accelerateToObject(this.pointy, firstTarget, 100)

      const target = new Phaser.Math.Vector2(firstTarget.x, firstTarget.y)

      target.limit(800)

      this.physics.moveToObject(this.pointy, target, 400)
    }

    // this.pointerr = new Pointerr(
    //   this,
    //   this.pointy.x + 70,
    //   this.pointy.y,
    //   100,
    //   100
    // )

    // if ('spacebar'.isDown) {
    //   weapon.fire()
    // }
    // pointerr.destroy()
  }
}
