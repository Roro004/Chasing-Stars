export default class PointySprite extends Phaser.Physics.Arcade.Sprite {
  width = 141
  height = 114

  private cursors: Phaser.Types.Input.Keyboard.CursorKeys

  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, 'character')

    this.makeAnimations()

    // Add to scene
    scene.add.existing(this)
    scene.physics.add.existing(this)

    this.setBodySize(this.width, this.height).setOffset(0)

    // this.body.allowGravity = false

    this.anims.play('pointy-idle')

    // Create cursor keys
    if (this.scene.input.keyboard === null) {
      throw new Error('Keyboard is null')
    }

    this.cursors = this.scene.input.keyboard.createCursorKeys()
  }

  preUpdate(t: number, dt: number) {
    super.preUpdate(t, dt)

    // check if body is null
    if (this.body === null) {
      return
    }

    if (this.cursors.left.isDown) {
      this.moveLeft()
    } else if (this.cursors.right.isDown) {
      this.moveRight()
    } else {
      this.moveIdle()
    }
  }

  // PRIVATE

  private makeAnimations() {
    /*

    pointy-[speed]-[turn].png

    speed = 0 -> idle; 12 -> full speed
    turn = 0 -> no turn; 12 -> full turn

    pointy-0-0.png - 23
    pointy-1-0.png - 24
    ...
    pointy-12-0.png - 35

    pointy-0-1.png - 36
    ...
    pointy-0-12.png - 180

    ...
    pointy-12-12.png - 192
    */
    this.scale = 0.25
    // Create a variable for speed
    const speed = 12

    this.anims.create({
      key: 'pointy-idle',
      frames: [{ key: 'pointy', frame: 'pointy-00-00' }],
    })

    this.anims.create({
      key: 'pointy-right',
      frames: this.anims.generateFrameNames('pointy', {
        prefix: 'pointy-00-',
        start: 0,
        end: 12,
        zeroPad: 2,
      }),
      frameRate: 12,
      repeat: -1,
    })
  }

  private moveIdle() {
    if (this.anims.currentAnim === null) {
      return
    }

    this.anims.play('pointy-idle', true)
    // this.setVelocity(0)
  }

  private moveRight() {
    if (this.body === null) {
      return
    }

    this.anims.play('pointy-right', true)
    this.scaleX = 1
    this.body.offset.x = 0
    // this.setVelocity(0, 0)
  }

  private moveLeft() {
    if (this.body === null) {
      return
    }

    this.anims.play('pointy-right', true)
    this.scaleX = -1
    this.body.offset.x = this.width
    // this.setVelocity(-0, 0)
  }
}
