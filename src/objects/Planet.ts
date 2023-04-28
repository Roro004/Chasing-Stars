import { Math } from 'phaser'
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
    this.angle = Phaser.Math.Between(0, 360)

    this.scale = 0.25


    // Add to scene
    scene.add.existing(this)
    scene.physics.add.existing(this)

    // this.setBodySize(this.width, this.height).setOffset(0)
    // this.refreshBody()

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
        start: Math.Between(1, 8),
        end: Math.Between(9, 19),
      }),
      frameRate: Math.Between(5, 12),
      repeat: -1,
    })
  }
}
