const BLACK = 0
const WHITE = 255

const arrows = []
let OFFSET

class Arrow {
    constructor(rph, len) {
        this.rph = rph
        this.len = len
    }

    draw() {
        const now = Date.now() / 1000 + OFFSET
        const angle = now / 180 * PI / 10 * this.rph
        const radius = min(width, height) * 0.5 * 0.8 * this.len
        const x = radius * cos(angle)
        const y = radius * sin(angle)
        stroke(WHITE, 100)
        strokeWeight(16)
        line(0, 0, x, y)

    }
}

function setup() {
    createCanvas(window.innerWidth, window.innerHeight)
    arrows.push(new Arrow(60, 1))
    arrows.push(new Arrow(1, 0.75))
    arrows.push(new Arrow(1/12, 0.5))
    OFFSET = random(60 * 60 * 24)

    setInterval(() => {
        const now = new Date((Date.now() / 1000 + OFFSET) * 1000)
        console.log(`${now.getUTCHours()}:${now.getUTCMinutes()}:${now.getUTCSeconds()}`)
    }, 1000)
}

function draw() {
    background(BLACK)
    translate(width/2, height/2)
    rotate(-HALF_PI)
    noFill()
    circle(0, 0, min(width, height) * 0.9)
    arrows.forEach(arrow => arrow.draw())
}
