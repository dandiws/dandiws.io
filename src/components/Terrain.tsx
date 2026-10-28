import { createSignal, For, onMount, type JSX } from 'solid-js'

type TerrainConfig = {
  terrain: { scale: number; detail: number; levels: number; indexEvery: number; seed: number }
  glyphs: { fontSize: number; opacity: number; tone: number; stipple: number; shading: number; ramp: string; lines: string; indexChar: string; lowChar: string; summit: string }
  brush: { radius: number; strength: number; fadeDelay: number; fadeSpeed: number; boldTrail: boolean }
  ripple: { speed: number; damping: number }
  scatter: { strength: number }
  gravity: { strength: number; radius: number; swirl: number; horizon: number; glow: number }
}
type TerrainApi = { size: () => void; refresh: () => void; poke: () => void; pulse: (clientX: number, clientY: number) => void; release: () => void }
type TerrainOptions = { seedOffset: number; radiusScale: number; opacityScale: number }
type Control = { p: string; l: string; min?: number; max?: number; step?: number; t?: 'text' | 'check'; exact?: number }
type ControlGroup = [string, Control[]]
const defaults: TerrainConfig = {
  terrain: { scale: 2.5, detail: 0, levels: 21, indexEvery: 5, seed: 19 },
  glyphs: {
    fontSize: 7,
    opacity: 0.85,
    tone: 121,
    stipple: 0.9,
    shading: 1,
    ramp: '.,:;+*',
    lines: '-\\|/',
    indexChar: '=',
    lowChar: '~',
    summit: '+'
  },
  brush: { radius: 85, strength: 1, fadeDelay: 3.5, fadeSpeed: 1, boldTrail: true },
  ripple: { speed: 1.6, damping: 0.988 },
  scatter: { strength: 1.75 },
  gravity: { strength: 2, radius: 220, swirl: 1.4, horizon: 12, glow: 1 }
}

const schema: ControlGroup[] = [
  ['Terrain', [
    { p: 'terrain.scale', l: 'Scale', min: 0.4, max: 2.5, step: 0.05 },
    { p: 'terrain.detail', l: 'Fine detail', min: 0, max: 2, step: 0.05 },
    { p: 'terrain.levels', l: 'Contour levels', min: 6, max: 40, step: 1 },
    { p: 'terrain.indexEvery', l: 'Heavy line every n levels', min: 2, max: 10, step: 1 },
    { p: 'terrain.seed', l: 'Seed', min: 1, max: 99, step: 1 }
  ]],
  ['Glyphs', [
    { p: 'glyphs.fontSize', l: 'Character size (px)', min: 7, max: 18, step: 1 },
    { p: 'glyphs.opacity', l: 'Opacity', min: 0.1, max: 1, step: 0.01 },
    { p: 'glyphs.tone', l: 'Tone (gray level)', min: 80, max: 255, step: 1 },
    { p: 'glyphs.stipple', l: 'Stipple density', min: 0, max: 3, step: 0.05 },
    { p: 'glyphs.shading', l: 'Relief shading', min: 0, max: 3, step: 0.05 },
    { p: 'glyphs.ramp', l: 'Stipple ramp, low to high', t: 'text', max: 12 },
    { p: 'glyphs.lines', l: 'Line glyphs, exactly 4 (flat, down-right, upright, up-right)', t: 'text', max: 4, exact: 4 },
    { p: 'glyphs.indexChar', l: 'Heavy flat line glyph', t: 'text', max: 1 },
    { p: 'glyphs.lowChar', l: 'Lowland flat line glyph', t: 'text', max: 1 },
    { p: 'glyphs.summit', l: 'Summit glyph', t: 'text', max: 1 }
  ]],
  ['Brush', [
    { p: 'brush.radius', l: 'Brush & scatter radius (px)', min: 20, max: 200, step: 1 },
    { p: 'brush.strength', l: 'Paint strength', min: 0.2, max: 3, step: 0.05 },
    { p: 'brush.fadeDelay', l: 'Trail hold (seconds)', min: 0, max: 12, step: 0.5 },
    { p: 'brush.fadeSpeed', l: 'Fade speed', min: 0.2, max: 4, step: 0.1 },
    { p: 'brush.boldTrail', l: 'Bold trail', t: 'check' }
  ]],
  ['Black hole', [
    { p: 'gravity.strength', l: 'Pull strength', min: 0, max: 2, step: 0.05 },
    { p: 'gravity.radius', l: 'Pull radius (px)', min: 80, max: 400, step: 5 },
    { p: 'gravity.swirl', l: 'Swirl (twist)', min: 0, max: 3, step: 0.05 },
    { p: 'gravity.horizon', l: 'Event horizon radius (px)', min: 0, max: 40, step: 1 },
    { p: 'gravity.glow', l: 'Ring glow', min: 0, max: 1.5, step: 0.05 }
  ]],
  ['Ripple & scatter', [
    { p: 'ripple.speed', l: 'Ripple speed', min: 0.2, max: 2, step: 0.05 },
    { p: 'ripple.damping', l: 'Ripple persistence', min: 0.95, max: 0.999, step: 0.001 },
    { p: 'scatter.strength', l: 'Scatter strength', min: 0, max: 3, step: 0.05 }
  ]]
]

function clone<T>(value: T): T {
  return JSON.parse(JSON.stringify(value))
}

function merge(target: Record<string, unknown>, source: unknown): void {
  for (const key in target) {
    const nextValue = source && typeof source === 'object' ? (source as Record<string, unknown>)[key] : undefined
    if (nextValue !== undefined) {
      if (typeof target[key] === 'object') merge(target[key] as Record<string, unknown>, nextValue)
      else if (typeof nextValue === typeof target[key]) target[key] = nextValue
    }
  }
}

function Terrain(): JSX.Element {
  let config: TerrainConfig = clone(defaults)
  const [currentConfig, setCurrentConfig] = createSignal(config)
  const [json, setJson] = createSignal(JSON.stringify(config, null, 2))
  const [status, setStatus] = createSignal('')
  const [open, setOpen] = createSignal(false)
  const [panel, setPanel] = createSignal<HTMLElement>()
  const [textarea, setTextarea] = createSignal<HTMLTextAreaElement>()
  let terrains: TerrainApi[] = []
  let changeTimer: ReturnType<typeof setTimeout>
  let refreshTerrain: (path: string) => void = () => {}

  function value(path: string): string | number | boolean {
    const [group, key] = path.split('.')
    return (config as unknown as Record<string, Record<string, string | number | boolean>>)[group][key]
  }

  function sync() {
    setJson(JSON.stringify(config, null, 2))
  }

  function say(message: string): void {
    setStatus(message)
    clearTimeout(changeTimer)
    changeTimer = setTimeout(() => setStatus(''), 2200)
  }

  function setValue(path: string, nextValue: string | number | boolean): void {
    const [group, key] = path.split('.')
    config = clone(config)
    ;(config as unknown as Record<string, Record<string, string | number | boolean>>)[group][key] = nextValue
    setCurrentConfig(config)
    refreshTerrain(path)
    sync()
  }

  function applySettings(settings: unknown): void {
    const nextConfig = clone(defaults)
    merge(nextConfig as unknown as Record<string, unknown>, settings)
    for (const [, fields] of schema) {
      for (const definition of fields) {
        const [section, key] = definition.p.split('.')
        const nextValue = nextConfig[section][key]
        if (definition.t === 'text') {
          if (typeof nextValue !== 'string' || !nextValue || definition.max !== undefined && nextValue.length > definition.max || definition.exact && nextValue.length !== definition.exact) throw new Error('Invalid settings')
        } else if (definition.t === 'check') {
          if (typeof nextValue !== 'boolean') throw new Error('Invalid settings')
        } else if (typeof nextValue !== 'number' || !Number.isFinite(nextValue) || definition.min !== undefined && nextValue < definition.min || definition.max !== undefined && nextValue > definition.max) {
          throw new Error('Invalid settings')
        }
      }
    }
    config = nextConfig
    setCurrentConfig(config)
    sync()
    terrains.forEach((terrain) => terrain.size())
  }

  function copySettings() {
    const text = JSON.stringify(config, null, 2)
    function fallback() {
      setJson(text)
      textarea()?.select()
      try {
        say(document.execCommand('copy') ? 'Copied' : 'Select and copy manually')
      } catch {
        say('Select and copy manually')
      }
    }
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(() => say('Copied'), fallback)
    else fallback()
  }

  onMount(() => {
    const terrainsList: TerrainApi[] = []
    const pointer = { x: 0, y: 0, on: false, down: false, time: 0 }
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

    function poke() {
      terrainsList.forEach((terrain) => terrain.poke())
    }

    function handlePointerMove(event) {
      if (reducedMotion.matches) return
      if (event.target.closest && event.target.closest('#panel, #tbtn')) {
        if (pointer.on) {
          pointer.on = false
          poke()
        }
        return
      }
      pointer.x = event.clientX
      pointer.y = event.clientY
      pointer.on = true
      pointer.time = performance.now()
      poke()
    }

    function handlePointerDown(event) {
      if (reducedMotion.matches) return
      if (event.target instanceof Element && event.target.closest('#panel, #tbtn')) return
      pointer.x = event.clientX
      pointer.y = event.clientY
      pointer.on = true
      pointer.time = performance.now()
      pointer.down = true
      terrainsList.forEach((terrain) => terrain.pulse(event.clientX, event.clientY))
    }

    function handlePointerUp(event) {
      const wasDown = pointer.down
      pointer.down = false
      if (wasDown) terrainsList.forEach((terrain) => terrain.release())
      if (event.pointerType !== 'mouse') {
        pointer.on = false
        poke()
      }
    }

    function handlePointerCancel() {
      const wasDown = pointer.down
      pointer.on = false
      pointer.down = false
      if (wasDown) terrainsList.forEach((terrain) => terrain.release())
      poke()
    }

    function handlePointerLeave() {
      pointer.on = false
      poke()
    }

    function handleMotionChange() {
      if (reducedMotion.matches) {
        pointer.on = false
        pointer.down = false
      }
      poke()
    }

    function hashNoise(x, y, z) {
      let hash = Math.imul(x, 374761393) + Math.imul(y, 668265263) + Math.imul(z, 1274126177)
      hash = Math.imul(hash ^ (hash >>> 13), 1274126177)
      return ((hash ^ (hash >>> 16)) >>> 0) / 4294967295
    }

    function smooth(value) {
      return value * value * (3 - 2 * value)
    }

    function noise(x, y, z) {
      const xi = Math.floor(x)
      const yi = Math.floor(y)
      const zi = Math.floor(z)
      const xf = smooth(x - xi)
      const yf = smooth(y - yi)
      const zf = smooth(z - zi)
      const interpolate = (start, end, amount) => start + (end - start) * amount
      return interpolate(
        interpolate(
          interpolate(hashNoise(xi, yi, zi), hashNoise(xi + 1, yi, zi), xf),
          interpolate(hashNoise(xi, yi + 1, zi), hashNoise(xi + 1, yi + 1, zi), xf),
          yf
        ),
        interpolate(
          interpolate(hashNoise(xi, yi, zi + 1), hashNoise(xi + 1, yi, zi + 1), xf),
          interpolate(hashNoise(xi, yi + 1, zi + 1), hashNoise(xi + 1, yi + 1, zi + 1), xf),
          yf
        ),
        zf
      )
    }

    function createTerrain(canvas: HTMLCanvasElement, options: TerrainOptions): TerrainApi {
      const context = canvas.getContext('2d')!
      let width
      let height
      let columns
      let rows
      let fontSize
      let cellWidth
      let cellHeight
      let pixelRatio
      let paint
      let wave
      let waveVelocity
      let stampTime
      let heightField
      let totalField
      let baseField
      let offsetX
      let offsetY
      let velocityX
      let velocityY
      let frameCount = 0
      let now = 0
      let visible = true
      let running = false
      let stampX = -9999
      let stampY = -9999
      let dirty = true
      let busy = true
      let smallScreen = false
      let gravityX = 0
      let gravityY = 0
      let gravityAmount = 0
      let brushScale = 1
      let brushScaleFrom = 1
      let brushScaleTo = 1
      let brushScaleStartedAt = 0
      let brushScaleDuration = 0
      let brushAnimating = false
      let pulseX = 0
      let pulseY = 0
      let pulseWaveSent = true

      function animateBrushScale(scale: number, timestamp: number, duration: number): void {
        brushScaleFrom = brushScale
        brushScaleTo = scale
        brushScaleStartedAt = timestamp
        brushScaleDuration = duration
        brushAnimating = true
      }

      function updateBrushScale(timestamp: number): number {
        if (!brushAnimating) return brushScale
        const progress = Math.min(1, (timestamp - brushScaleStartedAt) / brushScaleDuration)
        brushScale = brushScaleFrom + (brushScaleTo - brushScaleFrom) * smooth(progress)
        if (progress === 1) brushAnimating = false
        return brushScale
      }

      function stamp(x, y, radius, direction) {
        const amount = 0.075 * config.brush.strength
        const columnStart = Math.max(0, Math.floor((x - radius) / cellWidth))
        const columnEnd = Math.min(columns - 1, Math.ceil((x + radius) / cellWidth))
        const rowStart = Math.max(0, Math.floor((y - radius) / cellHeight))
        const rowEnd = Math.min(rows - 1, Math.ceil((y + radius) / cellHeight))
        for (let row = rowStart; row <= rowEnd; row++) {
          for (let column = columnStart; column <= columnEnd; column++) {
            const distance = Math.hypot(column * cellWidth + cellWidth / 2 - x, row * cellHeight + cellHeight / 2 - y)
            if (distance < radius) {
              const influence = 1 - distance / radius
              const index = row * columns + column
              const value = paint[index] + direction * influence * influence * amount
              paint[index] = value > 0.8 ? 0.8 : value < -0.6 ? -0.6 : value
              waveVelocity[index] += direction * influence * influence * 0.03
              stampTime[index] = now
            }
          }
        }
      }

      function pulse(clientX: number, clientY: number): void {
        const bounds = canvas.getBoundingClientRect()
        const x = clientX - bounds.left
        const y = clientY - bounds.top
        if (x < 0 || y < 0 || x > width || y > height) return
        pulseX = x
        pulseY = y
        animateBrushScale(0.55, performance.now(), 120)
        pulseWaveSent = false
        busy = true
        dirty = true
        start()
      }

      function release(): void {
        if (pulseWaveSent) return
        animateBrushScale(1, performance.now(), 350)
        sendPulseWave()
        pulseWaveSent = true
        busy = true
        dirty = true
        start()
      }

      function sendPulseWave(): void {
        const radius = Math.max(cellWidth, cellHeight) * 2
        const columnStart = Math.max(0, Math.floor((pulseX - radius) / cellWidth))
        const columnEnd = Math.min(columns - 1, Math.ceil((pulseX + radius) / cellWidth))
        const rowStart = Math.max(0, Math.floor((pulseY - radius) / cellHeight))
        const rowEnd = Math.min(rows - 1, Math.ceil((pulseY + radius) / cellHeight))
        for (let row = rowStart; row <= rowEnd; row++) {
          for (let column = columnStart; column <= columnEnd; column++) {
            const distance = Math.hypot(column * cellWidth + cellWidth / 2 - pulseX, row * cellHeight + cellHeight / 2 - pulseY)
            if (distance < radius) {
              const influence = 1 - distance / radius
              waveVelocity[row * columns + column] += influence * influence * 0.24
            }
          }
        }
      }

      function resize() {
        const bounds = canvas.getBoundingClientRect()
        width = bounds.width
        height = bounds.height
        pixelRatio = Math.min(devicePixelRatio || 1, 2)
        canvas.width = Math.round(width * pixelRatio)
        canvas.height = Math.round(height * pixelRatio)
        smallScreen = innerWidth < 700
        fontSize = config.glyphs.fontSize * (smallScreen ? 0.8 : 1)
        cellWidth = fontSize * 0.62
        cellHeight = fontSize * 1.25
        columns = Math.ceil(width / cellWidth) + 1
        rows = Math.ceil(height / cellHeight) + 1
        const size = columns * rows
        paint = new Float32Array(size)
        wave = new Float32Array(size)
        waveVelocity = new Float32Array(size)
        stampTime = new Float32Array(size)
        heightField = new Float32Array(size)
        totalField = new Float32Array(size)
        baseField = new Float32Array(size)
        offsetX = new Float32Array(size)
        offsetY = new Float32Array(size)
        velocityX = new Float32Array(size)
        velocityY = new Float32Array(size)
        frameCount = 0
        dirty = true
        context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)
        start()
      }

      function field(x, y, z) {
        const detail = config.terrain.detail
        const broad = noise(x, y, z) * 0.5
        const medium = noise(x * 2.1 + 7, y * 2.1 + 3, z * 1.3) * 0.26
        const fine = noise(x * 4.3 + 1, y * 4.3 + 9, z * 1.7) * 0.15 * detail
        const grain = noise(x * 8.9 + 5, y * 8.9 + 2, z * 2.1) * 0.09 * detail
        const ridge = 1 - Math.abs(noise(x * 0.7 + 30, y * 0.7 + 11, z * 0.8) * 2 - 1)
        const value = ((broad + medium + fine + grain) * 0.7 + ridge * ridge * 0.3 - 0.2) * 1.55
        return value < 0 ? 0 : value > 1 ? 1 : value
      }

      function frame(timestamp) {
        if (!visible) {
          running = false
          return
        }
        now = timestamp
        const pointerMoved = pointer.on && now - pointer.time < 100
        if (!pointerMoved && !busy && !dirty) {
          running = false
          return
        }

        const glyphs = config.glyphs
        const brush = config.brush
        const terrain = config.terrain
        const bounds = canvas.getBoundingClientRect()
        const pulseSize = updateBrushScale(timestamp)
        const radius = brush.radius * options.radiusScale * (smallScreen ? 0.8 : 1) * pulseSize
        const radiusSquared = radius * radius
        const direction = pointer.down && pointer.on ? -1 : 1
        if (pointer.on) {
          const targetX = pointer.x - bounds.left
          const targetY = pointer.y - bounds.top
          if (stampX < -9000) {
            stampX = targetX
            stampY = targetY
            stamp(stampX, stampY, radius * 0.55, direction)
          }
          const movementX = targetX - stampX
          const movementY = targetY - stampY
          const steps = Math.min(60, Math.ceil(Math.hypot(movementX, movementY) / Math.max(4, radius * 0.16)))
          for (let step = 1; step <= steps; step++) stamp(stampX + movementX * step / steps, stampY + movementY * step / steps, radius * 0.55, direction)
          stampX = targetX
          stampY = targetY
        } else {
          stampX = -9999
          stampY = -9999
        }
        busy = false
        if (brushAnimating) busy = true

        const gravity = config.gravity
        const gravityRadius = gravity.radius * (smallScreen ? 0.75 : 1)
        const targetGravity = pointer.on ? 1 : 0
        if (pointer.on) {
          const targetX = pointer.x - bounds.left
          const targetY = pointer.y - bounds.top
          if (gravityAmount < 0.01) {
            gravityX = targetX
            gravityY = targetY
          }
          gravityX += (targetX - gravityX) * 0.2
          gravityY += (targetY - gravityY) * 0.2
          if (Math.abs(targetX - gravityX) + Math.abs(targetY - gravityY) > 0.4) busy = true
        }
        gravityAmount += (targetGravity - gravityAmount) * 0.09
        if (Math.abs(targetGravity - gravityAmount) < 0.004) gravityAmount = targetGravity
        else busy = true

        const horizontalSpeed = Math.min(0.7, 0.2 * config.ripple.speed * Math.pow(14 / fontSize, 2))
        const verticalSpeed = horizontalSpeed * cellWidth * cellWidth / (cellHeight * cellHeight)
        const damping = config.ripple.damping
        const total = columns * rows
        for (let row = 1; row < rows - 1; row++) {
          for (let column = 1; column < columns - 1; column++) {
            const index = row * columns + column
            const value = wave[index]
            waveVelocity[index] = (waveVelocity[index] + (wave[index - 1] + wave[index + 1] - 2 * value) * horizontalSpeed + (wave[index - columns] + wave[index + columns] - 2 * value) * verticalSpeed) * damping
          }
        }
        for (let index = 0; index < total; index++) {
          let nextWave = wave[index] + waveVelocity[index]
          nextWave = nextWave > 0.5 ? 0.5 : nextWave < -0.5 ? -0.5 : nextWave
          if (nextWave < 0.002 && nextWave > -0.002 && waveVelocity[index] < 0.002 && waveVelocity[index] > -0.002) {
            nextWave = 0
            waveVelocity[index] = 0
          } else busy = true
          wave[index] = nextWave
        }

        context.clearRect(0, 0, width, height)
        context.font = `400 ${fontSize}px ${getComputedStyle(document.body).getPropertyValue('--mono')}`
        context.textAlign = 'center'
        context.textBaseline = 'middle'
        const tone = Math.round(glyphs.tone)
        context.fillStyle = `rgb(${tone},${tone},${tone - 3})`
        const scale = 0.0042 * terrain.scale * (smallScreen ? 0.9 * Math.min(1.5, 700 / width) : 1)
        const seed = terrain.seed + options.seedOffset
        const gain = glyphs.opacity * options.opacityScale * (smallScreen ? 0.8 : 1)
        const fade = 1 - 0.01 * brush.fadeSpeed
        const fadeDelay = brush.fadeDelay * 1000
        const scatter = 2.6 * config.scatter.strength

        for (let row = 0; row < rows; row++) {
          const baseY = row * cellHeight + cellHeight / 2
          for (let column = 0; column < columns; column++) {
            const index = row * columns + column
            const baseX = column * cellWidth + cellWidth / 2
            let paintValue = paint[index]
            if (paintValue !== 0 && now - stampTime[index] > fadeDelay) {
              paintValue *= fade
              if (paintValue > -0.003 && paintValue < 0.003) paintValue = 0
              paint[index] = paintValue
            }
            if (paintValue !== 0) busy = true
            const deltaX = baseX - stampX
            const deltaY = baseY - stampY
            const distanceSquared = deltaX * deltaX + deltaY * deltaY
            let movementX = velocityX[index]
            let movementY = velocityY[index]
            if (distanceSquared < radiusSquared && distanceSquared > 0.01) {
              const distance = Math.sqrt(distanceSquared)
              let influence = 1 - distance / radius
              influence *= influence * scatter
              movementX += deltaX / distance * influence
              movementY += deltaY / distance * influence
            }
            movementX = (movementX - offsetX[index] * 0.06) * 0.87
            movementY = (movementY - offsetY[index] * 0.06) * 0.87
            if (movementX > 0.01 || movementX < -0.01 || movementY > 0.01 || movementY < -0.01) busy = true
            else if (offsetX[index] < 0.2 && offsetX[index] > -0.2 && offsetY[index] < 0.2 && offsetY[index] > -0.2 && distanceSquared >= radiusSquared) {
              offsetX[index] = 0
              offsetY[index] = 0
              movementX = 0
              movementY = 0
            }
            offsetX[index] += movementX
            offsetY[index] += movementY
            velocityX[index] = movementX
            velocityY[index] = movementY
            if (frameCount === 0) baseField[index] = field(baseX * scale + seed * 17.3, baseY * scale, seed * 3.1)
            const rawHeight = baseField[index] + paintValue + wave[index]
            totalField[index] = rawHeight
            heightField[index] = rawHeight < 0 ? 0 : rawHeight > 1 ? 1 : rawHeight
          }
        }
        frameCount++

        const gravityStrength = gravity.strength * gravityAmount
        const horizon = gravity.horizon * gravityAmount
        if (gravityStrength > 0.004) {
          const columnStart = Math.max(0, Math.floor((gravityX - gravityRadius) / cellWidth))
          const columnEnd = Math.min(columns - 1, Math.ceil((gravityX + gravityRadius) / cellWidth))
          const rowStart = Math.max(0, Math.floor((gravityY - gravityRadius) / cellHeight))
          const rowEnd = Math.min(rows - 1, Math.ceil((gravityY + gravityRadius) / cellHeight))
          for (let row = rowStart; row <= rowEnd; row++) {
            for (let column = columnStart; column <= columnEnd; column++) {
              const deltaX = column * cellWidth + cellWidth / 2 - gravityX
              const deltaY = row * cellHeight + cellHeight / 2 - gravityY
              const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY)
              if (distance >= gravityRadius) continue
              const influence = 1 - distance / gravityRadius
              const expansion = 1 + gravityStrength * influence * influence * 3
              const twist = gravity.swirl * gravityAmount * influence * influence
              const cosine = Math.cos(twist)
              const sine = Math.sin(twist)
              const warpedX = gravityX + (deltaX * cosine - deltaY * sine) * expansion
              const warpedY = gravityY + (deltaX * sine + deltaY * cosine) * expansion
              let sampleColumn = (warpedX - cellWidth / 2) / cellWidth
              let sampleRow = (warpedY - cellHeight / 2) / cellHeight
              sampleColumn = sampleColumn < 0 ? 0 : sampleColumn > columns - 1.001 ? columns - 1.001 : sampleColumn
              sampleRow = sampleRow < 0 ? 0 : sampleRow > rows - 1.001 ? rows - 1.001 : sampleRow
              const left = Math.floor(sampleColumn)
              const top = Math.floor(sampleRow)
              const fractionX = sampleColumn - left
              const fractionY = sampleRow - top
              const index = top * columns + left
              const value = (totalField[index] * (1 - fractionX) + totalField[index + 1] * fractionX) * (1 - fractionY) + (totalField[index + columns] * (1 - fractionX) + totalField[index + columns + 1] * fractionX) * fractionY
              heightField[row * columns + column] = value < 0 ? 0 : value > 1 ? 1 : value
            }
          }
        }

        const ramp = glyphs.ramp || '.'
        const lineGlyphs = glyphs.lines.length === 4 ? glyphs.lines : '-\\|/'
        const indexChar = glyphs.indexChar || '='
        const lowChar = glyphs.lowChar || '~'
        const summitChar = glyphs.summit || '+'
        const levels = terrain.levels
        let index = 0
        for (let row = 0; row < rows; row++) {
          const baseY = row * cellHeight + cellHeight / 2
          for (let column = 0; column < columns; column++, index++) {
            const deltaX = column * cellWidth + cellWidth / 2 - gravityX
            const deltaY = baseY - gravityY
            const distance = gravityAmount > 0.004 ? Math.sqrt(deltaX * deltaX + deltaY * deltaY) : 9999
            const value = heightField[index]
            const contour = Math.floor(value * levels)
            const right = column < columns - 1 ? heightField[index + 1] : value
            const left = column > 0 ? heightField[index - 1] : value
            const below = row < rows - 1 ? heightField[index + columns] : value
            const above = row > 0 ? heightField[index - columns] : value
            const rightContour = Math.floor(right * levels)
            const lowerContour = Math.floor(below * levels)
            let character
            let alpha
            let bold = false
            const paintValue = paint[index]
            const displacement = Math.abs(paintValue) * 45 + Math.abs(wave[index]) * 70 + Math.abs(offsetX[index]) + Math.abs(offsetY[index])
            if (contour !== rightContour || contour !== lowerContour) {
              const angle = Math.atan2(right - left > -9 ? (right - left) / cellWidth : 0, -(below - above) / cellHeight)
              const orientationAngle = angle < 0 ? angle + Math.PI : angle
              const orientation = Math.round(orientationAngle / (Math.PI / 4)) % 4
              character = lineGlyphs[orientation]
              const lineLevel = Math.max(contour, contour !== rightContour ? rightContour : lowerContour)
              if (lineLevel % terrain.indexEvery === 0) {
                alpha = (0.72 + 0.28 * value) * gain
                bold = true
                if (orientation === 0) character = indexChar
              } else {
                alpha = (0.3 + 0.32 * value) * gain
                if (orientation === 0 && lineLevel < levels * 0.3) character = lowChar
              }
            } else {
              const randomValue = ((index * 2654435761) >>> 0) / 4294967296
              if (value > 0.74 && column > 0 && column < columns - 1 && row > 0 && row < rows - 1 && value > right && value > below && value >= left && value >= above) {
                character = summitChar
                alpha = 0.95 * gain
                bold = true
              } else {
                const shading = Math.max(0, (left - right) + (above - below) * 0.6) * 12 * glyphs.shading
                const density = (0.012 + 0.04 * value + Math.min(0.14, shading * 0.12)) * glyphs.stipple
                if (randomValue < density) {
                  character = ramp[Math.min(ramp.length - 1, Math.floor(value * ramp.length))]
                  alpha = (0.16 + 0.1 * Math.min(1, shading)) * gain
                } else if (distance < horizon * 2.8 && distance >= horizon && randomValue < 0.5) {
                  character = ramp[0]
                  alpha = 0.2 * gain
                } else continue
              }
            }
            if (distance < gravityRadius) {
              if (distance < horizon) continue
              const influence = 1 - distance / gravityRadius
              const ring = Math.exp(-Math.pow((distance - horizon * 1.7 - 4) / (horizon * 1.1 + 6), 2))
              alpha += gravity.glow * gravityAmount * (0.9 * ring + 0.25 * influence * influence)
              if (ring > 0.5) bold = true
            }
            alpha += Math.min(0.22, displacement / 90)
            context.globalAlpha = alpha > 1 ? 1 : alpha
            const x = column * cellWidth + cellWidth / 2 + offsetX[index]
            const y = baseY + offsetY[index]
            context.fillText(character, x, y)
            if (bold || brush.boldTrail && paintValue > 0.1) context.fillText(character, x + 0.5, y)
          }
        }
        context.globalAlpha = 1
        dirty = false
        if (!reducedMotion.matches && (pointer.on && now - pointer.time < 100 || busy || dirty)) requestAnimationFrame(frame)
        else running = false
      }

      function start() {
        if (!running && visible) {
          running = true
          requestAnimationFrame(frame)
        }
      }

      const api = {
        size: resize,
        refresh() {
          frameCount = 0
          dirty = true
          start()
        },
        poke() {
          dirty = true
          start()
        },
        pulse,
        release
      }
      resize()
      const resizeObserver = new ResizeObserver(resize)
      const intersectionObserver = new IntersectionObserver((entries) => {
        visible = entries[0].isIntersecting
        if (visible) {
          dirty = true
          start()
        }
      })
      resizeObserver.observe(canvas)
      intersectionObserver.observe(canvas)
      ;(document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve()).then(() => {
        dirty = true
        start()
      })
      return api
    }

    terrainsList.push(createTerrain(document.getElementById('land') as HTMLCanvasElement, { seedOffset: 0, radiusScale: 1, opacityScale: 1 }))
    terrainsList.push(createTerrain(document.getElementById('band') as HTMLCanvasElement, { seedOffset: 38, radiusScale: 0.82, opacityScale: 0.82 }))
    terrains = terrainsList
    refreshTerrain = (path) => {
      if (path === 'glyphs.fontSize') terrainsList.forEach((terrain) => terrain.size())
      else if (path.startsWith('terrain.')) terrainsList.forEach((terrain) => terrain.refresh())
      else poke()
    }

    const nav = document.getElementById('nav') as HTMLElement
    const updateNavigation = () => nav.classList.toggle('solid', scrollY > innerHeight * 0.6)
    window.addEventListener('scroll', updateNavigation, { passive: true })
    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    window.addEventListener('pointerdown', handlePointerDown)
    window.addEventListener('pointerup', handlePointerUp)
    window.addEventListener('pointercancel', handlePointerCancel)
    document.documentElement.addEventListener('pointerleave', handlePointerLeave)
    reducedMotion.addEventListener('change', handleMotionChange)
    document.addEventListener('keydown', (event) => {
      if (event.key !== 'Escape' || !open()) return
      setOpen(false)
      ;(document.getElementById('tbtn') as HTMLButtonElement).focus()
    })
    updateNavigation()
    sync()
  })

  return (
    <>
      {import.meta.env.DEV && <>
      <button id="tbtn" type="button" aria-expanded={open()} aria-controls="panel" onClick={() => {
        const isOpen = !open()
        setOpen(isOpen)
        panel()?.classList.toggle('open', isOpen)
        if (isOpen) panel()?.querySelector('input')?.focus()
      }}>{open() ? 'Close' : 'Terrain controls'}</button>
      <aside id="panel" ref={setPanel} aria-label="ASCII terrain controls" aria-hidden={!open()} inert={!open()} classList={{ open: open() }}>
        <div id="ctrls">
          <For each={schema}>{([group, fields]) => (
            <>
              <h3>{group}</h3>
              <For each={fields}>{(definition) => {
                const [section, key] = definition.p.split('.')
                return (
                  <label class="control-field" for={`terrain-${definition.p.replaceAll('.', '-')}`}>
                    <span>{definition.l}</span>
                    <output>{definition.t === 'text' ? '' : definition.t === 'check' ? ((currentConfig() as unknown as Record<string, Record<string, string | number | boolean>>)[section][key] ? 'on' : 'off') : currentConfig()[section][key]}</output>
                    <input
                      id={`terrain-${definition.p.replaceAll('.', '-')}`}
                      type={definition.t === 'check' ? 'checkbox' : definition.t === 'text' ? 'text' : 'range'}
                      min={definition.min}
                      max={definition.max}
                      step={definition.step}
                      maxLength={definition.max}
                      checked={definition.t === 'check' ? currentConfig()[section][key] : undefined}
                      value={definition.t === 'check' ? undefined : currentConfig()[section][key]}
                      onInput={(event) => {
                        const nextValue = definition.t === 'text' ? event.currentTarget.value : parseFloat(event.currentTarget.value)
                        if (definition.t === 'text' && (typeof nextValue !== 'string' || !nextValue || definition.exact && nextValue.length !== definition.exact)) return
                        if (definition.t !== 'check') setValue(definition.p, nextValue)
                      }}
                      onChange={(event) => definition.t === 'check' && setValue(definition.p, event.currentTarget.checked)}
                    />
                  </label>
                )
              }}</For>
            </>
          )}</For>
        </div>
        <h3>Parameters (JSON)</h3>
        <label class="visually-hidden" for="json">Terrain parameters as JSON</label>
        <textarea id="json" ref={setTextarea} value={json()} spellcheck={false} onInput={(event) => setJson(event.currentTarget.value)} />
        <div class="panel-buttons">
          <button id="copy" type="button" onClick={copySettings}>Copy JSON</button>
          <button id="apply" type="button" onClick={() => {
            try {
              applySettings(JSON.parse(json()))
              say('Applied')
            } catch (error) {
              say(error instanceof SyntaxError ? 'Invalid JSON' : 'Invalid settings')
            }
          }}>Apply JSON</button>
          <button id="rand" type="button" onClick={() => {
            setValue('terrain.seed', 1 + Math.floor(Math.random() * 99))
            say('New seed generated')
          }}>Random seed</button>
          <button id="reset" type="button" onClick={() => {
            applySettings({})
            say('Reset to defaults')
          }}>Reset</button>
        </div>
        <div id="status" role="status" aria-live="polite">{status()}</div>
      </aside>
      </>}
    </>
  )
}

export default Terrain
