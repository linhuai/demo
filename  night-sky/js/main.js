(function () {
  let canvas = document.querySelector('#canvas')
  let ctx = canvas.getContext('2d')
  
  let width = window.innerWidth
  let height = window.innerHeight

  canvas.width = width
  canvas.height = height

  let sky = new Sky(ctx, width, height)
  let stars = new Stars(ctx, width, height, 1, 2, 200)

  let meteors = []
  let meteorGenerator = () => {
    meteors.push(new Meteor(ctx, width - 100, Math.random() * height))
    setTimeout(meteorGenerator, 1000 * Math.random())
  }
  meteorGenerator()


  let fireworks = []
  let fireworkGenerator = () => {
    fireworks.push(new Firework(
      ctx, 
      Math.random() * width, 
      Math.random() * 100 + 600, 
      Math.random() * 100
    ))
    setTimeout(fireworkGenerator, 1000 * Math.random())
  }
  fireworkGenerator()


  let count = 0
  let frame = () => {
    count++
    console.log(count)

    // 天空
    sky.draw()

    // 星星
    stars.blink()
    stars.draw()

    // 流星
    meteors.forEach((meteor, index, arr) => {
      meteor.flow()
      meteor.draw()
      if (meteor.x < 0 || meteor.y > height) {
        arr.splice(index, 1)
      }
    })
    // 烟花
    fireworks.forEach((firework, index, arr) => {
      firework.move()
      firework.draw()
    })

    requestAnimationFrame(frame)
  }
  frame()
})()