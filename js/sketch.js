let palabras = [
  "transitar", "efímero", "presencia", "desaparición", "fragmento", "gesto",
  "archivo", "anonimato", "huella", "memoria", "acto", "silencio", "vacío",
  "intersticio", "suspensión", "ritmo", "latencia", "inestabilidad", "flujo",
  "borrado", "cuerpo", "situación", "residuo", "escucha", "latido", "resonancia",
  "desvío", "ocultamiento", "desequilibrio", "mínimo", "rastros", "invisibilidad",
  "apertura", "intervalo", "eco", "intención", "vulnerabilidad", "reversibilidad",
  "autonomía", "inserción", "interferencia", "modulación", "constelación",
  "coexistencia", "reiteración", "pliegue", "vacilación", "gestualidad", "disonancia"
]

let textos = []

function setup() {
  createCanvas(windowWidth, windowHeight)
  textFont('monospace')
  textSize(24)
  textAlign(CENTER, CENTER)
  noStroke()
  fill(255)
  background(0)
}

function draw() {
  background(0, 30)

  for (let i = textos.length - 1; i >= 0; i--) {
    let t = textos[i]
    text(t.palabra, t.x, t.y)
    t.alpha -= 2
    if (t.alpha <= 0) {
      textos.splice(i, 1)
    } else {
      fill(255, t.alpha)
    }
  }
}

function mouseMoved() {
  mostrarPalabra()
}

function mousePressed() {
  mostrarPalabra()
}

function mostrarPalabra() {
  let palabra = random(palabras)
  textos.push({
    palabra: palabra,
    x: random(width),
    y: random(height),
    alpha: 255
  })
}
