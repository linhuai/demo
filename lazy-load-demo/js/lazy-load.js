(function () {
  class LazyLoad {
    constructor (options = {}) {
      this.dataLazySrc = options.dataSet || 'data-lazy-src'
      this.images = getElementByAttr('img', this.dataLazySrc)
      this.observer = null
      this.init()

      function getElementByAttr (tag, attr, value) {
        let elements = Array.from(document.querySelectorAll(tag))
        let result = elements.filter(element => {
          if (value) {
            return element.getAttribute(attr) === value
          } else {
            return element.getAttribute(attr)
          }
        })
        return result
      }
    }
    init () {
      let observerOptions = {}
      this.observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          let target = entry.target,
              dataLazySrc = this.dataLazySrc,
              imageSrc = target.getAttribute(dataLazySrc)

          if (entry.intersectionRatio === 0) return false

          if (target.tagName.toLowerCase() === 'img') {
            target.src = imageSrc
          } else {
            target.style.backgroundImage = `url('${imageSrc}')`
          }
          this.observer.unobserve(target)
          target.removeAttribute(dataLazySrc)
        })
      }, observerOptions)

      this.images.forEach(image => {
        this.observer.observe(image)
      })
    }
  }

  window.LazyLoad = LazyLoad
})()