class Meteor {
  /**
   * 
   * @param {*} ctx 
   * @param {*} x  -画布宽度
   * @param {*} y -画布高度
   */
  constructor (ctx, startX, startY) {
    this.ctx = ctx
    this.x = startX
    this.y = startY
    this.stepX = - (Math.random() * 4 + 4)
    this.stepY = - this.stepX
  }
  flow () {
    let { stepX, stepY } = this
    this.x += stepX
    this.y += stepY
  }
  draw () {
    let { ctx, x, y } = this
    ctx.beginPath()
    ctx.fillStyle = 'yellow'
    ctx.arc(x, y, 2, Math.PI / 4, Math.PI / 4 * 5)
    ctx.lineTo(x + 10, y - 10)
    ctx.fill()
  }
}