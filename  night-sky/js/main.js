(function () {
  let canvas = document.querySelector('#canvas')
  let ctx = canvas.getContext('2d')
  
  let width = window.innerWidth
  let height = window.innerHeight

  canvas.width = width
  canvas.height = height

  let sky = new Sky(ctx, width, height)
  let fireworks = new Fireworks(ctx, 100, height, 400)

  let count = 0
  let frame = () => {
    count++
    console.log(count)
    sky.draw()

    fireworks.move()
    fireworks.draw()

    requestAnimationFrame(frame)
  }
  frame()
})()