
class Body {
    constructor(ctx, x, y, radius, color) {
      this.maybePositive = Math.random() < 0.5 ? -1 : 1;
      this.radians = Math.random() * Math.PI * 2;
      this.velocity = 0.01;
      this.distanceFromCenter = {
        x: (Math.random() < 0.5 ? -1 : 1) * Math.random() * 10,
        y: (Math.random() < 0.5 ? -1 : 1) * Math.random() * 10
      };
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.color = color;
  
      this.update = () => {
        this.radians += this.velocity;
        this.x = x + Math.cos(this.radians) * radius + this.distanceFromCenter.x;
        this.y = y + Math.sin(this.radians) * radius + this.distanceFromCenter.y;
      };
  
      this.show = () => {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.strokeStyle = 'red';
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
      };
    }
  }












module.exports = { Body }