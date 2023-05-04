import { Math } from 'phaser'

export default class Flecks extends Phaser.Physics.Arcade.Sprite {
  moveTimer = 100 // 1 second

  constructor(
    scene: Phaser.Scene
    // x: number,
    // y: number,
    // width: number,
    // height: number,
    // angle: number = 0,
  ) {
    super(scene, 0, 0, 'flecks')

    this.makeAnimations()

    // this.width = width
    // this.height = height
    // this.angle = angle

    this.scale = 0.28

    // Add to scene
    scene.add.existing(this)
    scene.physics.add.existing(this)

    this.setBodySize(this.width, this.height).setOffset(0)

    this.anims.play('flecks')

    this.scene.time.addEvent({
      delay: this.moveTimer,
      loop: true,
      callback: () => {
        this.updateLocation()
      },
    })
  }

  preUpdate(time: number, delta: number) {
    super.preUpdate(time, delta)
  }

  // PRIVATE

  private updateLocation() {
    this.x = Math.Between(0, this.scene.game.config.width as number)
    this.y = Math.Between(0, this.scene.game.config.height as number)
    // this.frame = Phaser.Math.Between(1, 55)
  }

  private makeAnimations() {
    this.anims.create({
      key: 'flecks',
      frames: this.anims.generateFrameNames('flecks', {
        prefix: 'fleck-',
        start: Phaser.Math.Between(1, 25),
        end: Phaser.Math.Between(26, 55),
        zeroPad: 2,
      }),
      frameRate: 5,
      repeat: -1,
    })
  }
}

// Alternatives to delay the loop

//game.time.events.loop(Phaser.Time.SECOND, updateCounter, this)
