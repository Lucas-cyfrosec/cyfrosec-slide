import { useState, useEffect, useCallback } from 'react'
import Slide1 from './components/slide1/Slide1'
import Slide2 from './components/slide2/Slide2'
import Slide3 from './components/slide3/Slide3'
import Slide4 from './components/slide4/Slide4'
import Slide5 from './components/slide5/Slide5'
import Slide6 from './components/slide6/Slide6'
import Slide7 from './components/slide7/Slide7'
import Slide8 from './components/slide8/Slide8'
import Slide9 from './components/slide9/Slide9'
import Slide10 from './components/slide10/Slide10'

const VISIBLE_SLIDES = [
  { value: 1, label: 1 },
  { value: 2, label: 2 },
  { value: 3, label: 3 },
  { value: 4, label: 4 },
  { value: 5, label: 5 },
  { value: 6, label: 6 },
  { value: 7, label: 7 },
  { value: 8, label: 8 },
  { value: 9, label: 9 },
  { value: 10, label: 10 },
]

function fitSlide(fullscreen = false) {
  const vw = fullscreen ? screen.width : window.innerWidth
  const vh = fullscreen ? screen.height : window.innerHeight
  const switcherH = fullscreen ? 0 : 56
  const pad = fullscreen ? 0 : 24
  const scale = Math.min(vw / 1600, (vh - switcherH - pad) / 900)
  const maxScale = fullscreen ? 10 : 1
  document.documentElement.style.setProperty(
    '--scale',
    Math.max(0.05, Math.min(scale, maxScale)).toFixed(4)
  )
}

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(1)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const toggleFullscreen = useCallback(async () => {
    if (!document.fullscreenElement) {
      await document.documentElement.requestFullscreen()
    } else {
      await document.exitFullscreen()
    }
  }, [])

  useEffect(() => {
    function onFullscreenChange() {
      const fs = !!document.fullscreenElement
      setIsFullscreen(fs)
      fitSlide(fs)
      setTimeout(() => fitSlide(fs), 120)
    }
    document.addEventListener('fullscreenchange', onFullscreenChange)
    return () => document.removeEventListener('fullscreenchange', onFullscreenChange)
  }, [])

  useEffect(() => {
    fitSlide(isFullscreen)
    function onResize() { fitSlide(isFullscreen) }
    window.addEventListener('resize', onResize, { passive: true })
    return () => window.removeEventListener('resize', onResize)
  }, [isFullscreen])

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'f' || e.key === 'F') toggleFullscreen()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [toggleFullscreen])

  function renderSlide() {
    if (currentSlide === 1) return <Slide1 />
    if (currentSlide === 2) return <Slide2 />
    if (currentSlide === 3) return <Slide3 />
    if (currentSlide === 4) return <Slide4 />
    if (currentSlide === 5) return <Slide5 />
    if (currentSlide === 6) return <Slide6 />
    if (currentSlide === 7) return <Slide7 />
    if (currentSlide === 8) return <Slide8 />
    if (currentSlide === 9) return <Slide9 />
    if (currentSlide === 10) return <Slide10 />
    return (
      <main id="slide" className="slide is-ready slide-placeholder">
        <div className="placeholder-label">Slide {currentSlide}</div>
      </main>
    )
  }

  function handleFullscreenClick(e) {
    if (!isFullscreen) return
    if (e.clientX > window.innerWidth / 2) {
      setCurrentSlide(s => Math.min(s + 1, VISIBLE_SLIDES.length))
    } else {
      setCurrentSlide(s => Math.max(s - 1, 1))
    }
  }

  function handleFullscreenMouseMove(e) {
    if (!isFullscreen) return
    e.currentTarget.style.cursor = e.clientX > window.innerWidth / 2 ? 'e-resize' : 'w-resize'
  }

  return (
    <div
      className={['app-root', isFullscreen ? 'is-fullscreen' : ''].filter(Boolean).join(' ')}
      onClick={handleFullscreenClick}
      onMouseMove={handleFullscreenMouseMove}
    >
      <div className="scale-shell">
        {renderSlide()}
      </div>

      <nav className="slide-switcher" aria-label="Slide navigation">
        {VISIBLE_SLIDES.map(({ value, label }) => {
          const isActive = currentSlide === value
          return (
            <button
              key={value}
              className={['slide-btn', isActive ? 'is-active' : ''].filter(Boolean).join(' ')}
              onClick={() => setCurrentSlide(value)}
              aria-label={`Slide ${label}`}
              aria-current={isActive ? 'true' : undefined}
            >
              {label}
            </button>
          )
        })}

        <button
          className="slide-btn fullscreen-btn"
          onClick={toggleFullscreen}
          aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
          title={isFullscreen ? 'Exit fullscreen (F)' : 'Fullscreen (F)'}
        >
          {isFullscreen ? (
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <path d="M6 2H2v4M10 2h4v4M6 14H2v-4M10 14h4v-4" />
            </svg>
          ) : (
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <path d="M2 6V2h4M10 2h4v4M14 10v4h-4M6 14H2v-4" />
            </svg>
          )}
        </button>
      </nav>
    </div>
  )
}
