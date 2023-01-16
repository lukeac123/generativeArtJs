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
    c.fillStyle = 'gray'
    c.fillRect(0,0, width, height)

    const createGrid = () => {
        const points = []
        const count = 5 
        for (let x = 0; x < count; x++){
            for (let y = 0; y < count; y++){
                const u = x / count
                const v = y / count
                points.push([ u, v ])
            }}
            return points
        };


    const points = createGrid()
    points.forEach(([ u, v ]) => {
        u = u*width
        v = v*height

        c.beginPath()
        c.arc(u, v, 100, 0, Math.PI * 2, false)
        c.fillStyle = 'blue'
        c.strokeStyle = 'red'
        c.fill()
        c.stroke()
        c.closePath()


    })
}

draw()



