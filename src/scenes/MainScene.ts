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

    // Make sure he exists
    if (this.pointy.body === null) {
      throw new Error("Pointy body doesn't exist.")
    }

    // Give him velocity
    this.pointy.body.velocity.x = 50

   // Create Flecks
    this.flecksGroup = this.physics.add.group({
      classType: Flecks,
      key: 'flecks',
      repeat: 10,
    })

// Add targets
    this.targets = this.physics.add.group({
      classType: Target,
    })

    // Clear the target when Pointy touches it
    this.physics.add.overlap(
      this.pointy,
      this.targets,
      this.pointyReachedTarget,
      null,
      this
    )




// Create a new target when mouse is pressed
    this.input.on('pointerdown', (pointer: Phaser.Input.Pointer) => {
      // Note: 'new' is required
      const position = new Phaser.Math.Vector2(pointer.position)

      // creates a new target
      this.targets.get(position.x, position.y)
    })


  // const sprite = this.add.sprite( 'target').setInteractive()

  // sprite.on('pointerdown', function (pointer) {
  //   sprite.destroy()
  // })

  //  const sprite1 = this.add.image( PauseA.x,P'pause').setInteractive()

  // sprite1.on('pointerdown', function (pointer) {
  //   sprite1.destroy()
  // })
  //   this.input.on('pointerdown', function(pointer, target) {

  //   })
  //    this.target.on(
  //      'pointerdown',
  //      function (Pointer) {
  //       target.destroy()


    this.planetA = new Planet(this, 200, 500, 100, 100)
    this.planetB = new Planet(this, 400, 400, 200, 200)
    this.planetC = new Planet(this, 500, 500, 200, 200)

    this.pauseA = new Pause(this, 750, 25, 200, 200)

    this.input.on('pausedown', function (pointer, pause) {
      this.scene.pause()
    })
    //  this.target = new Target(this, this.currentx, currenty, 55, 55)

    // this.star = new Star(this, 500, 500, 100, 100)




  }
  pointyReachedTarget(_pointy: PointySprite, target: Target) {
    target.destroy()
  }

  update() {

    this.physics.accelerateToObject(this.pointy, this.planetA, 100)

    if (this.targets.countActive() > 0) {
      const firstTarget: Target = this.targets.getFirstAlive()


      const target = new Phaser.Math.Vector2(firstTarget.x, firstTarget.y)

      target.limit(800)

      this.physics.moveToObject(this.pointy, target, 400)
    }

    this.pointerr = new Pointerr(
      this,
      this.pointy.x + 70,
      this.pointy.y,
      100,
      100
    )

  }
}
