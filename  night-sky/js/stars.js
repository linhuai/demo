class Stars {
  /**
   * 
   * @param {*} ctx
   * @param {*} width       -画布宽度
   * @param {*} height      -画布高度
   * @param {*} minSize     -最小星星尺寸 
   * @param {*} maxSize     -最大星星尺寸
   * @param {*} amount      -星星数量
   */
  constructor (ctx, width, height, minSize, maxSize, amount) {
    this.ctx = ctx
    this.width = width
    this.height = height
    this.minSize = minSize
    this.maxSize = maxSize
    this.amount = amount

    this.stars = []
    this.getStars()
  }
  getStars () {
    let {width, height, minSize, maxSize, amount} = this
    for(let i = 0; i < amount; i++) {
      let star = {
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * (maxSize - minSize) + minSize
      }
      this.stars.push(star)
    }
  }
  blink () {
    let {stars, minSize, maxSize} = this
    stars.map(star => {
      let flag = Math.random() > 0.8 ? true : false
      if (flag) {
        star.r = Math.random() * (maxSize - minSize) + minSize
      }
      return star
    })
  }
  draw () {
    let {ctx, stars} = this
    ctx.fillStyle = 'white'
    stars.forEach(star => {
      ctx.beginPath()
      let {x, y, r} = star
      ctx.arc(x, y, r, 0, Math.PI * 2)
      ctx.fill()
    })
  }
}