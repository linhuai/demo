class Sky {
  constructor (ctx, width, height) {
    this.ctx = ctx
    this.width = width
    this.height = height
  }
  draw () {
    let { ctx, width, height } = this
    ctx.fillStyle = 'black'
    ctx.fillRect(0, 0, width, height)
  }
}