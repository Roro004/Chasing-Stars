export default class Star extends Phaser.Physics.Arcade.Sprite {
  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    width: number,
    height: number,
    angle: number = 0,
  ) {
    super(scene, x, y, 'star-s')

    this.makeAnimations()

    this.width = width
    this.height = height
    this.angle = angle

    this.scale = 0.25

    // Add to scene
    scene.add.existing(this)
    scene.physics.add.existing(this)

    this.setBodySize(this.width, this.height).setOffset(0)

    this.anims.play('shake')
  }

  preUpdate(t: number, dt: number) {
    super.preUpdate(t, dt)
  }

//   // PRIVATE

//   // the shake behavior
  private makeAnimations() {
     this.anims.create({
      key: 'shake',
     // frames :this.anims.create('star-s')
      //Phaser.Actions.Angle(this.star-s, 1)}
//this.star-s.angle++


//       frames: this.anims.generateFrameNames('planet', {
//         prefix: 'planets-',
//         start: 1,
//         end: 19,
//       }),
//       frameRate: 12,
//       repeat: -1,
   })
//this.star.playReverse('shake')
  }}



//     // for (let i = 0; i < Math.random(30, 60); i++) {
//     //   this.star.angle + 1

//     // while i < Math.random(30,60); i++


//     }
//   }

//   private makeAnimations() {
//     this.anims.create({
//       key: 'wait',
//       frames: this.anims.generateFrameNames('planet', {
//         prefix: 'planets-',
//         start: 1,
//         end: 19,
//       }),
//       frameRate: 12,
//       repeat: -1,
//     })

//   //       for (let i = 0; i < Math.random(60, 180); i+1) {
//   //         this.star.angle + 2
//   //       }
//   // }


  private makeAnimations() {
     this.anims.create({
      key: 'celebrate',
     // frames :this.anims.create('star-s')
      //Phaser.Actions.Angle(this.star-s, 1)}
//this.star-s.angle++


//       frames: this.anims.generateFrameNames('planet', {
//         prefix: 'planets-',
//         start: 1,
//         end: 19,
//       }),
//       frameRate: 12,
//       repeat: -1,
   })
  }


