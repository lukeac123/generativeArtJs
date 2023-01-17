const canvas = document.getElementById('canvas')
const c = canvas.getContext('2d')
canvas.width = innerWidth*0.9
let width = canvas.width
canvas.height = innerHeight*0.9
let height = canvas.height
// c.globalCompositeOperation = "destination-over";

function lerp( a, b, alpha ) {
    return a + alpha * (b-a)
   }
    
addEventListener('resize', () => {
    width = innerWidth*0.9
    height = innerHeight*0.9
    draw()
})

function draw() {
    c.fillStyle = 'brown'
    c.fillRect(0,0, width, height)

    const createGrid = () => {
        const points = []
        const count = 10
        for (let x = 0; x < count; x++){
            for (let y = 0; y < count; y++){
                const u = count <= 1? 0.5 : x / (count-1)
                const v = count <= 1? 0.5 : y / (count-1)
                // (count-1) otherwise u coordinate would never = 1 causing render to be off center
                // count <= 1? otherwise when count=1 nothing would be shown. 0.5 is middle of u/v value so renders in center

                points.push({
                    position: [ u, v ],
                    radius: Math.random()*width*0.05
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

        //using liner interppolation to create a margin - could be helpful for art pieces
        //using padding css on html might be easier
        const margin = 200
        u = lerp(margin, width - margin, u)
        v = lerp(margin, height - margin, v)

        c.beginPath()
        c.arc(u, v, radius, 0, Math.PI * 2, false)
        c.strokeStyle = 'black'
        c.fillStyle = 'purple'
        c.lineWidth = 2
        c.stroke()
        c.fill()
        c.closePath()


    })
}

draw()



