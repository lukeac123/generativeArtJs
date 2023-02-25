const { lerp } = require('canvas-sketch-util/math')
const palettes = require('nice-color-palettes')
const random = require('canvas-sketch-util/random')
import { defineCanvas } from '../utils'

const {ctx, ctxWidth, ctxHeight} = defineCanvas(innerWidth*0.8, innerHeight*0.8 )
addEventListener('load', draw)
addEventListener('resize', draw)


function draw() {
    ctx.fillStyle = '#F9F6EE'
    ctx.fillRect(0,0, ctxWidth, ctxHeight)

    const palette = random.shuffle(random.pick(palettes)).slice(0,5)

    const createGrid = () => {
        const points = []
        const count = 100
        for (let x = 0; x < count; x++){
            const rectLength = (random.gaussian()*0.01*ctxWidth)*10;
            const rectWidth = (random.gaussian()*0.01*ctxWidth)*10;
            // const rectWidth = Math.abs(random.noise2D(x,v1))*5
            console.log(rectWidth)
            points.push({
                rectU: 0.5,
                rectV: 0.5,
                rectLength,
                rectWidth,
                colour: random.pick(palette)
                })
            }
            return points
        };

    const points = createGrid()
    points.forEach(data => {
        let { rectU, rectV, rectLength, rectWidth, colour } = data

        const marginWidth = ctxWidth*0.9;
        const marginHeight = ctxHeight*0.9 
        rectU = lerp(marginWidth, ctxWidth - marginWidth, rectU)
        rectV = lerp(marginHeight, ctxHeight - marginHeight, rectV)

        ctx.lineWidth = 2
        ctx.translate(0,0)
        ctx.fillStyle = colour
        ctx.strokeStyle = 'black'
        ctx.fillRect(rectU,rectV,rectWidth,rectLength)
        ctx.strokeRect(rectU,rectV,rectWidth,rectLength)        
    })
}


