/**
 * 
 */
class Firework {
  constructor (ctx, startX, startY, height) {
    this.ctx = ctx
    this.x = startX
    this.y = startY
    this.height = height
  }
  move () {
    let { y, height } = this
    if (y > height) {
      this.y -= (Math.random() * 4 + 4)
    }
  }
  draw () {
    let { ctx, x, y } = this
    ctx.fillStyle = 'white'
    ctx.beginPath()
    ctx.arc(x, y, 4, 0, Math.PI, true)
    ctx.lineTo(x, y + 30)
    ctx.fill()
  }
}