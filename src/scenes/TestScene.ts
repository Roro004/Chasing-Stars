import { Math } from 'phaser'

export default class TestScene extends Phaser.Scene {
  planet!: Phaser.GameObjects.Sprite
  ship!: Phaser.GameObjects.Sprite
  gravityAmplitude = 100

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
  }

  update() {
    this.physics.accelerateToObject(
      this.ship,
      this.planet,
      this.gravityAmplitude
    )
  }
}
