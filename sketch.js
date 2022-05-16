const BLACK = 0
const WHITE = 255

const arrows = []

class Arrow {
    constructor(rph, len) {
        this.rph = rph
        this.len = len
    }

    draw() {
        const angle = Date.now() / 1000 / 180 * PI / 10 * this.rph
        const radius = min(width, height) * 0.5 * 0.8 * this.len
        const x = radius * cos(angle)
        const y = radius * sin(angle)
        stroke(WHITE)
        strokeWeight(16)
        line(0, 0, x, y)
    }
}

function setup() {
    createCanvas(window.innerWidth, window.innerHeight)
    // arrows.push(new Arrow(60, 1))
    arrows.push(new Arrow(1, 0.75))
    arrows.push(new Arrow(1/24, 0.5))
}

function draw() {
    background(BLACK)
    translate(width/2, height/2)
    rotate(-HALF_PI)
    arrows.forEach(arrow => arrow.draw())
}
