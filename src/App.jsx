import { useState, useEffect } from 'react'
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

function fitSlide() {
  const switcherH = 56  // switcher height + gap
  const pad = 24        // breathing room top + bottom
  const scale = Math.min(
    window.innerWidth / 1600,
    (window.innerHeight - switcherH - pad) / 900
  )
  document.documentElement.style.setProperty(
    '--scale',
    Math.max(0.05, Math.min(scale, 1)).toFixed(4)
  )
}

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(1)

  useEffect(() => {
    fitSlide()
    window.addEventListener('resize', fitSlide, { passive: true })
    return () => window.removeEventListener('resize', fitSlide)
  }, [])

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

  return (
    <div className="app-root">
      <div className="scale-shell">
        {renderSlide()}
      </div>

      <nav className="slide-switcher" aria-label="Slide navigation">
          {VISIBLE_SLIDES.map(({ value, label }) => {
          const isActive = currentSlide === value
          return (
            <button
              key={value}
              className={[
                'slide-btn',
                isActive ? 'is-active' : '',
              ].filter(Boolean).join(' ')}
              onClick={() => setCurrentSlide(value)}
              aria-label={`Slide ${label}`}
              aria-current={isActive ? 'true' : undefined}
            >
              {label}
            </button>
          )
        })}
      </nav>
    </div>
  )
}
