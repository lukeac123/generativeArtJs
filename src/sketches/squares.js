const { lerp } = require('canvas-sketch-util/math')
const palettes = require('nice-color-palettes')
const random = require('canvas-sketch-util/random')

const canvas = document.getElementById('canvas')
canvas.mixBlendMode = 'overlay'
const ctx = canvas.getContext('2d')
canvas.width = innerWidth*0.9
let width = canvas.width
canvas.height = innerHeight*0.9
let height = canvas.height

addEventListener('resize', () => {
    width = innerWidth*0.9
    height = innerHeight*0.9
    draw()
})

function draw() {
    ctx.fillStyle = '#F9F6EE'
    ctx.fillRect(0,0, width, height)
    ctx.globalAlpha = 1

    const palette = random.shuffle(random.pick(palettes)).slice(0,5)

    const createGrid = () => {
        const points = []
        const count = 100
        for (let x = 0; x < count; x++){
            const rectLength = (random.gaussian()*0.01*width)*10;
            const rectWidth = (random.gaussian()*0.01*width)*10;
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

        const marginWidth = width*0.9;
        const marginHeight = height*0.9 
        rectU = lerp(marginWidth, width - marginWidth, rectU)
        rectV = lerp(marginHeight, height - marginHeight, rectV)

        ctx.lineWidth = 2
        ctx.translate(0,0)
        ctx.fillStyle = colour
        ctx.strokeStyle = 'black'
        ctx.fillRect(rectU,rectV,rectWidth,rectLength)
        ctx.strokeRect(rectU,rectV,rectWidth,rectLength)        
    })
}

draw()



