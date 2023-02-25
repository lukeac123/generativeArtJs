import { defineCanvas } from '../utils/utils'
import { Body } from '../utils/objects'

let bodies = []

const {ctx, ctxWidth, ctxHeight} = defineCanvas(innerWidth*0.8, innerHeight*0.8 )
ctx.globalCompositeOperation = "destination-over";
addEventListener('load', init)
addEventListener('resize', init)


function draw(){
  ctx.clearRect(0, 0, ctxWidth, ctxHeight); // clear canvas
  requestAnimationFrame(draw)
  bodies.forEach(object => {
   object.update()
   object.show()
  })
}

function init() {
  for (let i = 0; i < 10; i++) {
    bodies.push(new Body (ctx, (1/i)*ctxWidth, 100, 10, 'blue'))
  }
  draw()
}
