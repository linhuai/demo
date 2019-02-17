/**
 * 
 */
class Fireworks {
  constructor (ctx, x, y, height) {
    this.ctx = ctx
    this.x = x
    this.y = y
    this.height = height
  }
  draw () {
    let { ctx, x, y } = this
    ctx.fillStyle = 'white'
    ctx.fillRect(x - 50, y - 50, 1, 1)

  }
  move () {
    let { y, height } = this
    console.log(y, height)
    if (y > height) {
      console.log('y', this.y)
      this.y--
    }
  }
}