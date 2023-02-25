//this should probably be variables that will remain constant across the projects 
//could pass in parameters to enable customisation, e.g height, width, global alpha, context (2d / 3d), blend mode

function defineCanvas(canvasWidth, canvasHeight) {
  const canvas = document.getElementById('canvas')
  canvas.mixBlendMode = 'overlay'
  const ctx = canvas.getContext('2d')
  canvas.width = canvasWidth
  let ctxWidth = canvas.width
  canvas.height = canvasHeight
  let ctxHeight = canvas.height
  ctx.globalAlpha = 1
  return {ctx, ctxWidth, ctxHeight}
}


function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function randomColor(colors) {
  return colors[Math.floor(Math.random() * colors.length)]
}

function distance(x1, y1, x2, y2) {
  const xDist = x2 - x1
  const yDist = y2 - y1

  return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2))
}

module.exports = { defineCanvas, randomIntFromRange, randomColor, distance }
