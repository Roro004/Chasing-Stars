export default class MainScene extends Phaser.Scene {
  plateforms!: Phaser.Physics.Arcade.StaticGroup
  stars!: Phaser.Physics.Arcade.Group
  player!: Phaser.Physics.Arcade.Sprite
  cursors!: Phaser.Types.Input.Keyboard.CursorKeys

  constructor() {
    super({ key: 'MainScene' })

  }

  preload() {
  
  }

  create() {
    this.scene.start('MainScene')
  }

  update() {}
}
