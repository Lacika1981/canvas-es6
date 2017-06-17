const c = document.querySelector("#c");
const ctx = c.getContext("2d");

class Path {
    constructor(x, y, width, height, ctx) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.ctx = ctx;
    }
};

class Rectangle extends Path {
    constructor(x, y, width, height, ctx) {
        super();
        ctx.beginPath();
        ctx.moveTo(x, y);
        x = x + width;
        ctx.lineTo(x, y);
        y = y + height;
        ctx.lineTo(x, y);
        x = x - width;
        ctx.lineTo(x, y);
        ctx.strokeStyle = "black";
        ctx.closePath();
        ctx.stroke();
    }
};

class Triangle extends Path {
    constructor(x, y, width, height, ctx, strokeT) {
        super();
        this.strokeT = strokeT;
        ctx.beginPath();
        ctx.moveTo(x, y);
        x = x + width;
        ctx.lineTo(x, y);
        y = y + height;
        ctx.lineTo(x, y);
        ctx.strokeStyle = strokeT;
        ctx.closePath();
        ctx.stroke();
    }
    
    fillTri() {
        ctx.fillStyle = "green";
        ctx.fill();
    }
};

const rect = new Rectangle(200, 200, 200, 200, ctx);
const tri = new Triangle(250, 250, 100, 100, ctx, "red");
tri.fillTri();