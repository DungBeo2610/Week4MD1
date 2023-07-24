class Rectangle {
    constructor(x, y, width, height, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }


    draw(ctx) {
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }
}

const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

const myRectangle = new Rectangle(50, 50, 150, 100, '#00FF00');
myRectangle.draw(ctx);