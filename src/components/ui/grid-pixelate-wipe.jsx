import { useEffect, useMemo, useState } from 'react'

function DefaultPanel({ label, color }) {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        background: color,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontFamily:
          'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif',
        fontSize: 96,
        fontWeight: 700,
        letterSpacing: '-0.05em',
      }}
    >
      {label}
    </div>
  )
}

function spiralIndices(cols, rows) {
  const grid = Array.from({ length: rows }, () => Array(cols).fill(0))
  let top = 0
  let bottom = rows - 1
  let left = 0
  let right = cols - 1
  let index = 0

  while (top <= bottom && left <= right) {
    for (let x = left; x <= right; x += 1) grid[top][x] = index++
    top += 1

    for (let y = top; y <= bottom; y += 1) grid[y][right] = index++
    right -= 1

    if (top <= bottom) {
      for (let x = right; x >= left; x -= 1) grid[bottom][x] = index++
      bottom -= 1
    }

    if (left <= right) {
      for (let y = bottom; y >= top; y -= 1) grid[y][left] = index++
      left += 1
    }
  }

  return grid
}

export function GridPixelateWipe({
  from,
  to,
  cols = 12,
  rows = 7,
  pattern = 'wave',
  transitionStart = 500,
  transitionDuration = 1100,
  cellFadeMs = 220,
  className,
}) {
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const raf = requestAnimationFrame(() => setStarted(true))
    return () => cancelAnimationFrame(raf)
  }, [])

  const delays = useMemo(() => {
    const raw = Array.from({ length: rows }, () => Array(cols).fill(0))
    const spiral = pattern === 'spiral' ? spiralIndices(cols, rows) : null

    for (let y = 0; y < rows; y += 1) {
      for (let x = 0; x < cols; x += 1) {
        if (pattern === 'wave') {
          raw[y][x] = Math.hypot(x - (cols - 1) / 2, y - (rows - 1) / 2)
        } else if (pattern === 'diagonal') {
          raw[y][x] = x + y
        } else if (spiral) {
          raw[y][x] = spiral[y][x]
        }
      }
    }

    let min = Infinity
    let max = -Infinity
    for (let y = 0; y < rows; y += 1) {
      for (let x = 0; x < cols; x += 1) {
        if (raw[y][x] < min) min = raw[y][x]
        if (raw[y][x] > max) max = raw[y][x]
      }
    }

    const range = max - min || 1
    const span = Math.max(0, transitionDuration - cellFadeMs)
    const normalized = Array.from({ length: rows }, () => Array(cols).fill(0))

    for (let y = 0; y < rows; y += 1) {
      for (let x = 0; x < cols; x += 1) {
        normalized[y][x] = ((raw[y][x] - min) / range) * span
      }
    }

    return normalized
  }, [cols, rows, pattern, transitionDuration, cellFadeMs])

  const fromContent = from ?? <DefaultPanel label="Scene A" color="#0f172a" />
  const toContent = to ?? <DefaultPanel label="Scene B" color="#ec4899" />

  return (
    <div
      className={className}
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        background: '#020617',
      }}
    >
      <div style={{ position: 'absolute', inset: 0 }}>{toContent}</div>

      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'grid',
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`,
          pointerEvents: 'none',
        }}
      >
        {delays.flatMap((row, y) =>
          row.map((delay, x) => (
            <div
              key={`${x}-${y}`}
              style={{
                background: '#020617',
                opacity: started ? 0 : 1,
                transitionProperty: 'opacity',
                transitionDuration: `${cellFadeMs}ms`,
                transitionTimingFunction: 'ease-out',
                transitionDelay: `${transitionStart + delay}ms`,
              }}
            />
          )),
        )}
      </div>

      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: started ? 0 : 1,
          transition: `opacity 200ms ease-out ${transitionStart}ms`,
        }}
      >
        {fromContent}
      </div>
    </div>
  )
}
