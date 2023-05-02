export default class Pause extends Phaser.Physics.Arcade.Sprite {
  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    width: number,

    height: number,
    angle: number = 0,
  ) {
    super(scene, x, y, 'pause')

    this.makeAnimations()

    this.width = width
    this.height = height
    this.angle = angle

    this.scale = 0.25


    // Add to scene
    scene.add.existing(this)
    scene.physics.add.existing(this)

    this.setBodySize(this.width, this.height).setOffset(0)

    //this.anims.play('pause')
  }

  preUpdate(t: number, dt: number) {
    super.preUpdate(t, dt)
  }

  // PRIVATE

  private makeAnimations() {
    // this.anims.create({
    //   key: 'planet-rotate',
    //   frames: this.anims.generateFrameNames('planet', {
    //     prefix: 'planets-',
    //     start: 1,
    //     end: 19,
    //   }),
    //   frameRate: 12,
    //   repeat: -1,
    // })
  }
}
