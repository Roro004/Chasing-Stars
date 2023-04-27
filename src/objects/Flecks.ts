import { Math } from 'phaser'
import { Time } from 'phaser'

export default class Flecks extends Phaser.Physics.Arcade.Sprite {
  constructor(
    scene: Phaser.Scene,
    // x: number,
    // y: number,
    // width: number,
    // height: number,
    // angle: number = 0,
  ) {
    super(scene, 0, 0, 'flecks')

    

    this.x = Math.Between(0, 800)
    this.y = Math.Between(0, 600)


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


  }

  preUpdate(time: number, delta: number) {
    super.preUpdate(time, delta)
this.x = Math.Between(0, 800)
this.y = Math.Between(0, 600)



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

// Alternatives to delay the loop

 //game.time.events.loop(Phaser.Time.SECOND, updateCounter, this)


