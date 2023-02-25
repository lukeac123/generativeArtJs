const { lerp } = require('canvas-sketch-util/math')
const palettes = require('nice-color-palettes')
const random = require('canvas-sketch-util/random')

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
    // draw()
})

const image = new Image();
image.src = "src/sketches/brianna-ghey.png"
image.addEventListener("load", () => {
  ctx.drawImage(image, 0, 0, 233, 320);

  const imageData = ctx.getImageData(10, 20, 80, 230);
  console.log(imageData)
  ctx.putImageData(imageData, 260, 0);
  ctx.putImageData(imageData, 380, 50);
  ctx.putImageData(imageData, 500, 100);
});


// function draw() {

//     const palette = random.shuffle(random.pick(palettes)).slice(0,5)

//     const createGrid = () => {
//         const points = []
//         const count = 50
//         for (let x = 0; x < count; x++){
//             for (let y = 0; y < count; y++){
//                 const u = count <= 1? 0.5 : x / (count-1)
//                 const v = count <= 1? 0.5 : y / (count-1)
//                 const roatation = 1
//                 // (count-1) otherwise u coordinate would never = 1 causing render to be off center
//                 // count <= 1? otherwise when count=1 nothing would be shown. 0.5 is middle of u/v value so renders in center

//                 const radius = Math.abs(random.noise2D(u,v))*50
//                 //Noise function

//                 points.push({
//                     position: [ u, v ],
//                     roatation, 
//                     // radius: Math.abs(random.gaussian()*0.01*width),
//                     radius,
//                     colour: random.pick(palette)
//                 })
//             }}
//             return points
//         };


//     const points = createGrid().filter(() => Math.random() > 0.5 );
//     //filter out the some of the points if random is > 0.5
//     //look at using different random number types
//     //can use a deterministic seed to sync up different art pieces / screens. will allways return the same random values

//     points.forEach(data => {
//         //destructure the data object
//         const { position, radius, colour, roatation } = data
//         let [ u, v ] = position

//         const margin = 100
//         u = lerp(margin, width - margin, u)
//         v = lerp(margin, height - margin, v)

//         c.save()
//         c.fillStyle = 'black';
//         c.font = `${radius}px "Arial"`;
//         c.translate(u,v) //translate to point u,v on the canvas
//         // c.fillRect(u,v,radius,radius)
//         c.fillText("A", 0, 0); //draw the letter 
//         c.rotate(roatation) //rotates the canvas by 1 radian
//         c.restore()

//     })
// }

// draw()



