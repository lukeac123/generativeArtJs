const c = canvas.getContext('2d')
canvas.width = innerWidth - 20
const canvasWidth = canvas.width
canvas.height = innerHeight - 20
const canvasHeight = canvas.height
c.globalCompositeOperation = "destination-over";

addEventListener('resize', () => {
  canvas.width = innerWidth - 20
  canvas.height = innerHeight - 20
  init()
})

function init() {
  for (let i = 0; i < 10; i++) {
    objects.push(new Object (i*100, 100, 10, 'blue'))
  }
  draw()
}

let objects = []

function draw(){
  requestAnimationFrame(draw)
  c.clearRect(0, 0, canvasWidth, canvasHeight); // clear canvas
  objects.forEach(object => {
   object.update()
   object.show()
  })
}


init()




//Can the objects be kept in a different file - maybe these can be converted into react components ?
//Would using react components cause any issues ?

function Object(x, y, radius, color){
  this.maybePositive = Math.random() < 0.5 ? -1 : 1
  this.radians = Math.random()*Math.PI*2;
  this.velocity = 0.01 ;
  this.distanceFromCenter = {
    x: (Math.random() < 0.5 ? -1 : 1)*Math.random()*10,
    y: (Math.random() < 0.5 ? -1 : 1)*Math.random()*10
  }
  this.x = x
  this.y = y
  this.radius = radius
  this.color = color

  this.update = () => {
    this.radians += this.velocity;
    this.x = x + Math.cos(this.radians) * radius + this.distanceFromCenter.x;
    this.y = y + Math.sin(this.radians) * radius + this.distanceFromCenter.y;
  }

  this.show = () => {
    c.beginPath()
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    c.fillStyle = this.color
    c.strokeStyle = 'red'
    c.fill()
    c.stroke()
    c.closePath()
  }
}




  // for (let i = 0; i < canvasWidth; i++) {
  //   for (let j = 0; j < canvasHeight; j++) {
  //     c.fillStyle = `rgb(${Math.floor(255 - 42.5 * i)}, ${Math.floor(255 - 42.5 * j)}, 0)`;
  //     c.fillRect(j * 100, i * 100, 100, 100);
  //   }
  // }



          // c.beginPath();
        // const x = 100; // x coordinate
        // const y = 100; // y coordinate
        // const radius = 20; // Arc radius
        // const startAngle = 0; // Starting point on circle
        // const endAngle = Math.PI*2; // End point on circle
        // const counterclockwise = true; // clockwise or counterclockwise
        // c.arc(x, y, radius, startAngle, endAngle, counterclockwise);
        // c.lineWidth = 1;
        // c.strokeStyle = 'black';
        // c.fill();

        // c.moveTo(75, 50);
        // c.lineTo(100, 75);
        // c.lineTo(100, 25);
        // c.fill();
