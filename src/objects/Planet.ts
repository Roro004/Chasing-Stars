export default class Planet extends Phaser.Physics.Arcade.Sprite {
  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    width: number,
    height: number,
    angle: number = 0
  ) {
    super(scene, x, y, 'planet')

    this.makeAnimations()

    this.width = width
    this.height = height
    this.angle = angle

    this.scale = 0.25

    // Add to scene
    scene.add.existing(this)
    scene.physics.add.existing(this)

    this.setBodySize(this.width, this.height).setOffset(0)

    this.anims.play('planet-rotate')
  }

  preUpdate(t: number, dt: number) {
    super.preUpdate(t, dt)
  }

  // PRIVATE

  private makeAnimations() {
    this.anims.create({
      key: 'planet-rotate',
      frames: this.anims.generateFrameNames('planet', {
        prefix: 'planets-',
        start: 0,
        end: 3,
      }),
      frameRate: 12,
      repeat: -1,
    })
  }

  private moveIdle() {
    if (this.anims.currentAnim === null) {
      return
    }

    this.anims.play('planet-idle', true)
    this.setVelocity(0)
  }

  private moveRight() {
    if (this.body === null) {
      return
    }

    this.anims.play('planet-right', true)
    this.scaleX = 1
    this.body.offset.x = 0
    this.setVelocity(0, 0)
  }

  private moveLeft() {
    if (this.body === null) {
      return
    }

    this.anims.play('planet-right', true)
    this.scaleX = -1
    this.body.offset.x = this.width
    this.setVelocity(-0, 0)
  }
}
