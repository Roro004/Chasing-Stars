import { Math } from 'phaser'

export default class Flecks extends Phaser.Physics.Arcade.Sprite {
  private updateLocationEvery = 100

  // Don't change this.
  private updateCounter = 0

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

    this.updateLocation2()

    // this.width = width
    // this.height = height
    // this.angle = angle

    this.scale = 0.28

    // Add to scene
    scene.add.existing(this)
    scene.physics.add.existing(this)

    this.setBodySize(this.width, this.height).setOffset(0)

    this.anims.play('flecks')
  }

  preUpdate(time: number, delta: number) {
    super.preUpdate(time, delta)

    this.checkForUpdateLocation()
  }

  // PRIVATE

  private checkForUpdateLocation() {
    this.updateCounter += 1

    if (this.updateCounter > this.updateLocationEvery) {
      this.updateCounter = 0

      this.updateLocation2()
    }
  }

  private updateLocation2() {
    this.x = Math.Between(0, this.scene.game.config.width as number)
    this.y = Math.Between(0, this.scene.game.config.height as number)
  }

  private makeAnimations() {
    this.anims.create({
      key: 'flecks',
      frames: this.anims.generateFrameNames('flecks', {
        prefix: 'fleck-',
        start: 1,
        end: 55,
        zeroPad: 2,
      }),
      frameRate: 5,
      repeat: -1,
    })
  }
}

// Alternatives to delay the loop

//game.time.events.loop(Phaser.Time.SECOND, updateCounter, this)
