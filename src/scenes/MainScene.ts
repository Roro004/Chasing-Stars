export default class MainScene extends Phaser.Scene {
  constructor() {
    super({ key: 'MainScene' })
  }

  preload() {}

  create() {
    this.add.image(400, 300, 'pointy')

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
  }

  update() {}
}
