import { Math } from 'phaser'

export default class TestScene extends Phaser.Scene {
  planet!: Phaser.GameObjects.Sprite
  ship!: Phaser.GameObjects.Sprite

  constructor() {
    super({ key: 'TestScene' })
  }

  preload() {
    // this.game.stage.backgroundColor = '#000000'

    this.load.image(
      'planet',
      'https://raw.githubusercontent.com/photonstorm/phaser/1.1.5/examples/assets/sprites/aqua_ball.png'
    )

    this.load.image(
      'ship',
      'https://raw.githubusercontent.com/photonstorm/phaser/1.1.5/examples/assets/sprites/phaser-dude.png'
    )
  }

  create() {
    this.planet = this.physics.add.sprite(200, 150, 'planet')
    this.ship = this.physics.add.sprite(200, 32, 'ship')

    this.ship.body.velocity.x = 50

    this.physics.accelerateToObject(this.ship, this.planet, 500)

    // console.log(this.ship.body)

    // // // Use our own gravity
    // this.ship.body.allowGravity = false

    // // // Set an initial motion
    // this.ship.body.velocity.x = 100
  }

  update(time: number, delta: number): void {
    // console.log(this.ship.body)
    // // Calculate gravity as the normalised vector from the ship to the planet
    // this.ship.body.gravity = new Math.Vector2(
    //   this.planet.body.x - this.ship.body.x,
    //   this.planet.body.y - this.ship.body.y
    // )
    // // const x = this.ship.body.gravity.x
    // // const y = this.ship.body.gravity.y
    // // const v = new Math.Vector2(x*300, y*300)
    // console.log(this.ship.body.gravity)
    // // console.log(x, y, v)
    // console.log(new Math.Vector2())
    // // Normalize and multiply by actual strength of gravity desired
    // this.ship.body.gravity = this.ship.body.gravity
    //   .normalize()
    //   .multiply(300, 300)
    //   console.log(this.ship.body.gravity)
  }
}
