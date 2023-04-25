export default class Flecks extends Phaser.Physics.Arcade.Sprite {
  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    width: number,
    height: number,
    angle: number = 0,
  ) {
    super(scene, x, y, 'flecks')

    this.makeAnimations()

    this.width = width
    this.height = height
    this.angle = angle

    this.scale = 0.25

    // Add to scene
    scene.add.existing(this)
    scene.physics.add.existing(this)

    this.setBodySize(this.width, this.height).setOffset(0)

    this.anims.play('flecks')
  }

  preUpdate(t: number, dt: number) {
    super.preUpdate(t, dt)
  }

  // PRIVATE

  private makeAnimations() {
    this.anims.create({
      key: 'flecks',
      frames: this.anims.generateFrameNames('flecks', {
        prefix: 'fleck-',
        start: 1,
        end: 55,
        zeroPad: 2,
      }),
      frameRate: 12,
      repeat: -1,
    })
  }
}
