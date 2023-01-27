const { lerp } = require('canvas-sketch-util/math')
const palettes = require('nice-color-palettes')
const random = require('canvas-sketch-util/random')

// Noise Functions - pass a value in and get a value out between -1 and 1. 
// In contrast to random functions the value we pass in is relative to the output and if we pass in X it will always return Y.
// This means that the particles that are create undulate from one to the other.

// Look into deterministic randomness, is useful for creating a seed which can then be used across different displays.
// If you put a value into a random function it will always return the same value

const canvas = document.getElementById('canvas')
const c = canvas.getContext('2d')
canvas.width = innerWidth*0.9
let width = canvas.width
canvas.height = innerHeight*0.9
let height = canvas.height
// c.globalCompositeOperation = "destination-over";

addEventListener('resize', () => {
    width = innerWidth*0.9
    height = innerHeight*0.9
    draw()
})

function draw() {
    // c.fillStyle = random.pick(palettes).slice(0,1)
    c.fillStyle = '#F9F6EE'
    c.fillRect(0,0, width, height)

    const palette = random.shuffle(random.pick(palettes)).slice(0,5)

    const createGrid = () => {
        const points = []
        const count = 50
        for (let x = 0; x < count; x++){
            for (let y = 0; y < count; y++){
                const u = count <= 1? 0.5 : x / (count-1)
                const v = count <= 1? 0.5 : y / (count-1)
                // (count-1) otherwise u coordinate would never = 1 causing render to be off center
                // count <= 1? otherwise when count=1 nothing would be shown. 0.5 is middle of u/v value so renders in center

                const radius = Math.abs(random.noise2D(u,v))*50
                //Noise function

                points.push({
                    position: [ u, v ],
                    // radius: Math.abs(random.gaussian()*0.01*width),
                    radius,
                    colour: random.pick(palette)
                })
            }}
            return points
        };


    const points = createGrid().filter(() => Math.random() > 0.5 );
    //filter out the some of the points if random is > 0.5
    //look at using different random number types
    //can use a deterministic seed to sync up different art pieces / screens. will allways return the same random values

    points.forEach(data => {
        //destructure the data object
        const { position, radius, colour } = data
        let [ u, v ] = position

        console.log({u,v})

        //using liner interppolation to create a margin - could be helpful for art pieces
        //using padding css on html might be easier
        const margin = 100
        u = lerp(margin, width - margin, u)
        v = lerp(margin, height - margin, v)

        console.log({u,v})




        // c.save()
        c.fillStyle = 'black';
        c.font = `${radius}px "Arial"`;
        c.translate(u,v) //translate to point u,v on the canvas
        c.fillRect(u,v,radius,radius)
        c.fillText("...", 0, 0); //draw the letter 
        c.rotate(1) //rotates the canvas by 1 radian
        // c.restore()

      

        // c.beginPath()
        // c.arc(u, v, radius, 0, Math.PI * 2, false)
        // // c.fillRect(u, v, -u, v)
        // // c.strokeStyle = 'black'
        // c.fillStyle = colour
        // c.lineWidth = 2
        // // c.stroke()
        // c.fill()
        // c.closePath()

       

     


    })
}

draw()



