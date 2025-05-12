let angle = 0
let elements = []
let fade = 255
let timer = 0
let MAX_TIME = 300

function setup() {
  const canvas = createCanvas(windowWidth, windowHeight)
  canvas.parent('canvas-holder')
  background(0)
  textFont('monospace')
  textSize(16)
  textAlign(CENTER, CENTER)

  if (window.cid) {
    for (let i = 0; i < window.cid.length; i++) {
      const char = window.cid.charCodeAt(i)
      const radius = random(50, width / 2)
      const speed = random(0.005, 0.02)
      const col = color((char * 3) % 255, (char * 5) % 255, (char * 7) % 255)
      elements.push({ radius, speed, angleOffset: angle, color: col })
    }
  }
}

function draw() {
  background(0, 20)
  translate(width / 2, height / 2)

  for (let el of elements) {
    let x = el.radius * cos(angle + el.angleOffset)
    let y = el.radius * sin(angle + el.angleOffset)
    fill(el.color)
    noStroke()
    ellipse(x, y, 8)
    el.angleOffset += el.speed
  }

  timer++
  if (timer > MAX_TIME) {
    noLoop()
    clear()
    document.getElementById('canvas-holder').innerHTML = '<p style="color:white;text-align:center;">Tu intervención ha desaparecido.</p>'
  }
}
